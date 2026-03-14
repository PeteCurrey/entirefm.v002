import LocationPageTemplate, { type LocationPageData } from "@/components/shared/LocationPageTemplate";
import lincolnSkyline from "@/assets/locations/lincoln-skyline.jpg";

const data: LocationPageData = {
  city: "Lincoln",
  region: "Lincolnshire",
  heroImage: lincolnSkyline,
  heroHeadline: "Facilities Management in Lincoln. Heritage Meets Modern FM.",
  heroSubtext: "Hard FM, compliance, and engineered asset management for estates across Lincoln and Lincolnshire.",
  metaTitle: "Facilities Management Lincoln | Hard FM & Compliance | EntireFM",
  metaDescription: "Facilities management in Lincoln for healthcare, heritage and agricultural estates. Fire safety, water hygiene and electrical compliance across Lincolnshire.",
  canonicalUrl: "https://entirefm.com/locations/lincoln",
  stats: [
    { value: "100", label: "Compliance Rate", suffix: "%" },
    { value: "4", label: "Hour Emergency Response", suffix: "hrs" },
    { value: "12", label: "Coverage Areas", suffix: "+" },
    { value: "24", label: "Hour Helpdesk", suffix: "/7" }
  ],
  whyTitle: "What We Deliver in Lincoln",
  whyIntro: "EntireFM provides comprehensive hard facilities management across Lincoln and Lincolnshire. Our engineering-first approach ensures technical building systems remain compliant, operational, and efficient.",
  whyPoints: [
    "Planned preventative maintenance programmes",
    "Statutory compliance testing and certification",
    "Reactive maintenance and emergency response",
    "Asset condition surveys and reporting",
    "Multi-site estate management"
  ],
  coverageAreas: [
    "Lincoln City Centre", "North Hykeham", "Bracebridge Heath", "Skellingthorpe",
    "Nettleham", "Washingborough", "Gainsborough", "Sleaford",
    "Grantham", "Boston"
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
    { title: "Agricultural & Rural", description: "Farm estates and rural commercial properties" },
    { title: "Commercial Offices", description: "City centre and business park offices" },
    { title: "Retail Properties", description: "High street and retail parks" },
    { title: "Healthcare Buildings", description: "Medical centres and care facilities" },
    { title: "Educational Institutions", description: "University of Lincoln and colleges" }
  ],
  whyChoosePoints: [
    "Regulatory knowledge — BSI codes, HSE guidance, sector-specific regulations",
    "Documentation standards — compliant certificates, risk assessments, audit trails",
    "Proactive management — compliance deadlines monitored in advance",
    "Engineering teams covering urban and rural Lincolnshire"
  ],
  faqs: [
    { question: "What areas around Lincoln do you cover?", answer: "We cover Lincoln city centre, North Hykeham, Bracebridge Heath, Skellingthorpe, and the wider Lincolnshire region including rural commercial properties." },
    { question: "What types of buildings do you maintain?", answer: "We work across commercial offices, agricultural facilities, retail properties, healthcare buildings, and multi-site portfolios." },
    { question: "How quickly can you respond to emergencies?", answer: "Our engineering teams provide rapid emergency response across Lincoln, typically within 2-4 hours for critical compliance issues." },
    { question: "Do you provide compliance certificates?", answer: "Yes — EICRs, gas safety certificates, fire alarm certificates, and emergency lighting test records for all Lincoln properties." }
  ],
  ctaHeadline: "Discuss Your Lincoln FM Requirements",
  ctaSubtext: "Contact our team to discuss facilities management across Lincoln and Lincolnshire."
};

const Lincoln = () => <LocationPageTemplate data={data} />;
export default Lincoln;
