import { useLocation } from "react-router-dom";
import en from "./translations/en";
import es from "./translations/es";
import { enToEsRoutes, esToEnRoutes } from "./routeMap";

export type Locale = "en" | "es";

const translations: Record<Locale, Record<string, string>> = { en, es };

export const useLocale = () => {
  const { pathname } = useLocation();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";

  /** Get translated string by key */
  const t = (key: string): string => translations[locale][key] || translations.en[key] || key;

  /** Convert an English path to the current locale's path */
  const localePath = (enPath: string): string => {
    if (locale === "en") return enPath;
    const mapped = enToEsRoutes[enPath];
    return mapped || `/es${enPath}`;
  };

  /** Get the equivalent path in the other language */
  const alternatePath = (): { en: string; es: string } => {
    if (locale === "en") {
      const esPath = enToEsRoutes[pathname] || `/es${pathname}`;
      return { en: pathname, es: esPath };
    }
    const enPath = esToEnRoutes[pathname] || pathname.replace(/^\/es/, "") || "/";
    return { en: enPath, es: pathname };
  };

  const isEs = locale === "es";

  return { locale, isEs, t, localePath, alternatePath };
};
