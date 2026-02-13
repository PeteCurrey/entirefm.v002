import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import leedsSkyline from "@/assets/locations/leeds-skyline.jpg";

const data: LocationPageData = {
  city: "Leeds",
  region: "West Yorkshire",
  heroImage: leedsSkyline,
  heroHeadline: "Leeds Depends on Reliability. Your FM Partner Must Deliver It.",
  heroSubtext: "Comprehensive facilities management across Leeds & West Yorkshire — rapid response, full compliance, local presence, scalable for multi-site.",
  metaTitle: "Facilities Management Leeds | FM Services West Yorkshire | EntireFM",
  metaDescription: "End-to-end FM for commercial & residential estates in West Yorkshire. Rapid response and full compliance.",
  canonicalUrl: "https://entirefm.com/locations/leeds",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Response SLA", suffix: "hrs" },
    { value: "30", label: "Cost Reduction", suffix: "%" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "Why the Leeds Region Demands a Specialist FM Partner",
  whyIntro: "Leeds is home to industrial, logistics, corporate & commercial estates alongside residential developments and retail hubs. In this territory, delay = cost, so you need a local partner who moves fast.",
  whyPoints: [
    "Full West Yorkshire footprint: Leeds city centre, Bradford, Wakefield, Huddersfield, Leeds Dock, Thorpe Park",
    "Regional engineer bases + spares stock + rapid mobilisation network",
    "Scalable support for single buildings to large portfolios",
    "Service model built for Leeds's mix of sectors: industrial, logistics, offices, retail, residential"
  ],
  coverageAreas: [
    "Leeds City Centre", "Bradford", "Wakefield", "Huddersfield",
    "Leeds Dock", "Thorpe Park", "Harrogate", "York corridor"
  ],
  services: [
    "M&E hard services (electrical, mechanical, HVAC)",
    "Compliance management (fire systems, life safety, water hygiene)",
    "Building fabric & exterior maintenance",
    "24/7 reactive support, national escalation model",
    "Unified portal: asset registers, job tracking, KPI dashboards"
  ],
  sectors: [
    { title: "Industrial & Logistics", description: "Estates across the region" },
    { title: "Retail Parks", description: "Service stations and retail complexes" },
    { title: "Office Campuses", description: "Multi-tenant blocks and business parks" },
    { title: "Residential", description: "High-rise blocks & PBSA" },
    { title: "Hospitality", description: "Venues and leisure sites" }
  ],
  whyChoosePoints: [
    "Localised resource with national standards",
    "Transparent SLAs, measurable and visible delivery",
    "Direct accountability — no layers of bureaucracy",
    "Tech-enabled asset visibility and performance dashboards",
    "Local presence means faster fixes, less downtime"
  ],
  faqs: [
    { question: "Do you provide FM services across West Yorkshire?", answer: "Yes — full regional coverage including Leeds city centre, Bradford, Wakefield, Huddersfield." },
    { question: "Can you manage multi-site portfolios in Leeds?", answer: "Absolutely — we integrate multiple sites under one portal with real-time visibility." },
    { question: "Do you offer same-day reactive services?", answer: "Yes — local engineers + spares = faster response times, less disruption." },
    { question: "Do you handle full life-safety compliance?", answer: "Yes — fire systems, water hygiene, electrical = included under our integrated FM model." }
  ],
  ctaHeadline: "Don't settle for generic FM. Get a partner built for Leeds.",
  ctaSubtext: "Protect your operation, minimise downtime, and scale with confidence."
};

const Leeds = () => <LocationPageTemplate data={data} />;
export default Leeds;
