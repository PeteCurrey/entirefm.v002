"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
;

const CarParkSmokeControl = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Car Park Smoke & Fume Extraction" }
  ];

  const faqs = [
    {
      question: "How often should car park ventilation systems be tested?",
      answer: "BS 7346 requires annual performance testing including CO sensor calibration, jet fan rotation tests, fire override function verification, and airflow measurements to ensure smoke extraction capability."
    },
    {
      question: "What is the difference between jet fans and extract fans?",
      answer: "Jet fans impulse air along the car park to direct smoke towards extract points. Extract fans physically remove smoke and fumes from the space. Most modern systems use a combination of both for optimal smoke control."
    },
    {
      question: "Are CO sensors mandatory in enclosed car parks?",
      answer: "Yes, in enclosed or basement car parks. CO sensors monitor carbon monoxide levels from vehicle emissions and trigger ventilation systems. They must be calibrated annually and replaced per manufacturer specifications (typically 5-7 years)."
    },
    {
      question: "What triggers fire mode in car park ventilation?",
      answer: "Fire alarm activation triggers the system into fire override mode, where ventilation sequences change to extract smoke and maintain tenable escape conditions. This overrides normal CO-based ventilation control."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Car Park Smoke & Fume Extraction"
        description="Jet fan and mechanical extract systems for car parks requiring annual performance testing to BS 7346, including CO sensor calibration and fire override verification."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590674899484-d5640e854abe')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Car Park Smoke & Fume Extraction
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Jet fan and mechanical extract systems requiring annual performance testing.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Car Park Ventilation Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Enclosed and basement car parks present unique fire and life safety challenges. Vehicle fires generate toxic smoke at extraordinary rates, and carbon monoxide from idling engines can reach lethal concentrations in poorly ventilated spaces. Effective smoke control and fume extraction systems are essential to maintain tenable conditions for evacuation and firefighting access.
                  </p>
                  <p>
                    Modern car park ventilation typically combines impulse jet fans with mechanical extract fans. Jet fans create horizontal airflow patterns that direct smoke towards extract points, while mechanical fans physically remove smoke from the space. CO sensors trigger the system during normal operation when exhaust fume levels rise, and fire alarm integration activates smoke extraction mode during fire events.
                  </p>
                  <p>
                    BS 7346 Part 7 specifies annual testing requirements including CO sensor calibration, jet fan rotation verification, airflow measurements, and fire override function testing. Failure to maintain these systems can result in untenable smoke conditions, prosecution under fire safety legislation, and insurance invalidation.
                  </p>
                </div>
              </section>

              {/* Compliance Standards */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance Standards
                </h2>
                <div className="grid gap-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">BS 7346-7</h3>
                        <p className="text-muted-foreground font-light">
                          Components for smoke and heat control systems – Code of practice on functional recommendations and calculation methods for smoke and heat exhaust ventilation systems, employing steady-state design fires, for covered car parks.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Approved Document B</h3>
                        <p className="text-muted-foreground font-light">
                          Building Regulations guidance on fire safety, including requirements for smoke ventilation in car parks. Specifies minimum ventilation rates and smoke control strategies.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Regulatory Reform (Fire Safety) Order 2005</h3>
                        <p className="text-muted-foreground font-light">
                          Requires the Responsible Person to maintain smoke control systems in enclosed car parks. Non-compliance can result in prohibition notices and prosecution.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Testing Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">CO Sensor Calibration</h3>
                        <p className="text-muted-foreground font-light">
                          Annual calibration using certified CO gas. Verifying sensor response times, alarm thresholds, and integration with ventilation control systems. Sensors typically require replacement every 5-7 years per manufacturer specifications.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Jet Fan Rotation Tests</h3>
                        <p className="text-muted-foreground font-light">
                          Verifying each jet fan operates correctly in both forward and reverse modes (where applicable). Checking for unusual vibration, bearing noise, or reduced thrust indicating mechanical wear.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Fire Override Tests</h3>
                        <p className="text-muted-foreground font-light">
                          Simulating fire alarm activation to verify that the ventilation system switches into fire mode, activating smoke extraction sequences and overriding normal CO-based control. Testing integration with fire alarm panel and BMS.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Airflow Verification</h3>
                        <p className="text-muted-foreground font-light">
                          Using anemometers to measure air velocity and verifying that jet fan thrust and extract fan capacity meet design specifications. Identifying blockages or obstructions that impair airflow.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Risks */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Risks of Non-Compliance
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Untenable Smoke Conditions</h3>
                        <p className="text-muted-foreground font-light">
                          Failed ventilation systems allow smoke to accumulate, creating visibility below 10 metres and exposing occupants to toxic gases. Vehicle fires can reach temperatures exceeding 1000°C within minutes.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Carbon Monoxide Poisoning Risk</h3>
                        <p className="text-muted-foreground font-light">
                          Inadequate CO monitoring or faulty sensors allow dangerous fume concentrations to develop. Even low-level exposure causes headaches and dizziness; high concentrations are rapidly fatal.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legal and Operational Consequences</h3>
                        <p className="text-muted-foreground font-light">
                          Fire authorities can issue prohibition notices, closing car parks until systems are compliant. The Responsible Person faces prosecution and unlimited fines under fire safety legislation.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Compliant Car Park Ventilation
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for annual testing, CO sensor calibration, and emergency callout support. Our engineers specialise in complex jet fan and extract systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/request-proposal">
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

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <SidebarCTA />

              <Card className="p-6">
                <h3 className="font-medium mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/fire-alarms" className="text-muted-foreground hover:text-foreground transition-colors">
                      Fire Alarm Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/stairwell-pressurisation-fans" className="text-muted-foreground hover:text-foreground transition-colors">
                      Stairwell Pressurisation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/smoke-vent-systems" className="text-muted-foreground hover:text-foreground transition-colors">
                      Smoke Vent Systems (AOV)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-lighting" className="text-muted-foreground hover:text-foreground transition-colors">
                      Emergency Lighting
                    </Link>
                  </li>
                </ul>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarParkSmokeControl;