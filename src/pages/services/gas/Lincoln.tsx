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

const GasSafetyLincoln = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is gas safety critical in healthcare environments?",
      answer: "Healthcare environments support vulnerable patients who cannot evacuate easily. Gas safety failures create life-threatening CO exposure and regulatory enforcement action. Zero tolerance for compliance failures is mandatory under CQC and HSE oversight.",
    },
    {
      question: "Can gas safety inspections be completed in occupied healthcare facilities?",
      answer: "Yes. We work with healthcare operators to schedule gas safety inspections, boiler servicing, and compliance certification during planned maintenance windows or in phases to maintain continuous patient care without disruption.",
    },
    {
      question: "How do energy savings benefit public sector plantrooms?",
      answer: "Public sector heating operates year-round with high fuel consumption. Boiler efficiency upgrades, heat recovery, and smart controls reduce fuel costs by 20-30%, delivering rapid payback and freeing budget for patient care.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Lincoln",
    "description": "Healthcare + heritage assets gas safety with sensitive inspection protocols in Lincoln.",
    "areaServed": "Lincoln",
    "serviceType": "Gas Safety Compliance",
    "email": "lincoln@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lincoln",
      "addressCountry": "GB"
    }
  };

  return (
    <>
      <Helmet>
        <title>Gas Safety Lincoln | Healthcare Gas Compliance | Heritage Building Gas Certification</title>
        <meta name="description" content="Healthcare + heritage assets gas safety in Lincoln. Sensitive inspection protocols, CO monitoring, and energy savings in public sector plantrooms." />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gas Safety", href: "/services/gas-safety" },
          { label: "Lincoln" }
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
              Gas Safety Compliance – Lincoln
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
              Healthcare + heritage assets require sensitive oversight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => trackProposalRequest('gas-lincoln')}
                asChild
              >
                <Link to="/contact">
                  Request Compliance Audit
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
                Download Healthcare Gas Checklist
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
          { label: "Lincoln" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Lincoln's Healthcare Gas Requirements
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Healthcare + heritage assets require sensitive gas inspection protocols with zero tolerance for compliance failure.
              </p>
              <p className="text-foreground font-medium">
                We deliver patient-safe gas compliance with CQC-ready documentation.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Healthcare Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Sensitive Inspections</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CP1/CP15 commercial gas certificates
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Phased inspection scheduling
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CO monitoring & ventilation validation
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Emergency shut-off verification
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Digital Audit Trail</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    Fully documented ventilation checks, CO monitoring logs, and certification records stored digitally.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    CQC and HSE audit-ready.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy Savings in Public Sector Plantrooms
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Reduce operational costs and free budget for patient care:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Efficiency Upgrades</h4>
                  <p className="text-sm text-muted-foreground font-light">High-efficiency condensing boilers with 92%+ efficiency</p>
                </Card>
                <Card className="p-4">
                  <h4 className="font-medium mb-2">Smart Controls</h4>
                  <p className="text-sm text-muted-foreground font-light">Ward-based demand management systems</p>
                </Card>
              </div>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                NHS compliance restored without shutdown — care home full gas safety compliance achieved with patient care continuity maintained.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Lincoln
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our Gas Safe engineers serve: City Centre, Ermine, North Hykeham, Branston.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Patient Safety First. Compliance Guaranteed.</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 lincoln@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Compliance Programme
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

export default GasSafetyLincoln;
