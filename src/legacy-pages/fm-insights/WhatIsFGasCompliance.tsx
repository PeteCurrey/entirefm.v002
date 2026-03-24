"use client";

;
import Link from "next/link";
import { ArrowRight, Wind, Leaf, FileCheck } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsFGasCompliance = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is F-Gas Compliance?" }
  ];

  const faqs = [
    {
      question: "What are F-Gases and why are they regulated?",
      answer: "F-Gases (fluorinated gases) are synthetic greenhouse gases used in refrigeration and air conditioning. They have extremely high global warming potential — thousands of times greater than CO₂. EU and UK regulations control their use to reduce environmental damage."
    },
    {
      question: "Which systems require F-Gas compliance?",
      answer: "All refrigeration and air conditioning equipment containing HFCs, PFCs, or SF6 gases. This includes: office AC units, retail chillers, industrial refrigeration, heat pumps, and commercial cooling systems. Compliance obligations apply regardless of system size."
    },
    {
      question: "Who can work on F-Gas systems?",
      answer: "Only F-Gas certified engineers holding valid Category 1 certificates can install, maintain, repair, or decommission equipment containing regulated gases. Companies must also hold F-Gas company certifications to perform this work legally."
    },
    {
      question: "How often must F-Gas systems be checked?",
      answer: "Leak checking frequencies depend on CO₂ equivalent charge: under 5 tonnes CO₂e = no requirement, 5-50 tonnes = annually, 50-500 tonnes = every 6 months, over 500 tonnes = quarterly. Systems with leak detection devices may have reduced frequencies."
    },
    {
      question: "What are the penalties for F-Gas non-compliance?",
      answer: "Unlimited fines for serious breaches, plus environmental damage liability. Using non-certified engineers, failing to conduct leak checks, poor record-keeping, and illegal venting all create prosecution risk. Repeat offenders face prohibition orders."
    }
  ];

  const relatedInsights = [
    { title: "What is a TM44?", link: "/fm-insights/what-is-a-tm44" },
    { title: "What is PPM?", link: "/fm-insights/what-is-ppm" },
    { title: "What is Hard FM?", link: "/fm-insights/what-is-hard-fm" }
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
              What is F-Gas Compliance?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Environmental and legal responsibility for refrigerant systems.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                F-Gas compliance refers to legal obligations under the Fluorinated Greenhouse Gases Regulations 2015, controlling the use, maintenance, and disposal of synthetic refrigerant gases in cooling and heating systems. These regulations aim to reduce environmental damage from high global-warming-potential gases.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Building owners and operators must ensure F-Gas equipment is leak-checked, maintained by certified engineers, and properly documented. Non-compliance creates environmental liability and regulatory prosecution risk.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Equipment operators:</strong> Building owners, facilities managers responsible for systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>F-Gas certified engineers:</strong> Only Category 1 certificate holders can work on systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Certified companies:</strong> Contractors must hold F-Gas company certifications</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Environmental regulators:</strong> Environment Agency enforces compliance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Maintain equipment registers with gas types and quantities</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Conduct leak checks at statutory frequencies based on CO₂ equivalent charge</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Use only F-Gas certified engineers for installation, maintenance, and repairs</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Keep detailed records: leak checks, gas top-ups, repairs, decommissioning</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Report annual F-Gas emissions to environmental authorities</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Ensure proper gas recovery during servicing and disposal</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Address detected leaks within 30 days and verify repairs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Leak check frequencies are determined by system size (CO₂ equivalent charge):
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Under 5 tonnes CO₂e:</strong> No statutory leak checking requirement</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>5 to 50 tonnes CO₂e:</strong> Annual leak checks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>50 to 500 tonnes CO₂e:</strong> 6-monthly leak checks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Over 500 tonnes CO₂e:</strong> Quarterly leak checks</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>With leak detection systems:</strong> Frequencies may be reduced (annual, 6-monthly, 6-monthly respectively)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Environmental damage:</strong> Significant greenhouse gas emissions contributing to climate change</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Regulatory prosecution:</strong> Environment Agency enforcement action</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> Serious breaches attracting substantial penalties</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>ESG failures:</strong> Non-compliance damaging environmental credentials and reporting</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>System inefficiency:</strong> Refrigerant leaks reducing cooling performance and increasing energy costs</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance issues:</strong> Poor maintenance affecting claims</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver F-Gas compliance through qualified Category 1 certified engineers and systematic leak detection programmes. Our service includes equipment registers, scheduled leak checks, remediation tracking, emissions reporting, and complete documentation ensuring environmental and regulatory compliance.
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
              <h3 className="text-2xl font-light mb-4">Need F-Gas Compliance Support?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for F-Gas compliance and refrigeration maintenance.
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

export default WhatIsFGasCompliance;
