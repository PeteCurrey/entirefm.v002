
## Elevate All Sector Pages to Premium Visual Experience

### The Problem
All 17 sector pages use `SectorPageTemplate`, which has a strong parallax hero section but then drops into a plain two-column sidebar layout. Below the hero, every section is text-only cards on a white background with no imagery, no visual variety, and no depth -- making the pages feel flat and monotonous compared to the recently upgraded service pages.

### The Solution
Redesign the `SectorPageTemplate` component itself rather than rewriting each individual page. This means all 17 sector pages benefit from the upgrade automatically without touching their data/content files.

---

### Design Changes to `SectorPageTemplate`

**1. Remove the sidebar layout, go full-width**
- Drop the 2-column grid with `SidebarCTA` sidebar
- Move to full-width stacked sections (matching the service page pattern)
- Add a floating CTA bar or inline CTA block instead

**2. Add a TrustBar after the hero**
- Insert accreditation strip (NICEIC, Gas Safe, etc.) for credibility
- Consistent with service pages

**3. Add a StatsBanner for the KPI stats**
- Move the hero stats into a dedicated animated `StatsBanner` component below the hero transition zone
- Adds visual punch with count-up animations

**4. Add sector-relevant imagery sections**
- New "Sector Visual" image panel between content sections using relevant Unsplash images (the `heroImage` already passed in, plus a new optional `sectionImages` prop)
- Create an alternating left-image/right-text and right-image/left-text layout for the Sector Summary and Operational Challenges sections
- Uses real UK imagery already provided via `heroImage`

**5. Enhance Compliance Risks with icon cards in a grid**
- Replace the vertical list of plain cards with a responsive grid of icon-enhanced cards (similar to `FeatureCardGrid`)
- Use colour-coded severity indicators

**6. Key Systems as visual icon grid**
- Replace the plain bulleted lists inside a single card with two side-by-side feature card grids with icons and glassmorphism styling

**7. "Why EntireFM" as feature highlight strip**
- Full-width gradient background section
- Checkmark items displayed in a 2 or 3-column responsive grid instead of a single-column list

**8. Case Studies with glassmorphism cards**
- Add subtle background imagery/gradients behind case study cards
- Include metric highlights with larger typography

**9. Related Services as hover-interactive cards**
- Enhanced card design with icons, gradient borders, and arrow indicators

**10. FAQ section -- keep as-is**
- The accordion FAQ already works well

**11. Enhanced CTA section at the bottom**
- Replace the plain card CTA with the shared `CTASection` component for consistency with service pages

---

### New Optional Props on `SectorPageTemplate`

To support imagery without changing existing page files, the template will:
- Reuse the existing `heroImage` as a section background in alternating content blocks
- Add an optional `sectionImage` prop for pages that want a second image
- Default to the hero image when no section image is provided

---

### Technical Summary

| Change | File |
|---|---|
| Full redesign of template layout, sections, and visual treatment | `src/components/shared/SectorPageTemplate.tsx` |
| No changes required to any of the 17 individual sector page files | All pages auto-inherit the upgrade |

**Components reused from service pages**: `TrustBar`, `StatsBanner`, `ContentSection`, `CTASection`, `FeatureCardGrid`

**Preserved**: All existing hover animations, parallax hero, scroll indicator, transition zone, SEO schema markup, and FAQ accordion

**No database changes, no new dependencies, no breaking changes to the props interface.**
