import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";

const GeneratorMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Generator Maintenance" }
  ];

  const faqs = [
    {
      question: "How often should generators be serviced?",
      answer: "Weekly automated start tests verify basic operation. Monthly manual checks include fuel levels, coolant, battery voltage, and oil condition. Full servicing occurs every 250-500 running hours or annually, including oil changes, filter replacements, cooling system checks, and load testing to verify output capacity."
    },
    {
      question: "What are the consequences of generator failure during power cuts?",
      answer: "Generator failure during mains power loss leaves critical buildings without backup power. Data centres lose cooling causing server damage. Hospitals lose life-support systems. Emergency lighting fails. Lifts trap occupants. Cold stores lose refrigeration spoiling stock. Insurance claims fail when preventative maintenance cannot be demonstrated."
    },
    {
      question: "Why is diesel quality important for standby generators?",
      answer: "Diesel degrades over 6-12 months, forming sludge and bacterial contamination blocking fuel systems. Water ingress from condensation causes injector corrosion and combustion failures. Fuel polishing removes contaminants. Additives prevent degradation. Generators with old fuel fail to start during emergencies despite appearing serviceable."
    },
    {
      question: "What is load bank testing and why is it necessary?",
      answer: "Load bank testing applies simulated electrical load to generators, verifying they deliver rated output under real-world conditions. Testing identifies voltage regulation problems, overheating, fuel system defects, and alternator faults that don't appear during no-load test runs. Annual load testing is essential for mission-critical installations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Generator Servicing & Maintenance | Backup Power Reliability | Entire FM</title>
        <meta name="description" content="Expert generator maintenance for backup power systems. Weekly testing, full servicing, cooling system checks, load bank testing, and diesel quality management for critical buildings." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Generator Servicing & Maintenance"
        description="Backup power reliability for critical buildings and essential services through routine testing, full servicing, cooling system maintenance, and load bank testing."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Generator Servicing & Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Backup power reliability for critical buildings and essential services.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  When Backup Power Becomes Primary
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Standby generators provide emergency power during mains failures for data centres, hospitals, manufacturing facilities, and high-rise buildings. Generator failure during power cuts causes catastrophic consequences: server damage from cooling loss, trapped lift occupants, compromised life-support systems, and spoiled refrigerated stock. The assumption of backup power creates dependency—failure exposes critical vulnerabilities.
                  </p>
                  <p>
                    Generators require rigorous maintenance regimes despite infrequent use. Diesel degrades forming sludge. Starting batteries discharge. Coolant deteriorates. Fuel injectors corrode. Weekly automated tests identify basic faults but cannot detect capacity degradation, voltage regulation problems, or fuel system contamination. Only load bank testing under simulated load conditions verifies true emergency readiness.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Comprehensive Maintenance Regime
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Weekly/Monthly Checks & Full Servicing</h3>
                        <p className="text-muted-foreground font-light">
                          Weekly automated start tests verify engine operation, voltage output, and control panel function. Monthly manual checks include fuel levels, coolant condition, battery voltage, and oil analysis. Full servicing every 250-500 hours includes oil changes, filter replacements, injector testing, and alternator inspection.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Cooling Systems & Starting Battery Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Coolant system integrity prevents overheating during sustained running. Radiator blockages, coolant degradation, and thermostat failures cause high-temperature shutdowns. Starting battery condition determines emergency start reliability. Load testing verifies batteries deliver cranking power after months of float charging.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Diesel Quality & Contamination</h3>
                        <p className="text-muted-foreground font-light">
                          Diesel stored beyond 12 months develops bacterial contamination and sludge formation blocking fuel systems. Water ingress from tank condensation causes injector corrosion and combustion failures. Fuel polishing, water removal, and biocide treatment maintain fuel quality. Generators with degraded fuel fail to start despite appearing serviceable.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/load-bank-testing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Load Bank Testing
                  </Link>
                  <Link to="/services/ups-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    UPS Maintenance
                  </Link>
                  <Link to="/services/electrical" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Electrical Services
                  </Link>
                  <Link to="/services/data-centre-cooling-compliance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Data Centre Cooling
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Backup Power When You Need It Most
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for comprehensive generator maintenance including load bank testing and fuel quality management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/request-proposal">
                      Request a Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                    <a href="tel:+448001234567">
                      <Phone className="w-4 h-4 mr-2" />
                      24/7 Helpdesk
                    </a>
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

export default GeneratorMaintenance;
