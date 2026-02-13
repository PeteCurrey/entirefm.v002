import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Building2, Shield, CheckCircle2, TrendingDown } from "lucide-react";
import sectorImage from "@/assets/sector-pbsa-hero.jpg";

const ResidentialPBSA = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Residential PBSA FM Case Study | EntireFM",
        description: "FRA backlog cleared + reduced complaints fast at a high-rise residential block.",
        canonical: "https://entirefm.com/case-studies/residential-pbsa",
      }}
      heroImage={sectorImage}
      sector="PBSA / Residential Sector"
      sectorIcon={Building2}
      title="FRA Recovery & Resident Satisfaction Uplift for a High-Rise Block"
      subtitle="70+ overdue fire risk actions cleared in 8 weeks with zero resident disruption, transforming safety compliance and operational stability."
      breadcrumbLabel="PBSA Fire Risk Recovery"
      stats={[
        { value: "100", label: "FRA actions cleared", suffix: "%" },
        { value: "35", label: "Reactive call-outs reduced", suffix: "%" },
        { value: "22", label: "Resident satisfaction improved", suffix: "%" },
      ]}
      challengeIntro="A PBSA operator was facing mounting fire safety compliance issues alongside declining resident satisfaction and regulatory scrutiny risk."
      challenges={[
        { title: "70+ overdue FRA actions", description: "Accumulated compliance backlog creating serious regulatory and safety risks." },
        { title: "Fire doors failing statutory checks", description: "Critical life-safety components below required standards." },
        { title: "Rising resident complaints", description: "Maintenance issues eroding trust and satisfaction levels." },
        { title: "Risk of regulatory scrutiny", description: "Compliance failures threatening operational continuity." },
      ]}
      solutions={[
        { icon: Shield, title: "High-speed FRA action programme", description: "Rapid deployment strategy to clear the entire compliance backlog systematically." },
        { icon: CheckCircle2, title: "Door integrity remediation & compartmentation checks", description: "Comprehensive fire door programme restoring life-safety compartmentation." },
        { icon: Building2, title: "Night/weekend works to avoid resident disruption", description: "Strategic scheduling ensured minimal impact on resident experience." },
        { icon: TrendingDown, title: "Digital evidence & action log accessible for audits", description: "Complete documentation trail providing regulatory confidence and transparency." },
      ]}
      metrics={[
        { value: "100", label: "FRA actions cleared in 8 weeks", suffix: "%" },
        { value: "35", label: "Reactive call-outs reduced", prefix: "–", suffix: "%" },
        { value: "22", label: "Resident satisfaction improved", prefix: "+", suffix: "%" },
        { value: "100", label: "Block manager workload reduction", suffix: "%" },
      ]}
      testimonial={{
        quote: "EntireFM solved problems before they became complaints.",
        author: "Senior Property Manager",
        role: "PBSA Operator",
      }}
      relatedStudies={[
        { sector: "Healthcare", title: "Life-Critical Compliance & Environment Improvement", metrics: ["100% statutory compliance restored", "IAQ performance up 41%"], slug: "/case-studies/healthcare" },
        { sector: "Aviation", title: "Zero-Disruption Life Safety Overhaul", metrics: ["100% BS 5839 compliance", "Zero passenger disruption"], slug: "/case-studies/aviation" },
      ]}
      ctaTitle="Ready to fix life-safety backlogs fast?"
      ctaDescription="Get a fire risk recovery plan tailored to your residential portfolio."
      ctaPrimaryLabel="Fix Life-Safety Backlogs Fast"
    />
  );
};

export default ResidentialPBSA;
