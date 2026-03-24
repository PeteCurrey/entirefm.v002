"use client";

;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const MyCompliance = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Integrations", href: "/integrations" },
    { label: "MyCompliance" },
  ];

  const benefits = [
    "Streamlined work order processing",
    "Compliance data shared instantly",
    "Unified reporting",
    "Zero-change for client operations",
    "Full alignment with audit expectations",
  ];

  const technicalFeatures = [
    "Secure API data exchange",
    "Digital certification upload",
    "Photo and document evidence syncing",
    "Automatic status updates",
    "Real-time communications",
    "Scalability across multi-sites",
  ];

  return (
    <>
      

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-8 mb-12 max-w-4xl mx-auto">
            <Button asChild variant="ghost" size="sm" className="mb-6">
              <Link href="/integrations">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Integrations
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Integration with MyCompliance
            </h1>
            <p className="text-xl text-muted-foreground font-light mb-8">
              Delivering fast, compliant FM directly within your MyCompliance workflows — no operational disruption.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Request Integration Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#details">Download Integration Overview</a>
              </Button>
            </div>
          </div>

          <Card className="p-6 mb-8 bg-primary/5">
            <p className="text-sm text-muted-foreground font-light">
              <strong>MyCompliance</strong> → Safety-driven organisations
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-light mb-6">We work seamlessly with your existing platform to deliver:</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light">Statutory compliance certainty</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light">Real-time job updates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light">Full evidence logging</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light">Digital asset traceability</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground font-light">SLA performance governance</span>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground font-light italic">
              Engineers work in our platform, clients see everything in yours.<br />
              No friction. No delays. No lost governance.
            </p>
          </Card>

          <div className="mb-8">
            <h2 className="text-3xl font-light mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-light">{benefit}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 mb-12 bg-muted/50">
            <h2 className="text-2xl font-light mb-6">Technical Compatibility</h2>
            <ul className="space-y-3">
              {technicalFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-light">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Talk to us about connected compliance
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-6">
              📩 hello@entirefm.com
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Request Integration Audit →</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MyCompliance;
