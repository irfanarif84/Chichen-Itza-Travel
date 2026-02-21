

# Tour Detail Page Enhancements

## Summary

Four changes to the tour detail page (`src/pages/tours/[slug].tsx`) plus one new component file. The cenote-tours page already exists and needs no changes.

---

## Task 1: Create TourGallery Component

**New file:** `src/components/features/tours/TourGallery.tsx`

A responsive 2x2 image grid with full-screen lightbox overlay:
- Accepts `images: string[]`, `heroImage?: string`, and `tourTitle: string`
- If `images` is empty, repeats the hero image 4 times as placeholders
- Clicking any image opens a lightbox with prev/next navigation
- Keyboard support: Escape to close, arrow keys to navigate
- Close on background click
- Shows "image X of Y" counter at bottom
- Uses existing design tokens (rounded-lg, hover scale effect)

---

## Task 2: Modify Tour Detail Page

**File:** `src/pages/tours/[slug].tsx`

Three additions to this page:

### 2a. Import new dependencies (top of file)

Add imports for:
- `StickyBookingBar` from `@/components/layout/StickyBookingBar`
- `TourGallery` from `@/components/features/tours/TourGallery`
- `FAQSection` from `@/components/common/FAQ`
- FAQ arrays from `@/lib/faqData`: `generalChichenItzaFAQs`, `dayToursFAQs`, `privateToursFAQs`, `cenoteToursFAQs`, `sunriseToursFAQs`, `smallGroupFAQs`
- `createFAQSchema` from `@/lib/seo`

### 2b. Add category-to-FAQ mapping logic

Inside the component, after the existing `reviews` variable, add a mapping object and compute the FAQ list:

```
Category mapping:
  "day-tours" -> dayToursFAQs
  "private-tours" -> privateToursFAQs
  "cenote-tours" -> cenoteToursFAQs
  "sunrise-tours" -> sunriseToursFAQs
  "small-group" -> smallGroupFAQs
  all others -> generalChichenItzaFAQs only
```

Combine the category-specific FAQs with `generalChichenItzaFAQs`, deduplicate by question text, and limit to 6 items. Also generate a FAQ JSON-LD schema and add it to the `jsonLd` array in the SEOHead.

### 2c. Add TourGallery section

Insert the `TourGallery` component between the Description section (line 228) and Highlights section (line 232). Pass `images={[]}` (tours don't have an images array in the current data), `heroImage={heroImg}`, and `tourTitle={tour.title}`.

### 2d. Add FAQ section

Insert the `FAQSection` component in the left article column, between the "Related Tours" section and the "Internal links" section (before line 382). Pass the computed FAQ array and a title like "Frequently Asked Questions".

### 2e. Add StickyBookingBar

Render `<StickyBookingBar price={tour.price.adult} tourSlug={tour.slug} />` just before the closing `</>` fragment (after CTASection, before line 482). This component already returns null on desktop, so no conditional logic needed.

### 2f. Add mobile bottom padding

On the main content container (line 221), add `pb-20 lg:pb-0` classes to prevent content from being hidden behind the sticky bar on mobile.

---

## Task 3: Cenote Tours Page -- Already Complete

No changes needed. `src/pages/tours/cenote-tours.tsx` already exists with hero, tour grid, reviews, FAQ, and CTA sections. Route is registered in App.tsx.

---

## Files Summary

| Action | File |
|--------|------|
| Create | `src/components/features/tours/TourGallery.tsx` |
| Modify | `src/pages/tours/[slug].tsx` |

No new dependencies required.

