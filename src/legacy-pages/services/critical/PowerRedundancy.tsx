"use client";

;
import Link from "next/link";
import { Zap, Activity, Server, AlertOctagon } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { Button } from "@/components/ui/button";
import { RelatedServices } from "@/components/shared/RelatedServices";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
  { label: "Power Redundancy & Load Bank Testing" }
];

const faqs = [
  {
    question: "What is N+1 redundancy in power systems?",
    answer: "N+1 means one additional component beyond the minimum required for full capacity. For example, if a data room needs 3 UPS modules for full load, N+1 redundancy means installing 4 modules, so a single failure doesn't compromise operations."
  },
  {
    question: "How often should load bank testing be performed?",
    answer: "Critical systems should undergo load bank testing annually at minimum. High-risk environments like data centres or healthcare facilities may require quarterly or six-monthly testing to validate backup power capacity and identify degradation."
  },
  {
    question: "What is a Black Building Test?",
    answer: "A Black Building Test simulates total mains power failure to verify all backup systems function correctly under real-world conditions. This includes generator start, load transfer, UPS hold-up, and building systems maintaining operation throughout the transition."
  },
  {
    question: "Can load bank testing be done without downtime?",
    answer: "For systems with sufficient redundancy (N+1 or better), individual components can be tested while others remain operational. However, full Black Building Tests require planned downtime and advance coordination with all stakeholders."
  }
];

const relatedServices = [
  {
    title: "UPS Maintenance",
    description: "Battery replacements, impedance testing, and uninterruptible power system servicing.",
    link: "/services/critical/ups-maintenance"
  },
  {
    title: "Generator Maintenance",
    description: "Backup generator servicing, fuel quality, and transfer switch testing.",
    link: "/services/critical/generator-maintenance"
  },
  {
    title: "Electrical Compliance",
    description: "Complete electrical testing and certification across all voltage levels.",
    link: "/services/electrical"
  },
  {
    title: "Thermal Imaging",
    description: "Infrared surveys to detect electrical faults and overheating components.",
    link: "/services/critical/thermal-imaging"
  },
  {
    title: "Data Room Audits",
    description: "Comprehensive server room and data centre compliance assessments.",
    link: "/services/critical/data-room-audits"
  },
  {
    title: "PPM Delivery",
    description: "Planned preventive maintenance integrating power system resilience checks.",
    link: "/fm-operations/ppm-delivery"
  }
];

export default function PowerRedundancy() {
  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Power Redundancy & Load Bank Testing"
        description="Power system resilience testing including load bank validation, redundancy design, and Black Building Tests for critical operations."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero-building-engineering.jpg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Power Redundancy Testing (Load Banks & N+1)
            </h1>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto">
              Validating backup power capacity and resilience through structured load testing and Black Building simulations.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Power Redundancy Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Mission-critical facilities cannot afford power interruptions. Data centres, hospitals, manufacturing plants, 
                    and financial institutions rely on redundant power systems to maintain operations during mains failures, 
                    equipment faults, or planned maintenance.
                  </p>
                  <p>
                    However, redundancy is only effective if tested. Generators that haven't run under load may fail during an actual outage. 
                    UPS batteries degrade silently. Transfer switches can stick. Load bank testing validates that backup systems 
                    actually deliver the capacity and reliability your operations depend on.
                  </p>
                </div>
              </section>

              {/* Redundancy Levels */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Understanding Redundancy Levels
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">N (No Redundancy)</h3>
                    <p className="text-muted-foreground font-light">
                      Single path to load with no backup. Any component failure causes downtime. Only suitable for non-critical systems 
                      or where brief outages are acceptable.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">N+1 Redundancy</h3>
                    <p className="text-muted-foreground font-light">
                      One additional component beyond minimum capacity. Single failures don't cause downtime, but maintenance 
                      windows require careful management. Industry standard for most critical systems.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">N+2 Redundancy</h3>
                    <p className="text-muted-foreground font-light">
                      Two spare components. Allows simultaneous component failure and planned maintenance without risk. 
                      Required for Tier IV data centres and ultra-high availability environments.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">2N (Dual Path)</h3>
                    <p className="text-muted-foreground font-light">
                      Two completely independent systems, each capable of full load. True fault tolerance with no single point of failure. 
                      Highest resilience but significant cost and space requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Load Bank Testing */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Load Bank Testing Methodology
                </h2>
                <div className="space-y-6">
                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Activity className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Resistive Load Testing</h3>
                        <p className="text-muted-foreground font-light mb-3">
                          Applying graduated electrical load to generators, UPS systems, or entire power chains to verify capacity, 
                          voltage stability, and thermal performance under realistic demand.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>25%, 50%, 75%, and 100% load steps measured over extended periods</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Voltage drop, frequency stability, and harmonic distortion monitoring</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Engine temperature, exhaust quality, and fuel consumption validation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Server className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Reactive Load Testing</h3>
                        <p className="text-muted-foreground font-light mb-3">
                          Some loads (motors, transformers, IT equipment) create reactive power that affects generator performance differently 
                          than pure resistive loads. Reactive testing validates system response to real-world power factor conditions.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Power factor correction system validation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Generator excitation and voltage regulator response</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Transformer saturation and harmonic generation under load</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <AlertOctagon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Black Building Tests</h3>
                        <p className="text-muted-foreground font-light mb-3">
                          The ultimate resilience test: simulating total mains failure to verify seamless transition to backup power, 
                          load prioritisation, and sustained operation across all building systems.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Generator auto-start and load acceptance under real building demand</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>UPS hold-up time validation ensuring zero interruption to critical loads</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>BMS, fire systems, security, and life safety equipment continuity checks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Return-to-mains procedures including load synchronisation and transfer</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Centre Applications */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Data Centre & Mission-Critical Applications
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Data centres represent the highest tier of power resilience requirements. Uptime Institute Tier III and IV certifications 
                    mandate specific redundancy levels, concurrent maintainability, and annual proof-of-capacity testing.
                  </p>
                  <p>
                    Our load bank testing validates not just individual components, but entire power chains under realistic data hall loads. 
                    This includes PDU distribution, busbar systems, static transfer switches, and cooling infrastructure dependency on backup power.
                  </p>
                  <p>
                    We coordinate with IT teams to schedule testing during low-occupancy periods, provide real-time monitoring throughout tests, 
                    and deliver comprehensive reports documenting capacity margins, voltage quality, and any anomalies requiring remediation.
                  </p>
                </div>
              </section>

              {/* Load Bank Hire */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Load Bank Equipment & Hire
                </h2>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-muted-foreground font-light mb-4">
                    We maintain a fleet of modern load banks from 50kVA to 2MVA capacity, suitable for single generators through to 
                    large parallel installations. All equipment is PAT tested, calibrated, and operated by qualified engineers.
                  </p>
                  <p className="text-muted-foreground font-light">
                    For clients with regular testing requirements, we offer long-term hire arrangements with engineer support packages. 
                    This provides cost-effective compliance for portfolios requiring quarterly or annual validation across multiple sites.
                  </p>
                </div>
              </section>

              {/* Related Services */}
              <RelatedServices services={relatedServices} />

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* CTA Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-light mb-4">Validate Your Backup Power Systems</h2>
                <p className="text-muted-foreground mb-6 font-light max-w-2xl mx-auto">
                  Load bank testing and Black Building simulations to prove your power redundancy works when it matters.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/request-proposal">Request Load Bank Testing</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Discuss Requirements</Link>
                  </Button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
