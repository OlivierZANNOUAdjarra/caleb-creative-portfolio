'use client';
import AboutSection from '@/components/AboutSection';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = '22901481395395';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <main className="relative">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 py-24 text-center sm:px-10 lg:flex-row lg:justify-between lg:text-left">
        {/* Texte */}
        <div className="max-w-2xl">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/5 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Caleb Creative
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.15}
            variants={fadeUp}
            className="mt-6 font-display text-3xl font-semibold leading-tight text-balance text-ink sm:text-4xl lg:text-5xl"
          >
            Images, vidéos, design et innovation&nbsp;: je transforme vos idées
            en réalisations d&apos;exception grâce à l&apos;intelligence
            artificielle.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="mt-5 font-display text-lg italic text-electric sm:text-xl"
          >
            La seule limite est votre imagination.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-start"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-body text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/20"
            >
              Voir mes réalisations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3.5 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:border-electric/40 hover:text-electric"
            >
              <MessageCircle className="h-4 w-4" />
              Me contacter sur WhatsApp
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-medium text-ink/70 underline-offset-4 transition-colors hover:text-electric hover:underline"
            >
              Me contacter
            </a>
          </motion.div>
        </div>

        {/* Photo professionnelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-64 w-64 shrink-0 sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        >
          <div className="absolute inset-0 -z-10 animate-float rounded-full bg-gradient-to-br from-electric/30 via-signal/20 to-glow/20 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-xl2 border border-white/40 shadow-2xl shadow-ink/10">
            <Image
              src="/caleb-photo.jpg"
              alt="Caleb Jesugnon AGBAKOU, fondateur de Caleb Creative"
              fill
              priority
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>
      <AboutSection />
      {/* ── BOUTON WHATSAPP FLOTTANT ─────────────────────────────────── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Caleb Creative sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}
