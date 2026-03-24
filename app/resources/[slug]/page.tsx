import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, Clock, User, Share2, Bookmark, ChevronRight, MessageSquare, Phone } from "lucide-react";
import { resourceArticles } from "@/lib/resources";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = resourceArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | EntireFM Resources`,
    description: article.description,
    alternates: {
      canonical: `https://www.entirefm.com/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.entirefm.com/resources/${article.slug}`,
    },
  };
}

export default async function ResourceArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = resourceArticles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.entirefm.com/logo.png"
      }
    },
    "datePublished": "2024-03-24"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.entirefm.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources",
        "item": "https://www.entirefm.com/resources"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://www.entirefm.com/resources/${article.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Narrow Hero Header */}
      <section className="bg-[#161618] pt-40 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-12 text-xs font-black uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-8">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-tight tracking-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-3 text-white">
                <User className="w-4 h-4 text-primary" />
                {article.author}
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-3">
                March 24, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Column: Article Content */}
            <article className="lg:w-[70%]">
              <div 
                className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed
                prose-strong:text-white prose-strong:font-bold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic
                prose-li:text-gray-400
                "
                dangerouslySetInnerHTML={{ __html: article.content.replace(/\n\n/g, '<p></p>').replace(/## (.*)/g, '<h2 id="$1">$1</h2>').replace(/### (.*)/g, '<h3 id="$1">$1</h3>') }}
              />

              {/* FAQ Section */}
              <div className="mt-24 pt-24 border-t border-white/5">
                <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                  {article.faq.map((item, i) => (
                    <div key={i} className="bg-[#161618] p-10 border border-white/5">
                      <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-tight">{item.question}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Column: Sticky Sidebar */}
            <aside className="lg:w-[30%]">
              <div className="lg:sticky lg:top-32 space-y-12">
                
                {/* TOC / Jump Links (Visual Placeholders for Simplicity) */}
                <div className="bg-[#161618] p-10 border border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 border-b border-primary/20 pb-4">
                    In this article
                  </h4>
                  <ul className="space-y-6">
                    <li className="text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">Introduction</li>
                    <li className="text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">The Core Standards</li>
                    <li className="text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">Operational Benefits</li>
                    <li className="text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">Compliance Checklist</li>
                    <li className="text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">Summary & Next Steps</li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-primary p-10 text-white relative overflow-hidden group">
                  <Phone className="absolute -top-4 -right-4 w-24 h-24 text-black/10 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-black mb-6 relative z-10 leading-tight">
                    Need Expert FM Advice?
                  </h4>
                  <p className="text-white/90 font-light mb-10 relative z-10">
                    Talk to our specialists today about your building's specific needs.
                  </p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-black h-14 rounded-none uppercase tracking-widest text-xs">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>

                {/* Share Strip */}
                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Share Guide:</span>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Bottom Footer CTA */}
      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-[#0a0a0b] text-3xl md:text-4xl font-black mb-12 tracking-tight">
            Looking for expert FM support? Talk to EntireFM today.
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm">
            <Link href="/contact">Enquire Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
