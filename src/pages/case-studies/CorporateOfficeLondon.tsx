import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Building2, Shield, CheckCircle2, Users } from "lucide-react";
import sectorImage from "@/assets/sector-offices-hero.jpg";

const CorporateOfficeLondon = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Case Study: Corporate Office Estate London | EntireFM",
        description: "How we delivered unified FM compliance across a 12-building corporate office estate in London, reducing reactive callouts by 34%.",
        canonical: "https://entirefm.com/case-studies/corporate-office-london",
      }}
      heroImage={sectorImage}
      sector="Corporate Offices"
      sectorIcon={Building2}
      title="Case Study: Corporate Office Estate — London"
      subtitle="12-building mixed-use corporate estate requiring unified compliance delivery, digital helpdesk implementation, and tenant satisfaction improvement."
      breadcrumbLabel="Corporate Office London"
      stats={[
        { value: "100", label: "Fire compliance achieved", suffix: "%" },
        { value: "34", label: "Reactive callouts reduced", suffix: "%" },
        { value: "41", label: "Tenant satisfaction increase", suffix: "%" },
        { value: "18", label: "Energy consumption reduced", suffix: "%" },
      ]}
      challengeIntro="Multi-tenanted corporate estate with fragmented service delivery across multiple contractors. Compliance gaps identified during insurance audit and tenant dissatisfaction with reactive response times."
      challenges={[
        { title: "Fragmented service delivery across multiple contractors", description: "Lack of coordination creating compliance gaps and tenant frustration." },
        { title: "Compliance gaps identified during insurance audit", description: "Serious fire safety and electrical shortfalls requiring urgent remediation." },
        { title: "Tenant dissatisfaction with reactive response times", description: "Lack of visibility on maintenance activities eroding occupier confidence." },
        { title: "Need for unified digital platform", description: "Estate management required single point of contact and proactive maintenance." },
      ]}
      solutionTitle="Our Response"
      solutions={[
        { icon: Shield, title: "60-day mobilisation with full compliance audit and remedial closure", description: "Rapid deployment clearing all outstanding compliance actions." },
        { icon: Users, title: "Digital helpdesk with tenant liaison protocols and SLA tracking", description: "Transparent communication channels with real-time visibility." },
        { icon: CheckCircle2, title: "Out-of-hours maintenance scheduling", description: "Minimizing occupier disruption through strategic work timing." },
        { icon: Building2, title: "CAFM platform integration with real-time compliance dashboards", description: "Digital transformation providing estate-wide compliance visibility." },
      ]}
      metrics={[
        { value: "100", label: "Fire compliance achieved", suffix: "%" },
        { value: "34", label: "Reactive callouts reduced", suffix: "%" },
        { value: "41", label: "Tenant satisfaction increase", suffix: "%" },
        { value: "18", label: "Energy consumption reduced", suffix: "%" },
      ]}
      testimonial={{
        quote: "Entire FM delivered what our previous provider couldn't — unified compliance visibility, rapid response times, and a digital platform our tenants actually use. The transformation in 60 days was remarkable.",
        author: "Estate Director",
        role: "London Corporate Portfolio",
      }}
      relatedStudies={[
        { sector: "Corporate", title: "Workplace Experience Overhaul", metrics: ["Comfort complaints reduced 40%", "IAQ scores improved 37%"], slug: "/case-studies/corporate-hq" },
        { sector: "Healthcare", title: "Life-Critical Compliance & Environment Improvement", metrics: ["100% statutory compliance restored", "IAQ performance up 41%"], slug: "/case-studies/healthcare" },
      ]}
      ctaTitle="Request Similar Results"
      ctaDescription="Get a tailored proposal for your corporate estate."
    />
  );
};

export default CorporateOfficeLondon;
