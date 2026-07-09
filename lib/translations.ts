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
    services: {
      badge: 'Services',
      title: "Des solutions créatives complètes, propulsées par l'IA.",
      footnote:
        '+ Conseil en solutions créatives IA, sur mesure selon votre projet.',
      items: [
        {
          title: 'Création de contenu IA',
          description:
            "Conception de contenus originaux pensés et produits avec l'aide de l'intelligence artificielle.",
        },
        {
          title: "Création d'images IA",
          description:
            'Visuels uniques générés et retravaillés pour coller précisément à votre univers.',
        },
        {
          title: 'Création de vidéos IA',
          description:
            "Vidéos courtes ou longues produites grâce aux derniers outils d'IA générative.",
        },
        {
          title: 'Motion Design',
          description:
            'Animations graphiques dynamiques pour donner vie à votre message.',
        },
        {
          title: 'Montage vidéo professionnel',
          description:
            'Montage soigné, rythmé et adapté à chaque plateforme de diffusion.',
        },
        {
          title: "Création d'affiches",
          description:
            'Affiches percutantes pour vos événements, promotions ou campagnes.',
        },
        {
          title: 'Création de logos',
          description:
            "Identités visuelles fortes, mémorables et fidèles à votre marque.",
        },
        {
          title: 'Retouche photo avec IA',
          description:
            'Correction et sublimation de vos photos avec précision et rapidité.',
        },
        {
          title: 'Prompt Engineering',
          description:
            "Conception de prompts optimisés pour exploiter tout le potentiel des IA créatives.",
        },
      ],
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
    services: {
      badge: 'Services',
      title: 'Complete creative solutions, powered by AI.',
      footnote: '+ AI creative solutions consulting, tailored to your project.',
      items: [
        {
          title: 'AI content creation',
          description:
            'Original content designed and produced with the help of artificial intelligence.',
        },
        {
          title: 'AI image creation',
          description:
            'Unique visuals generated and refined to precisely match your world.',
        },
        {
          title: 'AI video creation',
          description:
            'Short or long videos produced using the latest generative AI tools.',
        },
        {
          title: 'Motion Design',
          description: 'Dynamic graphic animations to bring your message to life.',
        },
        {
          title: 'Professional video editing',
          description: 'Polished, well-paced editing adapted to each distribution platform.',
        },
        {
          title: 'Poster creation',
          description: 'Striking posters for your events, promotions or campaigns.',
        },
        {
          title: 'Logo creation',
          description: 'Strong, memorable visual identities true to your brand.',
        },
        {
          title: 'AI photo retouching',
          description: 'Precise, fast correction and enhancement of your photos.',
        },
        {
          title: 'Prompt Engineering',
          description: 'Optimized prompt design to unlock the full potential of creative AI.',
        },
      ],
    },
  },
} as const;

export type Lang = keyof typeof translations;
