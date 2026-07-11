'use client';

import { useTransition } from 'react';
import { deleteProject, type Project } from '@/app/actions/projects';
import { Trash2, ImageIcon, Video } from 'lucide-react';

export default function DashboardProjectRow({ project }: { project: Project }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!confirm(`Supprimer "${project.title}" ? Cette action est définitive.`)) return;
    startTransition(() => deleteProject(project.id, project.media_url));
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl2 border border-ink/10 bg-white/60 p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink/5 text-ink/60">
          {project.media_type === 'video' ? <Video className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-ink">{project.title}</p>
          <p className="truncate text-xs text-ink/50">{project.category}</p>
        </div>
      </div>
      <button
        disabled={isPending}
        onClick={handleDelete}
        aria-label="Supprimer"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 transition-colors hover:bg-red-200 disabled:opacity-50"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}