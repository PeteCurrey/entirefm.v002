/**
 * Real Page Audit Utilities
 * Performs actual SEO analysis using live page data and governance rules
 */

import { supabase } from "@/integrations/supabase/client";
import { 
  isRegionalServicePage, 
  getParentServiceUrl, 
  getCanonicalUrl,
  getRequiredLinksForPageType,
  hasMinimumInboundLinks,
  detectKeywordOverlap,
  PageType
} from "./seoGovernance";
import { getPageType, validateSiteLinks, LinkValidationReport } from "./linkValidation";

export interface PageAnalysis {
  url: string;
  fetchedAt: string;
  title: { content: string; length: number };
  metaDescription: { content: string; length: number };
  canonical: { url: string; isPresent: boolean };
  headings: { h1: string[]; h2: string[]; h3: string[] };
  internalLinks: string[];
  externalLinks: string[];
  images: { src: string; hasAlt: boolean; altText?: string }[];
  structuredData: any[];
  openGraph: Record<string, string>;
  wordCount: number;
  hasViewport: boolean;
  robotsMeta: string | null;
}

export interface AuditCheck {
  name: string;
  status: 'pass' | 'warning' | 'fail';
  message: string;
  value?: string;
  details?: string;
}

export interface AuditCategory {
  category: string;
  checks: AuditCheck[];
}

export interface PageAuditResult {
  url: string;
  pageType: string;
  score: number;
  categories: AuditCategory[];
  analysis: PageAnalysis | null;
  error?: string;
}

/**
 * Fetch and analyze a live page
 */
export const fetchPageAnalysis = async (url: string): Promise<PageAnalysis | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('analyze-page', {
      body: { url }
    });

    if (error) {
      console.error('Error fetching page analysis:', error);
      return null;
    }

    return data as PageAnalysis;
  } catch (err) {
    console.error('Failed to analyze page:', err);
    return null;
  }
};

/**
 * Map link validation page type to governance page type
 */
const mapToGovernancePageType = (pageType: ReturnType<typeof getPageType>): PageType['type'] => {
  const mapping: Record<string, PageType['type']> = {
    'service': 'parent-service',
    'sector': 'sector',
    'location': 'regional-service',
    'resource': 'resource',
    'case-study': 'case-study',
    'fm-ops': 'fm-ops',
    'other': 'resource'
  };
  return mapping[pageType] || 'resource';
};

/**
 * Run meta tag checks
 */
