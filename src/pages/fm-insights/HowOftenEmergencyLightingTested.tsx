import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, Calendar } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HowOftenEmergencyLightingTested = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "How Often Should Emergency Lighting Be Tested?" }
  ];

  const faqs = [
    {
      question: "How often should emergency lighting be tested?",
      answer: "Monthly function tests (brief activation), annual duration tests (full 3-hour discharge), and 6-monthly inspection of battery condition. Required under BS 5266-1 and BS EN 50172 for safe evacuation compliance."
    },
    {
      question: "What is a monthly emergency lighting test?",
      answer: "Each emergency light is activated for short duration (typically 30-60 seconds) to verify it illuminates correctly. Results are recorded in a log book noting any failures. This confirms lights are ready for emergency use."
    },
    {
      question: "What is the annual 3-hour duration test?",
      answer: "Emergency lights run on battery power for full rated duration (usually 3 hours) to verify batteries hold adequate charge. This simulates a prolonged power outage and identifies battery degradation requiring replacement."
    },
    {
      question: "Who can test emergency lighting?",
      answer: "Monthly tests can be performed by trained facilities staff following manufacturer guidance. Annual duration tests and system inspections should be conducted by competent electricians or emergency lighting specialists with relevant qualifications."
    },
    {
      question: "What are the penalties for not testing emergency lighting?",
      answer: "Breaches of fire safety regulations including unlimited fines, prohibition notices, and potential imprisonment for responsible persons. If evacuation failures result in death or injury, Corporate Manslaughter charges may follow."
    }
  ];

  const relatedInsights = [
    { title: "How Often Should Fire Alarms Be Tested?", link: "/fm-insights/how-often-should-fire-alarms-be-tested" },
    { title: "Does My Building Need Emergency Lighting?", link: "/fm-insights/does-my-building-need-emergency-lighting" },
    { title: "Who is the Responsible Person?", link: "/fm-insights/who-is-the-responsible-person" }
  ];

  return (
    <>
      <Helmet>
        <title>How Often Should Emergency Lighting Be Tested? | UK Requirements | EntireFM</title>
        <meta name="description" content="Emergency lighting testing requirements: monthly function tests, annual 3-hour duration tests. Complete guide to BS 5266-1 and safe evacuation compliance." />
        <link rel="canonical" href="https://entirefm.com/fm-insights/how-often-emergency-lighting-tested" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              How Often Should Emergency Lighting Be Tested?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Testing requirements for safe evacuation routes.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-muted-foreground font-light leading-relaxed">
                Emergency lighting must illuminate escape routes when mains power fails. But lights sitting dormant for months may not work in an emergency. British Standards mandate regular testing to ensure reliability when occupants' lives depend on it. The Regulatory Reform (Fire Safety) Order 2005 requires responsible persons to maintain functional emergency lighting through documented testing regimes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does This Requirement Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Emergency lighting testing operates on three frequencies: monthly function tests, annual full-duration tests, and 6-monthly battery condition inspections. Each validates different aspects of system readiness.
              </p>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 text-primary mr-2" />
                    Monthly Function Test
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Brief activation of each light (30-60 seconds) to verify illumination. Check all escape route lights, exit signs, and open-area fittings. Record results and identify failures.
                  </p>
                  <p className="text-sm font-medium">Required: Every 30 days</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    Annual Duration Test
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Full 3-hour discharge test simulating extended power outage. Verifies batteries maintain adequate charge throughout rated duration. Identifies degraded batteries requiring replacement.
                  </p>
                  <p className="text-sm font-medium">Required: Annually</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">6-Monthly Inspection</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Visual inspection of fittings, cleaning of lenses, checking battery condition indicators, testing of self-test systems. Ensures physical condition and readiness between major tests.
                  </p>
                  <p className="text-sm font-medium">Required: Every 6 months</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible for Compliance?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Responsible person:</strong> Duty holder under Fire Safety Order (building owner, employer, facilities manager)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Competent person:</strong> Trained individual conducting monthly tests (facilities staff with proper training)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Qualified electrician:</strong> Professional performing annual duration tests and system inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Emergency lighting specialist:</strong> Expert conducting comprehensive audits and certification</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Inspection & Maintenance Frequency
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-medium">Test Type</th>
                      <th className="text-left p-3 font-medium">Frequency</th>
                      <th className="text-left p-3 font-medium">Duration</th>
                      <th className="text-left p-3 font-medium">Documentation</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="p-3">Function Test</td>
                      <td className="p-3">Monthly</td>
                      <td className="p-3">30-60 seconds per fitting</td>
                      <td className="p-3">Log book entry</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Visual Inspection</td>
                      <td className="p-3">6-monthly</td>
                      <td className="p-3">N/A</td>
                      <td className="p-3">Inspection report</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Duration Test</td>
                      <td className="p-3">Annually</td>
                      <td className="p-3">Full rated duration (typically 3 hours)</td>
                      <td className="p-3">Compliance certificate</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">After Installation/Repair</td>
                      <td className="p-3">As needed</td>
                      <td className="p-3">Commissioning test</td>
                      <td className="p-3">Certification</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Applicable Standards
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 5266-1:2016:</strong> Emergency lighting — Code of practice for emergency lighting of premises</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS EN 50172:2004:</strong> Emergency escape lighting systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory Reform (Fire Safety) Order 2005:</strong> Legal requirement for functional emergency lighting</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS EN 1838:2013:</strong> Lighting applications — Emergency lighting</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Risks and Penalties of Non-Compliance
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Evacuation failures:</strong> Occupants unable to locate exits during power failures or fires</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Injury or death:</strong> Trips, falls, and panic in darkened escape routes</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Criminal prosecution:</strong> Fire service enforcement under Fire Safety Order</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No cap on financial penalties for fire safety breaches</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for responsible persons</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Prohibition notices:</strong> Building closures until compliance demonstrated</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter:</strong> If death results from fire safety failures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Ensures Asset Certainty
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver systematic emergency lighting compliance through qualified electricians and digital test tracking:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Monthly function testing with complete site coverage</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Annual 3-hour duration tests by NICEIC engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital log book management preventing missed tests</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Battery replacement programmes based on test results</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>BS 5266-1 compliance certification</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site governance ensuring consistent standards</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/services/emergency-lighting">
                  <Card className="p-6 hover-lift h-full">
                    <h3 className="text-lg font-medium mb-2">Emergency Lighting</h3>
                    <p className="text-sm text-muted-foreground mb-3">Testing, maintenance, and compliance</p>
                    <div className="flex items-center text-sm text-primary">
                      Learn more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </Link>
                <Link to="/services/fire-safety">
                  <Card className="p-6 hover-lift h-full">
                    <h3 className="text-lg font-medium mb-2">Fire Safety Services</h3>
                    <p className="text-sm text-muted-foreground mb-3">Comprehensive fire protection</p>
                    <div className="flex items-center text-sm text-primary">
                      Learn more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </Link>
              </div>
            </section>

            <FAQSection faqs={faqs} />

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Related Insights
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
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
              <h3 className="text-2xl font-light mb-4">Need Emergency Lighting Compliance?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for emergency lighting testing and maintenance.
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

export default HowOftenEmergencyLightingTested;
