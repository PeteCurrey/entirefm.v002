import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getResourceBySlug, resources } from "@/lib/resources";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, BookOpen, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourcePostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ResourcePostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getResourceBySlug(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | EntireFM Resources`,
    description: post.description,
    alternates: {
      canonical: `https://www.entirefm.com/resources/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return resources.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ResourcePost({ params }: ResourcePostProps) {
  const resolvedParams = await params;
  const post = getResourceBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.entirefm.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.entirefm.com/resources/${resolvedParams.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-charcoal border-b border-border">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('/images/fm-insights-hero.jpg')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          
          <Breadcrumb items={breadcrumbItems} className="mb-6 [&_a]:text-gray-400 [&_a:hover]:text-white [&_span]:text-gray-200" />
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
              {post.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-sm text-gray-300 flex items-center gap-1 font-medium">
              <BookOpen className="w-4 h-4 opacity-70" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight tracking-tight drop-shadow-lg">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-300 font-light leading-relaxed border-l-2 border-primary pl-6 hover:border-white transition-colors">
            {post.description}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-charcoal prose-h2:mt-16 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:font-light prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground prose-li:font-light prose-strong:text-charcoal prose-strong:font-bold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2 text-muted-foreground hover:text-primary border-border">
                <Share2 className="w-4 h-4" /> Share Guide
              </Button>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 uppercase tracking-widest font-bold" asChild>
              <Link href="/contact">Require FM Support?</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
