import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const FumeExtractionLEV = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "LEV Testing" }
  ];

  const faqs = [
    {
      question: "How often must LEV systems be tested?",
      answer: "COSHH regulations require LEV testing at least every 14 months, with more frequent testing for high-risk processes. New installations must be commissioned and tested before use."
    },
    {
      question: "What does LEV testing involve?",
      answer: "Hood face velocity measurement, duct integrity checks, filter condition assessment, airflow verification, and performance comparison against design specifications and COSHH requirements."
    },
    {
      question: "Who can conduct LEV testing?",
      answer: "Testing must be performed by competent persons with LEV-specific training. P601 (thorough examination and testing) or P602 (design, installation, commissioning) qualifications demonstrate competence."
    },
    {
      question: "What are the consequences of non-compliant LEV?",
      answer: "HSE enforcement action, improvement/prohibition notices, prosecution, worker exposure to hazardous substances, occupational health claims, and insurance invalidation for inadequate workplace health controls."
    },
    {
      question: "What documentation is required?",
      answer: "LEV register, test certificates, maintenance logs, COSHH assessments, and performance records demonstrating compliance with HSG258 guidance and COSHH regulations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>LEV Testing & Maintenance | Local Exhaust Ventilation Compliance</title>
        <meta name="description" content="Protecting air quality and ensuring compliance with COSHH regulations. Expert LEV testing and fume extraction maintenance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="LEV (Local Exhaust Ventilation) Testing & Maintenance"
        description="Protecting air quality and ensuring compliance with COSHH regulations."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">LEV Testing & Maintenance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protecting air quality and ensuring compliance with COSHH regulations
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Wind className="w-8 h-8 text-primary" />
                  Workplace Air Quality Protection
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Local Exhaust Ventilation (LEV) systems protect workers from hazardous fumes, dust, vapors, and airborne contaminants generated during industrial processes—meeting COSHH (Control of Substances Hazardous to Health) regulatory requirements.
                  </p>
                  <p>
                    Regular testing verifies LEV systems capture and remove contaminants effectively, preventing worker exposure that could cause respiratory disease, occupational illness, or long-term health consequences.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  COSHH Testing Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Testing Intervals</h3>
                    <p className="text-muted-foreground">
                      COSHH requires LEV testing at least every 14 months. High-risk processes require more frequent testing. New installations must be commissioned before use.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Hood Face Velocity Tests</h3>
                    <p className="text-muted-foreground">
                      Measure airflow at extraction hoods to verify performance meets design specifications and COSHH control requirements for specific contaminants.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Filter Checks</h3>
                    <p className="text-muted-foreground">
                      Inspect filter loading, pressure drop, and efficiency to ensure continued contaminant capture without excessive energy consumption or reduced performance.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Reporting</h3>
                    <p className="text-muted-foreground">
                      Comprehensive test certificates, performance comparison against baseline, identified defects, and remedial recommendations meeting HSG258 guidance standards.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Non-Compliant LEV Systems
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequate LEV systems expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Worker health risks:</strong> Exposure to hazardous substances causes respiratory disease, occupational asthma, and long-term illness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE enforcement:</strong> Improvement or prohibition notices, prosecution, and unlimited fines for COSHH breaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Occupational health claims:</strong> Employee litigation for exposure-related illness caused by inadequate workplace controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies require documented compliance with health and safety legislation as a condition of cover</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Industrial Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/industrial-refrigeration" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Industrial Refrigeration</h3>
                    <p className="text-sm text-muted-foreground">Cold room compliance</p>
                  </Link>
                  <Link to="/services/compressor-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Compressor Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Air compressor servicing</p>
                  </Link>
                  <Link to="/services/hvac" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">HVAC Systems</h3>
                    <p className="text-sm text-muted-foreground">Ventilation and air quality</p>
                  </Link>
                  <Link to="/services/health-safety" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Health & Safety</h3>
                    <p className="text-sm text-muted-foreground">Workplace compliance</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request LEV Testing</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about COSHH-compliant LEV testing for your industrial environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </div>
              </section>

              <FAQSection faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default FumeExtractionLEV;
