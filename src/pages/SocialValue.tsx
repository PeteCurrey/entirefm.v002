import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Users, GraduationCap, Building, Heart, Leaf, TrendingUp, FileText, Award } from "lucide-react";

const SocialValue = () => {
  const breadcrumbItems = [
    { label: "Social Value & Community Impact" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Social Value & Community Impact - EntireFM",
    "description": "FM delivery that creates measurable economic, social and wellbeing gains. Local employment, apprenticeships, and community support aligned to UK government social value frameworks.",
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM"
    }
  };

  const commitments = [
    {
      icon: Users,
      title: "Local Employment & Skills Development",
      description: "Creating jobs and building careers in the communities we serve"
    },
    {
      icon: GraduationCap,
      title: "Apprenticeships & Upskilling",
      description: "Engineering trades training for the next generation"
    },
    {
      icon: Building,
      title: "Small/Local Supply Chain Enrichment",
      description: "Supporting local businesses and suppliers"
    },
    {
      icon: TrendingUp,
      title: "Youth Opportunity Creation",
      description: "Opening pathways to skilled careers"
    },
    {
      icon: Heart,
      title: "Vulnerable Residents & Local Charities",
      description: "Community support and social responsibility"
    },
    {
      icon: Leaf,
      title: "Environmental Uplift",
      description: "Sustainability improvements in communities we maintain"
    }
  ];

  const metrics = [
    {
      driver: "Local Investment",
      delivery: "Hiring & supply chain sourcing within radius",
      measurement: "% local spend"
    },
    {
      driver: "Skills & Training",
      delivery: "Apprenticeships, CPD hours, STEM outreach",
      measurement: "Hours + placements"
    },
    {
      driver: "Employment",
      delivery: "Fair pay, secure roles",
      measurement: "Job creation data"
    },
    {
      driver: "Community Support",
      delivery: "Facility improvements, partnerships",
      measurement: "Project count"
    },
    {
      driver: "Environmental Uplift",
      delivery: "Waste reduction, energy upgrades",
      measurement: "Carbon saved"
    }
  ];

  const impacts = [
    "Engineering apprentices placed into permanent roles",
    "Community spaces revitalised through volunteer time",
    "Local job creation tied to portfolio scale",
    "Charity support campaigns in partnership with clients"
  ];

  const reportingBenefits = [
    {
      icon: FileText,
      title: "Quarterly Impact Scorecards",
      description: "Regular tracking of social value delivery"
    },
    {
      icon: Building,
      title: "Regional Breakdown of Benefit",
      description: "Location-specific community impact analysis"
    },
    {
      icon: Award,
      title: "Verified Metrics for Tender Submissions",
      description: "Procurement-ready evidence for social value scoring"
    },
    {
      icon: TrendingUp,
      title: "Case Studies Supporting Public Sector Approvals",
      description: "Documented success stories for compliance requirements"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Social Value & Community Impact | FM Social Value UK | EntireFM</title>
        <meta 
          name="description" 
          content="Measurable social value delivery through facilities management. Local employment, apprenticeships, and community support aligned to UK government social value frameworks for procurement scoring." 
        />
        <link rel="canonical" href="https://entirefm.com/social-value" />
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
                We don't just maintain buildings.<br />
                We support the communities around them.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Our FM delivery creates real economic, social and wellbeing gains everywhere we operate.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <FileText className="w-5 h-5" />
                  Request Social Value Contribution Statement
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Award className="w-5 h-5" />
                  Add Us to Your Approved Social Impact Supply Chain
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Measurable Social Value Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We Deliver Measurable Social Value
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We turn commercial delivery into community success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((commitment, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <commitment.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement Metrics Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Procurement-Ready Social Value Metrics
              </h2>
              <p className="text-xl text-muted-foreground">
                We align to UK government social value frameworks.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Value Driver</th>
                      <th className="px-6 py-4 text-left font-bold">What We Deliver</th>
                      <th className="px-6 py-4 text-left font-bold">Measurement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.map((metric, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="px-6 py-4 font-semibold">{metric.driver}</td>
                        <td className="px-6 py-4 text-muted-foreground">{metric.delivery}</td>
                        <td className="px-6 py-4 text-primary font-medium">{metric.measurement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Real Impact Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Impact in Action
              </h2>
              <p className="text-xl text-muted-foreground">
                We bring value beyond the contract.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {impacts.map((impact, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-background to-muted/20">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg">{impact}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Value Reporting Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Social Value Reporting
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We help you win points at procurement stage — because your FM partner makes you look better.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {reportingBenefits.map((benefit, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Clients Receive Complete Impact Documentation
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                From quarterly scorecards to verified metrics for tender submissions, 
                we provide the evidence you need for procurement success.
              </p>
              
              <Button size="lg" className="gap-2">
                <FileText className="w-5 h-5" />
                Request a Custom Social Value Proposal
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialValue;
