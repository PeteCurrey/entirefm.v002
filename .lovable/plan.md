
## Add Hover Background Images to Case Study Cards

### What's Changing
Each card on the Case Studies listing page will show a sector-relevant background image on hover, with a dark overlay keeping the text readable. The card component already supports this — it has the `image` prop with the scale-up transition and gradient overlay built in. The only change needed is passing images to each card from the listing page.

### Implementation

**File modified:** `src/pages/CaseStudies.tsx`

1. Import the sector hero images that already exist in the project:
   - `sector-logistics-hero.jpg` for Logistics
   - `sector-airports-hero.jpg` for Aviation
   - `sector-corporate-hero.jpg` for Mixed-Use and Corporate
   - `sector-service-stations-hero.jpg` for Retail (service stations)
   - `sector-retail-hero.jpg` for Retail (complex)
   - `sector-pbsa-hero.jpg` for Residential
   - `sector-industrial-hero.jpg` for Industrial
   - `sector-hospitality-hero.jpg` for Hospitality
   - `sector-healthcare-hero.jpg` for Healthcare
   - `sector-offices-hero.jpg` for Education (closest match)

2. Add an `image` property to each object in the `caseStudies` array, mapping to the appropriate imported asset.

**No other files change.** The `CaseStudyCard` component already handles:
- Showing the image only on the card (hidden by default via the dark overlay, revealed subtly on hover)
- A scale-up animation on hover (`group-hover:scale-110`)
- A heavy dark gradient overlay (`from-charcoal via-charcoal/95 to-charcoal/70`) that lightens slightly on hover

### Behaviour
- **Default state:** Card looks the same as now (dark glassmorphism, white text)
- **On hover:** Background image fades in behind the dark overlay with a subtle scale effect, giving a visual hint of the site/sector without overpowering the text

### Current Card Hover Overlay
The existing overlay uses `from-charcoal via-charcoal/95 to-charcoal/70` (very dark), lightening to `from-charcoal via-charcoal/90 to-charcoal/60` on hover. This keeps the image subtle and the text fully readable — exactly what was requested.

One small tweak: the image is currently always visible (not hidden by default). To make it a true "reveal on hover" effect, the image layer's opacity will start at 0 and transition to visible on hover, so the card stays clean until interacted with.

### Files
| File | Change |
|---|---|
| `src/pages/CaseStudies.tsx` | Import 10 sector images, add `image` prop to all 12 case study objects |
| `src/components/shared/CaseStudyCard.tsx` | Minor tweak: add `opacity-0 group-hover:opacity-100` to the image layer so it only appears on hover |
