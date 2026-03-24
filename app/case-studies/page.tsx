import { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, CheckCircle2 } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'FM Case Studies | Client Success Stories | EntireFM',
  description: 'Explore EntireFM\'s facilities management case studies — real results delivered for retail, residential, industrial, hotel, and commercial clients across the UK.',
  alternates: {
    canonical: 'https://www.entirefm.com/case-studies',
  },
};

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ sector?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeSector = resolvedSearchParams.sector || "All";
  const sectors = ["All", "Offices", "Industrial", "Retail", "Aviation", "Residential", "Other"];

  const filteredStudies = activeSector === "All"
    ? caseStudies
    : caseStudies.filter(cs => cs.sector.toLowerCase().includes(activeSector.toLowerCase()));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": caseStudies.slice(0, 4).map(cs => ({
      "@type": "Question",
      "name": `How did EntireFM help the ${cs.sector} client in the ${cs.slug.replace(/-/g, ' ')} case study?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": cs.headline
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section with Large Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: 'url(/images/case-studies-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>›</span>
            <span className="text-white">Case Studies</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Proof in action.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Real results for real clients. Quantified outcomes, not marketing fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Every outcome is measured Section */}
      <section className="py-24 bg-white text-[#0a0a0b] text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-normal mb-8 leading-tight">
            Every outcome is <span className="text-primary font-bold">measured</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
            We don't publish vague testimonials. Every case study below features verified KPIs — from compliance scores and response times to cost savings and satisfaction uplifts.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Across logistics hubs, aviation terminals, healthcare facilities, and corporate estates, we consistently deliver FM outcomes our clients can prove to their boards.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-gray-50 text-[#0a0a0b] border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <Link
                key={sector}
                href={sector === "All" ? "/case-studies" : `/case-studies?sector=${sector.toLowerCase()}`}
                className={`px-8 py-2 text-sm font-bold uppercase tracking-widest transition-all ${
                  (activeSector.toLowerCase() === sector.toLowerCase() || (activeSector === "All" && sector === "All"))
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {sector}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 bg-[#0a0a0b]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredStudies.map((cs) => (
              <Link 
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group relative bg-[#161618] border border-white/5 hover:border-primary/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Hover Image Layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-20 group-hover:scale-110 z-0"
                  style={{ backgroundImage: `url(${cs.image})` }}
                />
                
                {/* Gentle Pink Glow on Hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <div className="p-10 flex flex-col h-full relative z-20">
                  <div className="mb-6">
                    <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                      {cs.sector}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary transition-colors leading-tight min-h-[3.5rem]">
                    {cs.client}
                  </h3>
                  
                  <h4 className="text-sm font-normal text-gray-400 mb-8 leading-relaxed">
                    {cs.headline}
                  </h4>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {cs.results.slice(0, 4).map((result, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0 transition-transform group-hover/item:scale-125" />
                        <span className="text-sm text-gray-300 font-light leading-snug">{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-widest group/link">
                    Read case study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-[#0a0a0b] text-4xl font-bold mb-8 tracking-tight">Ready to see results like these?</h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-12 h-14 uppercase tracking-widest font-black text-sm transition-all shadow-xl hover:shadow-primary/20">
            <Link href="/contact">Get a Free FM Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
