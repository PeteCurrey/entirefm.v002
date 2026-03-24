"use client";

;
import Link from "next/link";
import { ArrowRight, Zap, Wind, Droplet, Flame } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsHardFM = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is Hard FM?" }
  ];

  const faqs = [
    {
      question: "What is the difference between hard FM and soft FM?",
      answer: "Hard FM covers technical building services and infrastructure — electrical systems, HVAC, plumbing, fire safety, and structural maintenance. Soft FM includes non-technical services like cleaning, security, catering, and reception that support daily operations."
    },
    {
      question: "What services are included in hard FM?",
      answer: "Hard FM typically includes electrical compliance, HVAC maintenance, plumbing and drainage, fire alarm systems, emergency lighting, gas safety, water hygiene, lift maintenance, building fabric repairs, and statutory testing programmes."
    },
    {
      question: "Who is responsible for hard FM compliance?",
      answer: "The building owner or responsible person (duty holder) has legal responsibility. This is often delegated to facilities managers who coordinate qualified engineers and contractors to deliver compliant maintenance programmes."
    },
    {
      question: "How often should hard FM maintenance be carried out?",
      answer: "Frequencies vary by system and regulation. Common intervals include: monthly emergency lighting tests, quarterly HVAC filter changes, annual gas safety checks, and 5-yearly electrical inspections (EICRs). Planned preventative maintenance (PPM) schedules ensure compliance."
    },
    {
      question: "What happens if hard FM is neglected?",
      answer: "Neglecting hard FM creates safety hazards, regulatory breaches, insurance invalidation, operational breakdowns, and potential prosecution. Critical system failures can result in building closures, HSE enforcement action, and unlimited fines under health and safety legislation."
    }
  ];

  const relatedInsights = [
    { title: "What is Facilities Management?", link: "/fm-insights/what-is-facilities-management" },
    { title: "What is PPM?", link: "/fm-insights/what-is-ppm" },
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" }
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
              What is Hard FM?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              The critical maintenance that keeps buildings safe and compliant.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Hard FM refers to the technical, engineering-led services that maintain a building's physical infrastructure and critical systems. It encompasses electrical installations, mechanical plant, fire safety equipment, water systems, gas networks, and structural fabric.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                These are the services that prevent catastrophic failure, ensure statutory compliance, and protect occupant safety through disciplined engineering practice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Core Hard FM Disciplines
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Electrical Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Fixed wire testing (EICR)</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Emergency lighting compliance</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Distribution board maintenance</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>PAT testing programmes</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Wind className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">HVAC & Mechanical</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Heating and cooling systems</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Ventilation and air quality</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>F-Gas compliance (refrigerants)</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>TM44 AC inspections</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Flame className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Fire Safety Systems</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Fire alarm testing & maintenance</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Sprinkler system compliance</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Fire door inspections</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Smoke ventilation systems</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <Droplet className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-medium mb-3">Water & Gas Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Legionella control (ACOP L8)</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Water temperature monitoring</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Gas safety inspections</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Plumbing & drainage maintenance</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Hard FM responsibilities rest with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Duty holders:</strong> Building owners legally obligated to maintain safe premises</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities managers:</strong> Professionals coordinating compliance programmes</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Qualified engineers:</strong> Gas Safe, NICEIC, HVCA registered specialists</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>FM providers:</strong> Third-party contractors delivering managed services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Hard FM obligations are defined by statutory regulations and industry standards:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Implement planned preventative maintenance (PPM) schedules</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Conduct statutory inspections and testing to regulatory deadlines</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain complete audit trails and compliance certificates</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Deploy qualified, competent engineers for all technical work</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Provide 24/7 reactive response for critical system failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Update asset registers and maintenance histories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Maintenance frequencies vary by system and regulation:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Weekly:</strong> Fire alarm system tests</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Monthly:</strong> Emergency lighting function tests, legionella temperature checks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Quarterly:</strong> HVAC filter changes, water system flushing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Annually:</strong> Gas safety certificates, F-Gas inspections, TM44 AC reports</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Every 3 years:</strong> Emergency lighting full-duration tests</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Every 5 years:</strong> Electrical installation condition reports (EICR)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Failures in hard FM create immediate and severe consequences:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Safety incidents:</strong> Electrical fires, gas leaks, legionella outbreaks, system failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Legal prosecution:</strong> HSE enforcement, improvement notices, prohibition orders</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Financial penalties:</strong> Unlimited fines under health and safety legislation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance voidance:</strong> Claims rejected due to inadequate maintenance records</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Business disruption:</strong> Building closures, evacuation orders, operational shutdowns</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Asset deterioration:</strong> Accelerated wear and costly emergency repairs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver structured hard FM programmes that prioritise compliance certainty and operational reliability. Our approach includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Directly employed and vetted specialist engineers</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital PPM scheduling with automatic compliance alerts</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Complete certification management and audit trail documentation</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>24/7 reactive response with transparent SLA reporting</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Multi-site governance ensuring consistent standards nationwide</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                Quiet discipline. Rigorous engineering. Zero excuses.
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
              <h3 className="text-2xl font-light mb-4">Need Hard FM Support?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for comprehensive technical building services.
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

export default WhatIsHardFM;
