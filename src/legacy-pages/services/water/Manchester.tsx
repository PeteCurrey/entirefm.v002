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

const WaterManchester = () => {
  const faqs = [
    {
      question: "Why is Legionella control critical for Manchester student accommodation?",
      answer: "Student accommodation faces heightened risk from seasonal vacancies causing water stagnation, high-density occupancy, and shared facilities. Manchester's surge in PBSA development has increased regulatory scrutiny, making proactive L8 compliance essential."
    },
    {
      question: "What are the legal obligations for PBSA operators?",
      answer: "PBSA operators must conduct risk assessments, implement monitoring programmes, maintain temperature records, inspect tanks regularly, and ensure rapid remediation of any issues. Failure can result in HSE prosecution and resident safety risks."
    },
    {
      question: "How does water system management differ during vacation periods?",
      answer: "Vacant periods require enhanced flushing regimes, dead leg management, and increased monitoring to prevent stagnation. Our programmes include summer holiday protocols to maintain water quality when buildings are partially occupied."
    },
    {
      question: "What does a Legionella outbreak mean for my facility?",
      answer: "A confirmed outbreak requires immediate system shutdown, HSE notification, resident communication, emergency disinfection, and extensive retesting. Our rapid response protocols minimise resident displacement and reputational damage."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Manchester" }
  ];

  return (
    <>
      

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Manchester"
        description="ACOP L8 compliant Legionella testing and water hygiene for Manchester PBSA, commercial, and retail properties"
        provider="Entire FM"
        areaServed="Manchester"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Manchester"
        address={{
          street: "Manchester Service Centre",
          city: "Manchester",
          postalCode: "M1 1AA",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070')`,
          }}
          aria-label="Water hygiene monitoring and temperature testing in Manchester student accommodation facility"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Manchester
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Protect students & residents with ACOP L8 compliance across Manchester's PBSA estates, older commercial infrastructure, and high-density developments.
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
                  Download PBSA Compliance Guide
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
                    Manchester's surge in student accommodation and older commercial infrastructure creates unique water safety challenges. Our compliance programmes protect residents across Trafford Park, Airport City, and city centre PBSA developments with sector-specific expertise.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">PBSA & Multi-Occupancy Expertise</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">High-density accommodation risk assessments with room-level outlet mapping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Vacation period stagnation management and flushing regimes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Shared facility protocols for communal kitchens, showers, and amenity spaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written schemes aligned with Universities UK guidance and ANUK Code</span>
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
                    Student accommodation demands non-intrusive monitoring that respects resident privacy while maintaining rigorous safety standards. Our programmes run seamlessly around academic calendars and term schedules.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Resident-Friendly Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Scheduled access protocols respecting student privacy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Sentinel outlet testing with minimal disruption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">DBS-checked engineers for student safety</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Vacation Period Management</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Enhanced flushing during summer breaks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Dead leg identification and remediation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Pre-occupancy validation before term starts</span>
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
                    When issues arise in occupied accommodation, rapid response protects residents and minimises reputational risk. Our Manchester teams mobilise within hours for emergency works with resident welfare prioritised.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Emergency Disinfection & Sampling</h3>
                          <p className="text-sm text-muted-foreground font-light">Immediate thermal shock or chemical treatment with resident communication protocols</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Shower & TMV Replacement</h3>
                          <p className="text-sm text-muted-foreground font-light">En-suite upgrades with thermostatic mixing valves for scald protection and Legionella control</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Multi-Block System Overhauls</h3>
                          <p className="text-sm text-muted-foreground font-light">Portfolio-wide pipework upgrades during vacation periods</p>
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
                    PBSA operators face regular inspections from universities, local authorities, and student welfare organisations. Our digital compliance platform provides instant access to complete water safety records across your entire Manchester portfolio.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Portfolio Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Multi-building visibility across all Manchester sites</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Resident Safety Records</h3>
                      <p className="text-sm text-muted-foreground font-light">Room-level testing history for safeguarding audits</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">University Compliance Reports</h3>
                      <p className="text-sm text-muted-foreground font-light">ANUK-compliant documentation for partnership audits</p>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Local Response Network */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Greater Manchester Coverage Network
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    From city centre PBSA clusters to Trafford Park industrial facilities, our engineers provide rapid response across all of Greater Manchester with specialist knowledge of the region's diverse property types.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Service Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Manchester City Centre</h4>
                        <p className="text-sm text-muted-foreground font-light">Deansgate, Oxford Road, Piccadilly, Northern Quarter PBSA</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Salford & MediaCityUK</h4>
                        <p className="text-sm text-muted-foreground font-light">Salford Quays, MediaCityUK offices, university accommodation</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Trafford & South Manchester</h4>
                        <p className="text-sm text-muted-foreground font-light">Trafford Park, Trafford Centre, Airport City commercial estates</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Greater Manchester</h4>
                        <p className="text-sm text-muted-foreground font-light">Stockport, Bolton, Rochdale, Oldham, Wigan</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Manchester</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/fire/manchester" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing for PBSA and commercial</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link href="/electrical/manchester" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">EICR testing and remedials</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link href="/emergency-lighting/manchester" className="group">
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
                <h2 className="text-3xl font-light mb-4">Protect Students & Residents Across Manchester</h2>
                <p className="text-lg mb-6 font-light text-gray-300">
                  Request a PBSA-specific Legionella risk assessment with student welfare-focused compliance
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

export default WaterManchester;