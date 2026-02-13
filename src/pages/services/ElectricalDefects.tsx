import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Zap, Lightbulb, PlugZap, CircuitBoard, Power, Wrench } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const ElectricalDefects = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Electrical Fault Finding and Remedial Works" }
  ];

  const features = [
    {
      icon: CircuitBoard,
      title: "Circuit Fault Finding",
      description: "Tripping circuits, RCD faults, overloaded circuits, and intermittent power issues diagnosed and resolved by NICEIC-approved engineers."
    },
    {
      icon: Lightbulb,
      title: "Lighting Repairs",
      description: "Failed luminaires, flickering lights, control gear faults, dimmer failures, and emergency lighting repairs across all commercial lighting types."
    },
    {
      icon: PlugZap,
      title: "Socket & Switch Replacement",
      description: "Damaged sockets, faulty switches, broken faceplates, and USB charging point installations. All works certified to BS 7671."
    },
    {
      icon: Zap,
      title: "Distribution Board Work",
      description: "Consumer unit upgrades, MCB/RCBO replacements, busbar repairs, and distribution board modifications to accommodate new circuits."
    },
    {
      icon: Power,
      title: "Emergency Power Loss",
      description: "Immediate response to total or partial power loss, supply faults, and generator failures. Load prioritisation and temporary power solutions."
    },
    {
      icon: Wrench,
      title: "Minor Installations",
      description: "Additional sockets, data points, small power installations, EV charger connections, and minor electrical modifications with certification."
    }
  ];

  const faqs = [
    {
      question: "What electrical defects do you repair?",
      answer: "We handle all commercial electrical faults including tripping circuits, power loss, lighting failures, socket and switch defects, distribution board issues, and wiring faults. All repairs are completed by NICEIC-approved engineers to BS 7671 standards."
    },
    {
      question: "How quickly can you attend electrical faults?",
      answer: "Emergency electrical faults such as power loss and safety hazards are prioritised for immediate dispatch through our 24/7 helpdesk. Routine defects are typically attended same-day or next working day."
    },
    {
      question: "Do you issue certificates for electrical work?",
      answer: "Yes — all notifiable electrical work receives Electrical Installation Certificates (EIC) or Minor Works Certificates as required under BS 7671. These are essential for compliance and insurance purposes."
    },
    {
      question: "Can you handle EICR remedial works?",
      answer: "Yes — we carry out all remedial works arising from Electrical Installation Condition Reports (EICRs), including C1 (danger present), C2 (potentially dangerous), and C3 (improvement recommended) classifications."
    },
    {
      question: "Are your electricians qualified for commercial work?",
      answer: "All our electricians are NICEIC-approved, hold 18th Edition wiring regulations qualifications, and carry relevant JIB grading for commercial and industrial electrical work."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Fault Finding & Remedial Works | EntireFM</title>
        <meta name="description" content="Commercial electrical fault finding and remedial works. NICEIC-approved engineers for circuit faults, lighting repairs, power loss, and BS 7671 certified remedials." />
        <link rel="canonical" href="https://entirefm.com/services/electrical-defects" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Electrical Fault Finding and Remedial Works"
        description="Commercial electrical fault finding and remedial works by NICEIC-approved engineers. Circuit faults, lighting repairs, power loss response, and BS 7671 certified works."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Electrical Fault Finding and Remedial Works"
          description="NICEIC-approved engineers for commercial electrical defects — from tripping circuits and lighting failures to emergency power loss and EICR remedials."
          primaryCTA={{
            label: "Request Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Report a Fault (24/7)",
            href: "/contact",
            icon: Phone
          }}
        />

        <TrustBar />

        <ContentSection
          title="What Are Electrical Defect Remedials?"
          subtitle="Keeping commercial electrical systems safe and operational"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Electrical defects in commercial buildings range from nuisance faults like flickering lights and tripping circuits to serious safety hazards including exposed wiring, overloaded circuits, and complete power loss. Under the Electricity at Work Regulations 1989, employers and building owners must ensure electrical systems are maintained to prevent danger.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Many electrical defects are identified during Electrical Installation Condition Reports (EICRs) and require remedial action. C1 classifications (danger present) demand immediate attention, C2 (potentially dangerous) require urgent remediation, and C3 (improvement recommended) should be addressed at the next available opportunity. Failure to act on reported defects creates liability for the duty holder.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM provides same-day electrical fault finding and remedial works through NICEIC-approved engineers. All work is completed to BS 7671 (18th Edition Wiring Regulations) with appropriate certification issued for every job.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Electrical Remedial Services" subtitle="Comprehensive fault finding and repair for commercial installations">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "NICEIC", label: "Approved" },
            { value: "Same-Day", label: "Remedials" },
            { value: "BS 7671", label: "Compliant" },
            { value: "24/7", label: "Cover" }
          ]}
          variant="gradient"
        />

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Need Electrical Fault Finding or Remedials?"
          description="Our NICEIC-approved engineers provide same-day attendance for electrical defects with full BS 7671 certification on all completed works."
          primaryLabel="Request Proposal"
          primaryHref="/request-proposal"
          secondaryLabel="Report a Fault"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
};

export default ElectricalDefects;
