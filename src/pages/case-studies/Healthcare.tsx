import CaseStudyTemplate from "@/components/shared/CaseStudyTemplate";
import { Heart, Shield, Wind, Droplets } from "lucide-react";
import sectorImage from "@/assets/sector-healthcare-hero.jpg";

const Healthcare = () => {
  return (
    <CaseStudyTemplate
      seo={{
        title: "Healthcare FM Case Study | EntireFM",
        description: "Zero shutdown remediation & IAQ uplift for a healthcare facility achieving 100% statutory compliance.",
        canonical: "https://entirefm.com/case-studies/healthcare",
      }}
      heroImage={sectorImage}
      sector="Healthcare / Clinical"
      sectorIcon={Heart}
      title="Life-Critical Compliance & Environment Improvement in a Healthcare Facility"
      subtitle="A healthcare facility achieving 100% statutory compliance and 41% IAQ improvement through zero-contamination protocols and phased remediation."
      breadcrumbLabel="Healthcare Compliance & Environment"
      stats={[
        { value: "100", label: "Statutory compliance restored", suffix: "%" },
        { value: "41", label: "IAQ performance improvement", suffix: "%" },
        { value: "0", label: "Infection-risk observations" },
        { value: "0", label: "Operational shutdowns" },
      ]}
      challengeIntro="A healthcare facility was facing severe compliance risk and environmental quality concerns affecting patient safety and regulatory standing."
      challenges={[
        { title: "Severe compliance risk from legacy systems", description: "Outdated fire, emergency, and life-safety infrastructure threatening continuity." },
        { title: "Patient comfort & infection control concerns", description: "Environmental quality impacting clinical outcomes and patient wellbeing." },
        { title: "Mounting audit findings & insurer scrutiny", description: "Regulatory pressure from accumulating compliance failures." },
        { title: "Sensitive environment with vulnerable occupancy", description: "Works requiring highest standards of care and contamination control." },
      ]}
      solutions={[
        { icon: Shield, title: "Fire safety and emergency lighting uplift in phased sections", description: "Strategic sequencing maintaining full operational continuity throughout works." },
        { icon: Wind, title: "HVAC clean-air performance recovery (filter upgrade + airflow balance)", description: "Environmental system optimization protecting patient comfort and clinical standards." },
        { icon: Droplets, title: "Water hygiene programme re-engineered to HSG274", description: "Complete Legionella control strategy meeting healthcare regulatory standards." },
        { icon: Heart, title: "Zero-contamination work protocols enforced", description: "Infection prevention and control embedded throughout delivery methodology." },
      ]}
      metrics={[
        { value: "100", label: "Statutory compliance restored and verified", suffix: "%" },
        { value: "41", label: "IAQ performance improvement", prefix: "+", suffix: "%" },
        { value: "0", label: "Infection-risk observations returned" },
        { value: "0", label: "Operational shutdowns during works" },
      ]}
      testimonial={{
        quote: "They treated the environment like lives depended on it — because they do.",
        author: "Clinical Facilities Lead",
        role: "Healthcare Facility",
      }}
      relatedStudies={[
        { sector: "Aviation", title: "Zero-Disruption Life Safety Overhaul in a Live Terminal", metrics: ["100% BS 5839 compliance", "Zero passenger disruption"], slug: "/case-studies/aviation" },
        { sector: "Residential", title: "FRA Recovery & Resident Satisfaction Uplift", metrics: ["100% FRA actions cleared in 8 weeks", "Resident satisfaction +22%"], slug: "/case-studies/residential-pbsa" },
      ]}
      ctaTitle="Ready to secure healthcare-grade compliance?"
      ctaDescription="Get life-critical facilities management for your healthcare environment."
      ctaPrimaryLabel="Secure Healthcare-Grade Compliance"
    />
  );
};

export default Healthcare;
