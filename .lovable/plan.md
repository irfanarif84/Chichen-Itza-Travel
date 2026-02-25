

# Spanish Language (i18n) Implementation Plan — URL Prefix `/es/`

## Scope

Full bilingual site: every page gets a Spanish equivalent under `/es/`. Google will index both language versions independently, maximizing organic reach for Spanish-speaking travelers searching terms like "tours a Chichen Itzá desde Cancún."

---

## Architecture

```text
Current (English)          Spanish equivalent
/                          /es/
/tours                     /es/tours
/tours/day-tours           /es/tours/excursiones-de-dia
/tours/:slug               /es/tours/:slug
/tours-from/cancun         /es/tours-desde/cancun
/guide/best-time-to-visit  /es/guia/mejor-epoca-para-visitar
/practical/faq             /es/practico/preguntas-frecuentes
/blog                      /es/blog
/blog/:slug                /es/blog/:slug
...etc for all 45+ routes
```

---

## Implementation Steps

### 1. Translation infrastructure

**New files:**
- `src/lib/i18n/context.tsx` — React context providing current locale (`en` | `es`) and a helper to build localized paths
- `src/lib/i18n/translations/en.ts` — All English UI strings (nav labels, buttons, form labels, trust badges, footer text)
- `src/lib/i18n/translations/es.ts` — Spanish equivalents
- `src/lib/i18n/useLocale.ts` — Hook that reads locale from the URL prefix and provides `t()` translation function

The locale is derived from the URL path (starts with `/es/` = Spanish, otherwise English). No cookies or localStorage needed — this keeps every language version fully crawlable.

### 2. Translated content data files

**New files:**
- `src/lib/tourData.es.ts` — Spanish tour titles, descriptions, itineraries, inclusions
- `src/lib/faqData.es.ts` — Spanish FAQ questions and answers
- `src/lib/locationData.es.ts` — Spanish location descriptions
- `src/lib/reviewsData.es.ts` — Spanish review translations
- `src/lib/blogData.es.ts` — Spanish blog posts

Each mirrors the English data file structure exactly, using the same IDs/slugs so components can swap data based on locale.

### 3. SEO enhancements

**Modified files:**
- `src/types/seo.ts` — Add `locale` and `alternateUrls` fields to `PageMeta`
- `src/components/common/SEOHead.tsx` — Inject `hreflang` alternate links on every page:
  ```html
  <link rel="alternate" hreflang="en" href="https://chichenitzatours.com/tours" />
  <link rel="alternate" hreflang="es" href="https://chichenitzatours.com/es/tours" />
  <link rel="alternate" hreflang="x-default" href="https://chichenitzatours.com/tours" />
  ```
  Also set `<html lang="es">` via Helmet for Spanish pages and `og:locale` to `es_MX`.
- `src/lib/seo.ts` — Update `getPageMeta` to accept locale and auto-generate canonical + alternate URLs
- `src/lib/schema.ts` — Add `inLanguage: "es"` to Spanish page schemas

### 4. Routing

**Modified: `src/App.tsx`**

Add a locale-aware layout wrapper:

```text
<Route path="/es/*" element={<LocaleProvider locale="es"><Layout /></LocaleProvider>}>
  <Route index element={<Index />} />
  <Route path="tours" element={<ToursPage />} />
  <Route path="tours/:slug" element={<TourDetailPage />} />
  <Route path="tours-desde/cancun" element={<CancunToursPage />} />
  <Route path="guia/mejor-epoca-para-visitar" element={<BestTimeToVisitPage />} />
  ... all 45+ Spanish routes
</Route>
```

English routes remain unchanged. The `LocaleProvider` wrapper sets the context so all child components read Spanish data.

### 5. Component updates

**Modified files (read locale from context, swap content):**
- `src/components/layout/Header.tsx` — Add language switcher (EN | ES flag toggle), translate nav labels
- `src/components/layout/Footer.tsx` — Translate footer links and text
- `src/components/layout/Breadcrumbs.tsx` — Translate breadcrumb labels based on locale
- `src/components/layout/StickyBookingBar.tsx` — Translate CTA text
- `src/components/features/booking/QuickBookingForm.tsx` — Translate form labels and button
- `src/components/features/booking/TrustBadges.tsx` — Translate badge text
- `src/components/features/home/Hero.tsx` — Translate headline, subheadline, CTA
- `src/components/features/home/WhyChooseUs.tsx` — Translate benefit titles and descriptions
- `src/components/features/home/PopularTours.tsx` — Read Spanish tour data
- `src/components/features/tours/TourCard.tsx` — Translate "from", "per person", duration labels
- `src/components/common/FAQ.tsx` — Read Spanish FAQ data
- All 8 guide pages — Swap body content to Spanish translations
- All 5 tour-from pages — Swap descriptions and headings
- All 5 tour-type pages — Swap content
- All 4 combo-tour pages — Swap content
- All practical pages — Swap content

### 6. Language switcher component

**New: `src/components/layout/LanguageSwitcher.tsx`**

A simple toggle in the header that links to the equivalent page in the other language. Uses a route mapping to convert `/guide/best-time-to-visit` ↔ `/es/guia/mejor-epoca-para-visitar`.

### 7. Sitemap and robots.txt

**Modified: `public/sitemap.xml`**
- Add all `/es/` URLs (doubling the sitemap from ~50 to ~100 entries)
- Add `xhtml:link` alternate attributes per Google's multilingual sitemap spec

**Modified: `public/robots.txt`**
- No changes needed (both `/` and `/es/` are allowed)

### 8. index.html

- Add `<link rel="alternate" hreflang="es" href="https://chichenitzatours.com/es/" />` to the static HTML head

---

## File Count Summary

| Category | New files | Modified files |
|----------|-----------|----------------|
| i18n infrastructure | 4 | 0 |
| Translated data | 5 | 0 |
| SEO/schema | 0 | 4 |
| Routing | 0 | 1 |
| Components | 1 | ~20 |
| Static files | 0 | 2 |
| **Total** | **10** | **~27** |

---

## Important Consideration

This is a very large change — approximately 37 files touched and thousands of lines of Spanish content to write. I recommend implementing it in phases:

1. **Phase 1**: Infrastructure (i18n context, locale provider, routing, SEO hreflang, language switcher, sitemap) + Homepage in Spanish
2. **Phase 2**: All tour pages and tour-from pages in Spanish
3. **Phase 3**: All guide pages in Spanish
4. **Phase 4**: Blog, combo-tours, practical pages, and tour-type pages in Spanish

Each phase can be deployed and indexed independently. Shall I begin with Phase 1?

