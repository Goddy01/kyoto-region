export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_STORAGE_KEY = "kr-locale";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
};
