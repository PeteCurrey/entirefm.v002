# Internal Link Validation System

## Overview
Comprehensive link health monitoring system that flags SEO issues, orphan pages, and conversion optimization gaps across the entire site.

## Access
**Dashboard URL:** `/link-health`  
**Environment:** Development only (not indexed by search engines)

## Features

### 1. Orphan Page Detection
- **What it detects:** Pages with zero inbound links
- **Why it matters:** Orphan pages are invisible to users and search engines, wasting content investment
- **Severity:** Critical (Red flag)
- **Action Required:** Add minimum required inbound links based on page type

### 2. Low Inbound Link Analysis
- **What it detects:** Pages with fewer than 5 inbound links
- **Why it matters:** Weak internal link equity reduces ranking potential
- **Severity:** Warning (Yellow flag)
- **Action Required:** Build contextual links from related pages

### 3. Conversion Link Validation
- **What it detects:** Pages missing links to `/request-proposal` or `/contact`
- **Why it matters:** Missed conversion opportunities reduce lead generation
- **Severity:** Warning (Orange flag)
- **Action Required:** Add appropriate CTA links

### 4. Broken Link Detection
- **What it detects:** Internal links pointing to non-existent pages
- **Why it matters:** 404 errors damage user experience and SEO
- **Severity:** Critical (Red flag)
- **Action Required:** Fix or remove broken links

## Health Score Calculation

```
Health Score = 100 - (Total Issues / Total Pages × 100)
```

### Score Interpretation
- **90-100:** Excellent - Site architecture is well-optimized
- **70-89:** Good - Minor improvements needed
- **50-69:** Needs Attention - Multiple issues requiring fixes
- **0-49:** Critical - Significant architecture problems

## Minimum Inbound Link Requirements by Page Type

| Page Type | Minimum Inbound Links | Rationale |
|-----------|----------------------|-----------|
| Parent Service | 5+ | High-value conversion pages |
| Sector | 5+ | Hub pages linking to multiple services |
| Location | 5+ | Geographic entry points |
| Resource | 3+ | Educational content |
| Case Study | 3+ | Social proof content |
| FM Operations | 3+ | Process documentation |
| Regional Service | 2+ | Location-specific variants |
| Other | 2+ | General pages |

## How It Works

### Route Discovery
The system maintains a comprehensive list of all site routes including:
- Main pages (Home, Services, Sectors, Locations, etc.)
- 63 regional service pages (7 services × 9 cities)
- Service parent pages
- FM Operations pages
- Case studies and resources

### Link Extraction
For each page, the system:
1. Identifies all outbound internal links
2. Maps inbound links by analyzing all pages' outbound links
3. Checks for conversion links (`/request-proposal`, `/contact`)
4. Validates link targets exist in route configuration

### Reporting
Results are organized into four tabs:
1. **Orphans** - Pages with 0 inbound links
2. **Low Inbound** - Pages with < 5 inbound links
3. **Missing CTA** - Pages without conversion links
4. **Broken** - Invalid internal link targets

## Usage Workflow

### During Development
1. Navigate to `/link-health`
2. Review health score and issue counts
3. Click through tabs to see specific problems
4. Use "View History" to compare with previous states
5. Fix issues and re-run validation

### Pre-Deployment
Run validation before major releases to ensure:
- No new orphan pages introduced
- All new pages have sufficient inbound links
- Conversion paths maintained
- No broken links introduced

### Quarterly Audits
Schedule regular reviews to:
- Identify content decay (pages losing inbound links)
- Optimize link equity distribution
- Ensure conversion funnel integrity
- Monitor site architecture health

## Integration with SEO Governance

This system complements the existing SEO validation utilities:

### `src/utils/seoGovernance.ts`
- Canonical URL validation
- Title/meta differentiation
- Keyword cannibalization detection
- URL normalization

### `src/utils/seoValidation.tsx`
- Runtime SEO warnings
- H1 validation
- Meta tag verification
- Console logging for dev mode

### `src/utils/linkValidation.ts` (New)
- Site-wide link analysis
- Orphan detection
- Conversion optimization
- Broken link checking

## Future Enhancements

### Phase 2: Dynamic Link Extraction
- Parse actual component files to extract real links
- Support dynamic route patterns
- Analyze React Router Link components
- Track external links

### Phase 3: Historical Tracking
- Store validation results over time
- Track link equity changes
- Monitor page health trends
- Alert on degradation

### Phase 4: Automated Fixes
- Suggest optimal linking opportunities
- Auto-generate related content links
- Recommend conversion link placements
- Flag removal candidates

### Phase 5: AI-Powered Recommendations
- Content gap analysis
- Optimal site structure suggestions
- Predictive orphan detection
- Smart internal linking strategy

## Technical Architecture

### Files
- **Dashboard:** `src/pages/LinkHealthDashboard.tsx`
- **Logic:** `src/utils/linkValidation.ts`
- **Route:** `/link-health` (App.tsx)

### Data Structures
```typescript
interface PageLinkData {
  url: string;
  title: string;
  inboundLinks: string[];
  outboundLinks: string[];
  hasProposalLink: boolean;
  hasContactLink: boolean;
  pageType: 'service' | 'sector' | 'location' | ...;
}

interface LinkValidationReport {
  orphanPages: PageLinkData[];
  lowInboundPages: PageLinkData[];
  missingConversionLinks: PageLinkData[];
  brokenLinks: Array<{ from: string; to: string; type: string }>;
  healthScore: number;
  totalPages: number;
  totalLinks: number;
}
```

## Best Practices

### When Adding New Pages
1. Add route to `SITE_ROUTES` in `linkValidation.ts`
2. Ensure minimum inbound links from related pages
3. Include conversion link (`/request-proposal` or `/contact`)
4. Run validation before deployment

### When Removing Pages
1. Check for inbound links using dashboard
2. Add redirects in `_redirects` file
3. Update linking pages to remove references
4. Verify no broken links introduced

### When Restructuring Content
1. Run validation before changes (baseline)
2. Maintain or improve inbound link counts
3. Preserve conversion paths
4. Run validation after changes (compare)

## Troubleshooting

### False Positives
**Issue:** Page marked as orphan but it's reachable  
**Cause:** Link not tracked in `extractLinksFromPage()`  
**Fix:** Update link extraction logic to include all navigation patterns

### Missing Pages
**Issue:** Page exists but not in validation report  
**Cause:** Not added to `SITE_ROUTES` array  
**Fix:** Add route to site routes list

### Incorrect Health Score
**Issue:** Score seems wrong  
**Cause:** Check issue counts and total pages  
**Fix:** Review calculation formula and ensure all issues counted

## Support

For questions or issues with the link validation system:
- Review this documentation
- Check console logs in dev mode
- Inspect `linkValidation.ts` for logic details
- Test with `/link-health` dashboard
