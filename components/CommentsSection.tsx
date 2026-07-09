'use client';

import { useEffect, useState } from 'react';
import { getApprovedComments, Comment } from '@/app/actions/comments';
import CommentForm from '@/components/CommentForm';
import { MessageSquareText } from 'lucide-react';

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // Charge les commentaires après le premier rendu pour éviter de bloquer la build
    getApprovedComments().then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <section id="commentaires" className="relative mx-auto max-w-3xl px-6 py-24 sm:px-10">
      <p className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric">
        <MessageSquareText className="h-3.5 w-3.5" />
        Commentaires
      </p>

      <h2 className="mt-4 font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl dark:text-paper">
        Ce qu&apos;en disent les visiteurs.
      </h2>

      <div className="mt-10">
        <CommentForm />
      </div>

      <div className="mt-10 space-y-4">
        {comments.length === 0 ? (
          <p className="text-sm text-ink/50 dark:text-paper/50">
            Aucun commentaire pour le moment. Soyez le premier !
          </p>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              className="rounded-xl border border-ink/10 bg-white/60 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <p className="font-display text-sm font-semibold text-ink dark:text-paper">{c.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">{c.content}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
