import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// All site pages organized by category
const SITE_PAGES = {
  main: [
    { url: '/', name: 'Home' },
    { url: '/about', name: 'About Us' },
    { url: '/contact', name: 'Contact' },
    { url: '/careers', name: 'Careers' },
    { url: '/why-entirefm', name: 'Why EntireFM' },
    { url: '/leadership', name: 'Leadership' },
    { url: '/sustainability', name: 'Sustainability' },
    { url: '/innovation', name: 'Innovation' },
    { url: '/partnerships', name: 'Partnerships' },
    { url: '/awards', name: 'Awards' },
    { url: '/esg', name: 'ESG' },
    { url: '/health-safety', name: 'Health & Safety' },
    { url: '/social-value', name: 'Social Value' },
    { url: '/suppliers', name: 'Suppliers' },
  ],
  services: [
    { url: '/services', name: 'Services Overview' },
    { url: '/services/fire-safety', name: 'Fire Safety' },
    { url: '/services/electrical-compliance', name: 'Electrical Compliance' },
    { url: '/services/emergency-lighting', name: 'Emergency Lighting' },
    { url: '/services/water-hygiene', name: 'Water Hygiene' },
    { url: '/services/gas-safety', name: 'Gas Safety' },
    { url: '/services/hvac-compliance', name: 'HVAC Compliance' },
    { url: '/services/ppm', name: 'PPM' },
    { url: '/services/hard-services-fm', name: 'Hard Services FM' },
    { url: '/services/me-services', name: 'M&E Services' },
    { url: '/services/access-control', name: 'Access Control' },
    { url: '/services/emergency-systems', name: 'Emergency Systems' },
    { url: '/services/commercial-plumbing', name: 'Commercial Plumbing' },
    { url: '/services/building-inspections', name: 'Building Inspections' },
    { url: '/services/drone-inspections', name: 'Drone Inspections' },
    { url: '/services/emergency-response', name: 'Emergency Response' },
    { url: '/services/disaster-recovery', name: 'Disaster Recovery' },
    { url: '/services/space-planning', name: 'Space Planning' },
    { url: '/services/hard-fm', name: 'Hard FM' },
    { url: '/services/hvac', name: 'HVAC' },
    { url: '/services/electrical', name: 'Electrical' },
    { url: '/services/fire-alarms', name: 'Fire Alarms' },
    { url: '/services/sprinklers', name: 'Sprinklers & Risers' },
    { url: '/services/plumbing', name: 'Plumbing' },
    { url: '/services/building-fabric', name: 'Building Fabric' },
    { url: '/services/dry-riser-testing', name: 'Dry Riser Testing' },
    { url: '/services/lifting-equipment', name: 'Lifting Equipment' },
    { url: '/services/height-safety', name: 'Height Safety' },
    { url: '/services/smoke-vent-systems', name: 'Smoke Vent Systems' },
    { url: '/services/rising-mains', name: 'Rising Mains' },
    { url: '/services/fire-compartmentation-surveys', name: 'Fire Compartmentation Surveys' },
    { url: '/services/pump-room-maintenance', name: 'Pump Room Maintenance' },
    { url: '/services/plant-room-risk-assessments', name: 'Plant Room Risk Assessments' },
    { url: '/services/generator-maintenance', name: 'Generator Maintenance' },
    { url: '/services/load-bank-testing', name: 'Load Bank Testing' },
    { url: '/services/ups-maintenance', name: 'UPS Maintenance' },
    { url: '/services/data-centre-cooling-compliance', name: 'Data Centre Cooling' },
    { url: '/services/dock-leveller-maintenance', name: 'Dock Leveller Maintenance' },
    { url: '/services/roller-shutter-maintenance', name: 'Roller Shutter Maintenance' },
    { url: '/services/evacuation-chair-servicing', name: 'Evacuation Chair Servicing' },
    { url: '/services/car-park-co-monitoring', name: 'Car Park CO Monitoring' },
    { url: '/services/water-treatment-plant-maintenance', name: 'Water Treatment Maintenance' },
    { url: '/services/bms-integration-testing', name: 'BMS Integration Testing' },
    { url: '/services/smart-building-iot', name: 'Smart Building IoT' },
    { url: '/services/waste-compliance', name: 'Waste Compliance' },
    { url: '/services/water-optimisation', name: 'Water Optimisation' },
    { url: '/services/sustainability-monitoring', name: 'Sustainability Monitoring' },
    { url: '/services/cctv-maintenance', name: 'CCTV Maintenance' },
    { url: '/services/anpr-systems', name: 'ANPR Systems' },
    { url: '/services/access-control-advanced', name: 'Access Control Advanced' },
    { url: '/services/security-systems-healthcheck', name: 'Security Systems Healthcheck' },
    { url: '/services/drainage-cctv-surveys', name: 'Drainage CCTV Surveys' },
    { url: '/services/interceptor-maintenance', name: 'Interceptor Maintenance' },
    { url: '/services/pump-station-servicing', name: 'Pump Station Servicing' },
    { url: '/services/grease-trap-maintenance', name: 'Grease Trap Maintenance' },
    { url: '/services/fume-extraction-lev', name: 'Fume Extraction LEV' },
    { url: '/services/industrial-refrigeration', name: 'Industrial Refrigeration' },
    { url: '/services/mewp-safety-checks', name: 'MEWP Safety Checks' },
    { url: '/services/loading-bay-safety-systems', name: 'Loading Bay Safety' },
    { url: '/services/compressor-maintenance', name: 'Compressor Maintenance' },
    { url: '/services/bmu-cradle-servicing', name: 'BMU Cradle Servicing' },
    { url: '/services/mansafe-testing', name: 'Mansafe Testing' },
    { url: '/services/abseil-rail-certification', name: 'Abseil Rail Certification' },
    { url: '/services/roof-safety-inspections', name: 'Roof Safety Inspections' },
    { url: '/services/staircase-pressurisation', name: 'Staircase Pressurisation' },
    { url: '/services/car-park-fume-extraction', name: 'Car Park Fume Extraction' },
    { url: '/services/indoor-air-quality-testing', name: 'Indoor Air Quality Testing' },
    { url: '/services/energy-optimisation', name: 'Energy Optimisation' },
    { url: '/services/environmental-noise-surveys', name: 'Environmental Noise Surveys' },
    { url: '/services/air-filtration-hepa', name: 'Air Filtration HEPA' },
    { url: '/services/dilapidation-compliance', name: 'Dilapidation Compliance' },
    { url: '/services/front-of-house', name: 'Front of House' },
    { url: '/services/thermal-imaging-surveys', name: 'Thermal Imaging Surveys' },
    { url: '/services/power-quality-analysis', name: 'Power Quality Analysis' },
  ],
  criticalInfrastructure: [
    { url: '/services/critical/lightning-protection', name: 'Lightning Protection' },
    { url: '/services/critical/ups-maintenance', name: 'UPS Maintenance' },
    { url: '/services/critical/generator-maintenance', name: 'Generator Maintenance' },
    { url: '/services/critical/power-redundancy', name: 'Power Redundancy' },
    { url: '/services/critical/thermal-imaging', name: 'Thermal Imaging' },
    { url: '/services/critical/arc-flash-assessment', name: 'Arc Flash Assessment' },
    { url: '/services/critical/hv-switching', name: 'HV Switching' },
    { url: '/services/critical/power-quality', name: 'Power Quality' },
    { url: '/services/critical/data-room-audits', name: 'Data Room Audits' },
  ],
  sectors: [
    { url: '/sectors', name: 'Sectors Overview' },
    { url: '/sectors/offices', name: 'Offices' },
    { url: '/sectors/retail-hospitality', name: 'Retail & Hospitality' },
    { url: '/sectors/industrial-logistics', name: 'Industrial & Logistics' },
    { url: '/sectors/healthcare-public', name: 'Healthcare & Public' },
    { url: '/sectors/hotels-leisure', name: 'Hotels & Leisure' },
    { url: '/sectors/pbsa', name: 'PBSA' },
    { url: '/sectors/education', name: 'Education' },
    { url: '/sectors/airports', name: 'Airports' },
    { url: '/sectors/venues', name: 'Venues' },
    { url: '/sectors/residential', name: 'Residential' },
    { url: '/sectors/logistics-parks', name: 'Logistics Parks' },
    { url: '/sectors/offices-corporate', name: 'Offices Corporate' },
    { url: '/sectors/retail-service-stations', name: 'Retail Service Stations' },
    { url: '/sectors/aviation', name: 'Aviation' },
    { url: '/sectors/hospitality-leisure', name: 'Hospitality & Leisure' },
    { url: '/sectors/residential-pbsa', name: 'Residential PBSA' },
  ],
  fmOperations: [
    { url: '/fm-operations', name: 'FM Operations Hub' },
    { url: '/fm-operations/asset-lifecycle', name: 'Asset Lifecycle Management' },
    { url: '/fm-operations/business-continuity', name: 'Business Continuity' },
    { url: '/fm-operations/occupier-experience', name: 'Occupier Experience' },
    { url: '/fm-operations/fm-strategy', name: 'FM Strategy' },
    { url: '/fm-operations/tender-support', name: 'Tender Support' },
    { url: '/fm-operations/helpdesk', name: 'Helpdesk' },
    { url: '/fm-operations/mobilisation', name: 'Mobilisation' },
    { url: '/fm-operations/ppm-delivery', name: 'PPM Delivery' },
    { url: '/fm-operations/reactive-maintenance', name: 'Reactive Maintenance' },
    { url: '/fm-operations/leads', name: 'Leads' },
    { url: '/fm-operations/report-issue', name: 'Report Issue' },
    { url: '/fm-operations/knowledge-base', name: 'Knowledge Base' },
    { url: '/fm-operations/platform', name: 'Platform' },
  ],
  softServices: [
    { url: '/soft-services/concierge', name: 'Concierge Services' },
    { url: '/soft-services/specialist-cleaning', name: 'Specialist Cleaning' },
    { url: '/soft-services/grounds-maintenance', name: 'Grounds Maintenance' },
    { url: '/soft-services/waste-recycling', name: 'Waste & Recycling' },
  ],
  locations: [
    { url: '/locations', name: 'Locations Overview' },
    { url: '/locations/london', name: 'London' },
    { url: '/locations/manchester', name: 'Manchester' },
    { url: '/locations/birmingham', name: 'Birmingham' },
    { url: '/locations/leeds', name: 'Leeds' },
    { url: '/locations/sheffield', name: 'Sheffield' },
    { url: '/locations/liverpool', name: 'Liverpool' },
    { url: '/locations/leicester', name: 'Leicester' },
    { url: '/locations/nottingham', name: 'Nottingham' },
    { url: '/locations/derby', name: 'Derby' },
    { url: '/locations/chesterfield', name: 'Chesterfield' },
    { url: '/locations/lincoln', name: 'Lincoln' },
  ],
  geoLandingFM: [
    { url: '/fm-london', name: 'FM London' },
    { url: '/fm-leeds', name: 'FM Leeds' },
    { url: '/fm-birmingham', name: 'FM Birmingham' },
    { url: '/fm-lincoln', name: 'FM Lincoln' },
    { url: '/fm-chesterfield', name: 'FM Chesterfield' },
    { url: '/fm-sheffield', name: 'FM Sheffield' },
    { url: '/fm-nottingham', name: 'FM Nottingham' },
    { url: '/fm-manchester', name: 'FM Manchester' },
    { url: '/fm-liverpool', name: 'FM Liverpool' },
    { url: '/fm-derby', name: 'FM Derby' },
    { url: '/fm-oxford', name: 'FM Oxford' },
    { url: '/fm-doncaster', name: 'FM Doncaster' },
    { url: '/fm-rotherham', name: 'FM Rotherham' },
    { url: '/fm-telford', name: 'FM Telford' },
  ],
  geoLandingFacilitiesManagement: [
    { url: '/facilities-management-london', name: 'Facilities Management London' },
    { url: '/facilities-management-leeds', name: 'Facilities Management Leeds' },
    { url: '/facilities-management-birmingham', name: 'Facilities Management Birmingham' },
    { url: '/facilities-management-sheffield', name: 'Facilities Management Sheffield' },
    { url: '/facilities-management-nottingham', name: 'Facilities Management Nottingham' },
    { url: '/facilities-management-manchester', name: 'Facilities Management Manchester' },
    { url: '/facilities-management-liverpool', name: 'Facilities Management Liverpool' },
    { url: '/facilities-management-derby', name: 'Facilities Management Derby' },
    { url: '/facilities-management-oxford', name: 'Facilities Management Oxford' },
    { url: '/facilities-management-doncaster', name: 'Facilities Management Doncaster' },
    { url: '/facilities-management-rotherham', name: 'Facilities Management Rotherham' },
    { url: '/facilities-management-chesterfield', name: 'Facilities Management Chesterfield' },
    { url: '/facilities-management-telford', name: 'Facilities Management Telford' },
    { url: '/facilities-management-midlands', name: 'Facilities Management Midlands' },
    { url: '/facilities-management-lincoln', name: 'Facilities Management Lincoln' },
    { url: '/facilities-management-bradford', name: 'Facilities Management Bradford' },
    { url: '/london-facilities-management', name: 'London Facilities Management' },
  ],
  caseStudies: [
    { url: '/case-studies', name: 'Case Studies Overview' },
    { url: '/case-studies/logistics', name: 'Logistics & Distribution' },
    { url: '/case-studies/retail', name: 'Retail' },
    { url: '/case-studies/corporate', name: 'Corporate' },
    { url: '/case-studies/aviation', name: 'Aviation' },
    { url: '/case-studies/pbsa', name: 'PBSA' },
    { url: '/case-studies/hospitality', name: 'Hospitality' },
    { url: '/case-studies/service-stations', name: 'Service Stations' },
    { url: '/case-studies/engineering', name: 'Engineering' },
    { url: '/case-studies/healthcare', name: 'Healthcare' },
    { url: '/case-studies/corporate-office-london', name: 'Corporate Office London' },
    { url: '/case-studies/retail-complex-birmingham', name: 'Retail Complex Birmingham' },
    { url: '/case-studies/industrial-warehouse-sheffield', name: 'Industrial Warehouse Sheffield' },
    { url: '/case-studies/pbsa-estate-manchester', name: 'PBSA Estate Manchester' },
  ],
  resources: [
    { url: '/resources', name: 'Resources Hub' },
    { url: '/resources/compliance-calendar', name: 'Compliance Calendar' },
    { url: '/resources/audit-framework', name: 'Audit Framework' },
    { url: '/resources/switch-playbook', name: 'Switching Provider Guide' },
    { url: '/resources/fire-risk-guide', name: 'Fire Risk Guide' },
    { url: '/resources/eicr-manual', name: 'EICR Manual' },
    { url: '/resources/emergency-lighting-checklist', name: 'Emergency Lighting Checklist' },
    { url: '/resources/legionella-guide', name: 'Legionella Guide' },
    { url: '/resources/fgas-tracker', name: 'F-Gas Tracker' },
    { url: '/resources/energy-esg', name: 'Energy & ESG' },
    { url: '/resources/engineer-standards', name: 'Engineer Standards' },
    { url: '/resources/tender-support', name: 'Tender Support' },
    { url: '/resources/top-fm-providers-uk', name: 'Top FM Providers UK' },
    { url: '/resources/fire-alarm-testing-frequency', name: 'Fire Alarm Testing Frequency' },
  ],
  fmInsights: [
    { url: '/fm-insights', name: 'FM Insights Hub' },
    { url: '/fm-insights/what-is-facilities-management', name: 'What is Facilities Management?' },
    { url: '/fm-insights/what-is-hard-fm', name: 'What is Hard FM?' },
    { url: '/fm-insights/what-is-soft-fm', name: 'What is Soft FM?' },
    { url: '/fm-insights/what-is-statutory-maintenance', name: 'What is Statutory Maintenance?' },
    { url: '/fm-insights/what-is-ppm', name: 'What is PPM?' },
    { url: '/fm-insights/what-is-an-eicr', name: 'What is an EICR?' },
    { url: '/fm-insights/what-is-a-tm44', name: 'What is a TM44?' },
    { url: '/fm-insights/what-is-acop-l8', name: 'What is ACOP L8?' },
    { url: '/fm-insights/what-is-f-gas-compliance', name: 'What is F-Gas Compliance?' },
    { url: '/fm-insights/how-often-emergency-lighting-tested', name: 'Emergency Lighting Testing Frequency' },
    { url: '/fm-insights/how-often-fire-alarms-tested', name: 'Fire Alarm Testing Frequency' },
    { url: '/fm-insights/who-is-the-responsible-person', name: 'Who is the Responsible Person?' },
    { url: '/fm-insights/what-is-a-ppm-planner', name: 'What is a PPM Planner?' },
    { url: '/fm-insights/what-is-a-compliance-calendar', name: 'What is a Compliance Calendar?' },
    { url: '/fm-insights/what-is-an-asset-register', name: 'What is an Asset Register?' },
    { url: '/fm-insights/what-is-lock-out-tag-out', name: 'What is Lock Out Tag Out?' },
    { url: '/fm-insights/what-is-a-fire-risk-assessment', name: 'What is a Fire Risk Assessment?' },
    { url: '/fm-insights/what-are-rams', name: 'What are RAMS?' },
    { url: '/fm-insights/hard-fm-vs-soft-fm', name: 'Hard FM vs Soft FM' },
    { url: '/fm-insights/what-is-tfm', name: 'What is TFM?' },
    { url: '/fm-insights/what-is-ifm', name: 'What is IFM?' },
  ],
  tools: [
    { url: '/tools/ppm-calculator', name: 'PPM Calculator' },
    { url: '/tools/tm44-checker', name: 'TM44 Checker' },
    { url: '/tools/water-risk-grader', name: 'Water Risk Grader' },
    { url: '/tools/cost-savings-calculator', name: 'Cost Savings Calculator' },
    { url: '/tools/sla-benchmark', name: 'SLA Benchmark' },
    { url: '/tools/risk-diagnostic', name: 'Risk Diagnostic' },
    { url: '/compliance-diagnostic', name: 'Compliance Diagnostic' },
  ],
  compare: [
    { url: '/compare', name: 'Compare Overview' },
    { url: '/compare/entirefm-vs-mitie', name: 'EntireFM vs Mitie' },
    { url: '/compare/entirefm-vs-cbre', name: 'EntireFM vs CBRE' },
    { url: '/compare/entirefm-vs-jll', name: 'EntireFM vs JLL' },
    { url: '/compare/entirefm-vs-sodexo', name: 'EntireFM vs Sodexo' },
    { url: '/compare/entirefm-vs-in-house', name: 'EntireFM vs In-House' },
    { url: '/compare/entirefm-vs-freelance', name: 'EntireFM vs Freelance' },
    { url: '/compare/entirefm-vs-call-out-only', name: 'EntireFM vs Call-Out Only' },
  ],
  integrations: [
    { url: '/integrations', name: 'Integrations Overview' },
    { url: '/integrations/elogbooks', name: 'eLogbooks' },
    { url: '/integrations/dwellant', name: 'Dwellant' },
    { url: '/integrations/verisae', name: 'Verisae' },
    { url: '/integrations/mri-qube', name: 'MRI Qube' },
    { url: '/integrations/planon', name: 'Planon' },
    { url: '/integrations/concept-evolution', name: 'Concept Evolution' },
    { url: '/integrations/mycompliance', name: 'MyCompliance' },
  ],
  conversion: [
    { url: '/request-proposal', name: 'Request Proposal' },
    { url: '/compliance-pack', name: 'Compliance Pack' },
    { url: '/technology', name: 'Technology' },
    { url: '/search', name: 'Search' },
  ],
};

