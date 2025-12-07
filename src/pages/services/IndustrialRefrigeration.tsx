import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Thermometer, AlertTriangle, FileText, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const IndustrialRefrigeration = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Industrial Refrigeration" }
  ];

  const faqs = [
    {
      question: "How often should industrial refrigeration systems be serviced?",
      answer: "Quarterly servicing is recommended for critical cold storage, with annual F-gas leak testing. High-capacity systems and food storage applications may require more frequent inspection."
    },
    {
      question: "What are F-gas regulations?",
      answer: "F-gas regulations control fluorinated greenhouse gases used in refrigeration. They require leak testing, record-keeping, certified engineers, and phase-down of high-GWP refrigerants to reduce environmental impact."
    },
    {
      question: "What happens if cold room temperatures drift?",
      answer: "Temperature loss causes food spoilage, stock loss, health & safety breaches, EHO enforcement, insurance claims, and operational shutdown—particularly critical in food retail, hospitality, and pharmaceutical storage."
    },
    {
      question: "Who can work on F-gas refrigeration systems?",
      answer: "Only F-gas certified engineers can install, maintain, or repair refrigeration systems containing regulated gases. Non-certified work breaches environmental regulations and invalidates insurance."
    },
    {
      question: "What documentation is required for refrigeration compliance?",
      answer: "F-gas logbooks, leak test certificates, maintenance records, temperature monitoring logs, and engineer certification demonstrating compliance with environmental and food safety regulations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Refrigeration Compliance | Cold Room & Chiller Maintenance</title>
        <meta name="description" content="Service and compliance for chillers, cold rooms and large refrigeration systems. Expert F-gas compliance and temperature control." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Industrial Refrigeration Compliance"
        description="Service and compliance for chillers, cold rooms and large refrigeration systems."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Refrigeration Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Service and compliance for chillers, cold rooms and large refrigeration systems
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Snowflake className="w-8 h-8 text-primary" />
                  Critical Temperature Control Infrastructure
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Industrial refrigeration systems protect food safety, pharmaceutical integrity, and operational continuity across cold storage, retail, hospitality, and healthcare environments. System failures cause stock loss, regulatory breaches, and business interruption.
                  </p>
                  <p>
                    Preventative maintenance ensures reliable temperature control, meets F-gas environmental obligations, and prevents emergency breakdowns that disrupt operations and compromise stored products.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  F-Gas Regulations & Compliance
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Leak Testing</h3>
                    <p className="text-muted-foreground">
                      Annual leak testing required for systems over 5 tCO2e, with frequency increasing based on refrigerant charge and system type. Electronic leak detection for large installations.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Temperature Control</h3>
                    <p className="text-muted-foreground">
                      Continuous monitoring, alarm systems, and temperature logging demonstrate compliance with food safety regulations and pharmaceutical storage requirements.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Plant Room Considerations</h3>
                    <p className="text-muted-foreground">
                      Compressor servicing, condenser cleaning, electrical panel inspection, and refrigerant level checks maintain system efficiency and prevent catastrophic failure.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Certified Engineers</h3>
                    <p className="text-muted-foreground">
                      Only F-gas certified engineers can maintain refrigeration systems. Certification records and leak test certificates demonstrate regulatory compliance.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Thermometer className="w-8 h-8 text-primary" />
                  Applications & Risk Sectors
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Industrial refrigeration is mission-critical for:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Food retail & hospitality:</strong> Cold storage, walk-in fridges, and chiller systems protecting stock and meeting food safety regulations</li>
                    <li><strong>Healthcare & pharmaceutical:</strong> Vaccine storage, medicine refrigeration, and laboratory cold rooms requiring precise temperature control</li>
                    <li><strong>Industrial cold storage:</strong> Distribution centers, food processing, and logistics requiring large-capacity refrigeration</li>
                    <li><strong>Data centers:</strong> Chiller systems providing precision cooling for IT infrastructure</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Refrigeration Failure
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Inadequate refrigeration maintenance exposes organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Stock loss:</strong> Temperature drift causes food spoilage, pharmaceutical degradation, and product write-offs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Food safety breaches:</strong> EHO enforcement, improvement notices, and potential prosecution for inadequate temperature control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>F-gas penalties:</strong> Environmental breaches trigger fines up to £200,000 for non-compliance with leak testing and certification requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational shutdown:</strong> System failure forces closure of food operations, cold storage facilities, or healthcare environments</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Industrial Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/fume-extraction-lev" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">LEV Testing</h3>
                    <p className="text-sm text-muted-foreground">COSHH air quality compliance</p>
                  </Link>
                  <Link to="/services/compressor-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Compressor Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Air compressor servicing</p>
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
                <h2 className="text-2xl font-bold mb-4">Request Refrigeration Compliance Review</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our F-gas certified team about reliable industrial refrigeration maintenance.
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

export default IndustrialRefrigeration;
