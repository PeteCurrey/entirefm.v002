# SEO-Protective Redirects Documentation

## Overview
This document outlines the redirect strategy implemented to preserve ranking signals from the legacy EntireFM website structure while preventing unnecessary routing overhead.

## Implementation Strategy

### Multi-Layer Approach
The redirect system uses three complementary layers:

1. **Server-Side Redirects** (`public/_redirects`)
   - Primary method for Netlify and compatible hosting platforms
   - Handles HTTPS enforcement and www normalization
   - Provides proper HTTP status codes (301/302) for SEO

2. **Vercel Configuration** (`vercel.json`)
   - Dedicated configuration for Vercel deployments
   - Mirrors the redirect rules in Vercel's format
   - Ensures consistent behavior across platforms

3. **Client-Side Fallback** (`src/components/shared/LegacyRedirects.tsx`)
   - React Router-based redirects for direct URL access
   - Handles edge cases where server-side redirects aren't processed
   - Provides seamless user experience

## Redirect Categories

### 1. HIGH-PRIORITY LEGACY LOCATION REDIRECTS (301 Permanent)
**Purpose**: Preserve strong historical rankings for "FM + Location" search queries

| Legacy URL | New URL | Reason |
|------------|---------|--------|
| `/fm-london` | `/services/fire/london` | Historical ranking for FM London |
| `/facilities-management-london` | `/services/fire/london` | Variant URL consolidation |
| `/london-facilities-management` | `/services/fire/london` | Variant URL consolidation |
| `/fm-birmingham` | `/services/fire/birmingham` | Historical ranking for FM Birmingham |
| `/facilities-management-birmingham` | `/services/fire/birmingham` | Variant URL consolidation |
| `/fm-manchester` | `/services/fire/manchester` | Historical ranking for FM Manchester |
| `/facilities-management-manchester` | `/services/fire/manchester` | Variant URL consolidation |
| `/fm-nottingham` | `/services/fire/nottingham` | Regional FM rankings |
| `/fm-derby` | `/services/fire/derby` | Regional FM rankings |
| `/fm-sheffield` | `/services/fire/sheffield` | Regional FM rankings |
| `/fm-chesterfield` | `/services/fire/chesterfield` | Regional FM rankings |
| `/fm-lincoln` | `/services/fire/lincoln` | Regional FM rankings |

**Strategy**: All legacy FM location pages redirect to fire safety service pages in the corresponding location, as fire safety is the primary compliance service with strong location-based demand.

### 2. SECTOR MATCH REDIRECTS (301 Permanent)
**Purpose**: Map legacy sector terminology to new sector structure

| Legacy URL | New URL | Reason |
|------------|---------|--------|
| `/retail-facilities-management` | `/sectors/retail-hospitality` | Sector consolidation |
| `/commercial-facilities-management` | `/sectors/offices` | Clearer terminology |
| `/industrial-facilities-management` | `/sectors/industrial-logistics` | Sector alignment |
| `/airport-facilities-management` | `/sectors/airports` | Direct match |
| `/hotel-facilities-management` | `/sectors/hotels-leisure` | Sector refinement |
| `/residential-facilities-management` | `/sectors/residential` | Direct match |
| `/service-station-fm` | `/sectors/logistics-parks` | Related sector |

### 3. SERVICE MATCH REDIRECTS (301 Permanent)
**Purpose**: Redirect core services with visible historic traffic

| Legacy URL | New URL | Reason |
|------------|---------|--------|
| `/hvac-contractor` | `/services/hvac-compliance` | Service terminology alignment |
| `/safety-critical-emergency-systems` | `/services/emergency-systems` | URL simplification |
| `/plumbing-gas` | `/services/commercial-plumbing` | Service focus refinement |
| `/ppm` | `/services/ppm` | Direct match |
| `/hard-services` | `/services/hard-services-fm` | Brand alignment |
| `/mechanical-electrical` | `/services/me-services` | Abbreviation consistency |
| `/mechanical-electrical/emergency-light-testing` | `/services/emergency-lighting` | Service independence |

### 4. INDUSTRIAL & SPECIALIST REDIRECTS (301 Permanent)
**Purpose**: Align older niche pages with new service equivalents

| Legacy URL | New URL | Reason |
|------------|---------|--------|
| `/industrial-cleaning` | `/soft-services/specialist-cleaning` | Service categorization |
| `/aerial-drone-building-inspection` | `/services/drone-inspections` | URL simplification |
| `/building-inspecting-testing` | `/services/building-inspections` | Grammar correction |

### 5. CLIENT PORTAL & AUTHENTICATION (302 Temporary)
**Purpose**: Temporary redirects pending future client portal implementation

| Legacy URL | New URL | Reason |
|------------|---------|--------|
| `/client-login` | `/resources` | Portal under development |
| `/client-login/account-registration` | `/resources` | Portal under development |

**Note**: These use 302 (temporary) redirects because a dedicated client portal will be implemented in the future.

