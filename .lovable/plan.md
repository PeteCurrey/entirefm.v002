

## Enhance Case Studies -- Listing Page and Individual Pages

### Part 1: Case Studies Listing Page (`CaseStudies.tsx`)

**Card contrast fix**
- The `CaseStudyCard` currently uses `text-white` for titles on a `bg-white/5` (nearly transparent) background, making them invisible on the light `bg-muted/30` grid section
- Fix: Change the grid section background to `bg-charcoal` (dark) so the glassmorphism cards sit on a dark surface where white text is readable
- Alternative: Also increase the card's base background opacity to `bg-white/10` for better definition

**Add intro section below hero**
- Insert a brief text block between the hero and the filter bar
- Two short paragraphs explaining the value of EntireFM's case studies (measurable outcomes, real clients, across all sectors)
- Uses the same two-column or centered layout pattern from the homepage intro

**Filter bar styling**
- Change the sticky filter bar background from `bg-white` to `bg-muted` to match the off-white nav dropdown update

**CTA section upgrade**
- Replace the basic CTA with the shared `CTASection` component for consistency

### Part 2: Individual Case Study Pages (All 13 files)

Every individual case study page currently has the same issues: plain gradient hero (no image), basic white/muted sections, and no visual variety. The upgrade creates a reusable `CaseStudyTemplate` component so all 13 pages benefit automatically.

**New shared component: `CaseStudyTemplate.tsx`**

This template accepts all the data each page already has (title, sector, challenges, solutions, metrics, testimonial, CTA) plus new optional fields, and renders a premium layout:

| Section | Current | Upgraded |
|---|---|---|
| Hero | Plain charcoal gradient, no image | Full-height parallax hero image with gradient overlay (reusing existing sector assets from `src/assets/`) |
| Breadcrumb | Floating above hero awkwardly | Integrated into the hero section |
| Stats | Mixed in with Measurable Wins | Dedicated `StatsBanner` strip below hero with animated count-ups |
| Challenge | Plain white cards | Cards with red-tinted left border and subtle icons |
| Solution | Plain icon list | Alternating image/text layout with solution steps (image reused from hero) |
| Metrics | `MetricCard` grid | Keep but enhance with larger typography and gradient background |
| Testimonial | Small block quote | Full-width highlight section with large quotation marks and gradient background |
| Related case studies | None | New section showing 2-3 related case study cards before the CTA |
| CTA | Basic inline buttons | Shared `CTASection` component |

**Hero images for each case study** (mapped from existing sector assets):

| Case Study | Asset |
|---|---|
| Aviation | `sector-airports-hero.jpg` |
| Logistics Distribution Hub | `sector-logistics-hero.jpg` |
| Corporate HQ | `sector-corporate-hero.jpg` |
| Retail Service Stations | `sector-service-stations-hero.jpg` |
| Service Stations | `sector-retail-hero.jpg` |
| Residential PBSA | `sector-pbsa-hero.jpg` |
| Healthcare | `sector-healthcare-hero.jpg` |
| Hospitality | `sector-hospitality-hero.jpg` |
| Industrial Plant | `sector-industrial-hero.jpg` |
| Industrial Warehouse Sheffield | `sector-industrial-hero.jpg` |
| Corporate Office London | `sector-offices-hero.jpg` |
| PBSA Estate Manchester | `sector-residential-hero.jpg` |
| Retail Complex Birmingham | `sector-retail-hero.jpg` |

**Each of the 13 page files** will be refactored to import and use `CaseStudyTemplate`, passing their existing data as props. This dramatically reduces code duplication and ensures visual consistency.

### Technical Summary

| Change | Files |
|---|---|
| Fix card contrast, add intro, enhance grid background | `src/pages/CaseStudies.tsx` |
| Fix card base styling for dark backgrounds | `src/components/shared/CaseStudyCard.tsx` |
| New reusable case study template | `src/components/shared/CaseStudyTemplate.tsx` (new) |
| Refactor to use template | All 13 files in `src/pages/case-studies/` |

**Components reused**: `StatsBanner`, `CTASection`, `CaseStudyCard`, `Breadcrumb`, `MetricCard`

**No database changes. No new dependencies.**
