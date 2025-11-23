import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, AlertTriangle, Calendar, Scale } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsStatutoryMaintenance = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is Statutory Maintenance?" }
  ];

  const faqs = [
    {
      question: "What is the difference between statutory and planned maintenance?",
      answer: "Statutory maintenance is legally mandated by regulations (e.g., annual gas safety checks, 5-year EICRs). Planned maintenance (PPM) includes both statutory requirements and recommended manufacturer servicing to prevent breakdowns and extend equipment life."
    },
    {
      question: "Who is legally responsible for statutory maintenance?",
      answer: "The building owner or 'responsible person' (duty holder) has ultimate legal accountability. This responsibility cannot be delegated away, even when using contractors or FM providers, though day-to-day delivery can be outsourced."
    },
    {
      question: "What happens if statutory maintenance is missed?",
      answer: "Missing statutory maintenance creates legal liability, insurance invalidation, HSE enforcement action, potential prosecution, and unlimited fines. In serious cases, building closures, prohibition notices, or charges under Corporate Manslaughter legislation may follow."
    },
    {
      question: "How do I prove compliance with statutory maintenance?",
      answer: "Maintain complete audit trails including: dated compliance certificates, engineer qualification records, service logs, photographic evidence, defect remediation documentation, and digital asset registers. These must be available for inspection by insurers, auditors, or regulators."
    },
    {
      question: "Can I do statutory maintenance myself?",
      answer: "No. Statutory maintenance must be carried out by qualified, competent professionals holding relevant certifications (Gas Safe, NICEIC, F-Gas, etc.). DIY or unqualified work invalidates compliance, creates liability, and breaches regulations."
    }
  ];

  const relatedInsights = [
    { title: "What is PPM?", link: "/fm-insights/what-is-ppm" },
    { title: "What is an EICR?", link: "/fm-insights/what-is-an-eicr" },
    { title: "What is ACOP L8?", link: "/fm-insights/what-is-acop-l8" }
  ];

  return (
    <>
      <Helmet>
        <title>What is Statutory Maintenance? | Legal Compliance Guide | EntireFM</title>
        <meta name="description" content="Understanding statutory maintenance obligations: legal compliance requirements every responsible person must uphold to avoid prosecution, fines, and safety breaches." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              What is Statutory Maintenance?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Legal compliance every responsible person must uphold.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Statutory maintenance refers to the legally mandated inspections, testing, and servicing of building systems and equipment required under UK health, safety, and environmental legislation. These are not optional recommendations — they are regulatory obligations enforceable by law.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Failure to comply creates direct legal liability, insurance invalidation, and potentially catastrophic safety consequences. Statutory maintenance forms the non-negotiable baseline of responsible building management.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Key Statutory Maintenance Requirements
              </h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <FileCheck className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Electrical Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>EICRs (Electrical Installation Condition Reports):</strong> Every 5 years for commercial premises</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Emergency lighting:</strong> Monthly function tests, annual full-duration tests</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>PAT testing:</strong> Risk-based frequencies for portable appliances</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Legislation: Electricity at Work Regulations 1989</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <AlertTriangle className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Fire Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fire alarm systems:</strong> Weekly tests, 6-monthly servicing, annual certification</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fire extinguishers:</strong> Annual servicing by competent persons</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fire risk assessments:</strong> Regular reviews, updated after building changes</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Legislation: Regulatory Reform (Fire Safety) Order 2005</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Gas & HVAC Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Gas safety inspections:</strong> Annual checks by Gas Safe registered engineers</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>F-Gas compliance:</strong> Annual leak checks for refrigeration systems over 5 tonnes CO₂e</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>TM44 AC inspections:</strong> Every 5 years for systems over 12kW cooling capacity</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Legislation: Gas Safety Regulations, F-Gas Regulations, Energy Performance Regulations</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Scale className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Water Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Legionella control (ACOP L8):</strong> Risk assessments, monthly temperature checks, water sampling</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Drinking water compliance:</strong> Private water supply monitoring where applicable</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>TMV servicing:</strong> Annual testing of thermostatic mixing valves</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Legislation: Health and Safety at Work Act 1974, Control of Substances Hazardous to Health Regulations</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Legal responsibility for statutory maintenance rests with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building owners:</strong> Ultimate duty holders under health and safety law</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Employers:</strong> Responsible for employee and visitor safety in occupied premises</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Landlords:</strong> Obligations under lease agreements and regulatory requirements</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Responsible persons:</strong> Those in control of premises (facilities managers, directors)</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                <strong>Critical:</strong> Legal responsibility cannot be delegated. While delivery can be outsourced to contractors, the duty holder remains accountable for compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                To maintain statutory compliance, responsible persons must:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Identify all statutory maintenance obligations applicable to the premises</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Implement compliance schedules meeting regulatory frequencies</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Appoint qualified, competent engineers (Gas Safe, NICEIC, F-Gas registered)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain complete audit trails: certificates, service logs, defect records</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Remediate identified defects within appropriate timeframes</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Update records following building alterations or system changes</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Provide documentation to insurers, auditors, and regulators on request</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Statutory maintenance frequencies are set by legislation and industry standards:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Weekly:</strong> Fire alarm tests, visual building checks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Monthly:</strong> Emergency lighting function tests, legionella temperature monitoring</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>6-monthly:</strong> Fire alarm system servicing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Annually:</strong> Gas safety checks, fire extinguisher servicing, F-Gas leak checks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Every 3 years:</strong> Emergency lighting full-duration tests</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Every 5 years:</strong> Electrical installation condition reports (EICR), TM44 AC inspections</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                <strong>Note:</strong> These are minimum requirements. Risk assessments may necessitate more frequent testing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Failing to meet statutory maintenance obligations creates severe consequences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Criminal prosecution:</strong> HSE enforcement action under health and safety legislation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No financial cap on penalties for serious breaches</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for serious safety failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter charges:</strong> If death results from gross negligence</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected due to non-compliance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building closures:</strong> Prohibition notices halting operations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Director disqualification:</strong> Personal liability for company directors</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Reputational destruction:</strong> Public safety incidents and regulatory failures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver statutory maintenance programmes designed for compliance certainty and legal defensibility. Our approach includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Comprehensive compliance audits identifying all statutory obligations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital scheduling with automatic alerts preventing missed deadlines</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Qualified engineers holding relevant certifications (Gas Safe, NICEIC, F-Gas)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Complete certification management with accessible audit trails</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Defect tracking and remediation governance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site compliance oversight ensuring consistent standards</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                We don't deliver maintenance theatre. We deliver provable compliance that withstands regulatory scrutiny.
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
              <h3 className="text-2xl font-light mb-4">Ensure Statutory Compliance</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a compliance audit and statutory maintenance proposal.
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

export default WhatIsStatutoryMaintenance;
