export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      services: 'Services',
      portfolio: 'Portfolio',
      tools: 'Outils',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      badge: 'Caleb Creative',
      title:
        "Images, vidéos, design et innovation : je transforme vos idées en réalisations d'exception grâce à l'intelligence artificielle.",
      subtitle: 'La seule limite est votre imagination.',
      ctaPortfolio: 'Voir mes réalisations',
      ctaWhatsapp: 'Me contacter sur WhatsApp',
      ctaContact: 'Me contacter',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      tools: 'Tools',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      badge: 'Caleb Creative',
      title:
        'Images, videos, design and innovation: I turn your ideas into exceptional creations powered by artificial intelligence.',
      subtitle: 'The only limit is your imagination.',
      ctaPortfolio: 'View my work',
      ctaWhatsapp: 'Contact me on WhatsApp',
      ctaContact: 'Contact me',
    },
  },
} as const;

export type Lang = keyof typeof translations;