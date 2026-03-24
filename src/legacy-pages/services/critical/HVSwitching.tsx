"use client";

;
import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle2, FileText } from "lucide-react";
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
  { label: "HV Switching & Maintenance" }
];

const faqs = [
  {
    question: "What is an Authorised Person (AP) in HV switching?",
    answer: "An Authorised Person is a qualified engineer approved by the Duty Holder to carry out switching operations on high-voltage electrical systems. They must complete specialist training, hold relevant qualifications, and maintain competency records."
  },
  {
    question: "How often should HV switching be performed?",
    answer: "Frequency depends on the asset type and operational requirements. Planned maintenance switching occurs quarterly or annually, while operational switching (load transfers, isolations) happens as needed for maintenance access or emergency response."
  },
  {
    question: "What are the risks of incorrect HV switching?",
    answer: "Incorrect switching can cause arc flash incidents, equipment damage, power outages, personal injury, and potentially fatal electrical incidents. This is why strict procedures, qualified personnel, and proper isolation verification are critical."
  },
  {
    question: "Do you provide 24/7 HV switching support?",
    answer: "Yes, we maintain Authorised Persons available for emergency HV switching operations 24/7/365. This includes out-of-hours load transfers, fault response, and emergency isolations."
  }
];

const relatedServices = [
  {
    title: "Arc Flash Risk Assessment",
    description: "Quantify electrical hazards and establish safe working procedures for HV and LV systems.",
    link: "/services/critical/arc-flash-assessment"
  },
  {
    title: "Generator Maintenance",
    description: "Backup power servicing including transfer switch testing and load synchronisation.",
    link: "/services/critical/generator-maintenance"
  },
  {
    title: "Electrical Compliance",
    description: "Complete electrical testing, inspection, and certification across all voltage levels.",
    link: "/services/electrical"
  },
  {
    title: "UPS Maintenance",
    description: "Uninterruptible power supply servicing to maintain critical load protection.",
    link: "/services/critical/ups-maintenance"
  },
  {
    title: "PPM Delivery",
    description: "Planned preventive maintenance programs integrating HV switching schedules.",
    link: "/fm-operations/ppm-delivery"
  },
  {
    title: "Thermal Imaging",
    description: "Infrared surveys to detect HV equipment faults before failure occurs.",
    link: "/services/critical/thermal-imaging"
  }
];

