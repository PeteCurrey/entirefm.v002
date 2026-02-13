import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Building2, Wind, Users, TrendingUp, Thermometer } from "lucide-react";
import sectorImage from "@/assets/sector-corporate-hero.jpg";

const CorporateHQ = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Corporate Workplace FM Case Study | EntireFM",
        description: "Comfort & IAQ upgrades improve productivity & tenant trust at a corporate HQ.",
        canonical: "https://entirefm.com/case-studies/corporate-hq",
      }}
      heroImage={sectorImage}
      sector="Corporate Sector"
      sectorIcon={Building2}
      title="Productivity Through Environment — Workplace Experience Overhaul"
      subtitle="Transforming a corporate HQ from facilities frustration to performance-supporting workspace."
      breadcrumbLabel="Corporate HQ"
      stats={[
        { value: "40", label: "Comfort complaints reduced", suffix: "%" },
        { value: "37", label: "IAQ scores improved", suffix: "%" },
        { value: "50", label: "FM escalations reduced", suffix: "%" },
      ]}
      challengeIntro="A major corporate HQ was facing mounting facilities issues that directly impacted employee experience and brand perception."
      challenges={[
        { icon: Thermometer, title: "Thermal comfort complaints", description: "Inconsistent temperatures across floors created discomfort and productivity concerns." },
        { icon: Wind, title: "Air quality concerns", description: "Poor indoor air quality affected wellbeing and contributed to sick building syndrome symptoms." },
        { icon: Users, title: "Low team morale tied to facilities issues", description: "Persistent environment problems eroded staff satisfaction and retention metrics." },
        { icon: Building2, title: "Embarrassing FOH weaknesses for VIP visits", description: "Reception and entrance areas failed to reflect the organisation's premium brand positioning." },
      ]}
      solutionTitle="Our Approach"
      solutions={[
        { icon: Wind, title: "HVAC rule optimisation & IAQ monitoring", description: "Fine-tuned climate control systems and implemented continuous air quality monitoring." },
        { icon: Building2, title: "Reception & foyer refresh aligned to brand", description: "Upgraded front-of-house presentation to match corporate standards." },
        { icon: Users, title: "Fire door integrity remediation without disruption", description: "Addressed critical compliance gaps through carefully scheduled works." },
        { icon: TrendingUp, title: "Frictionless Helpdesk rollout", description: "Eliminated 'chasing' emails with responsive, transparent communication channels." },
      ]}
      metricsTitle="The Outcome — 120 Days"
      metrics={[
        { value: "40", label: "Comfort complaints reduced", prefix: "–", suffix: "%" },
        { value: "37", label: "IAQ scores improved", suffix: "%" },
        { value: "50", label: "FM escalations reduced", prefix: "–", suffix: "%" },
      ]}
      testimonial={{
        quote: "The space finally supports performance — not frustration.",
        author: "Workplace Experience Director",
        role: "Corporate HQ",
      }}
      relatedStudies={[
        { sector: "Healthcare", title: "Life-Critical Compliance & Environment Improvement", metrics: ["100% statutory compliance restored", "IAQ performance up 41%"], slug: "/case-studies/healthcare" },
        { sector: "Logistics", title: "Reducing reactive call-outs by 32%", metrics: ["98% SLA compliance", "18% energy savings"], slug: "/case-studies/logistics-distribution-hub" },
      ]}
      ctaTitle="Transform your workplace experience"
      ctaDescription="Request a workplace performance review to identify improvement opportunities."
      ctaPrimaryLabel="Request Workplace Performance Review"
    />
  );
};

export default CorporateHQ;
