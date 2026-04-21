# SEO Master Reference — Chichen Itza Tours

> Auto-generated from codebase analysis. Last updated: 2026-03-28

**Overall SEO Posture:** This is a well-architected, SEO-first tourism website with 45+ unique English pages (mirrored in Spanish via `/es/` prefix) covering a strict silo structure: `/tours/`, `/tours-from/`, `/tour-types/`, `/combo-tours/`, `/guide/`, `/practical/`, and `/blog/`. Every page uses `react-helmet-async` via a centralized `SEOHead` component with unique titles, meta descriptions, canonical URLs, and hreflang alternates. Schema.org JSON-LD is deployed extensively (TravelAgency, TouristAttraction, Product, Article, FAQPage, BreadcrumbList, TouristDestination, BlogPosting, LocalBusiness). The site demonstrates strong topical authority with 8 long-form guide pages (~3,000 words each), 12 tour category/filter pages, 5 departure city landing pages, and comprehensive internal linking. Minor gaps exist in schema coverage on some tour-type and practical pages, and the 404 page lacks SEO meta tags (correctly).

---

## Summary Stats

| Metric | Count |
|--------|-------|
| **Total English pages** | 45 (+ dynamic tour detail & blog post pages) |
| **Total Spanish mirrors** | 45 (same components, `/es/` prefix) |
| **Pages with JSON-LD schema** | 38 |
| **Pages missing schema** | 7 (luxury, budget, family-friendly, VIP, booking-info, cancellation-policy, contact — all Support/Utility pages) |
| **Pages missing meta description** | 0 |
| **Duplicate title tags found** | None |
| **Pages with FAQPage schema** | 18 |
| **Pages with BreadcrumbList schema** | 30+ |
| **Pages with Article schema** | 8 (all guide pages) |

---

## Page Inventory — Quick Reference Table

| # | Page Title (EN) | URL / Route | Primary Keyword | Page Type | Schema | Status |
|---|----------------|-------------|-----------------|-----------|--------|--------|
| 1 | Chichen Itza Tours – Best Guided Tours 2026 | `/` | chichen itza tours | Hub/Landing | ✅ Organization, TouristAttraction, FAQPage | ✅ |
| 2 | All Chichen Itza Tours – Compare & Book | `/tours` | all chichen itza tours | Hub | ❌ None | ⚠️ |
| 3 | Day Tours – Full-Day Guided Experiences | `/tours/day-tours` | chichen itza day tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 4 | Private Tours – VIP Skip the Line | `/tours/private-tours` | chichen itza private tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 5 | Cenote Tours – Swim & Explore | `/tours/cenote-tours` | chichen itza cenote tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 6 | Sunrise Tours – Early Access | `/tours/sunrise-tours` | chichen itza sunrise tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 7 | Ek Balam Tours – Climb a Pyramid | `/tours/ek-balam-tours` | chichen itza ek balam tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 8 | Valladolid Tours – Colonial Town | `/tours/valladolid-tours` | chichen itza valladolid tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 9 | Night Tours – Light & Sound Show | `/tours/night-tours` | chichen itza night tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 10 | [Tour Detail] (dynamic) | `/tours/:slug` | [tour-specific keyword] | Child | ✅ Product, BreadcrumbList, FAQPage | ✅ |
| 11 | Tours from Cancún | `/tours-from/cancun` | chichen itza tours from cancun | Landing | ✅ FAQPage, BreadcrumbList, TouristDestination | ✅ |
| 12 | Tours from Playa del Carmen | `/tours-from/playa-del-carmen` | chichen itza from playa del carmen | Landing | ✅ FAQPage, BreadcrumbList, TouristDestination | ✅ |
| 13 | Tours from Tulum | `/tours-from/tulum` | chichen itza tours from tulum | Landing | ✅ FAQPage, BreadcrumbList, TouristDestination | ✅ |
| 14 | Tours from Riviera Maya | `/tours-from/riviera-maya` | chichen itza tours riviera maya | Landing | ✅ FAQPage, BreadcrumbList, TouristDestination | ✅ |
| 15 | Tours from Mérida | `/tours-from/merida` | chichen itza tours from merida | Landing | ✅ FAQPage, BreadcrumbList, TouristDestination | ✅ |
| 16 | Small Group Tours | `/tour-types/small-group` | chichen itza small group tours | Child | ✅ FAQPage, BreadcrumbList | ✅ |
| 17 | Luxury Tours – Premium VIP | `/tour-types/luxury` | luxury chichen itza tours | Child | ✅ BreadcrumbList | ⚠️ |
| 18 | Budget Tours – From $49 | `/tour-types/budget` | budget chichen itza tours | Child | ✅ BreadcrumbList | ⚠️ |
| 19 | Family Friendly Tours | `/tour-types/family-friendly` | family friendly chichen itza tours | Child | ✅ BreadcrumbList | ⚠️ |
| 20 | VIP Skip the Line Tours | `/tour-types/vip-skip-the-line` | vip skip the line chichen itza | Child | ✅ BreadcrumbList | ⚠️ |
| 21 | Cenote Ik Kil Combo | `/combo-tours/cenote-ik-kil` | chichen itza cenote ik kil | Child | ✅ BreadcrumbList | ⚠️ |
| 22 | Coba Ruins Combo | `/combo-tours/coba-ruins` | chichen itza coba ruins tour | Child | ✅ BreadcrumbList | ⚠️ |
| 23 | Isla Mujeres Combo | `/combo-tours/isla-mujeres` | chichen itza isla mujeres | Child | ✅ BreadcrumbList | ⚠️ |
| 24 | Multi-Day Yucatan Tour | `/combo-tours/multi-day-yucatan` | multi day yucatan tour | Child | ✅ BreadcrumbList | ⚠️ |
| 25 | Visitor Guide Index | `/guide` | chichen itza visitor guide | Hub | ✅ BreadcrumbList | ✅ |
| 26 | Best Time to Visit | `/guide/best-time-to-visit` | best time to visit chichen itza | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 27 | What to Bring | `/guide/what-to-bring` | what to bring to chichen itza | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 28 | History & Facts | `/guide/history-and-facts` | chichen itza history | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 29 | How to Get There | `/guide/how-to-get-there` | how to get to chichen itza | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 30 | Entrance Fees 2026 | `/guide/entrance-fees` | chichen itza entrance fees | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 31 | Photography Tips | `/guide/photography-tips` | chichen itza photography tips | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 32 | Dress Code & Rules | `/guide/dress-code-and-rules` | chichen itza dress code | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 33 | vs Other Ruins | `/guide/vs-other-ruins` | chichen itza vs tulum | Guide | ✅ BreadcrumbList, Article, FAQPage | ✅ |
| 34 | FAQ Hub | `/practical/faq` | chichen itza tours faq | Support | ✅ FAQPage, BreadcrumbList | ✅ |
| 35 | Contact / Get a Quote | `/practical/contact` | contact chichen itza tours | Support | ❌ None | ⚠️ |
| 36 | Cancellation Policy | `/practical/cancellation-policy` | chichen itza cancellation policy | Support | ❌ None | ⚠️ |
| 37 | Testimonials | `/practical/testimonials` | chichen itza tour reviews | Support | ✅ LocalBusiness (AggregateRating) | ✅ |
| 38 | Booking Information | `/practical/booking-info` | how to book chichen itza tours | Support | ❌ None | ⚠️ |
| 39 | Blog Index | `/blog` | chichen itza blog | Hub | ✅ BreadcrumbList | ✅ |
| 40 | Blog Post (dynamic) | `/blog/:slug` | [post-specific keyword] | Blog | ✅ BreadcrumbList, BlogPosting | ✅ |
| 41 | 404 Not Found | `*` | — | Utility | ❌ (correct) | ✅ |

