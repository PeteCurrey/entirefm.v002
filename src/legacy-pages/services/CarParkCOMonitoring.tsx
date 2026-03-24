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

const CarParkCOMonitoring = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Car Park CO Monitoring" }
  ];

  const faqs = [
    {
      question: "Why is CO monitoring critical in enclosed car parks?",
      answer: "Carbon monoxide from vehicle exhausts accumulates in enclosed car parks reaching toxic concentrations without adequate ventilation. CO is colorless, odorless, and deadly—50ppm causes headaches and dizziness, 400ppm causes unconsciousness within hours, 1600ppm kills within minutes. CO sensors trigger ventilation systems preventing dangerous accumulation."
    },
    {
      question: "How often should CO sensors be calibrated?",
      answer: "Annual calibration is essential to maintain sensor accuracy. Sensors drift over time reading lower than actual CO levels, failing to trigger ventilation at dangerous thresholds. Calibration involves exposing sensors to known CO concentrations and adjusting readings to match. Failed sensors create false security while CO levels reach toxic concentrations."
    },
    {
      question: "What regulations govern car park ventilation?",
      answer: "Building Regulations Approved Document F requires ventilation systems maintaining air quality in enclosed spaces. Workplace exposure limits set maximum 8-hour CO exposure at 30ppm. Health & Safety at Work Act requires employers to control exposure to hazardous substances. CO monitoring provides evidence of compliance and safe working environment maintenance."
    },
    {
      question: "How does CO monitoring integrate with fire systems?",
      answer: "During fire events, car park ventilation must transition from CO control to smoke extraction mode. BMS integration ensures ventilation systems switch to fire override, maintaining extract operation even if CO sensors indicate low levels. Integration testing verifies fire signals override normal CO-controlled operation preventing smoke accumulation during evacuations."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Car Park CO Monitoring"
        description="Sensor calibration and ventilation controls for enclosed car parks including CO sensor accuracy tests, BMS integration, ventilation override, and fire event integration."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590674899484-d5640e854abe')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Car Park CO Monitoring
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Sensor calibration and ventilation controls for enclosed car parks.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Silent Killer in Enclosed Spaces
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Carbon monoxide from vehicle exhausts accumulates in enclosed car parks without adequate ventilation, reaching toxic concentrations that kill within minutes. CO is colorless and odorless—occupants experience no warning before unconsciousness. 50ppm causes headaches and nausea, 400ppm induces unconsciousness within hours, 1600ppm kills within one hour. Enclosed car parks require continuous CO monitoring triggering mechanical ventilation preventing dangerous accumulation.
                  </p>
                  <p>
                    CO sensors measure ambient concentrations activating ventilation fans when thresholds are exceeded. Sensors drift over time reading lower than actual CO levels, failing to trigger ventilation at dangerous concentrations. Annual calibration verifies sensor accuracy against known CO concentrations. BMS integration ensures ventilation responds to sensor readings. Fire override systems transition ventilation from CO control to smoke extraction during fire events maintaining safe evacuation conditions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  System Maintenance & Integration
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">CO Sensor Accuracy Tests & BMS Integration</h3>
                        <p className="text-muted-foreground font-light">
                          Annual calibration using certified test gases verifies sensors measure CO concentrations accurately. Sensor drift testing identifies units requiring replacement. BMS integration testing confirms ventilation systems respond correctly to sensor alarms. Control logic verification ensures fan speeds increase proportionally with rising CO levels.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Ventilation Override Function</h3>
                        <p className="text-muted-foreground font-light">
                          Manual override enables facilities staff to activate ventilation independent of sensor readings during maintenance or incident response. Time-based overrides provide ventilation during peak usage periods regardless of sensor readings. Override testing verifies systems respond to manual commands ensuring operational flexibility.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Fire Event Integration</h3>
                        <p className="text-muted-foreground font-light">
                          During fire events, car park ventilation transitions to smoke extraction mode maintaining extract operation even when CO sensors indicate low levels. Fire signal integration testing verifies fire alarm signals override normal CO-controlled operation. Failure to integrate systems allows smoke accumulation during evacuations creating life-threatening conditions.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/services/car-park-smoke-control" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Car Park Smoke Control
                  </Link>
                  <Link href="/services/bms-integration-testing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    BMS Integration Testing
                  </Link>
                  <Link href="/services/hvac" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    HVAC Maintenance
                  </Link>
                  <Link href="/services/fire-safety" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Fire Safety Services
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Occupants from Carbon Monoxide Hazards
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for CO monitoring system maintenance with sensor calibration and BMS integration testing.
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

export default CarParkCOMonitoring;
