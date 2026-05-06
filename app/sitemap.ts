import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/caseStudies';
import { resources } from '@/lib/resources';
import { episodes } from '@/lib/buildingWalk';
import { academyCourses } from '@/lib/academy';
import { partnerTypes } from '@/lib/partners';
import { locations } from '@/lib/locations';
import { sectors } from '@/lib/sectors';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.entirefm.com';

  const staticRoutePaths = [
    '/',
    '/about',
    '/academy',
    '/arena-facilities-management',
    '/awards',
    '/blog',
    '/building-walk',
    '/careers',
    '/case-studies',
    '/commercial-facilities-management',
    '/compare',
    '/compliance-pack',
    '/compliance-risk-diagnostic',
    '/contact',
    '/coverage',
    '/education-facilities-management',
    '/entirecafm',
    '/esg',
    '/fm-insights',
    '/health-safety',
    '/industrial-facilities-management',
    '/innovation',
    '/integrations',
    '/leadership',
    '/link-health',
    '/locations',
    '/marketplace',
    '/partners',
    '/partnerships',
    '/request-proposal',
    '/residential-facilities-management',
    '/resources',
    '/retail-facilities-management',
    '/search',
    '/sectors',
    '/services',
    '/services/building-fabric',
    '/services/building-inspections',
    '/services/commercial-plumbing',
    '/services/critical-infrastructure',
    '/services/data-centre-cooling-compliance',
    '/services/dilapidation-compliance',
    '/services/disaster-recovery',
    '/services/dock-leveller-maintenance',
    '/services/drainage-cctv-surveys',
    '/services/drone-inspections',
    '/services/dry-riser-testing',
    '/services/electrical',
    '/services/electrical-compliance',
    '/services/emergency-lighting',
    '/services/emergency-response',
    '/services/emergency-systems',
    '/services/energy-audits',
    '/services/energy-optimisation',
    '/services/evacuation-chair-servicing',
    '/services/fire-alarms',
    '/services/fire-safety',
    '/services/gas-safety',
    '/services/general-maintenance',
    '/services/generator-maintenance',
    '/services/hard-fm',
    '/services/hard-services',
    '/services/hvac',
    '/services/hvac-compliance',
    '/services/industrial-cleaning',
    '/services/leak-detection-repair',
    '/services/lifting-equipment',
    '/services/lightning-protection-testing',
    '/services/load-bank-testing',
    '/services/loading-bay-safety-systems',
    '/services/me-services',
    '/services/out-of-hours-support',
    '/services/plumbing',
    '/services/ppm',
    '/services/pump-room-maintenance',
    '/services/pump-station-servicing',
    '/services/roller-shutter-maintenance',
    '/services/smoke-vent-systems',
    '/services/soft-fm',
    '/services/total-facilities-management',
    '/services/ups-maintenance',
    '/services/waste-compliance',
    '/services/water-hygiene',
    '/sitemap',
    '/social-value',
    '/suppliers',
    '/sustainability',
    '/technology',
    '/tools/compliance-checker',
    '/tools/fm-health-check',
    '/tools/fm-roi-calculator',
    '/tools/ppm-estimator',
    '/visual-standards',
    '/why-entirefm',
    '/why-switch',
  ];

  const staticRoutes = staticRoutePaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' || route === '/' ? 1 : 0.8,
  }));

  // Dynamic Locations
  const locationRoutes = locations.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Sectors
  const sectorRoutes = sectors.map((sec) => ({
    url: `${baseUrl}/${sec.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Services
  const serviceRoutes = services.map((srv) => ({
    url: `${baseUrl}/${srv.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Case Studies
  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Resources
  const resourceRoutes = resources.map((ra) => ({
    url: `${baseUrl}/resources/${ra.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic Academy Courses
  const academyRoutes = academyCourses.map((course) => ({
    url: `${baseUrl}/academy/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Building Walk Episodes
  const episodeRoutes = episodes.map((ep) => ({
    url: `${baseUrl}/building-walk/${ep.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Partner Types
  const partnerRoutes = partnerTypes.map((partner) => ({
    url: `${baseUrl}/partners/${partner.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes, 
    ...locationRoutes,
    ...sectorRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes, 
    ...resourceRoutes, 
    ...academyRoutes, 
    ...episodeRoutes,
    ...partnerRoutes,
  ];
}
