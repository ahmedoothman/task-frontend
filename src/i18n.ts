import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import store from './store/index';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: store.getState().mainSlice.lang,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (newLang: 'fr' | 'en') => {
  i18next.changeLanguage(newLang);
};

export default i18next;
