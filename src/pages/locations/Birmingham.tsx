import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";

const data: LocationPageData = {
  city: "Birmingham",
  region: "West Midlands",
  heroImage: "https://images.unsplash.com/photo-1567605974523-7af4c0c42fbc?w=1920&q=80",
  heroHeadline: "Birmingham Demands Reliability. Your FM Partner Must Deliver It.",
  heroSubtext: "Hard & soft facilities management across the West Midlands — tailored responsiveness, full compliance, rapid mobilisation.",
  metaTitle: "Facilities Management Birmingham | FM Services West Midlands | EntireFM",
  metaDescription: "Hard & soft FM across the West Midlands. Rapid response & full compliance for commercial and industrial estates.",
  canonicalUrl: "https://entirefm.com/locations/birmingham",
  stats: [
    { value: "41", label: "Avg Response Time (mins)", suffix: "min" },
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "32", label: "Reactive Call-Out Reduction", suffix: "%" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "Why Birmingham Needs a Specialist FM Partner",
  whyIntro: "Greater Birmingham is a hub for manufacturing, logistics, offices, and service operations — with complex estates and high-density sites. If your FM provider doesn't move fast, you risk disruption, cost-blowouts, and compliance failures.",
  whyPoints: [
    "Full West Midlands footprint: city centre, Solihull, Walsall, Wolverhampton",
    "Local engineer bases, strategic stock of spares, rapid response network",
    "Scalable for single site through multi-estate portfolios",
    "Purpose-built for regional sector demands: logistics, industrial, offices, retail"
  ],
  coverageAreas: [
    "Birmingham City Centre", "Solihull", "Walsall", "Wolverhampton",
    "Dudley", "Sutton Coldfield", "West Bromwich", "Coventry corridor"
  ],
  services: [
    "M&E hard services (electrical, mechanical, HVAC)",
    "Compliance management (fire systems, life safety, water hygiene)",
    "Building fabric & exterior maintenance",
    "24/7 reactive support, national escalation model",
    "Unified portal: asset registers, job tracking, KPI dashboards"
  ],
  sectors: [
    { title: "Industrial & Logistics", description: "Estates around Birmingham and the M6 corridor" },
    { title: "Retail Parks", description: "Service stations and retail complexes across the region" },
    { title: "Office Campuses", description: "Multi-tenant blocks and business parks" },
    { title: "Residential", description: "High-rise blocks & PBSA conversions" },
    { title: "Hospitality", description: "Venues and leisure complexes" }
  ],
  whyChoosePoints: [
    "Localised knowledge + national support",
    "Clear SLAs, transparent pricing, high-visibility results",
    "Avoiding the 'big-bureaucracy' provider — just direct ownership",
    "Digital data, faster decisions, better outcomes"
  ],
  faqs: [
    { question: "Do you provide FM services across the West Midlands?", answer: "Yes — full region coverage including Birmingham, Solihull, Walsall, Wolverhampton." },
    { question: "Can you manage multi-site portfolios in Birmingham?", answer: "Absolutely — we integrate multiple sites under one portal with real-time dashboards." },
    { question: "Do you offer same-day reactive services?", answer: "Yes — local engineers and spares mean faster response time and less downtime." },
    { question: "Do you handle full life-safety compliance?", answer: "Yes — fire, water, fabric, electrical compliance included under our integrated FM model." }
  ],
  ctaHeadline: "Get FM that fits Birmingham's pace — not delays.",
  ctaSubtext: "Don't settle for generic service. Work with a partner built for your region."
};

const Birmingham = () => <LocationPageTemplate data={data} />;
export default Birmingham;
