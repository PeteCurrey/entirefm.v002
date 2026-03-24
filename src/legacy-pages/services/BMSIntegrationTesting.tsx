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

const BMSIntegrationTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "BMS Integration Testing" }
  ];

  const faqs = [
    {
      question: "What is BMS integration testing?",
      answer: "BMS (Building Management System) integration testing verifies all building systems respond correctly to fire signals, time schedules, and manual overrides. Testing confirms AHUs shut down on fire alarm, dampers close preventing smoke spread, ventilation switches to fire mode, and lighting responds to occupancy. Failed integration creates life safety risks and operational inefficiencies."
    },
    {
      question: "Why is fire alarm integration critical?",
      answer: "During fire events, building systems must respond to prevent smoke spread and maintain safe evacuation conditions. AHUs must shut down to prevent smoke circulation. Fire dampers must close maintaining compartmentation. Smoke extraction must activate clearing escape routes. Without tested integration, systems work against fire safety creating catastrophic consequences during actual incidents."
    },
    {
      question: "How often should BMS integration be tested?",
      answer: "Annual testing is recommended for fire safety integration. Quarterly testing may be required for mission-critical facilities with complex control sequences. Testing after BMS software updates, system additions, or control logic changes verifies continued correct operation. Documentation proves compliance during fire risk assessments and regulatory inspections."
    },
    {
      question: "What happens when BMS integration fails?",
      answer: "Failed integration causes AHUs to continue running during fires spreading smoke throughout buildings. Dampers fail to close allowing smoke movement between compartments. Ventilation systems don't switch to fire mode. Emergency lighting doesn't activate. Lifts don't return to ground floor. Each failure compounds creating dangerous conditions preventing safe evacuation and firefighting operations."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="BMS Integration Testing"
        description="Ensuring all site systems respond correctly to fire signals, time controls and overrides including AHU shut-down, damper control, fire alarm integration, and BMS logic sequencing."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346548-d9e30ee84aa0')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              BMS Integration Testing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Ensuring all site systems respond correctly to fire signals, time controls and overrides.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Invisible Safety System
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Building Management Systems orchestrate complex interactions between fire alarms, HVAC, lighting, access control, and smoke extraction systems. During fire events, BMS must execute precise sequences: shut down air handling units preventing smoke circulation, close fire dampers maintaining compartmentation, activate smoke extraction clearing escape routes, and recall lifts to ground floor. Failed integration creates catastrophic consequences—continuing AHUs spread smoke, open dampers defeat compartmentation, inactive extraction fills staircases with smoke.
                  </p>
                  <p>
                    BMS integration failures occur silently. Software updates change control logic. New equipment installations aren't integrated correctly. Control sequences drift from design intent. Without regular testing, buildings operate with assumed integration that fails during actual fire events. Integration testing simulates fire alarm activation verifying all connected systems respond as designed. Annual testing provides evidence of compliance during fire risk assessments and regulatory defense.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Integration Points
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">AHU Shut-Down & Damper Control</h3>
                        <p className="text-muted-foreground font-light">
                          Fire alarm signals must trigger immediate AHU shutdown preventing smoke circulation through ductwork. Fire dampers must close automatically maintaining compartmentation boundaries. Spring-return damper testing verifies physical closure on power loss. Smoke detector integration in duct systems triggers local shutdown preventing smoke spread through ventilation systems.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Fire Alarm Integration</h3>
                        <p className="text-muted-foreground font-light">
                          BMS must receive fire alarm signals via monitored connections detecting broken wires or failed modules. Testing verifies correct zone identification enabling targeted system responses. False alarm filtering prevents unnecessary shutdowns while maintaining safety. Manual override enables facilities staff to control systems during false alarms or testing scenarios.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">BMS Logic Sequencing</h3>
                        <p className="text-muted-foreground font-light">
                          Complex control sequences require testing in correct order: fire alarm received, AHUs shut down, dampers close, smoke extraction activates, pressurization systems start, emergency lighting enables, access control releases doors. Logic errors cause incorrect sequences defeating fire safety systems. Documentation proves sequences match fire strategy requirements.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/services/fire-alarms" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Fire Alarm Systems
                  </Link>
                  <Link href="/services/ahu-fire-interlock-testing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    AHU Fire Interlock Testing
                  </Link>
                  <Link href="/services/car-park-smoke-control" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Car Park Smoke Control
                  </Link>
                  <Link href="/services/stairwell-pressurisation-fans" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Stairwell Pressurisation
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Verify Fire Safety Integration Before It's Tested by Fire
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for comprehensive BMS integration testing with fire scenario simulation and documentation.
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

export default BMSIntegrationTesting;
