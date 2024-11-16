import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBRTranslations from '@/locale/pt-br.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      ...ptBRTranslations
    },
  },
  lng: 'en',
})