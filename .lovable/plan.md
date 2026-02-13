

## Add "Who We Are" Introduction Section to Homepage

### What's Changing
A new introduction section will be added between the Client Logos strip and the "Why Choose Us" cards section. This gives visitors a clear understanding of what EntireFM actually does before diving into USPs and service details.

### Design Approach
The section will use an alternating two-column layout (text left / image right, then text left / image right) to break up the content visually and match the premium feel of the rest of the site. The copy from the old website will be lightly refined into two content blocks:

**Block 1 -- "Who We Are"** (with image on the right)
- Covers the core proposition: tailored FM solutions, maintenance, compliance, sustainability, safety, 24/7 support
- Uses the existing `heroImage` or `officeImage` asset as the accompanying visual

**Block 2 -- "What We Cover"** (with image on the left)
- Covers multi-site capability, customised solutions, preventive maintenance, risk management, sustainability
- Uses the existing `industrialImage` asset

Both blocks will use the same `framer-motion` animation patterns already established on the page (`fadeInUp`, `fadeInLeft`, stagger). The content will be refined slightly for tone consistency with the rest of the site (concise, professional, not salesy) while preserving all the key messaging from the original text.

### Technical Details

**File modified:** `src/pages/Home.tsx`

**Change:** Insert a new `<section>` between the `<ClientLogosSection />` component (line 146) and the "FM Partner Section" (line 149).

The new section will:
- Use `py-24` padding consistent with other homepage sections
- Feature a subtle gradient background to differentiate it from adjacent sections
- Contain two side-by-side blocks (image + text) using `grid md:grid-cols-2 gap-12` with `items-center`
- Include motion animations matching the existing page patterns
- Be fully responsive (stacks vertically on mobile)
- Reuse existing imported images (`heroImage`, `officeImage`, `industrialImage`) -- no new assets needed

No other files are changed. No new dependencies or database changes.

