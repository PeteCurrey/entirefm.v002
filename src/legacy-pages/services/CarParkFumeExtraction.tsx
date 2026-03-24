"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, AlertTriangle, FileText, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const CarParkFumeExtraction = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Car Park Fume Extraction" }
  ];

  const faqs = [
    {
      question: "Why is car park ventilation required?",
      answer: "Enclosed car parks accumulate toxic CO and NOx emissions from vehicles. Mechanical ventilation systems dilute harmful gases to safe levels, preventing occupant exposure and meeting workplace safety regulations."
    },
    {
      question: "How often must car park ventilation be tested?",
      answer: "Annual functional testing minimum, with quarterly visual inspections. CO/NOx sensor calibration, fan duty testing, and control system verification required under CIBSE and HSE guidance."
    },
    {
      question: "What CO levels trigger ventilation?",
      answer: "Typically 30ppm CO triggers ventilation boost mode, with 50ppm maximum short-term exposure limit. Sensor calibration and control system response testing ensure timely activation before dangerous concentrations."
    },
    {
      question: "What are the failure consequences?",
      answer: "Toxic gas accumulation causing occupant illness, statutory breaches of workplace exposure limits, HSE prosecution, tenant complaints, and insurance invalidation without testing certification."
    },
    {
      question: "What is the difference between car park and loading bay systems?",
      answer: "Car parks require CO/NOx dilution ventilation. Loading bays need high-volume diesel fume extraction plus fire smoke control under different regulatory frameworks—both requiring specialist assessment."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Car Park & Loading Bay Fume Extraction"
        description="CO/NOx ventilation systems for enclosed car parks and loading bays."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Car Park & Loading Bay Fume Extraction</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CO/NOx ventilation systems for enclosed car parks and loading bays
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Car className="w-8 h-8 text-primary" />
                  Workplace Air Quality Protection
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Enclosed car parks and loading bays accumulate toxic vehicle emissions—carbon monoxide (CO), nitrogen oxides (NOx), and diesel particulates. Mechanical ventilation dilutes harmful gases below workplace exposure limits, protecting occupants and meeting COSHH obligations.
                  </p>
                  <p>
                    Inadequate ventilation causes dangerous gas accumulation, occupant illness, and statutory exposure limit breaches. Annual testing verifies sensor calibration, fan performance, and control system response ensuring timely activation before hazardous concentrations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  System Components
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">CO/NOx Sensors</h3>
                    <p className="text-muted-foreground">
                      Gas monitoring sensors triggering ventilation boost. Annual calibration and response testing prevent sensor drift and false readings.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Extract Fans</h3>
                    <p className="text-muted-foreground">
                      Supply and extract ventilation achieving air change rates. Fan duty testing and motor condition assessment prevent performance degradation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Control Systems</h3>
                    <p className="text-muted-foreground">
                      BMS integration with staged ventilation response. Control logic testing and alarm function verification ensure correct system operation.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Fire Interlocking</h3>
                    <p className="text-muted-foreground">
                      Fire alarm interface for smoke control mode. Interface testing prevents conflicting ventilation strategies during fire evacuation.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Testing & Compliance
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Car park ventilation testing follows CIBSE Guide B, HSE workplace exposure limits, and COSHH requirements:
                  </p>
                  <ul className="space-y-2">
                    <li>Annual functional testing by ventilation specialists</li>
                    <li>CO/NOx sensor calibration using certified test gases</li>
                    <li>Fan duty testing—airflow, pressure, and motor performance</li>
                    <li>Control system response verification at trigger setpoints</li>
                    <li>Staged ventilation mode testing—normal, boost, and fire</li>
                    <li>BMS integration and alarm function testing</li>
                    <li>Fire interface verification preventing ventilation conflicts</li>
                    <li>Documented certification with gas concentration records</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Non-Compliance
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Untested car park ventilation systems expose organizations to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Toxic gas exposure:</strong> CO accumulation causing occupant illness, unconsciousness, and potential fatalities in poorly ventilated spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>COSHH breaches:</strong> Exceeding workplace exposure limits for CO and NOx resulting in HSE prosecution and improvement notices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Tenant complaints:</strong> Poor air quality causing health concerns, lease disputes, and reputational damage for commercial landlords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies void without testing certification, sensor calibration records, and workplace exposure monitoring</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/loading-bay-safety-systems" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Loading Bay Safety</h3>
                    <p className="text-sm text-muted-foreground">Industrial fume control</p>
                  </Link>
                  <Link href="/services/indoor-air-quality-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Indoor Air Quality</h3>
                    <p className="text-sm text-muted-foreground">IAQ assessments</p>
                  </Link>
                  <Link href="/services/hvac" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">HVAC Systems</h3>
                    <p className="text-sm text-muted-foreground">Ventilation maintenance</p>
                  </Link>
                  <Link href="/services/bms-integration-testing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">BMS Integration</h3>
                    <p className="text-sm text-muted-foreground">Control systems</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request Ventilation Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our ventilation specialists about car park fume extraction and compliance testing.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Support</Link>
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

export default CarParkFumeExtraction;
