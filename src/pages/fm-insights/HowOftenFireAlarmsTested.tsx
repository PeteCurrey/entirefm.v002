import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Bell, Calendar, Shield } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HowOftenFireAlarmsTested = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "How Often Should Fire Alarms Be Tested?" }
  ];

  const faqs = [
    {
      question: "How often should fire alarms be tested?",
      answer: "Fire alarm systems must be tested weekly (call points and sounders), serviced every 6 months by a competent person, and fully inspected annually by a specialist. This is required under BS 5839-1 and the Regulatory Reform (Fire Safety) Order 2005."
    },
    {
      question: "Who should test fire alarms?",
      answer: "Weekly tests can be performed by trained responsible persons (facilities staff). 6-monthly servicing and annual inspections must be carried out by competent fire alarm specialists holding relevant qualifications and experience with the specific system type."
    },
    {
      question: "What happens during a weekly fire alarm test?",
      answer: "A different call point (manual break glass) is activated each week on a rotational basis. The test confirms sounders operate throughout the building, the alarm panel responds correctly, and evacuation procedures can be executed. Tests are typically conducted at the same time each week."
    },
    {
      question: "What is included in the 6-monthly fire alarm service?",
      answer: "Comprehensive inspection of control panel, detectors, call points, sounders, batteries, and wiring. Functional testing of zones, fault finding, cleaning of detectors, and updating of system logs. Any defects are identified and remediation recommendations provided."
    },
    {
      question: "What are the penalties for not testing fire alarms?",
      answer: "Failure to maintain fire alarm systems breaches the Fire Safety Order 2005. Penalties include unlimited fines, imprisonment up to 2 years for responsible persons, prohibition notices halting operations, and potential Corporate Manslaughter charges if death occurs."
    }
  ];

  const relatedInsights = [
    { title: "How Often Should Emergency Lighting Be Tested?", link: "/fm-insights/how-often-should-emergency-lighting-be-tested" },
    { title: "Who is the Responsible Person?", link: "/fm-insights/who-is-the-responsible-person" },
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" }
  ];

  return (
    <>
      <Helmet>
        <title>How Often Should Fire Alarms Be Tested? | UK Legal Requirements | EntireFM</title>
        <meta name="description" content="Fire alarm testing schedule required for UK workplaces: weekly tests, 6-monthly servicing, annual inspections. Complete guide to BS 5839-1 compliance." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              How Often Should Fire Alarms Be Tested?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              The legal testing schedule required for UK workplaces.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-muted-foreground font-light leading-relaxed">
                Fire alarm systems are legally required in most commercial, industrial, and public buildings. But installation alone doesn't ensure safety — regular testing and maintenance are mandatory to prove the system works when needed. The Regulatory Reform (Fire Safety) Order 2005 places clear obligations on responsible persons to maintain functional alarm systems through systematic testing regimes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does This Requirement Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Fire alarm testing obligations exist at three levels: weekly operational checks, 6-monthly servicing by competent persons, and annual comprehensive inspections. Each serves a distinct purpose in ensuring life safety system reliability.
              </p>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Bell className="w-5 h-5 text-primary mr-2" />
                    Weekly Operational Test
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Activate one call point on rotation. Verify sounders operate throughout building. Confirm alarm panel responds correctly. Record results and any defects.
                  </p>
                  <p className="text-sm font-medium">Required: Every 7 days</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    6-Monthly Service
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Comprehensive inspection by competent fire alarm technician. Testing of detectors, call points, panel, batteries, zones. Cleaning and maintenance. Defect identification and reporting.
                  </p>
                  <p className="text-sm font-medium">Required: Every 6 months</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-primary mr-2" />
                    Annual Full Inspection
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Detailed inspection to BS 5839-1 standards by qualified specialist. Complete system verification, compliance review, certification. Recommendations for improvements or upgrades.
                  </p>
                  <p className="text-sm font-medium">Required: Annually</p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible for Compliance?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Responsible person:</strong> Duty holder under Fire Safety Order (typically building owner, employer, or facilities manager)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Competent person:</strong> Fire alarm technician or engineer conducting servicing and inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities team:</strong> Staff performing weekly tests and monitoring system operation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fire risk assessor:</strong> Professional determining appropriate system specification and maintenance regime</li>
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
                      <th className="text-left p-3 font-medium">Who Performs</th>
                      <th className="text-left p-3 font-medium">Documentation</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-border/50">
                      <td className="p-3">Weekly Test</td>
                      <td className="p-3">Every 7 days</td>
                      <td className="p-3">Responsible person / facilities staff</td>
                      <td className="p-3">Log book entry</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Routine Service</td>
                      <td className="p-3">Every 6 months</td>
                      <td className="p-3">Competent fire alarm technician</td>
                      <td className="p-3">Service report</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">Full Inspection</td>
                      <td className="p-3">Annually</td>
                      <td className="p-3">Qualified specialist (BS 5839-1)</td>
                      <td className="p-3">Compliance certificate</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">After Fault/Repair</td>
                      <td className="p-3">As needed</td>
                      <td className="p-3">Qualified engineer</td>
                      <td className="p-3">Remediation report</td>
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
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 5839-1:2017:</strong> Fire detection and fire alarm systems for buildings — Code of practice for design, installation, commissioning and maintenance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory Reform (Fire Safety) Order 2005:</strong> Legal framework requiring functional fire safety systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>BS 5839-6:2019:</strong> Domestic fire alarm systems (residential properties)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>FIA Code of Practice:</strong> Fire Industry Association guidance on system maintenance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Risks and Penalties of Non-Compliance
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Life safety failures:</strong> Non-functional alarms preventing evacuation during fires</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Criminal prosecution:</strong> Fire and rescue service enforcement under Fire Safety Order</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No financial cap for fire safety breaches</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for responsible persons</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Prohibition notices:</strong> Building closure orders until compliance achieved</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter charges:</strong> If death results from fire safety failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected without maintenance records</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Ensures Asset Certainty
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver systematic fire alarm compliance through qualified technicians and digital governance. Our service includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Weekly testing coordination with facilities teams</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>6-monthly servicing by competent fire alarm engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Annual BS 5839-1 inspections with certification</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Complete log book management and audit trails</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Defect tracking and urgent remediation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site governance ensuring consistent standards</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                No missed tests. No expired certificates. Just provable fire safety compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/services/fire-alarms">
                  <Card className="p-6 hover-lift h-full">
                    <h3 className="text-lg font-medium mb-2">Fire Alarm Systems</h3>
                    <p className="text-sm text-muted-foreground mb-3">Testing, servicing, and compliance management</p>
                    <div className="flex items-center text-sm text-primary">
                      Learn more <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Card>
                </Link>
                <Link to="/services/fire-safety">
                  <Card className="p-6 hover-lift h-full">
                    <h3 className="text-lg font-medium mb-2">Fire Safety Compliance</h3>
                    <p className="text-sm text-muted-foreground mb-3">Comprehensive fire protection services</p>
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
              <h3 className="text-2xl font-light mb-4">Need Fire Safety Compliance?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for fire alarm testing and maintenance services.
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

export default HowOftenFireAlarmsTested;
