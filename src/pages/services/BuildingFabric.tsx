import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Hammer, DoorOpen, PaintBucket, Wrench, Accessibility, Building2 } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const BuildingFabric = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Building Fabric Maintenance" }
  ];

  const features = [
    {
      icon: Hammer,
      title: "Internal Repairs",
      description: "Door sets, locks, glazing, floor repairs, ceilings, walls, and interior finishes maintained to protect occupant safety and brand image."
    },
    {
      icon: Building2,
      title: "External Structure",
      description: "Roofing, cladding, guttering, brickwork, and blockwork repairs to maintain weatherproofing and structural integrity."
    },
    {
      icon: DoorOpen,
      title: "Fire Doors & Passive Fire",
      description: "Fire door inspections, certification, seal replacement, intumescent upgrades, and compartmentation integrity works."
    },
    {
      icon: Wrench,
      title: "Joinery & Carpentry",
      description: "Fixings, fixtures, cabinetry, reception features, and bespoke joinery for commercial interiors."
    },
    {
      icon: PaintBucket,
      title: "Paint, Decor & Dilapidations",
      description: "Planned redecoration programmes, make-good works for lease compliance, and end-of-tenancy dilapidations."
    },
    {
      icon: Accessibility,
      title: "Accessibility Adjustments",
      description: "DDA compliance modifications including ramps, handrails, ironmongery upgrades, and reasonable adjustments."
    }
  ];

  const faqs = [
    {
      question: "What does building fabric maintenance include?",
      answer: "Everything that forms the physical structure — walls, floors, doors, roofs, fixtures, passive fire elements and finishing works."
    },
    {
      question: "Can you work inside operational hours?",
      answer: "Yes — clean, controlled, low-disturbance repairs are standard procedure. We plan works around your building's operating schedule to minimise disruption."
    },
    {
      question: "Do you handle fire door compliance?",
      answer: "Absolutely — certification, remedials, seals, and compartmentation integrity. All works comply with the Regulatory Reform (Fire Safety) Order 2005."
    },
    {
      question: "Do you provide preventative maintenance plans?",
      answer: "Yes — targeted plans that help reduce reactive requests through condition surveys, lifecycle planning, and seasonal resilience checks."
    },
    {
      question: "What areas of the UK do you cover?",
      answer: "We provide building fabric maintenance services across England and Wales, with engineers based in all major regions for rapid response."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Fabric Repairs & Maintenance UK | EntireFM</title>
        <meta name="description" content="Commercial building fabric maintenance, repairs, and refurbishment. Internal repairs, fire doors, joinery, decoration, and accessibility works across the UK." />
        <link rel="canonical" href="https://entirefm.com/services/building-fabric" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Building Fabric Maintenance"
        description="Building fabric maintenance, repairs, and refurbishment for commercial properties across the UK"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Building Fabric Maintenance and Repairs"
          description="Fast-response fabric repairs and planned upkeep that protect safety, brand image, and operational continuity across your commercial estate."
          primaryCTA={{
            label: "Request Proposal",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "24/7 Helpdesk",
            href: "/contact",
            icon: Phone
          }}
        />

        <TrustBar />

        <ContentSection
          title="What Is Building Fabric Maintenance?"
          subtitle="Protecting the physical structure and appearance of your commercial buildings"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Building fabric maintenance covers everything that forms the physical structure and finish of a commercial building — walls, floors, ceilings, doors, roofs, windows, and all interior and exterior finishes. When fabric elements deteriorate, the consequences extend far beyond aesthetics: safety compliance is compromised, tenant satisfaction drops, insurer confidence weakens, and operational continuity is at risk.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Under the Regulatory Reform (Fire Safety) Order 2005, the Responsible Person must ensure fire doors, compartmentation, and escape routes are properly maintained. The Workplace (Health, Safety and Welfare) Regulations 1992 require that floors, traffic routes, doors, and windows are maintained in safe condition. Building owners also have obligations under lease agreements to maintain the fabric to agreed standards.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM provides multi-trade fabric maintenance across commercial estates, combining reactive repairs with planned programmes to reduce long-term costs. Our engineers handle everything from minor repairs to major refurbishment — with digital reporting, photo evidence, and full audit trails on every job.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Building Fabric Services" subtitle="Comprehensive coverage across all fabric elements">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "Multi-Trade", label: "Workforce" },
            { value: "Same-Day", label: "Response Available" },
            { value: "UK Wide", label: "Coverage" },
            { value: "Digital", label: "Reporting" }
          ]}
          variant="gradient"
        />

        <ContentSection
          title="Planned Works That Reduce Reactive Spend"
          variant="muted"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              We monitor building condition and intervene before failure results in cost or complaint. Our planned fabric programmes include condition surveys, lifecycle planning, high-risk asset watchlists, seasonal resilience checks, and minor works to eliminate repeat faults.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Fabric failures can trigger FRA breaches from fire door damage, slips and trips from flooring issues, security risks from defective access points, and leaks or damp affecting health and insurance coverage. Our proactive approach converts these weak points into managed risks with clear accountability.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Stop Letting Minor Defects Turn Into Major Costs"
          description="Get a building fabric partner who keeps you ahead of risk — not reacting to it."
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

export default BuildingFabric;
