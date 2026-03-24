"use client";

;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Building2, Users, Zap, Monitor, Shield, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

const EntireFMvsJLL = () => {
  return (
    <>
      

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Breadcrumb items={[{ label: "Compare Providers", href: "/compare" }, { label: "EntireFM vs JLL" }]} />
            
            <h1 className="text-4xl md:text-5xl font-light mb-6 mt-8">
              EntireFM vs JLL
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              A factual comparison of independent UK operations versus multinational FM delivery. 
              Different governance structures suit different requirements.
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
                    <h3 className="text-lg font-medium mb-4 text-muted-foreground">Global Property Managers</h3>
                    <p className="text-muted-foreground font-light">
                      Built for institutional investors and corporates seeking integrated property 
                      management across multiple markets. Investment management, leasing, valuation, 
                      and FM within a single relationship.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">EntireFM</h3>
                    <p className="text-muted-foreground font-light">
                      Built for UK estate owners, funds, and asset managers who want dedicated FM 
                      expertise — not FM as a value-add to property management. Clients who need 
                      clear accountability and rapid decision-making.
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
                  <h3 className="text-lg font-medium mb-4 text-muted-foreground">Global Manager Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">FM often sits alongside property management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Account structures designed for multi-service delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Governance often tied to property management contracts</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">EntireFM Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">FM is our entire focus — no competing services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Lean management with owner involvement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Contract structure independent of other property services</span>
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
                  <h3 className="text-lg font-medium mb-4 text-muted-foreground">Global Manager Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Escalation paths may route through property management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Changes may require coordination across service lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Decision authority often sits at regional level</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">EntireFM Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Direct escalation to directors when needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Contract modifications without multi-party coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Decisions made by people accountable for your account</span>
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
                  <h3 className="text-lg font-medium mb-4 text-muted-foreground">Global Manager Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Integrated platforms serving multiple service lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Reporting often consolidated with property management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground font-light">Changes require coordination with global IT</span>
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
                      <span className="font-light">Built specifically for FM operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Direct connection between site, engineer, and client</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-light">Audit-ready records without data silos</span>
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
                    The difference lies in how governance and accountability are structured.
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
                          <span>Single point of accountability for compliance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Clear escalation without service-line boundaries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>Owner-led governance with named responsibility</span>
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
                  "When you want FM separate from property management",
                  "When you need rapid escalation without service-line routing",
                  "When your estate requires specialist hard FM focus",
                  "When you value consistent account management over brand reach",
                  "When governance and compliance are priorities, not afterthoughts",
                  "When decisions need to be made by people who know your buildings"
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
                Talk to us about moving from global property management to an independent FM partner. 
                We'll give you an honest assessment of whether we're the right fit.
              </p>
              <Button asChild size="lg">
                <Link href="/request-proposal">
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

export default EntireFMvsJLL;
