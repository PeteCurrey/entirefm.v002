import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Droplets, Thermometer, Search, ShieldAlert, Wrench, CloudRain } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const LeakDetectionRepair = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Leak Detection and Repair" }
  ];

  const features = [
    {
      icon: Droplets,
      title: "Burst Pipes & Mains Leaks",
      description: "Emergency isolation and repair of burst pipework, mains failures, and pressurised system leaks causing flooding or water damage."
    },
    {
      icon: CloudRain,
      title: "Roof & External Leaks",
      description: "Investigation and repair of roof leaks, gutter failures, flashing defects, and external water ingress affecting building fabric."
    },
    {
      icon: ShieldAlert,
      title: "Internal Leak Investigation",
      description: "Tracing hidden leaks within walls, floors, and ceiling voids using non-invasive detection methods to minimise disruption."
    },
    {
      icon: Thermometer,
      title: "Thermal Imaging Surveys",
      description: "Non-invasive thermal imaging to identify moisture ingress, hidden leaks, and insulation failures without destructive investigation."
    },
    {
      icon: Search,
      title: "Trace and Access",
      description: "Systematic leak tracing using acoustic detection, tracer gas, and moisture mapping to locate the source before opening up."
    },
    {
      icon: Wrench,
      title: "Temporary Containment",
      description: "Immediate make-safe measures including temporary repairs, water extraction, drying equipment deployment, and damage limitation."
    }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to a water leak?",
      answer: "Our 24/7 helpdesk dispatches engineers immediately for emergency leaks. Response times depend on location and severity, with critical flooding and burst pipes prioritised for immediate attendance."
    },
    {
      question: "What leak detection methods do you use?",
      answer: "We use thermal imaging cameras, acoustic listening devices, tracer gas detection, moisture meters, and endoscope cameras. These non-invasive methods locate leaks accurately before any opening up, minimising damage and disruption."
    },
    {
      question: "Do you handle insurance claims for water damage?",
      answer: "We provide full documentation including photographic evidence, investigation reports, and repair specifications that support insurance claims. Our trace-and-access reports are accepted by major insurers."
    },
    {
      question: "Can you repair leaks in occupied buildings?",
      answer: "Yes — our engineers are experienced in working within occupied commercial environments. We use containment measures, dust sheets, and controlled access to minimise disruption to building operations."
    },
    {
      question: "Do you offer planned leak prevention?",
      answer: "Yes — we provide pipework condition surveys, valve inspections, joint integrity testing, and water system health checks as part of planned maintenance programmes to identify potential failures before they occur."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Leak Detection and Repair Services | Commercial | EntireFM</title>
        <meta name="description" content="Commercial leak detection and repair services. Thermal imaging, trace and access, burst pipe repairs, and 24/7 emergency water leak response across the UK." />
        <link rel="canonical" href="https://entirefm.com/services/leak-detection-repair" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Leak Detection and Repair Services"
        description="Commercial leak detection and repair including thermal imaging, trace and access, burst pipe repairs, and emergency water leak response."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Leak Detection and Repair Services"
          description="Rapid response leak detection, trace and access, and permanent repair for commercial buildings — minimising water damage, downtime, and disruption."
          primaryCTA={{
            label: "Request Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Report a Leak (24/7)",
            href: "/contact",
            icon: Phone
          }}
        />

        <TrustBar />

        <ContentSection
          title="Why Rapid Leak Response Matters"
          subtitle="Protecting your building from water damage"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Water leaks in commercial buildings escalate rapidly. A small, hidden leak can cause extensive structural damage, mould growth, electrical hazards, and business disruption if not identified and repaired quickly. Burst pipes and mains failures can flood entire floors within minutes, damaging equipment, stock, and building fabric.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Many leaks are hidden — within wall cavities, under floor slabs, above suspended ceilings, or within service risers. Traditional investigation methods involving extensive opening up are costly, disruptive, and often unnecessary. Modern non-invasive detection techniques including thermal imaging, acoustic listening, and tracer gas can pinpoint leak sources accurately before any destructive investigation begins.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM provides 24/7 emergency leak response with engineers equipped with detection technology, repair materials, and temporary containment equipment. We handle everything from initial make-safe to permanent repair, with full documentation for insurance purposes.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Leak Detection and Repair Services" subtitle="From emergency response to planned prevention">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "Rapid", label: "Response" },
            { value: "Trace & Access", label: "Specialists" },
            { value: "Thermal Imaging", label: "Equipped" },
            { value: "24/7", label: "Cover" }
          ]}
          variant="gradient"
        />

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Need Leak Detection or Emergency Repair?"
          description="Our engineers are equipped with thermal imaging, acoustic detection, and repair materials for immediate response to water leaks across your commercial estate."
          primaryLabel="Request Proposal"
          primaryHref="/request-proposal"
          secondaryLabel="Report a Leak"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
};

export default LeakDetectionRepair;
