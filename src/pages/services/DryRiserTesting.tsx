import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, FileCheck, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema, ServiceSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DryRiserTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Dry Riser Testing" }
  ];

  const faqs = [
    {
      question: "What is a dry riser and why is it important?",
      answer: "A dry riser is an empty vertical pipe installed in buildings over 18 meters high, allowing firefighters to pump water to upper floors. It's critical for firefighting in high-rise buildings where ground-level hose reach is insufficient."
    },
    {
      question: "How often must dry risers be tested?",
      answer: "Dry risers require 6-monthly visual inspections and annual pressure testing to BS 9990 standards. After testing, they must be certified by competent engineers and defects remediated immediately."
    },
    {
      question: "Who is responsible for dry riser maintenance?",
      answer: "The building owner or responsible person under the Regulatory Reform (Fire Safety) Order 2005 must ensure dry risers are tested, maintained, and certified. This duty cannot be delegated away even when using contractors."
    },
    {
      question: "What happens during a dry riser pressure test?",
      answer: "Engineers pressurize the system to 1034 kPa (10.34 bar) for 5 minutes, checking for leaks, pressure drops, valve operation, and outlet condition. Any failures must be repaired before certification is issued."
    },
    {
      question: "What are the penalties for non-compliant dry risers?",
      answer: "Fire service enforcement action, unlimited fines, prohibition notices preventing building occupation, and potential Corporate Manslaughter charges if fire deaths occur due to non-functional dry riser systems."
    }
  ];

  const relatedServices = [
    { title: "Fire Alarm Systems", link: "/services/fire-alarms" },
    { title: "Sprinkler Systems", link: "/services/sprinklers" },
    { title: "Fire Safety Compliance", link: "/services/fire-safety" }
  ];

  const relatedInsights = [
    { title: "What is a Dry Riser?", link: "/fm-insights/what-is-a-dry-riser-and-why-is-it-tested" },
    { title: "Who is the Responsible Person?", link: "/fm-insights/who-is-the-responsible-person" }
  ];

  return (
    <>
      <Helmet>
        <title>Dry Riser Testing & Certification | BS 9990 Compliance | EntireFM</title>
        <meta name="description" content="Professional dry riser testing and certification to BS 9990 for high-rise firefighting systems. Annual pressure testing, inspection, and compliance management." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema
        name="Dry Riser Testing & Certification"
        description="BS 9990 compliant dry riser testing, pressure testing, inspection, and certification for high-rise buildings. Annual testing programmes ensuring firefighting system readiness."
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              Dry Riser Testing & Certification
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              BS 9990 compliance for high-rise firefighting systems.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Dry risers are vertical pipes installed in buildings exceeding 18 meters in height, providing firefighters with rapid water supply access to upper floors during emergencies. Unlike wet systems, they remain empty until fire service connection, preventing freeze damage and reducing structural load. But dormant systems can develop faults — corrosion, blockages, valve failures, and pressure losses — making them useless when lives depend on them.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                BS 9990:2015 mandates annual pressure testing and 6-monthly inspections. The Regulatory Reform (Fire Safety) Order 2005 places legal obligation on responsible persons to maintain functional dry risers. Non-compliance creates prosecution risk and catastrophic firefighting capability failures.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Applicable Standards
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 9990:2015:</strong> Non-automatic fire-fighting systems in buildings — Code of practice for dry risers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 9991:2015:</strong> Fire safety in residential buildings — Guidance on dry riser requirements</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory Reform (Fire Safety) Order 2005:</strong> Legal requirement for functional firefighting equipment</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Approved Document B:</strong> Building Regulations guidance on fire safety provisions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Responsible Person Obligations
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Under fire safety law, responsible persons (building owners, duty holders, facilities managers) must:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Commission annual pressure testing by competent engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Conduct 6-monthly visual inspections of outlets, valves, and signage</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain accessible test certificates and inspection records</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Remediate identified defects immediately</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Ensure clear access to inlet and outlet points</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Coordinate with fire service for system familiarization</li>
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
                      <th className="text-left p-3 font-medium">Standard</th>
                      <th className="text-left p-3 font-medium">Documentation</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="p-3">Visual Inspection</td>
                      <td className="p-3">Every 6 months</td>
                      <td className="p-3">BS 9990</td>
                      <td className="p-3">Inspection log</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Pressure Test</td>
                      <td className="p-3">Annually</td>
                      <td className="p-3">BS 9990 (1034 kPa for 5 min)</td>
                      <td className="p-3">Test certificate</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">After Repairs</td>
                      <td className="p-3">As needed</td>
                      <td className="p-3">BS 9990</td>
                      <td className="p-3">Remediation cert</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Commissioning</td>
                      <td className="p-3">At installation</td>
                      <td className="p-3">BS 9990</td>
                      <td className="p-3">Commissioning cert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What We Test
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <Droplets className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Pressure Integrity</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>System pressurized to 1034 kPa (10.34 bar)</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>5-minute hold period monitoring pressure drop</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Leak detection at joints and outlets</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Pipe integrity verification</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Component Inspection</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Inlet box condition and accessibility</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Outlet valve operation and sealing</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Landing valve functionality</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Signage visibility and accuracy</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Non-Compliance Consequences
              </h2>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-red-500">
                  <AlertTriangle className="w-6 h-6 text-red-500 mb-3" />
                  <h3 className="text-lg font-medium mb-2">Firefighting Failure</h3>
                  <p className="text-sm text-muted-foreground">
                    Non-functional dry risers prevent fire service water supply to upper floors during fires, directly causing deaths and catastrophic property loss. This represents gross negligence.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">Legal Penalties</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Criminal prosecution:</strong> Fire service enforcement under Fire Safety Order</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No financial cap for fire safety breaches</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for responsible persons</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Prohibition notices:</strong> Building closure until compliance demonstrated</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter:</strong> If death results from fire safety failures</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected without test certificates</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Our Dry Riser Service
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver BS 9990 compliant dry riser testing through qualified engineers with specialist pressure testing equipment:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Annual pressure testing to 1034 kPa with certified gauges</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>6-monthly visual inspections of all components</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Defect identification and remediation coordination</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>BS 9990 certification with complete test documentation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital certificate management and renewal alerts</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site governance for property portfolios</li>
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

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Related Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedInsights.map((insight) => (
                  <Link key={insight.link} to={insight.link}>
                    <Card className="p-6 hover-lift h-full">
                      <h3 className="text-lg font-medium mb-2">{insight.title}</h3>
                      <div className="flex items-center text-sm text-primary">
                        Read more <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>

            <Card className="p-8 bg-muted/30 text-center">
              <h3 className="text-2xl font-light mb-4">Need Dry Riser Testing?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for BS 9990 compliant dry riser testing and certification.
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

export default DryRiserTesting;