---

## Detailed Page Profiles

### 1. Homepage

- **URL**: `/`
- **File**: `src/pages/Index.tsx`
- **Page Type**: Hub / Landing
- **Primary Keyword**: chichen itza tours
- **Secondary Keywords**: best chichen itza tours, guided tours chichen itza, book chichen itza
- **Meta Title**: `Chichen Itza Tours – Best Guided Tours 2026` (via `t("homeSeo.title")`)
- **Meta Description**: Via `t("homeSeo.description")` — localized
- **Canonical URL**: `https://chichenitzatravel.com/`
- **Schema Markup**: Organization (TravelAgency), TouristAttraction, FAQPage
- **Internal Links OUT**: PopularTours → `/tours/:slug`, DepartureSection → `/tours-from/*`, WhyChooseUs, CTASection → `/tours`, `/practical/contact`
- **Internal Links IN**: Every page (via Header/Footer navigation)
- **CTA Type**: Hard CTA (Book Now via QuickBookingForm)
- **Word Count Estimate**: ~800 (dynamic sections)
- **Issues Found**: None
- **Notes**: Triple-schema homepage with Organization, TouristAttraction, and FAQPage. Strong above-the-fold CTA with QuickBookingForm.

---

### 2. All Tours Index

- **URL**: `/tours`
- **File**: `src/pages/tours/index.tsx`
- **Page Type**: Hub
- **Primary Keyword**: all chichen itza tours
- **Secondary Keywords**: compare chichen itza tours, chichen itza excursions
- **Meta Title**: `All Chichen Itza Tours – Compare & Book | 2026` (52 chars) ✅
- **Meta Description**: `Browse all Chichen Itza tours. Compare prices, durations, and reviews. Day tours, private VIP, sunrise, cenote combos & more. Free cancellation.` (148 chars) ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours`
- **Schema Markup**: None ⚠️
- **Internal Links OUT**: 15+ links to tour categories, departure cities, guide pages, FAQ, testimonials
- **Internal Links IN**: Header nav, all tour child pages, homepage
- **CTA Type**: Hard CTA (tour cards with Book Now)
- **Word Count Estimate**: Dynamic (tour listings)
- **Issues Found**: Missing JSON-LD schema — should have BreadcrumbList at minimum
- **Notes**: Comprehensive internal linking hub with 15 cross-category links

---

### 3. Day Tours

- **URL**: `/tours/day-tours`
- **File**: `src/pages/tours/day-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza day tours
- **Secondary Keywords**: full day chichen itza tour, guided day trip chichen itza
- **Meta Title**: `Tours de Día a Chichén Itzá – Excursiones Guiadas 2026` (ES) / EN equivalent
- **Meta Description**: 156 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/day-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **Internal Links OUT**: Tour cards, guide pages, departure cities
- **CTA Type**: Hard CTA (Book Now on tour cards)
- **Word Count Estimate**: ~2,000 (content + FAQ)
- **Issues Found**: None
- **Notes**: Includes tour filters, review grid, FAQ section, tip box

