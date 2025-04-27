import { useLanguage } from './LanguageContext';
import { translations } from './translation';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation not found for key: ${path}`);
        return path;
      }
      current = current[key];
    }
    
    return current;
  };

  return { t };
}