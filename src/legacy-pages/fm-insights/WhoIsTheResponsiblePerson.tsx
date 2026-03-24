"use client";

;
import Link from "next/link";
import { ArrowRight, User, Scale, Shield } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhoIsTheResponsiblePerson = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "Who is the Responsible Person?" }
  ];

  const faqs = [
    {
      question: "Who is the responsible person under fire safety law?",
      answer: "The responsible person is the individual or organization with control over premises: building owners, employers, landlords, or managing agents. They have legal duty under the Regulatory Reform (Fire Safety) Order 2005 to ensure fire safety compliance."
    },
    {
      question: "Can the responsible person delegate their duties?",
      answer: "Duties can be delegated to competent persons (facilities managers, fire wardens), but legal accountability cannot be transferred. The responsible person remains liable for fire safety failures even when tasks are outsourced."
    },
    {
      question: "What are the responsibilities of the responsible person?",
      answer: "Conduct fire risk assessments, implement control measures, maintain fire safety systems, provide staff training, establish evacuation procedures, keep records, and regularly review arrangements. They must ensure occupant safety at all times."
    },
    {
      question: "Who is the responsible person in shared buildings?",
      answer: "Multiple responsible persons may exist: building owner for common areas, individual tenants for their spaces, managing agent for contracted services. Each holds duties for areas under their control, requiring coordination and clear documentation."
    },
    {
      question: "What are the penalties for responsible person failures?",
      answer: "Unlimited fines, imprisonment up to 2 years, prohibition notices, and potential Corporate Manslaughter charges if death occurs. Personal liability means directors and senior managers can face criminal prosecution for fire safety failures."
    }
  ];

  const relatedInsights = [
    { title: "How Often Should Fire Alarms Be Tested?", link: "/fm-insights/how-often-should-fire-alarms-be-tested" },
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" },
    { title: "What Certificates Are Required?", link: "/fm-insights/what-certificates-are-required-for-a-commercial-building" }
  ];

  return (
    <>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              Who is the Responsible Person?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Understanding legal accountability under fire safety law.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-muted-foreground font-light leading-relaxed">
                Fire safety law doesn't work on vague obligations or collective responsibility. The Regulatory Reform (Fire Safety) Order 2005 explicitly identifies "the responsible person" — a defined legal role carrying personal accountability for fire safety compliance. If you control premises where people work, visit, or reside, you likely hold this duty. Ignorance is not a defense. Understanding who holds this role and what it demands is fundamental to avoiding prosecution, protecting occupants, and maintaining legal buildings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does This Requirement Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                The responsible person is not a job title — it's a legal designation under Article 3 of the Fire Safety Order. This person (or organization) has control over premises and therefore duty to ensure fire safety compliance. The role carries enforceable obligations and personal criminal liability for failures.
              </p>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <User className="w-5 h-5 text-primary mr-2" />
                    Who Qualifies as Responsible Person?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Employers:</strong> For workplaces where employees are present</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building owners:</strong> For premises they own or control</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Landlords:</strong> For rental properties and common areas</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Managing agents:</strong> If contractually responsible for fire safety</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Any person in control:</strong> Whoever has authority over premises</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3 flex items-center">
                    <Scale className="w-5 h-5 text-primary mr-2" />
                    Can There Be Multiple Responsible Persons?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Yes. In multi-occupancy buildings or complex estates, several individuals may hold responsible person duties for different areas or functions. Each must coordinate with others and maintain clear boundaries of responsibility.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Example:</strong> In a shopping center — the building owner is responsible for common areas, each retailer for their unit, and the managing agent for contracted services.
                  </p>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Core Duties of the Responsible Person
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Conduct fire risk assessments:</strong> Regular evaluations identifying hazards and implementing controls</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Implement fire safety measures:</strong> Alarm systems, emergency lighting, evacuation routes, fire fighting equipment</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Maintain fire safety systems:</strong> Regular testing, servicing, and certification of all fire protection equipment</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Establish emergency procedures:</strong> Evacuation plans, fire warden appointments, assembly points</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Provide staff training:</strong> Fire awareness, evacuation procedures, equipment use</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Keep records:</strong> Risk assessments, test logs, certificates, training records, incident reports</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Review arrangements:</strong> Regular reviews ensuring continued adequacy and compliance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Cooperate with others:</strong> Coordinate with other responsible persons in shared premises</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Can Responsibilities Be Delegated?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Tasks can be delegated to competent persons — facilities managers, fire safety advisors, maintenance contractors — but legal accountability cannot be transferred. The responsible person remains criminally liable for fire safety failures even when work is outsourced.
              </p>
              <Card className="p-6 bg-muted/30">
                <h3 className="text-lg font-medium mb-3">Critical Principle</h3>
                <p className="text-sm text-muted-foreground">
                  Employing an FM provider, fire safety consultant, or facilities manager does not remove your status as responsible person. You retain legal duty to ensure competent delivery and can face prosecution for their failures. Choose contractors carefully and maintain oversight.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Applicable Legislation
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory Reform (Fire Safety) Order 2005:</strong> Primary legislation defining responsible person duties</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fire Safety Act 2021:</strong> Extended responsible person duties in multi-occupied residential buildings</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building Safety Act 2022:</strong> Additional obligations for high-rise residential buildings</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Health and Safety at Work Act 1974:</strong> General duty of care for occupants and visitors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Risks and Penalties of Failure
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Personal criminal liability:</strong> Responsible persons face prosecution in their individual capacity</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No financial cap for fire safety breaches</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for serious failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Prohibition notices:</strong> Building closure orders until compliance demonstrated</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter charges:</strong> If death results from gross negligence</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Director disqualification:</strong> Removal from company positions</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Civil claims:</strong> Personal injury lawsuits from affected parties</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Reputational destruction:</strong> Public record of fire safety failures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Ensures Asset Certainty
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We support responsible persons through systematic fire safety governance and compliance delivery:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Fire risk assessment coordination and action plan implementation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Statutory testing and maintenance of all fire safety systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Complete documentation management and audit trail maintenance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site compliance oversight ensuring consistent standards</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Competent person appointment for delegated fire safety duties</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                We don't remove your responsible person status — we deliver the compliance systems that protect you from prosecution.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Related Insights
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedInsights.map((insight) => (
                  <Link key={insight.link} href={insight.link}>
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
              <h3 className="text-2xl font-light mb-4">Need Fire Safety Support?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for comprehensive fire safety compliance services.
              </p>
              <Button asChild size="lg">
                <Link href="/request-proposal">
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

export default WhoIsTheResponsiblePerson;
