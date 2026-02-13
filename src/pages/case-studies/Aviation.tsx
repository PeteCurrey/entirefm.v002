import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Plane, Shield, Clock, CheckCircle2 } from "lucide-react";
import sectorImage from "@/assets/sector-airports-hero.jpg";

const Aviation = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Aviation FM Case Study | EntireFM",
        description: "Critical fire compliance delivered with zero operational gaps across live aviation terminals.",
        canonical: "https://entirefm.com/case-studies/aviation",
      }}
      heroImage={sectorImage}
      sector="Aviation Sector"
      sectorIcon={Plane}
      title="Zero-Disruption Life Safety Overhaul in a Live Terminal"
      subtitle="Critical fire and life-safety upgrades delivered airside and landside without impacting passenger flow or operational security."
      breadcrumbLabel="Aviation Terminal Life Safety"
      stats={[
        { value: "100", label: "BS 5839 compliance", suffix: "%" },
        { value: "0", label: "Life-safety audit actions" },
        { value: "0", label: "Disruption to passenger flow" },
        { value: "1", label: "Provider accountability point" },
      ]}
      challengeIntro="A major travel hub needed critical fire and life-safety upgrades — airside and landside — without impacting passenger movement or operational security."
      challenges={[
        { title: "Legacy fire alarm zones with reliability issues", description: "Outdated systems created compliance risks and operational uncertainty." },
        { title: "Emergency lighting non-compliance risk", description: "Failure to meet statutory requirements threatened operational continuity." },
        { title: "High congestion = zero tolerance for closures", description: "Passenger movement and flight schedules demanded precision timing." },
        { title: "Multiple contractors… zero accountability", description: "Fragmented delivery created coordination chaos and compliance gaps." },
      ]}
      solutions={[
        { icon: Shield, title: "End-to-end life-safety remediation under strict aviation RAMS", description: "Comprehensive safety protocols tailored to aviation operational requirements." },
        { icon: Clock, title: "Night-works and micro-zoning around flight schedules", description: "Strategic scheduling ensured zero impact on passenger flow and operations." },
        { icon: CheckCircle2, title: "ETA-tracked access + work sequencing with operations teams", description: "Real-time coordination with terminal operations maintained seamless integration." },
        { icon: Plane, title: "Compliance reporting structured for CAA scrutiny", description: "Documentation and evidence prepared to the highest regulatory standards." },
      ]}
      metrics={[
        { value: "100", label: "BS 5839 compliance achieved", suffix: "%" },
        { value: "0", label: "Life-safety audit actions" },
        { value: "0", label: "Disruption to passenger flow" },
        { value: "1", label: "Provider accountability point" },
      ]}
      testimonial={{
        quote: "They respected aviation safety and operational tempo — rare in FM.",
        author: "Head of Terminal Operations",
        role: "Major UK Airport",
      }}
      relatedStudies={[
        { sector: "Industrial", title: "Operational Uptime & Safety Retention for a Critical Production Site", metrics: ["Production downtime cut by 53%", "0 H&S enforcement actions"], slug: "/case-studies/industrial-plant" },
        { sector: "Healthcare", title: "Life-Critical Compliance & Environment Improvement", metrics: ["100% statutory compliance restored", "IAQ performance up 41%"], slug: "/case-studies/healthcare" },
        { sector: "Retail", title: "Instant Response FM for a High-Footfall Estate", metrics: ["Fire & life safety compliance back to 100%", "Reactive response time cut by 42%"], slug: "/case-studies/service-stations" },
      ]}
      ctaTitle="Ready to secure mission-critical compliance?"
      ctaDescription="Get an aviation-compliant fire safety plan for your terminal or facility."
      ctaPrimaryLabel="Secure Mission-Critical Compliance"
    />
  );
};

export default Aviation;
