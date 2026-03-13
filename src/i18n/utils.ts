import { es } from "./es";
import { en } from "./en";
import { ko } from "./ko";
import { zh } from "./zh";
import { ja } from "./ja";

export type Lang = "es" | "en" | "ko" | "zh" | "ja";

export const languages: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  ko: "KO",
  zh: "ZH",
  ja: "JA",
};

export const langNames: Record<Lang, string> = {
  es: "Español",
  en: "English",
  ko: "한국어",
  zh: "中文",
  ja: "日本語",
};

const translations = { es, en, ko, zh, ja };

export type Translations = typeof es;

export function useTranslations(lang: Lang): Translations {
  return translations[lang] ?? translations.es;
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment && segment in translations) return segment as Lang;
  return "es";
}

/** Devuelve la ruta equivalente en otro idioma */
export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  // Quitar el prefijo de idioma actual si existe
  const langPrefixes = Object.keys(translations).filter((l) => l !== "es");
  let cleanPath = currentPath;
  for (const prefix of langPrefixes) {
    if (cleanPath.startsWith(`/${prefix}/`) || cleanPath === `/${prefix}`) {
      cleanPath = cleanPath.replace(`/${prefix}`, "") || "/";
      break;
    }
  }
  // Aplicar el nuevo prefijo
  if (targetLang === "es") return cleanPath || "/";
  return `/${targetLang}${cleanPath === "/" ? "" : cleanPath}` || `/${targetLang}`;
}
