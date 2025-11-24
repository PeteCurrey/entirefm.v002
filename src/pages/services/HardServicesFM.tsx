import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SchemaMarkup, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const HardServicesFM = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hard FM & Technical Building Services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "Definition of Hard FM, compliance responsibilities, and asset maintenance overview for commercial estates."
  };

  const faqs = [
    {
      question: "What is the difference between hard FM and soft FM?",
      answer: "Hard FM covers technical building systems and infrastructure - mechanical, electrical, plumbing, fire safety, and structural maintenance. Soft FM covers services that support building occupancy like cleaning, security, catering, and grounds maintenance."
    },
    {
      question: "What compliance responsibilities fall under hard FM?",
      answer: "Hard FM includes all statutory compliance testing: electrical EICRs, gas safety certificates, fire alarm testing, emergency lighting, water hygiene, lift inspections, and pressure system examinations. Non-compliance creates legal liability for building owners."
    },
    {
      question: "How often should hard FM maintenance occur?",
      answer: "Frequency depends on the system and regulations. Fire alarms require weekly testing, emergency lighting monthly, gas safety annually, and EICRs every 5 years for commercial properties. PPM schedules are tailored to asset criticality and manufacturer recommendations."
    },
    {
      question: "Can hard FM be delivered reactively without PPM?",
      answer: "Reactive-only approaches fail on compliance and increase costs. Statutory testing is mandatory regardless of asset condition. PPM prevents failures, extends asset life, and reduces total cost of ownership compared to run-to-failure strategies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hard FM & Technical Building Services | Facilities Management | EntireFM</title>
        <meta name="description" content="Hard facilities management and technical building services. Mechanical, electrical, plumbing, fire safety, and compliance maintenance for commercial estates." />
        <link rel="canonical" href="https://entirefm.com/services/hard-services" />
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
                  Hard FM & Technical Building Services
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Definition of Hard FM, compliance responsibilities, and asset maintenance overview.
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

              {/* What Hard FM Covers */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What Hard FM Covers
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Hard facilities management encompasses the technical infrastructure that makes buildings functional and compliant. This includes all mechanical, electrical, plumbing, fire safety, and structural systems requiring specialist engineering knowledge.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Unlike soft FM services which support building occupancy, hard FM maintains the physical assets that provide heating, cooling, power, water, fire protection, and life safety systems. Failure of hard FM systems creates compliance breaches, operational disruption, and safety risks.
                  </p>
                </Card>
              </section>

              {/* Core Service Areas */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Core Hard FM Services
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/electrical" className="hover:text-primary transition-colors">
                        Electrical Systems & Compliance
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Fixed wire testing, EICRs, distribution board maintenance, emergency lighting testing, and electrical safety compliance. Prevents fire risks and ensures power system reliability.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/hvac" className="hover:text-primary transition-colors">
                        HVAC & Mechanical Services
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Air conditioning, ventilation, heating systems, chillers, boilers, and F-Gas compliance. Maintains thermal comfort, air quality, and energy efficiency.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/fire-safety" className="hover:text-primary transition-colors">
                        Fire Safety Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Fire alarms, emergency lighting, sprinklers, dry risers, AOV systems, and fire door maintenance. Critical for life safety and regulatory compliance.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/plumbing" className="hover:text-primary transition-colors">
                        Plumbing & Water Systems
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Pipework, pumps, drainage, hot water systems, and pressure vessels. Includes legionella control and water hygiene management.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/gas-safety" className="hover:text-primary transition-colors">
                        Gas Safety & Compliance
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Commercial gas safety inspections, boiler servicing, gas pipework testing, and landlord gas certificates. Prevents carbon monoxide risks.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card/50 backdrop-blur">
                    <h3 className="font-medium mb-3">
                      <Link to="/services/building-fabric" className="hover:text-primary transition-colors">
                        Building Fabric & Structure
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Roofing, façade maintenance, windows, doors, structural repairs, and weatherproofing. Protects the building envelope and prevents water ingress.
                    </p>
                  </Card>
                </div>
              </section>

              {/* Legal & Technical Responsibilities */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Legal & Technical Responsibilities
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Building Owner Duties</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Under the Health and Safety at Work Act 1974 and subsequent regulations, building owners must ensure premises are safe and compliant. This includes maintaining all building systems, conducting statutory inspections, and holding current certificates.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Responsible Person Obligations</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        The Regulatory Reform (Fire Safety) Order 2005 designates a responsible person who must ensure fire safety compliance. This includes maintaining fire systems, conducting fire risk assessments, and keeping documentation current.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Landlord & Tenant Responsibilities</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Lease agreements must clearly define maintenance responsibilities. Typically, landlords maintain core building systems while tenants maintain fit-out and tenant-specific installations. Ambiguity creates compliance gaps.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Contractor Competency Requirements</h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        Building owners must ensure contractors are competent and hold appropriate qualifications. Gas Safe registration, NICEIC approval, and trade-specific accreditations are mandatory for regulated works.
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Testing Frequency */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Statutory Testing Frequency
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 font-medium">System</th>
                          <th className="text-left py-3 font-medium">Test Frequency</th>
                          <th className="text-left py-3 font-medium">Regulation</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground font-light">
                        <tr className="border-b border-border/50">
                          <td className="py-3">Fire Alarms</td>
                          <td className="py-3">Weekly call point test</td>
                          <td className="py-3">BS 5839-1</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Emergency Lighting</td>
                          <td className="py-3">Monthly function test</td>
                          <td className="py-3">BS 5266-1</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Fixed Wire Testing (EICR)</td>
                          <td className="py-3">Every 5 years</td>
                          <td className="py-3">BS 7671</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Gas Safety Inspection</td>
                          <td className="py-3">Annually</td>
                          <td className="py-3">Gas Safety Regulations</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Legionella Risk Assessment</td>
                          <td className="py-3">Every 2 years</td>
                          <td className="py-3">L8 (HSE)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Sprinkler Systems</td>
                          <td className="py-3">Weekly visual check</td>
                          <td className="py-3">BS 9251</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="py-3">Lift Inspections</td>
                          <td className="py-3">Every 6 months</td>
                          <td className="py-3">LOLER</td>
                        </tr>
                        <tr>
                          <td className="py-3">Air Conditioning (TM44)</td>
                          <td className="py-3">Every 5 years</td>
                          <td className="py-3">Energy Performance Regulations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card>
              </section>

              {/* Risks of Non-Compliance */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Risks of Non-Compliance
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Legal Prosecution</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          HSE and fire authorities prosecute building owners for compliance failures. Penalties include unlimited fines, custodial sentences for serious breaches, and director disqualification.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Insurance Invalidation</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Insurance policies require current compliance certificates. Claims may be rejected if testing is overdue, leaving building owners liable for full loss value.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Operational Disruption</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Failed systems cause business interruption. Air conditioning failure in data centres, lift breakdowns in high-rise buildings, or fire alarm faults impacting operations cost far more than preventative maintenance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Asset Life Reduction</h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          Neglected maintenance accelerates asset degradation. Boilers, chillers, and electrical systems fail prematurely without regular servicing, requiring expensive capital replacement.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* How EntireFM Delivers */}
              <section className="mb-16">
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  How EntireFM Delivers Hard FM
                </h2>
                <Card className="p-8 bg-card/50 backdrop-blur">
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Our hard FM delivery model combines planned preventative maintenance with reactive response capability. All works are delivered by qualified engineers and documented to regulatory standards.
                  </p>
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Qualified engineers with trade-specific accreditations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Planned maintenance schedules aligned to compliance deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 helpdesk for emergency response</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Digital compliance management and certificate storage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Transparent reporting and service level monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Proactive asset condition monitoring</span>
                    </li>
                  </ul>
                </Card>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="mt-16">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-2xl font-light mb-4">
                    Discuss Hard FM Requirements
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    Talk to our team about hard facilities management for your estate.
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

export default HardServicesFM;
