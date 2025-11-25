/**
 * Internal Link Validation System
 * Analyzes site architecture for orphan pages, broken links, and conversion optimization
 */

export interface PageLinkData {
  url: string;
  title: string;
  inboundLinks: string[];
  outboundLinks: string[];
  hasProposalLink: boolean;
  hasContactLink: boolean;
  pageType: 'service' | 'sector' | 'location' | 'resource' | 'case-study' | 'fm-ops' | 'other';
}

export interface LinkValidationReport {
  orphanPages: PageLinkData[];
  lowInboundPages: PageLinkData[];
  missingConversionLinks: PageLinkData[];
  brokenLinks: { from: string; to: string; type: 'internal' | 'anchor' }[];
  healthScore: number;
  totalPages: number;
  totalLinks: number;
}

// Define all site routes manually (in production, this would be generated from router config)
const SITE_ROUTES = [
  // Main pages
  '/',
  '/about',
  '/contact',
  '/request-proposal',
  '/services',
  '/sectors',
  '/locations',
  '/resources',
  '/case-studies',
  
  // Services
  '/services/fire-safety',
  '/services/electrical-compliance',
  '/services/hvac-compliance',
  '/services/water-hygiene',
  '/services/gas-safety',
  '/services/ppm',
  '/services/emergency-lighting',
  '/services/emergency-systems',
  '/services/building-fabric',
  '/services/hard-services',
  
  // Regional services (7 core services × 9 cities = 63 pages)
  ...generateRegionalServiceUrls(),
  
  // Sectors
  '/sectors/offices',
  '/sectors/residential',
  '/sectors/industrial-logistics',
  '/sectors/hospitality-leisure',
  '/sectors/education',
  '/sectors/healthcare-public',
  '/sectors/airports',
  '/sectors/retail-service-stations',
  
  // Locations
  '/locations/london',
  '/locations/birmingham',
  '/locations/manchester',
  '/locations/leeds',
  '/locations/sheffield',
  '/locations/nottingham',
  '/locations/derby',
  '/locations/chesterfield',
  '/locations/lincoln',
  '/locations/leicester',
  '/locations/liverpool',
  
  // FM Operations
  '/fm-operations',
  '/fm-operations/ppm-delivery',
  '/fm-operations/reactive-maintenance',
  '/fm-operations/helpdesk',
  '/fm-operations/mobilisation',
  '/fm-operations/asset-lifecycle',
  '/fm-operations/business-continuity',
  '/fm-operations/fm-strategy',
  '/fm-operations/occupier-experience',
  '/fm-operations/tender-support',
  
  // Case Studies
  '/case-studies/corporate-hq',
  '/case-studies/aviation',
  '/case-studies/healthcare',
  '/case-studies/hospitality',
  '/case-studies/residential-pbsa',
  '/case-studies/industrial-plant',
  '/case-studies/service-stations',
  
  // Resources
  '/resources/compliance-calendar',
  '/resources/audit-framework',
  '/resources/eicr-manual',
  '/resources/fire-risk-guide',
  '/resources/legionella-guide',
  '/resources/switching-provider',
  
  // Company
  '/about/leadership',
  '/about/awards',
  '/about/careers',
  '/about/partnerships',
  '/sustainability',
  '/health-safety',
  '/innovation',
  '/technology',
];

function generateRegionalServiceUrls(): string[] {
  const services = ['fire', 'electrical', 'hvac', 'water', 'gas', 'ppm', 'emergency-lighting'];
  const cities = ['london', 'birmingham', 'manchester', 'leeds', 'sheffield', 'nottingham', 'derby', 'chesterfield', 'lincoln'];
  const urls: string[] = [];
  
  services.forEach(service => {
    cities.forEach(city => {
      urls.push(`/services/${service}/${city}`);
    });
  });
  
  return urls;
}

/**
 * Extracts all internal links from a page's HTML
 */
export const extractLinksFromPage = (url: string): string[] => {
  // In a real implementation, this would parse the actual component file
  // For now, we return mock data based on page type
  const links: string[] = [];
  
  // All pages should have header/footer links
  links.push('/', '/services', '/sectors', '/locations', '/about', '/contact');
  
  // Service pages link to related services and request-proposal
  if (url.includes('/services/')) {
    links.push('/request-proposal', '/fm-operations/ppm-delivery', '/resources');
  }
  
  // Sector pages link to services
  if (url.includes('/sectors/')) {
    links.push('/request-proposal', '/services/ppm', '/case-studies');
  }
  
  return [...new Set(links)]; // Remove duplicates
};

/**
 * Determines page type from URL
 */
export const getPageType = (url: string): PageLinkData['pageType'] => {
  if (url.includes('/services/')) return 'service';
  if (url.includes('/sectors/')) return 'sector';
  if (url.includes('/locations/')) return 'location';
  if (url.includes('/resources/')) return 'resource';
  if (url.includes('/case-studies/')) return 'case-study';
  if (url.includes('/fm-operations/')) return 'fm-ops';
  return 'other';
};

/**
 * Builds inbound link map for all pages
 */
