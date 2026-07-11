'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Wrench, Cpu } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import FloatingToolIcons from '@/components/FloatingToolIcons';

// Correspondance stricte : Nom de l'outil -> Nom exact du fichier dans le dossier public
const TOOL_IMAGES: Record<string, string> = {
  // Logiciels
  'CapCut': 'capcut.png',
  
  // Intelligences Artificielles
  'OpenAI': 'openai.png',
  'Midjourney': 'midjourney.png',
  'Flux': 'flux.png',
  'Kling': 'kling.png',
  'Runway': 'runway.png',
  'Gemini': 'gemini.png',
  'Ideogram': 'ideogram.png',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ToolCard({ name, delay }: { name: string; delay: number }) {
  // On récupère le nom du fichier image associé à l'outil
  const imageFileName = TOOL_IMAGES[name];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      custom={delay}
      variants={fadeUp}
      className="group relative z-10 flex flex-col items-center gap-3 rounded-xl2 border border-ink/10 bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/30 hover:shadow-lg hover:shadow-electric/10 dark:border-white/10 dark:bg-white/5"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        {imageFileName ? (
          <Image
            src={`/${imageFileName}`}
            alt={name}
            width={40}
            height={40}
            className="object-contain"
            loading="lazy"
          />
        ) : (
          /* Lettre par défaut si l'image n'est pas trouvée dans la liste au-dessus */
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-signal font-display text-sm font-bold text-white">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-xs font-medium text-ink/70 dark:text-paper/70">{name}</span>
    </motion.div>
  );
}

export default function ToolsSection() {
  const { t } = useLanguage();
  const tl = t.tools;

  return (
    <section id="outils" className="relative mx-auto max-w-5xl overflow-hidden px-6 py-24 sm:px-10">
      <FloatingToolIcons />

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        variants={fadeUp}
        className="relative z-10 inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric"
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
        className="relative z-10 mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl dark:text-paper"
      >
        {tl.title}
      </motion.h2>

      <div className="relative z-10 mt-12 space-y-12">
        {/* Grille des Logiciels */}
        <div>
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-ink/60 dark:text-paper/60">
            {tl.softwareLabel}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {tl.software.map((name, i) => (
              <ToolCard key={name} name={name} delay={0.05 * i} />
            ))}
          </div>
        </div>

        {/* Grille des IA */}
        <div>
          <p className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink/60 dark:text-paper/60">
            <Cpu className="h-4 w-4" />
            {tl.aiLabel}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {tl.aiTools.map((name, i) => (
              <ToolCard key={name} name={name} delay={0.05 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
