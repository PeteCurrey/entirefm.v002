

## Enhance Locations Listing Page and Individual Location Pages

### Part 1: Locations Listing Page (`src/pages/Locations.tsx`)

**Dark grid background with hover-reveal image cards** (same pattern as Case Studies)
- Change the grid section background from `bg-white` to `bg-charcoal`
- Replace the plain white `Card` components with glassmorphism-style cards (`bg-white/10 backdrop-blur-sm`) featuring white text
- Each card gets a city-relevant background image that starts at `opacity-0` and fades in on hover with `group-hover:opacity-100` and `group-hover:scale-110`, with a heavy dark gradient overlay to keep text readable
- City images will be sourced from Unsplash via URL (e.g., Birmingham skyline, London cityscape, Manchester, etc.) since no city-specific assets exist in the project yet

**Add intro section below hero**
- Brief paragraph about national coverage with local accountability
- Same centered layout pattern used on Case Studies listing page

**Upgrade hero section**
- Make it more visually engaging with the charcoal gradient and a subtle background pattern, matching other premium hero sections

**Replace basic CTA with shared `CTASection` component**

### Part 2: New Shared Template -- `LocationPageTemplate.tsx`

All 11 individual location pages currently have duplicated structure (hero, sidebar layout, lists, FAQs, CTA card). A new reusable template will standardise them, similar to how `CaseStudyTemplate` works.

**Template sections:**

| Section | Current | Upgraded |
|---|---|---|
| Hero | Plain charcoal gradient, `py-24`, no image | Full-screen hero with city background image, gradient overlay, breadcrumb integrated |
| Stats | None | `StatsBanner` strip below hero with city-relevant metrics (e.g., response times, sites managed) |
| Why EntireFM | Basic bullet list | Cards with icons in a grid layout |
| Coverage | Plain text chips | Map-style visual with coverage area cards |
| Services | Plain checklist | Icon-enhanced grid cards (matching sector pages) |
| Sectors | Basic cards (some pages) | Glassmorphism cards linking to sector pages |
| FAQs | Already using `FAQSection` | Keep as-is |
| CTA | Inline charcoal card | Shared `CTASection` component |
| Sidebar | `SidebarCTA` in right column | Remove sidebar, go full-width stacked layout (matching the premium pattern across the site) |

**Template props interface:**

```text
city: string
region: string
heroImage: string (URL)
heroHeadline: string
heroSubtext: string
stats: array of { value, label, suffix/prefix }
whyPoints: array of { icon, title, description }
coverageAreas: string[]
services: array of { icon, title }
sectors: array of { title, description, link }
faqs: array of { question, answer }
ctaHeadline: string
ctaSubtext: string
```

### Part 3: Refactor All 11 Location Pages

Each page file will be simplified to import `LocationPageTemplate` and pass its city-specific data as props. Existing content (FAQs, services, coverage areas, sector links) will be preserved -- just restructured into the template format.

| Page | Hero Image Subject |
|---|---|
| London | London skyline / financial district |
| Birmingham | Birmingham city centre / Bull Ring |
| Manchester | Manchester skyline / Beetham Tower |
| Leeds | Leeds city centre / commercial district |
| Sheffield | Sheffield cityscape / steel heritage |
| Liverpool | Liverpool waterfront / Albert Dock |
| Leicester | Leicester urban / industrial |
| Nottingham | Nottingham city centre |
| Derby | Derby cityscape |
| Chesterfield | Chesterfield town / crooked spire |
| Lincoln | Lincoln Cathedral / historic centre |

Images will use high-quality Unsplash URLs with the `w=1920` parameter for appropriate hero resolution.

### Technical Summary

| Change | Files |
|---|---|
| Enhance listing page with dark grid, hover images, intro section | `src/pages/Locations.tsx` |
| New reusable location template | `src/components/shared/LocationPageTemplate.tsx` (new) |
| Refactor to use template | All 11 files in `src/pages/locations/` |

**Components reused**: `StatsBanner`, `CTASection`, `FAQSection`, `Breadcrumb`, `SchemaMarkup`

**No database changes. No new dependencies.**

