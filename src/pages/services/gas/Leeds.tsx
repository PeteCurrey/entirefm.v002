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

const GasSafetyLeeds = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What gas safety certificates do hotels need?",
      answer: "Hotels require CP1/CP15 certificates for heating systems and CP42 certification for all commercial kitchen equipment. Annual boiler servicing, CO monitoring, and flue integrity checks are also mandatory under Gas Safety (Installation & Use) Regulations 1998.",
    },
    {
      question: "Can CP42 inspections be completed during service hours?",
      answer: "Yes, but we typically recommend scheduling during kitchen prep times or off-peak periods. For 24-hour operations, we can work in phases to maintain service continuity while completing full compliance checks.",
    },
    {
      question: "How does burner optimisation improve efficiency?",
      answer: "Burner tuning adjusts air-fuel ratios for optimal combustion without equipment replacement. This typically reduces fuel consumption by 10-15% and extends equipment life, with payback periods under 12 months for hospitality operators.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Leeds",
    "description": "Corporate + hospitality heating/catering safety protected in Leeds.",
    "areaServed": "Leeds",
    "serviceType": "Gas Safety Compliance",
    "email": "leeds@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leeds",
      "addressCountry": "GB"
    }
  };

  return (
    <>
      <Helmet>
        <title>Gas Safety Compliance Leeds | CP42 Hotels | Restaurant Gas Certification</title>
        <meta name="description" content="Corporate + hospitality heating/catering safety in Leeds. CP42 catering inspections, boiler servicing, and energy-efficiency upgrades." />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gas Safety", href: "/services/gas-safety" },
          { label: "Leeds" }
        ]} 
      />

      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
              Gas Safety Compliance – Leeds
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Corporate + hospitality heating/catering safety protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => trackProposalRequest('gas-leeds')}
                asChild
              >
                <Link to="/contact">
                  Book Compliance Audit
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
                Download Gas Safety Checklist
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
          { label: "Leeds" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safety in Leeds Hospitality
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Corporate offices + hospitality heating/catering environments carry significant public safety responsibility.
              </p>
              <p className="text-foreground font-medium">
                We deliver compliance that protects guests, staff, and brand reputation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                CP42 Catering Inspections
              </h2>
              <Card className="p-6">
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  All commercial kitchens — bars, hotels, restaurants — require CP42 gas catering safety certification.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Combustion analysis & flame failure testing
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Ventilation adequacy verification
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    CO monitoring & emergency shut-off checks
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Full certification + digital records
                  </li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy-Efficiency Burner Optimisation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Reduce fuel costs without major capital investment:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Burner Tuning</h4>
                  <p className="text-sm text-muted-foreground font-light">Optimise air-fuel ratio for maximum efficiency</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Control Upgrades</h4>
                  <p className="text-sm text-muted-foreground font-light">Smart BMS integration for demand-based heating</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Restaurant chain compliance restored across Leeds portfolio — zero service disruption, full CP42 certification achieved.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Leeds
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: City Centre, Holbeck, Headingley, White Rose district.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Safe Kitchens. Compliant Heating.</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 leeds@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Book Compliance Audit
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

export default GasSafetyLeeds;
