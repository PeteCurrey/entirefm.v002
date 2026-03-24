"use client";

;
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Check, 
  X, 
  Shield, 
  Clock, 
  Users, 
  Building, 
  FileCheck, 
  Cog,
  AlertTriangle,
  Phone,
  FileText,
  Download
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";

const WhyEntireFM = () => {
  const comparisonData = [
    {
      feature: "Decision Making",
      enterprise: "Layers of approvals and slow decision chains",
      entirefm: "Direct access to decision makers"
    },
    {
      feature: "Accountability",
      enterprise: "Internal politics and account churn",
      entirefm: "Owner-led accountability"
    },
    {
      feature: "FM Oversight",
      enterprise: "Generic service models with junior staff",
      entirefm: "Lean, senior-heavy FM oversight"
    },
    {
      feature: "Technology",
      enterprise: "One-size-fits-all CAFM systems",
      entirefm: "Platform built around how engineers actually work"
    },
    {
      feature: "Flexibility",
      enterprise: "Rigid contract structures",
      entirefm: "Delivery model shaped around each estate"
    }
  ];

  const estateManagement = [
    {
      title: "Field Operations Intelligence Platform",
      description: "Real-time visibility into engineer movements, job progress, and asset status across your entire portfolio."
    },
    {
      title: "PPM Planning & Governance",
      description: "Structured maintenance schedules with forward planning, budget forecasting, and compliance tracking."
    },
    {
      title: "Reactive Triage & Escalation",
      description: "Clear escalation paths with defined response times. Critical issues flagged immediately to senior management."
    },
    {
      title: "Supplier Network & Specialist Partners",
      description: "Vetted specialist contractors for niche requirements. Single point of contact regardless of trade."
    },
    {
      title: "Compliance Documentation & Audit Readiness",
      description: "Complete audit trail with certificates, reports, and remedial tracking. Always inspection-ready."
    }
  ];

  const riskGovernance = [
    { title: "Statutory Obligations", description: "Full compliance with RRO, Electricity at Work, Gas Safety, ACOP L8, and all relevant legislation." },
    { title: "Life-Safety Systems", description: "Fire detection, emergency lighting, suppression systems — tested, maintained, documented." },
    { title: "High-Risk Plant", description: "Fire, electrical, water, gas, lifting equipment, BMUs — specialist management and certification." },
    { title: "Contractor Controls", description: "RAMS review, permit-to-work systems, induction management, and competency verification." }
  ];

  const clientCares = [
    "No surprises",
    "No 'we'll get back to you next week'",
    "Honest reporting",
    "Clear responsibilities",
    "Buildings that work"
  ];

  return (
    <>
      
      <BreadcrumbSchema items={[
        { label: "Home", href: "/" },
        { label: "Why EntireFM" }
      ]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-background py-20 md:py-28 pt-28 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
              Why EntireFM
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              Independent facilities management that delivers control, responsiveness, and governance — 
              without the friction of enterprise bureaucracy or the gaps of fragmented contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Engineered FM */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Engineered FM, Not Just Tasks</h2>
            <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
              We deliver outcomes — uptime, compliance, occupier experience — not just completed work orders. 
              Our approach is built on a hard FM and compliance backbone, with real sector depth and national 
              coverage backed by realistic, grown-up promises.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium mb-2">Hard FM Backbone</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Compliance-first approach to M&E, fire safety, water hygiene, and electrical systems.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50">
                <CardContent className="p-6">
                  <Building className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium mb-2">Sector Depth</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Offices, PBSA, healthcare, industrial, logistics — we understand your building type.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50">
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-medium mb-2">National Coverage</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    UK-wide delivery with realistic response times and local engineer presence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Independent vs Enterprise */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">Independent vs Enterprise FM</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Enterprise Column */}
              <div>
                <div className="bg-muted/50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-medium mb-1 text-muted-foreground">Enterprise FM Providers</h3>
                  <p className="text-sm text-muted-foreground/70 font-light">Mitie, CBRE, JLL, etc.</p>
                </div>
                <div className="space-y-3">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5">
                      <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{item.feature}</p>
                        <p className="text-sm text-muted-foreground font-light">{item.enterprise}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* EntireFM Column */}
              <div>
                <div className="bg-primary/10 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-medium mb-1">EntireFM</h3>
                  <p className="text-sm text-muted-foreground font-light">Independent, owner-led FM</p>
                </div>
                <div className="space-y-3">
                  {comparisonData.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{item.feature}</p>
                        <p className="text-sm text-muted-foreground font-light">{item.entirefm}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Run Your Estate */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-10">How We Run Your Estate</h2>
            
            <div className="space-y-6">
              {estateManagement.map((item, index) => (
                <div key={index} className="flex gap-4 p-5 rounded-lg border border-border bg-card/30 hover:bg-card/50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cog className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Risk & Governance */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-light">Risk & Governance</h2>
            </div>
            <p className="text-lg text-muted-foreground font-light mb-10">
              Your statutory and regulatory obligations, managed with rigour and transparency.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {riskGovernance.map((item, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FileCheck className="w-5 h-5 text-primary" />
                      <h3 className="font-medium">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-light">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: What Our Clients Care About */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-light mb-8">What Our Clients Care About</h2>
            
            <div className="flex flex-wrap gap-3">
              {clientCares.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/5 border border-primary/10"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Next Steps CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Next Steps</h2>
            <p className="text-lg text-muted-foreground font-light mb-8">
              Ready to discuss how we can support your estate? 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">
                  <FileText className="mr-2 h-5 w-5" />
                  Request a Proposal
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/fm-operations/helpdesk">
                  <Phone className="mr-2 h-5 w-5" />
                  Arrange a Call
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/compliance-pack">
                  <Download className="mr-2 h-5 w-5" />
                  Sample Compliance Pack
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/compare">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Compare Providers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyEntireFM;
