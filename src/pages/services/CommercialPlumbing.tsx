import { Helmet } from "react-helmet";
import { ArrowRight, Phone, Droplets, Thermometer, ShowerHead, PipetteIcon, Gauge, Wrench } from "lucide-react";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { TrustBar } from "@/components/shared/TrustBar";
import ContentSection from "@/components/shared/ContentSection";
import FeatureCardGrid from "@/components/shared/FeatureCardGrid";
import StatsBanner from "@/components/shared/StatsBanner";
import CTASection from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const CommercialPlumbing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Commercial Plumbing Services" }
  ];

  const features = [
    {
      icon: Droplets,
      title: "Cold Water Systems",
      description: "Mains supply connections, storage tanks, booster pumps, distribution pipework, backflow prevention, and PRV installation."
    },
    {
      icon: Thermometer,
      title: "Hot Water Systems",
      description: "Cylinder servicing, calorifier maintenance, TMV installation, and temperature monitoring for legionella control."
    },
    {
      icon: ShowerHead,
      title: "Sanitary Ware & Fittings",
      description: "WC repairs, tap replacement, shower maintenance, sensor tap calibration, and accessible washroom equipment servicing."
    },
    {
      icon: PipetteIcon,
      title: "Drainage Systems",
      description: "High-pressure jetting, CCTV drainage surveys, grease trap cleaning, gully servicing, and blockage clearance."
    },
    {
      icon: Gauge,
      title: "Pumps & Pressure Systems",
      description: "Booster pumps, sump pumps, pressure vessel testing, PSSR compliance, and pump room maintenance."
    },
    {
      icon: Wrench,
      title: "Water Hygiene & L8 Compliance",
      description: "Legionella risk assessments, temperature monitoring, outlet flushing, water sampling, and tank cleaning to ACOP L8 standards."
    }
  ];

  const faqs = [
    {
      question: "What plumbing services do you provide for commercial buildings?",
      answer: "We cover all commercial plumbing including pipework installation and repairs, drainage, sanitary ware, pumps, water storage tanks, hot water cylinders, pressure vessels, and water treatment systems — both reactive repairs and planned maintenance."
    },
    {
      question: "What water hygiene compliance applies to commercial plumbing?",
      answer: "Commercial buildings require legionella risk assessments under ACOP L8. Hot and cold water systems need temperature monitoring, regular flushing of infrequently used outlets, and TMV testing. Storage tanks require annual cleaning and inspection."
    },
    {
      question: "How quickly can you respond to plumbing emergencies?",
      answer: "Our 24/7 helpdesk provides emergency response for burst pipes, leaks, drainage blockages, and hot water failures. Engineers are dispatched immediately for critical issues affecting building operations."
    },
    {
      question: "Do plumbing installations require building regulations approval?",
      answer: "Major plumbing works including new installations, system replacements, and modifications to drainage require building control notification. We handle all necessary documentation and inspections."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Plumbing Services | Pipework & Water Systems | EntireFM</title>
        <meta name="description" content="Commercial plumbing services for offices, industrial, and commercial buildings. Pipework, pumps, hot water systems, drainage, and water hygiene compliance." />
        <link rel="canonical" href="https://entirefm.com/services/plumbing" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Commercial Plumbing Services"
        description="Commercial plumbing services including pipework, pumps, hot water systems, drainage, and water hygiene compliance for commercial buildings."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Commercial Plumbing Services"
          description="Pipework, pumps, hot water systems, drainage, and water hygiene compliance for commercial buildings — with 24/7 emergency response."
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
          title="What Is Commercial Plumbing Maintenance?"
          subtitle="Keeping water systems safe, compliant, and operational"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Commercial plumbing infrastructure delivers potable water, removes waste, and provides hot water services to occupied buildings. Failed plumbing systems cause operational disruption, health and safety risks, and potential building damage from water ingress. Modern commercial plumbing includes water hygiene management, pressure system compliance, and energy-efficient hot water delivery.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Building owners have legal obligations under the Water Supply (Water Fittings) Regulations 1999 to prevent contamination of drinking water, under ACOP L8 to control legionella risks, and under Building Regulations Part G for sanitation and hot water safety. Pressure systems fall under PSSR regulations requiring written schemes of examination.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              EntireFM's plumbing engineers hold Water Regulations qualifications and deliver all works to Building Regulations standards. We provide both reactive emergency repairs and planned maintenance programmes covering all commercial plumbing systems.
            </p>
          </div>
        </ContentSection>

        <ContentSection title="Plumbing Systems and Services" subtitle="Complete coverage of commercial plumbing infrastructure">
          <FeatureCardGrid features={features} />
        </ContentSection>

        <StatsBanner
          stats={[
            { value: "Water Regs", label: "Approved" },
            { value: "24/7", label: "Emergency Cover" },
            { value: "L8 Compliant", label: "Water Hygiene" },
            { value: "UK Wide", label: "Coverage" }
          ]}
          variant="gradient"
        />

        <ContentSection title="Frequently Asked Questions">
          <FAQSection faqs={faqs} />
        </ContentSection>

        <CTASection
          title="Discuss Your Plumbing Requirements"
          description="Talk to our team about commercial plumbing services for your estate — from planned maintenance to 24/7 emergency cover."
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

export default CommercialPlumbing;
