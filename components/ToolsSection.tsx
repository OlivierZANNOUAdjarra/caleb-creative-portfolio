'use client';

import { motion } from 'framer-motion';
import { Wrench, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

// slug LobeHub (logo réel) ou null (badge avec initiale à la place)
const SOFTWARE_LOGOS: (string | null)[] = [null, null, null, 'capcut', null];
const AI_LOGOS: (string | null)[] = [
  'openai', // ChatGPT
  'midjourney',
  'flux',
  'kling',
  'runway',
  null, // Veo
  null, // Leonardo AI
  'geminicli', // Gemini
  'ideogram',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ToolCard({
  name,
  logoSlug,
  delay,
}: {
  name: string;
  logoSlug: string | null;
  delay: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
      variants={fadeUp}
      className="group flex flex-col items-center gap-3 rounded-xl2 border border-ink/10 bg-white/60 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center">
        {logoSlug ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://unpkg.com/@lobehub/icons-static-svg@latest/icons/${logoSlug}.svg`}
            alt={name}
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-signal font-display text-sm font-bold text-white">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-ink/70 dark:text-paper/70">{name}</span>
    </motion.div>
  );
}

function ToolGrid({ names, logos }: { names: readonly string[]; logos: (string | null)[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {names.map((name, i) => (
        <ToolCard key={name} name={name} logoSlug={logos[i]} delay={0.05 * i} />
      ))}
    </div>
  );
}

export default function ToolsSection() {
  const { t } = useLanguage();
  const tl = t.tools;

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
        {tl.badge}
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.1}
        variants={fadeUp}
        className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl dark:text-paper"
      >
        {tl.title}
      </motion.h2>

      <div className="mt-12 space-y-12">
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-ink/60 dark:text-paper/60">
            {tl.softwareLabel}
          </p>
          <ToolGrid names={tl.software} logos={SOFTWARE_LOGOS} />
        </div>

        <div>
          <p className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink/60 dark:text-paper/60">
            <Cpu className="h-4 w-4" />
            {tl.aiLabel}
          </p>
          <ToolGrid names={tl.aiTools} logos={AI_LOGOS} />
        </div>
      </div>
    </section>
  );
}