
# Implementation Plan: 4 Tasks

## Task 1: Verify Tour Pages (DONE)
All three pages (/tours/ek-balam-tours, /tours/valladolid-tours, /tours/night-tours) render correctly.

## Task 2: Create /guide/vs-other-ruins.tsx (DONE)
Created comprehensive comparison guide with ComparisonTable, InfoBox for each site, recommendation cards, FAQs, and full SEO schema. Route added to App.tsx. Schema added to guideSchemas in schema.ts.

## Task 3: Create /lib/reviewsData.ts (DONE)
Created 25 reviews across tour categories and departure cities with helper functions: getReviewsByTourCategory, getReviewsByCity, getFeaturedReviews, getAverageRating, generateReviewSchema.

## Task 4: Update Header Mega-Menu (DONE)
Added Ek Balam Tours, Valladolid Tours, Night Tours to tourLinks array and "vs Other Ruins" to guideLinks. Both desktop and mobile nav updated.
