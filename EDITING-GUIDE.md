# Maya Explorer Tours — Complete Editing Guide

> **Who this is for:** Anyone who needs to update website content without being a developer.
> This guide tells you exactly which file to open, what to look for, and how to change it safely.

---

## Table of Contents

1. [Contact Information](#section-1-contact-information-most-important)
2. [Tour Packages](#section-2-tour-packages-tourDatats)
3. [Images](#section-3-images)
4. [Website Text & UI Labels](#section-4-website-text--ui-labels-ents--ests)
5. [FAQ Content](#section-5-faq-content-faqDatats)
6. [Blog Posts](#section-6-blog-posts-blogDatats)
7. [Reviews / Testimonials](#section-7-reviews--testimonials-reviewsDatats)
8. [Location Page Content](#section-8-location-page-content-locationDatats)
9. [Complete SEO System](#section-9-complete-seo-system)
10. [Colors & Fonts](#section-10-colors--fonts-indexcss--tailwindconfigts)
11. [Sitemap & Robots](#section-11-sitemap--robots-public)
12. [Header Navigation](#section-12-header-navigation-headertsx)
13. [Footer Links](#section-13-footer-links-footertsx)
14. [Common Mistakes to Avoid](#section-14-common-mistakes-to-avoid)

---

## SECTION 1: CONTACT INFORMATION (Most Important)

Contact details are scattered across **multiple files**. When you update one, you must update ALL of them.

---

### Phone Number

Currently: `+52 998 123 4567`

| File | What to search for | Notes |
|------|--------------------|-------|
| `src/components/layout/Header.tsx` | `+52 998 123 4567` | Line 75 — visible in top bar |
| `src/components/layout/Footer.tsx` | `+52 998 123 4567` | Line 24 — visible in footer |
| `src/lib/schema.ts` | `"+52-984-123-4567"` | Line 16 — used for Google search results |

**Before (Header.tsx line 75):**
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

> ✅ TIP: The `href="tel:..."` value must have NO spaces or dashes — just digits.

---

### Email Address

Currently: `info@chichenitzatours.com`

| File | What to search for | Notes |
|------|--------------------|-------|
| `src/components/layout/Footer.tsx` | `info@chichenitzatours.com` | Line 27 — visible in footer |
| `src/lib/schema.ts` | `"info@chichenitzatours.com"` | Line 17 — used for Google search results |

**Before (Footer.tsx line 27):**
```tsx
// src/components/layout/Footer.tsx
<a href="mailto:info@chichenitzatours.com" className="...">
  <Mail className="h-4 w-4" /> info@chichenitzatours.com
</a>
```

**After:**
```tsx
// src/components/layout/Footer.tsx
<a href="mailto:hello@mayaexplorertours.com" className="...">
  <Mail className="h-4 w-4" /> hello@mayaexplorertours.com
</a>
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

Currently: `5th Avenue #123, Playa del Carmen`

| File | What to search for | Notes |
|------|--------------------|-------|
| `src/lib/schema.ts` | `streetAddress` | Lines 20-25 — full postal address for Google |
| `src/components/layout/Footer.tsx` | `Cancún, Quintana Roo, México` | Line 30 — display address in footer |

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

Currently: `https://chichenitzatours.com`

This appears in **4 locations** and must all be updated together when you go live with a new domain:

| File | Line | What to search for |
|------|------|--------------------|
| `src/lib/schema.ts` | 4 | `const BASE_URL = "https://chichenitzatours.com"` |
| `src/lib/seo.ts` | 5 | `const BASE_URL = "https://chichenitzatours.com"` |
| `public/sitemap.xml` | Every `<loc>` tag | `https://chichenitzatours.com` |
| `public/robots.txt` | Last line | `Sitemap: https://chichenitzatours.com/sitemap.xml` |

**Before:**
```ts
// src/lib/schema.ts  AND  src/lib/seo.ts
const BASE_URL = "https://chichenitzatours.com";
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

The placeholder domain `https://chichenitzatours.com` appears in **4 separate files**. When you go live with a real domain, all 4 must be updated — missing any one of them will cause broken canonical links or incorrect schema data.

---

**FILE 1: `src/lib/seo.ts` (line 5)**

```ts
// src/lib/seo.ts
const BASE_URL = "https://chichenitzatours.com";
```
Change to:
```ts
const BASE_URL = "https://yournewdomain.com";
```

---

**FILE 2: `src/lib/schema.ts` (line 4)**

```ts
// src/lib/schema.ts
const BASE_URL = "https://chichenitzatours.com";
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
const DEFAULT_OG_IMAGE = "https://chichenitzatours.com/images/chichen-itza-hero.jpg";
const SITE_NAME = "Chichen Itza Tours";
const BASE_URL = "https://chichenitzatours.com";
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
- Find: `https://chichenitzatours.com`
- Replace all with: `https://yournewdomain.com`

Also update `public/robots.txt` — the last line:
```
Sitemap: https://chichenitzatours.com/sitemap.xml
```
Change to:
```
Sitemap: https://yournewdomain.com/sitemap.xml
```

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
const DEFAULT_OG_IMAGE = "https://chichenitzatours.com/images/chichen-itza-hero.jpg";
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
  email: "info@chichenitzatours.com",             // ← your real email
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
  <loc>https://chichenitzatours.com/your-new-page</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://chichenitzatours.com/your-new-page"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://chichenitzatours.com/es/tu-nueva-pagina"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://chichenitzatours.com/your-new-page"/>
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

Sitemap: https://chichenitzatours.com/sitemap.xml
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
- **Current domain:** `https://chichenitzatours.com` (appears on every line)

**When to update sitemap.xml:**
1. When you change the domain
2. When you add a new page
3. When you change a tour's slug

**To change the domain — use Find & Replace:**
- Find: `https://chichenitzatours.com`
- Replace with: `https://yournewdomain.com`

This will update all occurrences at once.

**To add a new page, copy this block and insert it with the correct URL:**
```xml
<url>
  <loc>https://chichenitzatours.com/your-new-page</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://chichenitzatours.com/your-new-page"/>
  <xhtml:link rel="alternate" hreflang="es" href="https://chichenitzatours.com/es/your-new-page"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://chichenitzatours.com/your-new-page"/>
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

Sitemap: https://chichenitzatours.com/sitemap.xml   ← update this URL when changing domain
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

*End of Editing Guide*
