import { useLocale } from "@/lib/i18n/useLocale";
import { tourTranslationsEs } from "@/lib/tourData.es";
import type { Tour } from "@/types/tour";

/**
 * Returns localized display fields for a tour.
 * On Spanish pages, returns translated title/shortTitle/shortDescription/duration/badge.
 * On English pages, returns the original tour fields.
 */
export const useLocalizedTour = (tour: Tour) => {
  const { isEs } = useLocale();

  if (!isEs) {
    return {
      title: tour.title,
      shortTitle: tour.shortTitle,
      shortDescription: tour.shortDescription,
      duration: tour.duration,
      badge: tour.badge,
    };
  }

  const es = tourTranslationsEs[tour.id];
  return {
    title: es?.title ?? tour.title,
    shortTitle: es?.shortTitle ?? tour.shortTitle,
    shortDescription: es?.shortDescription ?? tour.shortDescription,
    duration: es?.duration ?? tour.duration,
    badge: es?.badge ?? tour.badge,
  };
};

/**
 * Standalone helper (no hook) for use outside React components.
 */
export const getLocalizedTourField = (
  tourId: string,
  field: "title" | "shortTitle" | "shortDescription" | "duration" | "badge",
  fallback: string | undefined,
  isEs: boolean
): string | undefined => {
  if (!isEs) return fallback;
  const es = tourTranslationsEs[tourId];
  return es?.[field] ?? fallback;
};
