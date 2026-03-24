"use client";

;
import Link from "next/link";
import { ArrowRight, Wind, FileCheck, TrendingDown } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatIsATM44 = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is a TM44?" }
  ];

  const faqs = [
    {
      question: "When is a TM44 inspection required?",
      answer: "TM44 inspections are required every 5 years for air conditioning systems with a combined cooling capacity exceeding 12kW. This applies to commercial, industrial, and public buildings in England and Wales."
    },
    {
      question: "What happens if I don't get a TM44 inspection?",
      answer: "Failure to comply with TM44 regulations can result in fines of up to £300 for systems under 250kW and up to £1,000 for larger systems. Local authorities enforce compliance and can issue penalty notices."
    },
    {
      question: "Who can carry out a TM44 inspection?",
      answer: "Only energy assessors holding Level 4 or 5 qualifications in Air Conditioning Inspection can perform TM44 assessments. They must be registered with an approved accreditation scheme."
    },
    {
      question: "Is TM44 the same as F-Gas compliance?",
      answer: "No. TM44 assessments focus on energy efficiency and system optimization. F-Gas regulations cover refrigerant leak detection and environmental compliance. Both are legally required but serve different purposes."
    },
    {
      question: "How long does a TM44 inspection take?",
      answer: "Inspections typically take 2-4 hours depending on system complexity and size. The assessor will examine equipment, review maintenance records, and provide an efficiency report with improvement recommendations."
    }
  ];

  const relatedInsights = [
    { title: "What is F-Gas Compliance?", link: "/fm-insights/what-is-f-gas-compliance" },
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
              What is a TM44 Air Conditioning Inspection?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Energy compliance obligations for large AC systems.
            </p>
          </header>

          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                TM44 refers to the air conditioning energy efficiency inspection regime required under the Energy Performance of Buildings Regulations 2012. Buildings with air conditioning systems exceeding 12kW combined cooling capacity must undergo independent assessments every 5 years.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                The inspection evaluates system efficiency, identifies improvement opportunities, and ensures compliance with energy performance obligations. It's not optional — it's a legal requirement with financial penalties for non-compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Building owners:</strong> Ultimate responsibility for compliance</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Occupiers:</strong> May hold obligations under lease terms</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Facilities managers:</strong> Coordinating inspections and implementing recommendations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Commission TM44 inspections every 5 years for systems over 12kW</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Engage qualified Level 4/5 energy assessors</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Provide access to all AC equipment and maintenance records</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Review inspection reports and efficiency recommendations</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Retain certificates for regulatory compliance evidence</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                TM44 inspections must be completed every 5 years for qualifying systems. The inspection cycle begins when the system first exceeds 12kW capacity or when a building changes use.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Financial penalties:</strong> Up to £1,000 for larger systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Energy inefficiency:</strong> Higher operational costs from poorly optimized systems</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Environmental impact:</strong> Excessive carbon emissions</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>ESG reporting failures:</strong> Non-compliance affecting sustainability credentials</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We coordinate TM44 compliance through qualified energy assessors and implement efficiency recommendations through our HVAC engineers. Our service includes inspection scheduling, report management, and improvement implementation to optimize performance and reduce energy costs.
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
              <h3 className="text-2xl font-light mb-4">Need TM44 Compliance Support?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for TM44 inspections and HVAC optimization.
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

export default WhatIsATM44;
