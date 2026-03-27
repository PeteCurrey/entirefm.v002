"use client";

import { useState, useEffect } from "react";
import { calculateROI, fmt, type ROIResults, type FMInputs } from "@/lib/roiCalculator";
import { ArrowRight, Info, TrendingUp, ShieldAlert, Clock, Download, Printer, Loader2 } from "lucide-react";
import Link from "next/link";

type State = "form" | "lead" | "calculating" | "results";

const SECTORS = ["Retail", "Commercial / Office", "Residential Property", "Industrial / Warehouse", "Hotel & Hospitality", "Healthcare", "Education", "Other"];
const SIZES = ["Under 500 sq m", "500–2,000 sq m", "2,000–5,000 sq m", "5,000–15,000 sq m", "15,000–50,000 sq m", "Over 50,000 sq m"];
const COUNTS = ["1", "2–5", "6–15", "16–30", "31–50", "50+"];

export default function ROICalculatorClient() {
  const [state, setState] = useState<State>("form");
  const [inputs, setInputs] = useState<FMInputs>({
    currentFMContractCost: 0,
    annualReactiveSpend: 0,
    inHouseStaffCost: 0,
    managementTimeHours: 0,
    managementHourlyRate: 28,
    complianceFinesCost: 0,
    insuranceClaimsRelatedToFM: 0,
    numberOfSites: "1",
    averageSiteSizeSqm: "500–2,000 sq m",
    sector: "Commercial / Office",
    desiredContractLength: 3,
  });
  const [contact, setContact] = useState({ name: "", email: "", company: "", phone: "", wantsProposal: false });
  const [results, setResults] = useState<ROIResults | null>(null);
  const [summary, setSummary] = useState("");
  const [ticker, setTicker] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          template: 'ROIReport',
          data: {
            inputs,
            results,
            summary,
          }
        }),
      });

      if (!response.ok) throw new Error('Failed to generate PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `EntireFM-Cost-Efficiency-Analysis-${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleCalculate = async () => {
    setState("calculating");
    // Start ticker animation
    const target = calculateROI(inputs).fiveYearSaving;
    const duration = 2000;
    const start = Date.now();
    const t = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setTicker(Math.floor(target * progress));
      if (progress === 1) clearInterval(t);
    }, 16);

    try {
      const res = await fetch("/api/roi-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputs, contact }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResults(data.results);
      setSummary(data.summary);
      setTimeout(() => setState("results"), 2200);
    } catch {
      setResults(calculateROI(inputs));
      setTimeout(() => setState("results"), 2200);
    }
  };

  if (state === "calculating") return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 text-center">
      <h2 className="text-2xl font-light text-charcoal mb-2">Analysing Your FM Economics</h2>
      <p className="text-muted-foreground text-sm mb-12 uppercase tracking-widest">Identifying potential savings…</p>
      <div className="text-6xl md:text-8xl font-bold text-primary tabular-nums mb-4">{fmt(ticker)}</div>
      <p className="text-sm text-muted-foreground">in identified 5-year savings efficiency</p>
    </div>
  );

  if (state === "results" && results) return (
    <div className="pb-24">
      {/* ROI Hero Banner */}
      <div className="bg-amber-400 py-12 px-6">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/60 mb-2 block">Cost Efficiency Analysis</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-1">
              You could save <span className="text-white drop-shadow-sm">{fmt(results.annualSaving)}</span> per year
            </h2>
            <p className="text-xl text-charcoal/80 font-medium">That's {fmt(results.fiveYearSaving)} over {inputs.desiredContractLength || 5} years</p>
          </div>
          <div className="bg-charcoal text-white px-8 py-6 rounded-2xl flex flex-col items-center justify-center shadow-xl border border-white/10">
            <span className="text-4xl font-bold text-amber-400">{results.roiPercentage}%</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Estimated ROI</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 pt-12 space-y-12">
        {/* AI Summary */}
        <div className="bg-charcoal text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" /> Executive Summary
          </h3>
          <p className="text-lg font-light leading-relaxed italic opacity-90">{summary || "Based on your inputs, switching to EntireFM TFM offers significant cost consolidation and risk reduction potential."}</p>
        </div>

        {/* Cost Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current model */}
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-charcoal mb-6 border-b border-border pb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> Your Current True FM Cost
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Visible Costs (Contract + Reactive + Staff)</span>
                <span className="font-semibold text-charcoal">{fmt(results.currentVisibleCosts)}</span>
              </div>
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-amber-800 flex items-center gap-2">Hidden Costs <Info className="w-3 h-3" /></span>
                  <span className="font-bold text-amber-800">{fmt(results.currentHiddenCosts)}</span>
                </div>
                <ul className="text-xs text-amber-700/70 space-y-1 pl-2 border-l border-amber-200">
                  <li>• Management Time: {fmt(results.managementTimeCost)}</li>
                  <li>• Compliance Risk/Fines: {fmt(inputs.complianceFinesCost)}</li>
                  <li>• FM-Related Insurance Claims: {fmt(inputs.insuranceClaimsRelatedToFM)}</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t border-border flex justify-between items-center">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Total Annual TCO</span>
              <span className="text-2xl font-bold text-red-600">{fmt(results.currentAnnualTrueCost)}</span>
            </div>
          </div>

          {/* EntireFM model */}
          <div className="bg-white border border-border p-8 rounded-2xl shadow-sm bg-gradient-to-br from-white to-green-50/30">
            <h3 className="text-lg font-semibold text-charcoal mb-6 border-b border-border pb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" /> Estimated EntireFM TFM Cost
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estimated Annual Contract</span>
                <span className="font-semibold text-charcoal">{fmt(results.entireFMEstimatedAnnual)}</span>
              </div>
              <div className="bg-green-50/50 border border-green-100 p-4 rounded-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-green-700 mb-3 opacity-60">Projected Savings Efficiencies</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-800">Reactive Spend Reduction</span>
                    <span className="font-bold text-green-700">-{fmt(results.projectedReactiveSavings)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-800">Management Time Reclaimed</span>
                    <span className="font-bold text-green-700">-{fmt(results.projectedManagementTimeSaving)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-800">Compliance Risk Elimination</span>
                    <span className="font-bold text-green-700">-{fmt(results.projectedComplianceSaving)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-border flex justify-between items-center text-green-600">
              <span className="text-sm font-bold uppercase tracking-widest opacity-60">Net Annual Saving</span>
              <span className="text-2xl font-bold underline decoration-green-400/30 underline-offset-4">{fmt(results.annualSaving)}</span>
            </div>
          </div>
        </div>

        {/* 5-Year Projection Chart (CSS Line Chart) */}
        <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-lg font-semibold text-charcoal">5-Year FM Cost Projection</h3>
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><span className="w-3 h-0.5 bg-red-400" /> Current Model</span>
              <span className="flex items-center gap-2"><span className="w-3 h-0.5 bg-green-500" /> EntireFM TFM</span>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2 relative border-l border-b border-border mt-4 mb-8">
            {/* Legend marker */}
            <div className="absolute right-0 top-0 bg-amber-400 text-charcoal px-4 py-2 rounded font-bold text-sm shadow-lg z-10 -mr-2 -mt-4">
              Total Saving: {fmt(results.fiveYearSaving)}
            </div>

            {results.yearByYear.map((yr, i) => {
              const maxVal = Math.max(...results.yearByYear.map(y => y.currentCost));
              const currentH = (yr.currentCost / maxVal) * 100;
              const efmH = (yr.entireFMCost / maxVal) * 100;

              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-full flex justify-center gap-1 items-end h-full">
                    {/* Current Model Bar (thin line) */}
                    <div className="w-1 bg-red-400/30 group-hover:bg-red-400 transition-colors relative" style={{ height: `${currentH}%` }}>
                      <div className="absolute top-0 transform -translate-y-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] text-red-600 font-bold">{fmt(yr.currentCost)}</div>
                    </div>
                    {/* EntireFM Bar */}
                    <div className="w-6 bg-green-500/80 group-hover:bg-green-500 transition-colors relative" style={{ height: `${efmH}%` }}>
                      <div className="absolute top-0 transform -translate-y-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] text-green-700 font-bold">{fmt(yr.entireFMCost)}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground">Year {yr.year}</span>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-5 text-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
            {results.yearByYear.map(y => <div key={y.year}>Saving: {fmt(y.saving)}</div>)}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-primary p-12 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-light mb-4">These Are Your Numbers — Now Let's Make Them Real</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            These figures are based on industry benchmarks and the information you provided. To get a precise, fixed-cost proposal for your estate, schedule a professional FM review with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?source=roi-calculator" className="bg-charcoal text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-charcoal/90 transition-all shadow-xl">
              Get a Precise FM Proposal
            </Link>
            <button onClick={handleDownloadPDF} disabled={isGeneratingPDF} className="bg-white text-primary px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Generating...
                </>
              ) : (
                "Download Full Report (PDF)"
              )}
            </button>
          </div>
        </div>

        <button onClick={() => setState("form")} className="text-xs font-bold uppercase tracking-widest text-muted-foreground text-center w-full hover:text-primary pt-10">
          ← Back to input form
        </button>
      </div>
    </div>
  );

  // ── FORM ──
  const isReady = inputs.currentFMContractCost > 0;
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-charcoal mb-4 text-lg border-b border-border pb-2">1. Your Current FM Spend</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Annual FM Contract Cost (£)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 font-semibold">£</span>
                  <input type="number" value={inputs.currentFMContractCost || ""} onChange={(e) => setInputs(i => ({ ...i, currentFMContractCost: Number(e.target.value) }))} className="w-full border border-border rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5 italic">Total annual spend with your current FM provider(s).</p>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Annual Reactive Spend (£)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 font-semibold">£</span>
                  <input type="number" value={inputs.annualReactiveSpend || ""} onChange={(e) => setInputs(i => ({ ...i, annualReactiveSpend: Number(e.target.value) }))} className="w-full border border-border rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5 italic">Emergency callouts, unplanned repairs, and non-contract jobs.</p>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">In-House FM Staff Costs (£/year)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40 font-semibold">£</span>
                  <input type="number" value={inputs.inHouseStaffCost || ""} onChange={(e) => setInputs(i => ({ ...i, inHouseStaffCost: Number(e.target.value) }))} className="w-full border border-border rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5 italic">Salaries, NI, pensions of staff dedicated to building management.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-4 text-lg border-b border-border pb-2">2. Hidden Costs (The "Invisible" Budget)</h3>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100 space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-2">Management Time (hours/week)</label>
                <input type="number" value={inputs.managementTimeHours || ""} onChange={(e) => setInputs(i => ({ ...i, managementTimeHours: Number(e.target.value) }))} className="w-full border border-amber-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/20" placeholder="0" />
                <p className="text-[10px] text-amber-700/60 mt-1.5">Hours spent by managers chasing contractors or dealing with building issues.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-2">Compliance Fines (£)</label>
                  <input type="number" value={inputs.complianceFinesCost || ""} onChange={(e) => setInputs(i => ({ ...i, complianceFinesCost: Number(e.target.value) }))} className="w-full border border-amber-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/20" placeholder="0" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-2">Insurance Claims (£)</label>
                  <input type="number" value={inputs.insuranceClaimsRelatedToFM || ""} onChange={(e) => setInputs(i => ({ ...i, insuranceClaimsRelatedToFM: Number(e.target.value) }))} className="w-full border border-amber-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/20" placeholder="0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-charcoal mb-4 text-lg border-b border-border pb-2">3. Your Estate Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Sector</label>
                <select value={inputs.sector} onChange={(e) => setInputs(i => ({ ...i, sector: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none">
                  {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Number of Sites</label>
                  <select value={inputs.numberOfSites} onChange={(e) => setInputs(i => ({ ...i, numberOfSites: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none">
                    {COUNTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Avg. Site Size</label>
                  <select value={inputs.averageSiteSizeSqm} onChange={(e) => setInputs(i => ({ ...i, averageSiteSizeSqm: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none">
                    {SIZES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2">Contract Term (Years)</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(y => (
                    <button key={y} onClick={() => setInputs(i => ({ ...i, desiredContractLength: y }))} className={`flex-1 py-3 rounded-xl border-2 text-sm font-bold transition-all ${inputs.desiredContractLength === y ? "border-primary bg-primary text-white" : "border-border text-muted-foreground hover:border-primary/30"}`}>
                      {y}yr
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button onClick={() => setState("lead")} disabled={!isReady} className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl disabled:opacity-40 disabled:grayscale">
              Analyse FM Economics <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {state === "lead" && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xl rounded-2xl p-8 shadow-2xl relative">
            <button onClick={() => setState("form")} className="absolute top-4 right-4 text-muted-foreground hover:text-charcoal">✕</button>
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📈</div>
              <h2 className="text-2xl font-bold text-charcoal mb-2">Your ROI Analysis is Ready</h2>
              <p className="text-muted-foreground">Enter your details to reveal your full 5-year FM cost comparison.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }} className="space-y-3">
              <input required type="text" placeholder="Full name *" value={contact.name} onChange={(e) => setContact(c => ({ ...c, name: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
              <input required type="email" placeholder="Email address *" value={contact.email} onChange={(e) => setContact(c => ({ ...c, email: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
              <input required type="text" placeholder="Company *" value={contact.company} onChange={(e) => setContact(c => ({ ...c, company: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
              <input type="text" placeholder="Phone number (optional)" value={contact.phone} onChange={(e) => setContact(c => ({ ...c, phone: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
              <label className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground py-2">
                <input type="checkbox" checked={contact.wantsProposal} onChange={(e) => setContact(c => ({ ...c, wantsProposal: e.target.checked }))} className="mt-1" />
                I'd like EntireFM to provide a detailed proposal based on these figures
              </label>
              <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl">
                Show My Results →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
