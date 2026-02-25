import { useLocale } from "@/lib/i18n/useLocale";
import { tourTranslationsEs } from "@/lib/tourData.es";
import type { Tour } from "@/types/tour";

/**
 * Returns localized display fields for a tour.
 * On Spanish pages, returns translated content.
 * On English pages, returns the original tour fields.
 */
export const useLocalizedTour = (tour: Tour) => {
  const { isEs } = useLocale();

  if (!isEs) {
    return {
      title: tour.title,
      shortTitle: tour.shortTitle,
      shortDescription: tour.shortDescription,
      description: tour.description,
      h1: tour.h1,
      duration: tour.duration,
      badge: tour.badge,
      highlights: tour.highlights,
      inclusions: tour.inclusions,
      exclusions: tour.exclusions,
      itinerary: tour.itinerary,
    };
  }

  const es = tourTranslationsEs[tour.id];
  return {
    title: es?.title ?? tour.title,
    shortTitle: es?.shortTitle ?? tour.shortTitle,
    shortDescription: es?.shortDescription ?? tour.shortDescription,
    description: es?.description ?? tour.description,
    h1: es?.h1 ?? tour.h1,
    duration: es?.duration ?? tour.duration,
    badge: es?.badge ?? tour.badge,
    highlights: es?.highlights ?? tour.highlights,
    inclusions: es?.inclusions ?? tour.inclusions,
    exclusions: es?.exclusions ?? tour.exclusions,
    itinerary: es?.itinerary
      ? es.itinerary.map((step, i) => ({
          ...tour.itinerary[i],
          time: step.time,
          title: step.title,
          description: step.description,
        }))
      : tour.itinerary,
  };
};
