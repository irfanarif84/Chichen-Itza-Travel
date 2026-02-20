
# Implementation Plan: 4 Tasks

## Task 1: Verify Tour Pages (DONE)
All three pages (/tours/ek-balam-tours, /tours/valladolid-tours, /tours/night-tours) render correctly with:
- Hero sections with breadcrumbs, star ratings, feature badges, and CTA buttons
- Introduction sections with internal cross-links
- Feature highlight cards (3-column grid)
- TipBox sections with contextual advice
- Tour grid with TourFilters component
- TrustBadges section
- FAQ accordion with schema markup
- CTA section
- Internal link footer (10 links each)

No issues found - all sections render as expected.

---

## Task 2: Create /guide/vs-other-ruins.tsx

A comprehensive comparison guide page following the established guide page pattern (see best-time-to-visit.tsx).

**Page structure:**
1. Hero section with breadcrumbs and gradient background
2. Quick summary TipBox ("Chichen Itza is the must-see, but each site offers something unique")
3. Overview section comparing all 5 sites
4. ComparisonTable comparing Chichen Itza vs Tulum vs Coba vs Ek Balam vs Uxmal across dimensions (size, climbable, crowds, entrance fee, UNESCO status, cenote nearby, drive from Cancun, best for)
5. Individual site sections with InfoBox highlights for each ruin
6. "Which Ruins Should You Visit?" recommendation section
7. TipBox with practical advice
8. FAQ section with comparison-specific FAQs
9. CTA section
10. Internal links footer

**SEO metadata:**
- H1: "Chichen Itza vs Other Mayan Ruins - Complete Comparison Guide"
- Title: "Chichen Itza vs Tulum, Coba, Ek Balam, Uxmal - 2026 Guide"
- Meta description: ~155 chars comparing the 5 sites
- JSON-LD: BreadcrumbList + Article schema (added to guideSchemas in schema.ts)

**Files to modify/create:**
- Create `src/pages/guide/vs-other-ruins.tsx`
- Add route to `src/App.tsx`
- Add "vs-other-ruins" entry to `guideSchemas` in `src/lib/schema.ts`

---

## Task 3: Create /lib/reviewsData.ts

Structured review data for schema markup and testimonial components.

**Data structure:**
```text
interface Review {
  id: string
  author: string
  location: string (e.g. "Dallas, TX")
  date: string
  rating: number (1-5)
  title: string
  content: string
  tourId: string (links to tour)
  departureCity: DepartureCity
  verified: boolean
  avatar?: string
}
```

**Content:** 20-25 reviews spread across tour types and departure cities for use on:
- Testimonials page (/practical/testimonials)
- Tour pages (filtered by tour category)
- Location pages (filtered by departure city)
- Homepage social proof

**Helper functions:**
- `getReviewsByTourCategory(category)` 
- `getReviewsByCity(city)`
- `getFeaturedReviews(limit)`
- `getAverageRating(reviews)`
- `generateReviewSchema(reviews)` for JSON-LD

**File to create:** `src/lib/reviewsData.ts`

---

## Task 4: Update Header Mega-Menu

Add Ek Balam, Valladolid, and Night Tours links to the Tours dropdown in the Header component.

**Changes to `src/components/layout/Header.tsx`:**

1. Add to `tourLinks` array (Tour Categories column):
   - `{ label: "Ek Balam Tours", href: "/tours/ek-balam-tours" }`
   - `{ label: "Valladolid Tours", href: "/tours/valladolid-tours" }`
   - `{ label: "Night Tours", href: "/tours/night-tours" }`

2. Add corresponding entries to the mobile navigation section so all three new links appear there too.

---

## Technical Details

**Routing addition in App.tsx:**
```text
import VsOtherRuinsPage from "./pages/guide/vs-other-ruins";
<Route path="/guide/vs-other-ruins" element={<VsOtherRuinsPage />} />
```

**Component reuse:** The vs-other-ruins page will import and compose existing components: SEOHead, Breadcrumbs, ComparisonTable, InfoBox, TipBox, FAQSection, CTASection -- following the "thin pages" architectural rule.

**Internal linking updates:** The new guide page will link to /tours/ek-balam-tours, /tours-from/cancun, /tours-from/tulum, /guide/entrance-fees, and other relevant silo pages. The Header update ensures all three new tour pages are discoverable from the global navigation.
