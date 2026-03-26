import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { headlineMetrics, chartDataSets, seasonalAlerts } from "@/lib/fmIntelligence";
import { MetricCard } from "@/components/tools/MetricCard";
import { CSSBarChart } from "@/components/tools/CSSBarChart";
import { CSSSVGLineChart } from "@/components/tools/CSSSVGLineChart";
import { CSSDonutChart } from "@/components/tools/CSSDonutChart";
import { SeasonalStrip } from "@/components/tools/SeasonalStrip";
import { AlertTriangle, ArrowRight, Download, Share2, BarChart3, PieChart, LineChart, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "UK FM Intelligence Dashboard — Market Data & Benchmarks | EntireFM",
  description: "Live UK facilities management market data — outsourcing rates, compliance failure statistics, cost benchmarks, and seasonal FM alerts. Updated quarterly by EntireFM.",
  alternates: { canonical: "https://www.entirefm.com/fm-intelligence" },
};

export default function FMIntelligencePage() {
  const currentMonth = new Date().getMonth();
  const nextMonth = (currentMonth + 1) % 12;
  const activeAlerts = seasonalAlerts.filter(a => a.month === currentMonth || a.month === nextMonth);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Intelligence Dashboard" }]} className="mb-12" />
          
          <div className="max-w-4xl">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 border border-primary/30 px-5 py-2 rounded-full backdrop-blur-sm">
              Live FM Industry Intelligence
            </span>
            <h1 className="text-5xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-[0.9]">
              UK FM <span className="font-bold text-primary">Intelligence</span> Dashboard
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mb-12">
              The UK FM industry at a glance — market data, compliance trends, outsourcing benchmarks, and seasonal maintenance alerts. Updated quarterly.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Data Last Updated: Q1 2025</span>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Next Update: Q2 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Alerts Banner */}
      {activeAlerts.length > 0 && (
        <section className="bg-amber-50 border-y border-amber-200 py-4">
          <div className="container mx-auto px-6 max-w-7xl">
            {activeAlerts.map((alert, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
                <div className="flex items-center gap-4 text-center md:text-left">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest">{alert.title}</h4>
                    <p className="text-xs text-amber-800/80 font-light">{alert.description}</p>
                  </div>
                </div>
                <Link href={alert.actionUrl} className="bg-amber-600 text-white px-6 py-2 rounded font-bold uppercase tracking-widest text-[10px] hover:bg-amber-700 transition-colors shrink-0">
                  {alert.action}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Headline Metrics Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-12 border-b border-border pb-8">
            <div>
              <h2 className="text-3xl font-light text-charcoal mb-2">UK FM Market at a Glance</h2>
              <p className="text-sm text-muted-foreground font-light uppercase tracking-widest leading-none">Primary industry performance indicators</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headlineMetrics.map((metric, idx) => (
              <MetricCard key={idx} metric={metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Analytics Hub */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-3">FM Market Analytics</h2>
              <p className="text-sm text-muted-foreground font-light max-w-xl">Deep-dive into sector-specific outsourcing rates, market growth projections, and compliance failure distribution.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2 text-[10px] uppercase tracking-widest font-bold border-border shadow-sm">
                <Download className="w-3.5 h-3.5" /> Full Report (PDF)
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 1: Line Chart */}
            <div className="bg-white p-10 rounded-2xl border border-border shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><LineChart className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal uppercase tracking-widest leading-none mb-1">Market Valuation</h3>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">UK FM Growth Projection 2021-2030 (£bn)</div>
                </div>
              </div>
              <div className="flex-1 py-8">
                <CSSSVGLineChart dataset={chartDataSets.find(d => d.id === "market-growth")!} />
              </div>
              <div className="pt-8 border-t border-border flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Source: Mordor Intelligence</span>
                <button className="text-[9px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                  Raw Data <Download className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Chart 2: Bar Chart */}
            <div className="bg-white p-10 rounded-2xl border border-border shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><BarChart3 className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal uppercase tracking-widest leading-none mb-1">Outsourcing Rate</h3>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">Percentage by Industrial Sector (2025)</div>
                </div>
              </div>
              <div className="flex-1">
                <CSSBarChart dataset={chartDataSets.find(d => d.id === "outsourcing-by-sector")!} />
              </div>
              <div className="pt-8 border-t border-border flex justify-between items-center mt-8">
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Source: BIFM Industry Data</span>
                <button className="text-[9px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5 hover:translate-x-1 transition-transform">
                  Raw Data <Download className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="bg-white p-10 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><PieChart className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal uppercase tracking-widest leading-none mb-1">Compliance Failure Analysis</h3>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">Relative Distribution of HSE Enforcement Notices</div>
                </div>
              </div>
              <CSSDonutChart dataset={chartDataSets.find(d => d.id === "compliance-failures")!} />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Calendar Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight">FM Seasonal <span className="text-primary font-bold">Calendar</span></h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">Proactive maintenance isn't just about what you do, but when you do it. Track statutory deadlines and best-practice windows across the year.</p>
          </div>
          
          <SeasonalStrip alerts={seasonalAlerts} />
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center border-t border-white/5 pt-16">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20"><Calendar className="w-5 h-5" /></div>
              <h4 className="text-sm font-bold uppercase tracking-widest">Never Miss a Test</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Our intelligence engine cross-references your assets with UK statutory deadlines to ensure zero compliance gaps.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20"><AlertTriangle className="w-5 h-5" /></div>
              <h4 className="text-sm font-bold uppercase tracking-widest">Urgency Scoring</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">We rank every maintenance event by risk level, allowing you to prioritize budgets across multi-site estates.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto border border-primary/20"><BarChart3 className="w-5 h-5" /></div>
              <h4 className="text-sm font-bold uppercase tracking-widest">Data-Driven FM</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">Leverage anonymized portfolio data to benchmark your estate's efficiency against industry averages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -mr-48 -mt-48" />
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-light text-charcoal mb-8 tracking-tighter leading-tight">
            How does your FM stack up <br/>against these <span className="font-bold underline decoration-primary decoration-4 underline-offset-8">benchmarks?</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto mb-16">
            Use our specialized tool suite to audit your compliance position, calculate your ROI transition, and build a defensible PPM schedule in minutes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/tools/compliance-checker" className="bg-charcoal text-white p-10 rounded-2xl group hover:bg-charcoal/95 transition-all text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/40 transition-all" />
              <ShieldCheck className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter">Compliance Checker</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed mb-8">Audit your statutory maintenance record against BS and SFG20 standards.</p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">Run Audit <ArrowRight className="w-3 h-3" /></span>
            </Link>

            <Link href="/tools/fm-roi-calculator" className="bg-white border-2 border-border p-10 rounded-2xl group hover:border-primary/50 transition-all text-left">
              <LineChart className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter text-charcoal">ROI Calculator</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-8">Calculate the 5-year TCO savings of switching from reactive to planned FM.</p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">Calculate ROI <ArrowRight className="w-3 h-3" /></span>
            </Link>

            <Link href="/tools/ppm-estimator" className="bg-white border-2 border-border p-10 rounded-2xl group hover:border-primary/50 transition-all text-left">
              <BarChart3 className="w-10 h-10 text-primary mb-8" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter text-charcoal">PPM Estimator</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed mb-8">Get site-specific maintenance cost estimates based on asset volume.</p>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">Get Estimate <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>

          <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Share this dashboard</span>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"><Share2 className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all font-bold text-xs">in</button>
              </div>
            </div>
            <div className="flex items-center gap-4 border-l border-border pl-12 hidden md:flex">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Embed on your site</span>
                <code className="bg-muted px-4 py-2 rounded text-[10px] text-primary border border-border">{`<iframe src="entirefm.com/fm-intelligence/embed" />`}</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
