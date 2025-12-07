import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Building2, CheckCircle, ArrowRight, Layers, Users, TrendingUp, Shield, Handshake, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";

const WhatIsIFM = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "FM Insights", path: "/fm-insights" },
    { label: "What Is Integrated Facilities Management (IFM)?", path: "/fm-insights/what-is-ifm" },
  ];

  const faqs = [
    {
      question: "What is Integrated Facilities Management (IFM)?",
      answer: "Integrated Facilities Management is a bundled service delivery approach where multiple FM services are combined under a single contract and management structure, enabling coordinated delivery while maintaining flexibility in service scope."
    },
    {
      question: "How does IFM differ from TFM?",
      answer: "While TFM transfers complete FM responsibility to a single provider, IFM bundles selected services under integrated governance but may retain some services in-house or with separate specialists. IFM offers more flexibility, TFM offers more consolidation."
    },
    {
      question: "What are the benefits of Integrated Facilities Management?",
      answer: "Key benefits include coordinated service delivery, reduced supplier management overhead, improved communication between service lines, consistent quality standards, and the flexibility to include or exclude specific services based on organisational needs."
    },
    {
      question: "Is IFM suitable for organisations with in-house teams?",
      answer: "Yes, IFM is particularly well-suited to organisations that want to retain some FM capabilities in-house while outsourcing others. It provides a collaborative model that can work alongside internal teams rather than replacing them entirely."
    },
    {
      question: "How does EntireFM deliver IFM services?",
      answer: "EntireFM operates as an Intelligent Client delivering IFM through coordinated service bundles. We integrate multiple service lines under unified management while providing the flexibility to tailor scope to each client's specific requirements and existing capabilities."
    }
  ];

  const ifmBenefits = [
    {
      icon: Layers,
      title: "Bundled Service Delivery",
      description: "Multiple services coordinated under unified management for seamless operations"
    },
    {
      icon: Handshake,
      title: "Flexible Scope",
      description: "Include or exclude services based on your organisational needs and existing capabilities"
    },
    {
      icon: Users,
      title: "Collaborative Model",
      description: "Works alongside in-house teams rather than replacing internal FM capabilities"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Easily add or remove service lines as your portfolio and requirements evolve"
    },
    {
      icon: Shield,
      title: "Coordinated Compliance",
      description: "Unified governance ensures consistent standards across integrated services"
    },
    {
      icon: FileCheck,
      title: "Streamlined Reporting",
      description: "Consolidated performance metrics and reporting across bundled services"
    }
  ];

  const ifmVsTfmComparison = [
    {
      aspect: "Scope",
      ifm: "Selected services bundled together",
      tfm: "All FM services under one provider"
    },
    {
      aspect: "In-house Integration",
      ifm: "Can work alongside internal teams",
      tfm: "Typically replaces internal FM function"
    },
    {
      aspect: "Flexibility",
      ifm: "High - services can be added/removed",
      tfm: "Lower - comprehensive fixed scope"
    },
    {
      aspect: "Risk Transfer",
      ifm: "Partial - shared with client",
      tfm: "Complete - provider assumes full responsibility"
    },
    {
      aspect: "Best For",
      ifm: "Organisations wanting selective outsourcing",
      tfm: "Organisations wanting full FM delegation"
    }
  ];

  const typicalBundles = [
    {
      bundle: "Core M&E Bundle",
      services: ["HVAC Maintenance", "Electrical Systems", "Plumbing & Drainage", "Building Fabric", "Reactive Repairs"]
    },
    {
      bundle: "Compliance Bundle",
      services: ["Fire Safety Systems", "Emergency Lighting", "Water Hygiene", "Gas Safety", "Statutory Testing"]
    },
    {
      bundle: "Workplace Bundle",
      services: ["Cleaning Services", "Waste Management", "Grounds Maintenance", "Pest Control", "Window Cleaning"]
    },
    {
      bundle: "Critical Systems Bundle",
      services: ["Generator Maintenance", "UPS Systems", "High Voltage", "BMS Management", "Cooling Systems"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>What Is Integrated Facilities Management (IFM)? | EntireFM</title>
        <meta 
          name="description" 
          content="Learn about Integrated Facilities Management (IFM) - the bundled service delivery approach that combines selected FM services under unified management for coordinated operations." 
        />
        <meta name="keywords" content="integrated facilities management, IFM, bundled FM services, facilities management outsourcing, FM service bundles, coordinated FM delivery" />
        <link rel="canonical" href="https://entirefm.com/fm-insights/what-is-ifm" />
      </Helmet>

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
              What Is Integrated Facilities Management (IFM)?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Integrated Facilities Management combines selected FM services under unified governance, offering the benefits of coordination while maintaining flexibility in scope and delivery.
            </p>
          </header>

          {/* Definition Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Definition</h2>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Integrated Facilities Management (IFM)</strong> is a bundled service delivery model that combines multiple FM services under a single management structure and contract. Unlike Total Facilities Management which encompasses all FM services, IFM offers flexibility to select which services are integrated while potentially retaining others in-house or with separate specialists.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* IFM vs TFM Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">IFM vs TFM: Key Differences</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left font-semibold">Aspect</th>
                    <th className="border border-border p-3 text-left font-semibold text-primary">IFM</th>
                    <th className="border border-border p-3 text-left font-semibold">TFM</th>
                  </tr>
                </thead>
                <tbody>
                  {ifmVsTfmComparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="border border-border p-3 font-medium">{row.aspect}</td>
                      <td className="border border-border p-3 text-muted-foreground">{row.ifm}</td>
                      <td className="border border-border p-3 text-muted-foreground">{row.tfm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Typical Bundles Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Typical IFM Service Bundles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {typicalBundles.map((bundle, index) => (
                <Card key={index}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-3">{bundle.bundle}</h3>
                    <ul className="space-y-2">
                      {bundle.services.map((service, idx) => (
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
            <h2 className="text-2xl font-semibold text-foreground mb-6">Benefits of Integrated Facilities Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ifmBenefits.map((benefit, index) => (
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

          {/* When IFM Makes Sense Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">When IFM Is the Right Choice</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">IFM is particularly effective for organisations that:</p>
                <ul className="space-y-3">
                  {[
                    "Want to outsource selected services while retaining others in-house",
                    "Have competent internal FM teams but need specialist support in certain areas",
                    "Require flexibility to adjust scope as the portfolio evolves",
                    "Prefer collaborative partnerships over full delegation",
                    "Are transitioning from fragmented contracts and want a phased approach",
                    "Need coordinated delivery but want to maintain direct control over critical services"
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

          {/* How EntireFM Delivers IFM */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How EntireFM Delivers IFM</h2>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  EntireFM operates as an <strong className="text-foreground">Intelligent Client</strong>, delivering IFM through coordinated service bundles tailored to your specific requirements:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Bespoke bundle configuration to match your needs",
                    "Unified helpdesk for all integrated services",
                    "Seamless coordination with your in-house teams",
                    "Flexible contract structures with add/remove options",
                    "Consolidated reporting across bundled services",
                    "Scalable model that grows with your portfolio"
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
              <Link to="/fm-insights/what-is-tfm" className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      What Is Total Facilities Management (TFM)?
                    </h3>
                    <p className="text-sm text-muted-foreground">Complete FM outsourcing under single-point accountability.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/fm-insights/hard-fm-vs-soft-fm" className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Hard FM vs Soft FM
                    </h3>
                    <p className="text-sm text-muted-foreground">Understanding the differences between FM service categories.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/fm-insights/what-is-facilities-management" className="group">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      What Is Facilities Management?
                    </h3>
                    <p className="text-sm text-muted-foreground">The fundamentals of FM and why it matters for your organisation.</p>
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
                  Explore whether Integrated Facilities Management is right for your organisation. Our team will assess your requirements and recommend the optimal service delivery model.
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/request-proposal">
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

export default WhatIsIFM;
