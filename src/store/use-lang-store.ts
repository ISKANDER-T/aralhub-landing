import { create } from "zustand";
import i18next from "../i18next";
import { langStorage } from "./lang-store";

interface LangStore {
  lang: string;
  onChangeLang: (lang: string) => void;
}

const useLangStore = create<LangStore>()((set) => ({
  lang: langStorage.get(),
  onChangeLang: (lang) => {
    langStorage.set(lang);
    i18next.changeLanguage(lang.toLocaleUpperCase());
    set({ lang });
  },
}));

export { useLangStore };
