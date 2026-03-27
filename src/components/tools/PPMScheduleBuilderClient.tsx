"use client";

import { useState } from "react";
import { ppmAssets, assetCategories, getAssetsByCategory, getFrequencyLabel, frequencyMonths, type PPMAsset } from "@/lib/ppmAssets";
import { CheckCircle2, ChevronDown, ChevronUp, Printer, ArrowRight, X, Loader2, ShieldCheck, ActivitySquare } from "lucide-react";
import Link from "next/link";
import { PPMCalendarGrid } from "./PPMCalendarGrid";
import { ScheduleHealthScore } from "./ScheduleHealthScore";
import { ScheduleStickyBar } from "./ScheduleStickyBar";

type State = "select" | "preview" | "lead";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CATEGORY_COLORS: Record<string, string> = {
  "HVAC & Climate Control": "bg-blue-100 text-blue-700",
  "Fire Safety": "bg-red-100 text-red-700",
  Electrical: "bg-yellow-100 text-yellow-800",
  "Water & Plumbing": "bg-cyan-100 text-cyan-700",
  "Vertical Transport": "bg-purple-100 text-purple-700",
  "Security & Access": "bg-slate-100 text-slate-700",
  "Building Fabric": "bg-stone-100 text-stone-700",
  "Grounds & External": "bg-green-100 text-green-700",
};

const MONTH_DOT_COLORS: Record<string, string> = {
  "HVAC & Climate Control": "bg-blue-400",
  "Fire Safety": "bg-red-400",
  Electrical: "bg-yellow-400",
  "Water & Plumbing": "bg-cyan-400",
  "Vertical Transport": "bg-purple-400",
  "Security & Access": "bg-slate-400",
  "Building Fabric": "bg-stone-400",
  "Grounds & External": "bg-green-400",
};

