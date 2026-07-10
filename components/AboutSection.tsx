'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import Image from 'next/image'; // Importation du composant Image de Next.js

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section
      id="a-propos"
      className="relative mx-auto max-w-5xl px-6 py-24 sm:px-10"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        variants={fadeUp}
        className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric"
      >
        <Sparkles className="h-3.5 w-3.5" />
        {a.badge}
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.1}
        variants={fadeUp}
        className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl dark:text-paper"
      >
        {a.title}
      </motion.h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
          className="space-y-5 font-body text-base leading-relaxed text-ink/75 sm:text-lg dark:text-paper/75"
        >
          <p>{a.paragraph1}</p>
          <p>{a.paragraph2}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          variants={fadeUp}
          className="flex flex-col gap-5 rounded-xl2 border border-ink/10 bg-white/60 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex items-start gap-3">
            {/* Conteneur circulaire, ajusté à h-11 w-11 pour être un peu plus gros et bien visible */}
            <div className="mt-0.5 h-11 w-11 shrink-0 overflow-hidden rounded-full border border-ink/5 bg-white shadow-sm dark:border-white/10 dark:bg-white/5 flex items-center justify-center relative">
              <Image 
                src="/mission-target.png" 
                alt="Mission Target" 
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink dark:text-paper">
                {a.missionLabel}
              </p>
              <p className="mt-1 text-sm text-ink/70 dark:text-paper/70">
                {a.missionText}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-ink/10 pt-5 dark:border-white/10">
            <Users className="mt-1 h-5 w-5 shrink-0 text-signal" />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink dark:text-paper">
                {a.audienceLabel}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {a.audiences.map((aud) => (
                  <span
                    key={aud}
                    className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal"
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
