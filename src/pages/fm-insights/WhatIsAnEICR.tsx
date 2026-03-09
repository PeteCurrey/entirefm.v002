import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, AlertTriangle, FileCheck, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsAnEICR = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is an EICR?" }
  ];

  const faqs = [
    {
      question: "How often do I need an EICR?",
      answer: "Commercial premises typically require EICRs every 5 years. Rental properties need testing every 5 years or at change of tenancy. High-risk environments (industrial, healthcare) may require more frequent testing. Always follow recommendations from the previous EICR report."
    },
    {
      question: "Who can carry out an EICR?",
      answer: "Only qualified electricians registered with approved schemes (NICEIC, NAPIT, ECA) can perform EICRs. They must hold relevant qualifications (typically Level 3 in Inspection and Testing) and professional indemnity insurance."
    },
    {
      question: "What happens if my EICR fails?",
      answer: "Failed EICRs identify safety defects requiring remediation. C1 (Danger present) and C2 (Potentially dangerous) codes must be addressed immediately. C3 (Improvement recommended) issues should be resolved at next convenient opportunity. Insurance may be invalidated until repairs are completed."
    },
    {
      question: "How long does an EICR take?",
      answer: "Testing duration depends on installation size and complexity. Small offices: 2-4 hours. Medium commercial premises: 1-2 days. Large industrial sites: multiple days. Testing requires power isolation, so operational disruption should be planned."
    },
    {
      question: "Is an EICR the same as PAT testing?",
      answer: "No. EICRs test fixed electrical installations (wiring, distribution boards, circuits). PAT (Portable Appliance Testing) inspects movable equipment like computers, kettles, and tools. Both are important but cover different aspects of electrical safety."
    }
  ];

  const relatedInsights = [
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" },
    { title: "What is Hard FM?", link: "/fm-insights/what-is-hard-fm" },
    { title: "What is PPM?", link: "/fm-insights/what-is-ppm" }
  ];

  return (
    <>
      <Helmet>
        <title>What is an EICR? | Electrical Inspection Guide | EntireFM</title>
        <meta name="description" content="Understanding EICR electrical inspections: requirements, frequencies, and compliance obligations for safe, legal workplaces. Essential guide to fixed wire testing." />
        <link rel="canonical" href="https://entirefm.com/fm-insights/what-is-an-eicr" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              What is an EICR?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Electrical inspection requirements for safe, legal workplaces.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                An EICR (Electrical Installation Condition Report) is a formal inspection and testing document that assesses the safety and compliance of a building's fixed electrical installations. It identifies defects, deterioration, damage, and non-compliance with current wiring regulations (BS 7671).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                EICRs are legally required under the Electricity at Work Regulations 1989, which mandate that electrical systems must be maintained in safe working order and inspected at appropriate intervals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does an EICR Test?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Visual Inspection</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Distribution boards and consumer units</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Cable condition and routing</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Switches, sockets, and accessories</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Earthing and bonding arrangements</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Electrical Testing</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Earth continuity tests</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Insulation resistance measurements</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Polarity verification</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>RCD (residual current device) operation</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Understanding EICR Codes
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                EICRs classify defects using standardized codes indicating urgency:
              </p>
              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-red-500">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    C1 — Danger Present
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Immediate risk to life. Installation must be isolated and repaired urgently. Examples: exposed live parts, missing earth connections, severely damaged cables.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-orange-500">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                    C2 — Potentially Dangerous
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Risk of injury. Remediation required with urgency. Examples: inadequate earthing, damaged accessories, overloaded circuits, non-compliant consumer units.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-yellow-500">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                    C3 — Improvement Recommended
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Not immediately dangerous but improvements advised. Should be addressed at next convenient opportunity to meet current standards.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-500">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <FileCheck className="w-5 h-5 text-green-500 mr-2" />
                    FI — Further Investigation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Limitations encountered during testing. Additional inspection required to determine full condition. Common when areas are inaccessible or documentation missing.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                EICR obligations rest with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building owners:</strong> Legal duty holders under health and safety law</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Employers:</strong> Responsible for safe electrical systems in workplaces</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Landlords:</strong> Specific obligations for rental properties under electrical safety regulations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities managers:</strong> Coordinating testing schedules and remediation works</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                To maintain electrical safety compliance:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Commission EICRs at appropriate intervals (typically 5 years for commercial premises)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Engage NICEIC/NAPIT registered electricians with relevant qualifications</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Review EICR findings and prioritize remediation based on defect codes</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Address C1 and C2 defects immediately (isolate circuits if necessary)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Schedule C3 improvements at next maintenance opportunity</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Retain EICR certificates and remediation records for audit purposes</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Follow recommended retest intervals stated in the report</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                EICR frequencies depend on premises type and risk profile:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Commercial offices:</strong> Every 5 years</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Industrial premises:</strong> Every 3 years (higher risk environments)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Retail and leisure:</strong> Every 5 years</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Schools and educational:</strong> Every 5 years</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Healthcare facilities:</strong> Every 5 years or per specific regulations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Rental properties:</strong> Every 5 years or at change of tenancy</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>After major works:</strong> Testing required following significant alterations</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                <strong>Important:</strong> The previous EICR will recommend the next inspection interval. This should always be followed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Failing to maintain valid EICRs creates severe consequences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Electrical fires:</strong> Faulty installations causing property damage and potential fatalities</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Electric shock incidents:</strong> Injury or death from unsafe circuits and poor earthing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Legal prosecution:</strong> HSE enforcement under Electricity at Work Regulations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No financial cap for electrical safety breaches</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected without valid EICR documentation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Business closure:</strong> Prohibition notices halting operations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter charges:</strong> If death results from electrical negligence</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver electrical safety compliance through qualified NICEIC engineers and systematic governance. Our approach includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>EICR scheduling with automatic alerts preventing missed deadlines</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Fully qualified electricians with Level 3 Inspection and Testing certification</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Detailed reporting with prioritized defect recommendations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Immediate remediation of C1/C2 codes by qualified personnel</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital certificate management with accessible audit trails</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site coordination ensuring consistent testing standards</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                No assumptions. No shortcuts. Just compliant electrical installations backed by qualified professionals.
              </p>
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
              <h3 className="text-2xl font-light mb-4">Need Electrical Safety Compliance?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for EICR testing and electrical maintenance services.
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

export default WhatIsAnEICR;
