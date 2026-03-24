"use client";

;
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf, TrendingDown, Users, Award } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";

const ESG = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "ESG & Sustainability" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ESG & Sustainability — Action, Not Greenwash",
    "description": "Hard FM drives carbon reduction through efficiency. LED upgrades, HVAC tuning, water efficiency, and social value that shows up in KPIs.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const hardFMAdvantage = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Carbon footprint",
      description: "Direct control over M&E systems"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Energy consumption",
      description: "Real savings through optimization"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Operating cost",
      description: "Efficiency is profitability"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "IAQ & wellbeing",
      description: "Better air, better performance"
    }
  ];

  const esgWins = [
    {
      initiative: "LED & control upgrades",
      impact: "Immediate energy savings"
    },
    {
      initiative: "HVAC performance tuning",
      impact: "Comfort + carbon reduction"
    },
    {
      initiative: "Water efficiency & hygiene",
      impact: "ESG + health protection"
    },
    {
      initiative: "Smart scheduling",
      impact: "Less waste, more uptime"
    }
  ];

  const socialValue = [
    "Local resource & employment uplift",
    "Skills development & apprenticeship support",
    "Supply chain built for ethical performance"
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
              We reduce carbon because we reduce waste.
              <br />Efficiency is sustainability.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              ESG isn't a brochure. It's a business case.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request a Sustainability Performance Review</Link>
            </Button>
          </div>
        </section>

        {/* The Hard FM Advantage */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Hard FM Advantage</h2>
            <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
              Mechanical and electrical systems drive:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {hardFMAdvantage.map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-lg border text-center hover:border-primary transition-colors">
                  <div className="flex justify-center text-primary mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-xl text-center font-bold">
              We upgrade all four — together.
            </p>
          </div>
        </section>

        {/* ESG Wins We Deliver */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              ESG Wins We Deliver
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {esgWins.map((win, index) => (
                  <div key={index} className="p-6 bg-background rounded-lg border">
                    <h3 className="text-lg font-semibold mb-2 text-primary">{win.initiative}</h3>
                    <p className="text-muted-foreground">{win.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board-Level Value */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Board-Level Value
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-bold">ESG Driver</th>
                    <th className="text-left p-4 font-bold">FM Action</th>
                    <th className="text-left p-4 font-bold">Measurable Gain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold">Carbon reduction</td>
                    <td className="p-4">Energy use cut</td>
                    <td className="p-4 text-primary">Lower operational footprint</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold">Employee wellbeing</td>
                    <td className="p-4">IAQ + comfort control</td>
                    <td className="p-4 text-primary">Better retention & output</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold">Brand reputation</td>
                    <td className="p-4">Sustainability wins</td>
                    <td className="p-4 text-primary">Procurement alignment</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xl text-center font-bold mt-8">
              FM becomes the hero — not the overhead.
            </p>
          </div>
        </section>

        {/* Social Value */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Social Value
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-center mb-8 font-semibold">
                FM is a people business:
              </p>
              <div className="space-y-4 mb-8">
                {socialValue.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-lg border">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl text-center font-semibold">
                We build sustainable outcomes that show up in KPIs.
              </p>
            </div>
          </div>
        </section>

        {/* Targeted Results */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Targeted Results
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-lg border text-center">
                <p className="text-4xl font-bold text-primary mb-2">10–30%</p>
                <p className="text-muted-foreground">Energy reduction typical range</p>
              </div>
              <div className="p-6 bg-card rounded-lg border text-center">
                <p className="text-4xl font-bold text-primary mb-2">↑</p>
                <p className="text-muted-foreground">Soft FM enhancements improve workplace scoring</p>
              </div>
              <div className="p-6 bg-card rounded-lg border text-center">
                <p className="text-4xl font-bold text-primary mb-2">Fast</p>
                <p className="text-muted-foreground">Scalable investment with short payback timelines</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure energy savings and sustainability approvals
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Proposal drafted with costed outcomes and measurable impact.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request Your ESG Proposal</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/resources/energy-esg">Energy & ESG Resource</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/services/hvac">HVAC Services</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto py-4">
                <Link href="/services/electrical">Electrical Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ESG;
