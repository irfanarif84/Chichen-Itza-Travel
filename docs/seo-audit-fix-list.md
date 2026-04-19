# SEO Audit — Prioritized Fix List

_Generated: 2026-04-19. Audited 41 page files in `src/pages/`._

## Methodology

A static analyzer scanned every `.tsx` page for: `<SEOHead>` usage, JSON-LD schemas (FAQ, Breadcrumb, Product, TouristTrip, Article, Organization, TouristAttraction, TouristDestination, WebSite, AggregateRating, Review), `<Breadcrumbs>` component, `<h1>` count, image count + alt coverage, internal `<Link>` / `<LocaleLink>` count, and approximate word count. Note: many pages render images via children components (Hero, TourGallery, PopularTours), so in-file `<img>` count is a lower bound — actual rendered alt coverage is verified in the linked feature components.

**Headline finding:** Schema, H1, and breadcrumb hygiene is excellent across the silo. The remaining gaps cluster in three areas — (1) missing `Product`/`Service` schema on category and tour-type pages, (2) thin transactional pages in `/practical/`, and (3) sparse internal linking on a handful of guides and the homepage.

---

## P1 — Critical (fix this sprint)

| # | Route | Issue | Recommended fix |
|---|---|---|---|
| 1 | `/tour-types/small-group` | No `ItemList`/`Service` schema — only FAQ + Breadcrumb. Same gap as the other 4 tour-type pages but never patched in the previous batch. | Add `ItemList` of matching tours (or `Service` schema) so the category page is eligible for rich results, matching the level of `/tours-from/*` pages. |
| 2 | `/tour-types/luxury`, `/budget`, `/family-friendly`, `/vip-skip-the-line` | FAQ + Breadcrumb only. Missing `ItemList` of recommended tours like `/tours-from/cancun` has. | Add `ItemList` schema referencing the curated tours displayed on each page. |
| 3 | `/tours` (index) | Has Breadcrumb only. No `ItemList` enumerating the 7 tour categories or the popular tours displayed. | Add `ItemList` (CollectionPage) schema listing the tour categories — primary navigational hub deserves it. |
| 4 | `/practical/contact` | No JSON-LD at all. Missing `ContactPage` + `LocalBusiness` schema; high-intent page. | Add `ContactPage` schema with `telephone`, `email`, `address`, `openingHours`, plus `Organization` reference. |
| 5 | `/practical/booking-info`, `/practical/cancellation-policy` | No JSON-LD. Both are policy pages users and Google care about. | Add `WebPage` + `BreadcrumbList`; for cancellation, also `MerchantReturnPolicy` (or inline FAQ schema for the policy Q&A). |
| 6 | `/practical/faq` | Only 431 words and 3 internal links — under the 500-word floor and below the 5-link minimum from project rules. | Expand to 800+ words by grouping FAQs into themed sections with intro paragraphs; add links to `/guide/*` and top tour pages. |
| 7 | `/practical/testimonials` | 263 words, 1 internal link. Critically thin and orphaned. | Add intro/outro copy, "Tours mentioned in reviews" section linking to 6+ tour pages, breadcrumb. |
| 8 | `/` (Homepage) | 0 in-file links, 0 in-file images (all in child components — verify). The page itself has no breadcrumb (intentional) but `<Hero>` and `<PopularTours>` must carry the alt text and links. | Audit `Hero.tsx`, `PopularTours.tsx`, `DepartureSection.tsx` to confirm every `<img>` has descriptive alt and at least 10 internal links exist across the composed sections. |

---

## P2 — High (next sprint)

| # | Route | Issue | Recommended fix |
|---|---|---|---|
| 9 | `/tours/[slug]` | No `<Breadcrumbs>` component rendered (schema is present but visual breadcrumb is missing). UX + crawl-path gap. | Render `<Breadcrumbs>` above the tour hero. |
| 10 | `/tours/[slug]` | No `Review` schema even though `reviewsData.ts` ties reviews to each tour. Currently only `aggregateRating` (inside Product). | Inject up to 5 individual `Review` items per tour for star-snippet eligibility. |
| 11 | `/guide/history-and-facts` | Only 2 internal links in 1,061 words. Below the 5-link guide minimum. | Add contextual links to `/guide/best-time-to-visit`, `/guide/vs-other-ruins`, `/tours/sunrise-tours`, `/combo-tours/coba-ruins`, plus a tours-from CTA. |
| 12 | `/guide/photography-tips` | Only 2 internal links in 876 words. | Add links to `/guide/best-time-to-visit` (golden hour), `/tours/sunrise-tours`, `/tours/private-tours`, `/guide/dress-code-and-rules`. |
| 13 | `/guide/what-to-bring` | 3 internal links in 1,087 words. | Cross-link to `/guide/dress-code-and-rules`, `/guide/entrance-fees`, `/guide/best-time-to-visit`, plus 2 tour CTAs. |
| 14 | `/guide` (hub) | Only 2 internal links detected — likely linking to guide cards but missing tour/combo cross-links. | Add a "Ready to book?" section linking to top 4 tours and 2 tours-from pages. |
| 15 | `/blog` and `/blog/[slug]` | No alt-text count detectable in-file (images come from `blogData`). | Verify every entry in `blogData.ts` / `blogData.es.ts` has `coverImageAlt`; add `Article` schema to `[slug]`. |
| 16 | `/guide/vs-other-ruins` | 0 hero image detected in-file (1,370 words, comparison content). | Add a hero image with descriptive alt; image-rich comparison pages rank better. |
| 17 | All `/tour-types/*` pages | 0 in-file `<img>` — verify the embedded `TourCard` / `PopularToursWidget` components emit descriptive alt for category context, not generic tour alt. | Audit and, if generic, pass a category-aware alt prop. |
| 18 | `/practical/contact`, `/booking-info`, `/cancellation-policy` | 1–2 internal links each. | Each should link to top 3 tours, top 3 guides, and `/practical/faq`. |

