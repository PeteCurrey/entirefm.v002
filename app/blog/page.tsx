import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { blogPosts } from "@/lib/blogPosts";
import { ArrowRight, Calendar, User, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Facilities Management Blog | FM Insight & News | EntireFM",
  description: "The EntireFM blog — practical insight, industry news, and expert commentary on UK facilities management, compliance, maintenance, and FM best practice.",
  alternates: {
    canonical: "https://www.entirefm.com/blog",
  },
};

export default function BlogIndex() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.entirefm.com${item.href}` : "https://www.entirefm.com/blog"
    }))
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
          <Breadcrumb items={breadcrumbItems} className="justify-center mb-8 text-white/80" />
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-charcoal">
            FM Insight from EntireFM
          </h1>
          <p className="text-xl text-charcoal/90 font-medium leading-relaxed max-w-3xl mx-auto">
            Practical insight, industry news, and expert commentary on UK facilities management, compliance, maintenance, and evolving FM best practice.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content (3/4 width) */}
            <div className="lg:w-3/4 space-y-12">
              {blogPosts.map((post, index) => (
                <article key={index} className="group border-b border-border pb-12 last:border-0">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px] ml-auto">
                      {post.category}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                    <h2 className="text-3xl font-bold mb-4 text-charcoal leading-tight tracking-tight">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3 italic">
                    {post.excerpt}
                  </p>

                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all shadow-sm border-charcoal/20 uppercase tracking-widest font-bold text-xs" asChild>
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read Article <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>

            {/* Sticky Sidebar (1/4 width) */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Search Widget */}
                <div className="bg-muted/30 border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-4 text-charcoal capitalize">Categories</h3>
                  <div className="space-y-3">
                    {Array.from(new Set(blogPosts.map(p => p.category))).map((cat, i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer border-b border-border/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-sm text-muted-foreground font-medium group-hover:text-primary transition-colors">{cat}</span>
                        <ArrowRight className="w-3 h-3 text-border group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Widget */}
                <div className="border border-border rounded-xl p-6 shadow-sm border-t-4 border-t-primary bg-white">
                  <h3 className="font-semibold text-lg mb-4 text-charcoal">Featured Insight</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, i) => (
                      <li key={i}>
                        <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-1">
                          <span className="text-xs text-primary font-bold uppercase tracking-widest">{post.category}</span>
                          <span className="text-sm font-medium text-charcoal group-hover:underline line-clamp-2 leading-snug">
                            {post.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Line */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-white tracking-tight">
            Discuss Your FM Strategy
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl shadow-primary/20">
            <Link href="/contact">Speak To EntireFM</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
