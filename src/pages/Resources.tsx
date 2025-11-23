import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, BookOpen, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Guides & Checklists", "Compliance Updates", "FM Strategy", "News"];

  const resources = [
    {
      title: "Fire Risk Assessment Guide",
      category: "Guides & Checklists",
      type: "PDF Guide",
      description: "Comprehensive guide to conducting and maintaining fire risk assessments for UK commercial properties.",
      icon: FileText,
      link: "/resources/fire-risk-guide"
    },
    {
      title: "Electrical EICR Survival Manual",
      category: "Guides & Checklists",
      type: "PDF Manual",
      description: "Essential guide to Electrical Installation Condition Reports and BS 7671 compliance requirements.",
      icon: FileText,
      link: "/resources/eicr-manual"
    },
    {
      title: "3-Hour Emergency Lighting Test Checklist",
      category: "Guides & Checklists",
      type: "Checklist",
      description: "Complete checklist for conducting annual 3-hour emergency lighting tests to BS 5266 standards.",
      icon: FileText,
      link: "/resources/emergency-lighting-checklist"
    },
    {
      title: "Legionella Governance Guide",
      category: "Guides & Checklists",
      type: "Compliance Guide",
      description: "Complete guide to legionella control, ACOP L8 compliance, and water hygiene management.",
      icon: FileText,
      link: "/resources/legionella-guide"
    },
    {
      title: "F-Gas Leak Compliance Tracker",
      category: "Guides & Checklists",
      type: "Excel Tool",
      description: "Spreadsheet tool for tracking refrigerant leak detection inspections and F-Gas compliance.",
      icon: FileText,
      link: "/resources/fgas-tracker"
    },
    {
      title: "PPM Compliance Calendar 2025",
      category: "Compliance Updates",
      type: "Reference Document",
      description: "Complete calendar of mandatory inspections, testing frequencies, and certification requirements.",
      icon: Calendar,
      link: "/resources/compliance-calendar"
    },
    {
      title: "What Good Looks Like: FM Audit Framework",
      category: "Guides & Checklists",
      type: "PDF Guide",
      description: "Structured audit checklist that exposes weak delivery and highlights operational excellence.",
      icon: FileText,
      link: "/resources/audit-framework"
    },
    {
      title: "Switching FM Provider — Pain-Free Playbook",
      category: "Guides & Checklists",
      type: "PDF Guide",
      description: "Step-by-step guide to changing FM providers with minimal disruption. TUPE, data transfer, mobilisation planning.",
      icon: FileText,
      link: "/resources/switching-provider"
    },
    {
      title: "PPM vs Reactive: Where the Real Money Is Won or Lost",
      category: "FM Strategy",
      type: "White Paper",
      description: "Data-driven analysis of preventative vs reactive maintenance costs across 100+ UK sites.",
      icon: BookOpen
    },
    {
      title: "Fire Safety Update: Post-Grenfell Compliance Requirements",
      category: "Compliance Updates",
      type: "Compliance Guide",
      description: "Updated guidance on fire safety regulations, FRA requirements, and landlord responsibilities.",
      icon: FileText
    },
    {
      title: "The Hidden Cost of Poor Response Times",
      category: "FM Strategy",
      type: "Case Study Report",
      description: "How slow FM responses impact productivity, tenant satisfaction, and asset degradation.",
      icon: BookOpen
    },
    {
      title: "CAFM Implementation: What Good Looks Like",
      category: "Guides & Checklists",
      type: "Implementation Guide",
      description: "Practical guide to selecting and implementing CAFM platforms without the complexity.",
      icon: FileText
    },
    {
      title: "Water Hygiene (L8): Essential Checklist for Property Managers",
      category: "Compliance Updates",
      type: "Compliance Checklist",
      description: "L8 compliance requirements, risk assessment templates, and testing schedules.",
      icon: Calendar
    },
    {
      title: "Building a Business Case for Integrated FM",
      category: "FM Strategy",
      type: "Strategy Guide",
      description: "How to calculate ROI and build internal support for single-provider FM.",
      icon: BookOpen
    },
    {
      title: "Gas Safety Regulations 2025: What's Changed",
      category: "Compliance Updates",
      type: "Update Brief",
      description: "Latest changes to gas safety legislation and what it means for landlords and property managers.",
      icon: FileText
    }
  ];

  const filteredResources = activeCategory === "All"
    ? resources
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Resources & Insights
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Practical guides, compliance updates, and FM strategy insights for property and operations teams.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const CardContent = (
                <Card key={index} className="p-6 hover-lift flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <resource.icon className="w-10 h-10 text-primary" />
                    <Badge variant="secondary" className="font-light text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-light mb-3 leading-snug flex-grow">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <Button variant="outline" size="sm" className="w-full group">
                      <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                      {resource.link ? "View Resource" : "Download Resource"}
                    </Button>
                  </div>
                </Card>
              );

              return resource.link ? (
                <Link key={index} to={resource.link} className="block">
                  {CardContent}
                </Link>
              ) : (
                CardContent
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-4">
              Stay updated on FM best practices
            </h2>
            <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
              Monthly insights on compliance, cost control, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="secondary" className="bg-white text-charcoal hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-4 font-light">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Need specific advice?
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8">
            Our team can provide tailored guidance for your FM challenges.
          </p>
          <Button size="lg">
            Talk to Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Resources;
