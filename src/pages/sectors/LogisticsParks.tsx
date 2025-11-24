import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const LogisticsParks = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Logistics Parks Facilities Management",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Compliance and maintenance for high-volume industrial estates and distribution centres."
  };

  const faqs = [
    {
      question: "What makes logistics park FM different from standard industrial FM?",
      answer: "Logistics parks require 24/7 operational support, rapid response for loading bay equipment, specialist maintenance for material handling systems, and coordination across multiple tenant units with minimal disruption to goods flow."
    },
    {
      question: "Can you manage multi-tenant logistics estates?",
      answer: "Yes. We provide centralized FM services for landlords and tenants, with clear responsibility splits, coordinated maintenance scheduling, and transparent cost allocation across multiple occupiers."
    },
    {
      question: "What compliance applies to distribution centres?",
      answer: "Logistics facilities require standard building compliance plus specialist systems including loading bay equipment certification, dock leveller testing, roller shutter maintenance, goods lift inspections, and high-bay lighting compliance."
    },
    {
      question: "How do you handle emergency call-outs for operational equipment?",
      answer: "Our 24/7 helpdesk provides immediate response for critical failures affecting goods handling. Engineers are dispatched rapidly for loading bay equipment, roller shutters, and access systems that impact operational continuity."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Logistics Parks Facilities Management | Distribution Centre FM | EntireFM</title>
        <meta name="description" content="Specialist facilities management for logistics parks and distribution centres. High-volume industrial estates with 24/7 operations and specialist handling systems." />
        <link rel="canonical" href="https://entirefm.com/sectors/logistics-parks" />
      </Helmet>

      <SchemaMarkup schema={serviceSchema} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              {/* Hero Section */}
              <section className="mb-16">
                <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                  Logistics Parks & Distribution Centres
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Compliance and maintenance for high-volume industrial estates.
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
                  Logistics Park FM Requirements
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Logistics and distribution facilities operate under constant pressure. Failed loading bay equipment, broken roller shutters, or non-functional dock levellers directly impact operational throughput and cost tens of thousands in lost productivity.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Multi-tenant logistics estates require coordinated FM services that minimize disruption to 24/7 operations while maintaining statutory compliance across all buildings. Our approach delivers responsive maintenance with clear accountability for operational and landlord systems.
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
                    <h3 className="font-medium mb-3">Loading Bay & Material Handling Equipment</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      <Link to="/services/dock-leveller-maintenance" className="text-primary hover:underline">Dock levellers</Link>, <Link to="/services/roller-shutter-maintenance" className="text-primary hover:underline">roller shutters</Link>, and loading bay doors require regular inspection under LOLER and PUWER regulations. Equipment failure causes operational delays and safety risks.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">High-Bay Warehouse Lighting</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      High-bay industrial lighting and <Link to="/services/emergency-lighting" className="text-primary hover:underline">emergency lighting systems</Link> ensure safe goods handling. Regular testing prevents accidents in pick-and-pack operations and maintains HSE compliance.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Fire Safety in Warehousing</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Large storage facilities require <Link to="/services/fire-alarms" className="text-primary hover:underline">sophisticated fire detection</Link> and suppression systems. Sprinkler maintenance, smoke ventilation, and compartmentation surveys are critical for insurance compliance.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">Environmental Control Systems</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Temperature-controlled storage requires reliable <Link to="/services/hvac" className="text-primary hover:underline">HVAC systems</Link>. Cold storage maintenance, refrigeration plant servicing, and temperature monitoring prevent stock loss and maintain food safety compliance.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Key Systems */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Key Systems Within Logistics Parks
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Operational Equipment</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Dock levellers and loading bays</li>
                        <li>• Roller shutters and sectional doors</li>
                        <li>• Goods lifts and mezzanine hoists</li>
                        <li>• Material handling conveyors</li>
                        <li>• Electric vehicle charging points</li>
                        <li>• Weighbridges and vehicle barriers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-3">Building Infrastructure</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• High-bay lighting systems</li>
                        <li>• Fire suppression and sprinklers</li>
                        <li>• HVAC and temperature control</li>
                        <li>• Backup power generation</li>
                        <li>• BMS and energy management</li>
                        <li>• Car park CO monitoring</li>
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
                      <h3 className="font-medium mb-2">24/7 Operational Continuity</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Distribution centres operate around the clock. Maintenance must occur with minimal disruption to goods flow, requiring out-of-hours works and rapid emergency response.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Multi-Tenant Coordination</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Logistics parks with multiple occupiers require clear responsibility splits between landlord and tenant systems, coordinated access for communal areas, and fair cost allocation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Operational Equipment Criticality</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Failed loading bays, broken roller shutters, or non-functional dock levellers halt operations immediately. Reactive response times directly impact business continuity.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Health & Safety Compliance</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Warehouse environments present forklift traffic, loading bay hazards, and height safety risks. Equipment maintenance prevents accidents and maintains HSE compliance.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Why EntireFM */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why EntireFM for Logistics Parks
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    We recognize that logistics operations are measured in hours of downtime. Our engineers understand the commercial pressure of distribution environments and deliver maintenance with minimal impact to throughput.
                  </p>
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 helpdesk and emergency call-out capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Specialist maintenance for loading bay equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Multi-tenant coordination and cost allocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>LOLER and PUWER compliance for lifting equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Rapid response for operational equipment failures</span>
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
                      <Link to="/case-studies/logistics" className="hover:text-primary transition-colors">
                        Regional Distribution Hub
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      Comprehensive hard FM services for a 500,000 sq ft distribution centre with 24/7 operations.
                    </p>
                    <Link to="/case-studies/logistics" className="text-sm text-primary hover:underline">
                      Read case study →
                    </Link>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                    <h3 className="font-medium mb-3">Industrial & Logistics Sector</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      FM solutions for industrial manufacturing and logistics facilities with specialist requirements.
                    </p>
                    <Link to="/sectors/industrial-logistics" className="text-sm text-primary hover:underline">
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
                    Discuss Logistics Park FM Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about facilities management for distribution centres and logistics estates.
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

export default LogisticsParks;
