'use client';

import { useState, useTransition, useRef } from 'react';
import { createProject } from '@/app/actions/projects';
import { CATEGORY_OPTIONS } from '@/lib/categories';
import { Upload, CheckCircle2 } from 'lucide-react';

export default function DashboardProjectForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await createProject(formData);
      setResult(res);
      if (res.success) formRef.current?.reset();
    });
  }

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="space-y-4 rounded-xl2 border border-ink/10 bg-white/60 p-6"
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Titre</label>
        <input
          name="title"
          type="text"
          required
          className="w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-electric"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Description (optionnel)</label>
        <textarea
          name="description"
          rows={3}
          className="w-full resize-none rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-electric"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Catégorie</label>
        <select
          name="category"
          required
          className="w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none focus:border-electric"
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Photo ou vidéo</label>
        <input
          name="media"
          type="file"
          accept="image/*,video/*"
          required
          className="w-full rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm outline-none file:mr-3 file:rounded-full file:border-0 file:bg-electric file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white"
        />
        <p className="mt-1 text-xs text-ink/40">Max 25 Mo. Formats image ou vidéo courants acceptés.</p>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isPending ? 'Envoi en cours...' : 'Ajouter le projet'}
        <Upload className="h-4 w-4" />
      </button>

      {result && (
        <p className={`flex items-center gap-2 text-sm ${result.success ? 'text-emerald-600' : 'text-red-600'}`}>
          {result.success && <CheckCircle2 className="h-4 w-4" />}
          {result.message}
        </p>
      )}
    </form>
  );
}