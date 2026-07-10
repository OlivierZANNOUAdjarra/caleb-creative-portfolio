'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useTypewriter } from '@/lib/useTypewriter';
import WhatsAppIcon from '@/components/WhatsAppIcon';

const WHATSAPP_NUMBER = '2290148135395';
const WHATSAPP_MESSAGE =
  "Bonjour Caleb ! Je découvre votre portfolio Caleb Creative et j'aimerais échanger sur un projet.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const { t } = useLanguage();
  const typedTitle = useTypewriter(t.hero.title, 22);
  const isTypingDone = typedTitle.length === t.hero.title.length;

  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10">
        {/* Image de fond */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/caleb-photo.jpg"
            alt="Caleb Jesugnon AGBAKOU, fondateur de Caleb Creative"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Voile pour lisibilité */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90" />
        <div className="absolute inset-0 -z-10 bg-aurora-gradient opacity-60" />

        <div className="mx-auto max-w-3xl">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.2em] text-glow backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </motion.p>

          <h1 className="mt-6 min-h-[7rem] font-display text-2xl font-semibold leading-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {typedTitle}
            <span
              aria-hidden
              className={`ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-1 bg-glow ${
                isTypingDone ? 'animate-pulse' : ''
              }`}
            />
          </h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.3}
            variants={fadeUp}
            className="mt-5 font-display text-lg italic text-glow sm:text-xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-body text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20"
            >
              {t.hero.ctaPortfolio}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-body text-sm font-medium text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.hero.ctaWhatsapp}
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-glow hover:underline"
            >
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── BOUTON WHATSAPP FLOTTANT ─────────────────────────────────── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Caleb Creative sur WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}