

# SEO Audit Report - Chichen Itza Tours Website

## Executive Summary

The website has a strong content foundation with 8 comprehensive guide pages (~24,000 words), well-structured tour data, and proper use of react-helmet-async for meta tags. However, there are several critical SEO gaps: missing sitemap.xml, incomplete robots.txt, missing Organization/LocalBusiness schema on the homepage, missing OG image tags across all pages, no `og:type` or Twitter Card meta tags in SEOHead, and the vs-other-ruins page is missing FAQPage schema. The silo architecture and internal linking are well-implemented through the Header mega-menu and Footer. Overall SEO Health Score: **72/100**.

## SEO Score Breakdown

| Category | Score | Notes |
|----------|-------|-------|
| Meta Tags | 75/100 | Present on all pages, but missing og:type, twitter tags, og:image |
| Schema Markup | 70/100 | Good FAQ + Breadcrumb coverage, missing Organization on homepage, missing Article schemas on 6 of 8 guides |
| Content Quality | 90/100 | Excellent depth, keyword targeting, and freshness signals |
| Internal Linking | 85/100 | Strong silo via Header/Footer, good cross-links in content |
| Technical SEO | 55/100 | No sitemap.xml, weak robots.txt, no prerender/SSR strategy |
| Image SEO | 80/100 | Alt text present, WebP format, eager loading on heroes |
| Mobile | 85/100 | Sticky booking bar, responsive layouts, mobile nav |

## Top 5 Critical Issues

### 1. No sitemap.xml (Impact: HIGH)
No XML sitemap exists. Search engines rely on sitemaps to discover all 40+ pages. Without it, deeper pages (combo tours, tour-types, blog posts) may never get indexed.

**Fix:** Create `public/sitemap.xml` with all routes from App.tsx.

### 2. Homepage Missing Organization + TouristAttraction Schema (Impact: HIGH)
The homepage only has FAQPage schema. The `organizationSchema` and `chichenItzaAttractionSchema` from `src/lib/schema.ts` are defined but never used on any page.

**Fix:** Add both schemas to the homepage's `jsonLd` array in `src/pages/Index.tsx` (line 21).

### 3. SEOHead Missing Critical OG/Twitter Tags (Impact: HIGH)
`src/components/common/SEOHead.tsx` is missing: `og:type`, `og:url`, `og:site_name`, `twitter:card`, `twitter:title`, `twitter:description`. These are essential for social sharing and can impact click-through rates from social platforms.

**Fix:** Enhance SEOHead component to include all standard OG and Twitter Card meta tags.

### 4. Guide Pages Missing Article Schema (Impact: MEDIUM-HIGH)
Only 3 of 8 guide pages have Article schema (best-time-to-visit, what-to-bring, vs-other-ruins use `guideSchemas` from schema.ts). The other 5 guides (how-to-get-there, photography-tips, entrance-fees, history-and-facts, dress-code-and-rules) only have BreadcrumbList + FAQPage schemas but no Article schema, which means Google won't recognize them as articles in search results.

**Fix:** Add Article schema entries in `src/lib/schema.ts` for the missing 5 guides, then import and include them in each page's `jsonLd` array.

### 5. robots.txt Missing Sitemap Directive (Impact: MEDIUM)
Current robots.txt has no `Sitemap:` directive and no `Disallow` rules. It should reference the sitemap and block non-content paths.

**Fix:** Update `public/robots.txt` with Sitemap URL and Disallow rules for `/api/`, query strings, etc.

## Top 5 Quick Wins (High Impact, Low Effort)

1. **Add Organization + TouristAttraction schema to homepage** - 10 minutes. Import existing schemas from schema.ts into Index.tsx jsonLd array.

2. **Add `og:type`, `og:url`, Twitter Card tags to SEOHead** - 15 minutes. Single file edit to SEOHead.tsx adding 6 meta tags.

3. **Create sitemap.xml** - 20 minutes. Static file listing all 40+ URLs with priorities and change frequencies.

4. **Update robots.txt** - 5 minutes. Add Sitemap directive and basic Disallow rules.

5. **Add Article schema to 5 missing guide pages** - 20 minutes. Add entries to schema.ts guideSchemas object, then import in each guide page's jsonLd.

