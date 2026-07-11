import { getPublishedProjects, CATEGORY_OPTIONS } from '@/app/actions/projects';
import PortfolioGrid from '@/components/PortfolioGrid';
import { ImageIcon } from 'lucide-react';

export default async function PortfolioSection() {
  const projects = await getPublishedProjects();
  const allLabel = 'Tout';
  const categories = [allLabel, ...CATEGORY_OPTIONS];

  return (
    <section
      id="portfolio"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10"
      style={{ perspective: '900px' }}
    >
      <p className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric">
        <ImageIcon className="h-3.5 w-3.5" />
        Portfolio
      </p>

      <h2 className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl dark:text-paper">
        Quelques réalisations récentes.
      </h2>

      <PortfolioGrid projects={projects} categories={categories} allLabel={allLabel} />
    </section>
  );
}