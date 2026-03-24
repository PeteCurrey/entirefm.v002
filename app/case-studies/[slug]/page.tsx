import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, CaseStudy } from "@/lib/caseStudies";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Quote, ArrowRight } from "lucide-react";
import Script from "next/script";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies.find((cs) => cs.slug === resolvedParams.slug);
  if (!study) return {};

  return {
    title: `${study.headline} | FM Case Study | EntireFM`,
    description: `${study.challenge.substring(0, 150)}...`,
    alternates: {
      canonical: `https://www.entirefm.com/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const study = caseStudies.find((cs) => cs.slug === resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((cs) => cs.slug !== study.slug && (cs.sector === study.sector || Math.random() > 0.5))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": study.headline,
    "description": study.challenge,
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
        "name": "Case Studies",
        "item": "https://www.entirefm.com/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": study.client,
        "item": `https://www.entirefm.com/case-studies/${study.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter pb-20">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 opacity-30"
          style={{ backgroundImage: `url(${study.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-8 text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-8">
              {study.sector}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              {study.headline}
            </h1>
            
            <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed">
              {study.client} — {study.location}
            </p>

            {/* Stat Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-10 border-y border-white/10">
              {study.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-primary text-6xl font-black mb-2 tracking-tighter">{metric.value}</span>
                  <span className="text-gray-400 text-xs uppercase tracking-[0.3em] font-black">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 space-y-32">
          
          {/* Challenge */}
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-8">01. The Challenge</h2>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-200">
                {study.challenge}
              </p>
            </div>
            <div className="h-px bg-white/10 w-full mt-10 hidden lg:block" />
          </div>

          {/* Solution */}
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="h-px bg-white/10 w-full mt-10 hidden lg:block" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-8">02. The Solution</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-400">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-12">03. The Results</h2>
              <ul className="space-y-8">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1 transition-transform group-hover:scale-125" />
                    <span className="text-xl md:text-2xl font-light text-gray-200">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#161618] p-12 border border-white/5 relative overflow-hidden group">
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-primary/5 transition-transform group-hover:scale-110" />
              <blockquote className="relative z-10">
                <p className="text-2xl font-light italic text-white mb-10 leading-relaxed">
                  "{study.quote.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary" />
                  <cite className="text-primary text-sm font-black uppercase tracking-widest not-italic">
                    {study.quote.author}
                  </cite>
                </div>
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* Services Label Strip */}
      <section className="py-16 border-y border-white/5 bg-[#0a0a0b]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">Services Delivered:</span>
            {study.services.map((service, i) => (
              <div key={i} className="flex items-center text-white font-bold text-xs uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Related Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedStudies.map((cs) => (
              <Link 
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-[#161618] p-10 border border-white/5 hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="text-[10px] font-black uppercase text-primary tracking-[0.2em] mb-6">{cs.sector}</div>
                <h3 className="text-lg font-bold text-white mb-8 group-hover:text-primary transition-colors leading-tight flex-grow">{cs.client}</h3>
                <div className="flex items-center text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-primary transition-colors">
                  READ CASE STUDY <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-white py-32 text-center mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-[#0a0a0b] text-4xl font-black mb-12 tracking-tight">
            Ready to see results like these?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm shadow-xl hover:shadow-primary/20">
              <Link href="/contact">Get a Free FM Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-[#0a0a0b] border-[#0a0a0b]/10 hover:bg-gray-50 px-12 h-16 rounded-none uppercase tracking-widest font-black text-sm">
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
