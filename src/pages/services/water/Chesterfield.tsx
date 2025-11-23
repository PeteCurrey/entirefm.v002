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

const WaterChesterfield = () => {
  const faqs = [
    {
      question: "Why is water safety critical for distribution centres?",
      answer: "Distribution centres with staff welfare areas, vehicle washing facilities, and sprinkler systems face elevated Legionella risks. M1 corridor operations demand proactive compliance to avoid operational disruption and supply chain penalties."
    },
    {
      question: "What ACOP L8 requirements apply to logistics facilities?",
      answer: "Logistics facilities must conduct comprehensive risk assessments covering welfare facilities, vehicle wash systems, and emergency sprinkler systems. Written control schemes must address shift patterns, low-use periods, and temperature control across large sites."
    },
    {
      question: "How do you minimize disruption during testing?",
      answer: "Our Chesterfield teams schedule monitoring around operational shifts and peak delivery periods. Testing is coordinated with site management to maintain throughput while ensuring comprehensive water safety compliance."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "Chesterfield" }
  ];

  return (
    <>
      <Helmet>
        <title>Legionella Testing & Water Hygiene Chesterfield | Logistics & Distribution Compliance | Entire FM</title>
        <meta name="description" content="Distribution centre Legionella compliance for Chesterfield. ACOP L8 risk assessments, operational monitoring, and rapid remedials for M1 corridor logistics facilities." />
        <meta name="keywords" content="Legionella testing Chesterfield, logistics water hygiene, distribution centre Legionella, ACOP L8 Chesterfield, M1 corridor water safety" />
        <link rel="canonical" href="https://entirefm.com/water/chesterfield" />
      </Helmet>

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - Chesterfield"
        description="ACOP L8 compliant Legionella testing for Chesterfield's logistics, distribution, and industrial facilities"
        provider="Entire FM"
        areaServed="Chesterfield"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services Chesterfield"
        address={{
          street: "Chesterfield Service Centre",
          city: "Chesterfield",
          postalCode: "S40 1AA",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')`,
          }}
          aria-label="Logistics distribution centre water system monitoring in Chesterfield M1 corridor facility"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – Chesterfield
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Logistics operations & staff welfare areas require hygiene compliance essential to operational continuity.
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
                  Download Logistics Compliance Guide
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-16">
              {/* Why Chesterfield Requires Absolute Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Chesterfield Requires Absolute Compliance
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Chesterfield's strategic M1 corridor position attracts major distribution operations where water system failures can halt supply chains serving millions. Staff welfare facilities, vehicle wash systems, and emergency sprinklers demand rigorous Legionella control.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Non-compliance risks:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                    <li>HSE prosecution for the Responsible Person</li>
                    <li>Operational shutdown and supply chain disruption</li>
                    <li>Customer contract penalties for service failures</li>
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
                    M1 corridor logistics demands compliance programmes that protect staff welfare without disrupting throughput. Our expertise spans major distribution hubs, industrial estates, and retail operations across Chesterfield and North Derbyshire.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Logistics & Distribution Compliance</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Large-scale warehouse water system mapping including welfare, sprinkler, and vehicle wash facilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">HSG274 compliant risk assessments for multi-building distribution sites</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Shift-pattern monitoring protocols for 24/7 operations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written control schemes aligned with operational requirements</span>
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
                    Distribution operations run around the clock with minimal downtime windows. Our Chesterfield teams deliver comprehensive monitoring coordinated around peak delivery periods and operational shifts to maintain throughput.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Operational Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Shift-coordinated testing schedules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Welfare facility outlet monitoring</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Vehicle wash system compliance</span>
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
                          <span className="text-muted-foreground font-light">Sprinkler system water quality checks</span>
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
                    Distribution downtime creates supply chain cascade effects. Our rapid response teams deploy emergency remedials with operations-first scheduling, protecting throughput while ensuring staff safety and compliance.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Emergency System Disinfection</h3>
                          <p className="text-sm text-muted-foreground font-light">Rapid thermal or chemical treatment with operational coordination and validation testing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Welfare Facility Upgrades</h3>
                          <p className="text-sm text-muted-foreground font-light">Shower, TMV, and outlet replacement in staff welfare areas</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Multi-Site System Overhauls</h3>
                          <p className="text-sm text-muted-foreground font-light">Coordinated upgrades across logistics portfolios with phased implementation</p>
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
                    Customer audits, HSE inspections, and insurance renewals demand instant compliance evidence. Our digital platform provides complete traceability across Chesterfield sites with automated alerts and real-time monitoring.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Multi-Site Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Consolidated view of all logistics locations</p>
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
                      <h3 className="font-medium mb-2">Customer Audit Reports</h3>
                      <p className="text-sm text-muted-foreground font-light">One-click documentation for compliance audits</p>
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
                    <li>Distribution centres and logistics hubs</li>
                    <li>Industrial manufacturing facilities</li>
                    <li>Retail parks and shopping centres</li>
                    <li>Office estates and business parks</li>
                    <li>Hospitality and leisure venues</li>
                  </ul>
                </div>
              </section>

              {/* Local Coverage */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Chesterfield & North Derbyshire Coverage
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    From M1 corridor distribution hubs to town-centre commercial properties, our engineers provide rapid response for emergency sampling, outbreak management, and remedial works across Chesterfield and North Derbyshire.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Service Coverage Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Chesterfield Town</h4>
                        <p className="text-sm text-muted-foreground font-light">Town Centre, Whittington Moor, Tapton, Staveley</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">M1 Corridor</h4>
                        <p className="text-sm text-muted-foreground font-light">Clay Cross, Tibshelf, Markham Vale logistics parks</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">North Derbyshire</h4>
                        <p className="text-sm text-muted-foreground font-light">Bolsover, Dronfield, Eckington industrial estates</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Peak District Gateway</h4>
                        <p className="text-sm text-muted-foreground font-light">Bakewell, Matlock, Buxton commercial properties</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in Chesterfield</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/fire/chesterfield" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing for logistics and distribution facilities</p>
                    </Card>
                  </Link>
                  <Link to="/electrical/chesterfield" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical EICR</h3>
                      <p className="text-sm text-muted-foreground font-light">Fixed wire testing for warehouse operations</p>
                    </Card>
                  </Link>
                  <Link to="/services/ppm" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">PPM Maintenance</h3>
                      <p className="text-sm text-muted-foreground font-light">Planned preventative maintenance for logistics sites</p>
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
                    <Link to="/contact">
                      Request Legionella Risk Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <div className="text-muted-foreground">
                    <p className="font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      📩 chesterfield@entirefm.com
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

export default WaterChesterfield;
