

# Fix Untranslated Tour Content on Spanish Pages

## Problem

On `/es/tours` and all Spanish pages that render tour cards, the following fields display in English because they come directly from `tourData.ts`:

- **Tour titles** ("Classic Chichen Itza Day Tour from Cancun")
- **Short descriptions** ("Full-day guided tour with cenote swim...")
- **Duration labels** ("12 hours", "10 hours")
- **Badges** ("Best Seller", "Premium", "Unique Experience")
- **Short titles** in PopularToursWidget ("Classic Day Tour")
- **"From $"** label in PopularToursWidget
- **"Popular Tours"** heading in PopularToursWidget
- **Tour dropdown options** in QuickBookingForm

## Approach

Create a Spanish translation map for all 13 tours' display fields, then update the 3 affected components to read localized content.

## Implementation

### 1. New file: `src/lib/tourData.es.ts`

A translation map keyed by tour ID containing Spanish versions of:
- `title`, `shortTitle`, `shortDescription`, `duration`, `badge`

For all 13 tours (classic-day-tour, private-vip-tour, sunrise-tour, cenote-ik-kil-combo, budget-express, family-adventure, night-light-show, chichen-valladolid-combo, private-sunrise-tour, budget-day-playa, cenote-saamal-combo, ek-balam-combo, merida-cultural-tour).

### 2. New helper: `src/hooks/useTourLocale.ts`

A small hook that accepts a `Tour` object and returns the localized fields (title, shortTitle, shortDescription, duration, badge) by checking `isEs` and falling back to English.

### 3. Modified: `src/components/features/tours/TourCard.tsx`

Use the hook to render localized title, shortDescription, duration, and badge instead of raw `tour.*` fields.

### 4. Modified: `src/components/features/tours/PopularToursWidget.tsx`

- Use `useLocale` + the translation map for `shortTitle` and the "From $" / "Popular Tours" labels.
- Use `LocaleLink` instead of `Link` for locale-aware navigation.

### 5. Modified: `src/components/features/booking/QuickBookingForm.tsx`

Use the translation map for `tour.shortTitle` in the dropdown options.

### 6. Modified: `src/pages/tours/[slug].tsx`

Localize the breadcrumb `shortTitle`, badge, and other English strings on the tour detail page (category labels, city labels, section headings like "Highlights", "What's Included", etc.).

---

### Technical Detail: Translation Map Structure

```typescript
// src/lib/tourData.es.ts
export const tourTranslations: Record<string, {
  title: string;
  shortTitle: string;
  shortDescription: string;
  duration: string;
  badge?: string;
}> = {
  "classic-day-tour": {
    title: "Tour Clásico a Chichén Itzá desde Cancún",
    shortTitle: "Tour Clásico de Día",
    shortDescription: "Tour guiado de día completo con nado en cenote y almuerzo en Valladolid.",
    duration: "12 horas",
    badge: "Más Vendido",
  },
  // ... 12 more tours
};
```

Components call a helper like:
```typescript
const localTour = useLocalizedTour(tour);
// localTour.title → Spanish when on /es/, English otherwise
```

