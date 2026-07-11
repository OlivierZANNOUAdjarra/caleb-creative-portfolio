'use client';

import { motion } from 'framer-motion';
import { Sparkles, MoveUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

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

        {/* Cadre avec brillance orange au bord pour attirer l'attention */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          variants={fadeUp}
          className="flex flex-col gap-5 overflow-hidden rounded-xl2 border border-amber-500/30 bg-white/40 p-6 shadow-[0_0_15px_rgba(245,158,11,0.1)] backdrop-blur-sm dark:border-amber-500/20 dark:bg-white/5"
        >
          {/* Carte Mission : dégradés radiaux teal + violet */}
          <div className="relative -m-6 mb-0 overflow-hidden p-6">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'radial-gradient(120% 140% at 0% 0%, rgba(14,163,148,0.14), transparent 55%), radial-gradient(120% 140% at 100% 0%, rgba(124,58,237,0.12), transparent 55%)',
              }}
            />
            {/* Liseré vertical multicolore à gauche */}
            <div
              aria-hidden
              className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-electric via-signal to-glow"
            />
            
            <div className="flex items-start gap-3.5">
              <div className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                {/* Icône Cible Flaticon 4887265 */}
                <svg 
                  className="h-5 w-5 fill-red-500" 
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path d="M256,0C114.84,0,0,114.84,0,256s114.84,256,256,256,256-114.84,256-256S397.16,0,256,0Zm0,469.33c-117.63,0-213.33-95.7-213.33-213.33S138.37,42.67,256,42.67,469.33,138.37,469.33,256,373.63,469.33,256,469.33Zm0-362.67c-82.3,0-149.33,67.03-149.33,149.33S173.7,405.33,256,405.33,405.33,338.3,405.33,256,338.3,106.67,256,106.67Zm0,256c-58.82,0-106.67-47.85-106.67-106.67S197.18,149.33,256,149.33,362.67,197.18,362.67,256,314.82,362.67,256,362.67Zm0-170.67c-35.29,0-64,28.71-64,64s28.71,64,64,64,64-28.71,64-64-28.71-64-64-64Z"/>
                </svg>
                <MoveUpRight className="absolute -right-1 -top-1 h-3.5 w-3.5 text-red-500" strokeWidth={3} />
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
          </div>

          {/* Section Accompagne (Audience) */}
          <div className="flex items-start gap-3.5 border-t border-ink/10 pt-5 dark:border-white/10">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal/10">
              {/* Icône Silhouette Utilisateurs Multiples Flaticon 33308 */}
              <svg 
                className="h-5 w-5 fill-signal" 
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M16 15.5c3.033 0 5.5-2.467 5.5-5.5S19.033 4.5 16 4.5 10.5 6.967 10.5 10s2.467 5.5 5.5 5.5zm0-9c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5zm7.5 12c-1.154 0-2.236.332-3.167.904A7.447 7.447 0 0016 17.5c-1.636 0-3.136.533-4.35 1.433-.912-.556-1.977-.883-3.117-.883C3.813 18.05 0 21.863 0 26.55v.95h11h10h11v-.95c0-4.688-3.813-8.5-8.5-8.5zM2 25.5c0-3.584 2.916-6.5 6.5-6.5.918 0 1.78.197 2.563.538A7.433 7.433 0 0010.1 23H2v2.5zm19 0H12.1a5.467 5.467 0 01-.1-1c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5c0 .343-.037.676-.1 1H21zm9 0h-6.1a7.433 7.433 0 00-.963-3.462c.783-.34 1.645-.538 2.563-.538 3.584 0 6.5 2.916 6.5 6.5v.5zM7.5 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm17 6c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"/>
              </svg>
            </div>
            <div className="flex-1">
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
