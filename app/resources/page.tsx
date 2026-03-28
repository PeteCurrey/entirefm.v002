import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { resources } from "@/lib/resources";
import { ArrowRight, BookOpen, Clock, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Facilities Management Resources & Guides | EntireFM",
  description: "Expert FM guides, compliance checklists, and industry insight from EntireFM — everything you need to understand PPM, hard FM, soft FM, and building compliance.",
  alternates: {
    canonical: "https://www.entirefm.com/resources",
  },
};

const badgeStyles: Record<string, string> = {
  "Insight": "bg-blue-50 text-blue-700 border-blue-200",
  "Guide": "bg-purple-50 text-purple-700 border-purple-200",
  "Manual": "bg-amber-50 text-amber-700 border-amber-200",
  "Checklist": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Reference": "bg-slate-50 text-slate-700 border-slate-200",
  "Article": "bg-rose-50 text-rose-700 border-rose-200",
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

  const categories = Array.from(new Set(resources.map(r => r.category)));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border bg-charcoal">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <Breadcrumb items={breadcrumbItems} className="justify-center mb-8 [&_a]:text-gray-400 [&_a:hover]:text-white [&_span]:text-gray-200" />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-white tracking-tighter leading-[0.9]">
            The EntireFM <span className="font-bold text-primary italic">Knowledge</span> Hub
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Practical guides, statutory checklists, and expert FM insight — helping facilities managers and property owners stay ahead of compliance and operational excellence.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
             <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-primary" /> {resources.length} Industry Insights
             </div>
             <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Updated Weekly
             </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content (3/4 width) */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-10">
                {resources.map((resource, index) => (
                  <Link key={index} href={`/resources/${resource.slug}`} className="group block">
                    <Card className="flex flex-col h-full transition-all duration-500 border-border group-hover:border-primary/50 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(245,166,35,0.1)] overflow-hidden bg-white relative">
                      {/* Pink Bottom Border on Hover */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
                      
                      <div className="p-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-8">
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border rounded-md transition-colors",
                            badgeStyles[resource.badge] || "bg-gray-50 text-gray-700 border-gray-200"
                          )}>
                            {resource.badge}
                          </span>
                          <span className="text-[10px] text-muted-foreground/60 font-bold uppercase tracking-widest flex items-center gap-2">
                            <BookOpen className="w-3 h-3 text-primary" />
                            {resource.readTime} Read
                          </span>
                        </div>
                        
                        <div className="mb-4">
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40">{resource.category}</span>
                           <h2 className="text-2xl font-bold mt-2 text-charcoal group-hover:text-primary transition-colors leading-tight line-clamp-2">
                             {resource.title}
                           </h2>
                        </div>
                        
                        <p className="text-[15px] text-muted-foreground font-light leading-relaxed mb-10 flex-grow line-clamp-3">
                          {resource.description}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-border flex items-center justify-between group/btn">
                           <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal group-hover:text-primary transition-colors flex items-center gap-2">
                              Read Full {resource.badge}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                           </span>
                           <span className="text-[10px] text-muted-foreground/40 font-medium italic opacity-0 group-hover:opacity-100 transition-opacity">
                              {resource.date}
                           </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sticky Sidebar (1/4 width) */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Categories Widget */}
                <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal mb-8">Service Focus</h3>
                  <div className="space-y-4">
                    {categories.map((cat, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer pb-4 border-b border-border/50 last:border-0 last:pb-0">
                        <span className="text-sm text-charcoal/70 font-medium group-hover:text-primary transition-colors">{cat}</span>
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                           <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Audit Widget */}
                <div className="bg-charcoal rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -z-0" />
                  <h3 className="text-lg font-bold mb-3 relative z-10">Statutory Audit</h3>
                  <p className="text-xs text-white/60 font-medium mb-8 leading-relaxed relative z-10">
                    Require a baseline compliance review for your UK estate?
                  </p>
                  <Button className="w-full bg-primary hover:bg-white hover:text-primary text-white font-bold uppercase tracking-widest h-12 text-[10px] shadow-lg transition-all" asChild>
                    <Link href="/contact">Book Audit</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Footer CTA */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block">Have a Specific Question?</span>
          <h2 className="text-4xl md:text-6xl font-light mb-12 text-charcoal tracking-tight">
            Can't find the <span className="font-bold underline decoration-primary/30">technical</span> answer you need?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Button size="lg" className="bg-charcoal hover:bg-black text-white px-10 h-16 uppercase tracking-widest font-bold shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto" asChild>
               <Link href="/contact">Speak To An Engineer</Link>
             </Button>
             <Button variant="outline" size="lg" className="border-border text-charcoal px-10 h-16 uppercase tracking-widest font-bold hover:bg-gray-50 w-full sm:w-auto" asChild>
               <Link href="/request-proposal">Request Quote</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
