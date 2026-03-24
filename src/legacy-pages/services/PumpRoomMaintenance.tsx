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

const PumpRoomMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Pump Room Maintenance" }
  ];

  const faqs = [
    {
      question: "What pumps are typically found in commercial pump rooms?",
      answer: "Commercial pump rooms contain heating circulation pumps, chilled water pumps, pressurisation pumps, fire suppression pumps, and booster pumps for water pressure. Each system requires specific maintenance regimes including seal inspection, bearing lubrication, duty/standby rotation, and performance verification."
    },
    {
      question: "How often should pump room equipment be maintained?",
      answer: "Routine inspections should occur monthly, with formal servicing quarterly or bi-annually depending on pump duty cycle and criticality. Fire suppression pumps require weekly automated tests and full annual servicing. Duty/standby rotation prevents seized pumps and identifies failures before critical demand periods."
    },
    {
      question: "What are the risks of neglecting pump room maintenance?",
      answer: "Neglected pumps develop seal leaks causing flooding, bearing failures causing motor burnout, and impeller wear reducing flow capacity. Seized standby pumps fail during duty pump breakdowns, leaving buildings without heating, water pressure, or fire suppression. Thermal imaging identifies bearing overheating before catastrophic failure."
    },
    {
      question: "What safety considerations apply to pump room access?",
      answer: "Pump rooms contain stored energy risks from pressurised systems, rotating machinery hazards, electrical equipment, and hot surfaces. Risk assessments must address confined space entry, emergency shutdown procedures, isolation protocols, and personal protective equipment requirements for engineers accessing plant rooms."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Pump Room Maintenance"
        description="Ensuring the operational integrity of critical water, heating, and fire suppression pumps through routine servicing, duty/standby rotation, and performance verification."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094271901-8022df4466f9')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Pump Room Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Ensuring the operational integrity of critical water, heating, and fire suppression pumps.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Infrastructure in Every Building
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Pump rooms house the mechanical systems delivering heating, cooling, water pressure, and fire suppression throughout commercial properties. Pump failure causes immediate loss of essential services: no heating in winter, inadequate water pressure, non-functional fire suppression. Without maintained duty/standby redundancy, single failures cascade into building-wide service outages.
                  </p>
                  <p>
                    Routine maintenance prevents catastrophic failures through seal inspection, bearing lubrication, impeller examination, and performance testing. Thermal imaging identifies bearing overheating before seizure. Duty/standby rotation ensures standby pumps activate during failures. Pressure vessel checks prevent rupture risks. Neglected pump rooms accumulate deferred maintenance until multiple simultaneous failures overwhelm facilities teams.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Maintenance Regime Components
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Duty/Standby Rotation & Seal Inspections</h3>
                        <p className="text-muted-foreground font-light">
                          Monthly rotation of duty/standby pumps prevents seized standby equipment and distributes wear. Mechanical seal inspection identifies leaks causing flooding and bearing contamination. Packing gland adjustment prevents dripping and shaft scoring.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Flow Performance & Pressure Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Flow rate measurement identifies impeller wear, system blockages, and reduced efficiency. Pressure testing verifies pumps deliver design pressures under full load. Performance degradation indicates required impeller replacement or motor rewinding.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Thermal Imaging & Vibration Analysis</h3>
                        <p className="text-muted-foreground font-light">
                          Thermal imaging cameras detect bearing overheating, motor winding faults, and electrical connection failures before catastrophic breakdown. Vibration analysis identifies bearing wear, shaft misalignment, and impeller imbalance requiring corrective maintenance.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/services/hvac" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    HVAC Maintenance
                  </Link>
                  <Link href="/services/plumbing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Plumbing Services
                  </Link>
                  <Link href="/services/rising-mains" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Rising Mains Testing
                  </Link>
                  <Link href="/services/plant-room-risk-assessments" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Plant Room Risk Assessments
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Prevent Pump Failures Before They Disrupt Operations
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for comprehensive pump room maintenance with thermal imaging and performance verification.
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

export default PumpRoomMaintenance;