---

### 4. Private Tours

- **URL**: `/tours/private-tours`
- **File**: `src/pages/tours/private-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza private tours
- **Secondary Keywords**: vip chichen itza, private guide chichen itza
- **Meta Title**: `Tours Privados a Chichén Itzá – VIP y Sin Filas 2026` (ES) — 53 chars ✅
- **Meta Description**: 158 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/private-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **Internal Links OUT**: Tour cards, comparison table, guide pages
- **CTA Type**: Hard CTA
- **Word Count Estimate**: ~2,200
- **Issues Found**: None

---

### 5. Cenote Tours

- **URL**: `/tours/cenote-tours`
- **File**: `src/pages/tours/cenote-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza cenote tours
- **Secondary Keywords**: cenote swim tour, ik kil cenote tour
- **Meta Title**: `Chichén Itzá + Tours de Cenotes – Nada y Explora 2026` (ES) ✅
- **Meta Description**: 155 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/cenote-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **CTA Type**: Hard CTA
- **Word Count Estimate**: ~1,800
- **Issues Found**: None

---

### 6. Sunrise Tours

- **URL**: `/tours/sunrise-tours`
- **File**: `src/pages/tours/sunrise-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza sunrise tour
- **Secondary Keywords**: early access chichen itza, golden hour chichen itza
- **Meta Title**: `Tour al Amanecer en Chichén Itzá – Acceso Temprano` (ES) — 52 chars ✅
- **Meta Description**: 155 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/sunrise-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **CTA Type**: Hard CTA
- **Word Count Estimate**: ~2,000
- **Issues Found**: None

---

### 7. Ek Balam Tours

- **URL**: `/tours/ek-balam-tours`
- **File**: `src/pages/tours/ek-balam-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza ek balam tour
- **Secondary Keywords**: climb mayan pyramid, ek balam combo tour
- **Meta Title**: `Chichén Itzá + Ek Balam Tours – Sube una Pirámide Maya 2026` (ES) — 60 chars ✅
- **Meta Description**: 155 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/ek-balam-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **CTA Type**: Hard CTA
- **Word Count Estimate**: ~1,500
- **Issues Found**: None

---

### 8. Valladolid Tours

- **URL**: `/tours/valladolid-tours`
- **File**: `src/pages/tours/valladolid-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza valladolid tour
- **Secondary Keywords**: pueblo magico valladolid, colonial town tour
- **Meta Title**: `Chichén Itzá + Valladolid Tours – Pueblo Mágico Colonial 2026` (ES) ✅
- **Meta Description**: 155 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/valladolid-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **CTA Type**: Hard CTA
- **Word Count Estimate**: ~1,500
- **Issues Found**: None

---

### 9. Night Tours

- **URL**: `/tours/night-tours`
- **File**: `src/pages/tours/night-tours.tsx`
- **Page Type**: Child
- **Primary Keyword**: chichen itza night tour
- **Secondary Keywords**: noches de kukulkan, light show chichen itza
- **Meta Title**: `Tours Nocturnos Chichén Itzá – Espectáculo de Luz y Sonido 2026` (ES) ✅
- **Meta Description**: 155 chars ✅
- **Canonical URL**: `https://chichenitzatravel.com/tours/night-tours`
- **Schema Markup**: FAQPage, BreadcrumbList
- **CTA Type**: Hard CTA
- **Word Count Estimate**: ~1,500
- **Issues Found**: None

---

### 10. Tour Detail (Dynamic)

- **URL**: `/tours/:slug`
- **File**: `src/pages/tours/[slug].tsx`
- **Page Type**: Child (Transactional)
- **Primary Keyword**: [varies by tour slug]
- **Meta Title**: Dynamic from tour data
- **Meta Description**: Dynamic from tour data
- **Canonical URL**: `https://chichenitzatravel.com/tours/{slug}`
- **Schema Markup**: Product, BreadcrumbList, FAQPage
- **Internal Links OUT**: Related tours, category pages, departure city pages, guide pages
- **CTA Type**: Hard CTA (QuickBookingForm, StickyBookingBar)
- **Word Count Estimate**: ~2,500 (itinerary, inclusions, reviews, FAQ)
- **Issues Found**: None
- **Notes**: Full transactional page with Product schema including AggregateRating, Offer, price. Includes TourGallery, timeline itinerary, review grid, sticky booking bar.

---

### 11–15. Tours from [City] Pages