export const buildInboundLinkMap = (): Map<string, string[]> => {
  const inboundMap = new Map<string, string[]>();
  
  // Initialize all pages
  SITE_ROUTES.forEach(route => {
    inboundMap.set(route, []);
  });
  
  // Build inbound links by analyzing outbound links from each page
  SITE_ROUTES.forEach(fromUrl => {
    const outboundLinks = extractLinksFromPage(fromUrl);
    outboundLinks.forEach(toUrl => {
      if (SITE_ROUTES.includes(toUrl)) {
        const existing = inboundMap.get(toUrl) || [];
        existing.push(fromUrl);
        inboundMap.set(toUrl, existing);
      }
    });
  });
  
  return inboundMap;
};

/**
 * Checks if a page has conversion links
 */
export const hasConversionLinks = (url: string): { hasProposal: boolean; hasContact: boolean } => {
  const links = extractLinksFromPage(url);
  return {
    hasProposal: links.includes('/request-proposal'),
    hasContact: links.includes('/contact'),
  };
};

/**
 * Validates all internal links across the site
 */
export const validateSiteLinks = (): LinkValidationReport => {
  const inboundMap = buildInboundLinkMap();
  const pageDataList: PageLinkData[] = [];
  const brokenLinks: LinkValidationReport['brokenLinks'] = [];
  
  // Build page data for each route
  SITE_ROUTES.forEach(url => {
    const outboundLinks = extractLinksFromPage(url);
    const inboundLinks = inboundMap.get(url) || [];
    const { hasProposal, hasContact } = hasConversionLinks(url);
    
    const pageData: PageLinkData = {
      url,
      title: formatUrlToTitle(url),
      inboundLinks,
      outboundLinks,
      hasProposalLink: hasProposal,
      hasContactLink: hasContact,
      pageType: getPageType(url),
    };
    
    pageDataList.push(pageData);
    
    // Check for broken links
    outboundLinks.forEach(link => {
      if (!SITE_ROUTES.includes(link) && link.startsWith('/')) {
        brokenLinks.push({
          from: url,
          to: link,
          type: 'internal',
        });
      }
    });
  });
  
  // Identify issues
  const orphanPages = pageDataList.filter(p => p.inboundLinks.length === 0);
  const lowInboundPages = pageDataList.filter(p => p.inboundLinks.length < 5 && p.inboundLinks.length > 0);
  const missingConversionLinks = pageDataList.filter(p => 
    !p.hasProposalLink && 
    !p.hasContactLink && 
    p.url !== '/' && 
    p.url !== '/request-proposal' &&
    p.url !== '/contact'
  );
  
  // Calculate health score
  const totalPages = pageDataList.length;
  const totalLinks = pageDataList.reduce((sum, p) => sum + p.outboundLinks.length, 0);
  const issueCount = orphanPages.length + lowInboundPages.length + missingConversionLinks.length + brokenLinks.length;
  const healthScore = Math.max(0, Math.min(100, 100 - (issueCount / totalPages) * 100));
  
  return {
    orphanPages,
    lowInboundPages,
    missingConversionLinks,
    brokenLinks,
    healthScore: Math.round(healthScore),
    totalPages,
    totalLinks,
  };
};

/**
 * Formats URL to readable title
 */
function formatUrlToTitle(url: string): string {
  if (url === '/') return 'Home';
  return url
    .split('/')
    .filter(Boolean)
    .map(segment => segment.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '))
    .join(' → ');
}

/**
 * Get minimum required inbound links by page type
 */
export const getMinimumInboundLinks = (pageType: PageLinkData['pageType']): number => {
  const minimums = {
    'service': 5,
    'sector': 5,
    'location': 5,
    'resource': 3,
    'case-study': 3,
    'fm-ops': 3,
    'other': 2,
  };
  return minimums[pageType];
};

/**
 * Exports validation report to console for development
 */
export const logValidationReport = (report: LinkValidationReport): void => {
  console.group('🔗 Site Link Validation Report');
  console.log(`Health Score: ${report.healthScore}/100`);
  console.log(`Total Pages: ${report.totalPages}`);
  console.log(`Total Internal Links: ${report.totalLinks}`);
  
  if (report.orphanPages.length > 0) {
    console.group(`🔴 Orphan Pages (${report.orphanPages.length})`);
    report.orphanPages.forEach(p => console.log(`- ${p.url}`));
    console.groupEnd();
  }
  
  if (report.lowInboundPages.length > 0) {
    console.group(`🟡 Low Inbound Links (${report.lowInboundPages.length})`);
    report.lowInboundPages.forEach(p => 
      console.log(`- ${p.url} (${p.inboundLinks.length} links)`)
    );
    console.groupEnd();
  }
  
  if (report.missingConversionLinks.length > 0) {
    console.group(`🟠 Missing Conversion Links (${report.missingConversionLinks.length})`);
    report.missingConversionLinks.forEach(p => console.log(`- ${p.url}`));
    console.groupEnd();
  }
  
  if (report.brokenLinks.length > 0) {
    console.group(`🔴 Broken Links (${report.brokenLinks.length})`);
    report.brokenLinks.forEach(l => console.log(`- ${l.from} → ${l.to}`));
    console.groupEnd();
  }
  
  console.groupEnd();
};
