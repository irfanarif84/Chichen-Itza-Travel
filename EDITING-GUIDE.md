# Maya Explorer Tours — Complete Editing Guide

> **Who this is for:** Anyone who needs to update website content without being a developer.
> This guide tells you exactly which file to open, what to look for, and how to change it safely.

---

## QUICK REFERENCE CARD — 10 Most Common Edits

> Use this card for day-to-day updates. For full details, jump to the numbered section.

| # | What to change | File(s) to open | What to search for | Section |
|---|---|---|---|---|
| 1 | **Phone number** | `src/components/layout/Header.tsx` | `+52 998 123 4567` | §1 |
| | | `src/components/layout/Footer.tsx` | `+52 998 123 4567` | §1 |
| | | `src/lib/schema.ts` | `"+52-984-123-4567"` | §1 |
| | | `src/pages/practical/contact.tsx` | `+52 998 123 4567` | §1 |
| | | `src/pages/practical/cancellation-policy.tsx` | `+52 998 123 4567` | §1 |
| | | `src/components/features/tours/CTABox.tsx` | `"+52-984-123-4567"` | §1 |
| | | `src/pages/tours/[slug].tsx` | `+52 984 123 4567` | §1 |
| 2 | **Email address** | `src/components/layout/Footer.tsx` | `info@chichenitzatravel.com` | §1 |
| | | `src/lib/schema.ts` | `email:` | §1 |
| | | `src/pages/practical/contact.tsx` | `info@chichenitzatravel.com` | §1 |
| | | `src/pages/practical/cancellation-policy.tsx` | `info@chichenitzatravel.com` | §1 |
| 3 | **Tour price** | `src/lib/tourData.ts` | tour `id` → `price: { adult:` | §2 |
| 4 | **Tour text (English)** | `src/lib/tourData.ts` | tour `id` → `title`, `description`, `highlights` | §2 |
| 5 | **Tour text (Spanish)** | `src/lib/tourData.es.ts` | same tour `id` → same fields | §2 |
| 6 | **Homepage hero text** | `src/lib/i18n/translations/en.ts` | `"hero.h1"`, `"hero.subtitle"` | §4 |
| | | `src/lib/i18n/translations/es.ts` | same keys | §4 |
| 7 | **Homepage SEO title/description** | `src/lib/i18n/translations/en.ts` | `"homeSeo.title"`, `"homeSeo.description"` | §9B |
| | | `src/lib/i18n/translations/es.ts` | same keys | §9B |
| 8 | **FAQ question or answer** | `src/lib/faqData.ts` | the relevant named array (e.g., `homepageFAQs`) | §5 |
| | | `src/lib/faqData.es.ts` | same array with `Es` suffix (e.g., `homepageFAQsEs`) | §5 |
| 9 | **Location page intro text** | `src/lib/locationData.ts` | `cancunPageContent.intro` (or other city) | §8 |
| | | `src/lib/locationData.ts` | `cancunPageContentEs` (Spanish version) | §8 |
| 10 | **Guide page body text** | `src/pages/guide/[page-name].tsx` | `isEs ? "Spanish text" : "English text"` | §16 |

> ⚠️ **Phone number alert:** Two different numbers exist in the codebase — `+52 998 123 4567` (public-facing) and `+52 984 123 4567` (used in schema.ts, CTABox.tsx, [slug].tsx). See Section 1 for the full inconsistency breakdown.

---

## Table of Contents

