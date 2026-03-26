import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { resources } from "@/lib/resources";
import { ArrowRight, BookOpen, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Facilities Management Resources & Guides | EntireFM",
  description: "Expert FM guides, compliance checklists, and industry insight from EntireFM — everything you need to understand PPM, hard FM, soft FM, and building compliance.",
  alternates: {
    canonical: "https://www.entirefm.com/resources",
  },
};

export default function ResourcesIndex() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources Hub" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.entirefm.com${item.href}` : "https://www.entirefm.com/resources"
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-border bg-charcoal">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <Breadcrumb items={breadcrumbItems} className="justify-center mb-8" />
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-6 text-white tracking-tight">
            The EntireFM Knowledge Hub
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Practical guides, compliance checklists, and expert insight from the EntireFM team — helping facilities managers, property owners, and businesses stay compliant.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content (3/4 width) */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((resource, index) => (
                  <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-border group overflow-hidden bg-white">
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary shrink-0">
                          {resource.category}
                        </span>
                        <div className="h-[1px] w-full bg-border" />
                        <span className="text-xs text-muted-foreground shrink-0 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {resource.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-semibold mb-4 text-charcoal group-hover:text-primary transition-colors line-clamp-3">
                        {resource.title}
                      </h2>
                      
                      <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                        {resource.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-border">
                        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary transition-colors" asChild>
                          <Link href={`/resources/${resource.slug}`} className="flex items-center gap-2 font-medium">
                            Read Full Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar (1/4 width) */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Search / Filter Widget */}
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 text-charcoal">Categories</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(resources.map(r => r.category))).map((cat, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-sm text-muted-foreground font-light group-hover:text-primary transition-colors">{cat}</span>
                        <ArrowRight className="w-3 h-3 text-border group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter/Action Widget */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm mb-4">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-charcoal">Free Compliance Audit</h3>
                  <p className="text-sm text-muted-foreground font-light mb-6">
                    Book a free compliance review with our engineering team.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium shadow-md" asChild>
                    <Link href="/contact">Book Audit</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Line */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Can't find what you're looking for?
          </h2>
          <Button size="lg" className="bg-charcoal hover:bg-black text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl">
            <Link href="/contact">Speak To The Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
