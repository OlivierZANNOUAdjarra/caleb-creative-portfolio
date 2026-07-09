'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, Target } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const audiences = ['Particuliers', 'Entreprises', 'Organisations'];

export default function AboutSection() {
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
        À propos
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.1}
        variants={fadeUp}
        className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl"
      >
        Passionné par la création visuelle, augmenté par l&apos;intelligence
        artificielle.
      </motion.h2>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
          className="space-y-5 font-body text-base leading-relaxed text-ink/75 sm:text-lg"
        >
          <p>
            Depuis près de deux ans, <strong className="text-ink">Caleb
            Jesugnon AGBAKOU</strong> met la puissance de l&apos;intelligence
            artificielle au service de la créativité, pour transformer les
            idées en réalisations concrètes — qu&apos;il s&apos;agisse
            d&apos;images, de vidéos, de designs ou d&apos;identités
            visuelles.
          </p>
          <p>
            Créatif, innovant et attentif aux détails, il accompagne
            particuliers, entreprises et organisations dans la conception de
            contenus visuels uniques.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          variants={fadeUp}
          className="flex flex-col gap-5 rounded-xl2 border border-ink/10 bg-white/60 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <Target className="mt-1 h-5 w-5 shrink-0 text-electric" />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                Mission
              </p>
              <p className="mt-1 text-sm text-ink/70">
                Transformer les idées en réalisations visuelles
                d&apos;exception.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-ink/10 pt-5">
            <Users className="mt-1 h-5 w-5 shrink-0 text-signal" />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                Accompagne
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal"
                  >
                    {a}
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
