"use client";

import { useState, useEffect } from "react";
import type { PPMEstimate } from "@/lib/toolTypes";
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import Link from "next/link";

type State = "form" | "lead" | "generating" | "results";

const LOADING_MESSAGES = [
  "Calculating your site profile…",
  "Applying sector-specific pricing benchmarks…",
  "Calculating multi-site efficiencies…",
  "Estimating reactive savings potential…",
  "Building your cost summary…",
];

const SECTORS = ["Retail", "Commercial / Office", "Residential Property", "Industrial / Warehouse", "Hotel & Hospitality", "Healthcare", "Education", "Other"];
const BUILDING_TYPES = ["Single office or commercial unit", "Retail unit or small estate", "Residential block or development", "Industrial unit or warehouse", "Hotel or multi-use hospitality", "Multi-building campus", "Multi-site portfolio (national)"];
const SITE_COUNTS = ["1", "2–5", "6–15", "16–30", "31–50", "50+"];
const SIZES = ["Under 500 sq m", "500–2,000 sq m", "2,000–5,000 sq m", "5,000–15,000 sq m", "15,000–50,000 sq m", "Over 50,000 sq m"];
const REACTIVE_SPENDS = ["Under £5,000", "£5,000–£20,000", "£20,000–£50,000", "£50,000–£150,000", "£150,000–£500,000", "Over £500,000", "I don't know"];
const SERVICES = ["HVAC & air conditioning", "Mechanical & electrical (M&E)", "Fire safety systems", "Electrical compliance (EICR/PAT)", "Water safety (Legionella)", "Emergency lighting", "Building fabric & structure", "Access control & entry systems", "External & grounds maintenance", "Commercial cleaning"];
const COMPLIANCE_OPTS = ["Critical — we're audit-ready at all times", "Important — but we have some gaps", "We're working on improving our compliance", "It's not currently a priority"];

function fmt(n: number) {
  return `£${n.toLocaleString("en-GB")}`;
}