#### 11. Tours from Cancún
- **URL**: `/tours-from/cancun`
- **File**: `src/pages/tours-from/cancun.tsx`
- **Page Type**: Landing
- **Primary Keyword**: chichen itza tours from cancun
- **Secondary Keywords**: cancun to chichen itza, day trip from cancun
- **Meta Title**: `Tours a Chichén Itzá desde Cancún — Mejores Excursiones 2026` (ES) — 60 chars ✅
- **Meta Description**: 160 chars ✅
- **Schema Markup**: FAQPage, BreadcrumbList, TouristDestination
- **Word Count Estimate**: ~3,000+
- **Issues Found**: None
- **Notes**: Most comprehensive departure city page with map embed, comparison table, timeline, FAQ, combo tour cards, sidebar booking form

#### 12. Tours from Playa del Carmen
- **URL**: `/tours-from/playa-del-carmen`
- **File**: `src/pages/tours-from/playa-del-carmen.tsx`
- **Primary Keyword**: chichen itza from playa del carmen
- **Meta Title**: `Tours a Chichén Itzá desde Playa del Carmen — Excursiones Premium 2026` (ES) ✅
- **Schema Markup**: FAQPage, BreadcrumbList, TouristDestination
- **Issues Found**: None

#### 13. Tours from Tulum
- **URL**: `/tours-from/tulum`
- **File**: `src/pages/tours-from/tulum.tsx`
- **Primary Keyword**: chichen itza tours from tulum
- **Meta Title**: `Tours a Chichén Itzá desde Tulum — Excursiones y Paquetes 2026` (ES) ✅
- **Schema Markup**: FAQPage, BreadcrumbList, TouristDestination
- **Issues Found**: None

#### 14. Tours from Riviera Maya
- **URL**: `/tours-from/riviera-maya`
- **File**: `src/pages/tours-from/riviera-maya.tsx`
- **Primary Keyword**: chichen itza tours riviera maya
- **Meta Title**: `Tours a Chichén Itzá desde Riviera Maya — Excursiones Todo Incluido` (ES) ✅
- **Schema Markup**: FAQPage, BreadcrumbList, TouristDestination
- **Notes**: TouristDestination schema missing AggregateRating (unlike Cancún/Playa/Tulum)

#### 15. Tours from Mérida
- **URL**: `/tours-from/merida`
- **File**: `src/pages/tours-from/merida.tsx`
- **Primary Keyword**: chichen itza tours from merida
- **Meta Title**: `Tours a Chichén Itzá desde Mérida — La Ruta Más Corta 2026` (ES) ✅
- **Schema Markup**: FAQPage, BreadcrumbList, TouristDestination
- **Notes**: TouristDestination schema missing AggregateRating (unlike Cancún/Playa/Tulum)

---

### 16–20. Tour Type Pages

#### 16. Small Group Tours
- **URL**: `/tour-types/small-group`
- **File**: `src/pages/tour-types/small-group.tsx`
- **Primary Keyword**: chichen itza small group tours
- **Meta Title**: `Tours en Grupo Pequeño a Chichén Itzá – Experiencias Íntimas 2026` (ES) ✅
- **Schema Markup**: FAQPage, BreadcrumbList
- **Issues Found**: None

#### 17. Luxury Tours
- **URL**: `/tour-types/luxury`
- **File**: `src/pages/tour-types/luxury.tsx`
- **Primary Keyword**: luxury chichen itza tours
- **Meta Title**: `Tours de Lujo a Chichén Itzá – Experiencias VIP Premium 2026` (ES) — 59 chars ✅
- **Schema Markup**: BreadcrumbList only
- **Issues Found**: Missing FAQPage schema ⚠️
- **Notes**: No FAQ section on page

#### 18. Budget Tours
- **URL**: `/tour-types/budget`
- **File**: `src/pages/tour-types/budget.tsx`
- **Primary Keyword**: budget chichen itza tours
- **Meta Title**: `Tours Económicos a Chichén Itzá – Desde $49` (ES) — 45 chars ✅
- **Schema Markup**: BreadcrumbList only
- **Issues Found**: Missing FAQPage schema ⚠️

#### 19. Family Friendly Tours
- **URL**: `/tour-types/family-friendly`
- **File**: `src/pages/tour-types/family-friendly.tsx`
- **Primary Keyword**: family friendly chichen itza tours
- **Meta Title**: `Tours Familiares a Chichén Itzá – Aventuras para Niños` (ES) ✅
- **Schema Markup**: BreadcrumbList only
- **Issues Found**: Missing FAQPage schema ⚠️

#### 20. VIP Skip the Line
- **URL**: `/tour-types/vip-skip-the-line`
- **File**: `src/pages/tour-types/vip-skip-the-line.tsx`
- **Primary Keyword**: vip skip the line chichen itza
- **Meta Title**: `Tours VIP Sin Filas en Chichén Itzá – Acceso Prioritario` (ES) ✅
- **Schema Markup**: BreadcrumbList only
- **Issues Found**: Missing FAQPage schema ⚠️

---

### 21–24. Combo Tour Pages

