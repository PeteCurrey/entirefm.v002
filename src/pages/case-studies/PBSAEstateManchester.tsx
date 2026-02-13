import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Building2, Shield, Droplets, CheckCircle2 } from "lucide-react";
import sectorImage from "@/assets/sector-residential-hero.jpg";

const PBSAEstateManchester = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Case Study: PBSA Estate Manchester | EntireFM",
        description: "How we delivered full compliance across 30+ PBSA buildings in 3 weeks with zero student disruption.",
        canonical: "https://entirefm.com/case-studies/pbsa-estate-manchester",
      }}
      heroImage={sectorImage}
      sector="PBSA"
      sectorIcon={Building2}
      title="Case Study: PBSA Estate — Manchester"
      subtitle="30+ building student accommodation portfolio requiring rapid compliance mobilization, fire safety assurance, and water hygiene regime implementation."
      breadcrumbLabel="PBSA Estate Manchester"
      stats={[
        { value: "30", label: "Buildings brought into compliance", suffix: "+" },
        { value: "3", label: "Compliance delivery timeline", suffix: " weeks" },
        { value: "100", label: "Fire risk eliminated", suffix: "%" },
        { value: "0", label: "Student disruption incidents" },
      ]}
      challengeIntro="High-density student accommodation with fragmented compliance records and outstanding fire safety remedials. Previous provider failed to implement water hygiene regime resulting in legionella risk."
      challenges={[
        { title: "Fragmented compliance records across 30+ buildings", description: "Lack of unified documentation creating audit and insurance risks." },
        { title: "Outstanding fire safety remedials", description: "Critical life-safety works overdue and threatening operational continuity." },
        { title: "Failed water hygiene regime (legionella risk)", description: "Previous provider negligence creating serious health hazards." },
        { title: "Insurance renewal threatened due to compliance gaps", description: "Regulatory and financial consequences of accumulated failures." },
      ]}
      solutionTitle="Our Response"
      solutions={[
        { icon: Shield, title: "3-week emergency mobilization with full compliance audit", description: "Rapid deployment across all 30 buildings with systematic audit methodology." },
        { icon: CheckCircle2, title: "Critical fire safety remedials closed within 10 days", description: "Priority-driven approach eliminating highest-risk items first." },
        { icon: Droplets, title: "Water hygiene regime implemented with temperature monitoring", description: "Complete Legionella control strategy across the entire estate." },
        { icon: Building2, title: "Student-friendly service protocols with clear communication", description: "Minimal disruption approach maintaining resident satisfaction." },
      ]}
      metrics={[
        { value: "30", label: "Buildings brought into compliance", suffix: "+" },
        { value: "3", label: "Compliance delivery timeline", suffix: " weeks" },
        { value: "100", label: "Fire risk eliminated", suffix: "%" },
        { value: "0", label: "Student disruption incidents" },
      ]}
      testimonial={{
        quote: "Entire FM mobilized faster than any provider we've worked with. Within 3 weeks, every building was compliant, the water hygiene risk was eliminated, and our insurance renewal was secured. The students didn't even notice the work happening.",
        author: "Portfolio Director",
        role: "Manchester PBSA Operator",
      }}
      relatedStudies={[
        { sector: "Residential", title: "FRA Recovery & Resident Satisfaction Uplift", metrics: ["100% FRA actions cleared in 8 weeks", "Resident satisfaction +22%"], slug: "/case-studies/residential-pbsa" },
        { sector: "Healthcare", title: "Life-Critical Compliance & Environment Improvement", metrics: ["100% statutory compliance restored", "Zero operational shutdowns"], slug: "/case-studies/healthcare" },
      ]}
      ctaTitle="Request Similar Results"
      ctaDescription="Rapid compliance delivery for your PBSA portfolio."
    />
  );
};

export default PBSAEstateManchester;
