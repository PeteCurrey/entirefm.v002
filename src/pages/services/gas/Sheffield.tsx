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

const GasSafetySheffield = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is gas safety critical in industrial environments?",
      answer: "Industrial heat systems operate under high loads with complex pressure systems, elevated flue temperatures, and continuous combustion. Failure creates CO exposure risk, production shutdown, and HSE enforcement action. Strict GS(I&U) Regs compliance is non-negotiable.",
    },
    {
      question: "How is CO risk eliminated in high-load plants?",
      answer: "We verify flue integrity, ensure adequate ventilation, install CO detectors, and perform combustion analysis on all burners. Any reading outside safe parameters triggers immediate stop-and-fix protocols.",
    },
    {
      question: "Can energy upgrades reduce fuel costs in manufacturing?",
      answer: "Yes. High-efficiency boiler replacements, heat recovery systems, and burner optimisation reduce fuel consumption by 15-30% in high-load industrial plants. Payback periods are typically 18-24 months.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Sheffield",
    "description": "Industrial heat systems gas compliance for Sheffield manufacturing estates.",
    "areaServed": "Sheffield",
    "serviceType": "Gas Safety Compliance",
    "email": "sheffield@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sheffield",
      "addressCountry": "GB"
    }
  };

  return (
    <>
      <Helmet>
        <title>Industrial Gas Safety Sheffield | Manufacturing Gas Compliance | CP15</title>
        <meta name="description" content="Industrial heat systems gas compliance in Sheffield. Strict GS(I&U) Regs enforcement, CO risk removal, and energy upgrades for high-load plants." />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gas Safety", href: "/services/gas-safety" },
          { label: "Sheffield" }
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
              Industrial Gas Safety – Sheffield
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Industrial heat systems — strict GS(I&U) Regs compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => trackProposalRequest('gas-sheffield')}
                asChild
              >
                <Link to="/contact">
                  Request Gas & Flue Audit
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
                Download Industrial Gas Checklist
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
          { label: "Sheffield" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Sheffield's Industrial Heat Risk
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Industrial heat systems → strict GS(I&U) Regs compliance with zero fail tolerance.
              </p>
              <p className="text-foreground font-medium">
                We eliminate CO risk with improved flue integrity & ventilation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Industrial Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Compliance Delivery</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP15 commercial boiler certification
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Pressure system & PRV testing
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Flue integrity & ventilation checks
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CO monitoring & combustion analysis
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">CO Risk Removal</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    Any combustion performance reading outside tolerance = immediate stop & fix. No exceptions.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    CO risk is not negotiable.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy Upgrades Reduce Fuel Cost
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Energy upgrades reduce fuel cost in high-load plants:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">High-Efficiency Boilers</h4>
                  <p className="text-sm text-muted-foreground font-light">Condensing systems with 90%+ efficiency</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Heat Recovery</h4>
                  <p className="text-sm text-muted-foreground font-light">Capture waste heat from flue gases</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Factory line sustained with zero shutdown — full gas compliance + improved energy efficiency delivered.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Sheffield
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: Meadowhall, Attercliffe, Lower Don Valley, Hillsborough.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Industrial Gas Safety Without Compromise</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 sheffield@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Gas & Flue Audit
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

export default GasSafetySheffield;