export default function PPMEstimatorClient() {
  const [state, setState] = useState<State>("form");
  const [profile, setProfile] = useState<Record<string, string | string[]>>({});
  const [contact, setContact] = useState({ name: "", email: "", company: "", phone: "", wantsProposal: false });
  const [estimate, setEstimate] = useState<PPMEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [msgIdx, setMsgIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);

  useEffect(() => {
    if (state !== "generating") return;
    setProgress(0); setMsgIdx(0);
    const mi = setInterval(() => setMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length), 2000);
    const pi = setInterval(() => setProgress((p) => Math.min(p + 1.2, 95)), 100);
    return () => { clearInterval(mi); clearInterval(pi); };
  }, [state]);

  const toggle = (key: string, val: string) => {
    const prev = Array.isArray(profile[key]) ? (profile[key] as string[]) : [];
    const next = prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val];
    setProfile((p) => ({ ...p, [key]: next }));
  };

  const set = (key: string, val: string) => setProfile((p) => ({ ...p, [key]: val }));

  const handleGenerate = async () => {
    setState("generating");
    const flat: Record<string, string> = {};
    for (const [k, v] of Object.entries(profile)) flat[k] = Array.isArray(v) ? v.join(", ") : v;
    try {
      const res = await fetch("/api/ppm-estimator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile: flat, contact }),
      });
      if (!res.ok) throw new Error();
      const data: PPMEstimate = await res.json();
      setEstimate(data);
      setProgress(100);
      setTimeout(() => setState("results"), 400);
    } catch {
      setError("Something went wrong. Please try again.");
      setState("form");
    }
  };

  const isSelected = (key: string, val: string) => {
    const v = profile[key];
    return Array.isArray(v) ? v.includes(val) : v === val;
  };

  const SelectBtn = ({ k, val }: { k: string; val: string }) => (
    <button
      onClick={() => set(k, val)}
      className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
        isSelected(k, val) ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"
      }`}
    >
      {val}
    </button>
  );

  const MultiBtn = ({ k, val }: { k: string; val: string }) => (
    <button
      onClick={() => toggle(k, val)}
      className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-2 ${
        isSelected(k, val) ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"
      }`}
    >
      <span className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center ${isSelected(k, val) ? "border-primary bg-primary" : "border-muted-foreground"}`}>
        {isSelected(k, val) && <span className="text-white text-[10px]">✓</span>}
      </span>
      {val}
    </button>
  );

  if (state === "generating") return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-6 text-center">
      <div className="w-16 h-16 mb-8"><img src="/logo-small.svg" alt="EntireFM" className="w-full h-full object-contain" /></div>
      <h2 className="text-2xl font-light text-charcoal mb-2">Calculating your PPM estimate</h2>
      <p className="text-muted-foreground text-sm mb-10 h-5">{LOADING_MESSAGES[msgIdx]}</p>
      <div className="w-full max-w-md bg-gray-100 rounded-full h-2 overflow-hidden mb-4">
        <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );

  if (state === "results" && estimate) return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Cost Hero */}
      <div className="bg-amber-400 rounded-2xl p-10 text-center text-charcoal mb-8 shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-70">Estimated Annual PPM Cost</p>
        <div className="text-5xl md:text-6xl font-bold mb-2">
          {fmt(estimate.annualLow)} — {fmt(estimate.annualHigh)}
        </div>
        <p className="text-lg font-light opacity-80">per year</p>
        <div className="mt-4 text-base font-medium opacity-70">
          {fmt(estimate.monthlyLow)} — {fmt(estimate.monthlyHigh)} per month
        </div>
      </div>

      {/* Savings Callout */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-8 flex gap-4">
        <span className="text-2xl">💡</span>
        <div>
          <p className="font-semibold text-charcoal mb-1">{estimate.savingsEstimate}</p>
          <p className="text-sm text-muted-foreground">Based on industry benchmark of 12–34% reduction in reactive spend with a structured PPM programme.</p>
        </div>
      </div>

      {/* Included Services */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-charcoal mb-5">What This Programme Would Cover</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {estimate.includedServices.map((svc, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm text-charcoal">{svc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Assumptions Collapsible */}
      <div className="mb-8 border border-border rounded-xl overflow-hidden">
        <button
          onClick={() => setAssumptionsOpen((o) => !o)}
          className="w-full px-5 py-4 flex items-center justify-between bg-muted/20 hover:bg-muted/40 transition-colors"
        >
          <span className="font-medium text-charcoal text-sm">How this estimate was calculated</span>
          {assumptionsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {assumptionsOpen && (
          <div className="px-5 pb-4 pt-2 space-y-1">
            {estimate.assumptions.map((a, i) => (
              <p key={i} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{a}</p>
            ))}
          </div>
        )}
      </div>

      {/* Next Step */}
      <div className="bg-charcoal text-white rounded-xl p-8 mb-8">
        <p className="text-gray-200 font-light leading-relaxed text-lg">{estimate.nextStep}</p>
      </div>

      {/* CTA */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-charcoal mb-3">Want a Precise Quote?</h2>
        <p className="text-muted-foreground mb-6">This is a ballpark estimate. EntireFM will carry out a free site survey and build you a fully costed PPM proposal.</p>
        <Link href="/contact?source=ppm-estimator" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-lg">
          Request a Detailed Proposal <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-xs text-center text-muted-foreground">Estimates are indicative only and based on typical UK FM pricing benchmarks. Final pricing depends on site survey, asset register, and specific service requirements.</p>
    </div>
  );

  if (state === "lead") return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <div className="text-4xl mb-4">🎯</div>
        <h2 className="text-2xl font-semibold text-charcoal mb-2">Almost there — where shall we send your estimate?</h2>
        <p className="text-muted-foreground font-light">We'll show your results on screen and can follow up with a detailed proposal if you'd like one.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-4">
        <input required type="text" placeholder="Full name *" value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <input required type="text" placeholder="Company name *" value={contact.company} onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <input required type="email" placeholder="Email address *" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <input type="tel" placeholder="Phone number (optional)" value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={contact.wantsProposal} onChange={(e) => setContact((c) => ({ ...c, wantsProposal: e.target.checked }))} className="mt-1" />
          <span className="text-sm text-muted-foreground">I'd like an EntireFM team member to follow up with a tailored PPM proposal</span>
        </label>
        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg">
          Generate My Estimate →
        </button>
        <p className="text-xs text-center text-muted-foreground">We won't spam you. Your details are used only to send your estimate and, if requested, to follow up with a proposal.</p>
      </form>
    </div>
  );

  // ── FORM ──
  const formComplete = profile.sector && profile.buildingType && profile.siteCount && profile.size && profile.reactiveSpend && (profile.services as string[])?.length > 0 && profile.compliance;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {error && <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">{error}</div>}
      <div className="space-y-10">
        {/* Q1 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">1. What sector are you in?</h3>
          <div className="grid sm:grid-cols-2 gap-2">{SECTORS.map((v) => <SelectBtn key={v} k="sector" val={v} />)}</div>
        </div>
        {/* Q2 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">2. What type of building or estate?</h3>
          <div className="grid sm:grid-cols-2 gap-2">{BUILDING_TYPES.map((v) => <SelectBtn key={v} k="buildingType" val={v} />)}</div>
        </div>
        {/* Q3 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">3. How many sites do you manage?</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">{SITE_COUNTS.map((v) => <SelectBtn key={v} k="siteCount" val={v} />)}</div>
        </div>
        {/* Q4 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">4. Approximate size of your primary site?</h3>
          <div className="grid sm:grid-cols-2 gap-2">{SIZES.map((v) => <SelectBtn key={v} k="size" val={v} />)}</div>
        </div>
        {/* Q5 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">5. Current annual reactive maintenance spend?</h3>
          <div className="grid sm:grid-cols-2 gap-2">{REACTIVE_SPENDS.map((v) => <SelectBtn key={v} k="reactiveSpend" val={v} />)}</div>
        </div>
        {/* Q6 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">6. Services to include in your PPM programme?</h3>
          <div className="grid sm:grid-cols-2 gap-2">{SERVICES.map((v) => <MultiBtn key={v} k="services" val={v} />)}</div>
        </div>
        {/* Q7 */}
        <div>
          <h3 className="font-semibold text-charcoal mb-4">7. How important is compliance documentation?</h3>
          <div className="grid gap-2">{COMPLIANCE_OPTS.map((v) => <SelectBtn key={v} k="compliance" val={v} />)}</div>
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <button
            onClick={() => setState("lead")}
            disabled={!formComplete}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Get My Estimate <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
