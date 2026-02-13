import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { ShoppingBag, Wind, Shield, Flame } from "lucide-react";
import sectorImage from "@/assets/sector-retail-hero.jpg";

const RetailComplexBirmingham = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Case Study: Retail Complex Birmingham | EntireFM",
        description: "How we eliminated trading disruption for Birmingham retail complex through 24/7 HVAC response and proactive maintenance.",
        canonical: "https://entirefm.com/case-studies/retail-complex-birmingham",
      }}
      heroImage={sectorImage}
      sector="Retail & Service Stations"
      sectorIcon={ShoppingBag}
      title="Case Study: Retail Complex — Birmingham"
      subtitle="Multi-tenanted shopping complex requiring zero-downtime HVAC management, food court gas safety compliance, and brand-compliant service delivery."
      breadcrumbLabel="Retail Complex Birmingham"
      stats={[
        { value: "0", label: "Trading hours lost to breakdowns" },
        { value: "2", label: "Emergency HVAC response time", prefix: "<", suffix: " hrs" },
        { value: "68", label: "Customer complaints reduced", suffix: "%" },
        { value: "100", label: "Fire compliance maintained", suffix: "%" },
      ]}
      challengeIntro="HVAC failures during peak trading periods causing tenant complaints and customer dissatisfaction. Previous reactive-only approach resulted in prolonged downtime and lost revenue."
      challenges={[
        { title: "HVAC failures during peak trading periods", description: "Tenant complaints and customer dissatisfaction from environmental control failures." },
        { title: "Prolonged downtime from reactive-only approach", description: "No preventative strategy leading to extended service disruptions." },
        { title: "CP42 gas compliance across multiple food court kitchens", description: "Complex multi-operator environment requiring coordinated compliance delivery." },
        { title: "Need for guaranteed response times", description: "Centre management required customer-facing disruption to be eliminated." },
      ]}
      solutionTitle="Our Response"
      solutions={[
        { icon: Wind, title: "24/7 emergency HVAC response with <2 hour attendance", description: "Guaranteed response times for trading-critical environmental failures." },
        { icon: Shield, title: "Night-works programme for fire alarm and emergency lighting testing", description: "Zero customer-facing disruption from compliance activity." },
        { icon: Flame, title: "CP42 gas compliance delivered across all food court kitchens", description: "Coordinated multi-operator compliance programme." },
        { icon: ShoppingBag, title: "Preventative HVAC maintenance outside trading hours", description: "Proactive approach eliminating peak-period failures." },
      ]}
      metrics={[
        { value: "0", label: "Trading hours lost to breakdowns" },
        { value: "2", label: "Emergency HVAC response time", prefix: "<", suffix: " hrs" },
        { value: "68", label: "Customer complaints reduced", suffix: "%" },
        { value: "100", label: "Fire compliance maintained", suffix: "%" },
      ]}
      testimonial={{
        quote: "Since Entire FM took over, we haven't lost a single trading hour to mechanical failure. The 24/7 response guarantee gives us complete peace of mind during peak shopping periods.",
        author: "Centre Manager",
        role: "Birmingham Retail Complex",
      }}
      relatedStudies={[
        { sector: "Retail", title: "Instant Response FM for a High-Footfall Estate", metrics: ["Fire compliance back to 100%", "Reactive response time cut by 42%"], slug: "/case-studies/service-stations" },
        { sector: "Hospitality", title: "Revenue Protection Through Rapid Reactive", metrics: ["28 rooms restored to revenue", "94% first-time fix rate"], slug: "/case-studies/hospitality" },
      ]}
      ctaTitle="Request Similar Results"
      ctaDescription="Protect your retail uptime with guaranteed response times."
    />
  );
};

export default RetailComplexBirmingham;
