'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const SOFTWARE_SLUGS = ['photoshop', 'premiere', 'after-effects', 'capcut', 'canva'];
const AI_SLUGS = ['chatgpt', 'midjourney', 'flux', 'kling', 'runway', 'veo', 'leonardo', 'gemini', 'ideogram'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function LogoGrid({ names, slugs }: { names: readonly string[]; slugs: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {names.map((name, i) => (
        <motion.div
          key={name}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          custom={0.05 * i}
          variants={fadeUp}
          className="group flex flex-col items-center gap-3 rounded-xl2 border border-ink/10 bg-white/60 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 dark:border-white/10 dark:bg-white/5"
        >
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src={`/logos/${slugs[i]}.png`}
              alt={name}
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <span className="text-xs font-medium text-ink/70 dark:text-paper/70">{name}</span>
        </motion.div>
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
          <LogoGrid names={tl.software} slugs={SOFTWARE_SLUGS} />
        </div>

        <div>
          <p className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink/60 dark:text-paper/60">
            <Cpu className="h-4 w-4" />
            {tl.aiLabel}
          </p>
          <LogoGrid names={tl.aiTools} slugs={AI_SLUGS} />
        </div>
      </div>
    </section>
  );
}