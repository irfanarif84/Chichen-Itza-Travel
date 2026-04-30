# Tour Pages Content Editing Guide

A practical, file-by-file map of **where** each piece of content on every tour page lives, and **how** to add or edit it. Use this whenever you want to update copy, add a tour, change FAQs, swap images, or tweak SEO without breaking the silo architecture.

> **Golden rule** — Pages are thin. They compose components from `/src/components/` and pull data from `/src/lib/`. Never hardcode tour data inside a page. Always preserve EN ⇄ ES parity.

---

## 1. The two kinds of tour pages

| Type | Route | File | Purpose |
|------|-------|------|---------|
| **Tour Detail Page** (one per SKU) | `/tours/:slug` (EN) and `/es/tours/:slug` (ES) | `src/pages/tours/[slug].tsx` | Sells a single tour |
| **Tour Category Page** (one per category) | `/tours/day-tours`, `/tours/private-tours`, `/tours/cenote-tours`, `/tours/night-tools`, `/tours/sunrise-tours`, `/tours/ek-balam-tours`, `/tours/valladolid-tours` | `src/pages/tours/<category>.tsx` | Sells a category, lists matching tours |
| **All-Tours Hub** | `/tours` | `src/pages/tours/index.tsx` | Master listing + filters |

Both share the same data sources and most of the same components.

---

## 2. Where every piece of content lives

### 2.1 Tour SKU data (price, title, itinerary, inclusions, etc.)
- **File:** `src/lib/tourData.ts` (English source of truth)
- **File:** `src/lib/tourData.es.ts` (Spanish translations keyed by tour `id`)
- **Type contract:** `src/types/tour.ts` (`Tour` interface)
- **What to edit here:** `title`, `shortTitle`, `description`, `h1`, `metaTitle`, `metaDescription`, `keywords`, `price`, `duration`, `groupSize`, `tourType`, `departureCity`, `category[]`, `highlights[]`, `inclusions[]`, `exclusions[]`, `itinerary[]`, `rating`, `reviewCount`, `featured`, `available`, `badge`.
- **To add a tour:** append a new object in `tourData.ts`, add a matching translation block in `tourData.es.ts` keyed by the same `id`, then list it in **both** `category` array entries that should display it.

### 2.2 Tour images
- **File:** `src/lib/tourImages.ts`
  - `tourImages` → hero image per tour `id`
  - `tourGalleryImages` → array of gallery images per tour `id`
  - `tourGalleryAltTexts` → alt text per gallery image (SEO-critical, keyword-rich)
- **Component that renders the gallery:** `src/components/features/tours/TourGallery.tsx`
- **Where to put new files:** `src/assets/` as `.webp`, hyphenated, descriptive filenames.

### 2.3 Reviews
- **File:** `src/lib/reviewsData.ts`
- **Helpers:** `getReviewsByTourCategory(category)`, `generateReviewSchema(...)`
- **Component:** `src/components/features/reviews/ReviewGrid.tsx` (uses `ReviewCard.tsx`)
- **To add a review:** push a new entry tagged with the right `tourCategory` so it appears on both the SKU page and the matching category page.

### 2.4 FAQs
- **Global FAQ data:** `src/lib/faqData.ts` (EN) and `src/lib/faqData.es.ts` (ES)
- **Hook for localized FAQs:** `src/hooks/useFAQLocale.ts`
- **Page-specific FAQs (category pages):** declared **inline** at the top of each category page as `xxxFAQsEn` and `xxxFAQsEs` arrays — see e.g. `src/pages/tours/valladolid-tours.tsx` (`valladolidFAQsEn` / `valladolidFAQsEs`).
- **Component:** `src/components/common/FAQ.tsx` — rendered as `<FAQSection faqs={...} title=... subtitle=... />`. It also emits `FAQPage` JSON-LD via `createFAQSchema()`.

### 2.5 SEO metadata, canonical, hreflang, JSON-LD
- **Helpers:** `src/lib/seo.ts`
  - `getPageMeta({ title, description, canonical, locale, jsonLd })`
  - `createFAQSchema()`, `createBreadcrumbSchema()`, `createItemListSchema()`
- **Schema helpers:** `src/lib/schema.ts` (`generateTourProductSchema`, etc.)
- **Component that injects tags:** `src/components/common/SEOHead.tsx`
- **Locale + slug routing:** `src/lib/i18n/routeMap.ts` — maps EN ↔ ES slugs. **Always** update this when adding or renaming a route.
- **Sitemap:** `public/sitemap.xml` — manually add new routes (with `xhtml:link` hreflang entries).
- **Reference doc:** `docs/seo-reference.md` — record meta tags, keywords, canonicals, internal-link counts for every new route.

### 2.6 Breadcrumbs
- **Component:** `src/components/layout/Breadcrumbs.tsx`
- Pass `items={[{ label, href? }, ...]}`. Last item has no `href`.
- Always pair with `createBreadcrumbSchema(...)` inside `getPageMeta`.

