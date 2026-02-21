

# Rebuild Best Time to Visit Guide Page

## Overview

The current page (381 lines) is functional but the user wants a much more comprehensive version (~2,500+ words) with a two-column sidebar layout, richer content sections, and additional components. This requires creating missing components and significantly expanding the page content.

## Compatibility Analysis

The user's template references several things that don't exist in the codebase:
- `generateGuideMetadata`, `generateArticleSchema`, `generateBreadcrumbSchema` (from seo.ts) -- these don't exist; the codebase uses `getPageMeta`, `createBreadcrumbSchema`, and `guideSchemas` from schema.ts
- `MonthlyChart` component -- doesn't exist
- `ImageGallery` common component -- doesn't exist (only inline in tour detail page)
- `generateFAQPageSchema` -- exists as `createFAQSchema` in seo.ts

The plan adapts the template to use the existing infrastructure rather than introducing breaking changes.

## Files to Create

### 1. `src/components/guide/MonthlyChart.tsx` (NEW)

A visual bar/table chart showing temperature, rainfall, crowds, and pricing by month. Will use Tailwind for styling (no charting library needed). Accepts monthly data as props.

### 2. `src/components/common/ImageGallery.tsx` (NEW)

A simple responsive image gallery component with optional lightbox behavior. Accepts an array of images with alt texts.

## Files to Modify

### 3. `src/pages/guide/best-time-to-visit.tsx` (MAJOR REWRITE)

Complete rebuild with:
- **Two-column layout**: Main content (left) + sticky sidebar (right) with QuickBookingForm, TrustBadges, PopularToursWidget, and guide links
- **Table of contents** with jump links (anchor IDs on each section)
- **Quick answer box** at the top
- **Expanded month-by-month breakdown** split into Dry Season (Nov-Apr) and Rainy Season (May-Oct) with badges like "BEST OVERALL", "BEST VALUE", "LEAST CROWDED"
- **Best time of day section** with 4 detailed cards (Early Morning, Mid-Morning, Midday, Late Afternoon) with pros/cons
- **MonthlyChart** integration for visual weather data
- **Crowd avoidance tips** section
- **Special events** section (equinoxes, night show)
- **Peak season tips** and **Low season tips** sections
- **Dedicated FAQ** with 8 timing-specific questions and FAQ schema markup
- **Final CTA** with tour links

Uses existing imports: `getPageMeta`, `createBreadcrumbSchema`, `createFAQSchema`, `guideSchemas`, `SEOHead`, `Breadcrumbs`, `FAQSection`, `CTASection`, `TipBox`, `InfoBox`, `QuickBookingForm`, `TrustBadges`, `PopularToursWidget`

SEO enhancements: Adds `createFAQSchema` to the jsonLd array for the page-specific FAQs.

## Technical Details

- No changes to `seo.ts`, `schema.ts`, or any shared utilities
- No new dependencies required
- MonthlyChart uses pure Tailwind CSS for the visual bars (colored based on temperature/rain ranges)
- ImageGallery is a simple grid with optional click-to-expand using Radix Dialog
- All sections get `id` attributes for table-of-contents jump links
- Page grows from ~381 lines to ~800+ lines with 2,500+ words of SEO content
- Internal linking: 15+ links to other guide pages, tour pages, and location pages

