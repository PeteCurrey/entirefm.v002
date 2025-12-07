import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Phone, FileText, Users, Target, Shield, TrendingUp } from "lucide-react";

const Leadership = () => {
  const breadcrumbItems = [
    { label: "Leadership" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "FM Leadership & Governance - EntireFM",
    "description": "Meet the EntireFM leadership team. Directors who answer the phone and own performance. FM accountability that starts at the top.",
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const benefits = [
    {
      icon: Phone,
      title: "Directors Directly Involved in Delivery",
      description: "No layers between you and decision-makers"
    },
    {
      icon: Target,
      title: "Decisions Fast — No Corporate Ladder",
      description: "Agile responses without bureaucratic delays"
    },
    {
      icon: Shield,
      title: "Ownership of Outcome, Not Excuses",
      description: "Leadership that takes full accountability"
    },
    {
      icon: FileText,
      title: "Regular Board-Level Reporting",
      description: "Transparent performance updates and strategic insights"
    },
    {
      icon: TrendingUp,
      title: "Strategic FM Influence",
      description: "Facilities management that drives business performance"
    }
  ];

  const roles = [
    {
      title: "Managing Director",
      focus: "Performance Oversight",
      description: "Ultimate accountability for service delivery and client outcomes across all contracts"
    },
    {
      title: "Operations Director",
      focus: "Zero-Failure Execution",
      description: "Ensures every job is completed right, on time, with full compliance and quality standards"
    },
    {
      title: "Compliance & Risk Lead",
      focus: "Statutory Assurance",
      description: "Maintains regulatory compliance, audit readiness, and proactive risk mitigation"
    },
    {
      title: "Customer Experience Lead",
      focus: "Occupier-First Outcomes",
      description: "Champions end-user satisfaction and ensures facilities enhance workplace performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>FM Leadership & Governance | Meet the EntireFM Team</title>
        <meta 
          name="description" 
          content="Meet the EntireFM leadership team. Directors who answer the phone and own performance. FM accountability starts at the top with our experienced facilities management directors." 
        />
        <link rel="canonical" href="https://entirefm.com/leadership" />
      </Helmet>

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
                FM accountability starts at the top.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Directors who answer the phone.<br />
                Leadership that owns the performance.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Speak To a Director
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <FileText className="w-5 h-5" />
                  Governance Pack Request
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Clients Get Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Clients Get With EntireFM
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The team you meet is the team who stands behind the results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Roles Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Leadership Roles Highlight
              </h2>
              <p className="text-xl text-muted-foreground">
                This is top-tier FM without the red tape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <Card key={index} className="p-8 bg-gradient-to-br from-background to-muted/20 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Users className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                      <p className="text-primary font-semibold">{role.focus}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{role.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Leadership That Delivers
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                No passing the buck. No corporate runaround. Just direct access to the people who make decisions 
                and stand behind every commitment.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Book a Leadership Briefing
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <FileText className="w-5 h-5" />
                  Request Governance Pack
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default Leadership;
