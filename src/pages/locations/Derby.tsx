import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import derbySkyline from "@/assets/locations/derby-skyline.jpg";

const data: LocationPageData = {
  city: "Derby",
  region: "Derbyshire",
  heroImage: derbySkyline,
  heroHeadline: "Facilities Management in Derby. Built for Precision.",
  heroSubtext: "Hard FM, compliance, and engineered asset management for estates across Derby and Derbyshire.",
  metaTitle: "Facilities Management Derby | Hard FM & Compliance | EntireFM",
  metaDescription: "Expert facilities management in Derby. Hard FM, compliance, and engineered asset management for estates across Derbyshire.",
  canonicalUrl: "https://entirefm.com/locations/derby",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Emergency Response", suffix: "hrs" },
    { value: "12", label: "Coverage Areas", suffix: "+" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "What We Deliver in Derby",
  whyIntro: "EntireFM provides comprehensive hard facilities management across Derby and Derbyshire. Our engineering-first approach ensures technical building systems remain compliant, operational, and efficient.",
  whyPoints: [
    "Planned preventative maintenance programmes",
    "Statutory compliance testing and certification",
    "Reactive maintenance and emergency response",
    "Asset condition surveys and reporting",
    "Multi-site estate management"
  ],
  coverageAreas: [
    "Derby City Centre", "Mickleover", "Spondon", "Alvaston",
    "Chaddesden", "Allestree", "Ilkeston", "Long Eaton",
    "Belper", "Swadlincote"
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
    { title: "Industrial Manufacturing", description: "Precision engineering and production facilities" },
    { title: "Commercial Offices", description: "City centre and business park offices" },
    { title: "Retail Properties", description: "Shopping centres and high street retail" },
    { title: "Healthcare Buildings", description: "Medical centres and care facilities" },
    { title: "Educational Institutions", description: "Universities and colleges" }
  ],
  whyChoosePoints: [
    "Regulatory knowledge — BSI codes, HSE guidance, sector-specific regulations",
    "Documentation standards — compliant certificates, risk assessments, audit trails",
    "Proactive management — compliance deadlines monitored in advance",
    "Local engineering teams across Derbyshire"
  ],
  faqs: [
    { question: "What areas of Derby do you cover?", answer: "We cover all of Derby city centre, Mickleover, Spondon, Alvaston, Chaddesden, Allestree, and the wider Derbyshire region." },
    { question: "What types of buildings do you maintain?", answer: "We work across commercial offices, industrial manufacturing facilities, retail properties, healthcare buildings, and multi-site portfolios." },
    { question: "How quickly can you respond to emergencies?", answer: "Our Derby-based engineering teams provide rapid emergency response, typically within 2-4 hours for critical compliance issues." },
    { question: "Do you provide compliance certificates?", answer: "Yes — EICRs, gas safety certificates, fire alarm certificates, and emergency lighting test records for all Derby properties." }
  ],
  ctaHeadline: "Discuss Your Derby FM Requirements",
  ctaSubtext: "Contact our team to discuss facilities management across Derby and Derbyshire."
};

const Derby = () => <LocationPageTemplate data={data} />;
export default Derby;
