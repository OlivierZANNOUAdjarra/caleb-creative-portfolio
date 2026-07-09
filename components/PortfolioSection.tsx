'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ImageIcon } from 'lucide-react';

const categories = [
  'Tout',
  'Images IA',
  'Vidéos IA',
  'Publicités',
  'Motion Design',
  'Logos',
  'Affiches',
  'Retouches photo',
] as const;

type Category = (typeof categories)[number];

// Données de démonstration — à remplacer par le vrai contenu (dashboard + Vercel Blob)
const demoProjects: {
  id: string;
  title: string;
  category: Exclude<Category, 'Tout'>;
  description: string;
  gradient: string;
}[] = [
  { id: '1', title: 'Campagne Aurora', category: 'Images IA', description: 'Série visuelle pour un lancement de marque.', gradient: 'from-electric/30 to-signal/30' },
  { id: '2', title: 'Teaser produit', category: 'Vidéos IA', description: 'Vidéo courte générée pour les réseaux sociaux.', gradient: 'from-signal/30 to-glow/30' },
  { id: '3', title: 'Affiche événement', category: 'Affiches', description: "Affiche promotionnelle pour un événement local.", gradient: 'from-glow/30 to-electric/30' },
  { id: '4', title: 'Logo Nova Studio', category: 'Logos', description: "Identité visuelle complète d'un studio créatif.", gradient: 'from-electric/30 to-glow/30' },
  { id: '5', title: 'Motion intro', category: 'Motion Design', description: "Animation d'introduction pour une chaîne vidéo.", gradient: 'from-signal/30 to-electric/30' },
  { id: '6', title: 'Retouche portrait', category: 'Retouches photo', description: 'Sublimation et correction de portrait.', gradient: 'from-glow/30 to-signal/30' },
  { id: '7', title: 'Pub réseaux sociaux', category: 'Publicités', description: 'Visuel publicitaire pour campagne digitale.', gradient: 'from-electric/30 to-signal/30' },
];

export default function PortfolioSection() {
  const [active, setActive] = useState<Category>('Tout');
  const [selected, setSelected] = useState<(typeof demoProjects)[number] | null>(null);

  const filtered =
    active === 'Tout'
      ? demoProjects
      : demoProjects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <p className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric">
        <ImageIcon className="h-3.5 w-3.5" />
        Portfolio
      </p>

      <h2 className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl">
        Quelques réalisations récentes.
      </h2>

      {/* Filtres */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-ink text-paper'
                : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(project)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl2 border border-ink/10 text-left shadow-sm shadow-ink/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                  {project.category}
                </p>
                <p className="mt-1 font-display text-base font-semibold text-white">
                  {project.title}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal plein écran */}
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
              className="relative w-full max-w-2xl overflow-hidden rounded-xl2 bg-paper"
            >
              <div className={`aspect-video bg-gradient-to-br ${selected.gradient}`} />
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-electric">
                  {selected.category}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                  {selected.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{selected.description}</p>
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
    </section>
  );
    }
