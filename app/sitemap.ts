import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/caseStudies';
import { resources } from '@/lib/resources';
import { episodes } from '@/lib/buildingWalk';
import { academyCourses } from '@/lib/academy';
import { partnerTypes } from '@/lib/partners';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.entirefm.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/case-studies',
    '/resources',
    '/services/hard-fm',
    '/services/soft-fm',
    '/services/ppm',
    '/services/total-facilities-management',
    '/tools/compliance-checker',
    '/tools/ppm-estimator',
    '/tools/tender-brief',
    '/tools/ppm-schedule-builder',
    '/tools/fm-health-check',
    '/tools/compliance-calendar',
    '/tools/fm-roi-calculator',
    '/academy',
    '/resources/document-vault',
    '/coverage',
    '/fm-market-report',
    '/building-walk',
    '/fm-intelligence',
    '/partners',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
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
    ...caseStudyRoutes, 
    ...resourceRoutes, 
    ...academyRoutes, 
    ...episodeRoutes,
    ...partnerRoutes, // Added dynamic partner routes
  ];
}
