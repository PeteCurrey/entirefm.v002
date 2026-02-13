

## Enhance /resources/fire-risk-guide to Premium Design

Transform the Fire Risk Assessment Guide page from its current basic layout into the premium, experience-driven design used across the recently enhanced service and proposal pages.

---

### Current State
The page uses a simple `container` layout with basic Cards -- no hero section, no animations, no trust bar, and no visual polish compared to the rest of the site.

### Planned Changes (single file: `src/pages/resources/FireRiskGuide.tsx`)

**1. Add Full-Width Premium Hero Section**
- Replace the flat header with `ServiceHeroSection` featuring the charcoal parallax background, breadcrumb integration, and animated entrance
- Include stats cards (e.g., "28 Pages", "2025 Updated", "Free Download", "5 Min Read")
- Primary CTA scrolls to the download form; secondary CTA triggers the actual PDF download (post-form)

**2. Add TrustBar**
- Insert `<TrustBar variant="compact" />` beneath the hero for accreditation credibility, consistent with service pages

**3. Wrap Content in ContentSection Components**
- "What's Inside" checklist wrapped in a `ContentSection` with animated reveal (`motion` fade-in) and the `underline-accent` heading style
- Each checklist item gets a staggered entrance animation via `framer-motion`

**4. Elevate the Download Form**
- Wrap the form card in a `ContentSection variant="muted"` for visual separation
- Add a subtle gradient border or glassmorphism card style to the form
- Add `motion` entrance animations to form fields
- Style the success state with a more polished animated checkmark and confetti-style feedback

**5. Add a "Why EntireFM?" Section**
- Convert the current plain card into a proper `ContentSection` with icon-based feature cards (using `FeatureCardGrid` or manual `motion` cards) showcasing fire safety credentials

**6. Add a CTA Section at the Bottom**
- Add a `CTASection` or equivalent bottom banner linking to `/services/fire-safety` and `/contact`, matching the pattern on service pages

**7. Micro-Interactions and Polish**
- `hover-lift` on all cards
- Staggered animation variants for list items
- Smooth scroll anchor from hero CTA to the form section

---

### Technical Details

- **Imports to add**: `ServiceHeroSection`, `ContentSection`, `TrustBar`, `CTASection`, `motion` from framer-motion
- **Scroll behavior**: Hero primary CTA uses `document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })` to anchor to the form
- **No new files needed** -- purely a rewrite of `FireRiskGuide.tsx` using existing shared components
- **No backend changes** -- form logic and tracking remain identical
- **SEO preserved** -- Helmet, SchemaMarkup, and BreadcrumbSchema all retained