### 6. BLOG & RESOURCE CONTENT (301 Permanent)
**Purpose**: Consolidate legacy content into new Knowledge Centre

| Legacy URL | New URL | Reason |
|------------|---------|--------|
| `/blog` | `/resources` | Content consolidation |
| `/blog/*` | `/resources` | Content consolidation |
| `/facilities-management-glossary` | `/resources` | Knowledge Centre integration |

### 7. NON-CRITICAL PAGES (No Redirect - 404)
**Purpose**: Allow 404s for pages with little/no SEO value or irrelevant services

The following legacy URLs are **NOT redirected** and will return 404:
- `/mobile-crane-hire` - Service no longer offered
- `/truck-mount-crane-hire` - Service no longer offered
- `/mobile-crane-hire/sheffield` - Service no longer offered
- `/mobile-crane-hire/chesterfield` - Service no longer offered
- `/hot-tub-relocation` - Unrelated service
- `/bocker-crane-hire` - Service no longer offered
- `/terms-and-conditions` - Low SEO value
- `/accessibility-statement` - Low SEO value
- `/privacy-policy` - Low SEO value
- `/landmark-facilities-management` - Legacy brand
- `/tier-one-facilities-management` - Legacy brand

**Rationale**: These pages have minimal search visibility, irrelevant to the new brand structure, or represent services no longer offered. Allowing 404s is preferable to diluting topical authority with unnecessary redirects.

### 8. GLOBAL REDIRECT RULES

#### A. HTTPS Enforcement (301 Permanent)
All HTTP traffic is redirected to HTTPS:
- `http://entirefm.com/*` → `https://entirefm.com/*`
- `http://www.entirefm.com/*` → `https://entirefm.com/*`

#### B. WWW Normalization (301 Permanent)
All www URLs redirect to non-www:
- `https://www.entirefm.com/*` → `https://entirefm.com/*`

#### C. Trailing Slash Normalization (301 Permanent)
All URLs with trailing slashes redirect to non-trailing:
- `/*/ ` → `/*`

## SEO Benefits

### 1. Preserved Link Equity
- 301 redirects pass 90-99% of link equity to the new URLs
- High-priority location pages maintain their ranking signals
- External backlinks continue to provide SEO value

### 2. Prevented Keyword Cannibalization
- Clear redirect paths eliminate duplicate content
- Consolidates ranking signals to single authoritative pages
- Supports silo architecture implementation

### 3. Enhanced User Experience
- No broken links or 404 errors on legacy URLs
- Seamless navigation from old bookmarks and external links
- Maintains brand credibility and trust

### 4. Reduced Crawl Budget Waste
- No redirect chains (all redirects go directly to final destination)
- Clear signals to search engines about canonical URLs
- Efficient use of Google's crawl budget

## Technical Implementation

### For Netlify Deployments
The `public/_redirects` file is automatically detected and applied:
```
/old-url    /new-url    301
```

### For Vercel Deployments
The `vercel.json` file configures redirects:
```json
{
  "redirects": [
    {
      "source": "/old-url",
      "destination": "/new-url",
      "permanent": true
    }
  ]
}
```

### For Client-Side Fallback
The `LegacyRedirects` component is mounted in `App.tsx` and handles redirects using React Router:
```tsx
<LegacyRedirects />
```

## Monitoring & Maintenance

### Regular Checks
1. **Google Search Console**: Monitor 404 errors and redirect behavior
2. **Server Logs**: Track redirect hit rates to identify high-value legacy URLs
3. **Analytics**: Verify traffic flow from legacy to new URLs
4. **Backlink Analysis**: Identify new external links pointing to legacy URLs

### Quarterly Review
- Assess redirect performance metrics
- Identify any new legacy URLs requiring redirects
- Remove redirects for URLs with zero traffic (after 12+ months)
- Update documentation with any changes

### Future Considerations
- Convert 302 redirects to 301 once client portal is live
- Consider implementing edge redirects for improved performance
- Monitor Core Web Vitals impact of client-side redirects

## Testing

### Manual Testing
1. Test each redirect in multiple browsers
2. Verify HTTP status codes using browser developer tools
3. Check that trailing slash normalization works
4. Confirm HTTPS enforcement

### Automated Testing
Consider implementing automated redirect tests:
```javascript
// Example test structure
describe('Legacy Redirects', () => {
  it('should redirect /fm-london to /services/fire/london', async () => {
    const response = await fetch('/fm-london', { redirect: 'manual' });
    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toBe('/services/fire/london');
  });
});
```

## Support

For questions about redirect implementation or SEO strategy, contact:
- Technical Team: Review `LegacyRedirects.tsx` implementation
- SEO Team: Consult `siloArchitecture.ts` for topical authority strategy

## Change Log

### Version 1.0 (Current)
- Initial implementation of SEO-protective redirects
- Multi-layer redirect strategy (server-side + client-side)
- 40+ legacy URLs redirected
- 10+ URLs intentionally not redirected (404 strategy)
- HTTPS and www normalization implemented
- Trailing slash normalization implemented
