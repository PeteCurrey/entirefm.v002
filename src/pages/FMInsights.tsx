import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BookOpen, Calendar, TrendingUp, Shield, FileText, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const FMInsights = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FM Insights" },
  ];

  const categories = ["All", "Compliance", "Best Practice", "Industry News", "Guidance"];

  const insights = [
    {
      title: "What Is a PPM Planner?",
      category: "Best Practice",
      type: "Guide",
      description: "How PPM planners underpin maintenance strategy, compliance tracking, and lifecycle cost control.",
      icon: Calendar,
      link: "/fm-insights/what-is-a-ppm-planner",
      date: "2025-01-20"
    },
    {
      title: "What Is a Compliance Calendar?",
      category: "Compliance",
      type: "Guide",
      description: "Track statutory maintenance deadlines and ensure nothing falls through the cracks.",
      icon: Calendar,
      link: "/fm-insights/what-is-a-compliance-calendar",
      date: "2025-01-22"
    },
    {
      title: "What Is an Asset Register?",
      category: "Best Practice",
      type: "Guide",
      description: "The foundation of effective facilities management—cataloguing every maintainable item.",
      icon: FileText,
      link: "/fm-insights/what-is-an-asset-register",
      date: "2025-01-24"
    },
    {
      title: "Fire Risk Assessment Guide",
      category: "Compliance",
      type: "Guide",
      description: "Comprehensive guide to conducting fire risk assessments for UK commercial properties.",
      icon: Shield,
      link: "/resources/fire-risk-guide",
      date: "2025-01-15"
    },
    {
      title: "Electrical EICR Survival Manual",
      category: "Compliance",
      type: "Manual",
      description: "Everything property managers need to know about EICR and BS 7671 compliance.",
      icon: FileText,
      link: "/resources/eicr-manual",
      date: "2025-01-10"
    },
    {
      title: "Emergency Lighting Testing",
      category: "Compliance",
      type: "Checklist",
      description: "Complete checklist for conducting 3-hour emergency lighting tests to BS 5266.",
      icon: Lightbulb,
      link: "/resources/emergency-lighting-checklist",
      date: "2025-01-05"
    },
    {
      title: "PPM vs Reactive Maintenance",
      category: "Best Practice",
      type: "Article",
      description: "Data-driven analysis of preventative vs reactive maintenance costs across 100+ UK sites.",
      icon: TrendingUp,
      link: "/resources",
      date: "2024-12-20"
    },
    {
      title: "Legionella Governance Guide",
      category: "Compliance",
      type: "Guide",
      description: "Complete guide to legionella control and ACOP L8 compliance requirements.",
      icon: Shield,
      link: "/resources/legionella-guide",
      date: "2024-12-15"
    },
    {
      title: "Compliance Calendar 2025",
      category: "Guidance",
      type: "Reference",
      description: "Complete calendar of mandatory inspections and certification requirements.",
      icon: Calendar,
      link: "/resources/compliance-calendar",
      date: "2024-12-01"
    },
  ];

  return (
    <>
      <Helmet>
        <title>FM Insights & Knowledge Hub | EntireFM</title>
        <meta
          name="description"
          content="Expert FM insights, compliance guides, and best practice resources for facilities managers and property professionals."
        />
        <link rel="canonical" href="https://entirefm.co.uk/fm-insights" />
      </Helmet>

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Header */}
          <div className="mt-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-light">FM Insights</h1>
            </div>
            <p className="text-xl text-muted-foreground font-light max-w-3xl">
              Expert guidance, compliance updates, and best practice resources for facilities management professionals.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                type="search"
                placeholder="Search insights..."
                className="max-w-md"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button key={category} variant="outline" size="sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {insights.map((insight, index) => (
              <Card key={index} className="p-6 hover-lift flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <insight.icon className="w-10 h-10 text-primary" />
                  <Badge variant="secondary" className="font-light text-xs">
                    {insight.type}
                  </Badge>
                </div>
                
                <div className="flex-1 mb-4">
                  <div className="text-xs text-muted-foreground mb-2">
                    {new Date(insight.date).toLocaleDateString('en-GB', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-lg font-light mb-2 leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {insight.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={insight.link}>Read More</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="p-8 bg-primary/5 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Need Expert Guidance?
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-6">
              Our FM specialists can provide tailored advice for your specific facility requirements.
            </p>
            <Button asChild size="lg">
              <Link to="/request-proposal">Request Consultation</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FMInsights;
