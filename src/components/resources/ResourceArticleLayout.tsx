"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ArrowRight, Download, Phone, User, Share2, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { guides } from "@/lib/resourceGuides";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ToolLink {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface ResourceArticleLayoutProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedDate: string;
  quickFacts: string[];
  relatedTools: ToolLink[];
  downloadPdfSubtext?: string;
  speakToTeamSubtext: string;
  children: React.ReactNode;
  className?: string;
}

export function ResourceArticleLayout({
  title,
  description,
  category,
  readTime,
  publishedDate,
  quickFacts,
  relatedTools,
  downloadPdfSubtext = "Branded PDF with EntireFM watermark — free",
  speakToTeamSubtext,
  children,
  className
}: ResourceArticleLayoutProps) {
  const pathname = usePathname();
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const slug = pathname.split("/").pop() || "";

  useEffect(() => {
    // Collect H2s and assign IDs if missing
    const elements = Array.from(document.querySelectorAll("h2"));
    const headingsData = elements.map((el) => {
      const text = el.textContent || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      if (!el.id) el.id = id;
      return { id, text };
    });
    setHeadings(headingsData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [children]);

  const relatedGuides = guides.filter((g) => g.slug !== slug).slice(0, 3);
  
  const handleDownloadPdf = async () => {
    // Calls the generic API endpoint for now. You might pass specific body data depending on your PDF builder implementation.
    try {
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateType: "guide", data: { title } })
      });
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}-guide.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch(err) {
      console.error(err);
      alert("Failed to download PDF.");
    }
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className={cn("min-h-screen bg-background font-sans", className)}>
      
      {/* NARROW HERO */}
      <section className="bg-charcoal pt-32 pb-16 px-6 relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: title }]} className="mb-8 justify-center [&_a]:text-gray-400 [&_a:hover]:text-white [&_span]:text-gray-200" />
          
          <div className="flex items-center justify-center mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/30 px-5 py-2 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tighter leading-[0.9] font-sans">
             {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? <span key={i} className="font-bold text-primary">{word}</span> : word + ' ')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
             {description}
          </p>

          <div className="flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
             <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               <span className="text-white">Editorial Team</span>
             </div>
             <span className="opacity-20">|</span>
             <span>{readTime}</span>
             <span className="opacity-20">|</span>
             <span>Updated {publishedDate}</span>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN BODY LAYOUT */}
      <section className="py-12 bg-white">
         <div className="container mx-auto px-6 max-w-[1200px]">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
               
               {/* LEFT COLUMN: CONTENT */}
               <div className="w-full lg:w-[68%] pt-12 lg:pt-0">
                  <div className="prose prose-lg max-w-none 
                    prose-h2:font-bold prose-h2:text-[22px] prose-h2:text-[#1a2e4a] prose-h2:border-l-[3px] prose-h2:border-[#f5a623] prose-h2:pl-4 prose-h2:mt-12 prose-h2:mb-4
                    prose-h3:font-semibold prose-h3:text-[18px] prose-h3:text-[#1a2e4a] prose-h3:mt-8 prose-h3:mb-3
                    prose-p:font-normal prose-p:text-[17px] prose-p:text-[#333333] prose-p:leading-[1.8] prose-p:mb-5 
                    prose-strong:text-[#1a2e4a] prose-strong:font-bold
                    prose-ul:pl-6 prose-li:py-1.5 prose-li:pl-2 prose-li:marker:text-[#f5a623]
                    prose-ol:pl-6 prose-ol:marker:text-white prose-ol:marker:bg-[#1a2e4a] prose-ol:marker:rounded-full prose-ol:marker:w-6 prose-ol:marker:h-6 prose-ol:marker:flex prose-ol:marker:items-center prose-ol:marker:justify-center prose-li:py-2
                  ">
                     {/* Custom bullet styling overrides done above in Tailwind prose via global or specific classes. 
                         For ol styling, we might need some custom CSS to do the navy circle counter perfectly, 
                         but Tailwind prose provides a good baseline. We can add a global style for the counters if needed. */}
                     <style dangerouslySetInnerHTML={{ __html: `
                       .prose ul > li::marker { content: '■ '; color: #f5a623; font-size: 0.8em; }
                       .prose ol { counter-reset: item; list-style-type: none; padding-left: 0; }
                       .prose ol > li { position: relative; padding-left: 2rem; }
                       .prose ol > li::before { 
                         content: counter(item); 
                         counter-increment: item; 
                         position: absolute; 
                         left: 0; 
                         top: 0.2rem; 
                         background-color: #1a2e4a; 
                         color: white; 
                         width: 1.25rem; 
                         height: 1.25rem; 
                         border-radius: 50%; 
                         display: flex; 
                         align-items: center; 
                         justify-content: center; 
                         font-size: 0.75rem; 
                         font-weight: bold; 
                       }
                     `}} />
                     
                     {children}
                  </div>

                  {/* RELATED GUIDES ROW */}
                  <div className="mt-20 pt-10 border-t border-border">
                     <h3 className="text-xl font-bold text-charcoal mb-6">More Compliance Guides</h3>
                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedGuides.map((g) => (
                           <Link key={g.slug} href={`/resources/${g.slug}`} className="group block border border-border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">{g.category}</span>
                              <h4 className="font-semibold text-charcoal text-sm mb-2 group-hover:text-primary transition-colors">{g.title}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-2 mb-4">{g.description}</p>
                              <div className="flex items-center justify-between text-xs font-bold text-charcoal">
                                <span>{g.readTime}</span>
                                <span className="text-primary group-hover:translate-x-1 transition-transform">Read Guide →</span>
                              </div>
                           </Link>
                        ))}
                     </div>
                  </div>

                  {/* SHARE BAR */}
                  <div className="mt-12 bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border">
                    <span className="font-semibold text-charcoal text-sm">Found this helpful? Share it:</span>
                    <div className="flex items-center gap-3">
                       <Button variant="outline" size="sm" className="gap-2" onClick={() => navigator.clipboard.writeText(shareUrl)}>
                         <Share2 className="w-4 h-4" /> Copy link
                       </Button>
                       <Button variant="outline" size="sm" className="gap-2" asChild>
                         <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                         </a>
                       </Button>
                       <Button variant="outline" size="sm" className="gap-2" asChild>
                         <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`}>
                            <Mail className="w-4 h-4" /> Email
                         </a>
                       </Button>
                    </div>
                  </div>

                  {/* BOTTOM CTA */}
                  <div className="mt-12 bg-charcoal rounded-2xl p-8 text-center text-white shadow-xl">
                     <h3 className="text-2xl font-bold mb-3">Need Expert FM Support?</h3>
                     <p className="text-white/80 mb-8 max-w-lg mx-auto">{speakToTeamSubtext}</p>
                     <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest h-12 px-8" asChild>
                           <Link href="/contact">Get a Proposal</Link>
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-widest h-12 px-8" asChild>
                           <Link href="/contact">Talk to the Team</Link>
                        </Button>
                     </div>
                  </div>
               </div>

               {/* RIGHT COLUMN: STICKY SIDEBAR (32%) */}
               <div className="w-full lg:w-[32%] relative">
                  <div className="sticky top-[100px] space-y-6">
                     
                     {/* Card 1: Table of Contents */}
                     {headings.length > 0 && (
                        <div className="bg-white border text-sm border-border rounded-2xl p-8 shadow-sm">
                           <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-6">In This Guide</h4>
                           <ul className="space-y-4">
                              {headings.map((h) => (
                                 <li key={h.id}>
                                    <a 
                                      href={`#${h.id}`} 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                                      }}
                                      className={cn(
                                        "block pl-4 border-l-2 transition-all duration-300 text-[13px]", 
                                        activeHeadingId === h.id ? "border-primary text-charcoal font-bold translate-x-1" : "border-border text-muted-foreground hover:text-charcoal hover:border-gray-300"
                                      )}
                                    >
                                       {h.text}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {/* Card 2: Quick Facts panel */}
                     <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-8">
                           <h4 className="text-[10px] font-bold text-amber-900 uppercase tracking-[0.2em] mb-6">Key Statistics</h4>
                           <ul className="space-y-4">
                              {quickFacts.map((fact, i) => (
                                 <li key={i} className="text-[13px] text-amber-900/80 font-normal flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                                    <span>{fact}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     {/* Card 3: Related Tools */}
                     <div className="bg-white border border-border rounded-2xl p-8 shadow-sm text-sm">
                        <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-6">FM Tool suite</h4>
                        <div className="space-y-5">
                           {relatedTools.map((tool, i) => (
                              <Link key={i} href={tool.href} className="flex items-start gap-4 group">
                                 <div className="w-10 h-10 rounded-xl shrink-0 bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                    {tool.icon}
                                 </div>
                                 <div className="flex-1 min-w-0">
                                    <div className="text-[13px] font-bold text-charcoal flex items-center gap-1 group-hover:text-primary transition-colors">
                                       <span className="truncate">{tool.title}</span> <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
                                    </div>
                                    <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1 font-light tracking-wide">{tool.description}</p>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>

                     {/* Card 4: Download CTA */}
                     <div className="bg-white border border-primary/20 rounded-2xl p-8 text-center overflow-hidden relative shadow-sm">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10" />
                        <h4 className="text-[13px] font-bold text-charcoal mb-2 uppercase tracking-tight">Technical PDF Guide</h4>
                        <p className="text-[11px] text-muted-foreground mb-6 font-light">{downloadPdfSubtext}</p>
                        <Button className="w-full bg-charcoal text-white hover:bg-black font-bold text-[10px] uppercase tracking-[0.2em] gap-2 h-12 shadow-md transition-all hover:-translate-y-1" onClick={handleDownloadPdf}>
                           <Download className="w-4 h-4" /> Download Guide
                        </Button>
                     </div>

                     {/* Card 5: Speak to the Team */}
                     <div className="bg-primary rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30 backdrop-blur-md">
                           <Phone className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-2 tracking-tight">Need Statutory Support?</h4>
                        <p className="text-xs font-medium opacity-90 mb-8 leading-relaxed max-w-[180px] mx-auto">{speakToTeamSubtext}</p>
                        <Button className="w-full bg-white text-primary hover:bg-gray-50 font-bold uppercase tracking-[0.2em] text-[10px] h-12 shadow-lg transition-all hover:scale-[1.02]" asChild>
                           <Link href="/contact">Talk to Expert <ArrowRight className="w-3 h-3 ml-2" /></Link>
                        </Button>
                     </div>

                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );
}
