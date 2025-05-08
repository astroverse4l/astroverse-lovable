
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'es' | 'it' | 'ru' | 'zh';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    // If not found, try to get browser language or default to English
    const browserLanguage = navigator.language.split('-')[0] as Language;
    return savedLanguage || 
           (['en', 'fr', 'es', 'it', 'ru', 'zh'].includes(browserLanguage) ? browserLanguage : 'en');
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
