import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Search, ChevronRight, Clock, User, ArrowRight, Mail } from "lucide-react";
import { resourceArticles } from "@/lib/resources";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "The EntireFM Knowledge Hub | Facilities Management Insights & Guides",
  description: "Explore our comprehensive library of FM guides, compliance checklists, and expert insights to help you stay compliant and reduce facilities costs. Nationwide UK coverage.",
  alternates: {
    canonical: "https://www.entirefm.com/resources",
  },
};

export default function ResourcesPage() {
  const categories = [
    "All",
    "PPM & Maintenance",
    "Compliance",
    "Hard FM",
    "Soft FM",
    "Cleaning",
    "Industry Guides",
    "Checklists",
  ];

  const featuredArticle = resourceArticles[0];
  const otherArticles = resourceArticles.slice(1);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-inter">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Animated Dot Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotGrid)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-6 block">
            FACILITIES MANAGEMENT INSIGHTS
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            The EntireFM <span className="text-primary">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            Guides, checklists, and expert insight to help facilities managers, property owners, 
            and business operators stay compliant, reduce costs, and get more from their FM provider.
          </p>

          {/* Search Bar (Visual Only) */}
          <div className="max-w-2xl mx-auto relative mb-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search guides, topics, services..."
              className="w-full h-16 pl-16 pr-6 bg-white/5 border-white/10 rounded-none focus:border-primary focus:ring-1 focus:ring-primary text-lg text-white"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                  cat === "All" 
                    ? "bg-primary border-primary text-white" 
                    : "bg-transparent border-white/10 text-gray-400 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="pb-32 container mx-auto px-6">
        <Link href={`/resources/${featuredArticle.slug}`} className="group block">
          <div className="flex flex-col lg:flex-row min-h-[500px] border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500">
            {/* Left Content */}
            <div className="lg:w-1/2 bg-[#161618] p-12 md:p-16 flex flex-col justify-center">
              <div className="inline-block bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-8 w-fit">
                FEATURED
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 group-hover:text-primary transition-colors leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed">
                {featuredArticle.description}
              </p>
              <div className="flex items-center gap-6 mb-12 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  {featuredArticle.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {featuredArticle.readTime}
                </div>
              </div>
              <div className="flex items-center text-primary text-sm font-black uppercase tracking-widest">
                Read Guide <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-3" />
              </div>
            </div>
            {/* Right Illustration */}
            <div className="lg:w-1/2 bg-[#0d0d0f] relative flex items-center justify-center p-20 overflow-hidden">
              {/* Abstract Geometric SVG Illustration */}
              <svg width="400" height="400" viewBox="0 0 400 400" className="opacity-40 text-primary transition-transform duration-1000 group-hover:scale-110">
                <rect x="50" y="50" width="300" height="300" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 50L350 350" stroke="currentColor" strokeWidth="1" />
                <path d="M50 350L350 50" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="4" fill="none" />
                <rect x="150" y="150" width="100" height="100" fill="currentColor" opacity="0.1" />
                <path d="M200 100V300M100 200H300" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent" />
            </div>
          </div>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="pb-32 bg-[#0d0d0f] py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {otherArticles.map((article) => (
              <Link key={article.slug} href={`/resources/${article.slug}`} className="group h-full flex flex-col">
                <div className="bg-[#161618] p-10 border border-white/5 hover:border-primary/50 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  {/* Hover Accent Bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-primary group-hover:w-1.5 transition-all duration-500" />
                  
                  <div className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight flex-grow line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 font-light mb-10 line-clamp-2 leading-relaxed text-sm">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
                      Read <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Strip */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="newsletterDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#newsletterDots)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                Stay Ahead in Facilities Management
              </h2>
              <p className="text-xl text-white/80 font-light max-w-xl">
                Get expert FM insight delivered to your inbox — compliance updates, 
                maintenance guides, and industry news.
              </p>
            </div>
            <div className="w-full max-w-lg">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input 
                  placeholder="Your Work Email"
                  className="bg-white text-black h-16 rounded-none text-lg px-8 border-none focus:ring-2 focus:ring-black/20"
                />
                <Button className="bg-black hover:bg-gray-900 text-white font-black h-16 px-10 rounded-none uppercase tracking-widest text-sm transition-all duration-300">
                  Subscribe
                </Button>
              </div>
              <p className="text-[10px] text-white/60 uppercase tracking-widest text-center lg:text-left">
                No spam. Unsubscribe any time. Strictly FM insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="bg-white py-32 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-[#0a0a0b] text-4xl font-black mb-12 tracking-tight">
            Need expert FM support?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 h-16 rounded-none border-none uppercase tracking-widest font-black text-sm shadow-xl">
              <Link href="/contact">Talk to EntireFM</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-[#0a0a0b] border-[#0a0a0b]/10 hover:bg-gray-50 px-12 h-16 rounded-none uppercase tracking-widest font-black text-sm">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
