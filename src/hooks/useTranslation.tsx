
import { useLanguage } from './useLanguage';
import translations from '@/data/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    // Get the translation for the current language
    const currentTranslations = translations[language] || translations.en;
    
    // Return the translation, or the key if no translation is found
    return currentTranslations[key] || translations.en[key] || key;
  };

  return { t };
};
