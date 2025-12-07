import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, AlertTriangle, FileCheck } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsACOPL8 = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is ACOP L8?" }
  ];

  const faqs = [
    {
      question: "What is legionella and why is it dangerous?",
      answer: "Legionella is bacteria that grows in water systems causing Legionnaires' disease — a potentially fatal pneumonia. Outbreaks occur when contaminated water droplets are inhaled. Building owners have legal duties to prevent legionella growth through proper water management."
    },
    {
      question: "Who is responsible for ACOP L8 compliance?",
      answer: "The duty holder (building owner, landlord, or employer) is legally responsible. They must appoint a competent responsible person to manage legionella control, conduct risk assessments, and implement monitoring programmes."
    },
    {
      question: "What does an ACOP L8 risk assessment involve?",
      answer: "Risk assessments identify potential legionella hazards in water systems: tanks, pipework, cooling towers, showers, and outlets. They evaluate water temperatures, stagnation risks, and control measures, resulting in a written scheme of control."
    },
    {
      question: "How often should legionella testing be done?",
      answer: "Monthly temperature monitoring is standard. Water sampling frequencies depend on risk levels: quarterly for high-risk systems, annually for lower-risk premises. Cooling towers require weekly checks. Risk assessments should be reviewed every 2 years or after system changes."
    },
    {
      question: "What are the penalties for ACOP L8 non-compliance?",
      answer: "Unlimited fines and up to 2 years imprisonment for serious breaches. If death occurs, Corporate Manslaughter charges may follow with unlimited fines and reputational destruction. HSE actively prosecutes legionella failures."
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
        <title>What is ACOP L8? | Legionella Control Guide | EntireFM</title>
        <meta name="description" content="Understanding ACOP L8 legionella compliance: water system safety obligations, risk assessments, and monitoring requirements for building owners and duty holders." />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              What is ACOP L8?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Legionella control for water system safety.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                ACOP L8 is the Approved Code of Practice: Legionnaires' disease — The control of legionella bacteria in water systems. Published by the Health and Safety Executive (HSE), it provides legal guidance on preventing legionella contamination in workplace water systems.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Compliance with ACOP L8 is not optional. Duty holders must assess risks, implement control measures, maintain records, and monitor water systems to prevent potentially fatal legionella outbreaks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Duty holders:</strong> Building owners, landlords, employers with control over premises</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Responsible person:</strong> Competent individual appointed to manage legionella control</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities managers:</strong> Implementing monitoring programmes and remedial actions</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Water treatment specialists:</strong> Conducting risk assessments and testing</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Conduct comprehensive legionella risk assessments</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Develop written scheme of control documenting control measures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Appoint competent responsible person for water safety management</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Implement monthly temperature monitoring (hot water ≥50°C, cold ≤20°C)</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Conduct quarterly water sampling and microbiological testing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Clean and disinfect tanks, deadlegs, and little-used outlets</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain accurate records: temperatures, test results, remedial actions</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Review risk assessments every 2 years or after system changes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Monthly:</strong> Hot and cold water temperature monitoring at sentinel outlets</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Quarterly:</strong> Water sampling for legionella bacteria testing</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Annually:</strong> Tank inspections and system reviews</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Every 2 years:</strong> Full legionella risk assessment reviews</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>After changes:</strong> Risk reassessment following system alterations or building works</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Fatal disease:</strong> Legionnaires' disease causing death in 10-15% of cases</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Criminal prosecution:</strong> HSE enforcement under Health and Safety at Work Act</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> No financial cap for legionella breaches</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Imprisonment:</strong> Up to 2 years for duty holder failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Corporate Manslaughter:</strong> If death results from gross negligence</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Business closure:</strong> Prohibition notices halting water system use</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Reputational destruction:</strong> Public health incidents causing permanent damage</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver ACOP L8 compliance through specialist water treatment partners and systematic monitoring programmes. Our service includes comprehensive risk assessments, temperature monitoring schedules, water sampling coordination, remedial action tracking, and complete documentation management ensuring defensible legionella control.
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
              <h3 className="text-2xl font-light mb-4">Need Legionella Control Support?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for ACOP L8 compliance and water safety management.
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

export default WhatIsACOPL8;
