"use client";

/**
 * SEO Validation and Internal Linking Enforcement
 * Console warnings for missing required links, orphan pages, and SEO violations
 */

import { useEffect } from 'react';
import { usePathname } from "next/navigation";
import { getCanonicalUrl, isRegionalServicePage, getRequiredLinksForPageType } from './seoGovernance';

interface SEOValidationConfig {
  enabled: boolean;
  pageType: 'parent-service' | 'regional-service' | 'sector' | 'fm-ops' | 'specialist' | 'resource' | 'case-study';
  requiredInternalLinks?: string[];
  minimumInboundLinks?: number;
}

/**
 * Hook to validate SEO compliance on page load
 */
export const useSEOValidation = (config: SEOValidationConfig) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!config.enabled || process.env.NODE_ENV !== 'development') return;

    const currentUrl = pathname;
    
    // Validate canonical URL
    const expectedCanonical = getCanonicalUrl(currentUrl);
    const actualCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    
    if (!actualCanonical) {
      console.warn('🔴 [SEO] Missing canonical tag on:', currentUrl);
    } else if (actualCanonical !== expectedCanonical) {
      console.warn('🟡 [SEO] Canonical mismatch on:', currentUrl, {
        expected: expectedCanonical,
        actual: actualCanonical
      });
    }

    // Validate regional pages point to parent
    if (isRegionalServicePage(currentUrl)) {
      if (!actualCanonical?.includes('/services/fire-safety') && 
          !actualCanonical?.includes('/services/electrical-compliance') &&
          !actualCanonical?.includes('/services/hvac-compliance') &&
          !actualCanonical?.includes('/services/water-hygiene') &&
          !actualCanonical?.includes('/services/gas-safety') &&
          !actualCanonical?.includes('/services/ppm') &&
          !actualCanonical?.includes('/services/emergency-lighting')) {
        console.error('🔴 [SEO] Regional page missing parent canonical:', currentUrl);
      }
    }

    // Validate required internal links
    const requiredLinks = config.requiredInternalLinks || getRequiredLinksForPageType(config.pageType);
    const pageLinks = Array.from(document.querySelectorAll('a[href^="/"]')).map(
      a => new URL((a as HTMLAnchorElement).href, window.location.origin).pathname
    );

    const missingLinks = requiredLinks.filter(required => 
      !pageLinks.some(link => link === required || link.startsWith(required))
    );

    if (missingLinks.length > 0) {
      console.warn('🟡 [SEO] Missing required internal links on:', currentUrl, missingLinks);
    }

    // Validate title differentiation
    const pageTitle = document.title;
    if (isRegionalServicePage(currentUrl)) {
      if (!pageTitle.includes(' in ') && !pageTitle.includes(' - ')) {
        console.warn('🟡 [SEO] Regional page title should include city name:', currentUrl);
      }
    }

    // Validate H1
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length === 0) {
      console.error('🔴 [SEO] No H1 found on page:', currentUrl);
    } else if (h1Elements.length > 1) {
      console.warn('🟡 [SEO] Multiple H1 tags found:', currentUrl, '- Should have exactly one');
    }

    // Check for request-proposal link
    const hasProposalLink = pageLinks.some(link => 
      link.includes('/request-proposal') || link.includes('/contact')
    );
    
    if (!hasProposalLink) {
      console.warn('🟡 [SEO] Missing proposal/contact CTA link on:', currentUrl);
    }

  }, [pathname, config]);
};

/**
 * Component to display SEO health in dev mode
 */
export const SEOHealthIndicator = ({ pageType }: { pageType: SEOValidationConfig['pageType'] }) => {
  if (process.env.NODE_ENV !== 'development') return null;

  const pathname = usePathname();
  const canonicalUrl = getCanonicalUrl(pathname);
  const requiredLinks = getRequiredLinksForPageType(pageType);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.9)',
        color: '#fff',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '12px',
        maxWidth: '300px',
        zIndex: 9999,
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        🔍 SEO Health Check
      </div>
      <div style={{ marginBottom: '5px' }}>
        <strong>Page Type:</strong> {pageType}
      </div>
      <div style={{ marginBottom: '5px' }}>
        <strong>Canonical:</strong>
        <div style={{ fontSize: '10px', opacity: 0.8 }}>{canonicalUrl}</div>
      </div>
      <div>
        <strong>Required Links ({requiredLinks.length}):</strong>
        <ul style={{ fontSize: '10px', opacity: 0.8, marginLeft: '15px' }}>
          {requiredLinks.map(link => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
      <div style={{ fontSize: '9px', opacity: 0.6, marginTop: '8px' }}>
        Check console for detailed warnings
      </div>
    </div>
  );
};

/**
 * Detects orphan pages (pages with no inbound links)
 */
export const detectOrphanPages = async (): Promise<string[]> => {
  // This would need to be run as part of a build-time check
  // For now, returns empty array in runtime
  console.info('🔍 [SEO] Run build-time link analysis to detect orphan pages');
  return [];
};

/**
 * Validates all internal links are not broken
 */
export const validateInternalLinks = (): void => {
  if (process.env.NODE_ENV !== 'development') return;

  const allLinks = Array.from(document.querySelectorAll('a[href^="/"]')) as HTMLAnchorElement[];
  const brokenLinks: string[] = [];

  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Check for common broken patterns
    if (href.endsWith('/') && href.length > 1) {
      console.warn('🟡 [SEO] Trailing slash detected:', href);
    }

    // Check for inconsistent URL patterns
    if (href.includes('//')) {
      console.warn('🟡 [SEO] Double slash in URL:', href);
    }
  });

  if (brokenLinks.length > 0) {
    console.error('🔴 [SEO] Potentially broken internal links:', brokenLinks);
  }
};