// Service location matrix data
const COMPLIANCE_SERVICES = ['fire', 'electrical', 'emergency-lighting', 'water', 'gas', 'hvac', 'ppm'];
const COMPLIANCE_LOCATIONS = ['London', 'Birmingham', 'Manchester', 'Leeds', 'Sheffield', 'Nottingham', 'Derby', 'Chesterfield', 'Lincoln'];

// Critical Infrastructure services
const CRITICAL_SERVICES = ['lightning-protection', 'ups-maintenance', 'generator-maintenance', 'thermal-imaging', 'arc-flash-assessment', 'hv-switching', 'power-redundancy', 'power-quality', 'data-room-audits'];

// Section component for rendering link grids
const SitemapSection = ({ title, pages, columns = 4 }: { title: string; pages: { url: string; name: string }[]; columns?: number }) => (
  <section className="mb-10">
    <h2 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">{title}</h2>
    <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-2`}>
      {pages.map((page) => (
        <Link
          key={page.url}
          to={page.url}
          className="text-sm text-primary hover:text-primary/80 hover:underline py-1 truncate"
        >
          {page.name}
        </Link>
      ))}
    </div>
  </section>
);

// Matrix table component
const ServiceLocationMatrix = ({ 
  title, 
  services, 
  locations, 
  urlPattern 
}: { 
  title: string; 
  services: string[]; 
  locations: string[]; 
  urlPattern: (service: string, location: string) => string;
}) => (
  <section className="mb-10">
    <h2 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">{title}</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-muted">
            <th className="text-left p-2 border border-border font-medium">Service</th>
            {locations.map((loc) => (
              <th key={loc} className="text-center p-2 border border-border font-medium">{loc}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service} className="hover:bg-muted/50">
              <td className="p-2 border border-border font-medium capitalize">
                {service.replace(/-/g, ' ')}
              </td>
              {locations.map((location) => (
                <td key={location} className="text-center p-2 border border-border">
                  <Link
                    to={urlPattern(service, location)}
                    className="text-primary hover:text-primary/80 hover:underline"
                  >
                    ✓
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

// Geo landing pages matrix
const GeoLandingMatrix = () => {
  const cities = ['London', 'Leeds', 'Birmingham', 'Sheffield', 'Nottingham', 'Manchester', 'Liverpool', 'Derby', 'Oxford', 'Doncaster', 'Rotherham', 'Chesterfield', 'Telford', 'Lincoln', 'Bradford', 'Midlands'];
  
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">Geographical FM Landing Pages Matrix</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-2 border border-border font-medium">Location</th>
              <th className="text-center p-2 border border-border font-medium">/fm-{'{city}'}</th>
              <th className="text-center p-2 border border-border font-medium">/facilities-management-{'{city}'}</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => {
              const slug = city.toLowerCase();
              const hasFM = ['london', 'leeds', 'birmingham', 'lincoln', 'chesterfield', 'sheffield', 'nottingham', 'manchester', 'liverpool', 'derby', 'oxford', 'doncaster', 'rotherham', 'telford'].includes(slug);
              const hasFacilitiesManagement = ['london', 'leeds', 'birmingham', 'sheffield', 'nottingham', 'manchester', 'liverpool', 'derby', 'oxford', 'doncaster', 'rotherham', 'chesterfield', 'telford', 'midlands', 'lincoln', 'bradford'].includes(slug);
              
              return (
                <tr key={city} className="hover:bg-muted/50">
                  <td className="p-2 border border-border font-medium">{city}</td>
                  <td className="text-center p-2 border border-border">
                    {hasFM ? (
                      <Link to={`/fm-${slug}`} className="text-primary hover:text-primary/80 hover:underline">
                        /fm-{slug}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="text-center p-2 border border-border">
                    {hasFacilitiesManagement ? (
                      <Link to={`/facilities-management-${slug}`} className="text-primary hover:text-primary/80 hover:underline">
                        /facilities-management-{slug}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
            <tr className="hover:bg-muted/50">
              <td className="p-2 border border-border font-medium">London (Alt)</td>
              <td className="text-center p-2 border border-border">
                <span className="text-muted-foreground">—</span>
              </td>
              <td className="text-center p-2 border border-border">
                <Link to="/london-facilities-management" className="text-primary hover:text-primary/80 hover:underline">
                  /london-facilities-management
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

const SiteMap = () => {
  // Calculate total pages
  const totalPages = Object.values(SITE_PAGES).reduce((acc, pages) => acc + pages.length, 0) +
    (COMPLIANCE_SERVICES.length * COMPLIANCE_LOCATIONS.length) +
    (CRITICAL_SERVICES.length * COMPLIANCE_LOCATIONS.length);

  return (
    <>
      <Helmet>
        <title>Sitemap | EntireFM - All Pages & Services</title>
        <meta name="description" content="Complete sitemap of EntireFM facilities management services, locations, sectors, and resources. Find all pages across our comprehensive FM services platform." />
      </Helmet>

      <div className="min-h-screen bg-background py-12 pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-foreground mb-3">Sitemap</h1>
            <p className="text-muted-foreground">
              Complete directory of all {totalPages}+ pages across EntireFM's facilities management platform.
            </p>
          </header>

          {/* Main Pages */}
          <SitemapSection title="Main Pages" pages={SITE_PAGES.main} columns={4} />

          {/* Services */}
          <SitemapSection title="Services" pages={SITE_PAGES.services} columns={4} />

          {/* Critical Infrastructure */}
          <SitemapSection title="Critical Infrastructure Services" pages={SITE_PAGES.criticalInfrastructure} columns={3} />

          {/* Sectors */}
          <SitemapSection title="Sectors" pages={SITE_PAGES.sectors} columns={4} />

          {/* FM Operations */}
          <SitemapSection title="FM Operations" pages={SITE_PAGES.fmOperations} columns={4} />

          {/* Soft Services */}
          <SitemapSection title="Soft Services" pages={SITE_PAGES.softServices} columns={4} />

          {/* Locations */}
          <SitemapSection title="Locations" pages={SITE_PAGES.locations} columns={4} />

          {/* Geo Landing Pages Matrix */}
          <GeoLandingMatrix />

          {/* Case Studies */}
          <SitemapSection title="Case Studies" pages={SITE_PAGES.caseStudies} columns={3} />

          {/* Resources */}
          <SitemapSection title="Resources" pages={SITE_PAGES.resources} columns={3} />

          {/* FM Insights */}
          <SitemapSection title="FM Insights & Guides" pages={SITE_PAGES.fmInsights} columns={3} />

          {/* Tools */}
          <SitemapSection title="Tools & Calculators" pages={SITE_PAGES.tools} columns={3} />

          {/* Compare */}
          <SitemapSection title="Comparisons" pages={SITE_PAGES.compare} columns={3} />

          {/* Integrations */}
          <SitemapSection title="Integrations" pages={SITE_PAGES.integrations} columns={4} />

          {/* Conversion & Utility */}
          <SitemapSection title="Conversion & Utility" pages={SITE_PAGES.conversion} columns={4} />

          {/* Compliance Service Location Matrix */}
          <ServiceLocationMatrix
            title="Compliance Services by Location"
            services={COMPLIANCE_SERVICES}
            locations={COMPLIANCE_LOCATIONS}
            urlPattern={(service, location) => `/services/${service}/${location}`}
          />

          {/* Critical Infrastructure Location Matrix */}
          <ServiceLocationMatrix
            title="Critical Infrastructure by Location"
            services={CRITICAL_SERVICES}
            locations={COMPLIANCE_LOCATIONS}
            urlPattern={(service, location) => `/services/critical/${service}/${location}`}
          />
        </div>
      </div>
    </>
  );
};

export default SiteMap;