export default function HVSwitching() {
  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="HV Switching & Authorised Personnel Services"
        description="High-voltage electrical switching operations, maintenance access, and emergency response by fully qualified Authorised Persons."
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
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              HV Switching & Authorised Personnel Services
            </h1>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto">
              Qualified Authorised Persons for high-voltage switching operations, load transfers, and emergency isolations.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  High-Voltage Switching Operations
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    High-voltage electrical systems require specialist knowledge, formal authorisation, and strict safety procedures. 
                    Our Authorised Persons (APs) are trained, qualified, and approved to carry out switching operations on HV systems 
                    up to 33kV, ensuring safe isolation, load transfers, and maintenance access.
                  </p>
                  <p>
                    Incorrect HV switching can result in catastrophic equipment failure, arc flash incidents, and life-threatening injuries. 
                    We operate under strict Permit to Work (PTW) systems, isolation verification procedures, and risk assessments for every operation.
                  </p>
                </div>
              </section>

              {/* HV System Categories */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  HV System Categories We Manage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">11kV Switchgear</h3>
                    <p className="text-muted-foreground font-light">
                      Most common UK commercial voltage. Ring main units, transformers, and distribution panels requiring qualified APs for all switching operations.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">6.6kV & 3.3kV Systems</h3>
                    <p className="text-muted-foreground font-light">
                      Industrial sites, manufacturing plants, and older estates. Step-down transformers feeding LV distribution boards.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">33kV Infrastructure</h3>
                    <p className="text-muted-foreground font-light">
                      Large campuses, data centres, and utility connections. Requires additional safety measures and authorisation levels.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Generator HV Changeover</h3>
                    <p className="text-muted-foreground font-light">
                      Switching between mains supply and backup generators, including synchronisation and load transfer procedures.
                    </p>
                  </div>
                </div>
              </section>

              {/* Switching Operations */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Switching Operations We Perform
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Planned Maintenance Access</h3>
                        <p className="text-muted-foreground font-light">
                          Isolation of HV equipment to allow safe access for transformer servicing, circuit breaker maintenance, 
                          or protection relay testing. Full PTW procedures and earthing applied.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Load Transfer Operations</h3>
                        <p className="text-muted-foreground font-light">
                          Transferring electrical loads between transformers, ring main sections, or backup systems. 
                          Critical for minimising downtime during planned works or equipment replacement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Emergency Isolations</h3>
                        <p className="text-muted-foreground font-light">
                          24/7 response for fault conditions, equipment failures, or fire alarm activations requiring immediate HV isolation. 
                          Rapid deployment of authorised engineers with full PPE and switching documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Generator Synchronisation</h3>
                        <p className="text-muted-foreground font-light">
                          Connecting backup generators to the HV network under controlled conditions. Includes frequency matching, 
                          phase alignment, and gradual load pickup to prevent system shock.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-1">Cable Jointing Access</h3>
                        <p className="text-muted-foreground font-light">
                          Providing dead isolation for HV cable jointing, termination work, or underground cable fault repair. 
                          Includes cable identification, phasing checks, and post-work energisation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Authorised Person Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Authorised Person (AP) Requirements
                </h2>
                <div className="bg-muted/20 border border-border/50 rounded-lg p-8">
                  <div className="space-y-4 text-muted-foreground font-light">
                    <p className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-foreground">Formal Qualification:</strong> City & Guilds Level 3 in HV Switching or equivalent, 
                        demonstrating technical competence in electrical principles, system design, and safety procedures.
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-foreground">Site-Specific Authorisation:</strong> Written approval from the site Duty Holder 
                        confirming the AP's competence to work on specific HV equipment under defined conditions.
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-foreground">Arc Flash Training:</strong> Understanding of arc flash hazards, PPE requirements, 
                        approach distances, and emergency response procedures for high-energy fault conditions.
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-foreground">Medical Fitness:</strong> Current medical certificate confirming fitness to work 
                        on high-voltage systems, including vision, reaction time, and cardiovascular health assessments.
                      </span>
                    </p>
                    <p className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>
                        <strong className="text-foreground">Competency Refreshers:</strong> Annual revalidation training to maintain 
                        authorisation, covering system changes, incident learnings, and regulatory updates.
                      </span>
                    </p>
                  </div>
                </div>
              </section>

              {/* Risk Management */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Risk Management & Safety Protocols
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Every HV switching operation follows a strict risk assessment and method statement (RAMS) process. 
                    We identify potential hazards, control measures, and emergency procedures before any work begins.
                  </p>
                  <p>
                    Key controls include: isolation verification using approved voltage indicators, mechanical interlocking 
                    to prevent incorrect switching sequences, segregated earthing to protect against induced voltages, 
                    and clear communication protocols between the AP and site management.
                  </p>
                  <p>
                    Our APs carry full arc flash PPE including face shields, flame-resistant clothing, and insulated tools. 
                    All operations are logged, with switching diagrams, isolation certificates, and incident records maintained 
                    for audit and insurance compliance.
                  </p>
                </div>
              </section>

              {/* Related Services */}
              <RelatedServices services={relatedServices} />

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* CTA Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-light mb-4">Need HV Switching Support?</h2>
                <p className="text-muted-foreground mb-6 font-light max-w-2xl mx-auto">
                  Authorised Persons available 24/7 for planned maintenance, emergency isolations, and load transfers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/request-proposal">Request Proposal</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Emergency HV Support</Link>
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
