import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import liverpoolSkyline from "@/assets/locations/liverpool-skyline.jpg";

const data: LocationPageData = {
  city: "Liverpool",
  region: "Merseyside",
  heroImage: liverpoolSkyline,
  heroHeadline: "Port-City Performance. No Delays.",
  heroSubtext: "We keep commercial, logistics, and waterfront estates operating at full capacity across Merseyside.",
  metaTitle: "Facilities Management Liverpool | FM Services Merseyside | EntireFM",
  metaDescription: "FM delivering performance & safety across Merseyside. 24/7 operations for commercial and waterfront estates.",
  canonicalUrl: "https://entirefm.com/locations/liverpool",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Response SLA", suffix: "hrs" },
    { value: "5", label: "Coverage Areas", suffix: "+" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "Why Liverpool Needs EntireFM",
  whyIntro: "High-volume logistics, hospitality & tourism, and mixed commercial growth across Merseyside means FM failures hit harder here. You need a partner who understands port-city dynamics.",
  whyPoints: [
    "High-volume logistics & warehousing",
    "Hospitality & tourism front-and-centre",
    "Mixed commercial growth across Merseyside"
  ],
  coverageAreas: [
    "Liverpool City Centre", "Bootle", "Speke", "Knowsley",
    "Wirral", "St Helens", "Birkenhead", "Southport"
  ],
  services: [
    "M&E & HVAC maintenance",
    "Fire & Safety Systems",
    "Fabric maintenance & externals",
    "Water hygiene & Legionella control",
    "Reactive resource close to major business parks"
  ],
  sectors: [
    { title: "Logistics & Warehousing", description: "Port-side and inland distribution" },
    { title: "Offices & Commercial", description: "City centre and business district" },
    { title: "Retail & Service Stations", description: "High street and roadside retail" },
    { title: "Leisure & Entertainment", description: "Venues and attractions" },
    { title: "Residential Blocks", description: "Waterfront and city apartments" }
  ],
  whyChoosePoints: [
    "Waterfront and corrosion-risk asset expertise",
    "Local engineers with rapid dispatch",
    "Full compliance across all building types",
    "Transparent SLAs and real-time reporting"
  ],
  faqs: [
    { question: "Can you manage multi-site portfolios?", answer: "Yes — we integrate multiple sites under one portal for full visibility and control." },
    { question: "Can you support waterfront estates?", answer: "Fully compliant including corrosion-risk assets and maritime-adjacent buildings." },
    { question: "Do you offer same-day reactive services?", answer: "Standard — our local engineer network ensures rapid response across Merseyside." }
  ],
  ctaHeadline: "Choose FM that keeps pace with the port.",
  ctaSubtext: "Request Liverpool FM support — built for Merseyside's demands."
};

const Liverpool = () => <LocationPageTemplate data={data} />;
export default Liverpool;
