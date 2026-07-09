'use client';

import { motion } from 'framer-motion';
import { Wrench, Cpu } from 'lucide-react';

const software = [
  'Adobe Photoshop',
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'CapCut',
  'Canva',
];

const aiTools = [
  'ChatGPT',
  'Midjourney',
  'Flux',
  'Kling AI',
  'Runway',
  'Veo',
  'Leonardo AI',
  'Gemini',
  'Ideogram',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function BadgeGroup({
  items,
  accent,
}: {
  items: string[];
  accent: 'electric' | 'signal';
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((tool, i) => (
        <motion.span
          key={tool}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.03 * i}
          variants={fadeUp}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            accent === 'electric'
              ? 'border-electric/20 bg-electric/5 text-electric hover:bg-electric/10'
              : 'border-signal/20 bg-signal/5 text-signal hover:bg-signal/10'
          }`}
        >
          {tool}
        </motion.span>
      ))}
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section id="outils" className="relative mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        variants={fadeUp}
        className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric"
      >
        <Wrench className="h-3.5 w-3.5" />
        Outils maîtrisés
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.1}
        variants={fadeUp}
        className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl"
      >
        Un savoir-faire technique, augmenté par l&apos;IA.
      </motion.h2>

      <div className="mt-12 space-y-10">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
            Logiciels
          </p>
          <BadgeGroup items={software} accent="electric" />
        </div>

        <div>
          <p className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink/60">
            <Cpu className="h-4 w-4" />
            Intelligence artificielle
          </p>
          <BadgeGroup items={aiTools} accent="signal" />
        </div>
      </div>
    </section>
  );
}
