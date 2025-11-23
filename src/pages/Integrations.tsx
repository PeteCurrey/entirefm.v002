import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Plug, Zap, Database, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const Integrations = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Integrations Hub" },
  ];

  const integrations = [
    {
      icon: Database,
      title: "CAFM & CMMS Platforms",
      description: "Seamless integration with leading CAFM systems",
      status: "Coming Soon"
    },
    {
      icon: Cloud,
      title: "Property Management Systems",
      description: "Connect with your existing property tech stack",
      status: "Coming Soon"
    },
    {
      icon: Zap,
      title: "Building Management Systems",
      description: "Real-time data from BMS and IoT sensors",
      status: "Coming Soon"
    },
    {
      icon: Plug,
      title: "API Access",
      description: "Custom integrations via our REST API",
      status: "Coming Soon"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Integrations Hub | EntireFM</title>
        <meta
          name="description"
          content="Connect EntireFM with your existing property tech stack. CAFM, BMS, and property management system integrations."
        />
        <link rel="canonical" href="https://entirefm.co.uk/integrations" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Header */}
          <div className="mt-8 mb-12 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Plug className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-4">
              Integrations Hub
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Connect EntireFM with your existing property technology stack for seamless operations.
            </p>
          </div>

          {/* Integrations Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <integration.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground px-3 py-1 bg-muted rounded-full">
                    {integration.status}
                  </span>
                </div>
                <h3 className="text-xl font-light mb-2">{integration.title}</h3>
                <p className="text-sm text-muted-foreground font-light">
                  {integration.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Info Card */}
          <Card className="p-8 mb-12 bg-muted">
            <h2 className="text-2xl font-light mb-4">Integration Capabilities</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                ✓ <strong>Real-time Data Sync:</strong> Automatic synchronization of work orders, asset data, and compliance records
              </p>
              <p>
                ✓ <strong>Bi-directional Updates:</strong> Changes flow seamlessly between EntireFM and your existing systems
              </p>
              <p>
                ✓ <strong>Custom Workflows:</strong> Tailor integrations to match your operational processes
              </p>
              <p>
                ✓ <strong>API Documentation:</strong> Comprehensive developer resources for custom implementations
              </p>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-6">
              Our technical team can build bespoke integrations to connect EntireFM with your property tech ecosystem.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Discuss Integration Requirements</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Integrations;
