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

const UPSMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "UPS Maintenance" }
  ];

  const faqs = [
    {
      question: "What is the role of UPS systems in critical facilities?",
      answer: "UPS (Uninterruptible Power Supply) systems provide instantaneous backup power during mains failures, protecting data centres, hospitals, and control systems from power interruptions. Unlike generators requiring 10-30 seconds to start, UPS delivers continuous power preventing server crashes, data loss, and control system failures during momentary outages."
    },
    {
      question: "How often should UPS systems be maintained?",
      answer: "Quarterly inspections include visual checks, alarm testing, and battery voltage measurements. Annual maintenance involves battery impedance testing, load bank testing to verify capacity, capacitor replacement, and cooling fan inspection. Battery strings typically require replacement every 3-5 years depending on temperature and discharge cycles."
    },
    {
      question: "What is battery impedance testing?",
      answer: "Impedance testing measures internal resistance of UPS batteries, identifying cells approaching end-of-life before they fail. High impedance indicates sulfation, grid corrosion, or electrolyte degradation reducing capacity. Testing each cell individually prevents weak cells causing premature battery string failure during power events."
    },
    {
      question: "What are the consequences of UPS failure?",
      answer: "UPS failure during power events causes immediate loss of protected loads. Servers crash losing unsaved data and corrupting databases. Manufacturing processes halt mid-cycle damaging production. Emergency lighting fails. Control systems lose power disrupting building management. Insurance claims fail when maintenance records cannot demonstrate preventative servicing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>UPS Maintenance | Uninterruptible Power Supply Servicing | Entire FM</title>
        <meta name="description" content="Critical UPS maintenance for data rooms and essential services. Battery impedance testing, load bank testing, bypass function verification, and failure risk profiling." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="UPS Maintenance"
        description="Critical backup systems for data rooms and essential services requiring battery impedance tests, load bank testing, bypass function verification, and comprehensive failure risk assessment."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              UPS (Uninterruptible Power Supply) Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Critical backup systems for data rooms and essential services.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Instantaneous Protection for Critical Systems
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    UPS systems deliver instantaneous backup power during mains failures, protecting data centres, control systems, and medical equipment from power interruptions. Unlike generators requiring startup time, UPS provides continuous power preventing server crashes, data corruption, and control system failures during momentary outages. The assumption of continuous power creates dependency—UPS failure exposes catastrophic vulnerabilities.
                  </p>
                  <p>
                    Battery-based UPS systems degrade silently. Batteries sulfate, capacitors dry out, cooling fans fail, and internal connections corrode. Visual inspections cannot identify capacity loss until batteries fail under load. Only impedance testing of individual cells identifies degradation before emergency discharge. Without load bank testing, UPS systems appear operational but cannot sustain protected loads during power events.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Essential Maintenance Components
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Battery Impedance Tests</h3>
                        <p className="text-muted-foreground font-light">
                          Impedance testing measures internal resistance of each battery cell, identifying end-of-life cells before they fail. High impedance indicates sulfation, grid corrosion, or electrolyte degradation. Testing entire strings annually prevents weak cells causing premature failure during discharge events requiring emergency power delivery.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Load Bank Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Load bank testing applies simulated load to verify UPS delivers rated output for specified runtime. Testing identifies battery capacity loss, inverter faults, and cooling inadequacies that don't appear during normal float charging. Annual testing is essential for mission-critical installations where backup power failure has catastrophic consequences.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Bypass Function Tests & Failure Risk</h3>
                        <p className="text-muted-foreground font-light">
                          Bypass function testing verifies manual bypass operation allowing UPS servicing without load disconnection. Testing automatic bypass transfer during UPS faults ensures loads transfer to mains during internal failures. Failure risk profiling identifies single points of failure and redundancy gaps requiring investment in resilient architectures.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/generator-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Generator Maintenance
                  </Link>
                  <Link to="/services/load-bank-testing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Load Bank Testing
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
                  Protect Critical Systems from Power Interruptions
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for comprehensive UPS maintenance including impedance testing and load bank verification.
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

export default UPSMaintenance;