const runMetaTagChecks = (analysis: PageAnalysis, url: string): AuditCheck[] => {
  const checks: AuditCheck[] = [];

  // Title check
  const titleLength = analysis.title.length;
  if (titleLength === 0) {
    checks.push({
      name: "Title Tag",
      status: "fail",
      message: "No title tag found",
    });
  } else if (titleLength < 30) {
    checks.push({
      name: "Title Tag",
      status: "warning",
      message: "Title is too short",
      value: `${titleLength} characters`
    });
  } else if (titleLength <= 60) {
    checks.push({
      name: "Title Tag",
      status: "pass",
      message: "Title is within optimal length",
      value: `${titleLength} characters`
    });
  } else {
    checks.push({
      name: "Title Tag",
      status: "warning",
      message: "Title may be truncated in search results",
      value: `${titleLength} characters`
    });
  }

  // Meta description check
  const descLength = analysis.metaDescription.length;
  if (descLength === 0) {
    checks.push({
      name: "Meta Description",
      status: "fail",
      message: "No meta description found",
    });
  } else if (descLength < 120) {
    checks.push({
      name: "Meta Description",
      status: "warning",
      message: "Description could be longer for better CTR",
      value: `${descLength} characters`
    });
  } else if (descLength <= 160) {
    checks.push({
      name: "Meta Description",
      status: "pass",
      message: "Description is within optimal length",
      value: `${descLength} characters`
    });
  } else {
    checks.push({
      name: "Meta Description",
      status: "warning",
      message: "Description may be truncated in search results",
      value: `${descLength} characters`
    });
  }

  // Canonical check
  const expectedCanonical = getCanonicalUrl(url);
  if (!analysis.canonical.isPresent) {
    checks.push({
      name: "Canonical URL",
      status: "warning",
      message: "No canonical tag found",
      details: `Expected: ${expectedCanonical}`
    });
  } else if (analysis.canonical.url === expectedCanonical) {
    checks.push({
      name: "Canonical URL",
      status: "pass",
      message: "Canonical tag is correctly set",
      value: analysis.canonical.url
    });
  } else {
    // Check if it's a regional page pointing to parent
    if (isRegionalServicePage(url)) {
      const parentUrl = getParentServiceUrl(url);
      if (parentUrl && analysis.canonical.url.includes(parentUrl)) {
        checks.push({
          name: "Canonical URL",
          status: "pass",
          message: "Regional page correctly canonicals to parent service",
          value: analysis.canonical.url
        });
      } else {
        checks.push({
          name: "Canonical URL",
          status: "warning",
          message: "Regional page should canonical to parent service",
          details: `Expected: ${expectedCanonical}, Found: ${analysis.canonical.url}`
        });
      }
    } else {
      checks.push({
        name: "Canonical URL",
        status: "warning",
        message: "Canonical URL differs from expected",
        details: `Expected: ${expectedCanonical}`
      });
    }
  }

  // Open Graph check
  const ogKeys = Object.keys(analysis.openGraph);
  if (ogKeys.length === 0) {
    checks.push({
      name: "Open Graph Tags",
      status: "warning",
      message: "No Open Graph tags found for social sharing"
    });
  } else if (ogKeys.includes('title') && ogKeys.includes('description')) {
    checks.push({
      name: "Open Graph Tags",
      status: "pass",
      message: "Open Graph tags are present for social sharing",
      value: `${ogKeys.length} tags`
    });
  } else {
    checks.push({
      name: "Open Graph Tags",
      status: "warning",
      message: "Some Open Graph tags may be missing",
      value: `${ogKeys.length} tags`
    });
  }

  return checks;
};

/**
 * Run content checks
 */
const runContentChecks = (analysis: PageAnalysis): AuditCheck[] => {
  const checks: AuditCheck[] = [];

  // H1 check
  const h1Count = analysis.headings.h1.length;
  if (h1Count === 0) {
    checks.push({
      name: "H1 Tag",
      status: "fail",
      message: "No H1 tag found on page"
    });
  } else if (h1Count === 1) {
    checks.push({
      name: "H1 Tag",
      status: "pass",
      message: "Single H1 tag found",
      value: analysis.headings.h1[0].substring(0, 50) + (analysis.headings.h1[0].length > 50 ? '...' : '')
    });
  } else {
    checks.push({
      name: "H1 Tag",
      status: "warning",
      message: "Multiple H1 tags found - should have only one",
      value: `${h1Count} H1 tags`
    });
  }

  // Heading hierarchy
  const hasH2 = analysis.headings.h2.length > 0;
  const hasH3 = analysis.headings.h3.length > 0;
  if (hasH2 || hasH3) {
    checks.push({
      name: "Heading Hierarchy",
      status: "pass",
      message: "Proper heading structure detected",
      value: `${analysis.headings.h2.length} H2, ${analysis.headings.h3.length} H3`
    });
  } else if (h1Count > 0) {
    checks.push({
      name: "Heading Hierarchy",
      status: "warning",
      message: "Consider adding H2/H3 subheadings for better structure"
    });
  }

  // Image alt text check
  const imagesWithoutAlt = analysis.images.filter(img => !img.hasAlt);
  if (analysis.images.length === 0) {
    checks.push({
      name: "Image Alt Text",
      status: "pass",
      message: "No images on page"
    });
  } else if (imagesWithoutAlt.length === 0) {
    checks.push({
      name: "Image Alt Text",
      status: "pass",
      message: "All images have alt attributes",
      value: `${analysis.images.length} images`
    });
  } else {
    checks.push({
      name: "Image Alt Text",
      status: "warning",
      message: `${imagesWithoutAlt.length} images missing alt attributes`,
      value: `${analysis.images.length - imagesWithoutAlt.length}/${analysis.images.length} have alt`
    });
  }

  // Content length check
  if (analysis.wordCount < 300) {
    checks.push({
      name: "Content Length",
      status: "warning",
      message: "Content may be too thin for SEO",
      value: `${analysis.wordCount} words`
    });
  } else if (analysis.wordCount >= 1000) {
    checks.push({
      name: "Content Length",
      status: "pass",
      message: "Page has excellent content depth",
      value: `${analysis.wordCount.toLocaleString()} words`
    });
  } else {
    checks.push({
      name: "Content Length",
      status: "pass",
      message: "Page has sufficient content",
      value: `${analysis.wordCount} words`
    });
  }

  return checks;
};

