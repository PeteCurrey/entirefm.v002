import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Factory, Shield, Zap, AlertTriangle } from "lucide-react";
import sectorImage from "@/assets/sector-industrial-hero.jpg";

const IndustrialPlant = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Industrial Plant FM Case Study | EntireFM",
        description: "Downtime cut by 53% & H&S standards reinforced at a critical production site.",
        canonical: "https://entirefm.com/case-studies/industrial-plant",
      }}
      heroImage={sectorImage}
      sector="Industrial / Manufacturing"
      sectorIcon={Factory}
      title="Operational Uptime & Safety Retention for a Critical Production Site"
      subtitle="A heavy-engineering plant achieving 53% downtime reduction and zero H&S enforcement actions through reliability-first FM."
      breadcrumbLabel="Industrial Plant Uptime & Safety"
      stats={[
        { value: "53", label: "Downtime reduction", suffix: "%" },
        { value: "0", label: "H&S enforcement actions" },
        { value: "100", label: "Electrical stability", suffix: "%" },
      ]}
      challengeIntro="A heavy-engineering plant was facing operational instability and mounting safety pressures from environmental failures and reactive firefighting."
      challenges={[
        { title: "Machinery environment failures", description: "HVAC and environmental control issues affecting production equipment." },
        { title: "Electrical faults causing downtime", description: "Power and electrical system failures interrupting critical operations." },
        { title: "High-risk H&S environment under audit pressure", description: "Regulatory scrutiny threatening operational continuity." },
        { title: "Constant supervision required from internal FM team", description: "Management capacity consumed by daily crisis management." },
      ]}
      solutions={[
        { icon: AlertTriangle, title: "Ruthless root-cause analysis to eliminate repeat failures", description: "Deep diagnostic approach targeting underlying issues rather than symptoms." },
        { icon: Factory, title: "Robust M&E PPM aligned to business continuity plan", description: "Strategic maintenance programming protecting operational priorities." },
        { icon: Zap, title: "Electrical risk mitigation and thermal scanning", description: "Proactive identification and resolution of electrical vulnerabilities." },
        { icon: Shield, title: "Safety-first RAMS with live reporting to H&S lead", description: "Real-time safety documentation and compliance transparency." },
      ]}
      metricsTitle="Measurable Wins — 6 Months"
      metrics={[
        { value: "53", label: "Production downtime reduction", prefix: "–", suffix: "%" },
        { value: "0", label: "H&S enforcement actions" },
        { value: "100", label: "Electrical stability improvement", suffix: "%" },
        { value: "100", label: "Internal FM team freed from crisis mode", suffix: "%" },
      ]}
      testimonial={{
        quote: "The difference is reliability. If something fails, it doesn't fail twice.",
        author: "H&S Manager",
        role: "Heavy Engineering Plant",
      }}
      relatedStudies={[
        { sector: "Logistics", title: "Reducing reactive call-outs by 32%", metrics: ["98% SLA compliance", "87% first-time fix rate"], slug: "/case-studies/logistics-distribution-hub" },
        { sector: "Aviation", title: "Zero-Disruption Life Safety Overhaul", metrics: ["100% BS 5839 compliance", "Zero passenger disruption"], slug: "/case-studies/aviation" },
      ]}
      ctaTitle="Ready to protect uptime in high-risk environments?"
      ctaDescription="Get reliability-first FM for your industrial or manufacturing facility."
      ctaPrimaryLabel="Protect Uptime in High-Risk Environments"
    />
  );
};

export default IndustrialPlant;
