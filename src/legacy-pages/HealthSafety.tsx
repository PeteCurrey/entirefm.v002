"use client";

;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, CheckCircle2, AlertTriangle, FileCheck } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const HealthSafety = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Health & Safety" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Health & Safety — Non-Negotiable Discipline",
    "description": "Zero shortcuts, zero compromise in FM safety. Competence verification, RAMS, compliance audits, and behavioural safety culture built into every operation.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const safetyCommand = [
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Competence verified before mobilisation",
      description: "Every engineer checked and cleared"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "RAMS adapted for every unique risk profile",
      description: "No generic templates"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance audits on rotation",
      description: "Continuous oversight"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Live observation & NCR logging in app",
      description: "Issues captured instantly"
    }
  ];

  const behaviouralSafety = [
    "Positive intervention",
    "Brief-before-entry",
    "Mandatory sign-offs with photo proof",
    "Zero tolerance on unsafe shortcuts"
  ];

  const metrics = [
    {
      metric: "H&S observations resolved within 7 days",
      icon: <CheckCircle2 className="h-5 w-5" />
    },
    {
      metric: "Non-compliance risk visibility live",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      metric: "Mandatory toolbox talks logged",
      icon: <FileCheck className="h-5 w-5" />
    },
    {
      metric: "Zero enforcement actions history",
      icon: <Shield className="h-5 w-5" />
    }
  ];

  return (
    <>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Zero shortcuts. Zero compromise.
              <br />Every site. Every shift. Every asset.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              You cannot outsource responsibility.
              <br />But you can trust how we manage it.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request H&S Governance Pack</Link>
            </Button>
          </div>
        </section>

        {/* Our Safety Command Structure */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Safety Command Structure
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {safetyCommand.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-xl font-bold">
                Digital evidence you can show to insurers and regulators
              </p>
            </div>
          </div>
        </section>

        {/* Behavioural Safety Culture */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Behavioural Safety Culture
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                We don't tick boxes —<br />we train behaviours.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {behaviouralSafety.map((item, index) => (
                  <div key={index} className="p-6 bg-background rounded-lg border">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">✓</span>
                      </div>
                      <p className="text-lg font-medium">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center p-6 bg-destructive/10 rounded-lg border border-destructive/20">
                <p className="text-xl font-bold text-destructive">
                  If it isn't safe — it isn't happening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics That Matter */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Metrics That Matter
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {metrics.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="text-primary flex-shrink-0">{item.icon}</div>
                    <p className="text-lg font-medium">{item.metric}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl text-center font-bold">
              Safety is competence in motion.
            </p>
          </div>
        </section>

        {/* Evidence-Based Safety */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Evidence-Based Safety
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Before Every Job</h3>
                <p className="text-muted-foreground">
                  Risk assessments reviewed. Method statements confirmed. Competency verified. 
                  Nothing starts until everything's safe.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">During Every Visit</h3>
                <p className="text-muted-foreground">
                  Geo-stamped attendance. Photo evidence of conditions. Live updates to portal. 
                  Complete transparency at every stage.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">After Every Task</h3>
                <p className="text-muted-foreground">
                  Mandatory sign-offs. Quality checks logged. Observations recorded. 
                  Audit trail ready for any inspection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Audit our safety discipline
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Review our H&S governance pack and see how we protect your people and reputation.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request H&S Governance Pack</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Related Pages</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/resources/engineer-standards">Engineer Standards</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/technology">Our Technology</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthSafety;