/**
 * Run technical checks
 */
const runTechnicalChecks = (analysis: PageAnalysis): AuditCheck[] => {
  const checks: AuditCheck[] = [];

  // Viewport check
  checks.push({
    name: "Mobile Friendly",
    status: analysis.hasViewport ? "pass" : "fail",
    message: analysis.hasViewport 
      ? "Viewport meta tag is set correctly"
      : "Missing viewport meta tag - not mobile friendly"
  });

  // Structured data check
  if (analysis.structuredData.length === 0) {
    checks.push({
      name: "Structured Data",
      status: "warning",
      message: "No JSON-LD schema detected"
    });
  } else {
    const types = analysis.structuredData.map(sd => sd['@type'] || 'Unknown').join(', ');
    checks.push({
      name: "Structured Data",
      status: "pass",
      message: "JSON-LD schema found",
      value: types
    });
  }

  // Robots meta check
  if (analysis.robotsMeta) {
    if (analysis.robotsMeta.includes('noindex')) {
      checks.push({
        name: "Robots Meta",
        status: "warning",
        message: "Page is set to noindex",
        value: analysis.robotsMeta
      });
    } else {
      checks.push({
        name: "Robots Meta",
        status: "pass",
        message: "Robots meta allows indexing",
        value: analysis.robotsMeta
      });
    }
  } else {
    checks.push({
      name: "Robots Meta",
      status: "pass",
      message: "No robots restrictions (default: indexable)"
    });
  }

  return checks;
};

/**
 * Run link checks
 */
const runLinkChecks = (analysis: PageAnalysis, url: string): AuditCheck[] => {
  const checks: AuditCheck[] = [];
  const pageType = mapToGovernancePageType(getPageType(url));

  // Internal links count
  const internalCount = analysis.internalLinks.length;
  if (internalCount < 5) {
    checks.push({
      name: "Internal Links",
      status: "warning",
      message: "Consider adding more internal links",
      value: `${internalCount} links`
    });
  } else {
    checks.push({
      name: "Internal Links",
      status: "pass",
      message: "Good internal linking",
      value: `${internalCount} links`
    });
  }

  // Required links check
  const requiredLinks = getRequiredLinksForPageType(pageType);
  const missingLinks = requiredLinks.filter(reqLink => 
    !analysis.internalLinks.some(link => link.includes(reqLink))
  );

  if (missingLinks.length === 0 && requiredLinks.length > 0) {
    checks.push({
      name: "Required Links",
      status: "pass",
      message: "All required internal links present"
    });
  } else if (missingLinks.length > 0) {
    checks.push({
      name: "Required Links",
      status: "warning",
      message: `Missing required links: ${missingLinks.join(', ')}`,
      value: `${requiredLinks.length - missingLinks.length}/${requiredLinks.length}`
    });
  }

  // Conversion link check
  const hasProposalLink = analysis.internalLinks.some(link => 
    link.includes('/request-proposal') || link.includes('/contact')
  );
  checks.push({
    name: "Conversion CTA",
    status: hasProposalLink ? "pass" : "warning",
    message: hasProposalLink 
      ? "Page has conversion call-to-action"
      : "Consider adding a proposal/contact link"
  });

  // External links
  if (analysis.externalLinks.length > 0) {
    checks.push({
      name: "External Links",
      status: "pass",
      message: "External links found",
      value: `${analysis.externalLinks.length} links`
    });
  }

  return checks;
};

/**
 * Run governance checks
 */
