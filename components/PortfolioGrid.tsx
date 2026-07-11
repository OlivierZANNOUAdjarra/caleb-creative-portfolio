'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '@/app/actions/projects';

function TiltCard({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState('');

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTransform(`translateY(-4px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`);
  }

  function handleMouseLeave() {
    setTransform('');
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: transform ? 'none' : 'transform .4s cubic-bezier(.16,.8,.24,1)' }}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl2 border border-ink/10 text-left shadow-sm shadow-ink/5 will-change-transform dark:border-white/10"
    >
      {children}
    </button>
  );
}

function ProjectThumb({ project }: { project: Project }) {
  if (project.media_type === 'video') {
    return (
      <video
        src={project.media_url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.media_url}
      alt={project.title}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
}

export default function PortfolioGrid({
  projects,
  categories,
  allLabel,
}: {
  projects: Project[];
  categories: readonly string[];
  allLabel: string;
}) {
  const [active, setActive] = useState<string>(allLabel);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === allLabel ? projects : projects.filter((p) => p.category === active);

  if (projects.length === 0) {
    return (
      <p className="mt-10 text-sm text-ink/50 dark:text-paper/50">
        Les réalisations arrivent très bientôt — revenez vite !
      </p>
    );
  }

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-ink text-paper dark:bg-electric'
                : 'bg-ink/5 text-ink/70 hover:bg-ink/10 dark:bg-white/5 dark:text-paper/70 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <TiltCard onClick={() => setSelected(project)}>
                <ProjectThumb project={project} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                    {project.category}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-white">
                    {project.title}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-xl2 bg-paper dark:bg-[#111827]"
            >
              <div className="relative aspect-video bg-ink/5">
                {selected.media_type === 'video' ? (
                  <video
                    src={selected.media_url}
                    controls
                    autoPlay
                    className="h-full w-full object-cover"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selected.media_url}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-electric">
                  {selected.category}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink dark:text-paper">
                  {selected.title}
                </h3>
                {selected.description && (
                  <p className="mt-2 text-sm text-ink/70 dark:text-paper/70">
                    {selected.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-white transition-colors hover:bg-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}