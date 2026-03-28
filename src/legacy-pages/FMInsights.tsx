"use client";

;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { resources } from "@/lib/resources";
import * as LucideIcons from "lucide-react";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const FMInsights = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FM Insights" },
  ];

  const categories = ["All", "Compliance", "Best Practice", "PPM & Maintenance", "Guidance"];

  // Mapping helper for Lucide icons stored as strings
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.toLowerCase()] || LucideIcons.FileText;
    if (typeof iconName === 'function') return iconName; // Support legacy passed components
    return Icon;
  };

  return (
    <>
      

      <div className="bg-background min-h-screen">
        {/* Hero Section with Half-Page Image */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          <div className="container mx-auto px-4 py-12 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mt-6 max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">FM Insights</h1>
              <p className="text-xl text-gray-200 font-light max-w-2xl">
                Expert guidance, compliance updates, and best practice resources for facilities management professionals.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
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
            {resources.map((insight, index) => {
              const Icon = getIcon(insight.icon);
              return (
              <Card key={index} className="relative p-6 flex flex-col h-full transition-all duration-500 group overflow-hidden cursor-pointer hover:border-primary/50 border-border bg-card">
                {/* Background image & gradient overlay on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover beam */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                    <Badge variant="secondary" className="font-light text-xs group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      {insight.badge}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 mb-4">
                    <div className="text-xs text-muted-foreground mb-2 group-hover:text-gray-400 transition-colors">
                      {new Date(insight.date).toLocaleDateString('en-GB', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-light mb-2 leading-snug group-hover:text-white transition-colors duration-300">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {insight.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border group-hover:border-white/20 transition-colors duration-300 mt-auto">
                    <Link href={`/resources/${insight.slug}`} className="inline-flex items-center text-sm font-medium text-primary group-hover:text-white transition-colors duration-300 group/link">
                      <span className="relative">
                        Read Insight
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </Card>
            )})}
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
              <Link href="/request-proposal">Request Consultation</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FMInsights;
