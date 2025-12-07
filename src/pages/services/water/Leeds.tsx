import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, LocalBusinessSchema, FAQSchema } from "@/components/shared/SchemaMarkup";

const WaterLeeds = () => {
  const faqs = [
    {
      question: "Why is year-round monitoring essential for public buildings?",
      answer: "Public buildings including healthcare, PBSA, and civic facilities face continuous occupancy and regulatory scrutiny. Year-round monitoring ensures consistent water safety regardless of seasonal usage patterns and demonstrates ongoing duty of care to stakeholders."
    },
    {
      question: "What compliance is required for healthcare facilities?",
      answer: "Healthcare facilities must comply with HTM 04-01 alongside ACOP L8, requiring augmented water safety groups, enhanced monitoring frequencies, and stricter temperature control standards to protect immunocompromised patients."
    },
    {
      question: "How often must tanks be inspected under ACOP L8?",
      answer: "Cold water storage tanks require inspection at least every 6 months, with more frequent checks recommended for healthcare and high-risk premises. Annual deep cleans and disinfection should be scheduled during low-occupancy periods."
    },
    {
      question: "What are the risks of Legionella in office buildings?",
      answer: "Modern office buildings with complex HVAC systems, cooling towers, and decorative water features face elevated risks. Low-use outlets during hybrid working can cause stagnation, requiring enhanced flushing protocols."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Leeds" }
  ];

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Testing in Leeds | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Specialist Legionella compliance for Leeds healthcare, PBSA, and public buildings. ACOP L8 and HTM 04-01 risk assessments, year-round monitoring, and rapid remedials." />
        <meta name="keywords" content="Legionella testing Leeds, healthcare water hygiene, PBSA compliance Leeds, ACOP L8, HTM 04-01, water safety Leeds" />
        <link rel="canonical" href="https://entirefm.com/services/water-hygiene" />
      </Helmet>

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Leeds"
        description="ACOP L8 and HTM 04-01 compliant Legionella testing for Leeds healthcare, PBSA, and corporate properties"
        provider="Entire FM"
        areaServed="Leeds"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Leeds"
        address={{
          street: "Leeds Service Centre",
          city: "Leeds",
          postalCode: "LS1 1AA",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070')`,
          }}
          aria-label="Water hygiene compliance testing and tank inspection in Leeds healthcare and corporate facility"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Leeds
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Year-round statutory monitoring for healthcare, PBSA & public buildings across Leeds' financial & corporate hubs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">
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
                    Healthcare, PBSA, and public buildings across Leeds require elevated water safety standards. Our compliance programmes serve major office FM portfolios while meeting the stringent requirements of clinical environments and high-density student accommodation.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Healthcare & High-Risk Premises</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">HTM 04-01 compliant risk assessments for healthcare premises with augmented water safety groups</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Enhanced monitoring protocols for immunocompromised patient protection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">PBSA and university accommodation L8 compliance aligned with ANUK standards</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Corporate office portfolio programmes with hybrid working considerations</span>
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
                    Leeds' concentration of public and commercial buildings demands consistent, professional monitoring with comprehensive audit trails. Our programmes provide year-round protection regardless of occupancy patterns or seasonal variations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Healthcare-Grade Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Weekly temperature checks for high-risk clinical areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">TMV performance verification on patient-facing outlets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Augmented monitoring during outbreak investigations</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Commercial & PBSA Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Monthly sentinel tap and calorifier checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Quarterly cold water storage tank inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Vacation period flushing for student accommodation</span>
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
                    Healthcare and public building remedials demand exceptional coordination and minimal service disruption. Our Leeds teams specialise in occupied-building works with infection control protocols and out-of-hours scheduling.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Clinical-Grade Disinfection</h3>
                          <p className="text-sm text-muted-foreground font-light">Hospital-grade thermal or chemical disinfection with infection control oversight</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">TMV Installation & Replacement</h3>
                          <p className="text-sm text-muted-foreground font-light">Thermostatic mixing valve upgrades for patient safety and Legionella control</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">System Modernisation Projects</h3>
                          <p className="text-sm text-muted-foreground font-light">Legacy pipework replacement and temperature control upgrades in occupied buildings</p>
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
                    Healthcare providers, PBSA operators, and corporate facilities managers require instant access to water safety records for CQC inspections, university audits, and insurance renewals. Our platform delivers complete transparency with zero administrative burden.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Portfolio Compliance View</h3>
                      <p className="text-sm text-muted-foreground font-light">Multi-site dashboard for Leeds property portfolios</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Automated Compliance Alerts</h3>
                      <p className="text-sm text-muted-foreground font-light">Proactive notifications for temperature deviations</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Regulator-Ready Reports</h3>
                      <p className="text-sm text-muted-foreground font-light">One-click CQC, HSE, and insurer documentation</p>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Local Response Network */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Leeds & Yorkshire Coverage Network
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Our Leeds-based engineers provide rapid response across the city and wider Yorkshire region, with specialist expertise in healthcare, educational, and corporate environments requiring elevated water safety standards.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Leeds City Centre</h4>
                        <p className="text-sm text-muted-foreground font-light">Financial district, Headingley, Hyde Park PBSA, civic buildings</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">West Yorkshire</h4>
                        <p className="text-sm text-muted-foreground font-light">Bradford, Huddersfield, Wakefield, Halifax</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">North Yorkshire</h4>
                        <p className="text-sm text-muted-foreground font-light">York, Harrogate, Selby, Ripon</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Healthcare Facilities</h4>
                        <p className="text-sm text-muted-foreground font-light">Specialist response for NHS trusts and private healthcare providers</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Leeds</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/fire/leeds" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing for healthcare and commercial</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link to="/electrical/leeds" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">EICR testing and remedials</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link to="/emergency-lighting/leeds" className="group">
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
                <h2 className="text-3xl font-light mb-4">Ensure Patient & Resident Safety</h2>
                <p className="text-lg mb-6 font-light text-gray-300">
                  Request a healthcare-grade Legionella risk assessment with HTM 04-01 and ACOP L8 compliance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contact">
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

export default WaterLeeds;