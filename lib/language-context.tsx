'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Lang } from '@/lib/translations';

const LanguageContext = createContext<{
  lang: Lang;
  t: any; // Utilisation de any ici pour assouplir la vérification stricte des textes littéraux
  toggleLang: () => void;
}>({ lang: 'fr', t: translations.fr, toggleLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const stored = localStorage.getItem('cc-lang') as Lang | null;
    if (stored) setLang(stored);
  }, []);

  function toggleLang() {
    setLang((prev) => {
      const next: Lang = prev === 'fr' ? 'en' : 'fr';
      localStorage.setItem('cc-lang', next);
      return next;
    });
  }

  return (
    // Ajout de "as any" pour forcer TypeScript à accepter le dictionnaire de la langue active
    <LanguageContext.Provider value={{ lang, t: translations[lang] as any, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
