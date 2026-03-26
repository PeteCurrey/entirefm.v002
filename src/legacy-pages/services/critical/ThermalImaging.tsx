"use client";

;
import Link from "next/link";
import { Thermometer, AlertTriangle, Camera, Shield } from "lucide-react";
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
  { label: "Thermal Imaging Surveys" }
];

const faqs = [
  {
    question: "How often should thermal imaging surveys be performed?",
    answer: "Annual thermal imaging is recommended for most commercial installations as part of BS 7671 compliance. High-risk environments like data centres, manufacturing plants, or sites with critical electrical infrastructure should conduct surveys quarterly or six-monthly."
  },
  {
    question: "Can thermal imaging detect problems before failure?",
    answer: "Yes. Thermal surveys identify developing faults months before catastrophic failure. Loose connections, degraded components, and overloading show as hotspots long before visible damage or circuit trips occur, allowing planned intervention rather than emergency repairs."
  },
  {
    question: "Is thermal imaging invasive or disruptive?",
    answer: "No. Thermal imaging is completely non-invasive and non-contact. Equipment remains energised and operational during surveys. There's no downtime, no physical interference, and no safety risk to surveyed components."
  },
  {
    question: "What temperature difference indicates a problem?",
    answer: "Generally, temperature differences above 10°C compared to equivalent components indicate developing issues requiring investigation. However, critical systems like data centres may require action at lower thresholds (5-7°C) to prevent equipment damage."
  }
];

const relatedServices = [
  {
    title: "Electrical Compliance",
    description: "Complete electrical testing, inspection, and certification programs.",
    link: "/services/electrical"
  },
  {
    title: "Arc Flash Assessment",
    description: "High-voltage and low-voltage electrical hazard quantification.",
    link: "/services/critical/arc-flash-assessment"
  },
  {
    title: "UPS Maintenance",
    description: "Uninterruptible power supply servicing including battery thermal profiling.",
    link: "/services/critical/ups-maintenance"
  },
  {
    title: "Power Quality Analysis",
    description: "Harmonic distortion and electrical load testing to identify overheating causes.",
    link: "/services/critical/power-quality"
  },
  {
    title: "PPM Delivery",
    description: "Planned preventive maintenance integrating thermal survey schedules.",
    link: "/fm-operations/ppm-delivery"
  },
  {
    title: "Data Room Audits",
    description: "Server room and data centre infrastructure compliance assessments.",
    link: "/services/critical/data-room-audits"
  }
];

