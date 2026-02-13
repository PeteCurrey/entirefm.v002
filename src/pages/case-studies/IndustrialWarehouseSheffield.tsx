import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Factory, Wrench, Zap, Shield, CheckCircle2 } from "lucide-react";
import sectorImage from "@/assets/sector-industrial-hero.jpg";

const IndustrialWarehouseSheffield = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Case Study: Industrial Warehouse Sheffield | EntireFM",
        description: "How we eliminated production downtime for Sheffield industrial warehouse through predictive maintenance and 41-minute emergency response times.",
        canonical: "https://entirefm.com/case-studies/industrial-warehouse-sheffield",
      }}
      heroImage={sectorImage}
      sector="Industrial & Logistics"
      sectorIcon={Factory}
      title="Case Study: Industrial Warehouse — Sheffield"
      subtitle="24/7 manufacturing facility requiring zero-tolerance downtime approach, critical infrastructure reliability, and predictive maintenance strategy."
      breadcrumbLabel="Industrial Warehouse Sheffield"
      stats={[
        { value: "100", label: "Production downtime eliminated", suffix: "%" },
        { value: "47", label: "Reactive callouts reduced", suffix: "%" },
        { value: "41", label: "Emergency response time", suffix: " mins" },
        { value: "47", label: "Annual cost savings", prefix: "£", suffix: "k" },
      ]}
      challengeIntro="Production-critical facility experiencing frequent electrical and HVAC failures impacting manufacturing output. Previous reactive maintenance approach resulted in prolonged downtime and lost productivity."
      challenges={[
        { title: "Frequent electrical and HVAC failures", description: "Critical systems failing during production causing significant output losses." },
        { title: "Reactive-only maintenance approach", description: "No preventative strategy meant failures were unpredictable and prolonged." },
        { title: "Emergency lighting and fire system compliance gaps", description: "Insurance audit identified serious compliance shortfalls." },
        { title: "Need for guaranteed response times", description: "Operations director required predictive maintenance and critical spares strategy." },
      ]}
      solutionTitle="Our Response"
      solutions={[
        { icon: Zap, title: "Rapid response network with 41-minute average attendance", description: "Guaranteed response times for production-critical emergencies." },
        { icon: Wrench, title: "Critical spares holding for production-critical assets", description: "On-site inventory eliminating delays for key component replacements." },
        { icon: Shield, title: "Predictive maintenance using thermal imaging and vibration analysis", description: "Proactive identification of failures before they impact production." },
        { icon: CheckCircle2, title: "Planned works scheduled around production cycles", description: "Strategic maintenance timing ensuring zero operational disruption." },
      ]}
      metrics={[
        { value: "100", label: "Production downtime eliminated", suffix: "%" },
        { value: "47", label: "Reactive callouts reduced", suffix: "%" },
        { value: "41", label: "Emergency response time", suffix: " mins" },
        { value: "47", label: "Annual cost savings", prefix: "£", suffix: "k" },
      ]}
      testimonial={{
        quote: "Production downtime has become a non-issue since Entire FM took over. The predictive maintenance approach means failures are caught before they impact operations. The cost savings are significant, but the operational continuity is priceless.",
        author: "Operations Director",
        role: "Sheffield Manufacturing Facility",
      }}
      relatedStudies={[
        { sector: "Industrial", title: "Operational Uptime & Safety Retention", metrics: ["Production downtime cut by 53%", "0 H&S enforcement actions"], slug: "/case-studies/industrial-plant" },
        { sector: "Logistics", title: "Reducing reactive call-outs by 32%", metrics: ["98% SLA compliance", "87% first-time fix rate"], slug: "/case-studies/logistics-distribution-hub" },
      ]}
      ctaTitle="Request Similar Results"
      ctaDescription="Eliminate production downtime with predictive maintenance."
    />
  );
};

export default IndustrialWarehouseSheffield;
