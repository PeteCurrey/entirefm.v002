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

const WaterNottingham = () => {
  const faqs = [
    {
      question: "Why is stagnation risk elevated in student accommodation?",
      answer: "Prolonged vacation periods, low-use rooms, and high-density plumbing systems create ideal conditions for water stagnation and Legionella growth. Nottingham's large student population requires year-round flushing protocols and enhanced monitoring."
    },
    {
      question: "What ACOP L8 requirements apply to PBSA operators?",
      answer: "PBSA operators must conduct risk assessments, implement written control schemes, maintain monthly temperature monitoring, quarterly tank inspections, and enhanced flushing during vacation periods. ANUK Code compliance is also recommended for university partnerships."
    },
    {
      question: "How do you manage water safety during summer vacancies?",
      answer: "Our vacation protocols include enhanced flushing regimes, dead leg surveys, outlet sampling, and pre-occupancy validation testing before students return. All works are scheduled to avoid disruption to remaining residents."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Nottingham" }
  ];

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Testing in Nottingham | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Student accommodation Legionella compliance for Nottingham. ACOP L8 risk assessments, vacation period flushing, and rapid remedials for PBSA, universities, and commercial properties." />
        <meta name="keywords" content="Legionella testing Nottingham, PBSA water hygiene, student accommodation water safety, ACOP L8 Nottingham, university Legionella compliance" />
        <link rel="canonical" href="https://entirefm.com/services/water-hygiene" />
      </Helmet>

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Nottingham"
        description="ACOP L8 compliant Legionella testing for Nottingham's student accommodation, universities, and commercial properties"
        provider="Entire FM"
        areaServed="Nottingham"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Nottingham"
        address={{
          street: "Nottingham Service Centre",
          city: "Nottingham",
          postalCode: "NG1 1AA",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1562516155-e0c1ee44059b?q=80&w=2071')`,
          }}
          aria-label="Water hygiene monitoring and temperature testing in Nottingham student accommodation and university buildings"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Nottingham
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Large student accommodation estates with frequent stagnation risk demand zero tolerance for non-compliance.
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
              {/* Why Nottingham Requires Absolute Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Nottingham Requires Absolute Compliance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Nottingham's concentration of student accommodation creates unique water safety challenges. With over 60,000 students and extensive PBSA development, seasonal vacancies cause prolonged stagnation periods requiring rigorous management.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Non-compliance risks:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>HSE prosecution for the Responsible Person</li>
                    <li>Resident safety incidents and reputational damage</li>
                    <li>University partnership termination</li>
                    <li>Insurance invalidation for water-related claims</li>
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
                    Nottingham's student accommodation operators face unique compliance challenges from seasonal occupancy patterns and high-density living. Our programmes protect residents across university partnerships and independent PBSA portfolios with sector-specific expertise.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">PBSA & University Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">High-density accommodation risk assessments with room-by-room outlet mapping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Vacation period stagnation management and enhanced flushing protocols</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Communal facility protocols for shared kitchens, bathrooms, and amenity spaces</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written schemes aligned with ANUK Code and Universities UK guidance</span>
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
                    Student welfare demands monitoring protocols that respect privacy while maintaining rigorous safety standards. Our programmes run seamlessly around academic calendars with resident-friendly access procedures.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Term-Time Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Scheduled access respecting student privacy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Sentinel outlet testing with minimal disruption</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">DBS-checked engineers for resident safety</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Vacation Management</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Enhanced flushing during summer breaks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Dead leg identification and elimination</span>
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
                  Zero-Delay Remedials & Asset Upgrades
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    When water safety issues arise in occupied accommodation, rapid response protects residents and minimises reputational risk. Our Nottingham teams mobilise within hours for emergency works with resident welfare prioritised throughout.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Emergency Disinfection & Sampling</h3>
                          <p className="text-sm text-muted-foreground font-light">Immediate thermal shock or chemical treatment with resident communication protocols and temporary accommodation where required</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">En-Suite & TMV Upgrades</h3>
                          <p className="text-sm text-muted-foreground font-light">Shower and thermostatic mixing valve replacement for scald protection and Legionella control</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Portfolio System Overhauls</h3>
                          <p className="text-sm text-muted-foreground font-light">Multi-building pipework upgrades during vacation periods with phased implementation</p>
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
                    University partnerships and local authority inspections demand instant access to water safety records. Our digital platform provides complete transparency across your entire Nottingham PBSA portfolio with automated compliance tracking.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Portfolio Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Multi-building visibility across all Nottingham sites</p>
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

              {/* Sectors We Protect */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Sectors We Protect
                </h2>
                <div className="prose prose-lg max-w-none">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Student accommodation (PBSA) and university halls</li>
                    <li>Universities and educational institutions</li>
                    <li>Retail and leisure facilities</li>
                    <li>Corporate offices and business parks</li>
                    <li>Hospitality and entertainment venues</li>
                  </ul>
                </div>
              </section>

              {/* Local Coverage */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Nottingham Coverage Network
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    From city-centre PBSA clusters to university campuses, our engineers provide rapid response for emergency sampling, outbreak management, and remedial works across all of Nottingham with specialist knowledge of student accommodation requirements.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Service Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Nottingham City Centre</h4>
                        <p className="text-sm text-muted-foreground font-light">City, Beeston, Lenton, University Park PBSA</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">West Nottingham</h4>
                        <p className="text-sm text-muted-foreground font-light">West Bridgford, Clifton, Beeston campus areas</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">East Nottingham</h4>
                        <p className="text-sm text-muted-foreground font-light">Colwick, Carlton, Mapperley commercial estates</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Greater Nottinghamshire</h4>
                        <p className="text-sm text-muted-foreground font-light">Mansfield, Newark, Sutton-in-Ashfield</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Nottingham</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/fire/nottingham" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing and certification for PBSA and commercial properties</p>
                    </Card>
                  </Link>
                  <Link to="/electrical/nottingham" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical EICR</h3>
                      <p className="text-sm text-muted-foreground font-light">Fixed wire testing for student accommodation and universities</p>
                    </Card>
                  </Link>
                  <Link to="/services/ppm" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">PPM Maintenance</h3>
                      <p className="text-sm text-muted-foreground font-light">Planned preventative maintenance across PBSA portfolios</p>
                    </Card>
                  </Link>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* CTA Footer */}
              <section className="bg-muted/50 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">Protect Your Residents. Request Your Risk Assessment.</h2>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button asChild size="lg" className="text-lg">
                    <Link to="/contact">
                      Request Legionella Risk Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <div className="text-muted-foreground">
                    <p className="font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      📩 nottingham@entirefm.com
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

      <Footer />
    </>
  );
};

export default WaterNottingham;
