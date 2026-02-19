import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN, RU } from "./i18n.ts";
import { langStorage } from "./store/lang-store.ts";

i18n.use(initReactI18next).init({
  resources: { EN, RU },
  lng: langStorage.get(),
  fallbackLng: langStorage.get(),
  react: { useSuspense: true },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
