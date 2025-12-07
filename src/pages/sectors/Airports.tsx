import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const Airports = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Facilities Management",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "FM for terminals, airside/landside assets, critical systems and high-footfall infrastructure."
  };

  const faqs = [
    {
      question: "What makes airport FM different from standard commercial FM?",
      answer: "Airport environments require airside-specific compliance, 24/7 operational continuity, rapid response protocols, and coordination with aviation authorities. Critical systems cannot fail during operational hours."
    },
    {
      question: "Can you work airside?",
      answer: "Our engineers hold airside security clearances and are trained in airport operational protocols. All works comply with CAA regulations and airport-specific requirements."
    },
    {
      question: "How do you manage works during peak passenger flow?",
      answer: "We schedule maintenance during off-peak hours and use phased approaches for critical areas. Emergency works are executed with minimal disruption to passenger experience and flight operations."
    },
    {
      question: "What compliance standards apply to airport buildings?",
      answer: "Airports require standard building compliance plus aviation-specific regulations including CAA guidance, BCAR standards, emergency evacuation systems, and enhanced fire safety measures for high-occupancy public spaces."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Airport Facilities Management | Aviation FM Services | EntireFM</title>
        <meta name="description" content="Specialist facilities management for airports. Terminal buildings, airside assets, critical systems, and high-footfall infrastructure with 24/7 operational support." />
        <link rel="canonical" href="https://entirefm.com/sectors/airports" />
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
                  Airport Facilities Management
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  FM for terminals, airside/landside assets, critical systems and high-footfall infrastructure.
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
                  Airport FM Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Airport facilities management operates under heightened regulatory scrutiny and operational pressure. Terminal buildings, airside infrastructure, and passenger-facing systems must maintain continuous availability while meeting aviation-specific compliance standards.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Our approach recognizes that airport downtime is not an option. We deliver planned maintenance during off-peak hours, provide rapid emergency response, and maintain documentation to CAA standards.
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
                    <h3 className="font-medium mb-3">Fire Safety in High-Occupancy Spaces</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Terminals require enhanced fire detection, suppression, and evacuation systems. Regular testing of fire alarms, emergency lighting, and smoke control systems is critical. Non-compliance risks passenger safety and operational licensing.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Electrical System Integrity</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Baggage handling, security systems, and operational lighting depend on uninterrupted power. <Link to="/services/electrical-compliance" className="text-primary hover:underline">Electrical compliance testing</Link> and backup generator maintenance are mandatory.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">HVAC & Air Quality</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Large terminal buildings require sophisticated <Link to="/services/hvac-compliance" className="text-primary hover:underline">HVAC systems</Link> to maintain air quality and passenger comfort. F-Gas compliance and regular servicing prevent system failures during peak periods.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Water Hygiene in Public Facilities</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Washrooms, catering facilities, and cooling towers present legionella risks. <Link to="/services/water-hygiene" className="text-primary hover:underline">Water hygiene programmes</Link> must cover high-use public areas and back-of-house systems.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Key Systems */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Key Systems Within Airports
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Terminal Infrastructure</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Passenger information displays</li>
                        <li>• Baggage handling systems</li>
                        <li>• Security screening equipment</li>
                        <li>• Automated doors and gates</li>
                        <li>• Lifts and escalators</li>
                        <li>• Public address systems</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Critical Building Systems</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Standby power generation</li>
                        <li>• Fire suppression systems</li>
                        <li>• Emergency evacuation systems</li>
                        <li>• BMS and building controls</li>
                        <li>• Airside lighting systems</li>
                        <li>• Backup cooling systems</li>
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
                      <h3 className="font-medium mb-2">24/7 Operations</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Airports never close. Maintenance must occur during minimal disruption windows, requiring night shifts and rapid mobilization for emergency works.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Security Clearances</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        All personnel require airside passes and security vetting. Our engineers maintain current clearances and understand restricted area protocols.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Coordination Complexity</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Works must be coordinated with airport operations, airlines, retail tenants, and ground handling agents. Poor planning causes passenger disruption and operational delays.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Regulatory Oversight</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        CAA compliance, health and safety audits, and local authority inspections require meticulous documentation and immediate response to findings.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Why EntireFM */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why EntireFM for Airport FM
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    We understand that airport facilities management demands precision, reliability, and absolute discretion. Our engineers hold airside clearances and are trained in aviation operational protocols.
                  </p>
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Security-cleared engineers with airside access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 emergency response and helpdesk support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Off-peak scheduling to minimize passenger impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CAA-compliant documentation and audit trails</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Rapid mobilization for critical system failures</span>
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
                      <Link to="/case-studies/aviation" className="hover:text-primary transition-colors">
                        Regional Airport Terminal
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      Comprehensive hard FM services for a regional airport terminal including airside and landside maintenance.
                    </p>
                    <Link to="/case-studies/aviation" className="text-sm text-primary hover:underline">
                      Read case study →
                    </Link>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">Aviation Travel Hub</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      Multi-year FM contract supporting passenger terminals and associated infrastructure.
                    </p>
                    <Link to="/sectors/aviation-travel-hub" className="text-sm text-primary hover:underline">
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
                    Discuss Airport FM Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about facilities management for airport and aviation infrastructure.
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

export default Airports;
