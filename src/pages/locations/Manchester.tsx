import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import manchesterSkyline from "@/assets/locations/manchester-skyline.jpg";

const data: LocationPageData = {
  city: "Manchester",
  region: "Greater Manchester",
  heroImage: manchesterSkyline,
  heroHeadline: "Manchester Moves. Your FM Should Run at the Same Speed.",
  heroSubtext: "Comprehensive facilities management across Greater Manchester — fast response, full compliance, local presence.",
  metaTitle: "Facilities Management Manchester | FM Services | EntireFM",
  metaDescription: "Local engineer network & full FM compliance across Greater Manchester. Protect uptime & operations.",
  canonicalUrl: "https://entirefm.com/locations/manchester",
  stats: [
    { value: "32", label: "Reactive Call-Out Reduction", suffix: "%" },
    { value: "41", label: "Avg Response Time (mins)", suffix: "min" },
    { value: "47", label: "Annual Savings", prefix: "£", suffix: "k" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "Why Manchester Demands a Specialist FM Partner",
  whyIntro: "Greater Manchester is a major commercial hub with rapid growth in property, infrastructure and business services. FM providers must be highly responsive, multi-sector capable and regionally embedded.",
  whyPoints: [
    "Full Greater Manchester footprint: city centre, Trafford Park, Salford, Stockport, Bolton",
    "Local engineer bases, spares stock, rapid mobilisation",
    "Scalable for single site or multi-estate portfolios",
    "Services built for Manchester's mix of offices, industrial, logistics, retail and residential"
  ],
  coverageAreas: [
    "Manchester City Centre", "Salford", "Trafford Park", "Stockport",
    "Bolton", "Oldham", "Rochdale", "Bury"
  ],
  services: [
    "M&E hard services (electrical, mechanical, HVAC)",
    "Compliance management (fire systems, water hygiene, life-safety)",
    "Building fabric & external maintenance",
    "24/7 reactive support, national escalation model",
    "Unified portal: asset registers, job tracking, KPI dashboards"
  ],
  sectors: [
    { title: "Industrial & Logistics", description: "Estates around Manchester and Trafford Park" },
    { title: "Retail Parks & Service Stations", description: "Service stations across the region" },
    { title: "Office Campuses", description: "Multi-tenant blocks and city centre offices" },
    { title: "Residential & PBSA", description: "High-rise residential blocks & student accommodation" },
    { title: "Hospitality & Leisure", description: "Venues and leisure complexes" }
  ],
  whyChoosePoints: [
    "Region-based resource plus national capability",
    "Clear SLAs, transparent pricing, measurable results",
    "No 'one size fits all' scripts — direct accountability",
    "Tech-enabled asset visibility and reporting",
    "Local presence means faster fixes, less downtime"
  ],
  faqs: [
    { question: "Do you provide FM services across Greater Manchester?", answer: "Yes — full regional coverage including Manchester, Salford, Stockport, Bolton." },
    { question: "Can you manage multi-site portfolios in Manchester?", answer: "Yes — we integrate multiple sites under one portal for real-time visibility." },
    { question: "Do you offer same-day reactive services?", answer: "Yes — local engineers and spares mean faster response time and less downtime." },
    { question: "Do you handle full life-safety compliance?", answer: "Yes — fire systems, water hygiene, electrical compliance included under our integrated FM model." }
  ],
  ctaHeadline: "Stop settling for generic FM. Get a partner built for Manchester.",
  ctaSubtext: "Protect your operation, minimise downtime, and scale with confidence."
};

const Manchester = () => <LocationPageTemplate data={data} />;
export default Manchester;
