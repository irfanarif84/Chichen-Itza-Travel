

# Expand Tour Gallery: 15-20 Unique Images Per Tour with Full Image SEO

## Overview

Replace the current 2x2 grid (3 images per tour) with a professional image gallery displaying 15 unique, SEO-optimized WebP images per tour. This means generating **195 new image assets** (13 tours x 15 images) and completely redesigning the gallery component.

---

## Scope

### 1. Generate 195 Gallery Images (15 per tour)

Each tour gets 15 unique images covering diverse angles and moments. Format: 800x600 WebP, compressed, SEO-optimized filenames.

**classic-day** (1-15):
El Castillo front view, Ball Court panorama, Cenote Ik Kil overhead, tourists at Temple of Warriors, Kukulkan serpent shadow, Observatory El Caracol, cenote swimming, Valladolid colorful street, buffet lunch spread, Mayan carvings close-up, group with guide, Platform of Venus, Thousand Columns, gift shop area, sunset at ruins

**private-vip** (1-15):
Private guide at El Castillo, VIP entrance area, Ball Court exclusive access, detailed stone carvings, archaeologist explaining glyphs, gourmet lunch table, luxury van interior, Jaguar Throne replica, Temple of Warriors columns, private cenote swim, Mayan calendar stone, guide with small group, panoramic ruins view, traditional dance performance, champagne welcome

**sunrise** (1-15):
Pre-dawn sky over ruins, golden sunrise behind pyramid, El Castillo silhouette, empty plaza at dawn, morning mist over jungle, first light on carvings, photographer at ruins, sun alignment on pyramid, pink sky panorama, dew on grass at ruins, bird's eye dawn view, quiet Ball Court morning, breakfast setup, sunrise selfie spot, amber light on stones

**cenote-combo** (1-15):
Cenote Ik Kil from above, hanging vines at cenote, underwater swimming, stalactite formations, jungle path to cenote, turquoise water surface, diving platform, sunlight through cenote opening, tropical fish, wooden staircase descent, cenote panoramic, swimmers floating, lush vegetation around cenote, crystal clear water, cenote reflection

**budget-express** (1-15):
Tour bus at entrance, group at main plaza, El Castillo wide angle, souvenir market stalls, archaeological zone walkway, tourists with cameras, information plaques, shaded rest area, Observatory building, jungle path, tour group photo, Mayan artifacts display, entrance ticket booth, refreshment stand, parking area view

**family-adventure** (1-15):
Kids exploring ruins, family photo at pyramid, children at cenote, interactive guide with kids, family lunch together, educational display, kids touching replica stones, family swimming cenote, playground area, kid-friendly guide moment, family selfie, children learning history, family walking jungle trail, ice cream break, family on tour bus

**night-show** (1-15):
Light projections on El Castillo, colorful illumination, crowd watching show, blue laser lights, red and gold projections, narrative light display, audience seating area, pyramid silhouette at dusk, green light effects, sound equipment setup, starry sky above ruins, purple illumination, panoramic night view, entrance to night show, souvenir stand at night

**valladolid-combo** (1-15):
Valladolid main square, colorful colonial buildings, San Bernardino convent, cenote Zaci, local market stalls, traditional cuisine plate, cobblestone streets, church facade, artisan crafts, horse-drawn carriage, fountain in plaza, colonial doorways, local musicians, Yucatecan embroidery, sunset over Valladolid

**private-sunrise** (1-15):
Private sunrise setup, misty morning ruins, photographer at dawn, golden hour El Castillo, breakfast champagne, exclusive early access, morning jungle sounds, private guide dawn tour, empty ruins panorama, sun rays through trees, dew-covered plaza, first visitors, VIP breakfast spread, orange sky reflection, tranquil morning scene

**budget-playa** (1-15):
Playa del Carmen departure, comfortable bus ride, highway scenery, first glimpse of ruins, main entrance gate, walking the grounds, El Castillo from distance, group photo opportunity, shaded walkway, local vendors, quick lunch stop, Observatory close-up, souvenir browsing, bus return journey, Playa arrival

