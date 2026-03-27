"use client";

import { useState, useEffect, useRef } from "react";
import type { TenderBrief } from "@/lib/toolTypes";
import { ArrowRight, Printer, Download, Loader2 } from "lucide-react";
import Link from "next/link";

type State = "form" | "lead" | "generating" | "document";

const LOADING_MESSAGES = [
  "Analysing your FM requirements…",
  "Referencing UK compliance standards…",
  "Building your service specification…",
  "Drafting KPIs and SLA requirements…",
  "Finalising your document…",
];

const SITE_COUNTS = ["1", "2–5", "6–15", "16–30", "31–50", "50+"];
const SIZES = ["Under 500 sq m", "500–2,000 sq m", "2,000–10,000 sq m", "10,000–50,000 sq m", "Over 50,000 sq m", "Multiple sites"];
const SECTORS = ["Retail", "Commercial", "Residential", "Industrial", "Hotel", "Healthcare", "Education", "Public Sector"];
const HARD_FM = ["M&E maintenance", "HVAC servicing", "Fire safety systems", "Electrical compliance", "Water safety (Legionella)", "Emergency lighting", "Building fabric maintenance", "Drone inspection services", "Generator servicing"];
const SOFT_FM = ["Commercial cleaning", "Manned security", "Concierge services", "Grounds maintenance", "Caretaking", "Window cleaning", "Industrial/external cleaning", "Waste management"];
const SPENDS = ["Under £50,000", "£50,000–£150,000", "£150,000–£500,000", "£500,000–£1m", "Over £1m", "Not sure"];
const CONTRACT_LENGTHS = ["1 year", "2 years", "3 years", "3–5 years", "5+ years", "Open to discussion"];
const TIMELINES = ["Within 1 month", "1–3 months", "3–6 months", "6–12 months", "Just planning ahead"];

type Req = Record<string, string | string[]>;

