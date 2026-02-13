import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Wrench, Package, LayoutGrid, ClipboardCheck, Hammer, Settings } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const GeneralMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "General Maintenance and Handyman Services" }
  ];

  const features = [
    {
      icon: Wrench,
      title: "Fixtures and Fittings",
      description: "Installation, repair, and replacement of shelving, notice boards, coat hooks, brackets, blinds, and all types of wall-mounted fixtures."
    },
    {
      icon: Package,
      title: "Furniture Assembly",
      description: "Office furniture assembly, workstation installation, desk reconfiguration, and furniture relocation for office moves and refits."
    },
    {
      icon: LayoutGrid,
      title: "Signage Installation",
      description: "Internal and external signage, wayfinding systems, health and safety signs, door numbering, and tenant identification boards."
    },
    {
      icon: ClipboardCheck,
      title: "Snagging and Defects",
      description: "Post-construction snagging, defect identification, and rectification works for new builds, refurbishments, and fit-out completions."
    },
    {
      icon: Hammer,
      title: "Minor Carpentry",
      description: "Door adjustments, drawer repairs, trim work, dado rail installation, and small-scale joinery tasks across commercial interiors."
    },
    {
      icon: Settings,
      title: "General Repairs",
      description: "Day-to-day reactive repairs that don't require specialist trades — from leaking taps and stiff doors to broken handles and damaged surfaces."
    }
  ];

  const faqs = [
    {
      question: "What counts as general maintenance?",
      answer: "General maintenance covers day-to-day tasks that keep a building operational and presentable but don't require specialist trade qualifications — furniture assembly, signage, fixtures, minor carpentry, snagging, and small repairs."
    },
    {
      question: "How do I log a maintenance request?",
      answer: "All requests are logged through our 24/7 helpdesk via phone, email, or online portal. Each job is given a unique reference number and tracked through to completion with status updates."
    },
    {
      question: "Can you provide a resident handyman?",
      answer: "Yes — for larger estates or high-footfall buildings, we can provide a dedicated multi-skilled operative on-site to handle day-to-day maintenance tasks, reducing response times and callout costs."
    },
    {
      question: "Do you handle tenant fit-out snagging?",
      answer: "Yes — we provide snagging and defect rectification services for new fit-outs, refurbishments, and post-construction handovers, ensuring all works meet the required specification before sign-off."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide general maintenance services across England and Wales, with multi-skilled operatives based in all major regions for rapid deployment."
    }
  ];

  return (
    <>
      <Helmet>
        <title>General Maintenance & Handyman Services | Commercial | EntireFM</title>
        <meta name="description" content="Commercial general maintenance and handyman services. Fixtures, furniture assembly, signage, snagging, carpentry, and day-to-day repairs across the UK." />
        <link rel="canonical" href="https://entirefm.com/services/general-maintenance" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="General Maintenance and Handyman Services"
        description="Commercial general maintenance and handyman services including fixtures, furniture assembly, signage, snagging, carpentry, and day-to-day repairs."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="General Maintenance and Handyman Services"
          description="Multi-skilled operatives for day-to-day commercial maintenance — fixtures, furniture, signage, snagging, and general repairs. No job too small."
          primaryCTA={{
            label: "Request Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Log a Job",
            href: "/contact",
            icon: Phone
          }}
        />

        <TrustBar />

        <ContentSection
          title="What Is Commercial General Maintenance?"
          subtitle="The day-to-day tasks that keep your buildings running smoothly"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Every commercial building generates a constant stream of minor maintenance tasks — broken handles, stiff doors, loose fixtures, furniture that needs assembling, signs that need mounting, and surfaces that need patching. Individually these tasks are small, but collectively they define how a building feels to its occupants and visitors.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Left unattended, minor maintenance issues accumulate into visible neglect that damages tenant satisfaction, undermines brand perception, and can escalate into safety concerns. A broken handrail becomes a trip hazard. A stiff fire door becomes a compliance issue. A missing sign becomes a wayfinding failure during an emergency.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM provides multi-skilled operatives who handle the full range of general maintenance tasks — from same-day reactive repairs to planned programmes of minor works. Every job is logged, tracked, and reported through our helpdesk system with photo evidence and completion records.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="General Maintenance Services" subtitle="Multi-skilled coverage for every day-to-day task">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "Multi-Skilled", label: "Operatives" },
            { value: "Same-Day", label: "Service" },
            { value: "UK Wide", label: "Coverage" },
            { value: "No Job", label: "Too Small" }
          ]}
          variant="gradient"
        />

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Need Reliable Day-to-Day Maintenance?"
          description="Our multi-skilled operatives handle everything from furniture assembly and signage to snagging and general repairs — keeping your buildings looking and working their best."
          primaryLabel="Request Proposal"
          primaryHref="/request-proposal"
          secondaryLabel="Contact Us"
          secondaryHref="/contact"
          variant="dark"
        />
      </div>
    </>
  );
};

export default GeneralMaintenance;
