import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Database, Smartphone, FileText, Users, Network, Clock, CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const Technology = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Technology" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EntireFM Portal - CAFM System",
    "applicationCategory": "BusinessApplication",
    "description": "Complete CAFM platform providing real-time visibility of assets, compliance, and FM operations with zero complexity.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    }
  };

  const portalFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      feature: "Live job status & ETAs",
      outcome: "No chasing contractors"
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      feature: "Full compliance dashboard",
      outcome: "Always audit-ready"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      feature: "Root-cause fault history",
      outcome: "Lower future spend"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      feature: "On-site photos & videos",
      outcome: "Instant proof of work"
    },
    {
      icon: <Database className="h-6 w-6" />,
      feature: "Asset registers & lifecycle",
      outcome: "Predictable budgets"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      feature: "Automated reporting",
      outcome: "No admin drain"
    }
  ];

  const features = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Job Management",
      description: "Track every job from logging to completion with live updates and SLA monitoring."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Asset Registers",
      description: "Complete digital asset records with service history and lifecycle tracking."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App for Engineers",
      description: "Real-time updates with photos, signatures, and notes from the field."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Compliance Documentation",
      description: "Digital RAMS, method statements, and instant certificate access."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client Portal",
      description: "Web portal for live job status, asset histories, and custom reports."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Integration Capabilities",
      description: "Connect to BMS systems, energy platforms, and finance systems via API."
    }
  ];

  const views = [
    {
      title: "Director's Dashboard",
      features: [
        "KPI summary and trends",
        "Budget vs actual spend",
        "SLA performance metrics",
        "Risk and compliance status",
        "Site-by-site comparison"
      ]
    },
    {
      title: "Helpdesk Screen",
      features: [
        "Live job queue and priorities",
        "Engineer locations and availability",
        "SLA countdown timers",
        "Quick job logging",
        "Escalation management"
      ]
    },
    {
      title: "Engineer Mobile View",
      features: [
        "Job details and history",
        "Site access information",
        "Photo capture and upload",
        "Digital signatures",
        "Parts ordering"
      ]
    }
  ];

  const engineerApp = [
    "Geo-stamped attendance",
    "Smart sign-offs",
    "Escalations automatically triggered"
  ];

  const reporting = [
    "KPI scorecards",
    "SLA heat maps",
    "Spend transparency",
    "Benchmark comparisons"
  ];

  return (
    <>
      <Helmet>
        <title>CAFM System UK | FM Job Tracking Technology | EntireFM Portal</title>
        <meta name="description" content="Every asset. Every status. Every certificate. Always visible. Always accountable. Complete CAFM platform with live tracking, compliance dashboard, and automated reporting." />
        <link rel="canonical" href="https://entirefm.com/technology" />
      </Helmet>
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Every asset. Every status.<br />Every certificate.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Always visible. Always accountable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request Portal Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Portal Feature Sheet Download</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What the Portal Delivers */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What the Portal Delivers</h2>
              <p className="text-xl text-muted-foreground italic">
                If you can't see it, you can't control it. Now you can.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalFeatures.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border hover:border-primary transition-colors">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.feature}</h3>
                  <p className="text-muted-foreground">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Platform Features */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Platform Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border hover:border-primary transition-colors">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Views */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Different views for different needs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {views.map((view, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">{view.title}</h3>
                  <ul className="space-y-3">
                    {view.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engineer App Integration */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Engineer App Integration
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {engineerApp.map((feature, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border text-center">
                  <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement-Level Reporting */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Procurement-Level Reporting
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {reporting.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border text-center">
                  <BarChart3 className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-center font-semibold">
              We give Directors control they've never had before.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Portal Demonstration
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Trust built in 10 minutes or less.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request Demo Now</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Explore More</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/sectors">Sectors We Serve</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link to="/contact">Request a Proposal</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Technology;
