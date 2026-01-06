import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TrendingDown, Users, Award, Lightbulb, Wind, Thermometer, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import AnimatedSection from "@/components/shared/AnimatedSection";

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

  const stats = [
    { value: "10-30%", label: "Energy Reduction Range" },
    { value: "2-3yr", label: "Typical Payback" },
    { value: "100%", label: "Compliance Coverage" }
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

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary/5 via-background to-muted/30 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <div className="container mx-auto px-6 relative">
            <Breadcrumb items={breadcrumbItems} />
            
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center mt-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Leaf className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Energy is Now a
                <span className="block text-primary">Board Priority</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
                We turn FM actions into OpEx savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-lg">
                  <Link to="/contact">Request Energy Optimisation Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/tools/cost-savings-calculator">Benchmark My Building Performance</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-12 bg-charcoal text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-light">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Wins */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Strategic Wins We Deliver</h2>
              <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Practical energy initiatives with measurable outcomes
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategicWins.map((win, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.075}>
                    <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                          <win.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">{win.title}</h3>
                        <p className="text-sm text-muted-foreground font-light">{win.description}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Board-Level Value */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">Board-Level Value</h2>
                <p className="text-lg text-muted-foreground font-light">
                  FM becomes the hero — not the overhead.
                </p>
              </div>

              <div className="grid gap-6">
                {boardLevelValue.map((item, index) => (
                  <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                    <Card className="hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">ESG Driver</p>
                            <p className="font-medium text-foreground text-lg">{item.driver}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">FM Action</p>
                            <p className="font-medium text-foreground text-lg">{item.action}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-2">Measurable Gain</p>
                            <p className="font-medium text-primary text-lg">{item.gain}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Targeted Results */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                  <TrendingDown className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-4">Targeted Results</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <AnimatedSection direction="up" delay={0}>
                  <Card className="hover:shadow-lg transition-all">
                    <CardContent className="pt-8 text-center">
                      <div className="text-5xl font-light text-primary mb-4">10–30%</div>
                      <p className="text-muted-foreground font-light">Energy Reduction Typical Range</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.1}>
                  <Card className="hover:shadow-lg transition-all">
                    <CardContent className="pt-8 text-center">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-muted-foreground font-light">
                        Soft FM enhancements improve workplace scoring
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                  <Card className="hover:shadow-lg transition-all">
                    <CardContent className="pt-8 text-center">
                      <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-muted-foreground font-light">
                        Scalable investment with short payback timelines
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 text-white">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Secure Energy Savings and Sustainability Approvals
              </h2>
              <p className="text-lg text-gray-300 font-light mb-8">
                Proposal drafted with costed outcomes and measurable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 shadow-lg">
                  <Link to="/contact">Request Energy Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/services/hvac">Explore HVAC Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto">
              <h3 className="text-xl font-light mb-8 text-center">Related Resources</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/resources/audit-framework" className="group">
                  <Card className="p-4 h-full hover:border-primary/30 transition-all text-center">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">FM Audit Framework</span>
                  </Card>
                </Link>
                <Link to="/tools/cost-savings-calculator" className="group">
                  <Card className="p-4 h-full hover:border-primary/30 transition-all text-center">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Cost Savings Calculator</span>
                  </Card>
                </Link>
                <Link to="/services" className="group">
                  <Card className="p-4 h-full hover:border-primary/30 transition-all text-center">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">All Services</span>
                  </Card>
                </Link>
                <Link to="/sectors/offices-corporate" className="group">
                  <Card className="p-4 h-full hover:border-primary/30 transition-all text-center">
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">Corporate Sector</span>
                  </Card>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnergyESG;