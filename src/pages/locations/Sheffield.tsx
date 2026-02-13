import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import sheffieldSkyline from "@/assets/locations/sheffield-skyline.jpg";

const data: LocationPageData = {
  city: "Sheffield",
  region: "South Yorkshire",
  heroImage: sheffieldSkyline,
  heroHeadline: "Sheffield Runs on Reliability. We Deliver It.",
  heroSubtext: "FM built for industrial strength and commercial pace — across the Steel City.",
  metaTitle: "Facilities Management Sheffield | Industrial FM | EntireFM",
  metaDescription: "Industrial-focused FM. Compliance & uptime for every asset across Sheffield and South Yorkshire.",
  canonicalUrl: "https://entirefm.com/locations/sheffield",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Response SLA", suffix: "hrs" },
    { value: "0", label: "Downtime Incidents", suffix: "" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "Why Sheffield Chooses EntireFM",
  whyIntro: "Sheffield's major manufacturing footprint means zero downtime tolerance. Mixed estates across industrial, logistics, student living, and retail demand a partner who moves fast with visible accountability.",
  whyPoints: [
    "Major manufacturing footprint = zero downtime tolerance",
    "Mixed estates: industrial, logistics, student living, retail",
    "Local engineers = fast fixes & visible accountability"
  ],
  coverageAreas: [
    "Sheffield City Centre", "Meadowhall", "Attercliffe", "Tinsley",
    "Rotherham", "Doncaster", "Barnsley", "Worksop"
  ],
  services: [
    "Hard FM & M&E maintenance",
    "Fire & Life Safety Systems",
    "Water Hygiene & ACOP L8",
    "Building Fabric + Reactive repairs",
    "Nationwide escalation when needed"
  ],
  sectors: [
    { title: "Industrial & Manufacturing", description: "Heavy industry and precision manufacturing" },
    { title: "Logistics & Distribution", description: "Warehousing and fulfilment centres" },
    { title: "PBSA & Student Living", description: "University accommodation and managed blocks" },
    { title: "Offices & Commercial", description: "City centre and business park offices" },
    { title: "Retail & Leisure", description: "Shopping centres and entertainment venues" },
    { title: "Hospitality", description: "Hotels and event venues" }
  ],
  whyChoosePoints: [
    "Industrial-grade FM capability",
    "Local engineers with deep site knowledge",
    "Transparent SLAs and real-time reporting",
    "Direct accountability, no corporate layers"
  ],
  faqs: [
    { question: "Do you work with manufacturers?", answer: "Yes — high-risk sites are core to our model." },
    { question: "Is 24/7 response available?", answer: "Always — our helpdesk operates around the clock." },
    { question: "Are fire systems and water hygiene included?", answer: "Full compliance, every visit. Fire, water, electrical — all covered." }
  ],
  ctaHeadline: "Get FM that protects uptime & compliance.",
  ctaSubtext: "Request Sheffield FM support — built for industrial strength."
};

const Sheffield = () => <LocationPageTemplate data={data} />;
export default Sheffield;
