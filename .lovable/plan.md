

# Upgrade MonthlyChart and Expand Guide Sections

## Overview

Two main changes: (1) replace the simple table-based MonthlyChart with an interactive tabbed version featuring clickable months, and (2) expand the crowd avoidance, special events, peak season, and low season sections from their current compact InfoBox format to richer card-based layouts with more detail.

The existing ComparisonTable component already works well and does not need changes.

## Files to Modify

### 1. `src/components/guide/MonthlyChart.tsx` (REWRITE)

Replace the current 85-line simple table with an interactive tabbed component featuring:
- **5 tabs**: Overview, Temperature, Rainfall, Crowds, Price
- **Overview tab**: Clickable month cards with crowd indicator dots, temperature, rain drops, price level, and "best month" badges. Clicking a month opens a detail panel with all stats
- **Temperature tab**: Horizontal bar chart color-coded (green/orange/red) by heat level
- **Rainfall tab**: Blue bar chart with dry/moderate/rainy labels
- **Crowds tab**: 5-dot indicator per month with crowd tips
- **Price tab**: Dollar-sign indicators with best-value callouts
- **Legend** shown on the overview tab
- Uses `useState` for active month and active tab
- Typed crowd/price configs for color mapping

### 2. `src/pages/guide/best-time-to-visit.tsx` -- Sections 458-576 (EXPAND)

Replace the compact InfoBox-based sections with richer content:

**Crowd Avoidance (section id="crowd-tips")** -- Replace single InfoBox with 6 numbered strategy cards, each with:
- Rank number badge
- Title and description paragraph
- Effectiveness badge (color-coded)
- Optional link to relevant tour page

Strategies: Sunrise Tour, Arrive at Opening, Visit Weekdays, Choose Shoulder Season, Avoid Holidays, Book Private Tours

**Special Events (section id="special-events")** -- Replace InfoBox list with 4 detailed event cards:
- Spring Equinox (March 20-21) with pros/cons columns and "Bucket List But Crowded" badge
- Fall Equinox (September 21-22) with "Best Equinox Option" badge and attendance comparison
- Noches de Kukulcan night show with schedule info and booking link
- Dia de Muertos (November 1-2) with Valladolid combination suggestion

**Peak Season Tips (section id="peak-season")** -- Replace single InfoBox with 8 individual tip cards, each with emoji icon, bold title, and detailed paragraph covering: booking ahead, earliest tour times, sunrise upgrade, small group preference, heat preparation, photography strategy, meal timing, and booking confirmation.

**Low Season Tips (section id="low-season")** -- Replace single InfoBox with 8 individual tip cards covering: morning tours, rain poncho, negotiating rates, jungle atmosphere, early starts, Valladolid stay, mosquito repellent, and weather monitoring.

## Technical Details

- MonthlyChart interface stays compatible -- same `MonthData` shape with `month`, `temp`, `rain`, `crowds`, `price`
- No changes needed to the page's data definitions or imports
- ComparisonTable is NOT changed (already functional)
- All internal links preserved and expanded
- Page grows from ~661 lines to ~1000+ lines
- No new dependencies

