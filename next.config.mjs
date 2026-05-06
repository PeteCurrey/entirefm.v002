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
      // ── Legacy & renamed contact ──────────────────────────────────────
      { source: '/contact-us', destination: '/contact', permanent: true },

      // ── Legacy FM Insights → Resources Hub ───────────────────────────
      // NOTE: /fm-insights (index) must NOT be redirected – it has its own page
      { source: '/fm-insights/:slug', destination: '/resources/:slug', permanent: true },

      // ── Case-sensitive city service URLs → lowercase ─────────────────
      { source: '/services/:service/Manchester',   destination: '/services/:service/manchester',   permanent: true },
      { source: '/services/:service/London',       destination: '/services/:service/london',       permanent: true },
      { source: '/services/:service/Birmingham',   destination: '/services/:service/birmingham',   permanent: true },
      { source: '/services/:service/Leeds',        destination: '/services/:service/leeds',        permanent: true },
      { source: '/services/:service/Sheffield',    destination: '/services/:service/sheffield',    permanent: true },
      { source: '/services/:service/Derby',        destination: '/services/:service/derby',        permanent: true },
      { source: '/services/:service/Nottingham',   destination: '/services/:service/nottingham',   permanent: true },
      { source: '/services/:service/Lincoln',      destination: '/services/:service/lincoln',      permanent: true },
      { source: '/services/:service/Chesterfield', destination: '/services/:service/chesterfield', permanent: true },

      // ── Renamed / aliased service routes ─────────────────────────────
      { source: '/services/compliance',                      destination: '/services/ppm',                                    permanent: true },
      { source: '/services/ppm-compliance',                  destination: '/services/ppm',                                    permanent: true },
      { source: '/services/hard-fm-services',                destination: '/services/hard-services',                          permanent: true },
      { source: '/services/hard-services-fm',                destination: '/services/hard-services',                          permanent: true },
      { source: '/services/fire-suppression-systems',        destination: '/services/fire-suppression-systems-novec-fm200',   permanent: true },
      { source: '/services/access-control-systems',          destination: '/services/access-control',                         permanent: true },
      { source: '/services/smart-building-iot',              destination: '/services/smart-building-io-t',                    permanent: true },
      { source: '/services/drone-inspection',                destination: '/services/drone-inspections',                      permanent: true },
      { source: '/services/soft-fm-services',                destination: '/services/soft-fm',                                permanent: true },

      // ── Sector URL corrections ────────────────────────────────────────
      { source: '/sectors/healthcare',              destination: '/sectors/healthcare-public',    permanent: true },
      { source: '/sectors/hospitality',             destination: '/sectors/hospitality-leisure',  permanent: true },
      { source: '/sectors/residential',             destination: '/sectors/residential-pbsa',     permanent: true },
      { source: '/sectors/aviation',                destination: '/sectors/aviation-travel-hub',  permanent: true },
      { source: '/sectors/construction-developments', destination: '/sectors',                    permanent: true },

      // ── FM Operations sub-pages (no content – redirect to parent) ────
      { source: '/fm-operations/knowledge-base',     destination: '/fm-insights',   permanent: true },
      { source: '/fm-operations/occupier-experience', destination: '/fm-operations', permanent: true },
      { source: '/fm-operations/fm-strategy',        destination: '/fm-operations', permanent: true },
      { source: '/fm-operations/leads',              destination: '/fm-operations', permanent: true },
      { source: '/fm-operations/ppm-delivery',       destination: '/fm-operations', permanent: true },
      { source: '/fm-operations/asset-lifecycle',    destination: '/fm-operations', permanent: true },

      // ── Case study sub-pages without dedicated content ────────────────
      { source: '/case-studies/aviation',               destination: '/case-studies', permanent: true },
      { source: '/case-studies/corporate',              destination: '/case-studies', permanent: true },
      { source: '/case-studies/corporate-office-london', destination: '/case-studies', permanent: true },
      { source: '/case-studies/engineering',            destination: '/case-studies', permanent: true },
      { source: '/case-studies/healthcare',             destination: '/case-studies', permanent: true },
      { source: '/case-studies/hospitality',            destination: '/case-studies', permanent: true },
      { source: '/case-studies/logistics',              destination: '/case-studies', permanent: true },
      { source: '/case-studies/service-stations',       destination: '/case-studies', permanent: true },

      // ── Location pages → nearest geo-landing page ────────────────────
      { source: '/locations/birmingham',    destination: '/fm-birmingham', permanent: true },
      { source: '/locations/chesterfield',  destination: '/fm-chesterfield', permanent: true },
      { source: '/locations/leeds',         destination: '/fm-leeds',       permanent: true },
      { source: '/locations/manchester',    destination: '/facilities-management-manchester', permanent: true },
      { source: '/locations/sheffield',     destination: '/fm-sheffield',   permanent: true },
      { source: '/locations/liverpool',     destination: '/contact',        permanent: true },
      { source: '/locations/nottingham',    destination: '/fm-nottingham',  permanent: true },
      { source: '/locations/derby',         destination: '/fm-derby',       permanent: true },

      // ── Legacy geo-landing URL variants ──────────────────────────────
      { source: '/fm-manchester',                    destination: '/facilities-management-manchester',  permanent: true },
      { source: '/facilities-management-derby',      destination: '/fm-derby',       permanent: true },
      { source: '/facilities-management-midlands',   destination: '/facilities-management-in-the-midlands', permanent: true },
      { source: '/facilities-management-oxford',     destination: '/contact',        permanent: true },
      { source: '/facilities-management-lincoln',    destination: '/fm-lincoln', permanent: true },
      { source: '/facilities-management-liverpool',  destination: '/fm-liverpool', permanent: true },
      { source: '/facilities-management-leeds',      destination: '/fm-leeds',       permanent: true },
      { source: '/facilities-management-doncaster',  destination: '/contact',        permanent: true },
      { source: '/fm-telford',     destination: '/facilities-management-in-telford', permanent: true },
      { source: '/facilities-management-birmingham', destination: '/fm-birmingham', permanent: true },
      { source: '/facilities-management-chesterfield', destination: '/fm-chesterfield', permanent: true },
      { source: '/fm-doncaster',   destination: '/contact',                          permanent: true },

      // ── Soft-services sub-pages ───────────────────────────────────────
      { source: '/soft-services/waste-recycling',      destination: '/services/waste-compliance', permanent: true },
      { source: '/soft-services/specialist-cleaning',  destination: '/services/soft-fm',          permanent: true },
      { source: '/soft-services/concierge',            destination: '/services/soft-fm',          permanent: true },
      { source: '/soft-services/:path*',               destination: '/services/soft-fm',          permanent: true },

      // ── Integrations sub-pages (index page exists) ───────────────────
      { source: '/integrations/mycompliance',     destination: '/integrations', permanent: true },
      { source: '/integrations/mri-qube',         destination: '/integrations', permanent: true },
      { source: '/integrations/concept-evolution', destination: '/integrations', permanent: true },

      // ── Tools ─────────────────────────────────────────────────────────
      { source: '/tools/water-risk-grader', destination: '/tools/fm-health-check', permanent: true },
      { source: '/tools/risk-diagnostic',   destination: '/tools/fm-health-check', permanent: true },
      { source: '/compliance-diagnostic',   destination: '/tools/fm-health-check', permanent: true },
      { source: '/compliance-risk-diagnostic', destination: '/tools/compliance-checker', permanent: true },

      // ── Building Walk ─────────────────────────────────────────────────
      { source: '/building-walk/retail', destination: '/building-walk', permanent: true },

      // ── Legacy legal page URLs ────────────────────────────────────────
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-conditions', destination: '/terms',  permanent: true },
    ];
  },
};

export default nextConfig;
