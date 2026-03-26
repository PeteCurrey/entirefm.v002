"use client";

import { useState } from "react";
import { ppmAssets, assetCategories, getAssetsByCategory, getFrequencyLabel, frequencyMonths, type PPMAsset } from "@/lib/ppmAssets";
import { CheckCircle2, ChevronDown, ChevronUp, Printer, ArrowRight, X } from "lucide-react";
import Link from "next/link";

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
        <div className="flex gap-2 print:hidden">
          <button onClick={() => setState("lead")} className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-primary/90 transition-colors">
            <ArrowRight className="w-4 h-4" /> Get Managed
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded text-sm font-medium hover:bg-muted transition-colors">
            <Printer className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      {/* Statutory warning */}
      {selectedAssets.some((a) => a.compliance) && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
          <p className="text-sm text-red-800 font-medium">
            ⚠️ Your schedule includes <strong>{selectedAssets.filter((a) => a.compliance).length} statutory compliance requirements</strong>. These are legally required — failure to maintain records may result in enforcement action.
          </p>
        </div>
      )}

      {/* Annual Calendar */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-charcoal mb-5">Annual Visit Calendar</h3>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="px-4 py-3 text-left font-semibold w-32">Category</th>
                {MONTHS.map((m) => <th key={m} className="px-2 py-3 text-center font-semibold w-14">{m}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {assetCategories.filter((cat) => selectedAssets.some((a) => a.category === cat)).map((cat) => (
                <tr key={cat} className="bg-white">
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${CATEGORY_COLORS[cat] ?? "bg-gray-100 text-gray-700"}`}>
                      {cat.split(" ")[0]}
                    </span>
                  </td>
                  {MONTHS.map((_, mi) => {
                    const month = mi + 1;
                    const hasVisit = calendarData[month]?.has(cat);
                    return (
                      <td key={mi} className="px-2 py-3 text-center">
                        {hasVisit && <div className={`w-3 h-3 rounded-full mx-auto ${MONTH_DOT_COLORS[cat] ?? "bg-gray-400"}`} />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-charcoal mb-5">Full Asset Schedule</h3>
        <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="px-5 py-4 text-left font-semibold text-xs uppercase tracking-wider">Asset</th>
                <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wider">Frequency</th>
                <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wider hidden lg:table-cell">Standard</th>
                <th className="px-4 py-4 text-center font-semibold text-xs uppercase tracking-wider">Statutory</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              {selectedAssets.map((asset) => {
                const freqs = getFrequencyLabel(asset);
                const isExpanded = expandedAsset === asset.id;
                return (
                  <tr key={asset.id} className="hover:bg-muted/20 cursor-pointer" onClick={() => setExpandedAsset(isExpanded ? null : asset.id)}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 font-semibold text-charcoal">
                        <span className="text-lg">{asset.icon}</span>
                        <div>
                          <div>{asset.name}</div>
                          {isExpanded && (
                            <div className="mt-2 space-y-1">
                              {Object.entries(asset.frequencies).map(([freq, tasks]) => tasks && tasks.length > 0 && (
                                <div key={freq} className="pl-0">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">{freq.replace(/([A-Z])/g, " $1").trim()}</span>
                                  {(tasks as string[]).map((t, i) => <p key={i} className="text-xs text-muted-foreground">• {t}</p>)}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold ${CATEGORY_COLORS[asset.category] ?? ""}`}>{asset.category}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {freqs.map((f) => <span key={f} className="text-[10px] font-bold uppercase tracking-wider bg-muted px-2 py-0.5 rounded">{f}</span>)}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-xs text-muted-foreground hidden lg:table-cell">{asset.standard}</td>
                    <td className="px-4 py-4 text-center">
                      {asset.compliance && <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">Statutory</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Click any row to expand task details</p>
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
