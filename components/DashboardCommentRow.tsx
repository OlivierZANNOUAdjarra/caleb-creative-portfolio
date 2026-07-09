'use client';

import { useTransition } from 'react';
import { Comment, approveComment, deleteComment } from '@/app/actions/comments';

interface DashboardCommentRowProps {
  comment: Comment;
}

export default function DashboardCommentRow({ comment }: DashboardCommentRowProps) {
  const [isPending, startTransition] = useTransition();

  const handleApprove = () => {
    startTransition(async () => {
      await approveComment(comment.id);
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      await deleteComment(comment.id);
    });
  };

  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-ink/10 bg-white/60 p-4">
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold text-ink">{comment.name}</p>
        <p className="mt-1 text-sm text-ink/70">{comment.content}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        {!comment.approved && (
          <button
            onClick={handleApprove}
            disabled={isPending}
            className="rounded-lg bg-ink px-3 py-1 text-xs font-medium text-white transition hover:bg-ink/80 disabled:opacity-50"
          >
            Approuver
          </button>
        )}
        <button
          onClick={handleDelete}
          disabled={isPending}
          className="rounded-lg border border-red-200 px-3 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