### 2.7 Booking / conversion UI
- Sidebar form (SKU pages): `src/components/features/booking/QuickBookingForm.tsx`
- Trust badges: `src/components/features/booking/TrustBadges.tsx`
- Mobile sticky bar: `src/components/layout/StickyBookingBar.tsx`
- Bottom CTA section: `src/components/features/home/CTASection.tsx`
- WhatsApp button (global): `src/components/layout/WhatsAppButton.tsx`

### 2.8 Tour cards, filters, related tours
- Card: `src/components/features/tours/TourCard.tsx`
- Filters (price/duration/type/category): `src/components/features/tours/TourFilters.tsx` (returns `FilterState`)
- Related/popular widget: `src/components/features/tours/PopularToursWidget.tsx`
- Combo card: `src/components/features/tours/ComboTourCard.tsx`
- Itinerary timeline row: `src/components/features/tours/TimelineItem.tsx`

### 2.9 Guide-style content blocks (used inside category pages)
- Tip / Info callouts: `src/components/guide/TipBox.tsx`, `src/components/guide/InfoBox.tsx`
- Comparison table: `src/components/guide/ComparisonTable.tsx`
- Monthly chart: `src/components/guide/MonthlyChart.tsx`

### 2.10 Locale helpers
- `src/lib/i18n/useLocale.ts` → `useLocale()` returns `{ locale, isEs }`.
- `src/components/LocaleLink.tsx` → use **instead of** `react-router-dom`'s `Link` so URLs auto-prefix `/es/` on Spanish pages.
- `src/hooks/useTourLocale.ts` → `useLocalizedTour(tour)` returns localized SKU display fields.

---

## 3. Editing a Tour Detail Page (`/tours/:slug`)

File: `src/pages/tours/[slug].tsx`. **Do not** add per-tour text in this file — it is a generic template that reads from `tourData.ts`.