**cenote-saamal** (1-15):
Cenote Saamal entrance, open cenote panoramic, swimming platform, turquoise water, tropical garden around cenote, stone stairway, swimmers in cenote, sunlight hitting water, changing facilities, lush foliage, cenote from above, floating in cenote, wooden deck area, nature trail, cenote at golden hour

**ek-balam** (1-15):
Ek Balam pyramid front, climbing the pyramid, stucco facade detail, jungle canopy from top, panoramic view from summit, Arch entrance, winged figure carving, Ball Court at Ek Balam, jungle trail, howler monkeys, cenote X-Canche, swimming at X-Canche, zipline over cenote, Ek Balam entrance, archaeological zone overview

**merida-cultural** (1-15):
Merida cathedral, Paseo Montejo mansions, Gran Museo del Mundo Maya, local cuisine close-up, central plaza, Governor's Palace, traditional market, Mayan museum artifacts, colonial architecture detail, horse carriage ride, local artisan workshop, traditional dance, Yucatecan food market, church interior, sunset over Merida

---

### 2. Redesign TourGallery Component

Replace the 2x2 grid with a professional gallery layout:

- **Hero layout**: 1 large featured image (left, 60% width) + 2 stacked images (right, 40% width) on the first row
- **Scrollable thumbnail strip** below showing all remaining images in a horizontal carousel
- **"View all X photos" button** overlay on the last visible image
- **Lightbox**: Full-screen overlay with prev/next, keyboard nav, thumbnail strip at bottom, counter, swipe support
- All images get descriptive `alt` text, `width`, `height`, `decoding="async"`, and `loading="lazy"` (except first image which gets `loading="eager"`)

### 3. Update tourImages.ts

- Add 195 new imports (15 per tour) with descriptive variable names
- Replace `tourGalleryImages` mapping: each tour ID maps to an array of 15 image URLs

### 4. Add SEO Alt Text Data

Create a new `tourGalleryAltTexts` export in `tourImages.ts` providing unique, descriptive alt text for each of the 195 images (mapped by tour ID and index), ensuring every image has a keyword-rich, accessible description.

### 5. Update Tour Detail Page

- Pass the full 15-image array plus alt texts to TourGallery
- Add an `ImageObject` JSON-LD schema listing all gallery images for rich results

---

## File Summary

| Action | File |
|--------|------|
| Generate | 195 files in `src/assets/tours/gallery/*.webp` (15 per tour, numbered 1-15) |
| Rewrite | `src/components/features/tours/TourGallery.tsx` (new gallery + lightbox design) |
| Rewrite | `src/lib/tourImages.ts` (195 imports + alt text data) |
| Modify | `src/pages/tours/[slug].tsx` (pass full gallery data + ImageObject schema) |

No new dependencies -- uses existing Lucide icons and Tailwind utilities.

---

## Image Specifications

- **Format**: WebP, compressed
- **Dimensions**: 800x600px
- **Quality**: 75, target under 50KB each
- **Filenames**: SEO-friendly, descriptive, hyphenated (e.g., `classic-day-1.webp` through `classic-day-15.webp`)
- **Alt text**: Unique per image, keyword-rich, 10-125 characters

---

## Technical Details: New Gallery Component Design

```text
+-------------------------------+------------------+
|                               |   Image 2        |
|   Featured Image 1            |                  |
|   (large, ~60% width)        +------------------+
|                               |   Image 3        |
|                               |                  |
+-------------------------------+------------------+
| [4] [5] [6] [7] [8] ... [14] [View all 15 >>>]  |
+--------------------------------------------------+
```

- Row 1: Masonry-style hero grid (1 large + 2 stacked)
- Row 2: Horizontal scrollable thumbnail strip with smooth scroll
- Click any image to open full-screen lightbox with all 15 images
- Lightbox has bottom thumbnail navigation strip for quick jumping
- Mobile: Single column hero + swipeable thumbnail carousel