---

## P3 — Polish (backlog)

| # | Route | Issue | Recommended fix |
|---|---|---|---|
| 19 | All `/combo-tours/*` (4 pages) | 5 internal links each — meets minimum but could go deeper. | Add "Compare with" cross-links between the 4 combo tours plus links to relevant `/guide/*` articles. |
| 20 | `/tours/day-tours`, `/night-tours` | 5 internal links each. | Bring to 8+ via cross-links to `/tours-from/*` and contextual guides. |
| 21 | `/tours/[slug]` | 7 internal links — fine, but `RelatedTours` could surface 4 instead of current count. | Verify `RelatedTours` renders ≥4 items and links to `/tours-from/*` based on tour location. |
| 22 | All `/guide/*` Article schemas | `image` field hard-coded to `${BASE_URL}/images/guides/${slug}.jpg` in `schema.ts:257`, but actual hero images live elsewhere. | Pass the real hero image URL into `createGuideArticleSchema` so Google can fetch the correct asset. |
| 23 | `organizationSchema` (`schema.ts`) | Hard-coded `aggregateRating: 4.9 / 3247 reviews` and address. | Source from `reviewsData.ts` aggregate, and confirm the postal address is the real business address (not placeholder). |
| 24 | `WebSite` schema `SearchAction` | Points at `/search?q=...` but no `/search` route exists in `App.tsx`. | Either build a search results page or remove the `potentialAction` to avoid a Google warning. |
| 25 | `Product` schema (`generateTourProductSchema`) | `priceValidUntil: "2026-12-31"` is hard-coded. Will silently expire. | Compute dynamically (e.g., `new Date().getFullYear() + 1`-12-31). |
| 26 | All pages | No `lastmod` automation — `sitemap.xml` is manual per governance rule. | Add a CI script to bump `lastmod` for files changed in each commit (does not violate manual-registration rule for new routes). |
| 27 | `NotFound.tsx` | Has `noindex` ✅ but no `<SEOHead>` — title falls back to whatever was previously set. | Wrap with `<SEOHead>` so title becomes "404 — Page Not Found · Chichen Itza Tours" cleanly. |

---

## Schema coverage matrix

| Schema | Pages with it | Pages missing where expected |
|---|---|---|
| WebSite + SearchAction | `/` | — (only homepage needed) |
| Organization / TravelAgency | `/` | — |
| TouristAttraction | `/`, `/tours/[slug]` | — |
| BreadcrumbList | 38 of 41 pages ✅ | `/`, `/NotFound` (intentional) |
| FAQPage | 22 pages ✅ | — |
| Article | All 8 `/guide/*` ✅ | — |
| Product | `/tours/[slug]` | — |
| TouristTrip | All 4 `/combo-tours/*` ✅ | — |
| TouristDestination | All 5 `/tours-from/*` ✅ | — |
| ItemList / CollectionPage | **none** | `/tours`, all `/tour-types/*`, all `/tours-from/*` (would be additive) |
| Review (individual) | `/practical/testimonials` | `/tours/[slug]` |
| AggregateRating | `/`, `/practical/testimonials`, `/tours/[slug]`, all `/tours-from/*` | — |
| ContactPage / LocalBusiness | **none** | `/practical/contact` |

---

## Thin-content watchlist (<500 words in-file)

| Route | Words | Note |
|---|---|---|
| `/practical/testimonials` | 263 | **P1** — expand |
| `/practical/booking-info` | 384 | **P1** — expand |
| `/practical/cancellation-policy` | 388 | **P1** — expand |
| `/guide` | 389 | Hub page; OK if cards add visible content |
| `/practical/faq` | 431 | **P1** |
| `/practical/contact` | 487 | **P1** |
| `/`, `/blog`, `/blog/[slug]`, `/tours` | low | Composed of components — not actually thin |

---

## Internal-link density (in-file `<Link>`/`<LocaleLink>` count)

Project rule: **5–10 minimum** per content page.

❌ Below threshold (excluding hub/composed pages):
- `/guide/history-and-facts` — 2
- `/guide/photography-tips` — 2
- `/guide` — 2
- `/guide/what-to-bring` — 3
- `/practical/contact` — 1
- `/practical/cancellation-policy` — 1
- `/practical/testimonials` — 1
- `/practical/faq` — 3
- All `/tour-types/*` — 3–5

✅ Strong (10+): `/tours-from/*` (13–17), `/guide/dress-code-and-rules` (17), `/guide/entrance-fees` (14), `/guide/vs-other-ruins` (14), `/guide/how-to-get-there` (10), `/tours` (10).

---

## Image alt-text coverage

In-file images: every page that has an `<img>` also has an `alt` attribute (1/1 coverage). **No alt gaps detected at the page level.** Verification still needed for child components: `Hero`, `TourCard`, `PopularTours`, `DepartureSection`, `TourGallery`, `BlogCard`, `ReviewCard`. Recommend a follow-up grep across `src/components/features/**/*.tsx` to confirm every `<img>` has a non-empty `alt`.

---

## Recommended execution order

1. **P1 #1–#3** — add `ItemList` schema to category & tour-type pages (1 helper in `schema.ts`, applied to 6 pages).
2. **P1 #4–#7** — add JSON-LD + content expansion to the 5 `/practical/*` pages.
3. **P1 #8** + **P2 #15, #17** — audit child components for alt-text and link density.
4. **P2 #9–#14, #16, #18** — internal-link buildout on guide pages and breadcrumbs on tour-detail.
5. **P3** — polish, dynamic dates, sitemap automation.