function MultiCheck({ label, options, field, req, onChange }: { label: string; options: string[]; field: string; req: Req; onChange: (f: string, v: string) => void }) {
  const selected = (req[field] as string[]) ?? [];
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-charcoal mb-3">{label}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {options.map((opt) => {
          const isSel = selected.includes(opt);
          return (
            <button key={opt} type="button" onClick={() => onChange(field, opt)}
              className={`text-left px-3 py-2.5 rounded-xl border-2 text-sm flex items-center gap-2 transition-all ${isSel ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"}`}>
              <span className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center ${isSel ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                {isSel && <span className="text-white text-[10px]">✓</span>}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SelectRow({ label, options, field, req, onChange }: { label: string; options: string[]; field: string; req: Req; onChange: (f: string, v: string) => void }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-charcoal mb-3">{label}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {options.map((opt) => (
          <button key={opt} type="button" onClick={() => onChange(field, opt)}
            className={`text-left px-3 py-2.5 rounded-xl border-2 text-sm transition-all ${req[field] === opt ? "border-primary bg-primary/5 text-primary font-medium" : "border-border hover:border-primary/30"}`}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TenderBriefClient() {
  const [state, setState] = useState<State>("form");
  const [req, setReq] = useState<Req>({ sectors: [], hardFM: [], softFM: [] });
  const [contact, setContact] = useState({ name: "", email: "", company: "", jobTitle: "", phone: "", wantsProposal: false });
  const [brief, setBrief] = useState<TenderBrief | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          template: 'TenderBrief',
          data: brief,
        }),
      });

      if (!response.ok) throw new Error('Failed to generate PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `EntireFM-Facility-Management-Brief-${new Date().toISOString().split('T')[0]}.pdf`;
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

  useEffect(() => {
    if (state !== "generating") return;
    setProgress(0); setMsgIdx(0);
    const mi = setInterval(() => setMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length), 2000);
    const pi = setInterval(() => setProgress((p) => Math.min(p + 0.6, 95)), 100);
    return () => { clearInterval(mi); clearInterval(pi); };
  }, [state]);

  const set = (field: string, val: string) => {
    setReq((r) => {
      const prev = (r[field] as string[]) ?? [];
      if (Array.isArray(r[field])) {
        return { ...r, [field]: prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val] };
      }
      return { ...r, [field]: val };
    });
  };

  const handleGenerate = async () => {
    setState("generating");
    const flat: Record<string, any> = {};
    for (const [k, v] of Object.entries(req)) flat[k] = Array.isArray(v) ? v.join(", ") : v;
    try {
      const res = await fetch("/api/tender-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requirements: flat, contact }),
      });
      if (!res.ok) throw new Error();
      const data: TenderBrief = await res.json();
      setBrief(data);
      setProgress(100);
      setTimeout(() => setState("document"), 400);
    } catch {
      setError("Something went wrong. Please try again.");
      setState("form");
    }
  };

  if (state === "generating") return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-6 text-center">
      <div className="w-16 h-16 mb-8"><img src="/logo-small.svg" alt="EntireFM" className="w-full h-full object-contain" /></div>
      <h2 className="text-2xl font-light text-charcoal mb-2">Generating your FM brief</h2>
      <p className="text-muted-foreground text-sm mb-10 h-5">{LOADING_MESSAGES[msgIdx]}</p>
      <div className="w-full max-w-md bg-gray-100 rounded-full h-2 overflow-hidden mb-4">
        <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-xs text-muted-foreground uppercase tracking-widest">This may take up to 15 seconds</p>
    </div>
  );

  if (state === "lead") return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <div className="text-4xl mb-4">📋</div>
        <h2 className="text-2xl font-semibold text-charcoal mb-2">Your brief is ready to generate</h2>
        <p className="text-muted-foreground font-light">Enter your details to access your FM specification document.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-3">
        <input required type="text" placeholder="Full name *" value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <input required type="email" placeholder="Email address *" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <input required type="text" placeholder="Company *" value={contact.company} onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <input type="text" placeholder="Job title (optional)" value={contact.jobTitle} onChange={(e) => setContact((c) => ({ ...c, jobTitle: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <label className="flex items-start gap-3 cursor-pointer text-sm text-muted-foreground">
          <input type="checkbox" checked={contact.wantsProposal} onChange={(e) => setContact((c) => ({ ...c, wantsProposal: e.target.checked }))} className="mt-1" />
          I'd like EntireFM to review my brief and provide a proposal
        </label>
        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg">
          Generate Document →
        </button>
      </form>
    </div>
  );

  if (state === "document" && brief) return (
    <div className="relative">
      {/* Sticky action bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-border shadow-sm print:hidden">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-charcoal truncate">{brief.documentTitle}</span>
          <div className="flex gap-2">
            <button onClick={handleDownloadPDF} disabled={isGeneratingPDF} className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded text-sm font-medium hover:bg-muted transition-colors">
              {isGeneratingPDF ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>
              ) : (
                <><Printer className="w-4 h-4" /> Download PDF</>
              )}
            </button>
            <Link href="/contact?source=tender-brief" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded text-sm font-bold hover:bg-primary/90 transition-colors">
              <ArrowRight className="w-4 h-4" /> Get a Proposal
            </Link>
          </div>
        </div>
      </div>

      {/* Document */}
      <div className="max-w-4xl mx-auto px-8 py-12" id="tender-document">
        {/* Doc header */}
        <div className="flex items-start justify-between border-b-2 border-charcoal pb-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-charcoal mb-1">{brief.documentTitle}</h1>
            <p className="text-sm text-muted-foreground">Generated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
            <p className="text-sm text-muted-foreground">Prepared for: {req.orgName || contact.company}</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">EntireFM</p>
            <p className="text-xs text-muted-foreground">entirefm.com</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-muted/30 rounded-xl p-6 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Executive Summary</h2>
          <p className="text-sm text-charcoal leading-relaxed font-light">{brief.executiveSummary}</p>
        </div>

        {/* Sections */}
        {brief.sections?.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-lg font-semibold text-charcoal border-b border-border pb-2 mb-4">{section.title}</h2>
            <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-light">{section.content}</div>
          </div>
        ))}

        {/* KPIs */}
        {brief.kpis?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-charcoal border-b border-border pb-2 mb-4">Key Performance Indicators</h2>
            <table className="w-full text-sm">
              <thead><tr className="bg-charcoal text-white"><th className="px-4 py-2 text-left">KPI</th></tr></thead>
              <tbody className="divide-y divide-border">{brief.kpis.map((kpi, i) => <tr key={i} className="bg-white"><td className="px-4 py-2.5 text-muted-foreground">{kpi}</td></tr>)}</tbody>
            </table>
          </div>
        )}

        {/* SLAs */}
        {brief.slaRequirements?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-charcoal border-b border-border pb-2 mb-4">SLA Requirements</h2>
            <table className="w-full text-sm">
              <thead><tr className="bg-charcoal text-white"><th className="px-4 py-2 text-left">Requirement</th></tr></thead>
              <tbody className="divide-y divide-border">{brief.slaRequirements.map((sla, i) => <tr key={i} className="bg-white"><td className="px-4 py-2.5 text-muted-foreground">{sla}</td></tr>)}</tbody>
            </table>
          </div>
        )}

        {/* Evaluation Criteria */}
        {brief.evaluationCriteria?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-charcoal border-b border-border pb-2 mb-4">Evaluation Criteria</h2>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">{brief.evaluationCriteria.map((c, i) => <li key={i}>{c}</li>)}</ol>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-border pt-6 mt-10">
          <p className="text-xs text-muted-foreground text-center">
            This document was generated using the EntireFM FM Brief Generator and is intended as a starting point for FM procurement. For a detailed proposal from EntireFM, contact our team at{" "}
            <a href="https://www.entirefm.com/contact" className="text-primary">entirefm.com/contact</a>.
          </p>
        </div>
      </div>
    </div>
  );

  // ── FORM ──
  const isReady = req.orgName && (req.sectors as string[])?.length > 0;
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {error && <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">{error}</div>}

      <div className="space-y-2">
        {/* Organisation */}
        <div className="mb-8">
          <h3 className="font-semibold text-charcoal mb-4 text-lg border-b border-border pb-2">Organisation Details</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Organisation / company name *" value={(req.orgName as string) ?? ""} onChange={(e) => setReq((r) => ({ ...r, orgName: e.target.value }))} className="border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          </div>
          <textarea placeholder="Brief site description — e.g. Mixed-use commercial estate — 3 office buildings and a retail unit in central Manchester" value={(req.siteDescription as string) ?? ""} onChange={(e) => setReq((r) => ({ ...r, siteDescription: e.target.value }))} rows={3} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
        </div>

        <SelectRow label="Number of sites" options={SITE_COUNTS} field="siteCount" req={req} onChange={(f, v) => setReq((r) => ({ ...r, [f]: v }))} />
        <SelectRow label="Approximate total floor area" options={SIZES} field="size" req={req} onChange={(f, v) => setReq((r) => ({ ...r, [f]: v }))} />
        <MultiCheck label="Sectors covered" options={SECTORS} field="sectors" req={req} onChange={set} />
        <MultiCheck label="Hard FM services required" options={HARD_FM} field="hardFM" req={req} onChange={set} />
        <MultiCheck label="Soft FM services required" options={SOFT_FM} field="softFM" req={req} onChange={set} />
        <SelectRow label="Approximate current annual FM spend" options={SPENDS} field="currentSpend" req={req} onChange={(f, v) => setReq((r) => ({ ...r, [f]: v }))} />
        <SelectRow label="Preferred contract length" options={CONTRACT_LENGTHS} field="contractLength" req={req} onChange={(f, v) => setReq((r) => ({ ...r, [f]: v }))} />
        <SelectRow label="Target mobilisation date" options={TIMELINES} field="timeline" req={req} onChange={(f, v) => setReq((r) => ({ ...r, [f]: v }))} />

        <div className="mb-6 pt-4">
          <h3 className="font-semibold text-charcoal mb-3">Pain Points & Priorities</h3>
          <textarea placeholder="What are your biggest FM challenges right now? e.g. Inconsistent standards across sites, poor compliance documentation, high reactive costs…" value={(req.painPoints as string) ?? ""} onChange={(e) => setReq((r) => ({ ...r, painPoints: e.target.value }))} rows={3} maxLength={300} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none mb-3" />
          <textarea placeholder="Any specific compliance priorities or upcoming audits? (optional)" value={(req.compliance as string) ?? ""} onChange={(e) => setReq((r) => ({ ...r, compliance: e.target.value }))} rows={2} maxLength={200} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none mb-3" />
          <textarea placeholder="Any other requirements or context? (optional)" value={(req.additional as string) ?? ""} onChange={(e) => setReq((r) => ({ ...r, additional: e.target.value }))} rows={2} maxLength={300} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
        </div>

        <div className="pt-4 flex justify-end">
          <button onClick={() => setState("lead")} disabled={!isReady} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed">
            Generate My FM Brief <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
