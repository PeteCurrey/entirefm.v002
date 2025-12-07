import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";

const StairwellPressurisationFans = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Stairwell Pressurisation Systems" }
  ];

  const faqs = [
    {
      question: "How often should stairwell pressurisation systems be tested?",
      answer: "BS EN 12101-6 requires annual testing of pressurisation fans, including pressure differential checks, fan duty verification, and failure mode testing to ensure escape routes remain tenable during fire events."
    },
    {
      question: "What pressure differential is required in stairwells?",
      answer: "Typically 40-60 Pascals relative to adjacent accommodation areas, though exact requirements depend on building design and fire strategy. Regular testing ensures these differentials are maintained."
    },
    {
      question: "What happens if a pressurisation system fails?",
      answer: "Failure can allow smoke infiltration into escape routes, creating untenable conditions. The Responsible Person faces prosecution risk, and occupants are exposed to life-threatening smoke inhalation during evacuation."
    },
    {
      question: "Can existing buildings retrofit pressurisation systems?",
      answer: "Yes, though it requires careful design integration with existing HVAC, fire alarm systems, and building fabric. We provide full design, installation, and commissioning services."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Stairwell Pressurisation Systems | BS EN 12101-6 Testing | Entire FM</title>
        <meta name="description" content="Expert stairwell pressurisation system testing and maintenance. Ensure compliant pressure-controlled escape routes with annual fan duty verification and differential checks." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Stairwell Pressurisation Systems"
        description="Maintaining safe escape routes during fire events via compliant pressure-controlled systems according to BS EN 12101-6 standards."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Stairwell Pressurisation Systems
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Maintaining safe escape routes during fire events via compliant pressure-controlled systems.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Stairwell Pressurisation Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Stairwell pressurisation systems create a positive pressure differential between escape stairs and adjacent accommodation areas, preventing smoke infiltration during fire events. When designed and maintained correctly, they keep escape routes tenable, allowing safe evacuation even in large, complex buildings.
                  </p>
                  <p>
                    BS EN 12101-6 sets the performance requirements for pressure differential systems. Annual testing verifies that fans maintain required differentials under various door-opening scenarios, that failure modes are detected, and that integration with fire alarm systems functions correctly.
                  </p>
                  <p>
                    Failures in pressurisation systems can result in smoke-logged stairwells, creating untenable conditions during evacuation. The Responsible Person faces prosecution under the Regulatory Reform (Fire Safety) Order 2005 if systems are not maintained to standard.
                  </p>
                </div>
              </section>

              {/* Compliance Standards */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance Standards
                </h2>
                <div className="grid gap-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">BS EN 12101-6</h3>
                        <p className="text-muted-foreground font-light">
                          Smoke and heat control systems – Specification for pressure differential systems. Defines performance requirements, testing protocols, and maintenance schedules for pressurisation fans.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Regulatory Reform (Fire Safety) Order 2005</h3>
                        <p className="text-muted-foreground font-light">
                          Places legal duty on the Responsible Person to maintain fire safety systems, including smoke control. Non-compliance can result in prosecution and unlimited fines.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Testing Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Performance Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Annual verification that the system achieves the required pressure differential (typically 40-60 Pa) under various door-opening scenarios. Testing includes single and multiple door openings to simulate real evacuation conditions.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Fan Duty Verification</h3>
                        <p className="text-muted-foreground font-light">
                          Checking fan speed, airflow, power consumption, and control sequences. Verifying that standby fans activate correctly if primary fans fail.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Pressure Differential Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Using calibrated manometers to measure pressure differences between stairwell and adjacent spaces. Ensuring lobby doors can still be opened by a person exerting reasonable force.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Failure Mode Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Simulating fan failures to verify that alarms are raised to the fire alarm panel and building management system, and that standby systems activate within acceptable timeframes.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Responsible Person Obligations</h3>
                        <p className="text-muted-foreground font-light">
                          Maintaining test records, ensuring annual testing is completed, and acting on remedial recommendations within prescribed timeframes. Records must be available for inspection by fire authorities.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Risks */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Risks of Non-Compliance
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Smoke Infiltration into Escape Routes</h3>
                        <p className="text-muted-foreground font-light">
                          Failed pressurisation allows smoke to enter stairwells, creating untenable conditions. Occupants may become disoriented, suffer smoke inhalation, or be unable to evacuate safely.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legal and Financial Liability</h3>
                        <p className="text-muted-foreground font-light">
                          The Responsible Person can face prosecution, unlimited fines, and imprisonment if a fire results in injury or death due to inadequately maintained systems. Insurance claims may be voided.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Increased Fire Spread Risk</h3>
                        <p className="text-muted-foreground font-light">
                          Without positive pressure, smoke and fire gases can travel through stairwells to upper floors, accelerating fire spread and complicating firefighting operations.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Your Pressurisation Systems Are Compliant
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for annual testing, remedial works, and full compliance documentation. Our engineers hold BAFE and NFCC credentials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/request-proposal">
                      Request a Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                    <a href="tel:+448001234567">
                      <Phone className="w-4 h-4 mr-2" />
                      24/7 Helpdesk
                    </a>
                  </Button>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <SidebarCTA />

              <Card className="p-6">
                <h3 className="font-medium mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link to="/services/fire-alarms" className="text-muted-foreground hover:text-foreground transition-colors">
                      Fire Alarm Systems
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/smoke-vent-systems" className="text-muted-foreground hover:text-foreground transition-colors">
                      Smoke Vent Systems (AOV)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/emergency-lighting" className="text-muted-foreground hover:text-foreground transition-colors">
                      Emergency Lighting
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/car-park-smoke-control" className="text-muted-foreground hover:text-foreground transition-colors">
                      Car Park Smoke Control
                    </Link>
                  </li>
                </ul>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default StairwellPressurisationFans;