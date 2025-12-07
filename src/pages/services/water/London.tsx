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

const WaterLondon = () => {
  const faqs = [
    {
      question: "What is a Legionella monitoring regime?",
      answer: "A structured programme of water temperature checks, tank inspections, and sampling designed to prevent Legionella bacteria growth in your building's water systems. Required under ACOP L8 and HSG274 guidelines."
    },
    {
      question: "How often must water systems be inspected in London?",
      answer: "Monthly temperature monitoring, quarterly tank inspections, and annual risk assessments are standard. Healthcare and PBSA properties may require more frequent checks depending on system complexity and usage patterns."
    },
    {
      question: "Who enforces ACOP L8 compliance?",
      answer: "The Health and Safety Executive (HSE) enforces L8 compliance. Non-compliance can result in prosecution, unlimited fines, and imprisonment for responsible persons. Insurance claims may also be invalidated without proper documentation."
    },
    {
      question: "What happens if Legionella is detected?",
      answer: "Immediate remedial action is required including system shutdown if necessary, disinfection, and retesting. We provide rapid response remedials with minimal operational disruption and full documentation for HSE and insurance purposes."
    }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Hygiene", href: "/services/water-hygiene" },
    { label: "London" }
  ];

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Testing in London | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Comprehensive Legionella compliance and water hygiene services across London. ACOP L8 risk assessments, monitoring programmes, and rapid remedials for corporate, retail & healthcare estates." />
        <meta name="keywords" content="Legionella testing London, water hygiene compliance, ACOP L8, HSG274, Legionella risk assessment, water tank inspection London, TMV testing" />
        <link rel="canonical" href="https://entirefm.com/services/water-hygiene" />
      </Helmet>

      <ServiceSchema 
        name="Legionella Compliance & Water Hygiene Services - London"
        description="ACOP L8 compliant Legionella testing, water hygiene monitoring, and remedial services across London"
        provider="Entire FM"
        areaServed="London"
      />

      <LocalBusinessSchema 
        name="Entire FM - Water Hygiene Services London"
        address={{
          street: "London Service Centre",
          city: "London",
          postalCode: "EC1A 1BB",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070')`,
          }}
          aria-label="Modern water system monitoring equipment and tank inspection in London commercial building"
        >
          <div className="container mx-auto px-4 text-center text-white relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Legionella Compliance & Water Hygiene – London
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              ACOP L8 risk assessments, monitoring programmes, and remedials across corporate, retail & healthcare estates.
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
                    Healthcare and PBSA density across London demands stricter compliance standards. Our comprehensive Legionella control programme ensures legal protection and operational confidence across Central London, Docklands, Heathrow, Wembley, and Stratford.
                  </p>
                  <Card className="p-6 mb-6">
                    <h3 className="text-xl font-light mb-4">Risk Assessment & System Mapping</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Complete building water system surveys including dead legs, storage tanks, and TMV identification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">HSG274 Part 2 compliant hot and cold water system assessments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Written schemes of control with clear responsible person duties</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground font-light">Cooling tower and evaporative condenser assessments (HSG274 Part 1)</span>
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
                    Consistent monitoring is your defence against HSE enforcement. We deliver scheduled testing with complete audit trails and immediate alert protocols for any deviations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Monthly Temperature Monitoring</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Sentinel tap and calorifier checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">TMV performance verification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Digital logging with timestamp validation</span>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-lg font-light mb-4">Quarterly Tank Inspections</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Cold water storage tank condition surveys</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Visual debris, biofilm and integrity checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-light">Photographic evidence for compliance records</span>
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
                    When risks are identified, speed matters. Our in-house teams deliver immediate remedial works with minimal disruption and full traceability—eliminating the need for multiple contractors.
                  </p>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">01</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">System Disinfection & Chlorination</h3>
                          <p className="text-sm text-muted-foreground font-light">Thermal or chemical disinfection following positive samples with validation testing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">02</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Dead Leg Removal & Pipework Upgrades</h3>
                          <p className="text-sm text-muted-foreground font-light">Eliminate stagnation points and upgrade obsolete water distribution systems</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">03</span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Tank Replacement & Insulation</h3>
                          <p className="text-sm text-muted-foreground font-light">Modern, compliant tanks with proper lids, insulation, and temperature control</p>
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
                    HSE inspections and insurance renewals demand instant access to compliance records. Our digital platform eliminates paperwork delays and demonstrates continuous duty of care.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Live Compliance Dashboard</h3>
                      <p className="text-sm text-muted-foreground font-light">Real-time status of all water systems across your portfolio</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Automated Alerts</h3>
                      <p className="text-sm text-muted-foreground font-light">Instant notifications for temperature deviations or missed checks</p>
                    </Card>
                    <Card className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-medium mb-2">Instant Report Generation</h3>
                      <p className="text-sm text-muted-foreground font-light">One-click compliance certificates for HSE, insurers, or auditors</p>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Local Response Network */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Local Response Network Across London
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    London's scale demands local presence. Our engineers cover all boroughs with rapid response times for emergency sampling, remedials, and outbreak investigations.
                  </p>
                  <Card className="p-6 bg-accent">
                    <h3 className="text-xl font-light mb-4">Coverage Zones</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Central & West London</h4>
                        <p className="text-sm text-muted-foreground font-light">City of London, Westminster, Kensington & Chelsea, Hammersmith & Fulham</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">East London & Docklands</h4>
                        <p className="text-sm text-muted-foreground font-light">Canary Wharf, Tower Hamlets, Newham, Stratford</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">North London</h4>
                        <p className="text-sm text-muted-foreground font-light">Camden, Islington, Haringey, Enfield, Barnet</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-sm">South London</h4>
                        <p className="text-sm text-muted-foreground font-light">Southwark, Lambeth, Croydon, Bromley</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Related Services */}
              <section className="border-t pt-12">
                <h2 className="text-2xl font-light mb-6">Related Compliance Services in London</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link to="/fire/london" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Fire Alarm Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">BS 5839 testing and certification</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link to="/electrical/london" className="group">
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">Electrical Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light">EICR testing and remedials</p>
                      <ArrowRight className="w-5 h-5 text-primary mt-4 group-hover:translate-x-2 transition-transform" />
                    </Card>
                  </Link>
                  <Link to="/emergency-lighting/london" className="group">
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
                <h2 className="text-3xl font-light mb-4">Ensure Legal Protection & Operational Confidence</h2>
                <p className="text-lg mb-6 font-light text-gray-300">
                  Request a comprehensive Legionella risk assessment with fixed-price monitoring and remedial proposal
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
                      24/7 Emergency Hotline
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

export default WaterLondon;