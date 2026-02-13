import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Car, Shield, Clock, TrendingUp } from "lucide-react";
import sectorImage from "@/assets/sector-retail-hero.jpg";

const ServiceStations = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Service Stations FM Case Study | EntireFM",
        description: "Improved safety & trading continuity for roadside retail with 100% compliance and 98% SLA performance.",
        canonical: "https://entirefm.com/case-studies/service-stations",
      }}
      heroImage={sectorImage}
      sector="Retail / Service Stations"
      sectorIcon={Car}
      title="Instant Response FM for a High-Footfall Service Station Estate"
      subtitle="A national roadside retail network achieving 100% compliance and 98% SLA performance through unified FM accountability."
      breadcrumbLabel="Service Station Instant Response"
      stats={[
        { value: "100", label: "Fire & life safety compliance", suffix: "%" },
        { value: "42", label: "Reactive response time reduction", suffix: "%" },
        { value: "30", label: "Store manager satisfaction increase", suffix: "%" },
        { value: "98", label: "SLA performance consistency", suffix: "%" },
      ]}
      challengeIntro="A national roadside retail network was struggling with fragmented FM delivery impacting revenue and customer experience."
      challenges={[
        { title: "Revenue-critical defects left unresolved", description: "Trading-critical equipment failures causing direct revenue loss." },
        { title: "Public hygiene & appearance complaints", description: "Customer-facing facility issues undermining brand reputation." },
        { title: "Forecourt safety actions not completed", description: "Critical safety compliance gaps creating regulatory risk." },
        { title: "Stores stuck chasing multiple FM vendors", description: "Management time lost to coordination and escalation." },
      ]}
      solutions={[
        { icon: Shield, title: "Unified Hard + Soft FM with one point of accountability", description: "Single-provider responsibility eliminating coordination overhead." },
        { icon: Clock, title: "Forecourt systems compliance with rapid-fire remediation", description: "High-speed response to critical safety and operational issues." },
        { icon: Car, title: "Night-works for zero trading disruption", description: "Strategic scheduling protecting revenue hours and customer experience." },
        { icon: TrendingUp, title: "Live job tracking via QR-linked asset tags", description: "Digital transparency providing real-time visibility and accountability." },
      ]}
      metricsTitle="Measurable Wins — 90 Days"
      metrics={[
        { value: "100", label: "Fire & life safety compliance", suffix: "%" },
        { value: "42", label: "Reactive response time reduction", prefix: "–", suffix: "%" },
        { value: "30", label: "Store manager satisfaction increase", prefix: "+", suffix: "%" },
        { value: "98", label: "SLA performance consistency", suffix: "%+" },
      ]}
      testimonial={{
        quote: "We finally stopped firefighting. EntireFM brought control back.",
        author: "National Retail FM Lead",
        role: "Service Station Network",
      }}
      relatedStudies={[
        { sector: "Retail", title: "Zero-Disruption Compliance Turnaround", metrics: ["100% fire compliance regained", "Zero trading interruptions"], slug: "/case-studies/retail-service-stations" },
        { sector: "Logistics", title: "Reducing reactive call-outs by 32%", metrics: ["98% SLA compliance", "18% energy savings"], slug: "/case-studies/logistics-distribution-hub" },
      ]}
      ctaTitle="Ready to bring control back to your retail estate?"
      ctaDescription="Get service station compliance support with instant response and unified accountability."
      ctaPrimaryLabel="Request Service Station Compliance Support"
    />
  );
};

export default ServiceStations;
