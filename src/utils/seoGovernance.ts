/**
 * SEO Governance & Link Validation Utilities
 * Ensures internal linking rules and canonical patterns are followed
 */

export interface PageType {
  type: 'parent-service' | 'regional-service' | 'sector' | 'fm-ops' | 'specialist' | 'resource' | 'case-study';
  url: string;
  requiredLinks?: string[];
  canonicalUrl?: string;
}

/**
 * Determines if a page is a regional service variant
 */
export const isRegionalServicePage = (url: string): boolean => {
  const regionalPattern = /\/services\/(fire|electrical|hvac|water|gas|ppm|emergency-lighting)\/(london|birmingham|manchester|leeds|sheffield|nottingham|derby|chesterfield|lincoln)/i;
  return regionalPattern.test(url);
};

/**
 * Gets the parent service URL for a regional page
 */
export const getParentServiceUrl = (regionalUrl: string): string | null => {
  const match = regionalUrl.match(/\/services\/(fire|electrical|hvac|water|gas|ppm|emergency-lighting)\//);
  if (!match) return null;
  
  const serviceMap: Record<string, string> = {
    'fire': '/services/fire-safety',
    'electrical': '/services/electrical-compliance',
    'hvac': '/services/hvac-compliance',
    'water': '/services/water-hygiene',
    'gas': '/services/gas-safety',
    'ppm': '/services/ppm',
    'emergency-lighting': '/services/emergency-lighting'
  };
  
  return serviceMap[match[1]] || null;
};

/**
 * Generates the correct canonical URL based on page type
 */
export const getCanonicalUrl = (currentUrl: string): string => {
  // Regional pages should canonical to parent
  if (isRegionalServicePage(currentUrl)) {
    const parentUrl = getParentServiceUrl(currentUrl);
    return parentUrl ? `https://entirefm.com${parentUrl}` : `https://entirefm.com${currentUrl}`;
  }
  
  // All other pages canonical to themselves
  return `https://entirefm.com${currentUrl}`;
};

/**
 * Generates differentiated page titles for regional vs parent pages
 */
export const generatePageTitle = (
  serviceName: string, 
  cityName?: string,
  suffix: string = "EntireFM"
): string => {
  if (cityName) {
    // Regional page pattern
    return `${serviceName} in ${cityName} | Local Testing & Statutory Compliance | ${suffix}`;
  }
  
  // Parent page pattern
  return `${serviceName} Compliance & Statutory Maintenance | ${suffix}`;
};

/**
 * Validates required internal links for a page type
 */
export const getRequiredLinksForPageType = (pageType: PageType['type']): string[] => {
  const requirements: Record<PageType['type'], string[]> = {
    'parent-service': [
      '/fm-operations/ppm-delivery',
      '/request-proposal',
      '/resources'
    ],
    'regional-service': [
      '/request-proposal'
    ],
    'sector': [
      '/request-proposal',
      '/resources'
    ],
    'fm-ops': [
      '/services/ppm',
      '/request-proposal'
    ],
    'specialist': [
      '/fm-operations/helpdesk',
      '/request-proposal'
    ],
    'resource': [
      '/request-proposal'
    ],
    'case-study': [
      '/request-proposal'
    ]
  };
  
  return requirements[pageType] || [];
};

/**
 * Checks if a page has minimum required inbound links
 */
export const hasMinimumInboundLinks = (inboundCount: number, pageType: PageType['type']): boolean => {
  const minimums: Record<PageType['type'], number> = {
    'parent-service': 5,
    'regional-service': 2,
    'sector': 5,
    'fm-ops': 3,
    'specialist': 3,
    'resource': 2,
    'case-study': 2
  };
  
  return inboundCount >= (minimums[pageType] || 0);
};

/**
 * Validates trailing slash consistency
 */
export const normalizeUrl = (url: string): string => {
  // Remove trailing slashes for consistency
  return url.replace(/\/$/, '');
};

/**
 * Detects potential keyword cannibalization between pages
 */
export const detectKeywordOverlap = (
  page1: { title: string; h1: string; keywords: string[] },
  page2: { title: string; h1: string; keywords: string[] }
): {
  hasOverlap: boolean;
  overlappingKeywords: string[];
  severity: 'low' | 'medium' | 'high';
} => {
  const overlapping = page1.keywords.filter(k => 
    page2.keywords.some(k2 => k2.toLowerCase() === k.toLowerCase())
  );
  
  const titleSimilar = page1.title.toLowerCase() === page2.title.toLowerCase();
  const h1Similar = page1.h1.toLowerCase() === page2.h1.toLowerCase();
  
  let severity: 'low' | 'medium' | 'high' = 'low';
  
  if (titleSimilar || h1Similar) {
    severity = 'high';
  } else if (overlapping.length >= 3) {
    severity = 'medium';
  }
  
  return {
    hasOverlap: overlapping.length > 0 || titleSimilar || h1Similar,
    overlappingKeywords: overlapping,
    severity
  };
};

/**
 * Console logger for SEO governance violations (dev mode only)
 */
export const logSEOViolation = (
  type: 'missing-canonical' | 'orphan-page' | 'missing-required-link' | 'keyword-conflict',
  details: Record<string, any>
) => {
  if (import.meta.env.DEV) {
    console.warn(`[SEO Governance] ${type}:`, details);
  }
};
