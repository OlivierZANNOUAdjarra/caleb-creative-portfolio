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
    about: {
      badge: 'À propos',
      title:
        "Passionné par la création visuelle, augmenté par l'intelligence artificielle.",
      paragraph1:
        "Depuis près de deux ans, Caleb Jesugnon AGBAKOU met la puissance de l'intelligence artificielle au service de la créativité, pour transformer les idées en réalisations concrètes — qu'il s'agisse d'images, de vidéos, de designs ou d'identités visuelles.",
      paragraph2:
        'Créatif, innovant et attentif aux détails, il accompagne particuliers, entreprises et organisations dans la conception de contenus visuels uniques.',
      missionLabel: 'Mission',
      missionText:
        "Transformer les idées en réalisations visuelles d'exception.",
      audienceLabel: 'Accompagne',
      audiences: ['Particuliers', 'Entreprises', 'Organisations'],
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
    about: {
      badge: 'About',
      title: 'Passionate about visual creation, enhanced by artificial intelligence.',
      paragraph1:
        "For nearly two years, Caleb Jesugnon AGBAKOU has put the power of artificial intelligence at the service of creativity, turning ideas into concrete results — whether images, videos, designs, or visual identities.",
      paragraph2:
        'Creative, innovative and detail-oriented, he supports individuals, businesses and organizations in creating unique visual content.',
      missionLabel: 'Mission',
      missionText: 'Turning ideas into exceptional visual creations.',
      audienceLabel: 'Works with',
      audiences: ['Individuals', 'Businesses', 'Organizations'],
    },
  },
} as const;

export type Lang = keyof typeof translations;