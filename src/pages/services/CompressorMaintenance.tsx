import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, AlertTriangle, FileText, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const CompressorMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Compressor Maintenance" }
  ];

  const faqs = [
    {
      question: "How often should compressors be serviced?",
      answer: "Quarterly servicing is recommended for industrial compressors, with frequency adjusted based on duty cycle, operating hours, and environmental conditions. Oil-lubricated compressors require more frequent attention than oil-free units."
    },
    {
      question: "What are the main causes of compressor failure?",
      answer: "Inadequate lubrication, filter contamination, overheating, moisture ingress, electrical faults, and pressure relief valve failures cause system breakdowns, air quality issues, and production stoppages."
    },
    {
      question: "Why is compressed air quality important?",
      answer: "Contaminated air damages pneumatic equipment, compromises product quality in food/pharmaceutical production, and creates health hazards in breathing air applications. Filtration and dryer maintenance are critical."
    },
    {
      question: "Are compressors subject to regulatory requirements?",
      answer: "Yes—Pressure Systems Safety Regulations (PSSR) require written schemes of examination, periodic inspection, and pressure vessel certification. PUWER applies to air receivers and pressure equipment."
    },
    {
      question: "What documentation is required for compressor compliance?",
      answer: "PSSR certificates, maintenance logs, pressure relief valve test records, air quality test results, and insurance inspection reports demonstrating safe operation of pressure systems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compressor Maintenance | Industrial Air Compressor Servicing</title>
        <meta name="description" content="Servicing and compliance for air compressor systems used across industrial environments. Expert compressor maintenance and PSSR compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Compressor Maintenance"
        description="Servicing and compliance for air compressor systems used across industrial environments."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Compressor Maintenance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Servicing and compliance for air compressor systems used across industrial environments
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
                  Critical Industrial Infrastructure
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Compressed air systems power pneumatic tools, production equipment, control systems, and critical processes across manufacturing, food production, pharmaceuticals, and industrial facilities. Compressor failure causes production stoppages, equipment damage, and operational shutdown.
                  </p>
                  <p>
                    Preventative maintenance ensures reliable compressed air supply, maintains air quality standards, prevents catastrophic pressure system failures, and demonstrates compliance with PSSR (Pressure Systems Safety Regulations).
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Gauge className="w-8 h-8 text-primary" />
                  Maintenance & Servicing Regime
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Oil & Filter Changes</h3>
                    <p className="text-muted-foreground">
                      Regular oil changes and filter replacements prevent contamination, extend compressor life, and maintain air quality for downstream equipment and processes.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Dryer & Filtration Systems</h3>
                    <p className="text-muted-foreground">
                      Refrigerated dryers, desiccant filters, and coalescing filters remove moisture and contaminants, protecting pneumatic equipment and product quality.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Pressure Relief Valve Testing</h3>
                    <p className="text-muted-foreground">
                      PSSR requires regular testing of pressure relief devices to prevent overpressure incidents and air receiver explosions—critical life safety equipment.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Air Receiver Inspection</h3>
                    <p className="text-muted-foreground">
                      Periodic written scheme examinations by competent persons verify structural integrity and compliance with pressure vessel regulations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  PSSR Compliance & Pressure Systems
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Pressure Systems Safety Regulations 2000 require employers to establish written schemes of examination for air receivers and pressure equipment, conducted by competent persons at defined intervals. Non-compliance risks catastrophic pressure vessel failures, explosions, and HSE prosecution.
                  </p>
                  <p>
                    Certified inspections, pressure relief valve testing, and documented maintenance demonstrate safe operation and regulatory compliance for insurance and HSE purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Inadequate Compressor Maintenance
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Neglected compressor systems expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Production stoppages:</strong> Compressor failures halt manufacturing, assembly lines, and critical processes causing significant financial loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Pressure vessel explosions:</strong> Failed relief valves or air receiver deterioration cause catastrophic failures with potential fatalities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Product contamination:</strong> Inadequate filtration compromises product quality in food, pharmaceutical, and electronics manufacturing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>HSE enforcement:</strong> PSSR breaches trigger prosecution, prohibition notices, and insurance invalidation</span>
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
                  <Link to="/services/fume-extraction-lev" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">LEV Testing</h3>
                    <p className="text-sm text-muted-foreground">COSHH air quality</p>
                  </Link>
                  <Link to="/services/hvac" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">HVAC Systems</h3>
                    <p className="text-sm text-muted-foreground">Building climate control</p>
                  </Link>
                  <Link to="/services/pump-room-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Pump Room Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Mechanical plant servicing</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Compressor Maintenance Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about reliable compressor servicing and PSSR compliance.
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

export default CompressorMaintenance;