#### 21. Cenote Ik Kil Combo
- **URL**: `/combo-tours/cenote-ik-kil`
- **File**: `src/pages/combo-tours/cenote-ik-kil.tsx`
- **Primary Keyword**: chichen itza cenote ik kil
- **Meta Title**: `Chichen Itza + Cenote Ik Kil Tour – Swim & Explore` — 51 chars ✅
- **Schema Markup**: BreadcrumbList
- **Issues Found**: Missing TouristTrip or Product schema for transactional page ⚠️

#### 22. Coba Ruins Combo
- **URL**: `/combo-tours/coba-ruins`
- **File**: `src/pages/combo-tours/coba-ruins.tsx`
- **Primary Keyword**: chichen itza coba ruins tour
- **Meta Title**: `Chichen Itza + Coba Ruins Tour – Two Mayan Sites in One Day` — 59 chars ✅
- **Schema Markup**: BreadcrumbList
- **Issues Found**: Missing Product schema ⚠️

#### 23. Isla Mujeres Combo
- **URL**: `/combo-tours/isla-mujeres`
- **File**: `src/pages/combo-tours/isla-mujeres.tsx`
- **Primary Keyword**: chichen itza isla mujeres
- **Meta Title**: `Chichen Itza + Isla Mujeres Multi-Day Tour – Ruins & Beach` — 58 chars ✅
- **Schema Markup**: BreadcrumbList
- **Issues Found**: Missing Product schema ⚠️

#### 24. Multi-Day Yucatan
- **URL**: `/combo-tours/multi-day-yucatan`
- **File**: `src/pages/combo-tours/multi-day-yucatan.tsx`
- **Primary Keyword**: multi day yucatan tour
- **Meta Title**: `Multi-Day Yucatan Tour – Chichen Itza, Uxmal & More` — 52 chars ✅
- **Schema Markup**: BreadcrumbList
- **Issues Found**: Missing Product schema ⚠️

---

### 25. Guide Index

- **URL**: `/guide`
- **File**: `src/pages/guide/index.tsx`
- **Page Type**: Hub
- **Primary Keyword**: chichen itza visitor guide
- **Meta Title**: `Chichen Itza Visitor Guide – Everything You Need to Know` — 56 chars ✅
- **Meta Description**: 157 chars ✅
- **Schema Markup**: BreadcrumbList
- **Internal Links OUT**: All 8 guide child pages
- **CTA Type**: Soft CTA (Read Guide)
- **Issues Found**: None
- **Notes**: Central hub linking all informational content

---

### 26–33. Guide Pages (All 8)

All guide pages share this strong pattern:
- **Schema**: BreadcrumbList + Article + FAQPage (triple schema) ✅
- **ogType**: `article` ✅
- **Layout**: Two-column with sidebar (QuickBookingForm + PopularToursWidget + TrustBadges)
- **Word Count**: ~2,500–3,000 each

#### 26. Best Time to Visit
- **URL**: `/guide/best-time-to-visit`
- **File**: `src/pages/guide/best-time-to-visit.tsx`
- **Primary Keyword**: best time to visit chichen itza
- **Meta Title**: `Best Time to Visit Chichen Itza – Complete 2026 Guide` — 53 chars ✅
- **Meta Description**: 158 chars ✅
- **Notes**: Includes MonthlyChart, Table of Contents, seasonal data visualization

#### 27. What to Bring
- **URL**: `/guide/what-to-bring`
- **File**: `src/pages/guide/what-to-bring.tsx`
- **Primary Keyword**: what to bring to chichen itza
- **Meta Title**: `What to Bring to Chichen Itza – Packing List 2026` — 50 chars ✅
- **Meta Description**: 157 chars ✅

#### 28. History & Facts
- **URL**: `/guide/history-and-facts`
- **File**: `src/pages/guide/history-and-facts.tsx`
- **Primary Keyword**: chichen itza history
- **Meta Title**: `Chichen Itza History & Facts – Complete Guide 2026` — 51 chars ✅
- **Meta Description**: 155 chars ✅
- **Notes**: Includes timeline visualization, major structures, 25 amazing facts

#### 29. How to Get There
- **URL**: `/guide/how-to-get-there`
- **File**: `src/pages/guide/how-to-get-there.tsx`
- **Primary Keyword**: how to get to chichen itza
- **Meta Title**: `How to Get to Chichen Itza – Complete Transport Guide 2026` — 58 chars ✅
- **Meta Description**: 155 chars ✅
- **Notes**: Distance table, comparison table (tour vs drive vs bus), cost breakdown

#### 30. Entrance Fees
- **URL**: `/guide/entrance-fees`
- **File**: `src/pages/guide/entrance-fees.tsx`
- **Primary Keyword**: chichen itza entrance fees
- **Meta Title**: `Chichen Itza Entrance Fees 2026 – Complete Price Guide` — 54 chars ✅
- **Meta Description**: 155 chars ✅
- **Notes**: Price comparison tables, payment methods, tour vs independent cost analysis