## Detailed Findings

### A. Technical SEO

#### Meta Tags Analysis (Per Page)

| Page | Title Length | Desc Length | Canonical | Schema Types | Issues |
|------|-------------|-------------|-----------|-------------|--------|
| Homepage (/) | 56 chars OK | 156 chars OK | Yes | FAQPage only | Missing Org + Attraction schema |
| /tours | 50 chars OK | 152 chars OK | Yes | None | Missing BreadcrumbList schema |
| /guide/best-time-to-visit | 54 chars OK | 155 chars OK | Yes | Breadcrumb, Article, FAQ | Good - complete |
| /guide/what-to-bring | (from schema.ts) | OK | Yes | Breadcrumb, Article, FAQ | Good - uses guideSchemas |
| /guide/history-and-facts | 50 chars OK | 156 chars OK | Yes | Breadcrumb, FAQ | Missing Article schema |
| /guide/how-to-get-there | 56 chars OK | 155 chars OK | Yes | Breadcrumb, FAQ | Missing Article schema |
| /guide/entrance-fees | 52 chars OK | 152 chars OK | Yes | Breadcrumb, FAQ | Missing Article schema |
| /guide/photography-tips | 52 chars OK | 157 chars OK | Yes | Breadcrumb, FAQ | Missing Article schema |
| /guide/dress-code-and-rules | 52 chars OK | 155 chars OK | Yes | Breadcrumb, FAQ | Missing Article schema |
| /guide/vs-other-ruins | 57 chars OK | 155 chars OK | Yes | Breadcrumb, Article | Missing FAQPage schema |
| /tours-from/cancun | Dynamic from data | OK | Yes | FAQ, Breadcrumb, Location | Good - complete |
| /tours/:slug (detail) | Dynamic from data | OK | Implied | Product, FAQ, Breadcrumb, ImageGallery | Good - comprehensive |

#### vs-other-ruins Specific Issue
This page has comparisonFAQs defined but does NOT include a `createFAQSchema(comparisonFAQs)` in its jsonLd array (line 19-27 of vs-other-ruins.tsx). It only uses `guideSchemas["vs-other-ruins"]` (Article) and BreadcrumbList.

#### SEOHead Component Gaps
Current SEOHead (src/components/common/SEOHead.tsx) outputs:
- title, meta description, canonical, og:title, og:description, og:image, JSON-LD

Missing:
- `og:type` (should be "website" for homepage, "article" for guides)
- `og:url` (should match canonical)
- `og:site_name` ("Chichen Itza Tours")
- `twitter:card` ("summary_large_image")
- `twitter:title`, `twitter:description`
- `meta robots` tag for controlling indexing per-page

### B. Schema Markup Review

**Working correctly:**
- BreadcrumbList on all guide pages and location pages
- FAQPage on 7 of 8 guide pages + homepage + location pages
- Product schema on tour detail pages (`/tours/:slug`)
- TouristDestination schemas for location pages (defined in schema.ts, used in cancun.tsx etc.)
- ImageObject/ImageGallery on tour detail pages

**Defined but unused:**
- `organizationSchema` in schema.ts - never imported/used on any page
- `chichenItzaAttractionSchema` in schema.ts - never imported/used
- `guideSchemas["history-and-facts"]` - not defined in schema.ts (only best-time-to-visit, what-to-bring, and vs-other-ruins exist)

**Missing schemas:**
- Organization/LocalBusiness on homepage (critical for Google Business Profile)
- Article schema on 5 guide pages
- FAQPage schema on vs-other-ruins page
- guideSchemas entries for: history-and-facts, how-to-get-there, entrance-fees, photography-tips, dress-code-and-rules

### C. Internal Linking Report

**Strengths:**
- Header mega-menu links to all 40+ pages across tours, tour-types, combos, departures, and guides
- Footer replicates all links in organized columns
- Guide pages cross-link to each other via sidebar "More Planning Guides"
- Tour detail pages link to related tours
- Location pages link to combo tours and guides

