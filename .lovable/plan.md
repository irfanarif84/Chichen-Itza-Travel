

# Add Hero Images and Image Galleries to All 4 Combo Tour Pages

## Overview

All 4 combo tour pages currently have text-only gradient hero sections with no photographs and no image galleries. This plan adds a full-width hero image to each page and integrates the existing TourGallery component with 15 unique, SEO-optimized images per combo tour -- totaling **4 hero images + 60 gallery images = 64 new WebP assets**.

---

## Current State

The 4 combo pages (`coba-ruins`, `cenote-ik-kil`, `isla-mujeres`, `multi-day-yucatan`) have:
- Plain gradient background hero sections (no photographs)
- No image gallery component
- No ImageObject JSON-LD schema

---

## New Assets: 64 WebP Images

### 4 Hero Images (1200x675px, target under 80KB)

| File | Subject |
|------|---------|
| `src/assets/combo-tours/coba-ruins-hero.webp` | Nohoch Mul pyramid at Coba surrounded by jungle canopy |
| `src/assets/combo-tours/cenote-ik-kil-hero.webp` | Cenote Ik Kil overhead view with hanging vines and turquoise water |
| `src/assets/combo-tours/isla-mujeres-hero.webp` | Isla Mujeres Playa Norte with turquoise Caribbean water and white sand |
| `src/assets/combo-tours/multi-day-yucatan-hero.webp` | Panoramic Yucatan landscape with Uxmal pyramid and colonial architecture |

### 60 Gallery Images (800x600px, 15 per combo, target under 50KB)

**coba-ruins** (1-15):
Nohoch Mul pyramid front, climbing the 120 steps, jungle canopy view from top, ancient sacbe road, Coba ball court, jungle-covered ruins, bicycle path through jungle, Coba stele gallery, El Castillo at Chichen for comparison, Coba lagoon, group at pyramid base, rope handrail on steps, Coba entrance gate, Mayan carvings at Coba, panoramic view from summit

**cenote-ik-kil** (1-15):
Cenote Ik Kil from above, hanging vines and waterfalls, swimmers in turquoise water, stone staircase descent, sunlight through opening, platform for jumping, underwater view, lush vegetation surround, El Castillo nearby, changing room facilities, cenote panoramic wide shot, floating in crystal water, tropical fish, wooden walkway to cenote, cenote at midday with light beams

**isla-mujeres** (1-15):
Playa Norte beach panorama, MUSA underwater sculptures, Punta Sur cliffs, golf cart island exploration, turquoise Caribbean from above, Ixchel temple ruins, colorful island downtown, snorkeling with fish, ferry from Cancun, sunset over island, local seafood restaurant, hammock on beach, coral reef snorkeling, island lighthouse, Playa Norte palm trees

**multi-day-yucatan** (1-15):
Uxmal Governor's Palace, Merida cathedral plaza, hacienda cenote swimming, Valladolid colorful street, Celestun flamingo reserve, Izamal yellow city, Kabah ruins arch, colonial hacienda hotel, Yucatecan cuisine spread, Paseo Montejo mansions, local market produce, Chichen Itza with guide, Uxmal Pyramid of the Magician, jungle road between sites, group at sunset viewpoint

---

## Code Changes

### 1. `src/lib/tourImages.ts`
- Add 4 hero image imports from `src/assets/combo-tours/`
- Add 60 gallery image imports (15 per combo) from `src/assets/combo-tours/gallery/`
- Add entries to `tourImages` map for combo hero images
- Add entries to `tourGalleryImages` map for combo galleries (15 images each)
- Add entries to `tourGalleryAltTexts` with unique, keyword-rich descriptions for all 60 gallery images

### 2. All 4 Combo Tour Pages
Each page (`coba-ruins.tsx`, `cenote-ik-kil.tsx`, `isla-mujeres.tsx`, `multi-day-yucatan.tsx`) will be updated to:

- **Replace gradient hero with full-width hero image**: Add a background image with dark overlay, text on top, and `fetchpriority="high"` for LCP optimization
- **Add TourGallery component** below the hero section with all 15 images and SEO alt texts
- **Add ImageObject JSON-LD schema** for rich search results listing all gallery images

### 3. Layout Pattern for Each Combo Page

```text
+--------------------------------------------------+
|  HERO IMAGE (full-width, dark overlay)           |
|  [Breadcrumbs]                                    |
|  [Stars + Rating]                                 |
|  [H1 Title]                                       |
|  [Description]                                    |
|  [Feature badges]                                 |
|  [CTA Button]                                     |
+--------------------------------------------------+
|  TOUR GALLERY (masonry hero + thumbnail strip)    |
|  [15 images with lightbox]                        |
+--------------------------------------------------+
|  ... existing content sections unchanged ...      |
+--------------------------------------------------+
```

---

## SEO Specifications

- All hero images: `fetchpriority="high"`, `loading="eager"`, descriptive alt text
- All gallery images: `loading="lazy"`, `width={800}`, `height={600}`, `decoding="async"`
- Every image gets a unique keyword-rich alt text (10-125 chars)
- ImageObject JSON-LD schema added to each page's metadata
- Image filenames are descriptive and hyphenated for URL SEO

---

## File Summary

| Action | Files |
|--------|-------|
| Generate | 4 files in `src/assets/combo-tours/*.webp` (hero images) |
| Generate | 60 files in `src/assets/combo-tours/gallery/*.webp` (15 per combo) |
| Modify | `src/lib/tourImages.ts` (64 new imports + alt text data) |
| Modify | `src/pages/combo-tours/coba-ruins.tsx` (hero image + gallery + schema) |
| Modify | `src/pages/combo-tours/cenote-ik-kil.tsx` (hero image + gallery + schema) |
| Modify | `src/pages/combo-tours/isla-mujeres.tsx` (hero image + gallery + schema) |
| Modify | `src/pages/combo-tours/multi-day-yucatan.tsx` (hero image + gallery + schema) |

Total: 64 new image assets + 5 code file modifications.

