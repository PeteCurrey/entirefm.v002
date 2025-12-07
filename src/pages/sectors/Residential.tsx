import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const Residential = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Estate Facilities Management",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "High-density residential buildings, apartment blocks and PRS/BTR asset management."
  };

  const faqs = [
    {
      question: "What types of residential properties do you manage?",
      answer: "We work with high-density apartment buildings, Build to Rent (BTR) portfolios, Private Rented Sector (PRS) developments, student accommodation, and residential estates requiring professional FM services."
    },
    {
      question: "How do you handle resident complaints about maintenance?",
      answer: "Our helpdesk provides direct resident contact points with clear SLAs. All works are logged, tracked, and reported through digital platforms accessible to property managers and residents."
    },
    {
      question: "What compliance is required for residential buildings?",
      answer: "Residential properties require fire safety compliance including fire alarm testing, emergency lighting, fire door inspections, gas safety certificates, electrical EICRs, water hygiene management, and lift maintenance certificates."
    },
    {
      question: "Can you manage communal areas and amenity spaces?",
      answer: "Yes. We provide hard FM for communal heating systems, gyms, co-working spaces, and shared facilities. Soft services including cleaning and grounds maintenance can be coordinated as part of integrated service delivery."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Residential Estate Facilities Management | BTR & PRS FM | EntireFM</title>
        <meta name="description" content="Specialist facilities management for residential estates. High-density apartment buildings, BTR portfolios, and PRS developments with resident-focused service delivery." />
        <link rel="canonical" href="https://entirefm.com/sectors/residential" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              {/* Hero Section */}
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Residential & Estate FM
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  High-density residential buildings, apartment blocks and PRS/BTR asset management.
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

              {/* Sector Summary */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Residential FM Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Residential estate management demands a different approach to commercial FM. Building compliance must be maintained while minimizing disruption to residents. Service requests require rapid response, clear communication, and discretion.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    BTR and PRS operators require consistent service delivery across portfolios, with centralized reporting and resident satisfaction metrics. Our approach balances regulatory compliance with the operational realities of occupied residential buildings.
                  </p>
                </Card>
              </section>

              {/* Core Compliance Risks */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Core Compliance Risks
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Fire Safety in Residential Buildings</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Post-Grenfell regulations have intensified fire safety requirements. <Link to="/services/fire-safety" className="text-primary hover:underline">Fire alarm systems</Link>, emergency lighting, fire door integrity, and compartmentation surveys are now mandatory for high-rise residential.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Electrical Safety Regulations</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Landlords must provide current <Link to="/services/electrical" className="text-primary hover:underline">EICRs for rental properties</Link>. Communal area electrical systems, emergency lighting, and safety systems require regular testing and certification.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Gas Safety Compliance</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Annual gas safety inspections are legally required for all rental properties. <Link to="/services/gas-safety" className="text-primary hover:underline">Communal boiler systems</Link> and individual apartment gas appliances must be certified before occupation.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Water Hygiene Management</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Residential buildings with communal water systems require <Link to="/services/water-hygiene" className="text-primary hover:underline">legionella risk assessments</Link> and temperature monitoring. Hot water systems, storage tanks, and cooling towers present infection control risks.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Key Systems */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Key Systems Within Residential Estates
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Building Safety Systems</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Fire alarm and detection systems</li>
                        <li>• Emergency lighting and signage</li>
                        <li>• Smoke ventilation (AOV) systems</li>
                        <li>• Fire door maintenance</li>
                        <li>• Dry riser testing</li>
                        <li>• Sprinkler systems</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Communal Infrastructure</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Communal heating systems</li>
                        <li>• Lift and elevator maintenance</li>
                        <li>• Access control and door entry</li>
                        <li>• Amenity space HVAC</li>
                        <li>• Car park ventilation</li>
                        <li>• BMS and energy management</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Operational Challenges */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Operational Challenges
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Occupied Building Works</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Maintenance must occur while residents are in occupation. Access arrangements, noise restrictions, and resident communication require careful coordination.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Resident Service Expectations</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Residents expect rapid response to maintenance requests, clear communication, and minimal disruption. Poor service delivery generates complaints and impacts tenant retention.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Multi-Site Portfolio Consistency</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        BTR and PRS operators managing multiple sites require standardized service levels, centralized reporting, and consistent compliance across all buildings.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Regulatory Scrutiny</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Residential landlords face increased enforcement action for compliance failures. Local authority inspections and fire safety audits require immediate remediation of identified issues.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Why EntireFM */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why EntireFM for Residential FM
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    We understand that residential FM is fundamentally about people. Our engineers are trained in resident-facing service delivery, with clear communication and professional conduct as standard.
                  </p>
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Resident-focused helpdesk with clear SLAs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>DBS-checked engineers for residential access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Compliance management for landlord regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-site portfolio reporting and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Out-of-hours emergency response</span>
                    </li>
                  </ul>
                </Card>
              </section>

              {/* Related Case Studies */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Related Case Studies
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">
                      <Link to="/case-studies/residential-pbsa" className="hover:text-primary transition-colors">
                        Student Accommodation Estate
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      Comprehensive hard FM services for a purpose-built student accommodation development with 500+ beds.
                    </p>
                    <Link to="/case-studies/residential-pbsa" className="text-sm text-primary hover:underline">
                      Read case study →
                    </Link>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">Residential PBSA Sector</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      FM solutions for purpose-built student accommodation and high-density residential developments.
                    </p>
                    <Link to="/sectors/residential-pbsa" className="text-sm text-primary hover:underline">
                      View sector overview →
                    </Link>
                  </Card>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Residential FM Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about facilities management for residential estates and BTR portfolios.
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

export default Residential;