export default function PPMScheduleBuilderClient() {
  const [state, setState] = useState<State>("select");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", company: "", phone: "" });
  const [leadSent, setLeadSent] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const selectedAssets = ppmAssets.filter((a) => selected.has(a.id));
  const totalAnnualVisits = selectedAssets.reduce((sum, a) => {
    const freqs = getFrequencyLabel(a);
    const visits = freqs.reduce((s, f) => s + (frequencyMonths[f]?.length ?? 0), 0);
    return sum + visits;
  }, 0);

  const toggle = (id: string) => {
    setSelected((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/leads/ppm-schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          selectedAssets: Array.from(selected).map(id => ppmAssets.find(a => a.id === id)?.name),
        }),
      });
    } catch (error) {
      console.error("Failed to save lead:", error);
    }
    setLeadSent(true);
    setState("preview");
  };

  // Calendar data: for each month, which asset categories have visits
  const calendarData: Record<number, Set<string>> = {};
  for (let m = 1; m <= 12; m++) calendarData[m] = new Set();
  for (const asset of selectedAssets) {
    for (const freq of getFrequencyLabel(asset)) {
      for (const month of frequencyMonths[freq] ?? []) {
        calendarData[month].add(asset.category);
      }
    }
  }

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      // Format data for the PDF template
      const formattedData = {
        buildingName: contact.company || "Estimated Facility",
        buildingType: "Commercial Site",
        generatedFor: contact.name || "Website User",
        totalAssets: selectedAssets.length,
        statutoryCount: selectedAssets.filter(a => a.compliance).length,
        recommendedCount: selectedAssets.filter(a => !a.compliance).length,
        assets: selectedAssets.map(asset => {
          // Combine all tasks for the asset
          const tasks = Object.values(asset.frequencies)
            .flatMap(freqArray => Array.isArray(freqArray) ? freqArray : []);
            
          return {
            category: asset.category,
            assetName: asset.name,
            frequency: getFrequencyLabel(asset).join(', '),
            tasks: tasks,
            standard: asset.standard,
            statutory: asset.compliance || false,
            nextDueMonth: "Next Month"
          };
        })
      };

      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateType: "ppm-schedule",
          data: formattedData,
          metadata: { generatedFor: formattedData.generatedFor }
        })
      });
      
      if (!res.ok) throw new Error("PDF generation failed");
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      
      const disposition = res.headers.get('Content-Disposition');
      let filename = "EntireFM-PPM-Schedule.pdf";
      if (disposition && disposition.indexOf('attachment') !== -1) {
        const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
        if (matches && matches[1]) filename = matches[1].replace(/['"]/g, '');
      }
      
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // ── LEAD MODAL overlay ──
  if (state === "lead") return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full shadow-2xl relative">
        <button onClick={() => setState("preview")} className="absolute top-4 right-4 text-muted-foreground hover:text-charcoal"><X className="w-5 h-5" /></button>
        <h2 className="text-2xl font-semibold text-charcoal mb-2">Want EntireFM to manage this schedule?</h2>
        <p className="text-muted-foreground font-light mb-6">Share your details and we'll send you a copy of your schedule plus a no-obligation PPM proposal.</p>
        <form onSubmit={handleLeadSubmit} className="space-y-3">
          <input required type="text" placeholder="Full name *" value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          <input required type="email" placeholder="Work email *" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          <input type="text" placeholder="Company" value={contact.company} onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-md">
            Send Me My Schedule + Proposal
          </button>
        </form>
      </div>
    </div>
  );

  // ── PREVIEW ──
  if (state === "preview") return (
    <div className="max-w-5xl mx-auto px-6 py-12" id="ppm-schedule">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-border">
        <div>
          <h2 className="text-2xl font-bold text-charcoal mb-1">PPM Schedule — {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</h2>
          <p className="text-sm text-muted-foreground">Based on SFG20 and BESA standards · {selectedAssets.length} assets selected</p>
        </div>
      </div>

      <ScheduleStickyBar 
         onBack={() => setState("select")}
         onLead={() => setState("lead")}
         onDownload={handleDownloadPDF}
         isDownloading={isDownloading}
      />

      {/* Statutory warning & Health Score */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
         <ScheduleHealthScore selectedAssets={selectedAssets} />
         
         {selectedAssets.some((a) => a.compliance) && (
           <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mt-6 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl shrink-0">⚠️</span>
                <h4 className="font-bold text-red-800 text-lg leading-none">Statutory Warning</h4>
             </div>
             <p className="text-sm text-red-700/80 font-medium leading-relaxed">
               Your schedule includes <strong>{selectedAssets.filter((a) => a.compliance).length} statutory compliance requirements</strong>. These are legally required — failure to maintain records may result in enforcement action.
             </p>
           </div>
         )}
      </div>

      {/* Annual Calendar */}
      <div className="mb-10 relative">
        <div className="flex justify-between items-end mb-5">
           <h3 className="text-xl font-semibold text-charcoal">Annual Visit Calendar</h3>
           <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1.5 rounded-full flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Live Generation Sequence
           </div>
        </div>
        <PPMCalendarGrid selectedAssets={selectedAssets} calendarData={calendarData} />
      </div>

      {/* Schedule Table */}
      <div className="mb-8 overflow-hidden rounded-xl border border-border shadow-sm">
        <div className="bg-charcoal text-white px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-charcoal/90 transition-colors" onClick={() => setExpandedAsset(expandedAsset ? null : "expandAll")} >
           <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <ActivitySquare className="w-4 h-4 text-primary" /> Full Asset Schedule ({selectedAssets.length})
           </h3>
           <span className="text-xs text-muted-foreground">Click below rows to view specific SLA definitions</span>
        </div>
        
        <div className="overflow-x-auto bg-white border-t border-border/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50 text-muted-foreground border-b border-border">
                <th className="px-6 py-3 text-left font-bold text-[10px] uppercase tracking-widest whitespace-nowrap">Facility Asset</th>
                <th className="px-4 py-3 text-left font-bold text-[10px] uppercase tracking-widest hidden md:table-cell">Regime Category</th>
                <th className="px-4 py-3 text-left font-bold text-[10px] uppercase tracking-widest">Op. Frequency</th>
                <th className="px-4 py-3 text-left font-bold text-[10px] uppercase tracking-widest hidden lg:table-cell">Guidance / Code</th>
                <th className="px-6 py-3 text-center font-bold text-[10px] uppercase tracking-widest">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {selectedAssets.map((asset) => {
                const freqs = getFrequencyLabel(asset);
                const isExpanded = expandedAsset === asset.id || expandedAsset === "expandAll";
                return (
                  <tr key={asset.id} className="hover:bg-primary/[0.02] cursor-pointer transition-colors" onClick={() => setExpandedAsset(isExpanded ? null : asset.id)}>
                    <td className="px-6 py-4 w-1/3">
                      <div className="flex items-start gap-3">
                        <span className="text-xl bg-white shadow-sm border rounded p-1.5 shrink-0">{asset.icon}</span>
                        <div className="min-w-0">
                          <div className="font-semibold text-charcoal truncate">{asset.name}</div>
                          {isExpanded && (
                            <div className="mt-3 space-y-2 text-xs border-l-2 border-primary/20 pl-3 ml-2">
                              {Object.entries(asset.frequencies).map(([freq, tasks]) => tasks && tasks.length > 0 && (
                                <div key={freq} className="animate-in fade-in slide-in-from-left-2 duration-300">
                                  <span className="font-bold uppercase tracking-widest text-[#15234b] block mb-1">{freq.replace(/([A-Z])/g, " $1").trim()}</span>
                                  <ul className="space-y-1">
                                    {(tasks as string[]).map((t, i) => <li key={i} className="text-muted-foreground leading-snug relative pr-2 before:content-[''] before:absolute before:left-[-11px] before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-muted-foreground/30">{t}</li>)}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell align-top text-xs">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border uppercase tracking-wider font-bold text-[9px] ${CATEGORY_COLORS[asset.category] ?? "bg-gray-50 border-gray-200 text-gray-600"}`}>
                        {asset.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {freqs.map((f) => <span key={f} className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 px-2 py-1 rounded shadow-sm">{f}</span>)}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-xs font-mono text-muted-foreground hidden lg:table-cell align-top truncate max-w-[150px]" title={asset.standard}>{asset.standard}</td>
                    <td className="px-6 py-4 align-top text-center w-32">
                      {asset.compliance ? (
                         <div className="inline-flex flex-col items-center gap-1 bg-red-50 border border-red-200 text-red-700 px-2.5 py-1.5 rounded shadow-sm">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-bold uppercase tracking-wider">Statutory</span>
                         </div>
                      ) : (
                         <span className="inline-block border border-border text-muted-foreground px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider bg-white shadow-sm">Best Practice</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center print:hidden">
        <button onClick={() => setState("select")} className="text-sm text-muted-foreground hover:text-charcoal transition-colors">← Edit asset selection</button>
      </div>
    </div>
  );

  // ── SELECT ──
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Asset Selector */}
        <div className="lg:w-2/3">
          <div className="space-y-8">
            {assetCategories.map((cat) => {
              const assets = getAssetsByCategory(cat);
              const selectedCount = assets.filter((a) => selected.has(a.id)).length;
              return (
                <div key={cat}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="font-semibold text-charcoal">{cat}</h3>
                    {selectedCount > 0 && (
                      <span className="text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full">{selectedCount} selected</span>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {assets.map((asset) => {
                      const isSel = selected.has(asset.id);
                      return (
                        <button
                          key={asset.id}
                          onClick={() => toggle(asset.id)}
                          className={`text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 group ${
                            isSel ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                          }`}
                        >
                          <span className="text-2xl">{asset.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-sm font-medium ${isSel ? "text-primary" : "text-charcoal"}`}>{asset.name}</span>
                              {asset.compliance && (
                                <span className="text-[9px] font-bold uppercase tracking-wider bg-red-100 text-red-600 px-1.5 py-0.5 rounded shrink-0">Statutory</span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {getFrequencyLabel(asset).map((f) => (
                                <span key={f} className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{f}</span>
                              ))}
                            </div>
                          </div>
                          {isSel && <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Sticky Summary */}
        <div className="lg:w-1/3">
          <div className="sticky top-24 bg-white border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-charcoal">Your Selected Assets</h3>
              {selected.size > 0 && (
                <span className="text-xs font-bold bg-primary text-white px-2.5 py-1 rounded-full">{selected.size}</span>
              )}
            </div>

            {selected.size === 0 ? (
              <p className="text-sm text-muted-foreground font-light italic">Select assets from the left to build your schedule.</p>
            ) : (
              <>
                <div className="space-y-3 mb-6 max-h-72 overflow-y-auto">
                  {assetCategories.map((cat) => {
                    const items = getAssetsByCategory(cat).filter((a) => selected.has(a.id));
                    if (!items.length) return null;
                    return (
                      <div key={cat}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{cat}</p>
                        {items.map((a) => (
                          <div key={a.id} className="flex items-center justify-between text-sm py-1">
                            <span className="text-charcoal">{a.icon} {a.name}</span>
                            <button onClick={() => toggle(a.id)} className="text-muted-foreground hover:text-red-500 transition-colors ml-2">
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-border pt-4 mb-5">
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Annual scheduled visits</span>
                    <span className="font-bold text-charcoal">{totalAnnualVisits}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Statutory items</span>
                    <span className="font-bold text-red-600">{selectedAssets.filter((a) => a.compliance).length}</span>
                  </div>
                </div>
                <button
                  onClick={() => setState("preview")}
                  className="w-full bg-primary text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  Build My Schedule <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
