import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { ShoppingBag, Flame, Clock, AlertTriangle, ArrowRight } from "lucide-react";
import sectorImage from "@/assets/sector-service-stations-hero.jpg";

const RetailServiceStations = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Retail FM Case Study | EntireFM",
        description: "Zero disruption compliance uplift for a national retail estate.",
        canonical: "https://entirefm.com/case-studies/retail-service-stations",
      }}
      heroImage={sectorImage}
      sector="Retail Sector"
      sectorIcon={ShoppingBag}
      title="Zero-Disruption Compliance Turnaround Across a Live Trading Estate"
      subtitle="Achieving full fire compliance and brand-standard presentation without impacting trading operations."
      breadcrumbLabel="Retail & Service Stations"
      stats={[
        { value: "100", label: "Fire compliance regained", suffix: "%" },
        { value: "0", label: "Trading interruptions caused" },
        { value: "21", label: "Comfort complaints reduction", suffix: "%" },
      ]}
      challengeIntro="A portfolio of high-footfall retail & forecourt facilities was riddled with overdue compliance and brand-impacting defects."
      challenges={[
        { icon: Flame, title: "Fire system gaps", description: "Critical fire safety equipment was overdue for inspection and maintenance." },
        { icon: AlertTriangle, title: "Slips/trips hazards causing customer friction", description: "Visible defects and safety hazards undermined brand perception." },
        { icon: Clock, title: "Store teams overwhelmed with chasing contractors", description: "Fragmented FM coordination drained operational focus." },
        { title: "AC comfort complaints", description: "Inconsistent climate control affected customer experience and staff conditions." },
      ]}
      solutionTitle="Our Approach"
      solutions={[
        { icon: Flame, title: "Rapid fire compliance remediation", description: "Prioritised and executed urgent fire safety works to eliminate compliance gaps." },
        { icon: Clock, title: "Retail-friendly out-of-hours execution", description: "All disruptive works conducted outside trading hours to protect revenue." },
        { icon: ShoppingBag, title: "Guest-facing aesthetic refreshes", description: "Discreet improvements to front-of-house areas restored brand standards." },
        { icon: AlertTriangle, title: "Installation of intelligent job categorisation", description: "Critical vs. non-critical prioritisation ensured urgent risks were addressed first." },
        { icon: ArrowRight, title: "Local engineers deployed for immediate response", description: "Regional resource allocation enabled rapid on-site attendance." },
      ]}
      metricsTitle="The Outcome — First 90 Days"
      metrics={[
        { value: "100", label: "Fire compliance regained", suffix: "%" },
        { value: "0", label: "Trading interruptions caused" },
        { value: "21", label: "Comfort complaints reduction", prefix: "–", suffix: "%" },
      ]}
      testimonial={{
        quote: "They didn't cause a single trading interruption. That's the difference.",
        author: "Area Facilities Lead",
        role: "National Retail Portfolio",
      }}
      relatedStudies={[
        { sector: "Retail", title: "Instant Response FM for a High-Footfall Estate", metrics: ["Fire compliance back to 100%", "Reactive response time cut by 42%"], slug: "/case-studies/service-stations" },
        { sector: "Hospitality", title: "Revenue Protection Through Rapid Reactive", metrics: ["28 rooms restored to revenue", "94% first-time fix rate"], slug: "/case-studies/hospitality" },
      ]}
      ctaTitle="Need compliance without disruption?"
      ctaDescription="Get retail compliance back under control with zero impact on trading."
      ctaPrimaryLabel="Request Retail Compliance Review"
    />
  );
};

export default RetailServiceStations;