**Gaps:**
- /tours (All Tours page) has no internal links beyond tour cards - should link to guide pages, departure pages
- Homepage has no visible text links to guide pages (only via nav)
- Blog pages may be orphaned (depends on blog content linking back)
- No "/guide" index page exists (breadcrumbs link to /guide but that route doesn't exist in App.tsx - this is a broken link)

### D. Broken Link: /guide Route
All guide page breadcrumbs include `{ label: "Guide", href: "/guide" }` but there is NO route for `/guide` in App.tsx. This means clicking "Guide" in breadcrumbs leads to a 404 page. This is a critical UX and SEO issue.

### E. SPA/SSR Limitation
This is a React SPA (client-side rendered). Search engines may have difficulty indexing all content since there's no server-side rendering. Google's JavaScript rendering works but can be delayed. This is the biggest structural SEO limitation.

**Mitigation (within Lovable constraints):**
- Ensure all critical content is in the initial HTML (react-helmet-async helps with meta tags)
- Avoid lazy-loading above-the-fold content
- Keep JavaScript bundle size small for faster rendering

## Priority Action Items

### Must Fix Now (Critical)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | Create sitemap.xml | High | 30 min |
| 2 | Add Organization + Attraction schema to homepage | High | 10 min |
| 3 | Enhance SEOHead with og:type, og:url, twitter tags | High | 15 min |
| 4 | Fix broken /guide breadcrumb link (create guide index page OR remove href) | High | 20 min |
| 5 | Update robots.txt with Sitemap directive | High | 5 min |

### Should Fix Soon (Important)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 6 | Add Article schema to 5 missing guide pages | Medium | 30 min |
| 7 | Add FAQPage schema to vs-other-ruins page | Medium | 5 min |
| 8 | Add BreadcrumbList schema to /tours index page | Medium | 10 min |
| 9 | Add og:image to all pages (default hero image fallback) | Medium | 15 min |
| 10 | Add internal links to /tours index page (to guides, departures) | Medium | 15 min |

### Nice to Have (Optimization)

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 11 | Create SEO validation utility (seoValidator.ts) | Low | 1-2 hrs |
| 12 | Add hreflang tags for potential Spanish content | Low | 30 min |
| 13 | Add "last modified" structured data to all pages | Low | 30 min |
| 14 | Add WebPage schema type to non-article pages | Low | 20 min |
| 15 | Create a /guide index page with links to all 8 guides | Low-Med | 30 min |

## Implementation Details

### 1. Create public/sitemap.xml
Static XML file covering all 40+ routes with priority weighting:
- Homepage + /tours: priority 1.0
- Tour detail pages + location pages: priority 0.9
- Guide pages: priority 0.8
- Tour-type + combo pages: priority 0.7
- Practical + blog pages: priority 0.6

### 2. Update public/robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /*?*

Sitemap: https://chichenitzatours.com/sitemap.xml
```

### 3. Enhance SEOHead.tsx
Add to the Helmet output:
- `og:type` (pass as prop, default "website")
- `og:url` (use canonical value)
- `og:site_name` ("Chichen Itza Tours")
- `twitter:card` ("summary_large_image")
- `twitter:title` / `twitter:description` (reuse og values)
- Default og:image fallback when none provided

### 4. Homepage Schema Fix (Index.tsx)
Change line 21 from `jsonLd: createFAQSchema(homepageFAQs)` to:
```typescript
jsonLd: [
  organizationSchema,
  chichenItzaAttractionSchema,
  createFAQSchema(homepageFAQs),
]
```

### 5. Add Missing Article Schemas (schema.ts)
Add 5 new entries to the `guideSchemas` object for: history-and-facts, how-to-get-there, entrance-fees, photography-tips, dress-code-and-rules. Then import `guideSchemas` in each page and add to jsonLd array.

### 6. Fix vs-other-ruins Schema
Add `createFAQSchema(comparisonFAQs)` to the jsonLd array in vs-other-ruins.tsx.

### 7. Create /guide Index Page
New thin page at `src/pages/guide/index.tsx` that lists all 8 guide articles with thumbnails, excerpts, and links. Add route `/guide` to App.tsx.

### 8. Create seoValidator.ts Utility
A development-time tool that validates:
- Title length (50-60 chars)
- Description length (150-160 chars)
- H1 presence
- Canonical URL presence
- Schema markup presence
- Internal link count
- Image alt text coverage

This would be a helper function used during development, not shipped to production.

