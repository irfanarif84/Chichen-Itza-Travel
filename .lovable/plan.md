## Goal

Enrich `/tour-types/luxury` and `/tour-types/small-group` with new content sections, an additional comparison block, and expanded FAQs that deep-link to specific tour SKUs. All additions are bilingual (EN/ES), use existing components/tokens, and feed JSON-LD where applicable.

No visible change to existing sections — only **new sections appended/inserted** between existing ones.

---

## Scope

### A. `src/pages/tour-types/luxury.tsx`

Currently has: Hero → intro paragraph → "Luxury Difference" 4-cards → tours grid → TrustBadges → CTA → ExploreLinks. Missing: comparison table, FAQ section (FAQs are defined inline but never rendered as a UI section — only added to JSON-LD), tour-linked content blocks.

Add the following **new sections**, in order:

1. **"Featured Luxury Experiences" block** (after the intro paragraph section)
   - 3 hand-picked tour callouts linking to specific tour detail pages via `<LocaleLink>`:
     - `/tours/chichen-itza-private-vip-tour` — "Private VIP Hacienda Experience"
     - `/tours/chichen-itza-private-sunrise-tour` — "Private Sunrise Before the Crowds"
     - `/tours/chichen-itza-cenote-saamal-combo-tour` — "Luxury Cenote + Hacienda Combo"
   - Card layout: title, 1-line description, "From $X" price (read from `tours` array by slug), CTA "View tour →".
   - Bilingual labels.

2. **"Luxury vs. Standard Group Tour" comparison block** (after "Luxury Difference" section)
   - Use existing `ComparisonTable` component, `highlightColumn={1}`.
   - Columns: Luxury Private | Small Group | Standard Bus.
   - Rows: Group size, Vehicle, Guide type, Skip-the-line, Gourmet meal, Cenote type, Photo stops, Pickup window, Price range, Best for.
   - Wrapped in a section with `bg-muted/30` and an h2 heading.
   - Add a `TipBox` below comparing this with `/tour-types/small-group` (internal link).

3. **"Luxury Tour FAQs" UI section** (before CTASection)
   - Use existing `FAQSection` component with the `faqs` array already defined inline in the file.
   - Extend the inline `faqs` array from 4 → 6 items with two new questions that deep-link tours in the answer text:
     - "Which luxury tour is best for couples?" → references `chichen-itza-private-sunrise-tour` and `chichen-itza-private-vip-tour`.
     - "Can I combine a luxury Chichen Itza tour with a cenote?" → references `chichen-itza-cenote-saamal-combo-tour`.
   - Bilingual question/answer pairs.
   - The existing FAQ JSON-LD (`createFAQSchema(faqs)`) automatically picks up the 2 new entries.

4. **"Related Tour Categories" enhancement** — keep existing ExploreLinks; no change.

### B. `src/pages/tour-types/small-group.tsx`

Currently has: Hero → intro → comparison + TipBox → benefits 4-cards → tours grid → TrustBadges → FAQ → CTA → ExploreLinks. Already strong; add focused, tour-linked enhancements.

Add the following **new sections**, in order:

1. **"Recommended Small Group Tours" callout block** (after the intro paragraph section, before the existing comparison)
   - 3 curated tour cards linking by slug:
     - `/tours/chichen-itza-day-tour-from-cancun` — "Classic Small Group Day Tour"
     - `/tours/chichen-itza-cenote-ik-kil-combo-tour` — "Small Group + Cenote Ik Kil"
     - `/tours/chichen-itza-valladolid-colonial-tour` — "Small Group + Valladolid"
   - Same card layout as Luxury page block (kept as inline JSX, not a new component).

2. **"Small Group vs. Self-Drive vs. Joining a Bus Tour" secondary comparison** (after the existing comparison section, before the benefits grid)
   - Second `ComparisonTable` with `highlightColumn={1}`.
   - Rows: Cost, Time investment, Stress level, Local expertise, Skip-the-line, Photo time, Group dynamic, Best for.
   - This complements (does not duplicate) the existing Small/Large/Private comparison.

3. **Extend FAQs with 3 tour-linked questions** appended to `smallGroupFAQs`
   - Source: `useLocalizedFAQs().getFAQs("smallGroup")` returns a localized array. Since FAQs come from `src/lib/faqData.ts` / `src/lib/faqData.es.ts`, extend the `smallGroup` set in **both** files with:
     - "Which small group tour is best for first-time visitors?" → links `chichen-itza-day-tour-from-cancun`.
     - "Do you have small group tours that include a cenote?" → links `chichen-itza-cenote-ik-kil-combo-tour`.
     - "Is there a small group tour from Playa del Carmen?" → links `chichen-itza-budget-tour-playa-del-carmen`.
   - The existing `FAQSection` and `createFAQSchema` will auto-include them.

---

## Technical Details

### Files to edit
- `src/pages/tour-types/luxury.tsx` — add 3 new sections; extend inline `faqs` array; render `<FAQSection>` (new import).
- `src/pages/tour-types/small-group.tsx` — add 2 new sections.
- `src/lib/faqData.ts` — append 3 EN entries to the `smallGroup` array.
- `src/lib/faqData.es.ts` — append 3 ES entries to the `smallGroup` array (parity).

### Patterns used (no new components)
- `LocaleLink` for all internal links (auto-prefixes `/es/`).
- `ComparisonTable` from `@/components/guide/ComparisonTable`.
- `TipBox` from `@/components/guide/TipBox`.
- `FAQSection` from `@/components/common/FAQ`.
- Tour lookup via `tours.find(t => t.slug === "...")` to read live `price.adult` and `shortTitle` (avoids hardcoded prices).
- Bilingual content via the existing `isEs ? {...} : {...}` `c` object pattern in each page.

### SEO
- New FAQ entries flow into the existing `createFAQSchema` JSON-LD on both pages.
- Internal link density increases (5+ new contextual links per page) — supports the "internal linking architecture" memory.
- `ItemList` schema already covers all luxury/small-group tours; new callout blocks reinforce on-page topical relevance without changing the schema.
- No URL, canonical, hreflang, or H1 changes.

### Out of scope
- No changes to visible existing sections, design tokens, layout, hero, or routing.
- No new components in `/components/`.
- No changes to other tour-type pages (budget, family-friendly, vip-skip-the-line) — can be a follow-up.
