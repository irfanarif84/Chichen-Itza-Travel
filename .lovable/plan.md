

# Replace All Tour Images with Real, Compressed, SEO-Optimized WebP Assets

## Overview

Regenerate all 52 tour-related image assets (13 hero images + 39 gallery images) as high-quality, realistic, compressed WebP photographs. Also improve SEO attributes (alt text, width/height, descriptive filenames) across all components that render these images.

---

## Scope: 52 Image Assets to Regenerate

### 13 Hero Images (used in TourCard + tour detail hero)

| File | Subject |
|------|---------|
| `classic-day-tour.webp` | El Castillo pyramid with tourists on a sunny day |
| `private-vip-tour.webp` | Private guide explaining carvings at Chichen Itza |
| `sunrise-tour.webp` | Golden sunrise behind El Castillo pyramid |
| `cenote-combo.webp` | Swimmers in Cenote Ik Kil with hanging vines |
| `budget-express.webp` | Aerial view of Chichen Itza archaeological zone |
| `family-adventure.webp` | Family with children exploring Mayan ruins |
| `night-show.webp` | Light and sound show projected on El Castillo at night |
| `valladolid-combo.webp` | Colorful colonial street in Valladolid town |
| `private-sunrise.webp` | Silhouette of El Castillo at dawn with orange sky |
| `budget-playa.webp` | Tour bus arriving at Chichen Itza entrance |
| `cenote-saamal.webp` | Open cenote with turquoise water and lush vegetation |
| `ek-balam-combo.webp` | Ek Balam pyramid with jungle backdrop |
| `merida-cultural.webp` | Merida cathedral and cultural plaza |

### 39 Gallery Images (3 per tour, used in TourGallery lightbox)

Each tour gets 3 unique photos showing different moments/angles:

- **classic-day**: El Castillo close-up, Cenote Ik Kil swimming, Valladolid lunch scene
- **private-vip**: VIP guide at Ball Court, exclusive temple access, gourmet lunch
- **sunrise**: Pre-dawn setup, golden light on pyramid, empty ruins at dawn
- **cenote-combo**: Underground cenote, swimming with stalactites, jungle path
- **budget-express**: Group photo at ruins, main plaza overview, souvenir market
- **family-adventure**: Kids exploring, family at cenote, interactive guide moment
- **night-show**: Light projections on temple, crowd watching show, colorful illumination
- **valladolid-combo**: Colonial architecture, local market, convent of San Bernardino
- **private-sunrise**: Misty morning ruins, photographer at work, breakfast setup
- **budget-playa**: Departure from Playa, ruins walkway, group at Observatory
- **cenote-saamal**: Cenote Saamal entrance, swimming platform, tropical garden
- **ek-balam**: Climbing Ek Balam, stucco facade detail, jungle canopy view
- **merida-cultural**: Paseo Montejo mansions, local cuisine, Mayan museum artifacts

---

## SEO Improvements to Components

### TourCard.tsx
- Add descriptive `alt` text: `alt={`${tour.title} - Chichen Itza tour photo`}`
- Already has `loading="lazy"`, `width`, `height` -- keep as-is

### TourGallery.tsx
- Improve alt text per image position: `alt={`${tourTitle} - ${['panoramic view', 'activity highlight', 'experience detail', 'scenic moment'][i]}`}`
- Add `width={800}` and `height={600}` for CLS prevention
- Add `decoding="async"` for non-blocking decode

### Tour Detail Page Hero ([slug].tsx)
- Add `fetchpriority="high"` to hero image (above-fold, should not be lazy)
- Remove `loading="lazy"` from hero (it's LCP element)
- Add `width={1920}` `height={1080}` for CLS

---

## Image Specifications

All regenerated images will follow these specs:
- **Format**: WebP (already the file extension)
- **Hero images**: 1200x675px, quality 80, target under 80KB each
- **Gallery images**: 800x600px, quality 75, target under 50KB each
- **Color profile**: sRGB
- **Filenames**: Already SEO-friendly (descriptive, hyphenated)

---

## Files Modified

| Action | File |
|--------|------|
| Regenerate | 13 files in `src/assets/tours/*.webp` |
| Regenerate | 39 files in `src/assets/tours/gallery/*.webp` |
| Modify | `src/components/features/tours/TourGallery.tsx` (SEO attrs) |
| Modify | `src/components/features/tours/TourCard.tsx` (alt text) |
| Modify | `src/pages/tours/[slug].tsx` (hero image attrs) |

No new dependencies. No structural changes to `tourImages.ts`.

