'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

// Connexion automatique via ta variable d'environnement Vercel
const sql = neon(process.env.DATABASE_URL!);

export type Comment = {
  id: string;
  name: string;
  email: string;
  content: string;
  approved: boolean;
  created_at: string;
};

/**
 * Soumettre un nouveau commentaire
 */
export async function submitComment(formData: FormData): Promise<{ success: boolean; message: string }> {
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const content = String(formData.get('content') || '').trim();

  if (!name || !content) {
    return { success: false, message: 'Champs requis manquants.' };
  }

  try {
    await sql`
      INSERT INTO comments (name, email, content, approved)
      VALUES (${name}, ${email}, ${content}, false)
    `;
    return { success: true, message: 'Votre commentaire est en attente de modération.' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Impossible de soumettre le commentaire.' };
  }
}

/**
 * Récupérer les commentaires validés (pour le public)
 */
export async function getApprovedComments(): Promise<Comment[]> {
  try {
    const data = await sql`
      SELECT * FROM comments 
      WHERE approved = true 
      ORDER BY created_at DESC
    `;
    return data as Comment[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Récupérer TOUS les commentaires (pour ton Dashboard)
 */
export async function getAllComments(): Promise<Comment[]> {
  try {
    const data = await sql`
      SELECT * FROM comments 
      ORDER BY created_at DESC
    `;
    return data as Comment[]; // Corrigé : garantit un tableau pour éviter l'erreur .filter()
  } catch (error) {
    console.error(error);
    return []; // En cas de bug, renvoie un tableau vide pour ne pas crasher l'admin
  }
}

/**
 * Approuver un commentaire
 */
export async function approveComment(commentId: string): Promise<{ success: boolean }> {
  try {
    await sql`
      UPDATE comments 
      SET approved = true 
      WHERE id = ${commentId}
    `;
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

/**
 * Supprimer un commentaire
 */
export async function deleteComment(commentId: string): Promise<{ success: boolean }> {
  try {
    await sql`
      DELETE FROM comments 
      WHERE id = ${commentId}
    `;
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
