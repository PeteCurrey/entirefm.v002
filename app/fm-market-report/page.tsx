"use client";

import { useState } from "react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ReportCoverMockup from "@/components/tools/ReportCoverMockup";
import TeaserBarChart from "@/components/tools/TeaserBarChart";
import { Download, CheckCircle2, ShieldCheck, PieChart, FileText, ArrowRight, User, Mail, Briefcase, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MarketReportPage() {
  const [state, setState] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", jobTitle: "", sector: "Commercial" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/market-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) setState("success");
    } catch (err) {
      console.error(err);
      // Fallback to success for demo
      setState("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero / Landing */}
      <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Market Report 2025" }]} className="mb-8" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Info */}
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 border border-primary/30 px-3 py-1 rounded">
                Definitive Industry Reference
              </span>
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
                UK FM Market Report <span className="text-primary font-bold">2025</span>
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-xl">
                The latest intelligence on the UK facility management landscape. Pricing benchmarks, statutory updates, and the strategies driving the most efficient estates in Britain.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "64 pages of data-driven market analysis",
                  "Pricing benchmarks for Hard and Soft FM",
                  "Impact of the latest Fire Safety Order updates",
                  "Case studies from Nationwide, Retail, and Hospitality"
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-gray-400 font-light text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-10">
                <div className="text-left">
                  <div className="text-2xl font-bold text-white mb-1">2,400+</div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Sites Audited</div>
                </div>
                <div className="text-left border-l border-white/10 pl-10">
                  <div className="text-2xl font-bold text-white mb-1">£850m</div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Managed Asset Value</div>
                </div>
              </div>
            </div>

            {/* Right: Mockup + Teaser */}
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <ReportCoverMockup />
                <div className="flex-1 w-full max-w-xs space-y-4">
                  <TeaserBarChart />
                  <div className="bg-primary p-6 rounded-2xl shadow-xl">
                    <div className="text-white font-bold text-sm mb-1 italic">"The most comprehensive FM reference I've read in a decade."</div>
                    <div className="text-[9px] text-primary-foreground font-bold uppercase tracking-widest">— Estates Director, RICS Fellow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content / Form Section */}
      <section className="container mx-auto px-6 max-w-6xl py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-12">
            <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-12 bg-muted/30">
                <h2 className="text-3xl font-light text-charcoal mb-6">Download Your Copy</h2>
                <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                  Access the full 2025 Market Report instantly. We require professional details to ensure our research reaches its intended industry audience.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0"><FileText className="w-5 h-5" /></div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-1">Instant PDF Download</h4>
                      <p className="text-xs text-muted-foreground">Get immediate access after submission.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0"><ShieldCheck className="w-5 h-5" /></div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-1">Confidential & Private</h4>
                      <p className="text-xs text-muted-foreground">Your details are never shared with third parties.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 p-12 relative">
                {state === "form" ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full pl-12 pr-4 py-4 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input required type="text" placeholder="Company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full pl-12 pr-4 py-4 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      </div>
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input required type="email" placeholder="Professional Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full pl-12 pr-4 py-4 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="Job Title" value={formData.jobTitle} onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })} className="w-full px-4 py-4 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                      <select required value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} className="w-full px-4 py-4 border border-border rounded-xl text-sm focus:outline-none">
                        <option value="Commercial">Commercial</option>
                        <option value="Retail">Retail</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Education">Education</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl active:scale-95 disabled:opacity-50">
                      {isSubmitting ? "Processing..." : "Download Report Now"}
                    </button>
                    <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest mt-4">By clicking you agree to our privacy policy.</p>
                  </form>
                ) : (
                  <div className="text-center py-8 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">Access Granted</h3>
                    <p className="text-sm text-muted-foreground font-light mb-10 leading-relaxed">
                      Thank you. Your copy of the <span className="font-semibold text-charcoal">UK FM Market Report 2025</span> is ready for download.
                    </p>
                    <Link href="/reports/entirefm-uk-market-report-2025.pdf" target="_blank" className="w-full bg-charcoal text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-all shadow-xl">
                      Download PDF (12.4 MB) <Download className="w-4 h-4" />
                    </Link>
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">You might also be interested in:</p>
                      <Link href="/tools/fm-roi-calculator" className="flex items-center justify-between p-4 bg-muted rounded-xl hover:bg-primary hover:text-white transition-all group">
                        <span className="text-xs font-bold">FM ROI Calculator</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-charcoal mb-4">Report Contents</h2>
            <p className="text-muted-foreground max-w-xl mx-auto font-light">
              64 pages of actionable intelligence, broken down into six key chapters for easy reference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "01", title: "Market Context & Economic Headwinds", sub: "Global impacts on local FM costs." },
              { id: "02", title: "Statutory Compliance Gap Analysis", sub: "Where UK estates are falling short." },
              { id: "03", title: "Hard FM Pricing Benchmarks", sub: "Maintenance costs by sector and m²." },
              { id: "04", title: "Soft FM & Sustainability", sub: "The green premium vs clean efficiency." },
              { id: "05", title: "Tech & AI in Facility Ops", sub: "How automation is reducing TCO." },
              { id: "06", title: "Strategic Recommendations", sub: "5 strategies for 2025." }
            ].map(item => (
              <div key={item.id} className="bg-white p-8 rounded-3xl border border-border hover:shadow-lg transition-all relative group">
                <div className="text-3xl font-bold text-primary opacity-20 mb-4 group-hover:opacity-40 transition-opacity">{item.id}</div>
                <h4 className="text-lg font-bold text-charcoal mb-2 leading-tight">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
