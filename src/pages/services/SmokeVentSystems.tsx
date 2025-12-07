import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Wind, AlertCircle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SmokeVentSystems = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Smoke Vent Systems" }
  ];

  const faqs = [
    {
      question: "What are smoke vent systems and why are they required?",
      answer: "Smoke vent systems (AOVs - Automatic Opening Vents) expel smoke and heat during fires, maintaining clear escape routes and enabling firefighter access. They're legally required in many building types under fire safety regulations and Building Regulations Approved Document B."
    },
    {
      question: "How often should smoke vents be tested?",
      answer: "Weekly manual operation tests, 6-monthly functional testing of all components, and annual full system inspection by competent engineers. Testing must verify automatic activation, manual override, and smoke detection integration."
    },
    {
      question: "Who can service smoke vent systems?",
      answer: "Only competent engineers with specialist knowledge of smoke control systems, fire detection integration, and relevant British Standards (BS EN 12101 series). Certification confirms compliance and system performance."
    },
    {
      question: "What happens if smoke vents fail during a fire?",
      answer: "Smoke vents failing to activate trap occupants in smoke-filled spaces, prevent evacuation, and hinder firefighting operations. This creates direct life safety risk and prosecution liability for responsible persons."
    },
    {
      question: "Do smoke vents require emergency power backup?",
      answer: "Yes. AOV systems must operate during power failures using battery backup or alternative power sources. This ensures functionality during fires when mains power may be compromised."
    }
  ];

  const relatedServices = [
    { title: "Fire Alarm Systems", link: "/services/fire-alarms" },
    { title: "Fire Safety Compliance", link: "/services/fire-safety" },
    { title: "Emergency Lighting", link: "/services/emergency-lighting" }
  ];

  return (
    <>
      <Helmet>
        <title>Smoke Vent & Fire Extraction Systems | AOV Testing | EntireFM</title>
        <meta name="description" content="Professional smoke vent and fire extraction system maintenance. AOV testing, inspection, and certification to BS EN 12101 standards." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Smoke Vent & Fire Extraction Systems"
        description="Smoke vent (AOV) and fire extraction system testing, maintenance, and certification. Life safety assets requiring strict performance governance to BS EN 12101 standards."
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              Smoke Vent & Fire Extraction Systems
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Life safety assets requiring strict performance governance.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Smoke kills more people in fires than flames. Smoke vent systems (Automatic Opening Vents - AOVs) and fire extraction systems remove smoke and heat from escape routes, stairwells, and protected areas, maintaining tenable conditions for evacuation and firefighting operations. They're legally required in many commercial, industrial, and residential buildings under Building Regulations and fire safety law.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                But these systems must activate reliably when needed. Weekly testing, 6-monthly servicing, and annual inspections to BS EN 12101 standards ensure functional readiness. The Regulatory Reform (Fire Safety) Order 2005 places maintenance obligations on responsible persons — failures create prosecution risk and catastrophic safety consequences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Applicable Standards
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS EN 12101 series:</strong> Smoke and heat control systems standards</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 7346 series:</strong> Components for smoke and heat control systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 9999:2017:</strong> Fire safety in building design, management and use</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Approved Document B:</strong> Building Regulations fire safety guidance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory Reform (Fire Safety) Order 2005:</strong> Legal requirement for functional smoke control</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Responsible Person Obligations
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Commission weekly manual operation tests</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Arrange 6-monthly functional testing by competent engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Conduct annual full system inspections with certification</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Verify integration with fire detection and alarm systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain emergency power backup systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Keep test certificates and service records accessible</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Remediate defects immediately</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Inspection & Testing Frequencies
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-medium">Test Type</th>
                      <th className="text-left p-3 font-medium">Frequency</th>
                      <th className="text-left p-3 font-medium">Components Tested</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="p-3">Manual Operation</td>
                      <td className="p-3">Weekly</td>
                      <td className="p-3">Manual call point activation, visual confirmation</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Functional Test</td>
                      <td className="p-3">6-monthly</td>
                      <td className="p-3">Actuators, motors, control panels, detectors</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Full Inspection</td>
                      <td className="p-3">Annually</td>
                      <td className="p-3">Complete system, backup power, integration</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Emergency Power</td>
                      <td className="p-3">Monthly</td>
                      <td className="p-3">Battery condition and charge status</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Non-Compliance Consequences
              </h2>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-red-500">
                  <AlertCircle className="w-6 h-6 text-red-500 mb-3" />
                  <h3 className="text-lg font-medium mb-2">Life Safety Failure</h3>
                  <p className="text-sm text-muted-foreground">
                    Non-functional smoke vents trap occupants in smoke-filled spaces during fires, preventing evacuation and causing deaths. Responsible persons face Corporate Manslaughter charges when system failures cause fatalities.
                  </p>
                </Card>

                <ul className="space-y-2">
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Criminal prosecution:</strong> Fire service enforcement under Fire Safety Order</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No cap on penalties for fire safety breaches</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for responsible persons</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Prohibition notices:</strong> Building closures until compliance achieved</li>
                  <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected without maintenance records</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Our Smoke Vent Service
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver systematic smoke control system maintenance through specialist engineers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Weekly manual operation testing coordination</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>6-monthly functional testing by competent engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Annual BS EN 12101 compliance inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Fire detection system integration verification</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Emergency power backup testing and maintenance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Complete certification and audit trail management</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedServices.map((service) => (
                  <Link key={service.link} to={service.link}>
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                      <div className="flex items-center text-sm text-primary">
                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <Card className="p-8 bg-muted/30 text-center">
              <h3 className="text-2xl font-light mb-4">Need Smoke Vent Maintenance?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for smoke vent and fire extraction system services.
              </p>
              <Button asChild size="lg">
                <Link to="/request-proposal">
                  Request a Proposal <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </Card>
          </article>
        </div>
      </div>
    </>
  );
};

export default SmokeVentSystems;
