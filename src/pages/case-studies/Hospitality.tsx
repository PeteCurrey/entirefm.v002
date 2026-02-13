import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Hotel, Zap, Star, DollarSign } from "lucide-react";
import sectorImage from "@/assets/sector-hospitality-hero.jpg";

const Hospitality = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Hotel FM Case Study | EntireFM",
        description: "Rapid room turnarounds & guest comfort KPIs improved through guest-first FM.",
        canonical: "https://entirefm.com/case-studies/hospitality",
      }}
      heroImage={sectorImage}
      sector="Hospitality Sector"
      sectorIcon={Hotel}
      title="Revenue Protection Through Rapid Reactive & Brand-Critical Repairs"
      subtitle="28 hotel rooms restored to revenue status in 2 weeks through rapid reactive response and guest-first facilities management."
      breadcrumbLabel="Hospitality Revenue Protection"
      stats={[
        { value: "28", label: "Rooms restored to revenue" },
        { value: "25", label: "Comfort complaints reduced", suffix: "%" },
        { value: "94", label: "First-time fix rate", suffix: "%" },
        { value: "100", label: "Brand review uplift", suffix: "%" },
      ]}
      challengeIntro="A large hotel was losing revenue and reputation through facility failures that directly impacted guest experience and room availability."
      challenges={[
        { title: "Rooms being taken offline", description: "Direct revenue loss from unavailable inventory due to maintenance issues." },
        { title: "HVAC failures driving comfort complaints", description: "Guest satisfaction eroded by temperature control problems." },
        { title: "Visible defects destroying brand impression", description: "Front-of-house aesthetic issues undermining premium positioning." },
        { title: "Maintenance delays crippling staff morale", description: "Operational teams overwhelmed by unresolved facility issues." },
      ]}
      solutions={[
        { icon: Zap, title: "On-demand rapid reactive crews with hotel-trained engineers", description: "Hospitality-specialist engineers understanding guest experience priorities." },
        { icon: Star, title: "Front-of-house aesthetic refresh without guest notice", description: "Discreet service delivery maintaining premium brand standards." },
        { icon: DollarSign, title: "Energy optimisation to support ESG commitments", description: "Efficiency improvements aligning with sustainability objectives." },
        { icon: Hotel, title: "Smart Helpdesk routing to reduce GM admin burden", description: "Intelligent job allocation freeing management from coordination tasks." },
      ]}
      metrics={[
        { value: "28", label: "Rooms restored to revenue in 2 weeks" },
        { value: "25", label: "Comfort complaints reduced", prefix: "–", suffix: "%" },
        { value: "94", label: "First-time fix rate achieved", suffix: "%" },
        { value: "100", label: "Brand review uplift (sentiment)", suffix: "%" },
      ]}
      testimonial={{
        quote: "It finally feels like the facilities match the guest experience we promise.",
        author: "Hotel General Manager",
        role: "Premium Hotel Group",
      }}
      relatedStudies={[
        { sector: "Corporate", title: "Workplace Experience Overhaul", metrics: ["Comfort complaints reduced 40%", "IAQ scores improved 37%"], slug: "/case-studies/corporate-hq" },
        { sector: "Retail", title: "Zero-Disruption Compliance Turnaround", metrics: ["100% fire compliance regained", "Zero trading interruptions"], slug: "/case-studies/retail-service-stations" },
      ]}
      ctaTitle="Ready to protect revenue through guest-first FM?"
      ctaDescription="Get a hospitality FM plan that prioritizes guest experience and revenue protection."
      ctaPrimaryLabel="Protect Revenue Through Guest-First FM"
    />
  );
};

export default Hospitality;