**Quick start:** [Quick Reference Card](#quick-reference-card--10-most-common-edits) (top of this file)

1. [Contact Information](#section-1-contact-information-most-important) — phone (7 files!), email (4 files), address
2. [Tour Packages](#section-2-tour-packages-tourDatats) — prices, titles, descriptions, highlights
3. [Images](#section-3-images) — adding/replacing tour and guide images
4. [Website Text & UI Labels](#section-4-website-text--ui-labels-ents--ests) — nav labels, footer text, buttons
5. [FAQ Content](#section-5-faq-content-faqDatats) — all FAQ arrays
6. [Blog Posts](#section-6-blog-posts-blogDatats) — editing and adding blog posts
7. [Reviews / Testimonials](#section-7-reviews--testimonials-reviewsDatats) — the 25 review entries
8. [Location Page Content](#section-8-location-page-content-locationDatats) — city page text
9. [Complete SEO System](#section-9-complete-seo-system) — BASE_URL (5 files!), meta, schemas
10. [Colors & Fonts](#section-10-colors--fonts-indexcss--tailwindconfigts) — brand colors and typography
11. [Sitemap & Robots](#section-11-sitemap--robots-public) — crawl rules
12. [Header Navigation](#section-12-header-navigation-headertsx) — nav menus
13. [Footer Links](#section-13-footer-links-footertsx) — footer columns
14. [Common Mistakes to Avoid](#section-14-common-mistakes-to-avoid) — critical warnings
15. [SEO Strategies Reference](#section-15-seo-strategies--kahan-kya-use-ho-raha-hai-aur-impact-kya-hai) — 21 strategies documented
16. [Page-wise Content Editing](#section-16-page-wise-content-editing-guide) — how to edit each page type
17. [Keyword Map](#section-17-keyword-map--kis-page-per-kaunsa-keyword-target-hai) — all ~50 URLs mapped
18. [Critical Editing Rules](#section-18-critical-editing-rules) — 15 mandatory rules to prevent breakage

---

## SECTION 1: CONTACT INFORMATION (Most Important)

Contact details are scattered across **multiple files**. When you update one, you must update ALL of them.

---

### Phone Number

⚠️ **INCONSISTENCY FOUND IN CODEBASE:** Two different phone numbers currently exist across files. Before updating, decide which is correct and fix ALL locations below.

- **`+52 998 123 4567`** — used in public-facing UI (Header, Footer, Contact page, Cancellation policy)
- **`+52 984 123 4567`** — used in Google schema data and tour sidebar widget

**All 7 files that contain a phone number — update every one:**

| File | Line | Current value | Where it appears |
|------|------|---------------|-----------------|
| `src/components/layout/Header.tsx` | ~75 | `+52 998 123 4567` | Top navigation bar |
| `src/components/layout/Footer.tsx` | ~24 | `+52 998 123 4567` | Page footer |
| `src/lib/schema.ts` | 16 | `"+52-984-123-4567"` | Google Knowledge Panel / rich results |
| `src/pages/practical/contact.tsx` | ~265 | `+52 998 123 4567` | Contact page sidebar |
| `src/pages/practical/cancellation-policy.tsx` | ~45, 50 | `+52 998 123 4567` | Cancellation instructions text |
| `src/components/features/tours/CTABox.tsx` | 12 | `"+52-984-123-4567"` | "Need Help Choosing?" widget on tour pages |
| `src/pages/tours/[slug].tsx` | ~570 | `+52 984 123 4567` | Call button in tour detail page sidebar |

**Before (Header.tsx):**
```tsx
// src/components/layout/Header.tsx
<a href="tel:+529981234567" className="...">
  <Phone className="h-3 w-3" />
  <span>+52 998 123 4567</span>
</a>
```

**After (example change to +52 984 567 8901):**
```tsx
// src/components/layout/Header.tsx
<a href="tel:+529845678901" className="...">
  <Phone className="h-3 w-3" />
  <span>+52 984 567 8901</span>
</a>
```

**Before (CTABox.tsx line 12):**
```tsx
const CTABox = ({ title, subtitle, phone = "+52-984-123-4567" }: CTABoxProps) => {
```

**After:**
```tsx
const CTABox = ({ title, subtitle, phone = "+52-984-567-8901" }: CTABoxProps) => {
```

**Before (schema.ts line 16):**
```ts
telephone: "+52-984-123-4567",
```

**After:**
```ts
telephone: "+52-984-567-8901",
```

> ✅ TIP: The `href="tel:..."` value must have NO spaces or dashes — just digits with country code. The display text and `schema.ts` value can include dashes for readability.

---

### Email Address

Currently: `info@chichenitzatravel.com`

**All 4 files that contain the email address — update every one:**

| File | Line | Where it appears |
|------|------|-----------------|
| `src/components/layout/Footer.tsx` | ~27 | Page footer |
| `src/lib/schema.ts` | 17 | Google rich results (`email` field) |
| `src/pages/practical/contact.tsx` | ~269 | Contact page sidebar |
| `src/pages/practical/cancellation-policy.tsx` | ~44, 49 | "How to cancel" instructions |

**Before (Footer.tsx):**
```tsx
// src/components/layout/Footer.tsx
<a href="mailto:info@chichenitzatravel.com" className="...">
  <Mail className="h-4 w-4" /> info@chichenitzatravel.com
</a>
```

**After:**
```tsx
// src/components/layout/Footer.tsx
<a href="mailto:hello@mayaexplorertours.com" className="...">
  <Mail className="h-4 w-4" /> hello@mayaexplorertours.com
</a>
```

**Before (cancellation-policy.tsx ~line 44):**
```ts
"Or email us at info@chichenitzatravel.com with your booking reference number",
```

**After:**
```ts
"Or email us at hello@mayaexplorertours.com with your booking reference number",
```

---

### WhatsApp Link

There is no dedicated WhatsApp link in the current codebase. If you want to add one, it would go in `Header.tsx` or `Footer.tsx` using the format:

```
https://wa.me/529981234567
```

(Replace digits with your actual number, no spaces or special characters.)

---

### Physical Address

Currently: `5th Avenue #123, Playa del Carmen` (schema) / `Cancún, Quintana Roo, México` (footer display)

Note: The contact.tsx sidebar also displays `Cancún, Quintana Roo, MX` inline.

| File | What to search for | Notes |
|------|--------------------|-------|
| `src/lib/schema.ts` | `streetAddress` | Lines 20-25 — full postal address for Google rich results |
| `src/components/layout/Footer.tsx` | `Cancún, Quintana Roo, México` | Line 30 — display address in footer |
| `src/pages/practical/contact.tsx` | `Cancún, Quintana Roo, MX` | ~Line 273 — sidebar on contact page |

**Before (schema.ts lines 19-25):**
```ts
// src/lib/schema.ts
address: {
  "@type": "PostalAddress",
  streetAddress: "5th Avenue #123",
  addressLocality: "Playa del Carmen",
  addressRegion: "Quintana Roo",
  postalCode: "77710",
  addressCountry: "MX",
},
```

**After (example):**
```ts
// src/lib/schema.ts
address: {
  "@type": "PostalAddress",
  streetAddress: "Av. Kukulcan Km 9",
  addressLocality: "Cancún",
  addressRegion: "Quintana Roo",
  postalCode: "77500",
  addressCountry: "MX",
},
```

**Before (Footer.tsx line 30):**
```tsx
// src/components/layout/Footer.tsx
<span className="flex items-center gap-2">
  <MapPin className="h-4 w-4" /> Cancún, Quintana Roo, México
</span>
```

---

### Social Media URLs

Currently in `src/lib/schema.ts` (lines 34-38):

```ts
// src/lib/schema.ts
sameAs: [
  "https://www.facebook.com/chichenitzatours",
  "https://www.instagram.com/chichenitzatours",
  "https://twitter.com/chichenitza_tours",
],
```

**To update, replace each URL with your actual profile URL:**

```ts
// src/lib/schema.ts
sameAs: [
  "https://www.facebook.com/YOUR-FACEBOOK-PAGE",
  "https://www.instagram.com/YOUR-INSTAGRAM-HANDLE",
  "https://twitter.com/YOUR-TWITTER-HANDLE",
],
```

> ⚠️ WARNING: There are no social media icon links in the Footer currently. If you add them, add them as `<a>` tags inside `Footer.tsx`.

---

### Website Domain

Currently: `https://chichenitzatravel.com`

This appears in **4 locations** and must all be updated together when you go live with a new domain:

| File | Line | What to search for |
|------|------|--------------------|
| `src/lib/schema.ts` | 4 | `const BASE_URL = "https://chichenitzatravel.com"` |
| `src/lib/seo.ts` | 5 | `const BASE_URL = "https://chichenitzatravel.com"` |
| `public/sitemap.xml` | Every `<loc>` tag | `https://chichenitzatravel.com` |
| `public/robots.txt` | Last line | `Sitemap: https://chichenitzatravel.com/sitemap.xml` |

**Before:**
```ts
// src/lib/schema.ts  AND  src/lib/seo.ts
const BASE_URL = "https://chichenitzatravel.com";
```

**After:**
```ts
const BASE_URL = "https://yourdomain.com";
```

---

## SECTION 2: TOUR PACKAGES (tourData.ts)

**File:** `src/lib/tourData.ts`
**Spanish version:** `src/lib/tourData.es.ts` ← must be updated in parallel

---

### Full Tour Object Structure (Annotated)

Here is the complete structure of one tour, with every field explained:

```ts
// src/lib/tourData.ts
{
  id: "classic-day-tour",          // NEVER change this — it's used internally as a unique key
  slug: "chichen-itza-day-tour-from-cancun",  // URL path: /tours/[this-value]
  title: "Classic Chichen Itza Day Tour from Cancun",  // Full display title on page
  shortTitle: "Classic Day Tour",  // Short title for cards and breadcrumbs
  description: "Experience the wonder...",  // Long description paragraph
  shortDescription: "Full-day guided tour with cenote swim...",  // Short card text
  h1: "Chichen Itza Day Tour from Cancun – Full Day Experience",  // Main page heading (H1 tag)
  metaTitle: "Chichen Itza Day Tour from Cancun - From $89 | Maya Explorer",  // Browser tab title & Google title
  metaDescription: "Full-day Chichen Itza tour...",  // Google search result snippet (max ~155 chars)
  keywords: ["chichen itza day tour", "cancun to chichen itza"],  // SEO keywords array
  heroImage: "/images/tours/classic-day-tour.jpg",  // (Legacy — actual image comes from tourImages.ts)
  images: [                        // Additional product images shown in gallery
    { url: "/images/...", alt: "Description of image", title: "Caption" },
  ],
  price: { adult: 89, child: 45, infant: 0 },  // Prices in USD
  originalPrice: 99,               // Crossed-out "was" price — REMOVE field if no discount
  currency: "USD",                 // Always USD
  duration: "12 hours",            // Text displayed to user
  durationHours: 12,               // Number used for filters
  groupSize: { min: 2, max: 15, type: "small-group" },  // Min/max guests, type label
  tourType: "group",               // "group" | "private" | "budget" | "family" | "luxury"
  departureCity: ["cancun", "playa-del-carmen", "riviera-maya"],  // Which city pages list this tour
  highlights: [                    // Bullet points shown in the "Highlights" section
    "UNESCO World Heritage Site exploration",
    "Refreshing swim at Cenote Ik Kil",
  ],
  inclusions: [                    // What's included (green checkmarks)
    "Round-trip air-conditioned transportation",
    "Certified archaeologist guide (English/Spanish)",
  ],
  exclusions: ["Gratuities", "Personal expenses"],  // What's NOT included (red X marks)
  itinerary: [                     // Step-by-step timeline
    { time: "6:00 AM", title: "Hotel Pickup", description: "...", icon: "bus" },
  ],
  meetingPoint: {
    address: "Pickup from Cancun Hotel Zone hotels",
    instructions: "Please wait in lobby 5 minutes before pickup",  // (optional)
    coordinates: { lat: 21.1619, lng: -86.8515 }
  },
  rating: 4.8,                     // Star rating shown on card (1.0 – 5.0)
  reviewCount: 2847,               // Number of reviews shown
  featured: true,                  // true = appears on homepage featured section
  available: true,                 // false = tour is hidden / sold out
  badge: "Best Seller",            // Label shown on tour card badge
  category: ["day-tours", "cenote-tours", "small-group"],  // Used for category filter pages
},
```

---

### How to Change a Tour PRICE

**File:** `src/lib/tourData.ts`

Search for the tour by its `title` or `id`, then find the `price` field:

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
price: { adult: 89, child: 45, infant: 0 },
originalPrice: 99,
```

**After (raising adult price to $95, removing discount):**
```ts
price: { adult: 95, child: 48, infant: 0 },
```

> ⚠️ WARNING: If `originalPrice` is present, it shows as a crossed-out "was" price. Delete that line entirely if you don't want to show a discount.

> ✅ TIP: Also update the `metaTitle` if it mentions a specific price (e.g., `"From $89"`).

> ✅ TIP: The Spanish file `tourData.es.ts` does NOT have prices — prices only live in the English file.

---

### How to Change a Tour TITLE, shortTitle, h1

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
title: "Classic Chichen Itza Day Tour from Cancun",
shortTitle: "Classic Day Tour",
h1: "Chichen Itza Day Tour from Cancun – Full Day Experience",
```

**After:**
```ts
title: "Classic Chichen Itza Full-Day Tour from Cancun",
shortTitle: "Classic Full-Day Tour",
h1: "Chichen Itza Full-Day Tour from Cancun – Complete Experience",
```

Then open `src/lib/tourData.es.ts` and update the same tour (find it by its key `"classic-day-tour"`):

```ts
// src/lib/tourData.es.ts — "classic-day-tour"
title: "Tour Clásico de Día Completo a Chichén Itzá desde Cancún",
shortTitle: "Tour Clásico de Día Completo",
h1: "Tour de Día Completo a Chichén Itzá desde Cancún – Experiencia Completa",
```

---

### How to Update metaTitle and metaDescription for SEO

The `metaTitle` is what appears as the blue link in Google. The `metaDescription` is the snippet below it.

- `metaTitle`: Keep under **60 characters**. Include the main keyword and brand name.
- `metaDescription`: Keep under **155 characters**. Include a call to action.

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
metaTitle: "Chichen Itza Day Tour from Cancun - From $89 | Maya Explorer",
metaDescription: "Full-day Chichen Itza tour from Cancun with expert guide, lunch, and cenote swim. Small groups, free cancellation. Book your adventure today!",
```

**After:**
```ts
metaTitle: "Chichen Itza Day Tour from Cancun - From $95 | Maya Explorer",
metaDescription: "Full-day Chichen Itza tour from Cancun with expert guide, buffet lunch, and cenote swim. Small groups, free cancellation. Book today!",
```

> ⚠️ WARNING: Do NOT update metaTitle/metaDescription in the Spanish file (`tourData.es.ts`) — those fields don't exist there. The Spanish SEO data lives in the same English file.

---

### How to Edit Highlights, Inclusions, Exclusions

These are simple arrays of strings. Add, remove, or edit lines freely.

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
highlights: [
  "UNESCO World Heritage Site exploration",
  "Refreshing swim at Cenote Ik Kil",
  "Traditional Yucatecan buffet lunch",
],
```

**After (adding a new item and editing one):**
```ts
highlights: [
  "UNESCO World Heritage Site exploration",
  "Swim in crystal-clear Cenote Ik Kil",
  "Traditional Yucatecan buffet lunch",
  "Free time to explore the artisan market",
],
```

> ✅ TIP: Every line must end with a comma, including the last one.

Then update the same array in `tourData.es.ts` for the Spanish translation.

---

### How to Edit Itinerary Steps

Each step has `time`, `title`, `description`, and `icon`.

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
itinerary: [
  { time: "6:00 AM", title: "Hotel Pickup", description: "Comfortable AC van picks you up from your hotel lobby in the Cancun Hotel Zone.", icon: "bus" },
  { time: "9:30 AM", title: "Arrive at Chichen Itza", description: "Beat the crowds with early access to the UNESCO World Heritage archaeological zone.", icon: "landmark" },
],
```

**After (changing pickup time):**
```ts
itinerary: [
  { time: "6:30 AM", title: "Hotel Pickup", description: "Comfortable AC van picks you up from your hotel in the Cancun Hotel Zone.", icon: "bus" },
  { time: "10:00 AM", title: "Arrive at Chichen Itza", description: "Beat the crowds with early access to the UNESCO World Heritage archaeological zone.", icon: "landmark" },
],
```

> ✅ TIP: The `icon` field uses icon names (like `"bus"`, `"landmark"`, `"waves"`, `"utensils"`, `"camera"`). You can leave it unchanged when editing time/title/description.

---

### How to Change groupSize min/max

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
groupSize: { min: 2, max: 15, type: "small-group" },
```

**After (raising max group size):**
```ts
groupSize: { min: 2, max: 18, type: "small-group" },
```

Valid `type` values: `"small-group"`, `"large-group"`, `"private"`

---

### How to Add or Remove a Departure City

**Before:**
```ts
// src/lib/tourData.ts — "classic-day-tour"
departureCity: ["cancun", "playa-del-carmen", "riviera-maya"],
```

**After (adding Tulum):**
```ts
departureCity: ["cancun", "playa-del-carmen", "riviera-maya", "tulum"],
```

**After (removing Riviera Maya):**
```ts
departureCity: ["cancun", "playa-del-carmen"],
```

Valid departure city values: `"cancun"`, `"playa-del-carmen"`, `"tulum"`, `"riviera-maya"`, `"merida"`

---

### How to Toggle "featured" or "available" Status

```ts
// src/lib/tourData.ts — any tour
featured: true,    // Change to false to remove from homepage featured section
available: true,   // Change to false to hide/disable this tour sitewide
```

---

### How to Change the Badge Label

```ts
// src/lib/tourData.ts — any tour
badge: "Best Seller",   // Change to any text: "New", "Limited", "Popular", etc.
```

Current badges used: `"Best Seller"`, `"Premium"`, `"Unique Experience"`, `"Most Popular"`, `"Best Value"`, `"Family Pick"`, `"Unique"`, `"Culture Pick"`, `"Ultimate Experience"`, `"3-in-1 Value"`, `"Adventure Pick"`, `"Local Favorite"`

---

### Spanish Version (tourData.es.ts)

`src/lib/tourData.es.ts` contains Spanish translations for the **display text** of each tour. It is keyed by the same `id` as in `tourData.ts`.

Fields in the Spanish file:
- `title`, `shortTitle`, `shortDescription`, `description`, `h1`
- `duration` (e.g., `"12 horas"`)
- `badge` (translated badge label)
- `highlights`, `inclusions`, `exclusions` (arrays)
- `itinerary` (steps with `time`, `title`, `description` — no `icon`)

> ⚠️ WARNING: Every change to visible text in `tourData.ts` must have a matching translation update in `tourData.es.ts`. Prices, IDs, slugs, and SEO fields stay in `tourData.ts` only.

---

## SECTION 3: IMAGES

This website uses **local image files** (not external URLs). Images are stored in the `src/assets/` folder.

---

### Image Folder Map

| Image Type | Folder | File Naming Pattern |
|------------|--------|---------------------|
| Tour hero images | `src/assets/tours/` | `classic-day-tour.webp`, `private-vip-tour.webp`, etc. |
| Tour gallery images | `src/assets/tours/gallery/` | `classic-day-1.webp` through `classic-day-15.webp` |
| Combo tour heroes | `src/assets/combo-tours/` | `coba-ruins-hero.webp`, etc. |
| Combo tour galleries | `src/assets/combo-tours/gallery/` | `coba-ruins-1.webp` through `coba-ruins-15.webp` |
| Location images | `src/assets/locations/` | `cancun.webp`, `playa-del-carmen.webp`, etc. |
| Guide article images | `src/assets/guide/` | `best-time-to-visit.webp`, `dress-code.webp`, etc. |

---

### Tour Hero Image Names

Each tour's main image filename matches its `id` in `tourData.ts`:

| Tour ID | Hero Image File |
|---------|----------------|
| `classic-day-tour` | `src/assets/tours/classic-day-tour.webp` |
| `private-vip-tour` | `src/assets/tours/private-vip-tour.webp` |
| `sunrise-tour` | `src/assets/tours/sunrise-tour.webp` |
| `cenote-ik-kil-combo` | `src/assets/tours/cenote-combo.webp` |
| `budget-express` | `src/assets/tours/budget-express.webp` |
| `family-adventure` | `src/assets/tours/family-adventure.webp` |
| `night-light-show` | `src/assets/tours/night-show.webp` |
| `chichen-valladolid-combo` | `src/assets/tours/valladolid-combo.webp` |
| `private-sunrise-tour` | `src/assets/tours/private-sunrise.webp` |
| `budget-day-playa` | `src/assets/tours/budget-playa.webp` |
| `cenote-saamal-combo` | `src/assets/tours/cenote-saamal.webp` |
| `ek-balam-combo` | `src/assets/tours/ek-balam-combo.webp` |
| `merida-cultural-tour` | `src/assets/tours/merida-cultural.webp` |

---

### How to Replace an Image

**Step 1:** Prepare your new image in `.webp` format, at similar dimensions to the original.

**Step 2:** Navigate to the correct folder (e.g., `src/assets/tours/`).

**Step 3:** Replace the existing file with your new file using the **exact same filename**.
- ✅ Correct: Replace `classic-day-tour.webp` with your new file named `classic-day-tour.webp`
- ❌ Wrong: Uploading `Classic_Day_Tour_NEW.jpg` — wrong name, wrong format

**Step 4:** Do NOT change the filename in `src/lib/tourImages.ts`. Since the filename stays the same, the code automatically picks up the new image.

> ⚠️ WARNING: Image filenames are case-sensitive. `Classic-Day-Tour.webp` is NOT the same as `classic-day-tour.webp`. Always use lowercase letters and hyphens (not underscores).

> ✅ TIP: Recommended format is `.webp`. Recommended dimensions for tour heroes are approximately 1200×800px. Gallery images should be at least 800×600px.

---

### How Images Are Registered (tourImages.ts)

All images are imported in `src/lib/tourImages.ts`. This file uses JavaScript `import` statements at the top, then maps tour IDs to images.

You only need to edit this file if you are **adding a brand new image with a new filename**. If you replace an existing file with the same name, you do NOT need to touch this file.

---

## SECTION 4: WEBSITE TEXT & UI LABELS (en.ts + es.ts)

**English file:** `src/lib/i18n/translations/en.ts`
**Spanish file:** `src/lib/i18n/translations/es.ts`

These two files control all the static text labels used throughout the website — buttons, headings, navigation items, trust badges, and more.

> ⚠️ WARNING: Always update BOTH `en.ts` AND `es.ts` whenever you change any text label. If you only update one, the website will show different text depending on which language the user has selected.

---

### How to Find and Change Text

Each line follows the pattern:
```ts
"key.name": "The actual text shown on screen",
```

---

### Hero Section Text

```ts
// src/lib/i18n/translations/en.ts
"hero.h1": "Best Chichen Itza Tours & Day Trips 2026",
"hero.subtitle": "Explore one of the New Seven Wonders of the World. Book guided tours from Cancún, Playa del Carmen & Tulum with free cancellation.",
"hero.cta": "Explore All Tours",
"hero.rating": "Rated 4.8/5 from 10,000+ travelers",
```

**To change the hero headline for 2027:**

Before (`en.ts`):
```ts
"hero.h1": "Best Chichen Itza Tours & Day Trips 2026",
```

After (`en.ts`):
```ts
"hero.h1": "Best Chichen Itza Tours & Day Trips 2027",
```

Before (`es.ts`):
```ts
"hero.h1": "Los Mejores Tours a Chichén Itzá 2026",
```

After (`es.ts`):
```ts
"hero.h1": "Los Mejores Tours a Chichén Itzá 2027",
```

---

### Top Bar Text (3 trust lines above the navigation)

```ts
// src/lib/i18n/translations/en.ts
"topBar.freeCancellation": "✓ Free Cancellation",
"topBar.instantConfirmation": "✓ Instant Confirmation",
"topBar.bestPrice": "✓ Best Price Guarantee",
```

```ts
// src/lib/i18n/translations/es.ts
"topBar.freeCancellation": "✓ Cancelación Gratuita",
"topBar.instantConfirmation": "✓ Confirmación Inmediata",
"topBar.bestPrice": "✓ Mejor Precio Garantizado",
```

---

### Navigation Labels

```ts
// src/lib/i18n/translations/en.ts
"nav.tours": "Tours",
"nav.guide": "Guide",
"nav.blog": "Blog",
"nav.faq": "FAQ",
"nav.bookNow": "Book Now →",
```

---

### Footer Description

```ts
// src/lib/i18n/translations/en.ts
"footer.description": "Your trusted partner for unforgettable Chichen Itza experiences. Book with confidence — free cancellation on all tours.",
```

```ts
// src/lib/i18n/translations/es.ts
"footer.description": "Tu socio de confianza para experiencias inolvidables en Chichén Itzá. Reserva con confianza — cancelación gratuita en todos los tours.",
```

---

### Trust Badges Text

```ts
// src/lib/i18n/translations/en.ts
"trust.freeCancellation": "Free Cancellation",
"trust.freeCancellationSub": "Up to 24 hours before",
"trust.instantConfirmation": "Instant Confirmation",
"trust.instantConfirmationSub": "Booking confirmed immediately",
"trust.bestPrice": "Best Price Guarantee",
"trust.bestPriceSub": "Find it cheaper? We'll match",
"trust.secureCheckout": "Secure Checkout",
"trust.secureCheckoutSub": "256-bit SSL encryption",
```

---

### Copyright Year

```ts
// src/lib/i18n/translations/en.ts
"footer.copyright": "© 2026 Chichen Itza Tours. All rights reserved.",
```

```ts
// src/lib/i18n/translations/es.ts
"footer.copyright": "© 2026 Chichen Itza Tours. Todos los derechos reservados.",
```

---

## SECTION 5: FAQ CONTENT (faqData.ts)

**File:** `src/lib/faqData.ts`
**Spanish version:** `src/lib/faqData.es.ts`

---

### FAQ Arrays Available

The following named arrays exist in `faqData.ts`:

| Array Name | Used On |
|------------|---------|
| `homepageFAQs` | Homepage FAQ section |
| `cancunFAQs` | Tours from Cancún page |
| `playaDelCarmenFAQs` | Tours from Playa del Carmen page |
| `tulumFAQs` | Tours from Tulum page |
| `rivieraMayaFAQs` | Tours from Riviera Maya page |
| `meridaFAQs` | Tours from Mérida page |
| `generalChichenItzaFAQs` | General tour pages |
| `dayToursFAQs` | Day tours category page |
| `privateToursFAQs` | Private tours category page |
| `cenoteToursFAQs` | Cenote tours category page |
| `sunriseToursFAQs` | Sunrise tours category page |
| `smallGroupFAQs` | Small group tours category page |
| `practicalFAQs` | FAQ page, booking info pages |

---

### How to Edit an Existing FAQ

Find the question you want to change and edit the `question` or `answer` text:

**Before:**
```ts
// src/lib/faqData.ts — homepageFAQs
{
  question: "How do I get to Chichen Itza from Cancun?",
  answer: "Chichen Itza is about 200 km (2.5 hours) from Cancun. The easiest way is to book a guided tour with round-trip transportation. You can also rent a car or take the ADO bus from Cancun Bus Station.",
},
```

**After:**
```ts
{
  question: "How do I get to Chichen Itza from Cancun?",
  answer: "Chichen Itza is about 200 km (approximately 2.5 hours) from Cancun. The easiest and most convenient way is to book a guided tour with round-trip transportation, lunch, and a cenote stop included. You can also rent a car or take the ADO bus.",
},
```

Then open `faqData.es.ts` and update the matching Spanish question.

---

### How to Add a New FAQ Item

Find the correct array and add your item. Every item must have at minimum a `question` and `answer`:

```ts
// src/lib/faqData.ts — add to homepageFAQs (or any other array)
{
  question: "Do you offer group discounts?",
  answer: "Yes! Groups of 10 or more receive a 10% discount on all standard tours. Contact us directly for private group quotes.",
  category: "pricing",  // optional — can omit this line
},
```

> ✅ TIP: The `category` field is optional. It's just a tag for internal organization and doesn't affect how the FAQ is displayed.

> ⚠️ WARNING: Add a comma after the closing `}` of your new item.

---

### How to Delete an FAQ Item

Find the item you want to remove and delete the entire block from opening `{` to closing `},` (including the trailing comma):

```ts
// DELETE this entire block:
{
  question: "Can I climb the pyramid?",
  answer: "No, climbing El Castillo has been prohibited since 2006...",
},
```

---

### Spanish Version

`src/lib/faqData.es.ts` contains the same arrays with `Es` suffix (e.g., `homepageFAQsEs`, `cancunFAQsEs`, `playaDelCarmenFAQsEs`, etc.). Every FAQ item you add or change in the English file must be mirrored in the Spanish file.

---

## SECTION 6: BLOG POSTS (blogData.ts)

**File:** `src/lib/blogData.ts`
**Spanish version:** `src/lib/blogData.es.ts`

---

### BlogPost Interface — Every Field Explained

```ts
// src/lib/blogData.ts
{
  slug: "spring-equinox-chichen-itza-guide",   // URL: /blog/[this-value] — lowercase, hyphens only
  title: "The Spring Equinox at Chichen Itza: Everything You Need to Know",  // Page heading
  metaTitle: "Spring Equinox at Chichen Itza 2026 – Complete Guide",  // Browser tab & Google title
  metaDescription: "Plan your Spring Equinox visit...",  // Google snippet (max ~155 chars)
  excerpt: "Every March 20-21, thousands gather...",  // Short summary shown on blog listing page
  content: [                                   // Array of paragraph strings — one string = one paragraph
    "The Spring Equinox at Chichen Itza is one of Mexico's...",
    "This phenomenon demonstrates the incredible astronomical knowledge...",
  ],
  author: "Maya Explorer Tours",               // Author name displayed on post
  date: "2026-01-15",                          // Publication date in YYYY-MM-DD format
  category: "Events",                          // Category label (e.g., "Events", "Travel Tips", "Guides", "History", "Photography")
  readTime: "6 min read",                      // Estimated reading time
  image: "/images/blog/equinox.jpg",           // (Legacy path — image file is loaded from src/assets/)
  imageAlt: "Serpent shadow descending El Castillo...",  // Alt text for accessibility & SEO
  tags: ["equinox", "el castillo", "events"],  // Tags array for filtering
}
```

---

### How to Add a New Blog Post

Add a new object to the `blogPosts` array in `src/lib/blogData.ts`:

```ts
// src/lib/blogData.ts — add inside the blogPosts array
{
  slug: "best-restaurants-near-chichen-itza",
  title: "5 Best Restaurants Near Chichen Itza You Must Try",
  metaTitle: "Best Restaurants Near Chichen Itza 2026 – Dining Guide",
  metaDescription: "Discover the 5 best restaurants near Chichen Itza. From authentic Yucatecan buffets to local family spots. Where to eat on your tour day.",
  excerpt: "After exploring the ancient ruins, you'll be hungry. Here are the best dining options near Chichen Itza.",
  content: [
    "Visiting Chichen Itza works up an appetite. Fortunately, the area around the archaeological zone has several excellent dining options...",
    "The most popular option is the buffet at Hacienda Chichén, located just steps from the entrance. The spread features authentic Yucatecan dishes...",
    "For a more casual experience, the local food stalls along the entrance road offer fresh tortas, tamales, and refreshing agua fresca at very reasonable prices.",
  ],
  author: "Maya Explorer Tours",
  date: "2026-03-01",
  category: "Travel Tips",
  readTime: "4 min read",
  image: "/images/blog/restaurants.jpg",
  imageAlt: "Traditional Yucatecan buffet spread near Chichen Itza",
  tags: ["food", "restaurants", "travel tips", "yucatan"],
},
```

Then add the Spanish translation to `blogData.es.ts` using the same `slug`.

---

### How to Change slug, title, metaTitle, metaDescription

```ts
// src/lib/blogData.ts
slug: "cenotes-near-chichen-itza",              // ← changing this changes the page URL
title: "7 Best Cenotes Near Chichen Itza Worth Swimming In",
metaTitle: "7 Best Cenotes Near Chichen Itza – Swimming Guide 2026",
metaDescription: "Discover the 7 best cenotes near Chichen Itza for swimming. From famous Ik Kil to hidden gems. Tips, prices, and what to bring.",
```

> ⚠️ WARNING: If you change the `slug`, the old URL will stop working. Update `sitemap.xml` to reflect the new URL.

---

### How to Update Author, Date, Category, ReadTime

```ts
author: "Carlos Mendez",     // Change to any name or keep as "Maya Explorer Tours"
date: "2026-04-10",          // Format: YYYY-MM-DD
category: "History",         // Free text label
readTime: "5 min read",      // Free text — estimate manually
```

---

### How to Edit Blog Content

The `content` field is an **array of strings**. Each string is one paragraph.

**Before:**
```ts
content: [
  "The Spring Equinox at Chichen Itza is one of Mexico's most spectacular events.",
  "This phenomenon demonstrates the incredible astronomical knowledge of the ancient Maya.",
],
```

**After (adding a paragraph and editing one):**
```ts
content: [
  "The Spring Equinox at Chichen Itza is one of Mexico's most spectacular and well-attended astronomical events.",
  "This phenomenon demonstrates the incredible astronomical knowledge of the ancient Maya, who designed the pyramid with mathematical precision over 1,000 years ago.",
  "If you plan to visit during the equinox, book at least 3 months in advance as tours sell out quickly.",
],
```

---

### Spanish Version

`src/lib/blogData.es.ts` uses the same `slug` values. Make sure both files have matching slugs — the site uses the slug to link English and Spanish versions of each post.

---

## SECTION 7: REVIEWS / TESTIMONIALS (reviewsData.ts)

**File:** `src/lib/reviewsData.ts`

---

### Review Interface — All Fields

```ts
// src/lib/reviewsData.ts
{
  id: "r1",                     // Unique ID — never duplicate. Use "r26", "r27", etc. for new ones
  author: "Sarah M.",           // Reviewer's name
  location: "Dallas, TX",       // Reviewer's home city
  date: "2026-01-15",           // Date of review (YYYY-MM-DD format)
  rating: 5,                    // Star rating: 1, 2, 3, 4, or 5
  title: "Absolutely breathtaking experience",  // Short review headline
  content: "Our guide Carlos was phenomenal...",  // Full review text
  tourCategory: "sunrise",      // See valid values below
  departureCity: "cancun",      // See valid values below
  verified: true,               // Always keep as true
}
```

---

### How to Add a New Review

Add to the `reviews` array in `src/lib/reviewsData.ts`:

```ts
// src/lib/reviewsData.ts — add inside the reviews array
{ id: "r26", author: "Laura B.", location: "Boston, MA", date: "2026-03-10", rating: 5, title: "Perfect family experience", content: "We traveled with three kids aged 5, 8, and 12 and every one of them was absolutely riveted. The guide made the history fun and accessible. The cenote swim was the highlight of our entire trip to Mexico.", tourCategory: "day-tour", departureCity: "cancun", verified: true },
```

> ✅ TIP: All reviews are on one line in this file (no line breaks inside the object). Match that format when adding new ones.

---

### Valid tourCategory Values

| Value | Description |
|-------|-------------|
| `"sunrise"` | Sunrise tours |
| `"private"` | Private/VIP tours |
| `"day-tour"` | Standard day tours |
| `"ek-balam"` | Ek Balam combo tours |
| `"valladolid"` | Valladolid combo tours |
| `"cenote"` | Cenote combo tours |
| `"night"` | Night/light show tours |

---

### Valid departureCity Values

`"cancun"`, `"playa-del-carmen"`, `"tulum"`, `"riviera-maya"`, `"merida"`

---

### How to Edit an Existing Review

Find the review by its `id` and edit the relevant fields:

**Before:**
```ts
{ id: "r1", author: "Sarah M.", location: "Dallas, TX", date: "2026-01-15", rating: 5, title: "Absolutely breathtaking experience", content: "Our guide Carlos was phenomenal...", tourCategory: "sunrise", departureCity: "cancun", verified: true },
```

**After (correcting author name):**
```ts
{ id: "r1", author: "Sarah Miller", location: "Dallas, TX", date: "2026-01-15", rating: 5, title: "Absolutely breathtaking experience", content: "Our guide Carlos was phenomenal...", tourCategory: "sunrise", departureCity: "cancun", verified: true },
```

> ⚠️ WARNING: There is no Spanish version of `reviewsData.ts` — reviews are shown in their original language regardless of the site language setting.

---

## SECTION 8: LOCATION PAGE CONTENT (locationData.ts)

**File:** `src/lib/locationData.ts`

This file contains two types of content:

1. **`locations[]` array** — SEO metadata for each departure city page
2. **`cancunPageContent`, `playaDelCarmenPageContent`, `tulumPageContent`, `rivieraMayaPageContent`, `meridaPageContent`** — Full page text content

Spanish versions: `cancunPageContentEs`, `playaDelCarmenPageContentEs`, etc. (in the same file)

---

### How to Update a Location's metaTitle and metaDescription

Find the location in the `locations` array:

**Before:**
```ts
// src/lib/locationData.ts — locations array
{
  id: "cancun",
  name: "Cancún",
  slug: "cancun",
  description: "Explore Chichen Itza from Mexico's most popular beach destination...",
  distanceToChichen: "200 km (120 miles)",
  driveTime: "2.5 hours",
  heroImage: "/images/locations/cancun-chichen-itza.jpg",
  metaTitle: "Chichen Itza Tours from Cancún - Best Day Trips 2026 | From $89",
  metaDescription: "Book the best Chichen Itza tours from Cancún. Expert guides, small groups, lunch & cenote included. Free cancellation. Instant confirmation.",
  h1: "Chichen Itza Tours from Cancún",
},
```

**After (updating for 2027):**
```ts
{
  id: "cancun",
  name: "Cancún",
  slug: "cancun",
  description: "Explore Chichen Itza from Mexico's most popular beach destination...",
  distanceToChichen: "200 km (120 miles)",
  driveTime: "2.5 hours",
  heroImage: "/images/locations/cancun-chichen-itza.jpg",
  metaTitle: "Chichen Itza Tours from Cancún - Best Day Trips 2027 | From $89",
  metaDescription: "Book the best Chichen Itza tours from Cancún. Expert guides, small groups, lunch & cenote included. Free cancellation. Instant confirmation.",
  h1: "Chichen Itza Tours from Cancún",
},
```

---

### How to Update the Intro Paragraph Text

Find the relevant `PageContent` object (e.g., `cancunPageContent`):

**Before:**
```ts
// src/lib/locationData.ts — cancunPageContent
intro: `Discover the ancient Mayan wonder with our carefully curated Chichen Itza tours from Cancún. Located just 120 miles (2.5 hours drive) from Cancún's famous Hotel Zone...`,
```

**After:**
```ts
intro: `Discover the ancient Mayan wonder with our award-winning Chichen Itza tours from Cancún. Located just 120 miles (2.5 hours drive) from Cancún's Hotel Zone, Chichen Itza is the ultimate day trip from any Cancún beach resort...`,
```

---

### How to Update Timeline Steps

Find the `timeline` array inside the relevant page content:

**Before:**
```ts
// src/lib/locationData.ts — cancunPageContent.timeline
{ time: "6:00 AM", title: "Hotel Pickup", description: "Comfortable AC van picks you up from your Cancún Hotel Zone property" },
```

**After:**
```ts
{ time: "6:30 AM", title: "Hotel Pickup", description: "Modern AC van picks you up from your Cancún Hotel Zone property" },
```

---

### How to Update "Why Book" Bullets

**Before:**
```ts
// src/lib/locationData.ts — cancunPageContent.whyBook
{
  title: "Convenient Hotel Pickup",
  description: "Free pickup from all major Cancún Hotel Zone properties. Your adventure starts from your hotel lobby."
},
```

**After:**
```ts
{
  title: "Free Hotel Pickup",
  description: "Complimentary pickup from all Cancún Hotel Zone properties. Start your adventure right from your hotel lobby."
},
```

> ✅ TIP: Update the matching Spanish version (`cancunPageContentEs.whyBook`) in the same file.

---

## SECTION 9: COMPLETE SEO SYSTEM

This section covers every SEO-related file and setting across the codebase. The SEO system has **10 sub-areas** — each one controls a different part of how Google and social media see your website.

---

## 9A. Domain / BASE_URL — Update All 4 Files When Going Live

The placeholder domain `https://chichenitzatravel.com` appears in **4 separate files**. When you go live with a real domain, all 4 must be updated — missing any one of them will cause broken canonical links or incorrect schema data.

---

**FILE 1: `src/lib/seo.ts` (line 5)**

```ts
// src/lib/seo.ts
const BASE_URL = "https://chichenitzatravel.com";
```
Change to:
```ts
const BASE_URL = "https://yournewdomain.com";
```

---

**FILE 2: `src/lib/schema.ts` (line 4)**

```ts
// src/lib/schema.ts
const BASE_URL = "https://chichenitzatravel.com";
```
Change to:
```ts
const BASE_URL = "https://yournewdomain.com";
```

---

**FILE 3: `src/components/common/SEOHead.tsx` (lines 8–10)**

This file has **three separate values** to update:

```ts
// src/components/common/SEOHead.tsx
const DEFAULT_OG_IMAGE = "https://chichenitzatravel.com/images/chichen-itza-hero.jpg";
const SITE_NAME = "Chichen Itza Tours";
const BASE_URL = "https://chichenitzatravel.com";
```

Change to:
```ts
const DEFAULT_OG_IMAGE = "https://yournewdomain.com/images/chichen-itza-hero.jpg";
const SITE_NAME = "Your Brand Name Here";
const BASE_URL = "https://yournewdomain.com";
```

> ✅ TIP: `SITE_NAME` is what appears as the website name in social media sharing cards (Facebook, WhatsApp, Twitter). Update it to your real brand name.

---

**FILE 4: `public/sitemap.xml`**

The domain appears **100+ times** in this file. Use Find & Replace in VS Code:
- Find: `https://chichenitzatravel.com`
- Replace all with: `https://yournewdomain.com`

Also update `public/robots.txt` — the last line:
```
Sitemap: https://chichenitzatravel.com/sitemap.xml
```
Change to:
```
Sitemap: https://yournewdomain.com/sitemap.xml
```

---

**FILE 5 (hidden): `src/pages/tours/[slug].tsx` (line ~200)**

⚠️ This file constructs the canonical URL as a hardcoded string instead of using the `BASE_URL` constant. It will NOT automatically update when you change `seo.ts` or `schema.ts`.

```ts
// src/pages/tours/[slug].tsx — line ~200
canonical: `https://chichenitzatravel.com/tours/${tour.slug}`,
```

Change to (replacing only the domain part):
```ts
canonical: `https://yournewdomain.com/tours/${tour.slug}`,
```

Also on lines ~127–129 of the same file, the breadcrumb schema has hardcoded URLs:
```ts
{ "@type": "ListItem", position: 1, name: isEs ? "Inicio" : "Home", item: "https://chichenitzatravel.com" },
{ "@type": "ListItem", position: 2, name: "Tours", item: "https://chichenitzatravel.com/tours" },
{ "@type": "ListItem", position: 3, name: catMeta.label, item: `https://chichenitzatravel.com${catMeta.href}` },
```

Change all three to use `https://yournewdomain.com`.

---

## 9B. Homepage Meta Title & Description

**File:** `src/lib/i18n/translations/en.ts`

These two keys control the `<title>` tag and meta description shown in Google search results for the homepage:

```ts
// src/lib/i18n/translations/en.ts
"homeSeo.title": "Chichen Itza Tours – Best Guided Tours & Day Trips 2026",
"homeSeo.description": "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Private tours, sunrise visits, cenote combos. Free cancellation & instant confirmation.",
```

**Before (updating year):**
```ts
"homeSeo.title": "Chichen Itza Tours – Best Guided Tours & Day Trips 2026",
```

**After:**
```ts
"homeSeo.title": "Chichen Itza Tours – Best Guided Tours & Day Trips 2027",
```

Then update the Spanish version in `src/lib/i18n/translations/es.ts`:

```ts
// src/lib/i18n/translations/es.ts
"homeSeo.title": "Tours a Chichén Itzá – Los Mejores Tours Guiados 2026",
"homeSeo.description": "Reserva los mejores tours a Chichén Itzá desde Cancún, Playa del Carmen y Tulum. Tours privados, visitas al amanecer, combos con cenotes. Cancelación gratuita y confirmación inmediata.",
```

> ✅ TIP: Keep `metaTitle` under 60 characters and `metaDescription` under 155 characters for best Google display.

---

## 9C. OG Image (Social Media Sharing Preview)

**File:** `src/components/common/SEOHead.tsx` (line 8)

```ts
// src/components/common/SEOHead.tsx
const DEFAULT_OG_IMAGE = "https://chichenitzatravel.com/images/chichen-itza-hero.jpg";
```

This is the image that appears when someone shares your website link on Facebook, WhatsApp, Instagram Stories, or Twitter/X. It should be:
- At least **1200×630 pixels**
- A compelling hero photo of Chichen Itza
- Hosted on your live domain (not a relative path)

**After going live:**
```ts
const DEFAULT_OG_IMAGE = "https://yournewdomain.com/images/chichen-itza-hero.jpg";
```

> ⚠️ WARNING: Until you deploy the site to a real domain, the OG image won't work for social sharing previews. Test it after launch using Facebook's Sharing Debugger tool.

---

## 9D. Organization Schema (Google Knowledge Panel Data)

**File:** `src/lib/schema.ts`
**Search for:** `export const organizationSchema`

This is the structured data Google reads to build your business listing in search results (star ratings, phone, address, social links). Keep it accurate at all times.

```ts
// src/lib/schema.ts — organizationSchema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Maya Explorer Tours",                    // ← your real company name
  description: "Premier Chichen Itza tour operator...",  // ← business description
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/chichen-itza-hero.jpg`,
  telephone: "+52-984-123-4567",                  // ← your real phone (dashes allowed here)
  email: "info@chichenitzatravel.com",             // ← your real email
  address: {
    "@type": "PostalAddress",
    streetAddress: "5th Avenue #123",             // ← your real street address
    addressLocality: "Playa del Carmen",          // ← your city
    addressRegion: "Quintana Roo",                // ← your state/region
    postalCode: "77710",                          // ← your postal code
    addressCountry: "MX",                         // ← 2-letter country code
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",                           // ← your current average star rating
    reviewCount: "3247",                          // ← total number of reviews (update regularly)
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$89 - $299",                       // ← update when your prices change
  sameAs: [
    "https://www.facebook.com/chichenitzatours",  // ← your real Facebook page URL
    "https://www.instagram.com/chichenitzatours", // ← your real Instagram URL
    "https://twitter.com/chichenitza_tours",      // ← your real Twitter/X URL
  ],
};
```

> ✅ TIP: Update `reviewCount` and `ratingValue` every few months as your real reviews accumulate. These numbers appear directly in Google search results.

---

## 9E. Tour Product Schema — priceValidUntil (Annual Update Required)

**File:** `src/lib/schema.ts`
**Search for:** `generateTourProductSchema`

Inside this function, find:

```ts
// src/lib/schema.ts — generateTourProductSchema function
priceValidUntil: "2026-12-31",
```

> ⚠️ WARNING: This date must be updated **every year**. If it expires, Google may stop showing price-rich results (the green price snippet) for your tour pages. Update it to the last day of the current year.

**Before (year end approaching):**
```ts
priceValidUntil: "2026-12-31",
```

**After (updated for next year):**
```ts
priceValidUntil: "2027-12-31",
```

---

## 9F. Guide Pages Article Schema — dateModified (Update When Editing Content)

**File:** `src/lib/schema.ts`
**Search for:** `export const guideSchemas`

Each of the 8 guide pages has two date fields:

```ts
// src/lib/schema.ts — guideSchemas
"best-time-to-visit": createGuideArticleSchema({
  headline: "Best Time to Visit Chichen Itza - Complete 2026 Guide",
  description: "...",
  slug: "best-time-to-visit",
  datePublished: "2025-01-15",   // ← NEVER change this (original publish date)
  dateModified: "2026-02-01",    // ← UPDATE this whenever you edit the page content
}),
```

**Rule:**
- `datePublished` — set once when the guide was first created. **Never change it.**
- `dateModified` — update to today's date **every time you edit that guide page's content**.

> ⚠️ WARNING: If you edit a guide page's content but forget to update `dateModified`, Google thinks the content hasn't changed and may not re-crawl and re-index it promptly.

**All 8 guides and their current dateModified values:**

| Guide Slug | datePublished | dateModified (update when editing) |
|------------|---------------|-------------------------------------|
| `best-time-to-visit` | 2025-01-15 | 2026-02-01 |
| `what-to-bring` | 2025-01-20 | 2026-02-01 |
| `history-and-facts` | 2025-01-25 | 2026-02-15 |
| `how-to-get-there` | 2025-01-28 | 2026-02-15 |
| `entrance-fees` | 2025-02-01 | 2026-02-15 |
| `photography-tips` | 2025-02-05 | 2026-02-15 |
| `dress-code-and-rules` | 2025-02-08 | 2026-02-15 |
| `vs-other-ruins` | 2025-02-01 | 2026-02-15 |

**Example — updating dateModified after editing the entrance fees guide:**

```ts
// src/lib/schema.ts — guideSchemas
"entrance-fees": createGuideArticleSchema({
  headline: "Chichen Itza Entrance Fees 2026 – Complete Pricing Guide",
  description: "...",
  slug: "entrance-fees",
  datePublished: "2025-02-01",
  dateModified: "2026-03-20",    // ← updated to today's date
}),
```

---

## 9G. Location Schemas — aggregateRating Per City

**File:** `src/lib/schema.ts`
**Search for:** `export const locationSchemas`

Each departure city has its own schema block with a rating. Update these as your real per-city reviews grow:

```ts
// src/lib/schema.ts — locationSchemas
cancun: {
  ...
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",    // ← average rating for tours from Cancún
    reviewCount: "2891",   // ← total reviews from Cancún customers
  },
},
"playa-del-carmen": {
  ...
  aggregateRating: { ratingValue: "4.9", reviewCount: "1847" },
},
tulum: {
  ...
  aggregateRating: { ratingValue: "4.8", reviewCount: "1234" },
},
// riviera-maya and merida have no aggregateRating — can be added if needed
```

**Before (updating Cancún review count after growth):**
```ts
aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2891" },
```

**After:**
```ts
aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "3150" },
```

---

## 9H. Hreflang & Bilingual URLs (Critical for International SEO)

**File:** `src/lib/i18n/routeMap.ts`
**Search for:** `export const enToEsRoutes`

This file maps every English URL to its Spanish equivalent. The `SEOHead` component reads this map to add `<link rel="alternate" hreflang="...">` tags to every page — these tell Google which language version of a page to show to which users.

**Current route map (all existing pages):**

```ts
// src/lib/i18n/routeMap.ts
export const enToEsRoutes: Record<string, string> = {
  "/": "/es/",
  "/tours": "/es/tours",
  "/tours/day-tours": "/es/tours/excursiones-de-dia",
  "/tours/private-tours": "/es/tours/tours-privados",
  "/tours/sunrise-tours": "/es/tours/tours-al-amanecer",
  "/tours/cenote-tours": "/es/tours/tours-de-cenotes",
  "/tours/ek-balam-tours": "/es/tours/tours-ek-balam",
  "/tours/valladolid-tours": "/es/tours/tours-valladolid",
  "/tours/night-tours": "/es/tours/tours-nocturnos",
  "/tours-from/cancun": "/es/tours-desde/cancun",
  "/tours-from/playa-del-carmen": "/es/tours-desde/playa-del-carmen",
  "/tours-from/tulum": "/es/tours-desde/tulum",
  "/tours-from/riviera-maya": "/es/tours-desde/riviera-maya",
  "/tours-from/merida": "/es/tours-desde/merida",
  "/guide": "/es/guia",
  "/guide/best-time-to-visit": "/es/guia/mejor-epoca-para-visitar",
  "/guide/what-to-bring": "/es/guia/que-llevar",
  "/guide/history-and-facts": "/es/guia/historia-y-datos",
  "/guide/how-to-get-there": "/es/guia/como-llegar",
  "/guide/entrance-fees": "/es/guia/precios-de-entrada",
  "/guide/photography-tips": "/es/guia/consejos-de-fotografia",
  "/guide/dress-code-and-rules": "/es/guia/codigo-de-vestimenta",
  "/guide/vs-other-ruins": "/es/guia/comparacion-con-otras-ruinas",
  "/practical/faq": "/es/practico/preguntas-frecuentes",
  "/practical/contact": "/es/practico/contacto",
  "/practical/cancellation-policy": "/es/practico/politica-de-cancelacion",
  "/practical/testimonials": "/es/practico/testimonios",
  "/practical/booking-info": "/es/practico/informacion-de-reserva",
  "/tour-types/small-group": "/es/tipos-de-tours/grupos-pequenos",
  "/tour-types/luxury": "/es/tipos-de-tours/lujo",
  "/tour-types/budget": "/es/tipos-de-tours/economico",
  "/tour-types/family-friendly": "/es/tipos-de-tours/familiar",
  "/tour-types/vip-skip-the-line": "/es/tipos-de-tours/vip-sin-filas",
  "/combo-tours/cenote-ik-kil": "/es/combo-tours/cenote-ik-kil",
  "/combo-tours/coba-ruins": "/es/combo-tours/ruinas-de-coba",
  "/combo-tours/isla-mujeres": "/es/combo-tours/isla-mujeres",
  "/combo-tours/multi-day-yucatan": "/es/combo-tours/yucatan-varios-dias",
  "/blog": "/es/blog",
  "/blog/spring-equinox-chichen-itza-guide": "/es/blog/spring-equinox-chichen-itza-guide",
  "/blog/cenotes-near-chichen-itza": "/es/blog/cenotes-near-chichen-itza",
  "/blog/chichen-itza-vs-tulum-ruins": "/es/blog/chichen-itza-vs-tulum-ruins",
  "/blog/photographing-chichen-itza-like-a-pro": "/es/blog/photographing-chichen-itza-like-a-pro",
  "/blog/mayan-history-beginners-guide": "/es/blog/mayan-history-beginners-guide",
};
```

> ⚠️ WARNING: If you add a **new page** to the website, you MUST add it to this file or that page will be missing its hreflang tags, which damages international SEO.

**3-step process when adding a new page:**

**Step 1:** Create the page file in `src/pages/`.

**Step 2:** Add the route mapping to `routeMap.ts`:
```ts
// src/lib/i18n/routeMap.ts — add inside enToEsRoutes
"/your-new-page": "/es/tu-nueva-pagina",
```

**Step 3:** Add both URL versions to `public/sitemap.xml`:
```xml
<url>
  <loc>https://chichenitzatravel.com/your-new-page</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://chichenitzatravel.com/your-new-page"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://chichenitzatravel.com/es/tu-nueva-pagina"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://chichenitzatravel.com/your-new-page"/>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 9I. Tour-Level SEO (Per Tour Page)

**File:** `src/lib/tourData.ts`

Every tour has its own SEO fields inside its object:

```ts
// src/lib/tourData.ts — inside any tour object
metaTitle: "Chichen Itza Day Tour from Cancun - From $89 | Maya Explorer",
// Controls: <title> tag on that tour's individual page
// Rule: Keep under 60 characters. Include main keyword + price + brand name.

metaDescription: "Full-day Chichen Itza tour from Cancun with expert guide, lunch, cenote swim. Small groups, free cancellation. Book today!",
// Controls: meta description shown under the blue link in Google results
// Rule: Keep under 155 characters. Include a call to action.

keywords: ["chichen itza day tour", "cancun to chichen itza"],
// These are informational only — Google no longer uses the keywords meta tag directly.
// They can still help you remember what the page is targeting.

h1: "Chichen Itza Day Tour from Cancun – Full Day Experience",
// Controls: the large heading visible at the top of the tour page.
// Should include the primary keyword naturally.

slug: "chichen-itza-day-tour-from-cancun",
// Controls: the page URL → /tours/chichen-itza-day-tour-from-cancun
// Rule: lowercase letters and hyphens only. No spaces.
```

> ⚠️ WARNING: If you change a tour's `slug`, the old URL stops working. You must also:
> 1. Update `public/sitemap.xml` — find the old slug URL and replace it with the new one
> 2. Check if any other pages link to the old URL and update those links

**Example — updating a tour's metaTitle to reflect a new price:**

Before:
```ts
metaTitle: "Chichen Itza Day Tour from Cancun - From $89 | Maya Explorer",
```
After:
```ts
metaTitle: "Chichen Itza Day Tour from Cancun - From $95 | Maya Explorer",
```

---

## 9J. Default Meta Fallbacks (seo.ts)

**File:** `src/lib/seo.ts`
**Search for:** `getPageMeta`

When a page doesn't provide its own `title` or `description`, these fallback values are used:

```ts
// src/lib/seo.ts — getPageMeta function
title: meta.title || "Chichen Itza Tours – Best Guided Tours 2026",
description: meta.description || "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Free cancellation & instant confirmation.",
```

**To update the fallback year:**
```ts
title: meta.title || "Chichen Itza Tours – Best Guided Tours 2027",
description: meta.description || "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Free cancellation & instant confirmation.",
```

> ✅ TIP: These fallbacks are a safety net. Most pages set their own `metaTitle` and `metaDescription` — the fallback only shows on pages that don't.

---

## 9K. Robots.txt Rules

**File:** `public/robots.txt`

Current contents:
```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

Sitemap: https://chichenitzatravel.com/sitemap.xml
```

**What each rule does:**

| Rule | Meaning |
|------|---------|
| `Allow: /` | All pages can be indexed by Google |
| `Disallow: /api/` | API routes are hidden from search engines |
| `Disallow: /*?*` | URLs with query parameters (e.g., `?page=2`) are blocked — prevents duplicate content indexing |
| `Sitemap: ...` | Tells Google where to find your full sitemap |

**When to edit robots.txt:**
- When changing your domain: update the `Sitemap:` line
- When you add admin pages, thank-you pages, or internal tools: add `Disallow: /admin/` or similar
- Do NOT add `Disallow` rules for regular tour or guide pages — those should all be indexable

---

## SECTION 10: COLORS & FONTS (index.css + tailwind.config.ts)

---

### The Color System

Colors are defined as CSS variables in `src/index.css` using **HSL values** (Hue, Saturation, Lightness).

```
HSL format:  hue  saturation%  lightness%
Example:     25   75%          47%
```

- **Hue** = the color wheel position (0=red, 120=green, 240=blue, 360=red again)
- **Saturation** = how vivid (0% = grey, 100% = pure color)
- **Lightness** = how bright (0% = black, 100% = white)

---

### Current Brand Colors

```css
/* src/index.css — :root section */

--primary: 25 75% 47%;        /* Terracotta/orange — main brand color */
--secondary: 174 72% 56%;     /* Turquoise — accent color */
--accent: 43 74% 49%;         /* Gold — highlights, badges, star ratings */
--background: 38 50% 96%;     /* Warm cream — page background */
--foreground: 10 27% 19%;     /* Dark brown — main text color */
```

---

### How to Change a Color

**Before (changing primary from terracotta to a deeper red-orange):**
```css
/* src/index.css */
--primary: 25 75% 47%;
```

**After:**
```css
/* src/index.css */
--primary: 15 80% 42%;
```

> ✅ TIP: Use a free online HSL color picker (search "HSL color picker") to find the right values before editing the file.

> ⚠️ WARNING: The `:root` block controls the light theme. There is also a `.dark` block below it for dark mode — if you change the light theme colors, update the dark theme colors too for consistency.

---

### Fonts

```css
/* src/index.css */
--font-heading: 'Poppins', sans-serif;   /* Used for all headings (H1-H6, tour names) */
--font-body: 'Open Sans', sans-serif;    /* Used for all body text and paragraphs */
```

```ts
// tailwind.config.ts
fontFamily: {
  heading: ["Poppins", "sans-serif"],
  body: ["Open Sans", "sans-serif"],
},
```

**To change the heading font to Montserrat:**

1. In `src/index.css`:
```css
--font-heading: 'Montserrat', sans-serif;
```

2. In `tailwind.config.ts`:
```ts
fontFamily: {
  heading: ["Montserrat", "sans-serif"],
  body: ["Open Sans", "sans-serif"],
},
```

3. Make sure the new font is loaded in your `index.html` via a Google Fonts `<link>` tag.

---

## SECTION 11: SITEMAP & ROBOTS (public/)

---

### Sitemap (public/sitemap.xml)

The sitemap tells Google about all the pages on your website.

- **Location:** `public/sitemap.xml`
- **Current domain:** `https://chichenitzatravel.com` (appears on every line)

**When to update sitemap.xml:**
1. When you change the domain
2. When you add a new page
3. When you change a tour's slug

**To change the domain — use Find & Replace:**
- Find: `https://chichenitzatravel.com`
- Replace with: `https://yournewdomain.com`

This will update all occurrences at once.

**To add a new page, copy this block and insert it with the correct URL:**
```xml
<url>
  <loc>https://chichenitzatravel.com/your-new-page</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://chichenitzatravel.com/your-new-page"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://chichenitzatravel.com/es/your-new-page"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://chichenitzatravel.com/your-new-page"/>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

### Robots.txt (public/robots.txt)

The robots.txt file tells search engine crawlers what they can and cannot access.

- **Location:** `public/robots.txt`
- **Current rules:** All major bots are allowed everywhere except `/api/` and URLs with query strings.

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

Sitemap: https://chichenitzatravel.com/sitemap.xml   ← update this URL when changing domain
```

**When to update robots.txt:**
- When changing the domain: update the `Sitemap:` URL on the last line
- If you want to block specific new pages from being indexed: add a `Disallow:` line

---

## SECTION 12: HEADER NAVIGATION (Header.tsx)

**File:** `src/components/layout/Header.tsx`

Navigation links are built from arrays defined inside the `Header` component. Each array maps a translation key (from `en.ts`/`es.ts`) to a URL path.

---

### Understanding the Navigation Arrays

```ts
// src/components/layout/Header.tsx

const tourLinks = [              // "Tour Categories" column in the mega menu
  { label: t("tour.allTours"), href: localePath("/tours") },
  { label: t("tour.dayTours"), href: localePath("/tours/day-tours") },
  // ... etc
];

const tourTypeLinks = [          // "Tour Types" column in the mega menu
  { label: t("tourType.smallGroup"), href: localePath("/tour-types/small-group") },
  // ... etc
];

const comboLinks = [             // "Combo Tours" column
  { label: t("combo.cenoteIkKil"), href: localePath("/combo-tours/cenote-ik-kil") },
  // ... etc
];

const departureLinks = [         // Departure cities
  { label: t("from.cancun"), href: localePath("/tours-from/cancun") },
  // ... etc
];

const guideLinks = [             // "Guide" dropdown
  { label: t("guide.bestTime"), href: localePath("/guide/best-time-to-visit") },
  // ... etc
];
```

---

### How to Add a New Navigation Link

**Step 1:** Make sure the page exists in `src/pages/` first.

**Step 2:** Add a translation key to `en.ts`:
```ts
// src/lib/i18n/translations/en.ts
"tour.snorkelingTours": "Snorkeling Tours",
```

**Step 3:** Add the same key to `es.ts`:
```ts
// src/lib/i18n/translations/es.ts
"tour.snorkelingTours": "Tours de Snorkel",
```

**Step 4:** Add the link to the appropriate array in `Header.tsx`:
```ts
// src/components/layout/Header.tsx — tourLinks array
const tourLinks = [
  { label: t("tour.allTours"), href: localePath("/tours") },
  { label: t("tour.dayTours"), href: localePath("/tours/day-tours") },
  { label: t("tour.snorkelingTours"), href: localePath("/tours/snorkeling-tours") },  // ← new
  // ... etc
];
```

---

### How to Remove a Navigation Link

Find the line in the relevant array and delete it:

**Before:**
```ts
const tourLinks = [
  { label: t("tour.allTours"), href: localePath("/tours") },
  { label: t("tour.nightTours"), href: localePath("/tours/night-tours") },
  { label: t("tour.ekBalamTours"), href: localePath("/tours/ek-balam-tours") },
];
```

**After (removing Night Tours link):**
```ts
const tourLinks = [
  { label: t("tour.allTours"), href: localePath("/tours") },
  { label: t("tour.ekBalamTours"), href: localePath("/tours/ek-balam-tours") },
];
```

---

## SECTION 13: FOOTER LINKS (Footer.tsx)

**File:** `src/components/layout/Footer.tsx`

The footer has five columns: **Brand/Contact**, **Tours**, **Combo Tours & Departures**, **Travel Guide**, **Resources**.

---

### Footer Structure

```
[Brand + Contact]  |  [Tours]  |  [Combos + Departures]  |  [Guide]  |  [Resources]
```

---

### How to Add a Link to a Footer Column

Example: adding a new link to the "Resources" column:

**Before:**
```tsx
// src/components/layout/Footer.tsx — Resources column
<li><Link to={localePath("/blog")} ...>{t("nav.blog")}</Link></li>
<li><Link to={localePath("/practical/faq")} ...>{t("nav.faq")}</Link></li>
<li><Link to={localePath("/practical/contact")} ...>{t("practical.contactUs")}</Link></li>
```

**After (adding a Privacy Policy link):**
```tsx
<li><Link to={localePath("/blog")} ...>{t("nav.blog")}</Link></li>
<li><Link to={localePath("/practical/faq")} ...>{t("nav.faq")}</Link></li>
<li><Link to={localePath("/practical/contact")} ...>{t("practical.contactUs")}</Link></li>
<li><Link to={localePath("/practical/privacy-policy")} className="hover:text-accent transition-colors">Privacy Policy</Link></li>
```

---

### How to Remove a Footer Link

Find the `<li>` element and delete it:

```tsx
// DELETE this entire line:
<li><Link to={localePath("/practical/testimonials")} ...>{t("practical.testimonials")}</Link></li>
```

---

### Where to Update the Copyright Year

The copyright year is controlled by a translation key:

```ts
// src/lib/i18n/translations/en.ts
"footer.copyright": "© 2026 Chichen Itza Tours. All rights reserved.",
```

```ts
// src/lib/i18n/translations/es.ts
"footer.copyright": "© 2026 Chichen Itza Tours. Todos los derechos reservados.",
```

Update the year in both files.

---

### Where to Find and Update Social Media Icon Links

There are currently **no social media icons** in the footer. The social media links exist only inside `schema.ts` for SEO purposes (the `sameAs` array).

If you want to add social media icons to the footer, add them to `Footer.tsx` in the Brand column:

```tsx
// src/components/layout/Footer.tsx — inside the Brand column div
<div className="flex gap-3 mt-4">
  <a href="https://www.facebook.com/YOUR-PAGE" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
    Facebook
  </a>
  <a href="https://www.instagram.com/YOUR-HANDLE" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
    Instagram
  </a>
</div>
```

---

## SECTION 14: COMMON MISTAKES TO AVOID

---

### 1. NEVER remove the `export` keyword

Every array and object that starts with `export const` must keep the `export` keyword. Removing it breaks the entire page that depends on that data.

```ts
// ❌ WRONG — will break the site
const tours: Tour[] = [

// ✅ CORRECT
export const tours: Tour[] = [
```

---

### 2. NEVER use unescaped straight quotes inside a string

If your text contains a quote character (`"`), you must escape it or rephrase:

```ts
// ❌ WRONG — the extra quote breaks the file syntax
answer: "The site "El Castillo" is the main pyramid.",

// ✅ CORRECT — escaped quote
answer: "The site \"El Castillo\" is the main pyramid.",

// ✅ ALSO CORRECT — use single quotes for the string wrapper
answer: 'The site "El Castillo" is the main pyramid.',

// ✅ BEST — rephrase to avoid quotes
answer: "The main pyramid, known as El Castillo, is the highlight of the site.",
```

---

### 3. All array items must end with a comma

In TypeScript/JavaScript, every item in an array must end with a comma — including the last one:

```ts
// ❌ WRONG — missing comma on last item
highlights: [
  "UNESCO World Heritage Site exploration",
  "Refreshing swim at Cenote Ik Kil"   ← missing comma!
],

// ✅ CORRECT
highlights: [
  "UNESCO World Heritage Site exploration",
  "Refreshing swim at Cenote Ik Kil",
],
```

---

### 4. tourData.ts and tourData.es.ts must always have matching tour IDs

Every tour key in `tourData.es.ts` must match an `id` in `tourData.ts`. If you add a new tour to `tourData.ts`, you must add its translation to `tourData.es.ts` using the same ID.

```ts
// tourData.ts
{ id: "new-tour", slug: "...", ... }

// tourData.es.ts — must have matching key
"new-tour": {
  title: "...",
  shortTitle: "...",
  // ...
},
```

---

### 5. Image filenames are case-sensitive — lowercase only, hyphens not underscores

```
❌ Classic-Day-Tour.webp      ← wrong capitalization
❌ classic_day_tour.webp      ← underscores not allowed
✅ classic-day-tour.webp      ← correct: all lowercase, hyphens
```

---

### 6. After changing a tour's slug in tourData.ts, update sitemap.xml

The `slug` field in a tour determines its URL. If you change:
```ts
slug: "chichen-itza-day-tour-from-cancun"
```
to:
```ts
slug: "chichen-itza-classic-day-trip-cancun"
```

You must update `public/sitemap.xml` — find the old slug URL and replace it with the new one. Otherwise Google will find a broken link in your sitemap.

---

### 7. The domain appears in multiple files — update ALL of them

When going live with a new domain, update these 4 places:

1. `src/lib/schema.ts` — `const BASE_URL = "https://..."`
2. `src/lib/seo.ts` — `const BASE_URL = "https://..."`
3. `public/sitemap.xml` — every `<loc>` and `<xhtml:link href="...">` tag
4. `public/robots.txt` — the `Sitemap:` line at the bottom

---

### 8. Never delete a field from a tour object

If you no longer need a field (e.g., `originalPrice`), do not delete it if you're unsure — instead set it to an empty/null-like value to avoid breaking the page. However, `originalPrice` is specifically safe to remove as the code handles its absence gracefully.

For text fields you want to clear:
```ts
// ✅ Set to empty string instead of deleting
description: "",
```

For optional fields like `originalPrice` or `badge`:
```ts
// ✅ These can be safely removed — the code handles their absence
// (Simply delete the line)
```

---

---

## Section 15: SEO Strategies — Kahan Kya Use Ho Raha Hai Aur Impact Kya Hai

Is section mein har SEO strategy ka poora breakdown hai: kahan implement hai, Google ranking pe kya asar hota hai, aur agar galat ho jaye ya ignore kiya jaye to kya nuksan hota hai.

---

### Strategy 1: Title Tag & Meta Description Optimization

**Kahan implement hai:**
- `src/components/common/SEOHead.tsx` — line 39–40: `<title>` aur `<meta name="description">` render karta hai
- `src/lib/seo.ts` — `getPageMeta()` function default values set karta hai
- Har page file mein (`src/pages/**/*.tsx`) `getPageMeta({ title, description })` call hoti hai

**Google ranking pe impact:**
Title tag Google SERP mein clickable blue link hoti hai. Yeh direct ranking factor hai aur CTR (click-through rate) pe seedha asar karta hai. Meta description SERP mein preview text hai — ranking factor nahi hai lekin CTR improve karta hai, jo indirect ranking signal hai.

**Agar theek na kiya jaye to nuksan:**
- Generic ya duplicate titles hone se multiple pages ek hi keyword ke liye compete karti hain (cannibalization)
- Title mein primary keyword absent hone se page ki ranking probability kam ho jati hai
- 160+ characters ka meta description truncate ho jata hai SERP mein
- Missing title → Google apna title generate karta hai jo almost always suboptimal hota hai

---

### Strategy 2: Silo Architecture / Topical Authority

**Kahan implement hai:**
URL structure in `src/App.tsx` (router) aur `public/sitemap.xml`:
- `/tours/` → tour category pages
- `/tours-from/` → departure city pages
- `/tour-types/` → tour type pages
- `/guide/` → informational guide pages
- `/combo-tours/` → combination tours
- `/practical/` → FAQ, contact, policies
- `/blog/` → content marketing

**Google ranking pe impact:**
Yeh "topical silo" structure Google ko signal karta hai ke yeh site Chichen Itza tours ka poora authority hub hai. Jab ek silo ke andar pages internally link karte hain, toh poore silo ki authority improve hoti hai. Google zyada trust karta hai aise sites ko jo ek topic par depth mein coverage dete hain.

**Agar theek na kiya jaye to nuksan:**
- Random URL structure se Google topic clustering nahi samajh pata
- Internal linking toot jata hai
- Topical authority nahi banta → competitor sites jo silo architecture follow karti hain unhe ranking advantage milti hai

---

### Strategy 3: JSON-LD Structured Data (Schema Markup)

**Kahan implement hai:**
- `src/lib/schema.ts` — sabhi schema objects aur functions defined hain
- `src/lib/seo.ts` — `createFAQSchema()`, `createBreadcrumbSchema()` helper functions
- `src/components/common/SEOHead.tsx` — lines 20–34: `renderJsonLd()` function inhe `<script type="application/ld+json">` tags ke roop mein render karta hai

**Sub-types aur kahan use hote hain:**

| Schema Type | Function/Object | Pages Used |
|---|---|---|
| `TravelAgency` | `organizationSchema` | Homepage only |
| `TouristAttraction` | `chichenItzaAttractionSchema` | Homepage only |
| `Product` | `generateTourProductSchema()` | Every tour detail page |
| `FAQPage` | `createFAQSchema()` | Homepage, all tour pages, all guide pages, all departure city pages, FAQ page |
| `Article` | `guideSchemas["slug"]` | All 8 guide pages |
| `BreadcrumbList` | `createBreadcrumbSchema()` | All category pages, guide pages, blog pages |
| `TouristDestination` | `locationSchemas["city"]` | All 5 departure city pages |

**Google ranking pe impact:**
Structured data enables **Rich Results** — visual enhancements in Google SERP:
- `Product` schema → star ratings + price shown directly in search results
- `FAQPage` schema → accordion Q&A dropdowns appear in SERP, doubling the space occupied
- `BreadcrumbList` schema → breadcrumb path shown (e.g., Home > Tours > Day Tours)
- `TravelAgency` schema → Google Knowledge Panel data (name, address, rating)

Rich results significantly increase CTR (click-through rate) without needing higher ranking.

**Agar theek na kiya jaye to nuksan:**
- Schema mein invalid data (e.g., wrong `priceValidUntil` date) se Google schema ignore kar deta hai
- Missing FAQPage schema → accordion dropdowns SERP se gayab ho jaate hain
- Missing Product schema → star ratings SERP mein nahi dikhte → CTR drop hota hai

---

### Strategy 4: Hreflang Tags (International SEO)

**Kahan implement hai:**
- `src/components/common/SEOHead.tsx` — lines 59–66: hreflang `<link>` tags render karta hai (`en`, `es`, `x-default`)
- `src/lib/i18n/routeMap.ts` — 47 EN↔ES URL mappings define karta hai
- `src/lib/seo.ts` — `getPageMeta()` mein `enToEsRoutes` se `alternateUrls` compute hote hain
- `public/sitemap.xml` — har URL ke liye `<xhtml:link rel="alternate">` tags include hain

**Google ranking pe impact:**
Hreflang Google ko batata hai ke konsi language ke users ko konsa URL serve karna hai. English users ko `/tours/day-tours` milega, Spanish users ko `/es/tours/excursiones-de-dia` milega. Bina hreflang ke Google dono pages ko duplicate content samajh sakta hai aur penalty de sakta hai.

**Agar theek na kiya jaye to nuksan:**
- EN aur ES pages ek doosre ko cannibalize karte hain
- Spanish users ko English pages serve ho sakti hain aur vice versa → bounce rate badhta hai
- Duplicate content penalty se dono versions ki ranking girr sakti hai

---

### Strategy 5: Canonical Tags

**Kahan implement hai:**
- `src/components/common/SEOHead.tsx` — line 42: `<link rel="canonical" href={meta.canonical} />`
- `src/lib/seo.ts` — `getPageMeta()` mein `canonical` field `BASE_URL + path` se generate hoti hai

**Google ranking pe impact:**
Canonical tag Google ko batata hai ke agar same content multiple URLs pe accessible hai, toh konse URL ko "master" URL maana jaye aur index kiya jaye. Duplicate pages ke link equity ek hi URL pe consolidate hoti hai.

**Agar theek na kiya jaye to nuksan:**
- URL parameters (`?ref=facebook`) wali pages duplicate content create karti hain
- Link equity split ho jati hai multiple URLs mein → ranking weak hoti hai
- `robots.txt` mein `Disallow: /*?*` bhi isi liye hai — query param URLs crawl nahi hote

---

### Strategy 6: Open Graph & Twitter Card Tags

**Kahan implement hai:**
- `src/components/common/SEOHead.tsx` — lines 44–57:
  - `og:type`, `og:title`, `og:description`, `og:image`, `og:site_name`, `og:locale`, `og:url`
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Default OG image: `const DEFAULT_OG_IMAGE = "https://chichenitzatravel.com/images/chichen-itza-hero.jpg"` (line 8)
- `const SITE_NAME = "Chichen Itza Tours"` (line 9)

**Google ranking pe impact:**
Open Graph tags directly Google ranking factor nahi hain, lekin social sharing pe impact karte hain. Jab koi page WhatsApp, Facebook, ya Twitter pe share kiya jata hai, toh OG tags control karte hain ke image, title, aur description kaise dikhta hai. Better social preview → zyada clicks → zyada traffic → indirect ranking signal.

**Agar theek na kiya jaye to nuksan:**
- Social share pe ugli ya missing preview → shares se traffic nahi milti
- Missing `og:image` → platforms generic ya random image pick karte hain
- Twitter Card missing → Twitter pe plain text link dikhta hai, no image card

---

### Strategy 7: Breadcrumb Navigation

**Kahan implement hai:**
- `src/components/layout/Breadcrumbs.tsx` — visual breadcrumb component (use kiya jata hai har category aur detail page pe)
- `src/lib/seo.ts` — `createBreadcrumbSchema()` function: JSON-LD `BreadcrumbList` schema generate karta hai
- Har relevant page mein dono ek saath use hote hain: visual breadcrumb + schema

**Google ranking pe impact:**
`BreadcrumbList` schema Google ko enable karta hai ke SERP mein URL ki jagah breadcrumb path dikhaye, e.g.:
`chichenitzatravel.com > Tours > Day Tours`
Yeh SERP result zyada informative lagta hai → higher CTR. Sath hi internal linking hierarchy bhi establish hoti hai.

**Agar theek na kiya jaye to nuksan:**
- Missing schema → Google plain URL dikhata hai SERP mein
- Broken breadcrumb links → internal link equity weak hoti hai
- Incorrect breadcrumb hierarchy → Google site structure confuse ho sakta hai

---

### Strategy 8: XML Sitemap

**Kahan implement hai:**
- `public/sitemap.xml` — manually maintained file
- Har URL ke liye: `<loc>`, `<changefreq>`, `<priority>`, aur `<xhtml:link>` alternate hreflang tags
- Homepage priority: `1.0`; Tour category pages: `0.9`; Individual tours: `0.8`; Guide pages: `0.7`
- `public/robots.txt` — line 18: `Sitemap: https://chichenitzatravel.com/sitemap.xml`

**Google ranking pe impact:**
Sitemap Google ko poore site structure ki map deta hai — naye pages jaldi discover aur index hote hain. Sitemap mein hreflang alternate tags international SEO signals reinforce karte hain. Priority values Googlebot ko batate hain konse pages zyada important hain.

**Agar theek na kiya jaye to nuksan:**
- Naye pages add karne ke baad sitemap update nahi kiya → Google kuch pages kabhie index nahi karta
- Wrong priority values → important pages slow index hoti hain
- Missing hreflang in sitemap → international SEO signals weaker ho jaate hain

⚠️ **WARNING:** Jab bhi naya page add karo, `public/sitemap.xml` mein woh URL aur uska ES counterpart dono add karo, warna woh page Google mein deir se index hoga.

---

### Strategy 9: Robots.txt

**Kahan implement hai:**
- `public/robots.txt` — complete file:

```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

Sitemap: https://chichenitzatravel.com/sitemap.xml
```

**Google ranking pe impact:**
`Disallow: /api/` → API endpoints crawl nahi hote (no content, waste of crawl budget).
`Disallow: /*?*` → Query parameter URLs (e.g., `?ref=email`, `?page=2`) crawl nahi hoti → duplicate content avoid hoti hai.
Social bots (Twitterbot, facebookexternalhit) ko explicitly allow kiya gaya hai → OG previews properly generate hoti hain.

**Agar theek na kiya jaye to nuksan:**
- `/*?*` rule hata diya → Google thousands of duplicate parameter URLs index kar lega → crawl budget waste + duplicate content penalty
- `/api/` allow kar diya → API responses index ho sakti hain, jo useless hai
- Robots.txt delete kiya → sab kuch crawl hoga, including internal tools

---

### Strategy 10: FAQ Schema on Multiple Pages

**Kahan implement hai:**
- `src/lib/seo.ts` — `createFAQSchema(faqs)` function
- `src/lib/faqData.ts` — 13 FAQ arrays (one per page type)
- Pages jo FAQ schema use karti hain:
  - Homepage (`Index.tsx`) → `homepageFAQs`
  - All guide pages → page-specific FAQ arrays
  - All tour detail pages (`[slug].tsx`) → category-specific FAQs
  - FAQ page (`practical/faq.tsx`) → `practicalFAQs`
  - All departure city pages → city-specific FAQs

**Google ranking pe impact:**
FAQPage schema Google ko enable karta hai ke SERP mein accordion-style Q&A dropdowns dikhaye. Yeh feature significant SERP real estate leta hai — sometimes page 1 ka half cover kar leta hai. FAQs expand hone pe direct traffic milti hai bina click ke bhi.

**Agar theek na kiya jaye to nuksan:**
- Missing FAQ schema → accordion dropdowns SERP se gayab → competitor ke page FAQ dropdowns lete hain → tumhara CTR gir jaata hai
- Duplicate FAQ questions across pages → Google confuse hota hai konsa page show kare
- Outdated FAQ answers → bounce rate badhta hai (users ka experience kharab)

---

### Strategy 11: Internal Linking Network

**Kahan implement hai:**
- `src/components/features/tours/PopularToursWidget.tsx` — guide pages ki sidebar mein tour links
- `src/components/features/home/CTASection.tsx` — har page ke bottom pe `/tours` link
- `src/components/features/tours/CTABox.tsx` — location pages mein specific tour links
- `src/components/layout/Footer.tsx` — 5 columns: har major category page linked
- `src/components/layout/Breadcrumbs.tsx` — parent pages linked
- Location pages mein footer links section (e.g., `cancun.tsx` line 269–285: 15 internal links)

**Google ranking pe impact:**
Internal links "link equity" (ranking power) pass karte hain ek page se doosre page ko. Guide pages (high-traffic informational) se tour pages (commercial) ko links milne se tour pages ki ranking improve hoti hai. Footer links saare pages ko connected rakhte hain — Google site structure samajhta hai.

**Agar theek na kiya jaye to nuksan:**
- Internal links hatane se "orphan pages" ban jaate hain (koi link nahi → Google nahi crawl karta)
- Guide pages se tour pages ko link nahi → tour pages ki authority kam rehti hai
- Broken internal links → 404 errors → bad user experience + ranking loss

---

### Strategy 12: Location-Based SEO (Geo-Targeting)

**Kahan implement hai:**
- `src/pages/tours-from/cancun.tsx`, `playa-del-carmen.tsx`, `tulum.tsx`, `riviera-maya.tsx`, `merida.tsx`
- `src/lib/locationData.ts` — har city ka `metaTitle`, `metaDescription`, `h1`, `intro`
- `src/lib/schema.ts` — `locationSchemas` → `TouristDestination` schema har city ke liye
- Har page mein unique content: drive time, distance, why book from this city, timeline

**Google ranking pe impact:**
"Chichen Itza tours from Cancun" jaise queries mein high commercial intent hai — log actually book karna chahte hain. Har city ke liye dedicated page hone se us city ke searchers ke liye relevant content milta hai. `TouristDestination` schema city ke geo-coordinates bhi provide karta hai.

**Agar theek na kiya jaye to nuksan:**
- Ek generic page sab cities ke liye → kisi bhi city-specific keyword mein rank nahi hogi
- Missing geo schema → local search signals weak
- Duplicate content across city pages → cannibalization

---

### Strategy 13: Long-Tail Keyword Pages (Topical Depth)

**Kahan implement hai:**
- `src/pages/guide/` — 8 guide pages, har ek ek specific informational query target karta hai:
  - `best-time-to-visit.tsx` → "best time to visit chichen itza"
  - `what-to-bring.tsx` → "what to bring to chichen itza"
  - `history-and-facts.tsx` → "chichen itza history"
  - `how-to-get-there.tsx` → "how to get to chichen itza"
  - `entrance-fees.tsx` → "chichen itza entrance fee"
  - `photography-tips.tsx` → "chichen itza photography"
  - `dress-code-and-rules.tsx` → "chichen itza dress code"
  - `vs-other-ruins.tsx` → "chichen itza vs tulum"

**Google ranking pe impact:**
Informational queries (people researching, not yet booking) target karne se "top of funnel" traffic milta hai. Guide pages mein `PopularToursWidget` sidebar se commercial tour pages ko links milte hain. Yeh users research ke baad tour pages pe land karte hain aur book karte hain. Saath hi topical authority build hoti hai poori site ki.

**Agar theek na kiya jaye to nuksan:**
- Guide pages delete ya thin content → informational traffic lose hota hai
- Missing internal links from guides to tours → conversion opportunity waste
- Outdated guide content (e.g., old entrance fees) → bounce rate badhta hai

---

### Strategy 14: Review / Rating Signals

**Kahan implement hai:**
- `src/lib/reviewsData.ts` — 25 reviews (r1–r25) with rating, title, content, verified fields
- `src/components/features/reviews/ReviewGrid.tsx` — tour detail pages aur location pages pe render hota hai
- `src/lib/schema.ts` — `generateTourProductSchema()` mein `aggregateRating` block (line 98–104)
- `src/lib/schema.ts` — `organizationSchema` mein `aggregateRating` (ratingValue: "4.9", reviewCount: "3247")

**Google ranking pe impact:**
`Product` schema ka `aggregateRating` SERP mein star ratings dikhata hai — rich result jo CTR dramatically improve karta hai. Social proof (real reviews visible on page) bounce rate kam karta hai. Google user behavior signals (low bounce, high time-on-page) ko indirect ranking factor maanta hai.

**Agar theek na kiya jaye to nuksan:**
- `aggregateRating` schema missing ya invalid → star ratings SERP se gayab
- `reviewCount` jo actual reviews se match na kare → Google schema ignore kar sakta hai
- Review content stale ya generic → user trust nahi banta

---

### Strategy 15: Mobile-First Design

**Kahan implement hai:**
- Sabhi pages Tailwind CSS responsive classes use karti hain (`sm:`, `md:`, `lg:` prefixes)
- `src/components/layout/StickyBookingBar.tsx` — mobile-only sticky bar (`lg:hidden` class)
- `src/components/features/booking/QuickBookingForm.tsx` — responsive booking widget

**Google ranking pe impact:**
Google **mobile-first indexing** use karta hai — matlab mobile version of your site index kiya jaata hai, desktop nahi. Mobile-optimized sites ko ranking advantage milti hai. Sticky booking bar mobile users ke liye conversion improve karta hai.

**Agar theek na kiya jaye to nuksan:**
- Mobile layout toot jaye → Google mobile usability issues flag karta hai → ranking penalty
- No mobile CTA → mobile users bounce back without booking
- Slow mobile load → Core Web Vitals fail → ranking drop

---

### Strategy 16: Page Speed Signals

**Kahan implement hai:**
- `src/lib/tourImages.ts` — sabhi images `.webp` format mein `src/assets/` se import hoti hain (WebP is 30% smaller than JPEG)
- `src/components/common/AnimatedSection.tsx` — lazy loading / deferred rendering of page sections
- `src/pages/Index.tsx` — sections wrapped in `<AnimatedSection>` for deferred rendering

**Google ranking pe impact:**
Google **Core Web Vitals** (LCP, CLS, FID) ko ranking factor maanta hai. WebP images faster load time deti hain. Lazy loading below-fold content initial page load speed improve karta hai. Faster pages lower bounce rate → better user experience signals.

**Agar theek na kiya jaye to nuksan:**
- JPEG/PNG images replace karein WebP ki jagah → page heavier hoti hai → slower load
- `AnimatedSection` remove karein → all sections load at once → slower initial render
- Core Web Vitals fail karein → Google Search Console warning + gradual ranking drop

---

### Strategy 17: Blog / Content Marketing

**Kahan implement hai:**
- `src/lib/blogData.ts` — 5 blog posts with slugs, metaTitle, metaDescription, content arrays
- `src/pages/blog/` — blog listing page aur individual post pages
- Blog post slugs (keywords targeted):
  - `spring-equinox-chichen-itza-guide` → "spring equinox chichen itza"
  - `cenotes-near-chichen-itza` → "cenotes near chichen itza"
  - `chichen-itza-vs-tulum-ruins` → "chichen itza vs tulum ruins"
  - `photographing-chichen-itza-like-a-pro` → "photographing chichen itza"
  - `mayan-history-beginners-guide` → "mayan history guide"

**Google ranking pe impact:**
Blog posts "discovery stage" ke users ko capture karte hain — jo abhi plan kar rahe hain, immediately book nahi kar rahe. Blog posts mein internal links tour pages ko authority pass karte hain. Event-based posts (equinox) seasonal traffic spikes capture karte hain. Content freshness signal bhi milti hai.

**Agar theek na kiya jaye to nuksan:**
- Blog posts mein tour pages ke links na hon → conversion opportunity miss
- Outdated blog content → stale signals to Google
- Blog posts jo site ke main keywords ko target karen → cannibalization risk

---

### Strategy 18: HTML `lang` Attribute (Language Signal)

**Kahan implement hai:**
- `src/components/common/SEOHead.tsx` — line 38: `<html lang={htmlLang} />`
- `htmlLang` value: `"es"` for Spanish pages, `"en"` for English pages
- `ogLocale` also set accordingly: `"es_MX"` or `"en_US"` (line 16)

**Google ranking pe impact:**
`<html lang="en">` Google aur screen readers ko explicitly batata hai ke page ki language kya hai. Yeh hreflang ke saath mil kar Google ko language targeting confident banata hai. `og:locale` social sharing ke liye language/region signal provide karta hai — Facebook aur WhatsApp is information ko content distribution mein use karte hain.

**Agar theek na kiya jaye to nuksan:**
- Missing `lang` attribute → accessibility issues (screen readers language nahi samajhte)
- Wrong `lang` attribute → Google wrong language index karta hai → wrong users ko page serve hoti hai
- Inconsistent `og:locale` → Facebook wrong region ke users ko content show karta hai

---

### Strategy 19: `og:type` Differentiation (Article vs Website)

**Kahan implement hai:**
- `src/components/common/SEOHead.tsx` — line 13: `const ogType = meta.ogType || "website"`
- Guide pages (`src/pages/guide/*.tsx`) — `getMeta()` function: `ogType: "article"` explicitly set
- All other pages default to `"website"` (homepage, tour pages, location pages)

**Google ranking pe impact:**
`og:type = "article"` Facebook aur Google ko batata hai ke yeh page ek publishable article hai — Google Discover mein include hone ke liye eligible hota hai. Guide pages jo `"article"` type use karte hain woh better rich preview generate karte hain jab share kiya jaye. `"website"` type commercial/homepage pages ke liye appropriate hai.

**Agar theek na kiya jaye to nuksan:**
- Guide pages par `"website"` type → Google Discover eligibility loose hoti hai
- Commercial pages par `"article"` type → confusing signals → possible misclassification

---

### Strategy 20: ImageGallery / ImageObject Schema (Image SEO)

**Kahan implement hai:**
- `src/pages/tours/[slug].tsx` — lines 139–150: `imageObjectSchema` generated from `tourGalleryImages[tour.id]`
- Schema type: `ImageGallery` containing multiple `ImageObject` entries
- Each `ImageObject` has: `contentUrl`, `name`, `description` (from `tourGalleryAltTexts`)
- Source of alt texts: `src/lib/tourImages.ts` → `tourGalleryAltTexts` export

```ts
// src/pages/tours/[slug].tsx (lines ~139-150)
const imageObjectSchema = galleryImgs.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `${loc.title} Photo Gallery`,
  about: { "@type": "TouristAttraction", name: "Chichen Itza" },
  image: galleryImgs.map((url, i) => ({
    "@type": "ImageObject",
    contentUrl: url,
    name: galleryAlts[i] ?? `${loc.title} photo ${i + 1}`,
    description: galleryAlts[i] ?? `${loc.title} - Chichen Itza tour photo ${i + 1}`,
  })),
} : null;
```

**Google ranking pe impact:**
`ImageObject` schema Google Image Search mein images ko rich results ke liye eligible banata hai. Alt text from `tourGalleryAltTexts` both accessibility aur image SEO serve karta hai. Tour images Google Images mein appear ho sakte hain — yeh additional organic traffic channel hai.

**Agar theek na kiya jaye to nuksan:**
- Missing alt texts in `tourGalleryAltTexts` → schema generates fallback generic text → weaker image SEO
- Empty gallery images array → `imageObjectSchema` null returns → no image schema for that tour
- Wrong/generic alt text → Google images poorly classified → less image search traffic

✅ **TIP:** Jab bhi koi naya tour add karo, `src/lib/tourImages.ts` mein us tour ka `tourGalleryAltTexts[tour-id]` array bhi add karo with descriptive English alt texts for all gallery images.

---

### Strategy 21: `fetchPriority="high"` on Hero Images (Core Web Vitals — LCP)

**Kahan implement hai:**
- `src/pages/tours/[slug].tsx` — line ~220: `fetchPriority="high"` on the hero `<img>` tag
- Also uses `loading="eager"` (not lazy) on the above-fold hero image

```tsx
// src/pages/tours/[slug].tsx
<img
  src={heroImg}
  alt={`${loc.title} - Chichen Itza tour hero image`}
  className="absolute inset-0 w-full h-full object-cover opacity-60"
  width={1920}
  height={1080}
  loading="eager"
  fetchPriority="high"
/>
```

**Google ranking pe impact:**
`fetchPriority="high"` browser ko instruct karta hai ke yeh image pehle load karo — hero image typically LCP (Largest Contentful Paint) element hoti hai. LCP Google Core Web Vitals ka part hai aur direct ranking factor hai. `loading="eager"` ensure karta hai ke hero image lazy load nahi hoti (jo LCP ko delay karta).

**Agar theek na kiya jaye to nuksan:**
- `fetchPriority` remove → browser lower priority assign karta hai → LCP score gir jaata hai
- `loading="lazy"` hero par → image deferred load hoti hai → LCP fail → ranking drop

---

---

## Section 16: Page-wise Content Editing Guide

Yeh section har page type ke liye exact instructions deta hai — kahan text content hai aur kaise edit karte hain.

---

### Page Type 1: Guide Pages (`src/pages/guide/*.tsx`)

Guide pages ka content directly `.tsx` file ke andar likha hua hai — koi alag data file nahi. English aur Spanish dono ek hi file mein hain, `isEs ? "Spanish" : "English"` pattern ke through.

**File locations:**
- `src/pages/guide/best-time-to-visit.tsx`
- `src/pages/guide/what-to-bring.tsx`
- `src/pages/guide/history-and-facts.tsx`
- `src/pages/guide/how-to-get-there.tsx`
- `src/pages/guide/entrance-fees.tsx`
- `src/pages/guide/photography-tips.tsx`
- `src/pages/guide/dress-code-and-rules.tsx`
- `src/pages/guide/vs-other-ruins.tsx`

---

#### H1 Heading edit karna

H1 page ke component function ke andar hota hai. `isEs ?` pattern dhundho.

```tsx
// BEFORE
<h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
  {isEs ? "Mejor Época para Visitar Chichén Itzá – Guía 2026" : "Best Time to Visit Chichen Itza – Complete 2026 Guide"}
</h1>

// AFTER (example: year update)
<h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
  {isEs ? "Mejor Época para Visitar Chichén Itzá – Guía 2027" : "Best Time to Visit Chichen Itza – Complete 2027 Guide"}
</h1>
```

⚠️ **WARNING:** Har text change mein **DO changes** hoti hain — pehle Spanish version (`isEs ? "..."`) phir English version (`": "..."`). Agar sirf ek badla aur doosra bhool gaya toh ek language galat dikhegi.

---

#### H2 Section Headings edit karna

```tsx
// BEFORE
<h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
  {isEs ? "Clima Mes a Mes" : "Weather Month by Month"}
</h2>

// AFTER
<h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
  {isEs ? "Clima Mes a Mes en Chichén Itzá" : "Chichen Itza Weather Month by Month"}
</h2>
```

---

#### Body Paragraphs edit karna

```tsx
// BEFORE
<p className="text-muted-foreground leading-relaxed">
  {isEs ? "El mejor momento para visitar es entre noviembre y marzo." : "The best time to visit is between November and March."}
</p>

// AFTER
<p className="text-muted-foreground leading-relaxed">
  {isEs ? "El mejor momento para visitar es entre noviembre y febrero." : "The best time to visit is between November and February."}
</p>
```

---

#### TipBox content edit karna

`TipBox` component ko `content` prop diya jata hai:

```tsx
// BEFORE
<TipBox
  type="tip"
  title={isEs ? "Consejo de Experto" : "Expert Tip"}
  content={isEs ? "Llega a las 8 AM para evitar multitudes." : "Arrive at 8 AM to avoid crowds."}
/>

// AFTER
<TipBox
  type="tip"
  title={isEs ? "Consejo de Experto" : "Expert Tip"}
  content={isEs ? "Llega a las 7:30 AM para la mejor experiencia." : "Arrive at 7:30 AM for the best experience."}
/>
```

---

#### InfoBox bullet items edit karna

`InfoBox` ko `items` prop array diya jata hai:

```tsx
// BEFORE
<InfoBox
  title={isEs ? "Lo Mejor" : "Best Months"}
  icon="✓"
  items={[
    isEs ? "Noviembre a Marzo: clima perfecto" : "November to March: perfect weather",
    isEs ? "Menor lluvia, más fresco" : "Less rain, cooler temperatures",
  ]}
/>

// AFTER — naya item add karna
<InfoBox
  title={isEs ? "Lo Mejor" : "Best Months"}
  icon="✓"
  items={[
    isEs ? "Noviembre a Marzo: clima perfecto" : "November to March: perfect weather",
    isEs ? "Menor lluvia, más fresco" : "Less rain, cooler temperatures",
    isEs ? "Diciembre ideal para familias" : "December ideal for families",
  ]}
/>
```

---

#### FAQ Questions aur Answers edit karna

FAQs file ke **TOP** par defined hain, component function se bahar, `const timingFAQs = [...]` format mein. Do arrays hote hain — English aur Spanish alag-alag:

```tsx
// File ke top par:
const timingFAQs = [                          // ← English FAQs
  {
    question: "What is the hottest month in Chichen Itza?",
    answer: "The hottest month is May, with an average high of 36°C (97°F).",
    category: "timing",
  },
  // ... more FAQs
];

const timingFAQsEs = [                        // ← Spanish FAQs (same order)
  {
    question: "¿Cuál es el mes más caluroso en Chichén Itzá?",
    answer: "El mes más caluroso es mayo, con una temperatura máxima de 36°C.",
    category: "timing"
  },
  // ...
];
```

**Kisi answer ko update karna:**
```tsx
// BEFORE (English)
answer: "The hottest month is May, with an average high of 36°C (97°F).",

// AFTER
answer: "The hottest month is May, averaging 36°C (97°F). April runs close behind at 32°C.",
```

✅ **TIP:** English FAQ badalne ke baad turant us FAQ ka Spanish counterpart bhi update karo — woh same index par hoga `timingFAQsEs` array mein.

**Naya FAQ add karna:**
```tsx
// English array mein:
{
  question: "Can you visit Chichen Itza in the rain?",
  answer: "Yes, but bring a light rain jacket. Showers are usually brief and the ruins are still beautiful.",
  category: "timing",
},

// Spanish array mein (same position par):
{
  question: "¿Se puede visitar Chichén Itzá bajo la lluvia?",
  answer: "Sí, pero lleva una chaqueta ligera. Los aguaceros suelen ser breves y las ruinas siguen siendo hermosas.",
  category: "timing",
},
```

---

#### Monthly Weather Data edit karna (best-time-to-visit only)

`best-time-to-visit.tsx` mein ek special `monthlyWeatherData` array hai file ke top par:

```tsx
const monthlyWeatherData = [
  { month: "Jan", temp: 82, rain: 2, crowds: "High", price: "$$$" },
  { month: "Feb", temp: 84, rain: 2, crowds: "High", price: "$$$" },
  // ... 12 months
];
```

Kisi month ka data update karna:
```tsx
// BEFORE
{ month: "Dec", temp: 81, rain: 3, crowds: "Very High", price: "$$$$" },

// AFTER (crowds kam ho gaye)
{ month: "Dec", temp: 81, rain: 3, crowds: "High", price: "$$$" },
```

Valid `crowds` values: `"Very Low"`, `"Low"`, `"Medium"`, `"High"`, `"Very High"`
Valid `price` values: `"$"`, `"$$"`, `"$$$"`, `"$$$$"`

---

#### Meta Title aur Meta Description edit karna (Guide Pages)

Guide pages mein `getMeta()` function file ke top par hota hai (component function se pehle):

```tsx
// best-time-to-visit.tsx mein, line 84:
const getMeta = (locale: "en" | "es") => {
  const isEs = locale === "es";
  return getPageMeta({
    title: isEs
      ? "Mejor Época para Visitar Chichén Itzá – Guía 2026"   // ← Spanish title
      : "Best Time to Visit Chichen Itza – Complete 2026 Guide",  // ← English title
    description: isEs
      ? "Descubre la mejor época para visitar Chichén Itzá..."   // ← Spanish meta desc
      : "Discover the best time to visit Chichen Itza...",       // ← English meta desc
    canonical: "/guide/best-time-to-visit",                      // ← KABHI MAT BADLO
```

⚠️ **WARNING:** `canonical` field kabhi mat badlo — yeh URL Google mein indexed hai. Sirf `title` aur `description` badlo.

---

### Page Type 2: Location Pages (`src/pages/tours-from/*.tsx`)

Location pages ke liye **do jagah** content hoti hai:

1. **Page-specific UI text** (H1, badges, section headings) — directly `.tsx` file mein `c` object ke andar
2. **Reusable content** (intro paragraph, whyBook bullets, timeline, comparison table) — `src/lib/locationData.ts` mein

---

#### locationData.ts se content edit karna

```
src/lib/locationData.ts
```

**`intro` paragraph:**

```ts
// BEFORE
export const cancunPageContent = {
  intro: `Discover the ancient Mayan wonder with our carefully curated Chichen Itza tours from Cancún...`,
```

Poori string replace karo ya us ke ek hisse ko update karo.

**`whyBook` bullets:**

```ts
// BEFORE
whyBook: [
  { title: "Hotel Pickup Included", description: "Free pickup from all major Cancún hotels." },
  { title: "Expert Guides", description: "Certified archaeologist guides on every tour." },
],

// AFTER — naya point add karna
whyBook: [
  { title: "Hotel Pickup Included", description: "Free pickup from all major Cancún hotels." },
  { title: "Expert Guides", description: "Certified archaeologist guides on every tour." },
  { title: "Free Cancellation", description: "Cancel up to 24 hours before for a full refund." },
],
```

**Spanish version bhi update karo** — same file mein `cancunPageContentEs` object:

```ts
// cancunPageContentEs.whyBook mein bhi wahi change karo:
{ title: "Recogida en Hotel Incluida", description: "Recogida gratuita en todos los hoteles principales de Cancún." },
{ title: "Guías Expertos", description: "Guías arqueólogos certificados en cada tour." },
{ title: "Cancelación Gratuita", description: "Cancela hasta 24 horas antes para un reembolso completo." },
```

**`timeline` steps:**

```ts
// BEFORE
timeline: [
  { time: "6:00 AM", title: "Hotel Pickup", description: "AC van picks you up from your hotel." },
  { time: "8:30 AM", title: "Arrive Chichen Itza", description: "Beat the crowds with early arrival." },
],

// AFTER — time change karni ho toh:
timeline: [
  { time: "6:30 AM", title: "Hotel Pickup", description: "AC van picks you up from your hotel." },
  { time: "9:00 AM", title: "Arrive Chichen Itza", description: "Beat the crowds with early arrival." },
],
```

**`comparisonTable` rows:**

```ts
comparisonTable: {
  rows: [
    ["Drive time", "2.5 hours saved", "2.5 hours driving"],
    ["Cost", "From $89 all-inclusive", "$40-60 fuel + tolls"],
    ["Guide", "Expert archaeologist", "Audio guide only"],
  ]
},
```

**`bestTime` text:**

```ts
bestTime: "November to March offers the best weather: 24–30°C and minimal rainfall.",
```

---

#### Location page ka H1, heroDesc, aur badges badalna

Yeh text `.tsx` file ke andar `c` object mein hota hai (directly, `locationData.ts` mein nahi):

```tsx
// cancun.tsx mein, c object ke andar:
h1: "Chichen Itza Tours from Cancún — Best Day Trips 2026",  // ← yahan edit karo
heroDesc: `Mexico's #1 day trip! Explore the ancient Mayan wonder...`,  // ← yahan
badges: [
  { text: location.driveTime + " drive" },     // ← driveTime locationData.ts se aata hai
  { text: location.distanceToChichen },         // ← distanceToChichen bhi locationData.ts se
  { text: "Daily departures" },                 // ← yeh directly edit kar sakte ho
  { text: "Hotel pickup included" },
],
```

✅ **TIP:** `location.driveTime` aur `location.distanceToChichen` automatically `locationData.ts` ke `locations[]` array se aate hain. Wahan badlo toh yahan automatically update hoga.

---

### Page Type 3: Tour Detail Pages (`src/pages/tours/[slug].tsx`)

Tour detail page apna koi content directly hold nahi karta — saara content `src/lib/tourData.ts` se aata hai (aur Spanish ke liye `src/lib/tourData.es.ts`).

```
Page file: src/pages/tours/[slug].tsx  ← EDITING MAT KARO
Data file: src/lib/tourData.ts         ← YAHAN EDIT KARO (English + prices + SEO)
Spanish:   src/lib/tourData.es.ts      ← YAHAN EDIT KARO (Spanish text)
```

**Fields jo page pe dikhte hain aur unke sources:**

| Page pe kya dikha | tourData.ts field | Spanish source |
|---|---|---|
| Main H1 heading | `tour.h1` | `tourData.es.ts` → `h1` |
| Intro paragraph | `tour.description` | `tourData.es.ts` → `description` |
| Feature bullets | `tour.highlights[]` | `tourData.es.ts` → `highlights[]` |
| What's included | `tour.inclusions[]` | `tourData.es.ts` → `inclusions[]` |
| What's excluded | `tour.exclusions[]` | `tourData.es.ts` → `exclusions[]` |
| Day timeline | `tour.itinerary[]` | `tourData.es.ts` → `itinerary[]` |
| Meeting point | `tour.meetingPoint.address` | English only |
| Price display | `tour.price.adult` / `tour.price.child` | English only (same for both languages) |
| Duration | `tour.duration` | `tourData.es.ts` → `duration` |
| Tab title (browser) | `tour.metaTitle` | English only |
| Meta description | `tour.metaDescription` | English only |

**Example — highlight text update karna:**

```ts
// src/lib/tourData.ts mein:
// BEFORE
highlights: [
  "UNESCO World Heritage Site exploration",
  "Refreshing swim at Cenote Ik Kil",
  "Traditional Yucatecan buffet lunch",
],

// AFTER — naya highlight add karna
highlights: [
  "UNESCO World Heritage Site exploration",
  "Refreshing swim at Cenote Ik Kil",
  "Traditional Yucatecan buffet lunch",
  "Free cancellation up to 24 hours",
],
```

```ts
// src/lib/tourData.es.ts mein (same tour ka Spanish version):
// AFTER — Spanish version bhi add karo, same position par
highlights: [
  "Exploración del Sitio Patrimonio Mundial de la UNESCO",
  "Refrescante baño en el Cenote Ik Kil",
  "Almuerzo buffet yucateco tradicional",
  "Cancelación gratuita hasta 24 horas",
],
```

⚠️ **WARNING:** `tourData.ts` mein **sirf English content** edit karo. Price, slug, aur SEO meta fields bhi `tourData.ts` mein hain (Spanish file mein nahi hain). Spanish display text ke liye `tourData.es.ts` — dono files mein corresponding tour ID ke andar update karo.

---

### Page Type 4: Homepage (`src/pages/Index.tsx`)

Homepage ka content **4 alag jagah** se aata hai:

---

**Hero Section text** → `src/lib/i18n/translations/en.ts` aur `es.ts`

```ts
// en.ts mein:
"hero.h1": "Discover Chichen Itza",
"hero.subtitle": "Book the #1 rated tour. Expert guides, small groups, free cancellation.",
"hero.cta": "Browse Tours",
"hero.rating": "4.9/5 from 3,000+ reviews",

// es.ts mein (same keys, Spanish values):
"hero.h1": "Descubre Chichén Itzá",
"hero.subtitle": "Reserva el tour mejor valorado. Guías expertos, grupos pequeños, cancelación gratuita.",
```

---

**WhyChooseUs section** → `src/components/features/home/WhyChooseUs.tsx`

Inline text directly component file mein `isEs ? "..." : "..."` pattern ke saath.

---

**CTASection text** → `src/components/features/home/CTASection.tsx`

Inline text directly component file mein.

---

**FAQ section** → `src/lib/faqData.ts` → `homepageFAQs` array

```ts
// faqData.ts mein:
export const homepageFAQs: FAQItem[] = [
  {
    question: "How long is the drive from Cancun to Chichen Itza?",
    answer: "The drive from Cancún to Chichen Itza takes approximately 2.5 hours (200 km).",
    category: "practical",
  },
  // ...
];
```

✅ **TIP:** Homepage FAQ badalne ke baad `src/lib/faqData.es.ts` mein bhi `homepageFAQsEs` array update karo (same index position).

---

**Homepage SEO meta** → `src/lib/i18n/translations/en.ts` aur `es.ts`

```ts
// en.ts mein:
"homeSeo.title": "Chichen Itza Tours – Best Guided Tours 2026 | Maya Explorer",
"homeSeo.description": "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Free cancellation & instant confirmation.",

// es.ts mein:
"homeSeo.title": "Tours a Chichén Itzá – Mejores Tours Guiados 2026 | Maya Explorer",
"homeSeo.description": "Reserva los mejores tours a Chichén Itzá desde Cancún, Playa del Carmen y Tulum.",
```

---

### Page Type 5: Blog Pages (`src/lib/blogData.ts`)

Blog posts ka saara content `blogData.ts` mein `BlogPost[]` array mein stored hai.

**Structure:**
```ts
{
  slug: "spring-equinox-chichen-itza-guide",     // URL: /blog/spring-equinox-...
  title: "The Spring Equinox at Chichen Itza...", // Page H1
  metaTitle: "Spring Equinox at Chichen Itza 2026 – Complete Guide", // Browser tab title
  metaDescription: "Plan your Spring Equinox visit...", // Google search preview
  excerpt: "Every March 20-21, thousands gather...", // Blog listing page preview
  content: [                                      // Body paragraphs — one string per paragraph
    "Paragraph 1 text here...",
    "Paragraph 2 text here...",
    "Paragraph 3 text here...",
  ],
  author: "Maya Explorer Tours",
  date: "2026-01-15",
  category: "Events",
  readTime: "6 min read",
  image: "/images/blog/equinox.jpg",
  imageAlt: "Alt text for the image",
  tags: ["equinox", "el castillo", "events"],
}
```

**Existing paragraph edit karna:**
```ts
// BEFORE
content: [
  "The Spring Equinox at Chichen Itza is one of Mexico's most spectacular astronomical events.",
  "This phenomenon demonstrates the incredible astronomical knowledge of the ancient Maya.",
],

// AFTER — first paragraph update karna
content: [
  "The Spring Equinox at Chichen Itza is one of Mexico's most spectacular events, drawing 30,000+ visitors annually.",
  "This phenomenon demonstrates the incredible astronomical knowledge of the ancient Maya.",
],
```

**Naya paragraph add karna:**
```ts
// content array mein new string add karo:
content: [
  "Existing paragraph 1...",
  "Existing paragraph 2...",
  "NEW: Book our Equinox Special Tour for priority viewing positions and expert commentary.",  // ← naya
],
```

**Naya blog post add karna:**
```ts
// blogPosts array ke end mein naya object add karo:
{
  slug: "chichen-itza-kids-guide",
  title: "Visiting Chichen Itza with Kids: Complete Family Guide",
  metaTitle: "Chichen Itza with Kids – Family Guide 2026",
  metaDescription: "Complete guide for visiting Chichen Itza with children. What to expect, what to bring, and family-friendly tips.",
  excerpt: "Chichen Itza can be magical for kids when you plan ahead. Here's everything families need to know.",
  content: [
    "Paragraph 1...",
    "Paragraph 2...",
  ],
  author: "Maya Explorer Tours",
  date: "2026-03-20",
  category: "Guides",
  readTime: "5 min read",
  image: "/images/blog/family-guide.jpg",
  imageAlt: "Family with kids at El Castillo pyramid Chichen Itza",
  tags: ["family", "kids", "tips"],
},
```

⚠️ **WARNING:** Blog posts ka Spanish version abhi `blogData.es.ts` mein hai. Naya post add karne ke baad usi slug ke saath `blogData.es.ts` mein bhi Spanish version add karna hoga — warna Spanish site pe blog section mein yeh post nahi dikhega.

---

---

## Section 17: Keyword Map — Kis Page Per Kaunsa Keyword Target Hai

Yeh section ek complete reference hai jo batata hai har URL ka primary keyword, secondary keywords, search intent, aur kaunse pages se keyword cannibalization ka risk hai.

---

### Homepage Silo

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/` | chichen itza tours | best chichen itza tours, maya explorer tours, chichen itza day trip | Commercial + Navigational | `/tours` — differentiate by emphasizing brand trust + overview vs. full listing |

---

### Tours Silo (`/tours/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/tours` | chichen itza tours | all chichen itza tours, compare tours, book chichen itza | Commercial | `/` — homepage focuses on brand; `/tours` focuses on all-tours comparison grid |
| `/tours/day-tours` | chichen itza day tour | chichen itza full day trip, guided day tour, day excursion | Commercial | `/tours/[slug]` individual day tour pages — category page lists options; individual pages close sales |
| `/tours/private-tours` | private chichen itza tour | private guided tour, exclusive tour, personal guide chichen itza | Commercial | `/tour-types/vip-skip-the-line` — private = personal guide; VIP = skip-the-line focus |
| `/tours/sunrise-tours` | chichen itza sunrise tour | early access chichen itza, sunrise at el castillo, before the crowds | Commercial | `/tours/private-tours` — sunrise = timing angle; private = exclusivity angle |
| `/tours/cenote-tours` | chichen itza cenote tour | chichen itza with cenote, cenote swim tour, ik kil cenote | Commercial | `/combo-tours/cenote-ik-kil` — category page = all cenote options; combo page = specific cenote |
| `/tours/night-tours` | chichen itza night tour | noches de kukulkan, light show chichen itza, evening tour | Commercial | No major risk — unique keyword set |
| `/tours/ek-balam-tours` | chichen itza ek balam tour | ek balam ruins, climbable pyramid mexico, two ruins tour | Commercial | `/combo-tours/` — tours category focuses on ek balam as a tour type; combo page focuses on the specific day |
| `/tours/valladolid-tours` | chichen itza valladolid tour | valladolid colonial town, pueblo magico yucatan, ruins and colonial | Commercial | No major risk — valladolid is a niche angle |

---

### Individual Tour Pages (`/tours/[slug]`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/tours/chichen-itza-day-tour-from-cancun` | chichen itza day tour from cancun | classic day tour cancun, guided tour cancun, cancun to chichen itza | Transactional | `/tours/day-tours` (category) + `/tours-from/cancun` (city) — individual page = specific product; others = discovery |
| `/tours/chichen-itza-private-vip-tour` | private vip chichen itza tour | skip the line chichen itza, vip tour cancun, exclusive private guide | Transactional | `/tours/private-tours` + `/tour-types/vip-skip-the-line` |
| `/tours/chichen-itza-sunrise-early-access-tour` | chichen itza sunrise early access | sunrise tour cancun, early morning chichen itza, photography tour | Transactional | `/tours/sunrise-tours` |
| `/tours/chichen-itza-cenote-ik-kil-combo-tour` | chichen itza cenote ik kil tour | ik kil cenote combo, chichen itza swimming combo | Transactional | `/tours/cenote-tours` + `/combo-tours/cenote-ik-kil` |
| `/tours/chichen-itza-budget-express-tour` | cheap chichen itza tour from cancun | affordable mayan ruins, budget day trip, low cost chichen itza | Transactional | `/tour-types/budget` + `/tours/chichen-itza-budget-tour-playa-del-carmen` |
| `/tours/chichen-itza-family-adventure-tour` | chichen itza family tour | kid friendly mayan ruins, family vacation yucatan, children chichen itza | Transactional | `/tour-types/family-friendly` |
| `/tours/chichen-itza-night-light-show-tour` | chichen itza night light show | noches de kukulkan tour, evening chichen itza, light show tour | Transactional | `/tours/night-tours` |
| `/tours/chichen-itza-valladolid-colonial-tour` | chichen itza valladolid combo | valladolid tour combo, ruins colonial town, pueblo magico tour | Transactional | `/tours/valladolid-tours` |
| `/tours/chichen-itza-private-sunrise-tour` | private sunrise chichen itza | vip sunrise tour, luxury early access, private photographer tour | Transactional | `/tours/chichen-itza-sunrise-early-access-tour` — private sunrise = luxury angle; group sunrise = affordability |
| `/tours/chichen-itza-budget-tour-playa-del-carmen` | cheap chichen itza tour playa del carmen | budget tour playa, affordable day trip playa, low cost mayan tour | Transactional | `/tours/chichen-itza-budget-express-tour` — differentiate by departure city |
| `/tours/chichen-itza-cenote-saamal-combo-tour` | chichen itza cenote saamal tour | cenote saamal valladolid, three in one yucatan tour | Transactional | `/tours/chichen-itza-cenote-ik-kil-combo-tour` — saamal combo = valladolid angle; ik kil combo = ik kil cenote |
| `/tours/chichen-itza-ek-balam-combo-tour` | chichen itza ek balam combo | climb mayan pyramid, two ruins one day, ek balam tour cancun | Transactional | `/tours/ek-balam-tours` |
| `/tours/chichen-itza-merida-cultural-tour` | chichen itza cultural tour merida | merida to chichen itza, local historian guide, hacienda cenote | Transactional | `/tours-from/merida` — merida page = departure city focus; merida cultural tour = specific product |

---

### Tour Types Silo (`/tour-types/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/tour-types/small-group` | small group chichen itza tour | intimate tour yucatan, max 15 people, personalized chichen itza | Commercial | `/tours/day-tours` — small-group = group size differentiator; day-tours = time-of-day |
| `/tour-types/luxury` | luxury chichen itza tour | premium tour yucatan, upscale mayan experience, 5 star tour | Commercial | `/tours/private-tours` — luxury = amenities angle; private = guide exclusivity angle |
| `/tour-types/budget` | budget chichen itza tour | cheap tour yucatan, affordable day trip, low cost mayan ruins | Commercial | Individual budget tour pages — type page = overview; individual pages = specific product |
| `/tour-types/family-friendly` | chichen itza family tour | kids at chichen itza, family vacation yucatan, child friendly ruins | Commercial | `/tours/chichen-itza-family-adventure-tour` — type page = all family options; individual page = specific product |
| `/tour-types/vip-skip-the-line` | chichen itza skip the line | vip entrance chichen itza, no wait chichen itza, priority access | Commercial | `/tours/private-tours` — skip the line = queue-avoidance focus; private = guide quality focus |

---

### Departure City Silo (`/tours-from/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/tours-from/cancun` | chichen itza tours from cancun | cancun to chichen itza day trip, chichen itza cancun excursion, cancun day trips | Commercial | `/tours/chichen-itza-day-tour-from-cancun` — city page = all tours from city; individual page = one specific product |
| `/tours-from/playa-del-carmen` | chichen itza tours from playa del carmen | playa del carmen to chichen itza, day trip playa, excursion 5th avenue | Commercial | `/tours/chichen-itza-budget-tour-playa-del-carmen` |
| `/tours-from/tulum` | chichen itza tours from tulum | tulum to chichen itza, day trip tulum, mayan ruins from tulum | Commercial | No major individual tour slug focuses on Tulum departure |
| `/tours-from/riviera-maya` | chichen itza tours from riviera maya | riviera maya day trip, hotel pickup riviera maya, excursion riviera | Commercial | `/tours-from/playa-del-carmen` — riviera maya = broader resort area; playa = specific city |
| `/tours-from/merida` | chichen itza tours from merida | merida to chichen itza, closest city chichen itza, day trip merida | Commercial | `/tours/chichen-itza-merida-cultural-tour` |

---

### Combo Tours Silo (`/combo-tours/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/combo-tours/cenote-ik-kil` | chichen itza cenote ik kil tour | ik kil combo tour, swim at ik kil, ruins and cenote | Commercial | `/tours/cenote-tours` + `/tours/chichen-itza-cenote-ik-kil-combo-tour` |
| `/combo-tours/coba-ruins` | chichen itza coba ruins tour | chichen itza coba combo, two pyramids one day, coba and chichen | Commercial | No major cannibalization risk — Coba is unique |
| `/combo-tours/isla-mujeres` | chichen itza isla mujeres tour | ruins and island tour, chichen itza beach combo | Commercial | No major risk — unique combination |
| `/combo-tours/multi-day-yucatan` | multi day yucatan tour | yucatan explorer package, 3 day yucatan, multi site mayan tour | Commercial | No major risk — unique long-form product |

---

### Guide Silo (`/guide/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/guide` | chichen itza guide | chichen itza travel guide, visitor guide, complete guide | Informational | `/` homepage — guide hub = resource directory; homepage = booking intent |
| `/guide/best-time-to-visit` | best time to visit chichen itza | when to go chichen itza, chichen itza weather, best month | Informational | `/guide/entrance-fees` — timing guide = weather + crowds; fees guide = cost planning |
| `/guide/what-to-bring` | what to bring to chichen itza | chichen itza packing list, what to wear, essentials for ruins | Informational | `/guide/dress-code-and-rules` — packing = items to bring; dress code = what to wear rules |
| `/guide/history-and-facts` | chichen itza history | mayan ruins history, el castillo facts, chichen itza timeline | Informational | No major risk — unique informational angle |
| `/guide/how-to-get-there` | how to get to chichen itza | chichen itza transportation, bus to chichen itza, drive to ruins | Informational | `/tours-from/cancun` etc. — getting there = all transport options; city pages = our tours specifically |
| `/guide/entrance-fees` | chichen itza entrance fee | chichen itza ticket price, cost to visit, admission fee 2026 | Informational | No major risk — very specific informational query |
| `/guide/photography-tips` | chichen itza photography | best photos chichen itza, photography guide ruins, camera settings | Informational | No major risk — niche informational |
| `/guide/dress-code-and-rules` | chichen itza dress code | what to wear chichen itza, rules chichen itza, prohibited items | Informational | `/guide/what-to-bring` — differentiate: dress code = what's allowed/prohibited; packing = practical items to bring |
| `/guide/vs-other-ruins` | chichen itza vs tulum | chichen itza or tulum, compare mayan ruins, best ruins mexico | Informational | `/blog/chichen-itza-vs-tulum-ruins` — guide page = comprehensive comparison; blog post = opinion/narrative angle |

---

### Practical Silo (`/practical/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/practical/faq` | chichen itza faq | chichen itza questions, common questions, visitor info | Informational | `/guide/*` pages — FAQ = quick answers; guide pages = deep dives |
| `/practical/contact` | — (Navigational only) | contact maya explorer, tour inquiry | Navigational | None |
| `/practical/cancellation-policy` | — (Navigational only) | refund policy, cancellation terms | Navigational | None |
| `/practical/testimonials` | chichen itza tour reviews | best tour reviews, maya explorer reviews, customer testimonials | Informational | No major risk |
| `/practical/booking-info` | how to book chichen itza tour | booking process, tour reservation, how to reserve | Informational | No major risk |

---

### Blog Silo (`/blog/`)

| URL | Primary Keyword | Secondary Keywords | Search Intent | Do NOT Cannibalize With |
|---|---|---|---|---|
| `/blog` | chichen itza blog | travel tips yucatan, chichen itza articles | Informational | `/guide` hub — blog = news/stories; guide = practical reference |
| `/blog/spring-equinox-chichen-itza-guide` | spring equinox chichen itza | equinox at chichen itza 2026, serpent shadow el castillo | Informational | `/guide/best-time-to-visit` — blog = event narrative; guide = year-round timing |
| `/blog/cenotes-near-chichen-itza` | cenotes near chichen itza | best cenotes yucatan, ik kil cenote guide, swimming cenote | Informational | `/tours/cenote-tours` — blog = informational deep dive; tour page = booking intent |
| `/blog/chichen-itza-vs-tulum-ruins` | chichen itza vs tulum ruins | tulum or chichen itza, compare ruins mexico, which ruins visit | Informational | `/guide/vs-other-ruins` — differentiate by content angle (blog = casual comparison; guide = comprehensive data table) |
| `/blog/photographing-chichen-itza-like-a-pro` | photographing chichen itza | chichen itza photo tips, best camera settings ruins | Informational | `/guide/photography-tips` — blog = personal/storytelling tone; guide = systematic tips list |
| `/blog/mayan-history-beginners-guide` | mayan history guide | maya civilization beginners, mayan culture overview | Informational | `/guide/history-and-facts` — blog = narrative intro; guide = facts, timeline, data |

---

### Cannibalization Warning Table

Yeh table highest-risk keyword pairs show karta hai aur unhe differentiate kaise karein:

| Risk Pair | Page 1 | Page 2 | Differentiation Strategy |
|---|---|---|---|
| "chichen itza tours" | `/` Homepage | `/tours` All Tours page | Homepage: brand story, trust signals, 3 featured tours → focus on WHO WE ARE. `/tours`: full catalog, filters, compare all options → focus on WHAT WE OFFER. Homepage title: "Best Guided Chichen Itza Tours"; Tours title: "All Chichen Itza Tours – Compare & Book" |
| "chichen itza day tour" | `/tours/day-tours` | `/tours/chichen-itza-day-tour-from-cancun` | Category page: "explore all day tour options" — informational commercial. Individual page: "book THIS specific tour" — transactional. Category targets plural "day tours"; individual targets exact product with city modifier |
| "chichen itza from cancun" | `/tours-from/cancun` | `/tours/chichen-itza-day-tour-from-cancun` | City page: ALL tours available from Cancun (comparison hub, includes budget/private/sunrise). Individual tour page: ONE specific product, push to conversion. City page H1: "Tours from Cancún" (plural); Tour page H1: "Classic Day Tour from Cancun" (specific) |
| "cenote tour chichen itza" | `/tours/cenote-tours` | `/combo-tours/cenote-ik-kil` | Cenote tours category: any tour that includes a cenote (broad). Cenote Ik Kil combo: specifically that famous cenote as the main selling point. Category targets "cenote tours" broadly; combo page targets "ik kil" specifically |
| "private tour" | `/tours/private-tours` | `/tour-types/vip-skip-the-line` | Private tours: emphasis on personal guide, just your group, any language. VIP skip-the-line: emphasis on queue avoidance, priority entrance, time-saving. Private tours title: "Private Chichen Itza Tour"; VIP page title: "Skip the Line – VIP Access" |

✅ **TIP:** Cannibalization sabse common problem tab hoti hai jab ek hi keyword multiple pages ki H1, title tag, aur meta description mein exactly same hota hai. Solution: har page ka unique angle clearly define karo — aur woh angle title aur meta mein dikhana chahiye.

⚠️ **WARNING:** Kisi bhi page ka slug (`/tours/day-tours`, `/tours-from/cancun`, etc.) kabhi mat badlo. Slug hi URL hai jo Google ne index kiya hua hai. Slug change = naya URL = sari ranking kho jaati hai.

---

---

## SECTION 18: CRITICAL EDITING RULES

> ⚠️ **READ THIS BEFORE MAKING ANY CHANGES.** These rules prevent broken pages, lost SEO rankings, and build failures.

---

### Rule 1: Never Change Slugs or File Names

URL slugs are indexed by Google. Changing a slug = changing the URL = losing all accumulated SEO rankings and backlinks.

**NEVER change:**
- File names in `/src/pages/` (e.g., `day-tours.tsx`, `cancun.tsx`)
- Tour `slug` values in `tourData.ts` (e.g., `"chichen-itza-day-tour-from-cancun"`)
- Blog `slug` values in `blogData.ts`
- Route mappings in `src/lib/i18n/routeMap.ts`

If you absolutely must rename a URL, set up a 301 redirect from the old URL to the new one.

---

### Rule 2: Always Update Both Language Files

Every content change must be made in **both** English and Spanish files:

| English File | Spanish File |
|---|---|
| `src/lib/tourData.ts` | `src/lib/tourData.es.ts` |
| `src/lib/faqData.ts` | `src/lib/faqData.es.ts` |
| `src/lib/blogData.ts` | `src/lib/blogData.es.ts` |
| `src/lib/i18n/translations/en.ts` | `src/lib/i18n/translations/es.ts` |

For page files that use `isEs ? "Spanish" : "English"` patterns, update both strings in the same file.

> ⚠️ If you only update one language, the other language will show stale/incorrect content.

---

### Rule 3: Never Break the TypeScript Types

Tour objects must match the `Tour` type in `src/types/tour.ts`. If you add a new field, add it to the type first. If you remove a required field, the build will fail.

**Common mistakes:**
- Removing a required field like `title`, `slug`, or `price`
- Adding a field that doesn't exist in the type definition
- Using wrong data types (string where number is expected)

---

### Rule 4: Keep Commas and Quotes Intact

Every array item and object property must end with a comma. Every string must be wrapped in quotes. Missing commas or quotes will crash the entire site.

**Correct:**
```ts
highlights: [
  "Visit El Castillo pyramid",
  "Swim in Cenote Ik Kil",
  "Enjoy buffet lunch",
],
```

**Wrong (missing comma after second item):**
```ts
highlights: [
  "Visit El Castillo pyramid",
  "Swim in Cenote Ik Kil"
  "Enjoy buffet lunch",
],
```

---

### Rule 5: Never Hardcode Colors in Components

All colors must use semantic design tokens from `index.css` and `tailwind.config.ts`. Never use raw color values like `text-white`, `bg-[#D2691E]`, or `text-black` directly in components.

**Correct:** `text-primary`, `bg-background`, `text-muted-foreground`, `border-border`
**Wrong:** `text-white`, `bg-orange-600`, `text-[#333]`

---

### Rule 6: Update Contact Info in ALL Locations

Contact details (phone, email, address) are scattered across 4–7 files. When updating any contact info, you **must** update every file listed in [Section 1](#section-1-contact-information-most-important). Missing one file = inconsistent info shown to users and Google.

---

### Rule 7: Keep SEO Meta Under Character Limits

| Field | Max Length | What Happens If Too Long |
|---|---|---|
| `metaTitle` / page title | 60 characters | Google truncates it with "..." |
| `metaDescription` | 155 characters | Google truncates or ignores it |
| H1 heading | No strict limit | Keep concise for readability |

Always count characters after editing. Use a tool like [charactercountonline.com](https://charactercountonline.com).

---

### Rule 8: Never Delete Tour IDs

The `id` field in tour objects is used internally for routing, filtering, and cross-referencing between English and Spanish data. Changing or deleting an `id` will break tour detail pages and category listings.

---

### Rule 9: Test After Every Change

After any edit:
1. Check the English version of the affected page loads without errors
2. Check the Spanish version (`/es/...`) of the same page loads without errors
3. Check the browser console for red error messages
4. Verify the build completes without errors

---

### Rule 10: Keep the Sitemap Updated

When adding a new page:
1. Add the English URL to `public/sitemap.xml`
2. Add the Spanish URL with `xhtml:link` hreflang alternates
3. Add route mappings to `src/lib/i18n/routeMap.ts`

When removing a page:
1. Remove both English and Spanish entries from `sitemap.xml`
2. Set up a 301 redirect if the page had traffic

---

### Rule 11: Never Edit Read-Only Files

These files are managed by the build system and must **never** be manually edited:
- `.gitignore`
- `bun.lock` / `bun.lockb`
- `package-lock.json`
- `node_modules/` (entire folder)

---

### Rule 12: Images Must Have Alt Text

Every `<img>` tag or image object must include descriptive `alt` text for accessibility and SEO. Never use empty alt text (`alt=""`) unless the image is purely decorative.

**Good:** `alt="Aerial view of El Castillo pyramid at Chichen Itza"`
**Bad:** `alt="image1"` or `alt=""`

---

### Rule 13: Maintain Internal Linking

Every page should have at least 5–10 internal links to other pages on the site. When adding a new page, link to it from at least 2–3 related existing pages. When removing a page, remove or update all links pointing to it.

---

### Rule 14: Preserve the `isEs` Pattern

All bilingual page content follows this pattern:
```tsx
{isEs ? "Texto en español" : "English text"}
```

Never remove the `isEs` conditional. Never replace it with hardcoded text in a single language.

---

### Rule 15: Back Up Before Major Changes

Before making large-scale edits (e.g., restructuring tours, changing the design system, updating multiple pages), commit your current working state. This way you can revert if something breaks.

---

*End of Editing Guide*
