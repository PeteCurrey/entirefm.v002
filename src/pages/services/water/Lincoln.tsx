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

const WaterLincoln = () => {
  const faqs = [
    {
      question: "Why do heritage buildings require specialist Legionella control?",
      answer: "Listed buildings and heritage sites often have ageing water systems, complex pipework, and conservation restrictions. Modern monitoring must protect occupants while respecting heritage constraints and planning requirements."
    },
    {
      question: "What compliance is required for healthcare premises in Lincoln?",
      answer: "Healthcare facilities must comply with HTM 04-01 alongside ACOP L8, requiring augmented water safety groups, enhanced monitoring frequencies, and stricter temperature control to protect vulnerable patients."
    },
    {
      question: "How do you manage water safety in public buildings?",
      answer: "Public buildings face continuous occupancy and regulatory scrutiny. Our monitoring programmes ensure consistent safety regardless of usage patterns while maintaining audit-ready documentation for inspections."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Lincoln" }
  ];

  return (
    <>
      <Helmet>
        <title>Legionella Testing & Water Hygiene Lincoln | Healthcare & Heritage Compliance | Entire FM</title>
        <meta name="description" content="Healthcare and heritage Legionella compliance for Lincoln. ACOP L8 and HTM 04-01 risk assessments, specialist monitoring, and rapid remedials for sensitive buildings." />
        <meta name="keywords" content="Legionella testing Lincoln, healthcare water hygiene, heritage building water safety, ACOP L8 Lincoln, HTM 04-01 compliance" />
        <link rel="canonical" href="https://entirefm.com/water/lincoln" />
      </Helmet>

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Lincoln"
        description="ACOP L8 and HTM 04-01 compliant Legionella testing for Lincoln's healthcare, heritage, and public buildings"
        provider="Entire FM"
        areaServed="Lincoln"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Lincoln"
        address={{
          street: "Lincoln Service Centre",
          city: "Lincoln",
          postalCode: "LN1 1AA",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1519494140681-8f17d830e0fa?q=80&w=2074')`,
          }}
          aria-label="Water hygiene compliance testing in Lincoln heritage healthcare and public buildings"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Lincoln
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Heritage estates & healthcare sites demand highest enforcement sensitivity with specialist compliance expertise.
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
                  Download Heritage Compliance Guide
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-16">
              {/* Why Lincoln Requires Absolute Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Lincoln Requires Absolute Compliance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Lincoln's concentration of heritage buildings, healthcare facilities, and public institutions creates unique water safety challenges. Listed buildings with ageing infrastructure and sensitive patient populations demand specialist expertise balancing conservation with modern safety standards.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Non-compliance consequences:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>HSE prosecution for the Responsible Person</li>
                    <li>CQC enforcement action for healthcare providers</li>
                    <li>Reputational damage affecting public trust</li>
                    <li>Insurance invalidation for water-related incidents</li>
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
                    Lincoln's healthcare and heritage sectors require compliance programmes that respect building constraints while protecting vulnerable populations. Our expertise spans NHS trusts, care homes, university buildings, and listed commercial premises.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Healthcare & Heritage Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">HTM 04-01 compliant healthcare risk assessments with augmented water safety groups</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Heritage building assessments respecting conservation constraints</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Public building protocols for civic facilities and educational institutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written schemes aligned with CQC and heritage compliance requirements</span>
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
                    Healthcare and public buildings demand monitoring that respects patient care and public service delivery. Our programmes provide year-round protection with minimal disruption to sensitive operations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Healthcare-Grade Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Enhanced monitoring for patient-facing areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">TMV performance verification on clinical outlets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Infection control protocols</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Heritage & Public Buildings</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Sensitive monitoring respecting building fabric</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Historic tank inspection with conservation oversight</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Public service delivery coordination</span>
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
                    Healthcare and heritage remedials demand exceptional care and specialist expertise. Our Lincoln teams deliver emergency works respecting patient welfare, heritage constraints, and public service continuity.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Clinical-Grade Disinfection</h3>
                          <p className="text-sm text-muted-foreground font-light">Hospital-standard thermal or chemical treatment with infection control oversight</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Heritage-Sensitive Upgrades</h3>
                          <p className="text-sm text-muted-foreground font-light">Modern water safety improvements respecting listed building status and conservation requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">TMV & Patient Safety Upgrades</h3>
                          <p className="text-sm text-muted-foreground font-light">Thermostatic mixing valve installation for vulnerable patient protection</p>
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
                    CQC inspections, heritage audits, and public accountability demand instant access to water safety records. Our digital platform provides complete transparency with automated compliance tracking and regulator-ready documentation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Healthcare Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Real-time compliance visibility for clinical managers</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Automated Alerts</h3>
                      <p className="text-sm text-muted-foreground font-light">Proactive notifications for patient safety</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">CQC-Ready Reports</h3>
                      <p className="text-sm text-muted-foreground font-light">One-click documentation for inspections</p>
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
                    <li>Healthcare facilities and care homes</li>
                    <li>Heritage buildings and listed premises</li>
                    <li>Public buildings and civic facilities</li>
                    <li>Universities and educational institutions</li>
                    <li>Corporate offices and hospitality venues</li>
                  </ul>
                </div>
              </section>

              {/* Local Coverage */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Lincoln & Lincolnshire Coverage
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    From Lincoln Cathedral Quarter to North Hykeham business parks, our engineers provide rapid response for emergency sampling, outbreak management, and remedial works across Lincoln and Lincolnshire with specialist healthcare and heritage expertise.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Service Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Lincoln City</h4>
                        <p className="text-sm text-muted-foreground font-light">City Centre, Ermine, Bracebridge Heath, Waddington</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Greater Lincoln</h4>
                        <p className="text-sm text-muted-foreground font-light">North Hykeham, Branston, Skellingthorpe, Washingborough</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Healthcare Network</h4>
                        <p className="text-sm text-muted-foreground font-light">Specialist response for NHS trusts and care home groups</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Wider Lincolnshire</h4>
                        <p className="text-sm text-muted-foreground font-light">Sleaford, Market Rasen, Gainsborough</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Lincoln</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/fire/lincoln" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing for healthcare and heritage buildings</p>
                    </Card>
                  </Link>
                  <Link to="/electrical/lincoln" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical EICR</h3>
                      <p className="text-sm text-muted-foreground font-light">Fixed wire testing for sensitive premises</p>
                    </Card>
                  </Link>
                  <Link to="/services/ppm" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">PPM Maintenance</h3>
                      <p className="text-sm text-muted-foreground font-light">Planned preventative maintenance for public buildings</p>
                    </Card>
                  </Link>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* CTA Footer */}
              <section className="bg-muted/50 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">Protect Your Facility. Request Your Risk Assessment.</h2>
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
                      📩 lincoln@entirefm.com
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

export default WaterLincoln;
