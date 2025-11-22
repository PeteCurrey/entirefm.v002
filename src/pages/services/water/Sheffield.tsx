import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, LocalBusinessSchema, FAQSchema } from "@/components/shared/SchemaMarkup";

const WaterSheffield = () => {
  const faqs = [
    {
      question: "Why is Legionella risk higher in industrial water systems?",
      answer: "Industrial facilities often have complex water circuits including process cooling, air handling units, and high-capacity storage tanks. Heavy industrial power demand creates temperature variations that can promote Legionella growth if not properly controlled."
    },
    {
      question: "What compliance is required for manufacturing facilities?",
      answer: "Manufacturing sites require full ACOP L8 compliance including risk assessments, cooling tower monitoring (HSG274 Part 1), process water controls, and written schemes aligned with operational requirements. Many industries also face sector-specific regulations."
    },
    {
      question: "How can water testing minimise production downtime?",
      answer: "Our out-of-hours monitoring and rapid sampling protocols ensure testing occurs during planned maintenance windows or shift changes, protecting continuous production schedules while maintaining compliance."
    },
    {
      question: "What remedial works can be done in operational facilities?",
      answer: "We specialise in live-site remedials including phased disinfection, cooling tower cleaning during shutdown windows, and pipework upgrades coordinated with production schedules to minimise operational impact."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Sheffield" }
  ];

  return (
    <>
      <Helmet>
        <title>Industrial Legionella Testing Sheffield | Manufacturing Water Safety | Entire FM</title>
        <meta name="description" content="Specialist Legionella compliance for Sheffield's industrial and manufacturing sector. ACOP L8 risk assessments, cooling tower monitoring, and rapid remedials with minimal downtime." />
        <meta name="keywords" content="Legionella testing Sheffield, industrial water hygiene, manufacturing compliance, cooling tower testing, ACOP L8, HSG274" />
        <link rel="canonical" href="https://entirefm.com/water/sheffield" />
      </Helmet>

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Sheffield"
        description="ACOP L8 compliant Legionella testing for Sheffield industrial, manufacturing, and commercial properties"
        provider="Entire FM"
        areaServed="Sheffield"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Sheffield"
        address={{
          street: "Sheffield Service Centre",
          city: "Sheffield",
          postalCode: "S1 1AA",
          country: "GB"
        }}
      />

      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      <main>
        {/* Hero Section */}
        <section 
          className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070')`,
          }}
          aria-label="Industrial cooling tower and water system Legionella monitoring in Sheffield manufacturing facility"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Sheffield
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Protect heavy industrial operations with ACOP L8 compliance for complex water systems, older infrastructure, and manufacturing safety requirements.
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
                  Download Industrial Compliance Guide
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
                    Sheffield's industrial heritage means complex water systems serving heavy manufacturing, process cooling, and older infrastructure. Our compliance programmes protect operations while meeting stringent safety standards for heavy industrial power demand and manufacturing environments.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Industrial & Manufacturing Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Complex process water and cooling system risk assessments (HSG274 Parts 1, 2 & 3)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Cooling tower and evaporative condenser monitoring programmes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Legacy infrastructure assessment with upgrade recommendations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written control schemes aligned with continuous production requirements</span>
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
                    Industrial operations demand monitoring protocols that protect production schedules while ensuring worker safety. Our programmes coordinate with shift patterns and maintenance windows to eliminate operational disruption.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Operational Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Out-of-hours testing during planned maintenance windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Process water and cooling circuit temperature checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Biocide dosing system performance verification</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Cooling Tower & Tank Inspections</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Monthly drift eliminator and fill pack inspections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Large-capacity industrial tank cleaning and disinfection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Confined space protocols for safe access</span>
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
                    Industrial water system failures can halt production and risk worker safety. Our Sheffield teams deliver rapid mobilisation for emergency remedials with specialist expertise in live-site works and process integration.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Emergency Cooling System Disinfection</h3>
                          <p className="text-sm text-muted-foreground font-light">Rapid thermal or chemical treatment during production shutdowns with accelerated validation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Cooling Tower Refurbishment</h3>
                          <p className="text-sm text-muted-foreground font-light">Fill pack replacement, drift eliminator upgrades, and basin cleaning during planned outages</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Legacy System Modernisation</h3>
                          <p className="text-sm text-muted-foreground font-light">Phased upgrades of older infrastructure with production continuity planning</p>
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
                    Manufacturing and industrial facilities face regular HSE inspections and client audits. Our digital platform provides instant compliance evidence with complete traceability for multi-site operations.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Multi-Site Industrial Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Consolidated compliance view across manufacturing estates</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Automated Safety Alerts</h3>
                      <p className="text-sm text-muted-foreground font-light">Proactive notifications prevent production-critical failures</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">HSE Audit Documentation</h3>
                      <p className="text-sm text-muted-foreground font-light">Instant compliance certificates for inspections</p>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Local Response Network */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  South Yorkshire Industrial Coverage
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Our Sheffield-based engineers provide specialist industrial water hygiene services across the region's manufacturing and commercial estates with rapid emergency response capabilities.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Service Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Sheffield Industrial Estates</h4>
                        <p className="text-sm text-muted-foreground font-light">Advanced Manufacturing Park, Lower Don Valley, Parkway industrial zones</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Rotherham & Doncaster</h4>
                        <p className="text-sm text-muted-foreground font-light">Manufacturing facilities, logistics hubs, commercial estates</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Barnsley & Chesterfield</h4>
                        <p className="text-sm text-muted-foreground font-light">Industrial complexes and event venues</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Peak District Border</h4>
                        <p className="text-sm text-muted-foreground font-light">Heritage buildings and remote industrial sites</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Sheffield</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/fire/sheffield" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing for industrial facilities</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link to="/electrical/sheffield" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">EICR testing and remedials</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link to="/emergency-lighting/sheffield" className="group">
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
                <h2 className="text-3xl font-light mb-4">Protect Your Industrial Operations</h2>
                <p className="text-lg mb-6 font-light text-gray-300">
                  Request a specialist industrial Legionella risk assessment with production-aligned monitoring
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

      <Footer />
    </>
  );
};

export default WaterSheffield;