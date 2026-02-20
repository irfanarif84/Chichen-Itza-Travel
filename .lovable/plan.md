
# Internal Linking Audit & Fix Plan

## Root Cause: Missing Dynamic Tour Detail Route & Pages

Every `TourCard` component links to `/tours/${tour.slug}`, and every `PopularToursWidget` item links the same way. There are **13 tours** in `tourData.ts` — each with a unique slug — but `App.tsx` has **no `/tours/:slug` route** registered. This means every "View Details" button across the entire site (home page, all category pages, combo pages, location pages) lands on the **404 Not Found page**.

The affected linking components:
- `TourCard.tsx` — line 75: `<Link to={/tours/${tour.slug}}>` 
- `PopularToursWidget.tsx` — line 30: `<Link to={/tours/${tour.slug}}>`

---

## The 13 Broken Tour Slugs

| Tour ID | Slug | Destination URL |
|---|---|---|
| classic-day-tour | chichen-itza-day-tour-from-cancun | /tours/chichen-itza-day-tour-from-cancun |
| private-vip-tour | chichen-itza-private-vip-tour | /tours/chichen-itza-private-vip-tour |
| sunrise-tour | chichen-itza-sunrise-early-access-tour | /tours/chichen-itza-sunrise-early-access-tour |
| cenote-ik-kil-combo | chichen-itza-cenote-ik-kil-combo-tour | /tours/chichen-itza-cenote-ik-kil-combo-tour |
| budget-express | chichen-itza-budget-express-tour | /tours/chichen-itza-budget-express-tour |
| family-adventure | chichen-itza-family-adventure-tour | /tours/chichen-itza-family-adventure-tour |
| night-light-show | chichen-itza-night-light-show-tour | /tours/chichen-itza-night-light-show-tour |
| chichen-valladolid-combo | chichen-itza-valladolid-colonial-tour | /tours/chichen-itza-valladolid-colonial-tour |
| private-sunrise-tour | chichen-itza-private-sunrise-tour | /tours/chichen-itza-private-sunrise-tour |
| budget-day-playa | chichen-itza-budget-tour-playa-del-carmen | /tours/chichen-itza-budget-tour-playa-del-carmen |
| cenote-saamal-combo | chichen-itza-cenote-saamal-combo-tour | /tours/chichen-itza-cenote-saamal-combo-tour |
| ek-balam-combo | chichen-itza-ek-balam-combo-tour | /tours/chichen-itza-ek-balam-combo-tour |
| merida-cultural-tour | chichen-itza-merida-cultural-tour | /tours/chichen-itza-merida-cultural-tour |

---

## Solution: Single Dynamic Tour Detail Page

The best approach is to create **one dynamic page** at `src/pages/tours/[slug].tsx` that reads the slug from the URL, looks up the tour in `tourData.ts` via `getTourBySlug()`, and renders a full tour detail layout. This is architecturally correct: one page handles all 13 tours, and future tours added to `tourData.ts` are automatically covered.

---

## Implementation

### Step 1: Create `src/pages/tours/[slug].tsx`

A full tour detail page composed from existing components with this layout:

**Above the fold:**
- Breadcrumbs (Home > Tours > [Category] > [Tour Title])
- Tour hero with background image from `tourImages[tour.id]`
- H1 from `tour.h1`
- Star rating + review count
- Price badge + badge label
- Duration and group size chips
- Two CTAs: "Book This Tour" (scrolls to booking form) + "View All Tours"

**Main content (two-column layout on desktop):**

Left column (article):
1. Tour highlights (checklist with green ticks)
2. Itinerary (using existing `TimelineItem` component pattern)
3. What's Included / Excluded (two-column InfoBox using existing `InfoBox` component)
4. Departure cities (chip grid)
5. Meeting point info
6. Related reviews (via `getReviewsByTourCategory()` filtered by first category)
7. Related tours (using `RelatedTours` or filtered `TourCard` grid — 3 other tours from the same category)

Right sidebar (sticky on desktop):
1. Price card with adult/child pricing
2. `QuickBookingForm` component (already exists)
3. `TrustBadges` component (already exists)
4. `PopularToursWidget` with current tour excluded

**Below the fold:**
- FAQ section using `generalChichenItzaFAQs` filtered by category
- `CTASection`
- Internal link footer (5-8 relevant links)

**404 handling:** If no tour matches the slug, redirect to `/tours` with a helpful message.

**SEO per tour:** Use `tour.metaTitle`, `tour.metaDescription`, and `tour.keywords` from `tourData.ts`. JSON-LD: `TouristTrip` + `Product` + `BreadcrumbList` schemas via existing `schema.ts` helpers.

### Step 2: Register the Route in `src/App.tsx`

Add one line — a dynamic route with `:slug` parameter — **before** the existing static routes so it doesn't shadow them:

```
import TourDetailPage from "./pages/tours/[slug]";
// inside <Routes>:
<Route path="/tours/:slug" element={<TourDetailPage />} />
```

This must be placed **after** the explicit static routes (`/tours/day-tours`, `/tours/private-tours`, etc.) because React Router v6 uses specificity-based matching — exact static paths win over dynamic `:slug` parameters, so ordering doesn't actually matter in v6, but placing it after keeps the code readable.

---

## Technical Details

**Files to create:**
- `src/pages/tours/[slug].tsx` — dynamic tour detail page

**Files to modify:**
- `src/App.tsx` — add `<Route path="/tours/:slug" element={<TourDetailPage />} />`

**Components reused (no new components needed):**
- `SEOHead`, `Breadcrumbs`, `TrustBadges` — from existing layout/common
- `QuickBookingForm` — sidebar booking
- `PopularToursWidget` — sidebar related tours
- `TourCard` — related tours grid
- `ReviewGrid` — filtered reviews
- `FAQSection` — bottom FAQ
- `CTASection` — bottom CTA
- `InfoBox`, `TipBox` — inclusions/exclusions
- `TourImages` via `tourImages[tour.id]`

**Data used:**
- `getTourBySlug(slug)` from `tourData.ts`
- `getReviewsByTourCategory(category)` from `reviewsData.ts`
- `getToursByCategory(category)` for related tours
- `generateTourSchema(tour)` + `createBreadcrumbSchema()` from `schema.ts`

**No new dependencies required.**
