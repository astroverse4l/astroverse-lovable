
import { useLanguage } from './useLanguage';
import translations from '@/data/translations';

type TranslationParams = {
  [key: string]: string | number;
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string, params?: TranslationParams): string => {
    // Get the translation for the current language
    const currentTranslations = translations[language] || translations.en;
    
    // Get the translation or fallback to English or the key itself
    let translation = currentTranslations[key] || translations.en[key] || key;
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{{${paramKey}}}`, String(paramValue));
      });
    }
    
    return translation;
  };

  return { t };
};
