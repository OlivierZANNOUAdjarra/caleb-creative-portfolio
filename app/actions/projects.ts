'use server';

import { sql } from '@/lib/db';
import { put, del } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/auth';

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  media_type: 'image' | 'video';
  media_url: string;
  published: boolean;
  created_at: string;
};

function assertAdmin() {
  const token = cookies().get('cc_session')?.value;
  if (!verifySessionToken(token)) {
    throw new Error('Non autorisé.');
  }
}

export async function getPublishedProjects(): Promise<Project[]> {
  const rows = await sql`
    SELECT id, title, description, category, media_type, media_url, published, created_at
    FROM projects
    WHERE published = TRUE
    ORDER BY created_at DESC
  `;
  return rows as Project[];
}

export async function getAllProjects(): Promise<Project[]> {
  assertAdmin();
  const rows = await sql`
    SELECT id, title, description, category, media_type, media_url, published, created_at
    FROM projects
    ORDER BY created_at DESC
  `;
  return rows as Project[];
}

export async function createProject(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  assertAdmin();

  const title = String(formData.get('title') || '').trim();
  const description = String(formData.get('description') || '').trim();
  const category = String(formData.get('category') || '').trim();
  const file = formData.get('media') as File | null;

  if (!title || !category || !file || file.size === 0) {
    return { success: false, message: 'Merci de remplir tous les champs et choisir un fichier.' };
  }

  if (file.size > 25 * 1024 * 1024) {
    return { success: false, message: 'Fichier trop lourd (max 25 Mo).' };
  }

  const mediaType: 'image' | 'video' = file.type.startsWith('video/') ? 'video' : 'image';

  try {
    const blob = await put(`portfolio/${Date.now()}-${file.name}`, file, {
      access: 'public',
    });

    await sql`
      INSERT INTO projects (title, description, category, media_type, media_url, published)
      VALUES (${title}, ${description}, ${category}, ${mediaType}, ${blob.url}, TRUE)
    `;

    revalidatePath('/');
    revalidatePath('/dashboard');
    return { success: true, message: 'Projet ajouté avec succès !' };
  } catch (error) {
    return { success: false, message: "Erreur lors de l'ajout du projet." };
  }
}

export async function deleteProject(id: number, mediaUrl: string): Promise<void> {
  assertAdmin();
  try {
    await del(mediaUrl);
  } catch {
    // le fichier a peut-être déjà été supprimé, on continue quand même
  }
  await sql`DELETE FROM projects WHERE id = ${id}`;
  revalidatePath('/');
  revalidatePath('/dashboard');
}

export async function toggleProjectPublished(id: number, published: boolean): Promise<void> {
  assertAdmin();
  await sql`UPDATE projects SET published = ${published} WHERE id = ${id}`;
  revalidatePath('/');
  revalidatePath('/dashboard');
}