import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '@/locale/en.json';
import ptBRTranslations from '@/locale/pt-br.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enTranslations
    },
    pt: {
      ...ptBRTranslations
    },
  },
  lng: 'en',
})