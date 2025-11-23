import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Plug, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Integrations = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Integrations" },
  ];

  const integrations = [
    {
      name: "eLogbooks",
      slug: "elogbooks",
      description: "Used widely by large property managers",
    },
    {
      name: "Dwellant",
      slug: "dwellant",
      description: "Strong in residential & PRS",
    },
    {
      name: "Verisae",
      slug: "verisae",
      description: "Retail + foodservice estates",
    },
    {
      name: "MRI/Qube",
      slug: "mri-qube",
      description: "Diverse commercial estates",
    },
    {
      name: "Planon",
      slug: "planon",
      description: "Public sector + large campuses",
    },
    {
      name: "Concept Evolution",
      slug: "concept-evolution",
      description: "High-complexity estates",
    },
    {
      name: "MyCompliance",
      slug: "mycompliance",
      description: "Safety-driven organisations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Integration Hub & System Compatibility Suite | EntireFM</title>
        <meta
          name="description"
          content="Seamless FM delivery into your existing compliance and job management platforms including eLogbooks, Dwellant, Verisae, MRI/Qube, Planon and more."
        />
        <link rel="canonical" href="https://entirefm.co.uk/integrations" />
      </Helmet>

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <div className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Plug className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Systems We Integrate With
            </h1>
            <p className="text-xl text-muted-foreground font-light mb-8">
              Seamless FM delivery into your existing compliance and job management platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request Integration Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#integrations">Browse Integrations ↓</a>
              </Button>
            </div>
          </div>

          {/* Intro Text */}
          <Card className="p-8 mb-12 bg-muted/50">
            <p className="text-lg text-foreground font-light mb-4">
              We routinely deliver through client systems including eLogbooks, Dwellant, Verisae, MRI/Qube, 
              Planon, MyCompliance and many others.
            </p>
            <p className="text-lg text-foreground font-light">
              Our platform ensures consistent compliance governance — no matter what software you use.
            </p>
          </Card>

          {/* Integrations Grid */}
          <div id="integrations" className="mb-12">
            <h2 className="text-3xl font-light mb-8 text-center">Supported Platforms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration) => (
                <Card key={integration.slug} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                  <h3 className="text-xl font-light mb-2">{integration.name}</h3>
                  <p className="text-sm text-muted-foreground font-light mb-4">
                    {integration.description}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-between">
                    <Link to={`/integrations/${integration.slug}`}>
                      View Integration
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <Card className="p-8 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Talk to us about connected compliance
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-6">
              📩 hello@entirefm.com
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request Integration Audit →</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Integrations;
