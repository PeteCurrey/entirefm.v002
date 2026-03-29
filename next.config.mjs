/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
  // Turbopack is enabled by default in Next.js 16, but if we need custom config:
  // turbopack: { ... },
  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      // Legacy FM Insights to Resources Hub
      {
        source: '/fm-insights/:slug',
        destination: '/resources/:slug',
        permanent: true,
      },
      // Normalize case-sensitive location paths (discovered in crawl)
      {
        source: '/services/:service/Manchester',
        destination: '/services/:service/manchester',
        permanent: true,
      },
      {
        source: '/services/:service/London',
        destination: '/services/:service/london',
        permanent: true,
      },
      {
        source: '/services/:service/Birmingham',
        destination: '/services/:service/birmingham',
        permanent: true,
      },
      {
        source: '/services/:service/Leeds',
        destination: '/services/:service/leeds',
        permanent: true,
      },
      {
        source: '/services/:service/Sheffield',
        destination: '/services/:service/sheffield',
        permanent: true,
      },
      {
        source: '/services/:service/Derby',
        destination: '/services/:service/derby',
        permanent: true,
      },
      {
        source: '/services/:service/Nottingham',
        destination: '/services/:service/nottingham',
        permanent: true,
      },
      {
        source: '/services/:service/Lincoln',
        destination: '/services/:service/lincoln',
        permanent: true,
      },
      {
        source: '/services/:service/Chesterfield',
        destination: '/services/:service/chesterfield',
        permanent: true,
      },
      // Common missing or renamed routes
      {
        source: '/services/compliance',
        destination: '/services/ppm-compliance',
        permanent: true,
      },
      {
        source: '/compliance-diagnostic',
        destination: '/tools/fm-health-check',
        permanent: true,
      },
      {
        source: '/tools/risk-diagnostic',
        destination: '/tools/fm-health-check',
        permanent: true,
      },
      {
        source: '/fm-operations/knowledge-base',
        destination: '/fm-insights',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
