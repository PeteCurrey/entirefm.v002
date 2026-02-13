import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Package, Wrench, Zap, TrendingDown, Target } from "lucide-react";
import sectorImage from "@/assets/sector-logistics-hero.jpg";

const LogisticsDistributionHub = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Logistics FM Case Study | EntireFM",
        description: "Reduced downtime & energy costs with proactive PPM strategy at a regional distribution hub.",
        canonical: "https://entirefm.com/case-studies/logistics-distribution-hub",
      }}
      heroImage={sectorImage}
      sector="Logistics Sector"
      sectorIcon={Package}
      title="Improving Uptime & Energy Efficiency at a Regional Distribution Hub"
      subtitle="How strategic PPM restructuring and energy optimisation eliminated firefighting and delivered measurable operational improvements."
      breadcrumbLabel="Logistics Distribution Hub"
      stats={[
        { value: "32", label: "Reactive incidents reduced", suffix: "%" },
        { value: "87", label: "First-time fix rate", suffix: "%" },
        { value: "18", label: "Energy savings achieved", suffix: "%" },
        { value: "98", label: "SLA compliance achieved", suffix: "%" },
      ]}
      challengeIntro="A 24/7 logistics centre with a rising volume of reactive call-outs, increasing downtime hotspots and escalating energy bills due to ageing HVAC and lighting."
      challenges={[
        { title: "Poor visibility of asset performance", description: "Lack of structured asset tracking meant failures were reactive, not preventable." },
        { title: "Failures during peak loading hours", description: "Critical breakdowns coincided with high-volume operations, compounding delays." },
        { title: "Environment complaints from operators", description: "Inadequate temperature control affected staff comfort and productivity." },
        { title: "SLA breaches with incumbent provider", description: "Persistent non-compliance eroded trust and operational predictability." },
      ]}
      solutionTitle="Our Approach"
      solutions={[
        { icon: Wrench, title: "Complete PPM restructure in line with asset condition scoring", description: "Implemented data-driven preventative maintenance schedules based on real asset performance." },
        { icon: Zap, title: "Lighting upgrade to LED + enhanced controls", description: "Energy-efficient lighting with intelligent controls reduced consumption and improved working conditions." },
        { icon: TrendingDown, title: "HVAC optimisation targeting energy waste", description: "Fine-tuned climate control systems to eliminate waste and improve environmental stability." },
        { icon: Target, title: "Job logging & ETA transparency through EntireFM portal", description: "Real-time visibility into service requests and engineer deployment eliminated uncertainty." },
        { icon: Package, title: "Night-shift engineer attendance to avoid disruption", description: "Scheduled maintenance during off-peak hours ensured zero impact on operations." },
      ]}
      metricsTitle="The Outcome — First 6 Months"
      metrics={[
        { value: "32", label: "Reactive incidents reduced", prefix: "–", suffix: "%" },
        { value: "87", label: "First-time fix rate", suffix: "%" },
        { value: "18", label: "Energy savings achieved", suffix: "%" },
        { value: "98", label: "SLA compliance achieved", suffix: "%" },
      ]}
      testimonial={{
        quote: "EntireFM stabilised our estate inside one quarter. We now run without firefighting.",
        author: "Regional Operations Manager",
        role: "National Logistics Provider",
      }}
      relatedStudies={[
        { sector: "Industrial", title: "Operational Uptime & Safety Retention for a Critical Production Site", metrics: ["Production downtime cut by 53%", "0 H&S enforcement actions"], slug: "/case-studies/industrial-plant" },
        { sector: "Retail", title: "Instant Response FM for a High-Footfall Estate", metrics: ["Fire compliance back to 100%", "Reactive response time cut by 42%"], slug: "/case-studies/service-stations" },
      ]}
      ctaTitle="Ready for similar results?"
      ctaDescription="Get a logistics uptime plan tailored to your distribution operation."
      ctaPrimaryLabel="Request a Logistics Uptime Plan"
    />
  );
};

export default LogisticsDistributionHub;
