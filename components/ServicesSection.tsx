'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  ImageIcon,
  Clapperboard,
  Wand2,
  Scissors,
  LayoutTemplate,
  Signature,
  SlidersHorizontal,
  MessagesSquare,
  Lightbulb,
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Création de contenu IA',
    description:
      "Conception de contenus originaux pensés et produits avec l'aide de l'intelligence artificielle.",
  },
  {
    icon: ImageIcon,
    title: "Création d'images IA",
    description:
      'Visuels uniques générés et retravaillés pour coller précisément à votre univers.',
  },
  {
    icon: Clapperboard,
    title: 'Création de vidéos IA',
    description:
      "Vidéos courtes ou longues produites grâce aux derniers outils d'IA générative.",
  },
  {
    icon: Wand2,
    title: 'Motion Design',
    description:
      'Animations graphiques dynamiques pour donner vie à votre message.',
  },
  {
    icon: Scissors,
    title: 'Montage vidéo professionnel',
    description:
      'Montage soigné, rythmé et adapté à chaque plateforme de diffusion.',
  },
  {
    icon: LayoutTemplate,
    title: "Création d'affiches",
    description:
      'Affiches percutantes pour vos événements, promotions ou campagnes.',
  },
  {
    icon: Signature,
    title: 'Création de logos',
    description:
      "Identités visuelles fortes, mémorables et fidèles à votre marque.",
  },
  {
    icon: SlidersHorizontal,
    title: 'Retouche photo avec IA',
    description:
      'Correction et sublimation de vos photos avec précision et rapidité.',
  },
  {
    icon: MessagesSquare,
    title: 'Prompt Engineering',
    description:
      "Conception de prompts optimisés pour exploiter tout le potentiel des IA créatives.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10"
    >
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        variants={fadeUp}
        className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric"
      >
        <Lightbulb className="h-3.5 w-3.5" />
        Services
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.1}
        variants={fadeUp}
        className="mt-4 max-w-2xl font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl"
      >
        Des solutions créatives complètes, propulsées par l&apos;IA.
      </motion.h2>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.05 * i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl2 border border-ink/10 bg-white/60 p-6 shadow-sm shadow-ink/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/30 hover:shadow-xl hover:shadow-electric/10"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric/10 blur-2xl transition-transform duration-500 group-hover:scale-150"
              />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-electric/10 text-electric transition-colors duration-300 group-hover:bg-electric group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-4 font-display text-base font-semibold text-ink">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink/65">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        custom={0.5}
        variants={fadeUp}
        className="mt-8 text-sm text-ink/50"
      >
        + Conseil en solutions créatives IA, sur mesure selon votre projet.
      </motion.p>
    </section>
  );
    }
