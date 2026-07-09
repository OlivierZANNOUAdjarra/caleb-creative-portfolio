'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export type Comment = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export async function getApprovedComments(): Promise<Comment[]> {
  const rows = await sql`
    SELECT id, name, message, created_at
    FROM comments
    WHERE approved = TRUE
    ORDER BY created_at DESC
    LIMIT 20
  `;
  return rows as Comment[];
}

export async function submitComment(
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const name = String(formData.get('name') || '').trim();
  const message = String(formData.get('message') || '').trim();

  // Anti-spam basique
  const honeypot = String(formData.get('company') || '').trim();
  if (honeypot) {
    return { success: true, message: 'Merci pour votre commentaire.' };
  }

  if (!name || !message) {
    return { success: false, message: 'Merci de remplir tous les champs.' };
  }

  if (name.length > 80 || message.length > 500) {
    return { success: false, message: 'Texte trop long.' };
  }

  try {
    await sql`
      INSERT INTO comments (name, message, approved)
      VALUES (${name}, ${message}, FALSE)
    `;
    revalidatePath('/');
    return {
      success: true,
      message: 'Merci ! Votre commentaire sera visible après validation.',
    };
  } catch (error) {
    return { success: false, message: 'Une erreur est survenue.' };
  }
}