#### 31. Photography Tips
- **URL**: `/guide/photography-tips`
- **File**: `src/pages/guide/photography-tips.tsx`
- **Primary Keyword**: chichen itza photography tips
- **Meta Title**: `Chichen Itza Photography Tips – Complete Guide 2026` — 51 chars ✅
- **Meta Description**: 156 chars ✅
- **Notes**: Camera settings, composition techniques, photo spots, equipment rules

#### 32. Dress Code & Rules
- **URL**: `/guide/dress-code-and-rules`
- **File**: `src/pages/guide/dress-code-and-rules.tsx`
- **Primary Keyword**: chichen itza dress code
- **Meta Title**: `Chichen Itza Dress Code & Rules – Visitor Guide 2026` — 52 chars ✅
- **Meta Description**: 155 chars ✅
- **Notes**: Prohibited items matrix, clothing recommendations, etiquette guide. Longest guide page (~740 lines).

#### 33. vs Other Ruins
- **URL**: `/guide/vs-other-ruins`
- **File**: `src/pages/guide/vs-other-ruins.tsx`
- **Primary Keyword**: chichen itza vs tulum
- **Secondary Keywords**: chichen itza vs coba, best mayan ruins, ek balam vs chichen itza
- **Meta Title**: `Chichen Itza vs Tulum, Coba, Ek Balam, Uxmal - 2026 Guide` — 59 chars ✅
- **Meta Description**: 155 chars ✅
- **Notes**: Comparison tables, scoring system, site-by-site analysis

---

### 34–38. Practical / Support Pages

#### 34. FAQ Hub
- **URL**: `/practical/faq`
- **File**: `src/pages/practical/faq.tsx`
- **Primary Keyword**: chichen itza tours faq
- **Meta Title**: `Chichen Itza Tours FAQ – Your Questions Answered` — 48 chars ✅
- **Meta Description**: 155 chars ✅
- **Schema Markup**: FAQPage, BreadcrumbList
- **Notes**: Searchable FAQ hub aggregating all FAQ categories. Includes category filtering.

#### 35. Contact
- **URL**: `/practical/contact`
- **File**: `src/pages/practical/contact.tsx`
- **Primary Keyword**: contact chichen itza tours
- **Meta Title**: `Contact Us – Chichen Itza Tours | Get a Free Quote` — 50 chars ✅
- **Meta Description**: 157 chars ✅
- **Schema Markup**: None ⚠️
- **Notes**: Lead capture form with Zod validation. Should add LocalBusiness schema.

#### 36. Cancellation Policy
- **URL**: `/practical/cancellation-policy`
- **File**: `src/pages/practical/cancellation-policy.tsx`
- **Primary Keyword**: chichen itza cancellation policy
- **Meta Title**: `Cancellation Policy – Free Cancellation | Chichen Itza Tours` — 60 chars ✅
- **Meta Description**: 157 chars ✅
- **Schema Markup**: None ⚠️
- **Notes**: Trust-building page. Could benefit from FAQ schema for policy questions.

#### 37. Testimonials
- **URL**: `/practical/testimonials`
- **File**: `src/pages/practical/testimonials.tsx`
- **Primary Keyword**: chichen itza tour reviews
- **Meta Title**: `Testimonials – 10,000+ Happy Travelers | Chichen Itza Tours` — 60 chars ✅
- **Meta Description**: 155 chars ✅
- **Schema Markup**: LocalBusiness with AggregateRating and Review array ✅
- **Notes**: Filterable reviews by category and city. Strong social proof page.

#### 38. Booking Info
- **URL**: `/practical/booking-info`
- **File**: `src/pages/practical/booking-info.tsx`
- **Primary Keyword**: how to book chichen itza tours
- **Meta Title**: `Booking Information – How to Book | Chichen Itza Tours` — 53 chars ✅
- **Meta Description**: 157 chars ✅
- **Schema Markup**: None ⚠️
- **Notes**: 3-step booking process, payment methods, after-booking info. Could add HowTo schema.

---

### 39–40. Blog Pages

#### 39. Blog Index
- **URL**: `/blog`
- **File**: `src/pages/blog/index.tsx`
- **Primary Keyword**: chichen itza blog
- **Meta Title**: `Chichen Itza Blog – Travel Tips, History & Guides` — 50 chars ✅
- **Meta Description**: 155 chars ✅
- **Schema Markup**: BreadcrumbList

#### 40. Blog Post (Dynamic)
- **URL**: `/blog/:slug`
- **File**: `src/pages/blog/[slug].tsx`
- **Primary Keyword**: [varies by post]
- **Schema Markup**: BreadcrumbList, BlogPosting
- **Notes**: Dynamic meta from blogData. Includes prev/next navigation. BlogPosting schema includes headline, author, datePublished.

---

### 41. 404 Not Found

- **URL**: `*` (catch-all)
- **File**: `src/pages/NotFound.tsx`
- **Schema Markup**: None (correct)
- **Meta Title**: None (uses default HTML title)
- **Issues Found**: Missing `noindex, nofollow` meta tag — should be added via SEOHead ⚠️
- **Notes**: Simple 404 page. Should use SEOHead with `robots: "noindex, nofollow"`.

