import { useRouter } from 'next/router';
import es from 'locales/es';
import en from 'locales/en';

export const useTranslation = () => {
  const router = useRouter();
  const locale = router.locale;

  const locales = {
    es,
    en
  };

  return locales[locale];
};
