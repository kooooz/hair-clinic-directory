'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { translations } from '@/i18n/translations';

type Language = 'de' | 'en';

type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // const pathname = usePathname();
  // const [language, setLanguage] = useState<Language>('de');

  // useEffect(() => {
  //   setLanguage(pathname.startsWith('/en') ? 'en' : 'de');
  // }, [pathname]);

  // Always use German
  const language: Language = 'de';

  const t = (key: TranslationKey) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 