---

## SEO Health Summary

### 🔴 Critical Issues

1. **404 page missing noindex/nofollow** — `src/pages/NotFound.tsx` has no SEOHead component or robots meta tag. Risk of search engines indexing 404 URLs.
2. **Tours index (`/tours`) missing all JSON-LD schema** — The main tours hub page has no schema markup at all. Should have BreadcrumbList at minimum.

### 🟡 Warnings

| Issue | Affected Pages |
|-------|---------------|
| Missing FAQPage schema | `/tour-types/luxury`, `/tour-types/budget`, `/tour-types/family-friendly`, `/tour-types/vip-skip-the-line` |
| Missing Product/TouristTrip schema on transactional pages | All 4 `/combo-tours/*` pages |
| No JSON-LD schema at all | `/practical/contact`, `/practical/cancellation-policy`, `/practical/booking-info` |
| TouristDestination missing AggregateRating | `/tours-from/riviera-maya`, `/tours-from/merida` |
| Potential thin content risk | `/tour-types/luxury` (125 lines), `/tour-types/family-friendly` (131 lines), `/tour-types/budget` (136 lines) |
| Blog posts missing Article `image` and `mainEntityOfPage` | `/blog/:slug` uses BlogPosting but with minimal fields |

### 🟢 Strengths

| Strength | Details |
|----------|---------|
| **100% unique titles** | All 41 pages have distinct, keyword-optimized title tags |
| **100% meta descriptions** | All pages have unique meta descriptions within 120-160 char range |
| **Full bilingual coverage** | Every page served in EN + ES with proper hreflang alternates |
| **Comprehensive schema on guide pages** | All 8 guides have triple-schema (BreadcrumbList + Article + FAQPage) |
| **Strong Product schema on tour details** | Dynamic tour pages have full Product schema with AggregateRating, Offer, pricing |
| **TouristDestination on departure pages** | 5 city landing pages have location-specific schemas with geo coordinates |
| **Internal linking density** | Tour category pages average 10+ internal links; guide pages have contextual cross-links |
| **Canonical URLs on all pages** | Every page sets canonical via `getPageMeta()` helper |
| **Structured FAQ coverage** | 18 pages include FAQPage schema |
| **Sitemap + robots.txt** | Complete sitemap.xml with hreflang alternates; robots.txt with targeted allow/disallow |

---

## Keyword Map

| Primary Keyword | URL | Search Intent | Page Type |
|----------------|-----|---------------|-----------|
| chichen itza tours | `/` | Transactional | Hub |
| all chichen itza tours | `/tours` | Transactional | Hub |
| chichen itza day tours | `/tours/day-tours` | Transactional | Child |
| chichen itza private tours | `/tours/private-tours` | Transactional | Child |
| chichen itza cenote tours | `/tours/cenote-tours` | Transactional | Child |
| chichen itza sunrise tour | `/tours/sunrise-tours` | Transactional | Child |
| chichen itza ek balam tour | `/tours/ek-balam-tours` | Transactional | Child |
| chichen itza valladolid tour | `/tours/valladolid-tours` | Transactional | Child |
| chichen itza night tour | `/tours/night-tours` | Transactional | Child |
| chichen itza tours from cancun | `/tours-from/cancun` | Transactional | Landing |
| chichen itza from playa del carmen | `/tours-from/playa-del-carmen` | Transactional | Landing |
| chichen itza tours from tulum | `/tours-from/tulum` | Transactional | Landing |
| chichen itza tours riviera maya | `/tours-from/riviera-maya` | Transactional | Landing |
| chichen itza tours from merida | `/tours-from/merida` | Transactional | Landing |
| chichen itza small group tours | `/tour-types/small-group` | Transactional | Child |
| luxury chichen itza tours | `/tour-types/luxury` | Transactional | Child |
| budget chichen itza tours | `/tour-types/budget` | Transactional | Child |
| family friendly chichen itza tours | `/tour-types/family-friendly` | Transactional | Child |
| vip skip the line chichen itza | `/tour-types/vip-skip-the-line` | Transactional | Child |
| chichen itza cenote ik kil | `/combo-tours/cenote-ik-kil` | Transactional | Child |
| chichen itza coba ruins tour | `/combo-tours/coba-ruins` | Transactional | Child |
| chichen itza isla mujeres | `/combo-tours/isla-mujeres` | Transactional | Child |
| multi day yucatan tour | `/combo-tours/multi-day-yucatan` | Transactional | Child |
| chichen itza visitor guide | `/guide` | Informational | Hub |
| best time to visit chichen itza | `/guide/best-time-to-visit` | Informational | Guide |
| what to bring to chichen itza | `/guide/what-to-bring` | Informational | Guide |
| chichen itza history | `/guide/history-and-facts` | Informational | Guide |
| how to get to chichen itza | `/guide/how-to-get-there` | Informational | Guide |
| chichen itza entrance fees | `/guide/entrance-fees` | Informational | Guide |
| chichen itza photography tips | `/guide/photography-tips` | Informational | Guide |
| chichen itza dress code | `/guide/dress-code-and-rules` | Informational | Guide |
| chichen itza vs tulum | `/guide/vs-other-ruins` | Informational | Guide |
| chichen itza tours faq | `/practical/faq` | Informational | Support |
| contact chichen itza tours | `/practical/contact` | Navigational | Support |
| chichen itza cancellation policy | `/practical/cancellation-policy` | Informational | Support |
| chichen itza tour reviews | `/practical/testimonials` | Commercial | Support |
| how to book chichen itza tours | `/practical/booking-info` | Transactional | Support |
| chichen itza blog | `/blog` | Informational | Hub |

