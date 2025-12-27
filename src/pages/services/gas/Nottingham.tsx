import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const GasSafetyNottingham = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is gas safety heightened in PBSA and heritage buildings?",
      answer: "PBSA has high occupancy density and vulnerable populations. Heritage buildings often have older gas installations with complex routing. Both carry elevated media risk if incidents occur. Full CP1/CP15 compliance is mandatory.",
    },
    {
      question: "What does full gas safety governance include?",
      answer: "Complete gas safety governance includes Gas Safe certification (CP1/CP15/CP42), annual boiler servicing, CO monitoring, flue integrity checks, emergency shut-off validation, and digital record keeping with renewal alerts.",
    },
    {
      question: "How do boiler energy optimisations benefit operators?",
      answer: "Boiler energy optimisation through burner tuning, control upgrades, and heat recovery reduces fuel consumption by 15-20%. For PBSA operators with year-round heating demands, payback periods are typically 12-18 months.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Nottingham",
    "description": "PBSA & heritage structures gas safety governance in Nottingham.",
    "areaServed": "Nottingham",
    "serviceType": "Gas Safety Compliance",
    "email": "nottingham@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nottingham",
      "addressCountry": "GB"
    }
  };

  const heroStats = [
    { value: "PBSA", label: "Specialist" },
    { value: "CP1/15", label: "Certified" },
    { value: "15-20", label: "Energy Savings", suffix: "%" },
    { value: "24/7", label: "Response" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gas Safety", href: "/services/gas-safety" },
    { label: "Nottingham" }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Safety & Boiler Compliance in Nottingham | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="PBSA & heritage structures gas safety in Nottingham. Full compliance governance, CO monitoring, and boiler energy optimisation." />
        <link rel="canonical" href="https://entirefm.com/services/gas-safety" />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Gas Safety Compliance – Nottingham"
        description="PBSA & heritage structures — heightened media risk management. Full compliance governance and boiler energy optimisation."
        stats={heroStats}
        primaryCTA={{
          label: "Book Audit",
          href: "/contact",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Checklist",
          href: "#",
          icon: Download
        }}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Nottingham's Safety Profile
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                PBSA & heritage structures → heightened media risk from gas safety incidents.
              </p>
              <p className="text-foreground font-medium">
                We deliver full gas safety & CO governance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Certification & Testing</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP1/CP15 commercial gas certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Annual boiler servicing
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CO monitoring & flue integrity
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Emergency shut-off validation
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Digital Governance</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    All certificates, engineer logs, and compliance records stored digitally with automated renewal alerts.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Boiler Energy Optimisation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Reduce operational costs for PBSA operators:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Burner Tuning</h4>
                  <p className="text-sm text-muted-foreground font-light">Optimise combustion efficiency without replacement</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Smart Controls</h4>
                  <p className="text-sm text-muted-foreground font-light">Zone-based demand management</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Students protected + cost reduction achieved — full gas safety compliance delivered across Nottingham PBSA estate.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Nottingham
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: City Centre, West Bridgford, Beeston, Colwick.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Students. Protect Heritage.</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 nottingham@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Book Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GasSafetyNottingham;
