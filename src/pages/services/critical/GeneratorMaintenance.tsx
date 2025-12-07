import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Fuel, Settings, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { Helmet } from "react-helmet";

const GeneratorMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
    { label: "Generator Maintenance" }
  ];

  const faqs = [
    {
      question: "How often do generators need servicing?",
      answer: "Weekly no-load test runs verify basic operation. Quarterly oil and filter changes prevent contamination. Annual load testing reveals capacity problems invisible during no-load runs. Major services at manufacturer intervals (every 500-1000 hours or annually) include valve clearances, injector testing, and cooling system overhaul."
    },
    {
      question: "Why do generators fail during power cuts despite passing test runs?",
      answer: "No-load testing doesn't reveal voltage regulation defects, fuel starvation under load, cooling inadequacies, or governor failures that only appear when delivering rated output. Generators idle successfully but collapse when supporting building load. Annual load bank testing prevents power-cut failures."
    },
    {
      question: "What is diesel fuel polishing and why is it necessary?",
      answer: "Stored diesel degrades through microbial growth, water contamination, and sediment formation. Degraded fuel clogs injectors, damages fuel pumps, and causes engine failures. Fuel polishing removes water, kills microbes, and filters contamination. Annual polishing maintains fuel quality for emergency use."
    },
    {
      question: "How long can generators run during extended power cuts?",
      answer: "Runtime depends on fuel tank capacity and load. Typical installations provide 8-24 hours at full load. Extended outages require fuel delivery coordination. We maintain fuel supply agreements, monitor tank levels, and coordinate deliveries during prolonged outages ensuring continuous operation."
    }
  ];

  const relatedServices = [
    {
      title: "UPS Maintenance",
      description: "Battery systems bridging power transfer delays and providing ride-through protection.",
      link: "/services/critical/ups-maintenance"
    },
    {
      title: "Load Bank Testing",
      description: "Simulated load testing revealing generator performance under real conditions.",
      link: "/services/critical/power-redundancy"
    },
    {
      title: "Electrical Compliance",
      description: "Fixed-wire testing and power distribution verification for safe operations.",
      link: "/services/electrical"
    },
    {
      title: "PPM Delivery",
      description: "Planned preventative maintenance preventing breakdown and ensuring compliance.",
      link: "/services/ppm"
    },
    {
      title: "HVAC Services",
      description: "Generator room ventilation and cooling system maintenance.",
      link: "/services/hvac"
    },
    {
      title: "Data Room Audits",
      description: "Critical infrastructure compliance for data centres requiring backup power.",
      link: "/services/critical/data-room-audits"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Generator Servicing, ATS Testing & Backup Power</title>
        <meta name="description" content="Generator maintenance including planned servicing, fuel polishing, load testing, and emergency callout. ATS testing and fire compliance for generator rooms ensuring reliable backup power." />
        <link rel="canonical" href="https://entirefm.com/services/critical/generator-maintenance" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Generator Servicing & Backup Power"
        description="Comprehensive generator maintenance including planned servicing, fuel polishing, load bank testing, ATS verification, and emergency callout ensuring reliable backup power during outages."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Generator Servicing, ATS Testing & Backup Power
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Planned servicing, load testing, and fuel management ensuring generators deliver when power fails.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Generator Maintenance Prevents Failures
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Generators passing weekly no-load test runs fail catastrophically during actual power cuts. Light-load running causes carbon buildup, incomplete combustion, and wet stacking. Cooling systems adequate for no-load operation overheat under full building load. Fuel systems deliver correctly at idle but starve engines under demand. Voltage regulators pass no-load tests but fail to maintain regulation when supporting real loads.
                  </p>
                  <p>
                    Annual load bank testing reveals hidden defects. Generators must operate at 50-100% rated capacity, forcing cooling systems, fuel delivery, and electrical output to design limits. Testing identifies alternator winding faults, governor speed control problems, fuel contamination, and cooling inadequacies before emergency use. Maintenance includes oil changes, filter replacement, coolant system servicing, and fuel quality management preventing failures during critical outages.
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
                      <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Weekly & Monthly Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Weekly no-load test runs verify basic operation, check oil levels, coolant levels, and battery charge state. Monthly inspections include air filter condition, fuel water separators, belt tension, and exhaust smoke analysis. Visual checks identify leaks, corrosion, and component deterioration requiring attention before failures occur.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Cooling System Maintenance</h3>
                        <p className="text-muted-foreground font-light">
                          Cooling systems prevent overheating under full load. Maintenance includes coolant testing for pH and glycol concentration, radiator cleaning, hose inspection, and thermostat testing. Failed cooling causes head gasket failure, cylinder scoring, and catastrophic engine damage. We pressure test systems, verify fan operation, and replace degraded coolant maintaining heat dissipation capacity.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Fuel className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Starting Batteries & Diesel Quality</h3>
                        <p className="text-muted-foreground font-light">
                          Battery failures prevent starting during power cuts. We test battery voltage, load capacity, and charging system operation. Diesel fuel degrades through microbial growth and water contamination. Fuel polishing removes contamination, maintaining injector cleanliness and preventing fuel system failures. Annual fuel testing verifies quality for emergency use.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Transfer Switch Testing & Fire Compliance
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Automatic transfer switches (ATS) detect mains failure and switch loads to generator supply. ATS testing verifies transfer occurs within specified time (typically 10 seconds), return transfer functions correctly, and interlocks prevent paralleling mains and generator. Failed ATS prevents backup power reaching building loads despite generator running correctly. We test mechanical operation, contact resistance, and control logic ensuring reliable switching.
                  </p>
                  <p>
                    Generator rooms require ventilation preventing carbon monoxide accumulation and fire suppression systems protecting critical infrastructure. We verify ventilation rates meet manufacturer specifications, inspect exhaust systems for leaks, and test fire detection linked to emergency shutdown. Fuel storage requires bunding and leak detection preventing environmental contamination. Compliance maintains safety and environmental standards.
                  </p>
                </div>
              </section>

              <RelatedServices services={relatedServices} />

              <section className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-6">Where We Deliver Generator Maintenance</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link to="/services/critical/generator-maintenance/london" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    London
                  </Link>
                  <Link to="/services/critical/generator-maintenance/birmingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Birmingham
                  </Link>
                  <Link to="/services/critical/generator-maintenance/manchester" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Manchester
                  </Link>
                  <Link to="/services/critical/generator-maintenance/leeds" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Leeds
                  </Link>
                  <Link to="/services/critical/generator-maintenance/sheffield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Sheffield
                  </Link>
                  <Link to="/services/critical/generator-maintenance/nottingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Nottingham
                  </Link>
                  <Link to="/services/critical/generator-maintenance/derby" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Derby
                  </Link>
                  <Link to="/services/critical/generator-maintenance/chesterfield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Chesterfield
                  </Link>
                  <Link to="/services/critical/generator-maintenance/lincoln" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Lincoln
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Backup Power Reliability
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for generator servicing with load testing and fuel management.
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