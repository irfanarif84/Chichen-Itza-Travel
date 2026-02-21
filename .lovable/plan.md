

# Expand Clothing, Photography, and Special Considerations Sections

## Overview

The current `what-to-bring.tsx` (916 lines) already has functional Clothing (lines 510-592), Photography (594-643), Special Considerations (646-728), and Day-of (731-791) sections, but they use compact lists. The user's template provides much richer content with detailed sub-sections, visual comparison cards, and more granular advice.

## Changes to `src/pages/guide/what-to-bring.tsx`

### 1. Clothing Section (lines 510-592) -- EXPAND

Replace the current simple "Recommended vs Avoid" two-column grid and shoe guide with:

- **Top/Shirt sub-section**: Three-tier card layout (Best Choice / Acceptable / Avoid) with specific fabric recommendations, color advice, and "why" explanations
- **Bottom/Pants sub-section**: Same three-tier format with shorts vs pants vs dresses guidance
- **Footwear sub-section**: Elevated to a major sub-section with a warning TipBox ("Critical: Your Shoes Make or Break Your Experience"), three detailed cards (Best / Acceptable / Never Wear) with specific shoe brands and a list of "absolutely forbidden" items with X icons
- **Accessories sub-section**: Hat selection (best/okay/avoid tiers), sunglasses feature checklist
- **Visual outfit comparison**: Side-by-side "Well-Prepared Visitor" vs "Unprepared Visitor" cards showing head-to-toe outfit descriptions with success/failure styling

### 2. Photography Section (lines 594-643) -- EXPAND

Replace the two compact cards and TipBox with:

- **Three-tier camera equipment cards**: Smartphone (with pro tips list), Compact Camera (with settings recommendations), DSLR/Mirrorless (with permit warning TipBox, lens recommendations, and camera settings table for 4 scenarios: General Daylight, Architecture, Portraits, Details)
- **Photography tips grid**: 8-item grid of pro tips (Arrive Early, Shoot RAW, Include People for Scale, Unique Angles, Capture Details, Leading Lines, Wait for Moment, Bracket Exposures) each with title and description
- Keep existing link to photography tips guide

### 3. Special Considerations Section (lines 646-728) -- EXPAND

Replace the three compact cards with richer versions:

- **Cenote sub-section**: Add detailed checklist with CheckCircle icons, plus a "Cenote Rules" list (no regular sunscreen, shower requirement, life jacket info, water temperature, locker costs)
- **Families sub-section**: Expand to include separate "Extra Items" checklist and "Tips for Kids" list (morning tours better, tablet for bus, teach not to touch ruins, bathroom stops note)
- **Seniors sub-section**: Add compression socks, cushioned insoles, wheelchair availability info, electric scooter prohibition, and note about private tour pacing

### 4. Day-of Section (lines 731-791) -- EXPAND

Replace three compact tip cards with a more detailed multi-step timeline:

- **Night Before**: Split into "Charge Everything" checklist (phone, battery, camera, smartwatch) and "Prepare Your Bag" checklist, plus "Other Preparations" (weather check, confirm pickup, set 2 alarms, sleep early)
- **Morning Of**: Three timed blocks (First 15 min, Next 30 min, Final 15 min) with specific numbered steps for each
- Keep existing Final Bag Check format

## Technical Details

- No new imports needed (all icons already imported: CheckCircle, XCircle, Footprints, Camera, Smartphone, etc.)
- No new components needed -- all content uses existing Tailwind patterns and TipBox
- Page grows from ~916 lines to ~1300+ lines
- All existing internal links preserved
- No changes to data arrays, SEO, sidebar, or page structure outside these four sections

