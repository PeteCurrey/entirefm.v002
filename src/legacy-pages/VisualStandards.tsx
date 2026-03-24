"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Eye, Camera, Shield, CheckCircle, Lightbulb, Building2, Home, Warehouse } from "lucide-react";

const VisualStandards = () => {
  const breadcrumbItems = [
    { label: "Visual Standards & Presentation" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Visual Standards & Presentation Gallery - EntireFM",
    "description": "Facilities presentation standards with before & after results. Small details make big impressions across retail, corporate, residential, and industrial environments.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const proofAreas = [
    {
      icon: Building2,
      title: "Reception Transformations",
      description: "First impressions that support confidence and trust"
    },
    {
      icon: Eye,
      title: "Front-of-House Presentation",
      description: "Brand-critical environments maintained to premium standards"
    },
    {
      icon: Shield,
      title: "Brand-Critical Finishes",
      description: "Details that reinforce your quality positioning"
    },
    {
      icon: Lightbulb,
      title: "Lighting & Comfort Upgrades",
      description: "Atmosphere improvements that enhance experience"
    },
    {
      icon: CheckCircle,
      title: "Cleanliness & Order Controls",
      description: "Consistent excellence in visible spaces"
    },
    {
      icon: Shield,
      title: "Hazard Removal Before It's Noticed",
      description: "Proactive safety and presentation management"
    }
  ];

  const showcaseCategories = [
    {
      icon: Building2,
      category: "Retail Presentation",
      changes: "Lighting, floor refresh, signage clarity",
      impact: "Enhanced customer confidence and brand consistency"
    },
    {
      icon: Building2,
      category: "Corporate Entrances",
      changes: "First impression brand premiumisation",
      impact: "Professional environment that supports business reputation"
    },
    {
      icon: Home,
      category: "Residential Communal",
      changes: "Safety, cleanliness, resident trust",
      impact: "Improved living experience and satisfaction scores"
    },
    {
      icon: Warehouse,
      category: "Logistics & Industrial",
      changes: "Safe, efficient movement spaces",
      impact: "Operational excellence and safety compliance"
    }
  ];

  const qaStandards = [
    {
      icon: Camera,
      title: "Spot-Check Audits Every Visit",
      description: "Continuous quality verification on every job"
    },
    {
      icon: CheckCircle,
      title: "Supervisor Sign-Off with Photos",
      description: "Visual proof of completion standards"
    },
    {
      icon: Eye,
      title: "Brand-Alignment Review",
      description: "Ensuring facilities support your positioning"
    },
    {
      icon: Shield,
      title: "Zero-Tolerance on Visual Hazards",
      description: "Safety and presentation maintained together"
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="max-w-6xl mx-auto relative">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="mt-8 text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Small details make big impressions.<br />
                And we perfect the details.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Seeing is believing — and trust grows from results.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Eye className="w-5 h-5" />
                  View Results Gallery
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Camera className="w-5 h-5" />
                  Book a Site Appearance Upgrade Survey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Prove It Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Where We Prove It
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything the public sees should support confidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proofAreas.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <area.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Showcase Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Before & After Showcase
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                Structured in categories for maximum impact.
              </p>
              <p className="text-lg text-muted-foreground italic">
                Maintenance shouldn't be invisible.<br />
                The quality should be.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {showcaseCategories.map((showcase, index) => (
                <Card key={index} className="p-8 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-shadow">
                  <showcase.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{showcase.category}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">What Changes</p>
                      <p className="text-muted-foreground">{showcase.changes}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Impact</p>
                      <p className="text-muted-foreground">{showcase.impact}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visual QA Standards Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visual QA Standards
              </h2>
              <p className="text-xl text-muted-foreground mb-2">
                If an engineer walks past a problem —
              </p>
              <p className="text-xl font-bold text-primary">
                that's the real problem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {qaStandards.map((standard, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <standard.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground">{standard.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Quality You Can See
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Every visit is documented. Every detail is checked. Every space reflects our standards and your brand.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Camera className="w-5 h-5" />
                  Request Aesthetic and Experience Assessment
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Eye className="w-5 h-5" />
                  View Case Studies
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Photo Documentation Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-8 md:p-12">
              <Camera className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Every Job. Documented.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Photo evidence before, during, and after every task ensures accountability and demonstrates 
                the quality standards we maintain across your estate.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="font-bold mb-2">Before Photos</h3>
                  <p className="text-sm text-muted-foreground">Initial condition assessment</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Progress Updates</h3>
                  <p className="text-sm text-muted-foreground">Work-in-progress visibility</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Completion Proof</h3>
                  <p className="text-sm text-muted-foreground">Verified quality delivery</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default VisualStandards;
