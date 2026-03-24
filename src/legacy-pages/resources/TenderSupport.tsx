"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { FileText, CheckCircle, Shield, Calendar, TrendingUp, Download, Phone } from "lucide-react";

const TenderSupport = () => {
  const breadcrumbItems = [
    { label: "Resources", href: "/resources" },
    { label: "Tender Support" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "FM Tender Support & Proposal Resources - EntireFM",
    "description": "Comprehensive tender support and RFP resources for facilities management procurement. Technical response packs, compliance documents, and risk mitigation plans.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const documents = [
    {
      icon: FileText,
      title: "Full Technical Response Pack",
      description: "Complete methodology statements and technical capabilities"
    },
    {
      icon: Shield,
      title: "Compliance Documents & Certifications",
      description: "All statutory certifications and industry accreditations"
    },
    {
      icon: CheckCircle,
      title: "Risk Register + Mitigation Plan",
      description: "Comprehensive risk assessment with mitigation strategies"
    },
    {
      icon: Calendar,
      title: "Mobilisation Roadmap",
      description: "Clear milestones and transition timeline"
    },
    {
      icon: TrendingUp,
      title: "Example KPIs + SLA Framework",
      description: "Performance metrics tailored to your estate type"
    }
  ];

  const outcomes = [
    "Zero supply chain guesswork",
    "Operational alignment before contract award",
    "Stakeholder reassurance at director level",
    "Transparent commercials from day one"
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <SchemaMarkup schema={schema} />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="max-w-6xl mx-auto relative">
            <Breadcrumb items={breadcrumbItems} />
            
            <div className="mt-8 text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Stronger submissions. Faster approvals. Risk-free procurement.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                We give procurement teams the clarity and confidence to select a partner who actually delivers.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Tender Pack
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Request a Proposal Draft
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Provide for RFP Success
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                EntireFM removes evaluation doubt. You're choosing a partner — not flipping a coin.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <doc.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-muted-foreground">{doc.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement-Proof Outcomes Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Procurement-Proof Outcomes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{outcome}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-6 border-t border-border">
                <p className="text-2xl font-bold mb-6">
                  Save time. Reduce risk. Build confidence.<br />
                  <span className="text-primary">Procurement done right.</span>
                </p>
                
                <Button size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Request your Complete FM Tender Pack (PDF)
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Tailored Support Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Methodology Statements Tailored to Each Estate Type
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're managing industrial facilities, corporate offices, retail estates, or multi-site portfolios, 
              our tender responses are customized to your specific operational requirements and risk profile.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                Download Tender Pack
              </Button>
              <Button size="lg" variant="outline">
                Speak to a Tender Specialist
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TenderSupport;
