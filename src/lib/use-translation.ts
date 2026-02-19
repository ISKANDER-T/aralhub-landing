import type { ReactNode } from "react";
import { useTranslation as useI18Translation } from "react-i18next";
import type { TranslationsKeys } from "../locales";

export const useTranslation = () => {
  const { t, ...rest } = useI18Translation();

  const translate = (value: TranslationsKeys | (() => ReactNode)) =>
    typeof value === "function" ? t(String(value())) : t(value);

  return {
    t: translate,
    ...rest,
  };
};
