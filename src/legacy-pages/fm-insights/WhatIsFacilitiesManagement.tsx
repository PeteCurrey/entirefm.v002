"use client";

;
import Link from "next/link";
import { ArrowRight, Building2, Users, Shield, FileCheck } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DynamicYouMayAlsoNeed } from "@/components/shared/DynamicYouMayAlsoNeed";

const WhatIsFacilitiesManagement = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "What is Facilities Management?" }
  ];

  const faqs = [
    {
      question: "What does a facilities manager do?",
      answer: "A facilities manager oversees all aspects of building maintenance, compliance, safety, and operational efficiency. They ensure statutory obligations are met, coordinate contractors, manage budgets, and maintain safe, productive environments for occupants."
    },
    {
      question: "What is the difference between hard FM and soft FM?",
      answer: "Hard FM covers technical building services like electrical, HVAC, plumbing, and fire safety systems. Soft FM includes services like cleaning, security, catering, and waste management that support daily operations and user experience."
    },
    {
      question: "Is facilities management legally required?",
      answer: "While the role itself isn't mandated by law, the responsibilities it covers are. Buildings must comply with health and safety legislation, fire safety orders, electrical regulations, and other statutory requirements that facilities managers typically oversee."
    },
    {
      question: "What qualifications do you need for facilities management?",
      answer: "Professional qualifications include IWFM (Institute of Workplace and Facilities Management) certifications, NEBOSH for health and safety, and IOSH Managing Safely. Experience in building services, compliance, and contractor management is equally valuable."
    },
    {
      question: "How much does facilities management cost?",
      answer: "Costs vary based on building size, complexity, service scope, and contract type. Typical models include planned preventative maintenance contracts, reactive-only coverage, or fully managed service agreements. Request a proposal for accurate pricing based on your specific requirements."
    }
  ];

  const relatedInsights = [
    { title: "What is Hard FM?", link: "/fm-insights/what-is-hard-fm" },
    { title: "What is Soft FM?", link: "/fm-insights/what-is-soft-fm" },
    { title: "What is Statutory Maintenance?", link: "/fm-insights/what-is-statutory-maintenance" }
  ];

  return (
    <>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
              What is Facilities Management?
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              A comprehensive guide for estate managers and duty holders.
            </p>
          </header>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Does It Mean?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Facilities management (FM) is the strategic coordination of people, place, process, and technology to ensure buildings operate safely, efficiently, and compliantly. It encompasses everything from statutory maintenance and repair to environmental comfort and operational continuity.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                At its core, FM exists to protect occupants, preserve assets, and support business objectives through proactive building stewardship.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Who Is Responsible?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Legal responsibility typically falls on:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Building2 className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-foreground font-light"><strong>Building owners</strong> — ultimate duty holders under health and safety law</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-foreground font-light"><strong>Responsible persons</strong> — those managing or controlling premises</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-foreground font-light"><strong>Facilities managers</strong> — professionals implementing compliance and maintenance strategies</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-foreground font-light"><strong>FM providers</strong> — third-party specialists delivering services under contract</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Must Be Done?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Facilities management obligations include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">Hard FM Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Electrical compliance & testing</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>HVAC maintenance & servicing</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Fire safety systems</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Water hygiene management</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Gas safety & F-Gas compliance</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Building fabric repairs</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-3">Soft FM Services</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Cleaning & hygiene</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Security & access control</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Waste management</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Grounds maintenance</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Reception & front-of-house</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>Catering services</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How Often Is It Required?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Facilities management is continuous, but specific tasks follow regulated or recommended intervals:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Daily:</strong> Building checks, security patrols, cleaning schedules</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Monthly:</strong> Emergency lighting tests, fire alarm tests, water temperature monitoring</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Quarterly:</strong> HVAC filter changes, legionella risk reviews</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Annually:</strong> Gas safety checks, fire risk assessments, F-Gas inspections, TM44 AC inspections</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Every 5 years:</strong> Fixed wire electrical testing (EICR), fire alarm system inspections</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What Are the Risks of Non-Compliance?
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Inadequate facilities management creates serious liabilities:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Legal prosecution:</strong> Health and Safety Executive (HSE) enforcement action</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Unlimited fines:</strong> Corporate Manslaughter and Corporate Homicide Act 2007</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Insurance invalidation:</strong> Claims rejected due to poor maintenance records</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Operational disruption:</strong> Breakdowns, evacuations, business interruption</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Reputational damage:</strong> Public safety incidents and regulatory failures</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span><strong>Asset degradation:</strong> Increased long-term repair costs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                How EntireFM Assists
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                We deliver disciplined, auditable facilities management across commercial, industrial, and residential estates. Our approach combines:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Centralised compliance governance and certification management</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Qualified engineers delivering statutory maintenance to schedule</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Digital job tracking with complete audit trails</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>24/7 reactive response with transparent SLA reporting</li>
                <li className="flex items-start"><span className="text-primary mr-2">•</span>Supplier governance ensuring consistent standards nationwide</li>
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-4">
                No operational theatrics. Just reliable stewardship that keeps buildings safe, compliant, and running.
              </p>
            </section>

            {/* FAQ Section */}
            <FAQSection faqs={faqs} />
          </article>
        </div>
      </div>

      <DynamicYouMayAlsoNeed pageType="fm-insights" currentPageUrl="/fm-insights/what-is-facilities-management" />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <article>
            {/* Related Insights */}
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
          </article>
        </div>
      </div>

      <DynamicYouMayAlsoNeed pageType="fm-insights" currentPageUrl="/fm-insights/what-is-facilities-management" />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <article>
            {/* CTA */}
            <Card className="p-8 bg-muted/30 text-center">
              <h3 className="text-2xl font-light mb-4">Need Comprehensive FM Support?</h3>
              <p className="text-muted-foreground font-light mb-6">
                Request a proposal for tailored facilities management services.
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

export default WhatIsFacilitiesManagement;
