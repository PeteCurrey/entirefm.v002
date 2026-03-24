"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Download, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, LocalBusinessSchema, FAQSchema } from "@/components/shared/SchemaMarkup";

const WaterDerby = () => {
  const faqs = [
    {
      question: "Why do transport facilities require enhanced water safety protocols?",
      answer: "Transport hubs and aerospace facilities operate 24/7 with critical infrastructure dependencies. Water system failures can halt operations costing millions, while outbreak risks affect thousands of passengers and workers daily."
    },
    {
      question: "What compliance standards apply to aerospace manufacturing?",
      answer: "Aerospace facilities must comply with ACOP L8 alongside stringent OEM customer auditing requirements. Process cooling systems, emergency showers, and welfare facilities require comprehensive risk assessments and continuous monitoring."
    },
    {
      question: "How do you handle water testing in operational facilities?",
      answer: "Our Derby teams schedule testing around operational shifts with minimal disruption. Emergency sampling and remedials can be deployed during maintenance windows or out-of-hours to protect continuous operations."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Derby" }
  ];

  return (
    <>
      

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Derby"
        description="ACOP L8 compliant Legionella testing for Derby's transport hubs, aerospace, and industrial facilities"
        provider="Entire FM"
        areaServed="Derby"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Derby"
        address={{
          street: "Derby Service Centre",
          city: "Derby",
          postalCode: "DE1 1AA",
          country: "GB"
        }}
      />

      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070')`,
          }}
          aria-label="Transport and aerospace facility water system monitoring in Derby"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Derby
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Transport & aerospace facilities demand zero outbreak risk with continuous operational protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/contact">
                  Request Legionella Risk Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal">
                <a href="#checklist" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Compliance Checklist
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-16">
              {/* Why Derby Requires Absolute Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Derby Requires Absolute Compliance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Derby's position as a transport engineering and aerospace hub creates unique water safety challenges. Rail manufacturing, aerospace assembly, and transport facilities operate under zero-downtime requirements where water system failures can halt critical national infrastructure.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Non-compliance consequences:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>HSE enforcement and criminal liability for the Responsible Person</li>
                    <li>Operational shutdown affecting national transport networks</li>
                    <li>OEM customer audit failures and contract penalties</li>
                    <li>Insurance invalidation for water-related claims and incidents</li>
                  </ul>
                </div>
              </section>

              {/* Full Legionella Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Full Legionella Compliance (ACOP L8 + HSG274)
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Derby's aerospace and transport sector demands compliance programmes that protect operations while meeting stringent customer auditing standards. Our expertise spans Rolls-Royce supply chains, Bombardier facilities, and Pride Park corporate estates.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Transport & Aerospace Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Critical infrastructure water system mapping including process cooling and emergency systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">HSG274 Parts 1 & 2 compliant assessments for manufacturing operations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">OEM customer audit preparation and documentation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written control schemes aligned with 24/7 operational requirements</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </section>

              {/* Monitoring Programmes */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Monitoring Programmes & Tank Inspection
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Continuous manufacturing operations demand monitoring that protects safety without disrupting production schedules. Our Derby teams coordinate testing around maintenance windows and shift patterns with operational efficiency prioritised.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Operational Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Shift-coordinated temperature checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Process cooling system monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Emergency shower and welfare facility testing</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">System Inspections</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Large-capacity tank inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Cooling tower condition surveys</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Photographic compliance documentation</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Remedials & Asset Upgrades */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Zero-Delay Remedials & Asset Upgrades
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Manufacturing downtime in aerospace and transport facilities creates cascade effects across national supply chains. Our rapid response teams deploy emergency remedials with production-first scheduling to protect critical operations.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Emergency System Disinfection</h3>
                          <p className="text-sm text-muted-foreground font-light">Rapid thermal or chemical treatment with production coordination and validation testing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Cooling System Overhauls</h3>
                          <p className="text-sm text-muted-foreground font-light">Complete cooling tower and process water system refurbishment during planned shutdowns</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Infrastructure Modernisation</h3>
                          <p className="text-sm text-muted-foreground font-light">Legacy system upgrades aligned with facility expansion and operational improvements</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Digital Evidence Trail */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Audit-Ready Digital Governance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    OEM customer audits, HSE inspections, and insurance renewals demand instant compliance evidence. Our digital platform provides complete traceability across Derby facilities with automated alerts and real-time compliance monitoring.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Real-Time Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Live visibility of all facility water systems</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Automated Alerts</h3>
                      <p className="text-sm text-muted-foreground font-light">Proactive notifications prevent compliance lapses</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">OEM Audit Reports</h3>
                      <p className="text-sm text-muted-foreground font-light">One-click documentation for customer audits</p>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Sectors We Protect */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Sectors We Protect
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Aerospace manufacturing and assembly facilities</li>
                    <li>Transport hubs and rail engineering sites</li>
                    <li>Industrial manufacturing and logistics</li>
                    <li>Corporate offices and business parks</li>
                    <li>Retail and hospitality venues</li>
                  </ul>
                </div>
              </section>

              {/* Local Coverage */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Derby & East Midlands Coverage
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    From Pride Park aerospace facilities to city-centre corporate estates, our engineers provide rapid response for emergency sampling, outbreak management, and remedial works across Derby and the wider East Midlands region.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Service Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Derby City</h4>
                        <p className="text-sm text-muted-foreground font-light">City Centre, Pride Park, Sinfin, Allestree</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Derby Industrial</h4>
                        <p className="text-sm text-muted-foreground font-light">Bombardier, Rolls-Royce supply chain, A50 corridor</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">South Derbyshire</h4>
                        <p className="text-sm text-muted-foreground font-light">Burton-upon-Trent, Swadlincote, Ashby-de-la-Zouch</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Peak District Gateway</h4>
                        <p className="text-sm text-muted-foreground font-light">Matlock, Belper, Ripley commercial estates</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Derby</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/fire/derby" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing for aerospace and transport facilities</p>
                    </Card>
                  </Link>
                  <Link href="/electrical/derby" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical EICR</h3>
                      <p className="text-sm text-muted-foreground font-light">Fixed wire testing for manufacturing facilities</p>
                    </Card>
                  </Link>
                  <Link href="/services/ppm" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">PPM Maintenance</h3>
                      <p className="text-sm text-muted-foreground font-light">Planned preventative maintenance for critical infrastructure</p>
                    </Card>
                  </Link>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* CTA Footer */}
              <section className="bg-muted/50 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">Protect Your Operations. Request Your Risk Assessment.</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button asChild size="lg" className="text-lg">
                    <Link href="/contact">
                      Request Legionella Risk Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <div className="text-muted-foreground">
                    <p className="font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      📩 derby@entirefm.com
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <SidebarCTA />
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
};

export default WaterDerby;