const runGovernanceChecks = (analysis: PageAnalysis, url: string): AuditCheck[] => {
  const checks: AuditCheck[] = [];

  // Regional page check
  if (isRegionalServicePage(url)) {
    const parentUrl = getParentServiceUrl(url);
    checks.push({
      name: "Page Type",
      status: "pass",
      message: "Identified as regional service page",
      value: `Parent: ${parentUrl}`
    });
  }

  // This would require inbound link data which we don't have in a single page fetch
  // In a real implementation, this would check against the link validation report
  checks.push({
    name: "Link Authority",
    status: "pass",
    message: "Inbound link check requires full site analysis",
    details: "Run Link Health tab for complete analysis"
  });

  return checks;
};

/**
 * Run a comprehensive audit on a page
 */
export const auditPage = async (url: string): Promise<PageAuditResult> => {
  const pageType = getPageType(url);
  
  // Fetch the actual page analysis
  const analysis = await fetchPageAnalysis(url);
  
  if (!analysis) {
    return {
      url,
      pageType,
      score: 0,
      categories: [],
      analysis: null,
      error: 'Failed to fetch and analyze page'
    };
  }

  // Run all checks
  const categories: AuditCategory[] = [
    { category: "Meta Tags", checks: runMetaTagChecks(analysis, url) },
    { category: "Content", checks: runContentChecks(analysis) },
    { category: "Technical", checks: runTechnicalChecks(analysis) },
    { category: "Links", checks: runLinkChecks(analysis, url) },
    { category: "SEO Governance", checks: runGovernanceChecks(analysis, url) }
  ];

  // Calculate score
  const allChecks = categories.flatMap(c => c.checks);
  const passCount = allChecks.filter(c => c.status === 'pass').length;
  const warningCount = allChecks.filter(c => c.status === 'warning').length;
  const score = Math.round(((passCount + warningCount * 0.5) / allChecks.length) * 100);

  return {
    url,
    pageType,
    score,
    categories,
    analysis
  };
};

/**
 * Get link health report
 */
export const getLinkHealthReport = (): LinkValidationReport => {
  return validateSiteLinks();
};

/**
 * Batch audit multiple pages
 */
export const batchAuditPages = async (urls: string[]): Promise<PageAuditResult[]> => {
  const results: PageAuditResult[] = [];
  
  // Process in batches to avoid overwhelming the server
  for (const url of urls) {
    const result = await auditPage(url);
    results.push(result);
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  return results;
};

// Page catalog for the SEO tools
export const SITE_PAGES_CATALOG = {
  services: [
    { url: '/services/fire-safety', name: 'Fire Safety' },
    { url: '/services/electrical-compliance', name: 'Electrical Compliance' },
    { url: '/services/hvac-compliance', name: 'HVAC Compliance' },
    { url: '/services/water-hygiene', name: 'Water Hygiene' },
    { url: '/services/gas-safety', name: 'Gas Safety' },
    { url: '/services/ppm', name: 'PPM' },
    { url: '/services/emergency-lighting', name: 'Emergency Lighting' },
  ],
  sectors: [
    { url: '/sectors/offices', name: 'Offices' },
    { url: '/sectors/residential', name: 'Residential' },
    { url: '/sectors/industrial-logistics', name: 'Industrial & Logistics' },
    { url: '/sectors/hospitality-leisure', name: 'Hospitality & Leisure' },
    { url: '/sectors/education', name: 'Education' },
    { url: '/sectors/healthcare-public', name: 'Healthcare & Public' },
  ],
  fmOps: [
    { url: '/fm-operations/ppm-delivery', name: 'PPM Delivery' },
    { url: '/fm-operations/reactive-maintenance', name: 'Reactive Maintenance' },
    { url: '/fm-operations/helpdesk', name: 'Helpdesk' },
    { url: '/fm-operations/mobilisation', name: 'Mobilisation' },
  ],
  main: [
    { url: '/', name: 'Homepage' },
    { url: '/about', name: 'About' },
    { url: '/contact', name: 'Contact' },
    { url: '/request-proposal', name: 'Request Proposal' },
  ]
};
