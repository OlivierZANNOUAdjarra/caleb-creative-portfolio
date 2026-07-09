'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Quels services proposez-vous ?',
    answer:
      "Création de contenu, d'images et de vidéos IA, motion design, montage vidéo professionnel, création d'affiches et de logos, retouche photo avec IA, prompt engineering, ainsi que du conseil en solutions créatives IA.",
  },
  {
    question: 'Combien de temps dure un projet ?',
    answer:
      'La durée varie selon la nature et la complexité du projet. Elle est définie ensemble dès le premier échange, pour respecter vos délais.',
  },
  {
    question: 'Travaillez-vous à distance ?',
    answer:
      'Oui, tous les projets peuvent être menés entièrement à distance, où que vous soyez.',
  },
  {
    question: 'Comment passer commande ?',
    answer:
      "Il suffit de me contacter via WhatsApp, le formulaire de contact ou par email pour décrire votre besoin. Je reviens rapidement vers vous avec une proposition adaptée.",
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer:
      'Les moyens de paiement disponibles (Mobile Money, virement, espèces...) vous seront précisés lors de la mise en place de votre commande.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl px-6 py-24 sm:px-10">
      <p className="inline-flex items-center gap-2 font-display text-xs font-medium uppercase tracking-[0.2em] text-electric">
        <HelpCircle className="h-3.5 w-3.5" />
        FAQ
      </p>

      <h2 className="mt-4 font-display text-2xl font-semibold text-balance text-ink sm:text-3xl lg:text-4xl">
        Questions fréquentes.
      </h2>

      <div className="mt-10 divide-y divide-ink/10 rounded-xl2 border border-ink/10 bg-white/60 backdrop-blur-sm">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faq.question} className="px-5 sm:px-6">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-sm font-semibold text-ink sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-electric transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-ink/70">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
