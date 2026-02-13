import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import nottinghamSkyline from "@/assets/locations/nottingham-skyline.jpg";

const data: LocationPageData = {
  city: "Nottingham",
  region: "Nottinghamshire",
  heroImage: nottinghamSkyline,
  heroHeadline: "Facilities Management in Nottingham. Engineered for Performance.",
  heroSubtext: "Hard FM, compliance, and engineered asset management for estates across Nottingham and Nottinghamshire.",
  metaTitle: "Facilities Management Nottingham | Hard FM & Compliance | EntireFM",
  metaDescription: "Expert facilities management in Nottingham. Hard FM, compliance, and engineered asset management for estates across Nottinghamshire.",
  canonicalUrl: "https://entirefm.com/locations/nottingham",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Emergency Response", suffix: "hrs" },
    { value: "12", label: "Coverage Areas", suffix: "+" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "What We Deliver in Nottingham",
  whyIntro: "EntireFM provides comprehensive hard facilities management across Nottingham and Nottinghamshire. Our engineering-first approach ensures technical building systems remain compliant, operational, and efficient.",
  whyPoints: [
    "Planned preventative maintenance programmes",
    "Statutory compliance testing and certification",
    "Reactive maintenance and emergency response",
    "Asset condition surveys and reporting",
    "Multi-site estate management"
  ],
  coverageAreas: [
    "Nottingham City Centre", "West Bridgford", "Beeston", "Clifton",
    "Arnold", "Carlton", "Mansfield", "Newark", "Worksop", "Hucknall"
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
    { title: "Commercial Offices", description: "City centre and business park offices" },
    { title: "Retail Centres", description: "Shopping centres and high street retail" },
    { title: "Industrial Facilities", description: "Manufacturing and production sites" },
    { title: "Healthcare Buildings", description: "Medical centres and care facilities" },
    { title: "Educational Institutions", description: "Universities and colleges" }
  ],
  whyChoosePoints: [
    "Regulatory knowledge — BSI codes, HSE guidance, sector-specific regulations",
    "Documentation standards — compliant certificates, risk assessments, audit trails",
    "Proactive management — compliance deadlines monitored in advance",
    "Local engineering teams across Nottinghamshire"
  ],
  faqs: [
    { question: "What areas of Nottingham do you cover?", answer: "We cover all of Nottingham city centre, West Bridgford, Beeston, Clifton, Arnold, Carlton, and the wider Nottinghamshire region." },
    { question: "What types of buildings do you maintain?", answer: "We work across commercial offices, retail centres, industrial facilities, healthcare buildings, educational institutions, and multi-site portfolios." },
    { question: "How quickly can you respond to emergencies?", answer: "Our Nottingham-based engineering teams provide rapid emergency response, typically within 2-4 hours for critical compliance issues." },
    { question: "Do you provide compliance certificates?", answer: "Yes — EICRs, gas safety certificates, fire alarm certificates, and emergency lighting test records for all Nottingham properties." }
  ],
  ctaHeadline: "Discuss Your Nottingham FM Requirements",
  ctaSubtext: "Contact our team to discuss facilities management across Nottingham and Nottinghamshire."
};

const Nottingham = () => <LocationPageTemplate data={data} />;
export default Nottingham;
