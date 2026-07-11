import { getAllComments } from '@/app/actions/comments';
import { getAllProjects } from '@/app/actions/projects';
import { logout } from '@/app/actions/auth';
import DashboardCommentRow from '@/components/DashboardCommentRow';
import DashboardProjectForm from '@/components/DashboardProjectForm';
import DashboardProjectRow from '@/components/DashboardProjectRow';
import { LogOut, LayoutDashboard } from 'lucide-react';

export default async function DashboardPage() {
  const comments = await getAllComments();
  const projects = await getAllProjects();
  const pending = comments.filter((c) => !c.approved);
  const approved = comments.filter((c) => c.approved);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LayoutDashboard className="h-6 w-6 text-electric" />
          <h1 className="font-display text-xl font-semibold text-ink">
            Dashboard — Caleb Creative
          </h1>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-red-300 hover:text-red-600"
          >
            <LogOut className="h-4 w-4" />
            Déconnexion
          </button>
        </form>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
          Ajouter une réalisation
        </h2>
        <div className="mt-4">
          <DashboardProjectForm />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
          Réalisations en ligne ({projects.length})
        </h2>
        <div className="mt-4 space-y-3">
          {projects.length === 0 ? (
            <p className="text-sm text-ink/40">Aucune réalisation ajoutée pour le moment.</p>
          ) : (
            projects.map((p) => <DashboardProjectRow key={p.id} project={p} />)
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
          Commentaires en attente ({pending.length})
        </h2>
        <div className="mt-4 space-y-3">
          {pending.length === 0 ? (
            <p className="text-sm text-ink/40">Rien à valider pour le moment.</p>
          ) : (
            pending.map((c) => <DashboardCommentRow key={c.id} comment={c} />)
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
          Commentaires publiés ({approved.length})
        </h2>
        <div className="mt-4 space-y-3">
          {approved.length === 0 ? (
            <p className="text-sm text-ink/40">Aucun commentaire publié.</p>
          ) : (
            approved.map((c) => <DashboardCommentRow key={c.id} comment={c} />)
          )}
        </div>
      </section>
    </main>
  );
}