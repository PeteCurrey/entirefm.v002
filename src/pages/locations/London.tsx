import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";

const data: LocationPageData = {
  city: "London",
  region: "Greater London",
  heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80",
  heroHeadline: "London Moves Fast. Your FM Partner Should Move Faster.",
  heroSubtext: "Hard & soft FM services across the capital — with rapid response, full compliance, and zero excuses.",
  metaTitle: "Facilities Management London | 24/7 FM Services | EntireFM",
  metaDescription: "Responsive FM & compliance support across London. 24/7 uptime & safety for commercial, industrial and residential estates.",
  canonicalUrl: "https://entirefm.com/locations/london",
  stats: [
    { value: "32", label: "London Boroughs Covered", suffix: "+" },
    { value: "4", label: "Average Response Time", suffix: "hrs" },
    { value: "97", label: "Asset Uptime", suffix: "%" },
    { value: "24", label: "Hour Helpdesk", prefix: "", suffix: "/7" }
  ],
  whyTitle: "Operational Excellence for the City That Never Slows Down",
  whyIntro: "London sites are high-pressure environments with mixed-use complexity, multi-tenant compliance, and zero downtime tolerance. We keep your sites running like the capital demands.",
  whyPoints: [
    "Mixed-use complexity handled across all boroughs",
    "Multi-tenant compliance managed end-to-end",
    "Zero downtime tolerance enforced with rapid SLAs",
    "Peak trading & extended hours supported",
    "Brand-critical environments maintained to the highest standard",
    "Night works & out-of-hours access available"
  ],
  coverageAreas: [
    "Central London", "City & Canary Wharf", "West End & South Bank",
    "East London logistics belt", "North Circular industrial estates",
    "Heathrow & Gatwick zones", "All 32+ boroughs", "M25 corridor"
  ],
  services: [
    "Hard Services & M&E maintenance",
    "Fire & Life Safety Systems",
    "Water Hygiene & ACOP L8",
    "Gas & Heating Compliance",
    "Building Fabric Maintenance",
    "Reactive Emergency Response 24/7"
  ],
  sectors: [
    { title: "City Offices & HQ Buildings", description: "Multi-tenant blocks and corporate headquarters" },
    { title: "Retail & Shopping Districts", description: "High-street and shopping centre environments" },
    { title: "Service Stations & Roadside Retail", description: "Fuel forecourts and convenience sites" },
    { title: "Industrial & Logistics Hubs", description: "Warehousing and distribution centres" },
    { title: "Hospitality & Leisure Venues", description: "Hotels, restaurants and entertainment" },
    { title: "Residential Blocks & PBSA", description: "High-rise and student accommodation" }
  ],
  whyChoosePoints: [
    "Night works & out-of-hours access",
    "Rapid response SLAs enforced",
    "Proven multi-site and high-rise capability",
    "Clean, uniformed engineers for public-facing environments",
    "Owner-led accountability — no corporate maze",
    "Tech-enabled asset visibility and reporting"
  ],
  faqs: [
    { question: "Do you serve all London boroughs?", answer: "Yes — we provide full Greater London coverage with strategically positioned engineers for rapid response across all boroughs and business districts." },
    { question: "Do you support multi-site portfolios?", answer: "Regularly — we specialise in managing multi-site portfolios, especially for retail and commercial HQ operators across London and the surrounding areas." },
    { question: "Can you work during trading hours?", answer: "Yes — low-disruption execution is our standard practice. We plan works around your operational requirements and peak trading times." },
    { question: "Do you provide emergency call-outs?", answer: "24/7 — our helpdesk provides immediate response for critical assets with rapid engineer dispatch across all London zones." }
  ],
  ctaHeadline: "Get FM that keeps pace with London.",
  ctaSubtext: "Stop firefighting. Start performing. Request London FM support today."
};

const London = () => <LocationPageTemplate data={data} />;
export default London;