| To change… | Edit here |
|---|---|
| Title, H1, description, price, badge | `src/lib/tourData.ts` (and `.es.ts`) — the matching tour object |
| Highlights / Inclusions / Exclusions | Same tour object: `highlights[]`, `inclusions[]`, `exclusions[]` |
| Itinerary timeline | Same tour object: `itinerary[]` (rendered by `TimelineItem.tsx`) |
| Hero & gallery images | `src/lib/tourImages.ts` (`tourImages`, `tourGalleryImages`, `tourGalleryAltTexts`) |
| Reviews shown | `src/lib/reviewsData.ts` (tag with the tour's `category`) |
| Tour-page FAQ list | Global FAQs in `src/lib/faqData.ts` / `.es.ts` (filtered via `useLocalizedFAQs`) |
| Product schema | `generateTourProductSchema()` in `src/lib/schema.ts` |
| Meta title / description / canonical / hreflang | `getPageMeta()` call inside `[slug].tsx` — values come from the tour object |
| Sidebar booking form fields | `src/components/features/booking/QuickBookingForm.tsx` |
| Bottom related tours | `getToursByCategory()` in `src/lib/tourData.ts` + `TourCard.tsx` |

---

## 4. Editing a Tour Category Page (`/tours/<category>`)

Files: `src/pages/tours/day-tours.tsx`, `private-tours.tsx`, `cenote-tours.tsx`, `night-tours.tsx`, `sunrise-tours.tsx`, `ek-balam-tours.tsx`, `valladolid-tours.tsx`. Each follows the same structure.

Anatomy (top → bottom) and which file owns each section:

| Section | Component / File | What to edit |
|---|---|---|
| `<SEOHead>` (title, desc, canonical, OG, hreflang, JSON-LD) | `src/components/common/SEOHead.tsx` driven by `getPageMeta(...)` in the page file | Edit the `c.metaTitle` / `c.metaDesc` strings in the in-file `c = isEs ? {…} : {…}` block, and the `canonical` arg passed to `getPageMeta` |
| Breadcrumbs | `src/components/layout/Breadcrumbs.tsx` | The `items` array in the page; mirror it in `createBreadcrumbSchema` |
| Hero (H1, subtitle, badge row, CTA) | Inline JSX in the page | Edit `c.h1`, `c.subtitle`, `c.badges[]`, `c.cta` in the in-file `c` object |
| Intro paragraphs | Inline JSX | Edit the EN/ES `<p>` blocks (gated by `isEs ?`) |
| "Highlights / What to See" cards | Inline JSX | Edit `c.highlights[]` |
| Tip boxes | `src/components/guide/TipBox.tsx` | Edit `c.tip1Title/Content`, etc. |
| Tour grid + filters | `TourFilters.tsx` + `TourCard.tsx` | The list comes from `tours.filter(t => t.category.includes("<cat>"))`. To add/remove a tour from a category, edit `category[]` on that tour in `tourData.ts` |
| Trust badges row | `src/components/features/booking/TrustBadges.tsx` | Component-level only |
| Reviews | `src/components/features/reviews/ReviewGrid.tsx` | Source: `getReviewsByTourCategory("<cat>")` from `reviewsData.ts` |
| FAQs | `src/components/common/FAQ.tsx` | Edit the in-file `xxxFAQsEn` / `xxxFAQsEs` arrays at the top of the page |
| Bottom CTA | `src/components/features/home/CTASection.tsx` | Component-level only |
| "Explore More Tours" links | Inline JSX | Edit `c.exploreLinks[]` |
| `ItemList` JSON-LD count | `createItemListSchema()` in `src/lib/seo.ts` | Driven by `category` membership in `tourData.ts` — to grow an `ItemList`, tag more tours into that category |

---

## 5. Adding a brand-new tour (end-to-end checklist)

1. **Data** — add object to `src/lib/tourData.ts`. Pick the right `category[]` values (drives which category pages list it and the `ItemList` schema).
2. **Spanish** — add matching translation entry in `src/lib/tourData.es.ts` keyed by the same `id`.
3. **Images** — drop WebP files into `src/assets/`, then register them in `src/lib/tourImages.ts` (hero, gallery, alt text).
4. **Reviews (optional)** — add seed reviews in `src/lib/reviewsData.ts` tagged with the tour's category.
5. **Routing** — `[slug].tsx` picks it up automatically. If the EN slug differs from the ES slug, register the mapping in `src/lib/i18n/routeMap.ts`.
6. **Sitemap** — add EN + ES URLs (with `xhtml:link` hreflang) to `public/sitemap.xml`.
7. **SEO doc** — append the new route to `docs/seo-reference.md` (title, desc, keywords, canonical, internal-link plan).
8. **Internal links** — link to it from at least one category page, the `/tours` hub, and one related guide or blog post (10+ inbound links is the target for SKU pages).

---

## 6. Adding a brand-new tour category page

1. Create `src/pages/tours/<new-category>.tsx` by **copying `valladolid-tours.tsx`** as the template (it has the cleanest EN/ES `c` object pattern).
2. Add the category id to the `TourCategory` union in `src/types/tour.ts`.
3. Tag the relevant tours with that category in `src/lib/tourData.ts`.
4. Register the route in `src/App.tsx` and in `src/lib/i18n/routeMap.ts` (EN ↔ ES slugs).
5. Add EN + ES URLs to `public/sitemap.xml`.
6. Add link entries in `Header.tsx` mega-menu and `Footer.tsx`.
7. Add `categoryLabelsMap` entry in `src/pages/tours/[slug].tsx` so SKU pages show the right breadcrumb back-link.
8. Document in `docs/seo-reference.md`.

---

## 7. EN ⇄ ES parity rules (do not skip)

- Every user-facing string on a category page lives in the in-file `c = isEs ? {es} : {en}` object — edit **both** sides.
- Every SKU edit in `tourData.ts` needs a matching update in `tourData.es.ts`.
- Every new route must exist in both `routeMap.ts` and `sitemap.xml` with `hreflang` siblings.
- Use `<LocaleLink>` (not `<Link>`) for any internal navigation so `/es/` is preserved.
- Canonical and `og:url` must point to the **localized** slug — handled by `getPageMeta({ canonical, locale })` in `src/lib/seo.ts`. Never hardcode the EN canonical on an ES page.

---

## 8. Verification before shipping

1. Run the build (the harness does this automatically). Inspect `dist/<route>/index.html` for: unique H1, correct `<title>` (50–60 chars), `<meta name="description">` (150–160), correct `<link rel="canonical">`, `og:url`, `hreflang` pair, and JSON-LD blocks (`Product`, `BreadcrumbList`, `FAQPage`, and on category pages `ItemList`).
2. Run `node scripts/validate-seo.mjs` to catch metadata regressions.
3. Update `docs/seo-reference.md` with the new/changed route's metrics.

---

## 9. Quick file map (cheat sheet)

```
Tour SKU data .................. src/lib/tourData.ts  +  src/lib/tourData.es.ts
Tour images .................... src/lib/tourImages.ts  →  src/assets/*.webp
Reviews ........................ src/lib/reviewsData.ts
FAQs (global) .................. src/lib/faqData.ts  +  src/lib/faqData.es.ts
FAQs (per category page) ....... inline arrays at top of each category page
SEO helpers .................... src/lib/seo.ts  (getPageMeta, *Schema)
Product schema ................. src/lib/schema.ts
Locale routing ................. src/lib/i18n/routeMap.ts
Sitemap ........................ public/sitemap.xml
SEO reference log .............. docs/seo-reference.md

SKU page template .............. src/pages/tours/[slug].tsx
Category page template ......... src/pages/tours/valladolid-tours.tsx (cleanest example)
All-tours hub .................. src/pages/tours/index.tsx

Cards / filters / gallery ...... src/components/features/tours/*
Booking / trust ................ src/components/features/booking/*
Reviews UI ..................... src/components/features/reviews/*
FAQ / SEOHead / Breadcrumbs .... src/components/common/* + src/components/layout/Breadcrumbs.tsx
Tip / Info / Comparison ........ src/components/guide/*
```
