"use client";

;
import Link from "next/link";
import { Building2, CheckCircle, ArrowRight, Layers, Users, TrendingUp, Shield, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";

const WhatIsTFM = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "FM Insights", path: "/fm-insights" },
    { label: "What Is Total Facilities Management (TFM)?", path: "/fm-insights/what-is-tfm" },
  ];

  const faqs = [
    {
      question: "What is Total Facilities Management (TFM)?",
      answer: "Total Facilities Management is an integrated service delivery model where a single provider takes full responsibility for all FM services across a portfolio, including Hard FM, Soft FM, and specialist engineering, delivered through a unified management structure."
    },
    {
      question: "How does TFM differ from bundled FM contracts?",
      answer: "While bundled contracts group multiple services under one agreement, TFM goes further by integrating all services under unified governance, shared KPIs, single-point accountability, and often includes risk transfer and outcome-based performance measures."
    },
    {
      question: "What are the benefits of Total Facilities Management?",
      answer: "Key benefits include reduced administrative burden, single-point accountability, cost efficiencies through economies of scale, consistent service standards, streamlined reporting, improved compliance management, and strategic partnership rather than transactional relationships."
    },
    {
      question: "Is TFM suitable for all organisations?",
      answer: "TFM works best for organisations with multi-site portfolios, complex service requirements, or those seeking to reduce internal FM management overhead. Smaller single-site operations may benefit more from individual service contracts or managing agent models."
    },
    {
      question: "How does EntireFM deliver TFM services?",
      answer: "EntireFM operates as an Intelligent Client managing TFM delivery through our vetted supply chain. We provide unified governance, performance management, compliance oversight, and strategic FM leadership while coordinating specialist contractors for all service categories."
    }
  ];

  const tfmBenefits = [
    {
      icon: Users,
      title: "Single Point of Contact",
      description: "One account manager, one helpdesk, one escalation route for all FM matters"
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Economies of scale, reduced procurement costs, and optimised resource deployment"
    },
    {
      icon: Shield,
      title: "Risk Transfer",
      description: "Contractual accountability for compliance, service delivery, and operational outcomes"
    },
    {
      icon: Clock,
      title: "Reduced Admin Burden",
      description: "Consolidated invoicing, single contract, streamlined governance"
    },
    {
      icon: Layers,
      title: "Integrated Service Delivery",
      description: "Coordinated scheduling, shared resources, and unified quality standards"
    },
    {
      icon: FileText,
      title: "Comprehensive Reporting",
      description: "Single dashboard for all FM metrics, compliance status, and performance KPIs"
    }
  ];

  const serviceCategories = [
    {
      category: "Hard FM Services",
      services: ["Mechanical & Electrical Maintenance", "HVAC Systems", "Building Fabric Repairs", "Planned Preventive Maintenance", "Reactive Repairs"]
    },
    {
      category: "Soft FM Services",
      services: ["Cleaning & Hygiene", "Security Services", "Reception & Front of House", "Catering & Vending", "Waste Management"]
    },
    {
      category: "Specialist Engineering",
      services: ["Fire Systems Maintenance", "Lift & Escalator Services", "High Voltage Systems", "Building Management Systems", "Water Treatment"]
    },
    {
      category: "Strategic Services",
      services: ["Energy Management", "Space Planning", "Project Management", "Sustainability Initiatives", "Asset Lifecycle Planning"]
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">FM Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Is Total Facilities Management (TFM)?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Total Facilities Management represents the evolution of FM service delivery—integrating all building services under unified governance for streamlined operations and strategic value.
            </p>
          </header>

          {/* Definition Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Definition</h2>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Total Facilities Management (TFM)</strong> is an integrated service delivery model where a single provider assumes complete responsibility for all facilities management services across a client's portfolio. This encompasses Hard FM, Soft FM, specialist engineering, and strategic services—delivered through unified management, shared KPIs, and single-point accountability.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* How TFM Differs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How TFM Differs from Other Models</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">Individual Contracts</h3>
                    <p className="text-sm text-muted-foreground">Separate contracts for each service. Multiple suppliers, multiple invoices, fragmented governance. Client retains all coordination responsibility.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">Bundled FM</h3>
                    <p className="text-sm text-muted-foreground">Multiple services grouped under one contract but often still siloed in delivery. Coordination improved but not fully integrated.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-primary mb-2">Total FM (TFM)</h3>
                    <p className="text-sm text-muted-foreground">All services integrated under unified governance, shared performance metrics, outcome-based delivery, and strategic partnership.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Services Included Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">What TFM Typically Includes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceCategories.map((cat, index) => (
                <Card key={index}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-3">{cat.category}</h3>
                    <ul className="space-y-2">
                      {cat.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Benefits of Total Facilities Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tfmBenefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <benefit.icon className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* When TFM Makes Sense Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">When TFM Makes Sense</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">TFM is particularly effective for organisations that:</p>
                <ul className="space-y-3">
                  {[
                    "Operate multi-site portfolios requiring consistent service standards",
                    "Want to reduce internal FM management overhead and administrative burden",
                    "Seek strategic partnership rather than transactional supplier relationships",
                    "Need unified compliance governance across diverse service categories",
                    "Require consolidated reporting and single-point accountability",
                    "Are looking to transfer operational risk to a capable provider"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* How EntireFM Delivers TFM */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How EntireFM Delivers TFM</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  EntireFM operates as an <strong className="text-foreground">Intelligent Client</strong>, delivering TFM through our vetted national supply chain. Our model provides:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Unified governance and performance management",
                    "Single contract with consolidated invoicing",
                    "24/7 helpdesk and reactive response coordination",
                    "Compliance oversight and audit management",
                    "Strategic FM leadership and continuous improvement",
                    "Transparent reporting via client portal"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Insights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Related Insights</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/fm-insights/hard-fm-vs-soft-fm" className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Hard FM vs Soft FM vs Specialist Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground">Understanding the differences between FM service categories.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/fm-insights/what-is-hard-fm" className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      What Is Hard FM?
                    </h3>
                    <p className="text-sm text-muted-foreground">Core disciplines, compliance requirements, and statutory obligations.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/fm-insights/what-is-soft-fm" className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      What Is Soft FM?
                    </h3>
                    <p className="text-sm text-muted-foreground">People-focused services that support workplace experience.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Request an FM Strategy Review</h2>
                <p className="mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
                  Explore how Total Facilities Management could transform your FM operations. Our team will assess your portfolio and recommend the optimal service delivery model.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/request-proposal">
                    Request Strategy Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
};

export default WhatIsTFM;
