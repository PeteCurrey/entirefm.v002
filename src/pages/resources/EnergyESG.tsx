import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TrendingDown, Users, Award, Lightbulb, Wind, Thermometer, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const EnergyESG = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: "Energy & ESG" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Energy & ESG Improvement — Operating Cost Advantage",
    description: "Turn FM actions into OpEx savings with energy efficiency upgrades and ESG facilities strategy",
    author: {
      "@type": "Organization",
      name: "EntireFM"
    },
    publisher: {
      "@type": "Organization",
      name: "EntireFM",
      logo: {
        "@type": "ImageObject",
        url: "https://entirefm.co.uk/logo.png"
      }
    }
  };

  const strategicWins = [
    {
      icon: Lightbulb,
      title: "LED & HVAC Optimisations",
      description: "Retrofit lighting and tune mechanical systems for immediate energy reduction"
    },
    {
      icon: Thermometer,
      title: "BMS Rule Tuning",
      description: "Optimise building management systems for peak efficiency and comfort"
    },
    {
      icon: Wind,
      title: "IAQ Improvements",
      description: "Indoor air quality enhancements = wellbeing + productivity lift"
    },
    {
      icon: TrendingDown,
      title: "Demand-Side Load Control",
      description: "Strategic load management reduces peak consumption and costs"
    },
    {
      icon: Leaf,
      title: "On-Site Renewables Integration",
      description: "Partner model for solar, heat pumps, and renewable generation"
    }
  ];

  const boardLevelValue = [
    {
      driver: "Carbon Reduction",
      action: "Energy use cut",
      gain: "Lower operational footprint"
    },
    {
      driver: "Employee Wellbeing",
      action: "IAQ + comfort control",
      gain: "Better retention & output"
    },
    {
      driver: "Brand Reputation",
      action: "Sustainability wins",
      gain: "Procurement alignment"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Energy Efficiency & ESG Strategy | FM Sustainability Solutions | EntireFM</title>
        <meta name="description" content="Turn FM actions into OpEx savings. Energy efficiency upgrades, ESG strategy, and sustainability improvements that deliver measurable board-level value." />
        <link rel="canonical" href="https://entirefm.co.uk/resources/energy-esg" />
      </Helmet>

      <SchemaMarkup schema={schemaData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <main>
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-muted/20">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="max-w-4xl mx-auto text-center">
              <Leaf className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
                Energy is Now a Board Priority
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We turn FM actions into OpEx savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Request Energy Optimisation Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/tools/cost-savings-calculator">Benchmark My Building Performance</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Wins */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-light mb-12 text-center">Strategic Wins We Deliver</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategicWins.map((win, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <win.icon className="w-10 h-10 mb-4 text-primary" />
                      <h3 className="text-lg font-medium mb-2">{win.title}</h3>
                      <p className="text-sm text-muted-foreground">{win.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board-Level Value */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-light mb-4">Board-Level Value</h2>
                <p className="text-muted-foreground">
                  FM becomes the hero — not the overhead.
                </p>
              </div>

              <div className="grid gap-6">
                {boardLevelValue.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">ESG Driver</p>
                          <p className="font-medium text-foreground">{item.driver}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">FM Action</p>
                          <p className="font-medium text-foreground">{item.action}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Measurable Gain</p>
                          <p className="font-medium text-primary">{item.gain}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Targeted Results */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <TrendingDown className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl font-light mb-4">Targeted Results</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl font-light text-primary mb-2">10–30%</div>
                    <p className="text-sm text-muted-foreground">Energy Reduction Typical Range</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Soft FM enhancements improve workplace scoring
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <CheckCircle className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Scalable investment with short payback timelines
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Secure Energy Savings and Sustainability Approvals
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Proposal drafted with costed outcomes and measurable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Request Energy Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services/hvac">Explore HVAC Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-light mb-6 text-center">Related Resources</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild variant="outline">
                  <Link to="/resources/audit-framework">FM Audit Framework</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/tools/cost-savings-calculator">Cost Savings Calculator</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">All Services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/sectors/offices-corporate">Corporate Sector</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnergyESG;
