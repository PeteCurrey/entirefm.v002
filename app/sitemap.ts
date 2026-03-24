import { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/caseStudies';
import { resourceArticles } from '@/lib/resources';

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
  const resourceRoutes = resourceArticles.map((ra) => ({
    url: `${baseUrl}/resources/${ra.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...resourceRoutes];
}
