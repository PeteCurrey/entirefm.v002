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

const WaterBirmingham = () => {
  const faqs = [
    {
      question: "Why is Legionella control critical for Birmingham warehouses?",
      answer: "Large logistics warehouses with complex water systems, low-use areas, and temperature fluctuations create ideal conditions for Legionella growth. HSE enforcement has intensified in the West Midlands, making proactive compliance essential."
    },
    {
      question: "What does ACOP L8 require for industrial facilities?",
      answer: "Comprehensive risk assessments, written schemes of control, monthly temperature monitoring, quarterly tank inspections, and annual reviews. Industrial cooling systems require additional HSG274 Part 1 compliance measures."
    },
    {
      question: "How quickly can remedial work begin after detection?",
      answer: "Our Birmingham-based teams mobilise within 24 hours for emergency disinfection, system flushing, and remedial works. We coordinate with your operations to minimise downtime in supply chain-critical facilities."
    },
    {
      question: "Do I need Legionella testing for small commercial premises?",
      answer: "Yes. All employers and landlords have legal duties under L8 regardless of building size. Small premises still require risk assessments and monitoring proportionate to their water system complexity."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Birmingham" }
  ];

  return (
    <>
      

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Birmingham"
        description="ACOP L8 compliant Legionella testing and water hygiene for Birmingham industrial, logistics, and commercial properties"
        provider="Entire FM"
        areaServed="Birmingham"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Birmingham"
        address={{
          street: "Birmingham Service Centre",
          city: "Birmingham",
          postalCode: "B1 1AA",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')`,
          }}
          aria-label="Industrial water system testing and Legionella sampling in Birmingham warehouse facility"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Birmingham
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Minimise operational downtime & protect uptime-critical facilities with ACOP L8 compliance across the West Midlands.
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
              {/* Full Legionella Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Full Legionella Compliance (ACOP L8 + HSG274)
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    West Midlands enforcement actions and logistics warehouse obligations mean Birmingham businesses face heightened scrutiny. Our comprehensive water hygiene programme protects your operations across the NEC area, JLR supply chain facilities, and large distribution networks.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Industrial & Warehouse Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Complex water system mapping including process water, welfare facilities, and cooling towers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">HSG274 Parts 1 & 2 compliant assessments for industrial operations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written control schemes aligned with 24/7 operational requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Supply chain risk management documentation for JLR and tier-1 automotive suppliers</span>
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
                    Large warehouses demand robust monitoring with minimal operational interference. Our scheduled testing runs parallel to your logistics operations without disrupting throughput or workforce access.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Operational Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Out-of-hours testing to avoid shift disruption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Temperature checks across multiple buildings/zones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Cooling tower and evaporative condenser monitoring</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Tank & System Inspections</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Large-capacity tank inspections with confined space protocols</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Biofilm assessment and debris removal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Photographic audit trails for landlord compliance</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Remedials & Asset Upgrades */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Remedials & Asset Upgrades
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    When water system failures threaten operations, our rapid response teams deliver same-day mobilisation across Birmingham and the wider West Midlands industrial corridor.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Emergency System Disinfection</h3>
                          <p className="text-sm text-muted-foreground font-light">Thermal shock or chemical treatment with out-of-hours scheduling to protect production schedules</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Cooling Tower Refurbishment</h3>
                          <p className="text-sm text-muted-foreground font-light">Drift eliminator replacement, fill pack cleaning, and chemical dosing system upgrades</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Multi-Site System Overhauls</h3>
                          <p className="text-sm text-muted-foreground font-light">Coordinated upgrades across warehouse portfolios with phased implementation</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Digital Evidence Trail */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Digital Evidence Trail – Always Audit-Ready
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Supply chain audits and HSE inspections demand instant compliance evidence. Our digital platform gives portfolio managers complete visibility across multiple Birmingham sites.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Multi-Site Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Consolidated view of all warehouse locations in real-time</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Automated Compliance Alerts</h3>
                      <p className="text-sm text-muted-foreground font-light">Proactive notifications prevent missed inspections</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Instant Report Export</h3>
                      <p className="text-sm text-muted-foreground font-light">Client-ready documentation for insurers and auditors</p>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Local Response Network */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  West Midlands Coverage Network
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    From Birmingham city centre to the M42 logistics corridor, our engineers provide rapid response for emergency sampling, outbreak management, and remedial works across the entire region.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Regional Service Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Birmingham & Solihull</h4>
                        <p className="text-sm text-muted-foreground font-light">City centre, NEC, Birmingham Business Park, Airport corridor</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Black Country</h4>
                        <p className="text-sm text-muted-foreground font-light">Wolverhampton, Dudley, Walsall, West Bromwich industrial estates</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">M42 Corridor</h4>
                        <p className="text-sm text-muted-foreground font-light">Hams Hall, Meriden, Castle Bromwich, Coleshill logistics hubs</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Wider West Midlands</h4>
                        <p className="text-sm text-muted-foreground font-light">Coventry, Warwick, Redditch, Tamworth</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Birmingham</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/fire/birmingham" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing and certification</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link href="/electrical/birmingham" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">EICR testing and remedials</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link href="/emergency-lighting/birmingham" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Emergency Lighting</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5266 testing and maintenance</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Bottom CTA */}
              <Card className="p-8 bg-charcoal text-white text-center">
                <h2 className="text-3xl font-light mb-4">Protect Your Birmingham Operations</h2>
                <p className="text-lg mb-6 font-light text-gray-300">
                  Request a comprehensive Legionella risk assessment with supply chain-aligned compliance documentation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">
                      Request Risk Assessment
                      <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                    <a href="tel:+448001234567">
                      <Phone className="mr-2" />
                      24/7 Emergency Response
                    </a>
                  </Button>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default WaterBirmingham;