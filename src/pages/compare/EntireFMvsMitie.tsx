import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Building2, Users, Zap, Monitor, Shield, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsMitie = () => {
  return (
    <>
      <Helmet>
        <title>EntireFM vs Mitie | Independent FM vs Enterprise FM</title>
        <meta
          name="description"
          content="Compare independent facilities management with enterprise FM. Understand the differences in accountability, responsiveness, and control between EntireFM and large-scale providers."
        />
        <link rel="canonical" href="https://entirefm.com/compare/entirefm-vs-mitie" />
      </Helmet>

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs Mitie" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs Mitie
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              A factual comparison of independent FM delivery versus large-scale enterprise facilities management. 
              Different models suit different portfolios.
            </p>
          </div>
        </section>

        {/* Section 1: Who They're For */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-light">Who They're For</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-muted/30">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4 text-muted-foreground">Enterprise FM Providers</h3>
                    <p className="text-muted-foreground font-light">
                      Built for huge, multi-national portfolios. Central government contracts. 
                      Organisations needing a single provider across multiple countries with 
                      standardised reporting at group level.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">EntireFM</h3>
                    <p className="text-muted-foreground font-light">
                      Built for investors, asset managers, estates, funds, and growing portfolios 
                      that want attention and agility. Clients who need a partner that knows their 
                      buildings — not just their contract number.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Delivery Model */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-light">Delivery Model</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-muted-foreground">Enterprise Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Large-scale, highly standardised delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Layered management structures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Designed for economies of scale</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">EntireFM Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Senior FM oversight as standard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Direct access to decision-makers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Bespoke delivery model shaped per estate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Responsiveness */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-light">Responsiveness</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-muted-foreground">Enterprise Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Multiple layers between request and resolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Ticket routing through internal systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Internal SLAs between departments</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">EntireFM Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Smaller chain of command</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Decisions made by people actually responsible for the account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Ability to pivot quickly when the estate changes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Technology */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Monitor className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-light">Technology</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-muted-foreground">Enterprise Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Large enterprise CAFM platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Configured across many clients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Standardised reporting formats</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">EntireFM Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">In-house Field Operations Intelligence platform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Designed around how engineers actually work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Direct line between site, engineer, and decision-maker</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Portal access with audit-ready records</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Risk & Governance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-light">Risk & Governance</h2>
              </div>
              
              <Card className="bg-card">
                <CardContent className="p-8">
                  <p className="text-lg font-light mb-6">
                    Both models operate within the same statutory and compliance frameworks. 
                    The difference lies in how accountability is structured.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium">Same Standards</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground font-light">
                        <li>• Regulatory Reform (Fire Safety) Order</li>
                        <li>• Electricity at Work Regulations</li>
                        <li>• Gas Safety (Installation and Use)</li>
                        <li>• ACOP L8 Water Hygiene</li>
                        <li>• F-Gas Regulations</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium">EntireFM Focus</h4>
                      <ul className="space-y-2 text-sm font-light">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Clarity over complexity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Accountability without "hiding" behind scale</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Named individuals responsible for your compliance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 6: When EntireFM Is The Better Fit */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-light">When EntireFM Is The Better Fit</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "When you want to know who really owns your account",
                  "When you don't want to be one of hundreds",
                  "When your assets need tailored FM, not just contract coverage",
                  "When decisions need to happen quickly without layers of approval",
                  "When you need a partner that grows with your portfolio",
                  "When you value direct access over corporate process"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-4">
                Considering a Change?
              </h2>
              <p className="text-lg text-muted-foreground font-light mb-8">
                Talk to us about moving from enterprise FM to an independent partner. 
                We'll give you an honest assessment of whether we're the right fit.
              </p>
              <Button asChild size="lg">
                <Link to="/request-proposal">
                  Request a Proposal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EntireFMvsMitie;