import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import leicesterSkyline from "@/assets/locations/leicester-skyline.jpg";

const data: LocationPageData = {
  city: "Leicester",
  region: "East Midlands",
  heroImage: leicesterSkyline,
  heroHeadline: "Where Manufacturers Scale, We Keep Them Moving.",
  heroSubtext: "FM built for Leicester's industrial heart and fast-moving commercial scene.",
  metaTitle: "Facilities Management Leicester | Industrial FM | EntireFM",
  metaDescription: "Uptime-focused FM for industrial & commercial sites in the East Midlands. Local engineers, full compliance.",
  canonicalUrl: "https://entirefm.com/locations/leicester",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Response SLA", suffix: "hrs" },
    { value: "4", label: "Coverage Areas", suffix: "+" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "Why EntireFM for Leicester",
  whyIntro: "Engineering + retail + logistics = mixed risk profile. We balance production uptime + compliance + presentation, with local resources that reduce cost & response time.",
  whyPoints: [
    "Engineering + retail + logistics = mixed risk profile",
    "We balance production uptime + compliance + presentation",
    "Local resources reduce cost & response time"
  ],
  coverageAreas: [
    "Leicester City Centre", "Loughborough", "Hinckley", "Coalville",
    "Market Harborough", "Wigston", "Oadby", "Melton Mowbray"
  ],
  services: [
    "M&E & HVAC maintenance",
    "Fire, emergency lighting, sprinklers",
    "Water hygiene & Legionella control",
    "Fabric repairs + dilapidations",
    "24/7 reactive emergency support"
  ],
  sectors: [
    { title: "Manufacturing & Engineering", description: "Production facilities and workshops" },
    { title: "Logistics & Distribution", description: "Warehouses and fulfilment centres" },
    { title: "Retail & Commercial", description: "High street and retail parks" },
    { title: "Offices & Business Parks", description: "Commercial office environments" }
  ],
  whyChoosePoints: [
    "Manufacturing-grade FM capability",
    "Low-disruption scheduling around shifts",
    "End-to-end compliance ownership",
    "Local presence, national standards"
  ],
  faqs: [
    { question: "Can you work around manufacturers' shifts?", answer: "Yes — low-disruption scheduling is standard. We plan works around your operational requirements." },
    { question: "Do you manage compliance end-to-end?", answer: "We own it — fire, water, electrical, gas compliance all managed under one integrated FM model." }
  ],
  ctaHeadline: "Get FM that matches Leicester's momentum.",
  ctaSubtext: "Request Leicester FM support — built for industrial and commercial estates."
};

const Leicester = () => <LocationPageTemplate data={data} />;
export default Leicester;