---

## Schema Coverage Map

| Schema Type | Pages Using It |
|------------|----------------|
| **TravelAgency** (Organization) | Homepage (`/`) |
| **TouristAttraction** | Homepage (`/`) |
| **Product** | Tour detail pages (`/tours/:slug`) |
| **TouristDestination** | 5 departure city pages (`/tours-from/*`) |
| **Article** | 8 guide pages (`/guide/*`) |
| **FAQPage** | 18 pages (homepage, tour categories, departure cities, guide pages, FAQ hub) |
| **BreadcrumbList** | 30+ pages (all except homepage and 404) |
| **BlogPosting** | Blog post pages (`/blog/:slug`) |
| **LocalBusiness** | Testimonials (`/practical/testimonials`) |
| **WebSite** (SearchAction) | Not implemented ⚠️ — recommended for sitelinks search box |

---

## Cannibalization Risk Flags

| Page A | Page B | Shared Keyword | Risk Level |
|--------|--------|----------------|------------|
| `/tours/private-tours` | `/tour-types/vip-skip-the-line` | private vip chichen itza | **Medium** — Private tours and VIP skip-the-line overlap on VIP/private messaging |
| `/tours/cenote-tours` | `/combo-tours/cenote-ik-kil` | chichen itza cenote tour | **Medium** — Both target cenote + Chichen Itza combo visitors |
| `/tours/private-tours` | `/tour-types/luxury` | luxury private chichen itza | **Low** — Luxury focuses on premium amenities vs Private focuses on exclusivity |
| `/tours/day-tours` | `/tour-types/budget` | affordable chichen itza day tour | **Low** — Budget is price-focused; Day Tours is format-focused |
| `/tours/ek-balam-tours` | `/combo-tours/coba-ruins` | chichen itza + second ruin site | **Low** — Different secondary sites (Ek Balam vs Coba) |

---

## Internal Linking Gaps

**Pages with lowest inbound internal link density (orphan risk):**

| Page | Estimated Inbound Links | Risk |
|------|------------------------|------|
| `/practical/booking-info` | 2-3 (Footer only) | ⚠️ Medium |
| `/practical/cancellation-policy` | 2-3 (Footer only) | ⚠️ Medium |
| `/combo-tours/isla-mujeres` | 3-4 | ⚠️ Low-Medium |
| `/combo-tours/multi-day-yucatan` | 3-4 | ⚠️ Low-Medium |
| `/tour-types/vip-skip-the-line` | 4-5 | Low |
| `/tour-types/budget` | 4-5 | Low |

**Recommendation**: Add contextual links to booking-info and cancellation-policy from tour detail pages (e.g., in the booking form area or FAQ sections). Add combo tour links from relevant departure city pages.

---

## Redirect & URL Notes

- **No `_redirects` or `.htaccess` file found** — site is a client-side SPA with React Router
- **All routing handled by** `src/App.tsx` with explicit route definitions (no file-based routing)
- **Spanish routes use URL-prefix pattern** (`/es/`) with translated slugs (e.g., `/es/tours/excursiones-de-dia`)
- **Route mapping maintained in** `src/lib/i18n/routeMap.ts` — bidirectional EN↔ES mapping
- **No 301 redirects configured** — SPA handles all routes client-side
- **Catch-all `*` route** renders NotFound component

---

## Recommendations Priority List

### P0 (Critical)
1. Add `noindex, nofollow` meta to 404 page via SEOHead component
2. Add BreadcrumbList schema to `/tours` index page

### P1 (High)
3. Add Product/TouristTrip schema to all 4 combo-tours pages
4. Add FAQPage schema to luxury, budget, family-friendly, VIP tour-type pages (add FAQ sections first)
5. Add LocalBusiness schema to contact page
6. Add AggregateRating to Riviera Maya and Mérida TouristDestination schemas

### P2 (Medium)
7. Add WebSite schema with SearchAction to homepage for sitelinks search box
8. Add HowTo schema to booking-info page
9. Enrich BlogPosting schema with `image`, `mainEntityOfPage`, `wordCount` fields
10. Add contextual internal links to booking-info and cancellation-policy from tour pages
11. Add FAQ sections to luxury, budget, family-friendly, and VIP pages to support FAQPage schema

### P3 (Low)
12. Consider adding Review schema to individual tour detail pages (currently only on testimonials page)
13. Add combo-tour links from departure city pages to reduce orphan risk
14. Consider implementing `WebSite` schema with `potentialAction` for Google sitelinks
