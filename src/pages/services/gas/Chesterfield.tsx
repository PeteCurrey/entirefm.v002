import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const GasSafetyChesterfield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is gas safety critical in logistics and warehouse environments?",
      answer: "Large-space heating systems in logistics facilities operate continuously to maintain environmental controls for stored goods and staff comfort. Gas safety failures create CO exposure risk, operational shutdown, and insurance invalidation.",
    },
    {
      question: "How does energy-efficiency focus reduce heating costs?",
      answer: "Large-space heating is inherently expensive. Burner optimisation, zone control, and heat recovery systems reduce fuel consumption by 20-35% in warehouse environments. For 24/7 operations, payback periods are typically 12-18 months.",
    },
    {
      question: "Can gas safety testing be scheduled around logistics operations?",
      answer: "Yes. We schedule all gas safety inspections, boiler servicing, and compliance certification during planned shutdowns or out-of-hours to maintain operational flow and avoid disruption to logistics schedules.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Chesterfield",
    "description": "Logistics + warehouse heating compliance in Chesterfield with CO protection.",
    "areaServed": "Chesterfield",
    "serviceType": "Gas Safety Compliance",
    "email": "chesterfield@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chesterfield",
      "addressCountry": "GB"
    }
  };

  return (
    <>
      <Helmet>
        <title>Gas Safety & Boiler Compliance in Chesterfield | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Logistics + warehouse heating compliance in Chesterfield. Gas safety with CO protection and energy-efficiency focus to reduce large-space heating costs." />
        <link rel="canonical" href="https://entirefm.com/services/gas-safety" />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gas Safety", href: "/services/gas-safety" },
          { label: "Chesterfield" }
        ]} 
      />

      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/placeholder.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-white py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Gas Safety Compliance – Chesterfield
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Logistics + warehouse heating compliance with CO protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => trackProposalRequest('gas-chesterfield')}
                asChild
              >
                <Link to="/contact">
                  Book Survey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white hover:bg-white hover:text-charcoal"
                onClick={() => trackDownload('gas-compliance-checklist')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Logistics Gas Checklist
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gas Safety", href: "/services/gas-safety" },
          { label: "Chesterfield" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Logistics Gas Safety Requirements
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Logistics + warehouse heating compliance with CO protection is essential for continuous operations.
              </p>
              <p className="text-foreground font-medium">
                We deliver compliance that protects workforce safety and operational continuity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Compliance Testing</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP1/CP15 commercial gas certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Large-space heating system validation
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CO monitoring & ventilation checks
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Emergency shut-off testing
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Digital Records</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    All certifications online with historical logs and automated renewal notifications.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    Always audit-ready.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy-Efficiency Focus
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Energy-efficiency focus to reduce large-space heating costs:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Zone Control</h4>
                  <p className="text-sm text-muted-foreground font-light">Heat only occupied areas during operational hours</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Burner Optimisation</h4>
                  <p className="text-sm text-muted-foreground font-light">Reduce fuel consumption by 20-35%</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Multi-site DC compliance programme — DC asset safety improved with zero operational disruption.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Chesterfield
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: Town Centre, Tapton, Clay Cross, Staveley, Whittington Moor.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Safe Operations. Lower Costs.</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 chesterfield@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Book Water Hygiene Visit
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

export default GasSafetyChesterfield;
