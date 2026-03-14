import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import chesterfieldSkyline from "@/assets/locations/chesterfield-skyline.jpg";

const data: LocationPageData = {
  city: "Chesterfield",
  region: "North Derbyshire",
  heroImage: chesterfieldSkyline,
  heroHeadline: "Facilities Management in Chesterfield. Locally Embedded.",
  heroSubtext: "Hard FM, compliance, and engineered asset management for estates across Chesterfield and North Derbyshire.",
  metaTitle: "Facilities Management Chesterfield | Hard FM & Compliance | EntireFM",
  metaDescription: "FM services in Chesterfield for logistics parks, warehouses and commercial estates along the M1 corridor. Fire, electrical and HVAC compliance with rapid reactive support.",
  canonicalUrl: "https://entirefm.com/locations/chesterfield",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Emergency Response", suffix: "hrs" },
    { value: "12", label: "Coverage Areas", suffix: "+" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "What We Deliver in Chesterfield",
  whyIntro: "EntireFM provides comprehensive hard facilities management across Chesterfield and North Derbyshire. Our engineering-first approach ensures technical building systems remain compliant, operational, and efficient.",
  whyPoints: [
    "Planned preventative maintenance programmes",
    "Statutory compliance testing and certification",
    "Reactive maintenance and emergency response",
    "Asset condition surveys and reporting",
    "Multi-site estate management"
  ],
  coverageAreas: [
    "Chesterfield Town Centre", "Staveley", "Bolsover", "Dronfield",
    "Clay Cross", "Brimington", "Worksop", "Matlock",
    "Eckington", "Killamarsh"
  ],
  services: [
    "Electrical Services & EICRs",
    "Fire Safety Systems & Testing",
    "HVAC Services & Maintenance",
    "Gas Safety & Compliance",
    "Water Hygiene & Legionella",
    "PPM Programmes"
  ],
  sectors: [
    { title: "Industrial Facilities", description: "Manufacturing and production sites" },
    { title: "Commercial Offices", description: "Town centre and business park offices" },
    { title: "Retail Properties", description: "Shopping centres and high street" },
    { title: "Healthcare Buildings", description: "Medical centres and care facilities" },
    { title: "Educational Institutions", description: "Schools and colleges" }
  ],
  whyChoosePoints: [
    "Regulatory knowledge — BSI codes, HSE guidance, sector-specific regulations",
    "Documentation standards — compliant certificates, risk assessments, audit trails",
    "Proactive management — compliance deadlines monitored in advance",
    "Local engineering teams across North Derbyshire"
  ],
  faqs: [
    { question: "What areas around Chesterfield do you cover?", answer: "We cover Chesterfield town centre, Staveley, Bolsover, Dronfield, Clay Cross, and the wider North Derbyshire region." },
    { question: "What types of buildings do you maintain?", answer: "We work across commercial offices, industrial facilities, retail properties, healthcare buildings, and multi-site portfolios." },
    { question: "How quickly can you respond to emergencies?", answer: "Our locally-based engineering teams provide rapid emergency response, typically within 2-4 hours for critical compliance issues." },
    { question: "Do you provide compliance certificates?", answer: "Yes — EICRs, gas safety certificates, fire alarm certificates, and emergency lighting test records for all Chesterfield properties." }
  ],
  ctaHeadline: "Discuss Your Chesterfield FM Requirements",
  ctaSubtext: "Contact our team to discuss facilities management across Chesterfield and North Derbyshire."
};

const Chesterfield = () => <LocationPageTemplate data={data} />;
export default Chesterfield;
