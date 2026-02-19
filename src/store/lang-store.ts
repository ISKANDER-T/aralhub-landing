export const langStorage = {
  get: (): string => {
    const lang = localStorage.getItem("lang");
    if (!lang) return "RU";
    if (!["EN", "RU"].includes(lang)) return "RU";
    return lang.toUpperCase();
  },
  set: (lang: string) => {
    localStorage.setItem("lang", lang.toUpperCase());
  },
  clear(): void {
    localStorage.removeItem("lang");
  },
};