export default function ThermalImaging() {
  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Thermal Imaging & Infrared Electrical Surveys"
        description="Professional thermal imaging surveys using calibrated infrared cameras to detect electrical faults, overheating, and fire risks before catastrophic failure."
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
              Thermal Imaging for Electrical Systems & Data Rooms
            </h1>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto">
              Detecting electrical faults and fire risks before catastrophic failure through professional infrared thermography.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Thermal Imaging Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Electrical failures rarely happen without warning. Loose connections, degraded insulation, and overloaded circuits 
                    generate excess heat long before visible damage, smoke, or fire occurs. The problem is these warning signs are invisible 
                    to the naked eye and often missed during standard visual inspections.
                  </p>
                  <p>
                    Thermal imaging cameras detect infrared radiation, revealing temperature differences that indicate developing electrical faults. 
                    This allows problems to be identified and corrected during planned maintenance windows rather than emergency callouts 
                    following equipment failure, fire, or injury.
                  </p>
                  <p>
                    BS 7671 (18th Edition Wiring Regulations) increasingly references thermal surveys as part of comprehensive electrical safety programs. 
                    Insurance providers actively encourage thermal imaging to reduce fire risk and demonstrate proactive asset management.
                  </p>
                </div>
              </section>

              {/* What We Detect */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Faults We Identify Through Thermal Imaging
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Thermometer className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Loose Connections</h3>
                    <p className="text-muted-foreground font-light">
                      High-resistance joints in busbars, MCBs, contactors, and terminations. The most common electrical fault, 
                      creating localised heating that degrades connections further until catastrophic failure.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Thermometer className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Circuit Overloading</h3>
                    <p className="text-muted-foreground font-light">
                      Cables and protective devices operating beyond design capacity. Often caused by gradual load growth, 
                      improper circuit utilisation, or harmonics increasing effective current.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Thermometer className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Phase Imbalance</h3>
                    <p className="text-muted-foreground font-light">
                      Unequal load distribution across three-phase systems causing overheating in specific phases and the neutral conductor. 
                      Common in poorly designed or modified installations.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Thermometer className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Component Degradation</h3>
                    <p className="text-muted-foreground font-light">
                      Capacitor failures, contactor wear, transformer winding faults, and motor bearing issues all manifest as thermal anomalies 
                      before complete breakdown occurs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Survey Process */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Our Thermal Imaging Survey Process
                </h2>
                <div className="space-y-6">
                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Camera className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Pre-Survey Planning</h3>
                        <p className="text-muted-foreground font-light mb-3">
                          We review electrical drawings, identify critical circuits, and schedule surveys during peak load conditions 
                          (40-60% capacity minimum) when faults are most visible thermally.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Risk assessment and method statement (RAMS) for live electrical work</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Coordination with site operations to access switchrooms and distribution boards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Equipment calibration and emissivity setting verification</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Camera className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">On-Site Survey</h3>
                        <p className="text-muted-foreground font-light mb-3">
                          Qualified thermographers using calibrated cameras systematically scan all electrical infrastructure 
                          while equipment remains energised and operational.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Main switchboards, distribution panels, and sub-distribution boards</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Busbar chambers, cable terminations, and connection points</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Motor control centres, contactors, and high-load circuits</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>UPS systems, generators, and backup power infrastructure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>External connections, service entries, and metering equipment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Analysis & Reporting</h3>
                        <p className="text-muted-foreground font-light mb-3">
                          Raw thermal images are processed, analysed against baseline temperatures, and prioritised by severity and risk. 
                          You receive a comprehensive report with annotated images, fault locations, and remediation recommendations.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Thermal images with temperature scales and reference baselines</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Fault severity grading: Critical (immediate action), High (urgent), Medium (planned), Low (monitor)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Detailed fault descriptions, probable causes, and fire risk assessment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Remediation recommendations with estimated costs and timeframes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Year-on-year comparison highlighting trends and deterioration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* BS 7671 Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  BS 7671 & Regulatory Context
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    While thermal imaging isn't explicitly mandated by BS 7671, it aligns with several key requirements:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>
                      <strong className="text-foreground">Regulation 134.1.1:</strong> Good workmanship and proper materials. 
                      Thermal surveys validate installation quality and identify poor terminations.
                    </li>
                    <li>
                      <strong className="text-foreground">Regulation 421.1.1:</strong> Protection against fire caused by electrical equipment. 
                      Detecting overheating components directly addresses this requirement.
                    </li>
                    <li>
                      <strong className="text-foreground">Periodic Inspection (Section 6):</strong> Thermal imaging provides evidence of 
                      ongoing electrical safety between formal inspection periods.
                    </li>
                  </ul>
                  <p>
                    IEC 60364 and IET Guidance Note 3 recognise thermal imaging as a valuable diagnostic tool for electrical installations. 
                    Many insurance providers now require annual thermal surveys as a condition of cover for high-value or critical installations.
                  </p>
                </div>
              </section>

              {/* Data Centre Applications */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Infrastructure & Data Centre Applications
                </h2>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-muted-foreground font-light mb-4">
                    Data centres represent the most demanding application for thermal imaging. Electrical failures in data halls cause 
                    cascading shutdowns affecting thousands of servers and customers. Uptime Institute Tier certifications require 
                    proactive monitoring and fault detection.
                  </p>
                  <p className="text-muted-foreground font-light mb-4">
                    Our data centre thermal surveys extend beyond electrical distribution to include:
                  </p>
                  <ul className="space-y-2 text-muted-foreground font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>UPS battery string thermal profiling identifying cells approaching failure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Busbar trunking systems feeding data hall power distribution units</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>PDU connections, circuit breakers, and server cabinet distribution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>CRAC/CRAH unit electrical components and control systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Generator and ATS equipment under load testing conditions</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Related Services */}
              <RelatedServices services={relatedServices} />

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* CTA Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-light mb-4">Schedule Your Thermal Survey</h2>
                <p className="text-muted-foreground mb-6 font-light max-w-2xl mx-auto">
                  Professional infrared electrical surveys identifying faults before they cause fires, failures, or injuries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/request-proposal">Request Thermal Survey</Link>
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
