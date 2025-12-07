import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const Nottingham = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Facilities Management Nottingham",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": {
      "@type": "City",
      "name": "Nottingham"
    },
    "description": "Hard FM, compliance, and engineered asset management for estates across Nottingham"
  };

  const faqs = [
    {
      question: "What areas of Nottingham do you cover?",
      answer: "We cover all of Nottingham city centre, West Bridgford, Beeston, Clifton, Arnold, Carlton, and the wider Nottinghamshire region including surrounding towns and business parks."
    },
    {
      question: "What types of buildings do you maintain in Nottingham?",
      answer: "We work across commercial offices, retail centres, industrial facilities, healthcare buildings, educational institutions, and multi-site portfolios throughout Nottingham and Nottinghamshire."
    },
    {
      question: "How quickly can you respond to emergencies in Nottingham?",
      answer: "Our Nottingham-based engineering teams provide rapid emergency response across the city, typically within 2-4 hours for critical compliance issues."
    },
    {
      question: "Do you provide compliance certificates for Nottingham properties?",
      answer: "Yes, we provide all statutory compliance documentation including EICRs, gas safety certificates, fire alarm certificates, and emergency lighting test records for properties across Nottingham."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Facilities Management Nottingham | Hard FM & Compliance Services</title>
        <meta name="description" content="Expert facilities management in Nottingham. Hard FM, compliance, and engineered asset management for estates across Nottinghamshire." />
        <link rel="canonical" href="https://entirefm.com/locations/nottingham" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        name="EntireFM Nottingham"
        address={{
          street: "Nottingham",
          city: "Nottingham",
          postalCode: "NG1",
          country: "United Kingdom"
        }}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              {/* Hero Section */}
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Facilities Management in Nottingham
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Hard FM, compliance, and engineered asset management for estates across Nottingham.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </section>

              {/* What We Deliver */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Deliver in Nottingham
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    EntireFM provides comprehensive hard facilities management across Nottingham and Nottinghamshire. Our engineering-first approach ensures technical building systems remain compliant, operational, and efficient.
                  </p>
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Planned preventative maintenance programmes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Statutory compliance testing and certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Reactive maintenance and emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Asset condition surveys and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-site estate management</span>
                    </li>
                  </ul>
                </Card>
              </section>

              {/* Local Coverage */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Nottingham Coverage
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Our Nottingham operations cover the entire city and surrounding region, with local engineering teams providing responsive service across Nottinghamshire.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-3">Core Areas</h3>
                      <ul className="space-y-2 text-muted-foreground font-light text-sm">
                        <li>Nottingham City Centre</li>
                        <li>West Bridgford</li>
                        <li>Beeston</li>
                        <li>Clifton</li>
                        <li>Arnold</li>
                        <li>Carlton</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Wider Region</h3>
                      <ul className="space-y-2 text-muted-foreground font-light text-sm">
                        <li>Mansfield</li>
                        <li>Newark</li>
                        <li>Worksop</li>
                        <li>Hucknall</li>
                        <li>Business Parks</li>
                        <li>Industrial Estates</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Popular Services */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Popular Services in Nottingham
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/electrical/nottingham" className="hover:text-primary transition-colors">
                        Electrical Services
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      EICRs, fixed wire testing, emergency lighting, and electrical compliance for Nottingham properties.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/fire/nottingham" className="hover:text-primary transition-colors">
                        Fire Safety Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Fire alarm testing, emergency lighting, and fire safety compliance across Nottingham estates.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/hvac/nottingham" className="hover:text-primary transition-colors">
                        HVAC Services
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Air conditioning, ventilation, and heating system maintenance for commercial buildings.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/gas/nottingham" className="hover:text-primary transition-colors">
                        Gas Safety
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Commercial gas safety inspections, boiler servicing, and gas compliance certification.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/water/nottingham" className="hover:text-primary transition-colors">
                        Water Hygiene
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Legionella risk assessments, water sampling, and temperature monitoring services.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/ppm/nottingham" className="hover:text-primary transition-colors">
                        PPM Programmes
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Planned preventative maintenance schedules for all building systems and assets.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Compliance-First Approach */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance-First Approach
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Statutory compliance underpins everything we deliver in Nottingham. Our engineers are trained to current standards, and all work is documented to regulatory requirements.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Regulatory Knowledge</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Our teams maintain up-to-date knowledge of BSI codes, HSE guidance, and sector-specific regulations affecting Nottingham properties.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Documentation Standards</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        All testing and maintenance generates compliant certificates, risk assessments, and audit trails for your records.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Proactive Management</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        We monitor compliance deadlines and schedule works in advance, preventing last-minute risks and ensuring continuity.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Your Nottingham FM Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Contact our team to discuss how we can support your facilities management needs across Nottingham and Nottinghamshire.
                  </p>
                  <Link to="/request-proposal">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Request Proposal
                    </Button>
                  </Link>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <SidebarCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nottingham;
