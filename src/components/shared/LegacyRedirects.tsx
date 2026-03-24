"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";

/**
 * Client-side redirect handler for legacy URLs
 * Preserves SEO ranking signals from old site structure
 * 
 * This component handles redirects when users directly access legacy URLs
 * Server-side redirects (_redirects, vercel.json) are preferred for SEO
 */

interface RedirectRule {
  from: string;
  to: string;
  permanent: boolean;
}

const redirectRules: RedirectRule[] = [
  // Legacy location URL redirects - all facilities-management-* URLs now have dedicated pages

  // SECTOR MATCH REDIRECTS
  { from: '/retail-facilities-management', to: '/sectors/retail-hospitality', permanent: true },
  
  { from: '/industrial-facilities-management', to: '/sectors/industrial-logistics', permanent: true },
  { from: '/airport-facilities-management', to: '/sectors/airports', permanent: true },
  { from: '/hotel-facilities-management', to: '/sectors/hotels-leisure', permanent: true },
  { from: '/residential-facilities-management', to: '/sectors/residential', permanent: true },
  { from: '/service-station-fm', to: '/sectors/logistics-parks', permanent: true },

  // SERVICE MATCH REDIRECTS
  { from: '/hvac-contractor', to: '/services/hvac-compliance', permanent: true },
  { from: '/safety-critical-emergency-systems', to: '/services/emergency-systems', permanent: true },
  { from: '/plumbing-gas', to: '/services/commercial-plumbing', permanent: true },
  { from: '/ppm', to: '/services/ppm', permanent: true },
  { from: '/hard-services', to: '/services/hard-services-fm', permanent: true },
  { from: '/mechanical-electrical', to: '/services/me-services', permanent: true },
  { from: '/mechanical-electrical/emergency-light-testing', to: '/services/emergency-lighting', permanent: true },

  // INDUSTRIAL & SPECIALIST REDIRECTS
  { from: '/industrial-cleaning', to: '/soft-services/specialist-cleaning', permanent: true },
  { from: '/aerial-drone-building-inspection', to: '/services/drone-inspections', permanent: true },
  { from: '/building-inspecting-testing', to: '/services/building-inspections', permanent: true },

  // CLIENT PORTAL & AUTHENTICATION (Temporary 302)
  { from: '/client-login', to: '/resources', permanent: false },
  { from: '/client-login/account-registration', to: '/resources', permanent: false },

  // BLOG & RESOURCE CONTENT
  { from: '/blog', to: '/resources', permanent: true },
  { from: '/facilities-management-glossary', to: '/resources', permanent: true },
];

export const LegacyRedirects = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname;
    
    // Check for exact match
    const exactMatch = redirectRules.find(rule => rule.from === currentPath);
    if (exactMatch) {
      router.replace(exactMatch.to);
      return;
    }

    // Check for blog/* pattern
    if (currentPath.startsWith('/blog/')) {
      router.replace('/resources');
      return;
    }

    // Remove trailing slash if present (except for root)
    if (currentPath.length > 1 && currentPath.endsWith('/')) {
      router.replace(currentPath.slice(0, -1));
    }
  }, [pathname, router]);

  return null;
};
