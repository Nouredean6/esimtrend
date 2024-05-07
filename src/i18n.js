import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations using http (e.g., from your server)
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', // Use 'en' if detected lng is unavailable
    ns: ['homepage'], 
    debug: true, // Set to true to see language detection information in the console
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    // This option allows you to use the "languages" folder in "public" to load translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
