

# Implementation Plan

## Summary

Four tasks: create ReviewCard/ReviewGrid components, integrate reviews into the testimonials page, add "vs Other Ruins" to the Footer, and add a reviews section to tour category pages.

The vs-other-ruins page, reviewsData.ts, Header navigation, and schema are already complete from prior work. This plan covers the remaining gaps.

---

## Task 1: Create ReviewCard and ReviewGrid Components

Create two reusable components in `/components/features/reviews/`:

**ReviewCard.tsx**
- Displays a single review with quote icon, star rating, author name, location, tour category badge, date, and verified checkmark
- Accepts a `Review` object from reviewsData.ts
- Uses the same card styling pattern as existing TourCard (rounded-lg, shadow-card, hover lift)

**ReviewGrid.tsx**
- Renders a responsive grid of ReviewCard components (1 col mobile, 2 col tablet, 3 col desktop)
- Accepts `reviews: Review[]` and optional `limit` prop
- Includes an optional heading and aggregate star rating display at the top

---

## Task 2: Integrate reviewsData.ts into Testimonials Page

Rewrite `/pages/practical/testimonials.tsx` to:
- Import reviews from `@/lib/reviewsData` instead of hardcoded data
- Add filter controls (tour category dropdown and departure city dropdown) using existing Select component
- Use the new ReviewGrid component to display filtered results
- Show aggregate rating computed via `getAverageRating()`
- Add JSON-LD Review schema using `generateReviewSchema()`
- Keep existing SEO metadata, breadcrumbs, hero section, and CTA

Filter options:
- Tour category: All, Day Tour, Private, Sunrise, Cenote, Night, Ek Balam, Valladolid
- Departure city: All, Cancun, Playa del Carmen, Tulum, Riviera Maya, Merida

---

## Task 3: Add "vs Other Ruins" to Footer

Add one entry to the Travel Guide column in `src/components/layout/Footer.tsx`:

```text
{ l: "vs Other Ruins", h: "/guide/vs-other-ruins" }
```

Added after the existing "Dress Code & Rules" entry (line 98).

---

## Task 4: Add Reviews Section to Tour Category Pages

Add a reviews section to the main tour category pages (day-tours, private-tours, sunrise-tours, cenote-tours, ek-balam-tours, valladolid-tours, night-tours) by:

- Importing `getReviewsByTourCategory` from reviewsData
- Importing ReviewGrid component
- Adding a section between TrustBadges and FAQ that shows 3 filtered reviews for that tour category
- Using existing section styling patterns (alternating bg-muted/30 backgrounds)

Each page will filter reviews by its category string (e.g., "day-tour", "sunrise", "private", etc.) and display them with a "See All Reviews" link to /practical/testimonials.

---

## Technical Details

**New files:**
- `src/components/features/reviews/ReviewCard.tsx`
- `src/components/features/reviews/ReviewGrid.tsx`

**Modified files:**
- `src/pages/practical/testimonials.tsx` - replace hardcoded data with reviewsData + filters
- `src/components/layout/Footer.tsx` - add vs Other Ruins link (line 98)
- `src/pages/tours/day-tours.tsx` - add reviews section
- `src/pages/tours/private-tours.tsx` - add reviews section
- `src/pages/tours/sunrise-tours.tsx` - add reviews section
- `src/pages/tours/cenote-tours.tsx` - add reviews section
- `src/pages/tours/ek-balam-tours.tsx` - add reviews section
- `src/pages/tours/valladolid-tours.tsx` - add reviews section
- `src/pages/tours/night-tours.tsx` - add reviews section

**No new dependencies required** - uses existing shadcn Select, Lucide icons, and Framer Motion.

