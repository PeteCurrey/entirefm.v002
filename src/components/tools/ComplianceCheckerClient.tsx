"use client";

import { useState, useEffect, useRef } from "react";
import type { Question } from "@/lib/complianceQuestions";
import type { ComplianceReport, ComplianceObligation } from "@/lib/toolTypes";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Printer,
  RotateCcw,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ArrowRight,
  Loader2,
  Share2,
  Linkedin,
  Mail,
  Copy,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { RiskGauge } from "./RiskGauge";
import { ObligationCard } from "./ObligationCard";
import { TopRiskCard } from "./TopRiskCard";

const LOADING_MESSAGES = [
  "Analysing your building profile…",
  "Cross-referencing UK compliance standards…",
  "Checking SFG20 requirements for your sector…",
  "Identifying statutory obligations…",
  "Building your personalised report…",
];

const STATUS_COLORS: Record<string, string> = {
  Required: "bg-red-100 text-red-700 border border-red-200",
  Recommended: "bg-amber-100 text-amber-700 border border-amber-200",
  "Review Needed": "bg-blue-100 text-blue-700 border border-blue-200",
};

const URGENCY_COLORS: Record<string, string> = {
  Immediate: "text-red-600 font-semibold",
  "Within 3 months": "text-amber-600 font-semibold",
  "Within 12 months": "text-green-600",
};

const RISK_CONFIG = {
  Low: { color: "bg-green-100 text-green-700 border-green-300", icon: ShieldCheck, bar: "bg-green-500" },
  Medium: { color: "bg-amber-100 text-amber-700 border-amber-300", icon: ShieldAlert, bar: "bg-amber-500" },
  High: { color: "bg-red-100 text-red-700 border-red-300", icon: ShieldX, bar: "bg-red-500" },
};

interface Props {
  questions: Question[];
}

type State = "form" | "lead" | "generating" | "results";

export default function ComplianceCheckerClient({ questions }: Props) {
  const [state, setState] = useState<State>("form");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contact, setContact] = useState({ name: "", email: "", company: "", phone: "" });
  const [report, setReport] = useState<ComplianceReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [validationError, setValidationError] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [resultsRevealStage, setResultsRevealStage] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (state === "results") {
      // 0ms overlay
      // 2800ms View full report button fades in
      // Let's orchestrate the general fade-ins for sequential sections
      const t1 = setTimeout(() => setResultsRevealStage(1), 2800); // button / tables
      return () => clearTimeout(t1);
    }
  }, [state]);

  const current = questions[step];
  const isLast = step === questions.length - 1;
  const currentAnswer = answers[current.key];

  // Validation
  const isAnswered = current.type === "multi"
    ? Array.isArray(currentAnswer) && currentAnswer.length > 0
    : typeof currentAnswer === "string" && currentAnswer.length > 0;

  // Loading animation
  useEffect(() => {
    if (state !== "generating") return;
    setLoadingProgress(0);
    setLoadingMsgIdx(0);

    const msgInterval = setInterval(() => {
      setLoadingMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2000);

    const progressInterval = setInterval(() => {
      setLoadingProgress((p) => Math.min(p + 1.2, 95));
    }, 100);

    intervalRef.current = msgInterval;
    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [state]);

  const navigate = (dir: "next" | "back") => {
    if (dir === "next" && !isAnswered) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setSlideDir(dir === "next" ? "right" : "left");
    setIsAnimating(true);
    setTimeout(() => {
      if (dir === "next") setStep((s) => s + 1);
      else setStep((s) => s - 1);
      setIsAnimating(false);
    }, 200);
  };

  const handleSelect = (option: string) => {
    setValidationError(false);
    if (current.type === "multi") {
      const prev = Array.isArray(answers[current.key]) ? (answers[current.key] as string[]) : [];
      const max = current.maxSelect ?? 99;
      let next: string[];
      if (prev.includes(option)) {
        next = prev.filter((o) => o !== option);
      } else if (prev.length < max) {
        next = [...prev, option];
      } else {
        next = [...prev.slice(1), option];
      }
      setAnswers((a) => ({ ...a, [current.key]: next }));
    } else {
      setAnswers((a) => ({ ...a, [current.key]: option }));
    }
  };

  const handleSubmit = () => {
    if (!isAnswered) { setValidationError(true); return; }
    setState("lead");
  };

  const handleGenerate = async () => {
    setState("generating");

    // Flatten multi-select answers to strings
    const flatAnswers: Record<string, string> = {};
    for (const [k, v] of Object.entries(answers)) {
      flatAnswers[k] = Array.isArray(v) ? v.join(", ") : v;
    }

    try {
      const res = await fetch("/api/compliance-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: flatAnswers, contact }),
      });
      if (!res.ok) throw new Error("API error");
      const data: ComplianceReport = await res.json();
      setReport(data);
      setLoadingProgress(100);
      setTimeout(() => setState("results"), 400);
    } catch {
      setError("We couldn't generate your report. Please try again.");
      setState("form");
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setReport(null);
    setError(null);
    setState("form");
  };

  const handleDownloadPDF = async () => {
    if (!report) return;
    setIsDownloading(true);
    try {
      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateType: "compliance-report",
          data: report,
          metadata: { generatedFor: "Website User" }
        })
      });
      if (!res.ok) throw new Error("PDF generation failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      
      // Extract filename from Content-Disposition header if available
      const disposition = res.headers.get('Content-Disposition');
      let filename = "EntireFM-Compliance-Report.pdf";
      if (disposition && disposition.indexOf('attachment') !== -1) {
        const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        const matches = filenameRegex.exec(disposition);
        if (matches != null && matches[1]) { 
          filename = matches[1].replace(/['"]/g, '');
        }
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

  const getShareUrl = () => {
    if (!report || typeof window === "undefined") return "";
    const params = new URLSearchParams();
    params.set("r", report.overallRisk.toLowerCase());
    params.set("s", answers.sector ? String(answers.sector).toLowerCase() : "unknown");
    params.set("b", answers.buildingType ? String(answers.buildingType).toLowerCase() : "unknown");
    const id = Math.random().toString(36).substring(2, 9).toUpperCase();
    params.set("ref", `EFM-2025-${id}`);
    
    // We base64 encode the obligations and top risks to make the URL self-contained
    // Without limits, URLs can be long, so we encode minimally
    const encodedData = btoa(encodeURIComponent(JSON.stringify(report)));
    params.set("d", encodedData);

    return `${window.location.origin}/tools/compliance-checker/results/${params.get("ref")}?${params.toString()}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareText = `Just checked our building's FM compliance using the EntireFM Compliance Checker — here's our result. How does yours compare? ${getShareUrl()} #FacilitiesManagement #Compliance`;

  // ── LEAD CAPTURE ──
  if (state === "lead") {
    return (
      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-2xl font-semibold text-charcoal mb-2">Analysis Complete</h2>
          <p className="text-muted-foreground font-light">
            Enter your details to generate your compliance audit results and action plan.
          </p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Full name *"
            value={contact.name}
            onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
          />
          <input
            required
            type="email"
            placeholder="Email address *"
            value={contact.email}
            onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
          />
          <input
            required
            type="text"
            placeholder="Company name *"
            value={contact.company}
            onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
          />
          <input
            type="tel"
            placeholder="Phone number (optional)"
            value={contact.phone}
            onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg"
          >
            Generate My Report →
          </button>
          <button
            type="button"
            onClick={() => setState("form")}
            className="w-full text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-charcoal transition-colors py-2"
          >
            ← Back to questions
          </button>
        </form>
      </div>
    );
  }

  // ── GENERATING ──
  if (state === "generating") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-6 text-center">
        <div className="w-16 h-16 mb-8">
          <img src="/logo-small.svg" alt="EntireFM" className="w-full h-full object-contain" />
        </div>
        <h2 className="text-2xl font-light text-charcoal mb-2">Generating your compliance report</h2>
        <p className="text-muted-foreground text-sm mb-10 h-5 transition-all duration-500">
          {LOADING_MESSAGES[loadingMsgIdx]}
        </p>
        <div className="w-full max-w-md bg-gray-100 rounded-full h-2 overflow-hidden mb-4">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
          Please wait — this takes around 8 seconds
        </p>
      </div>
    );
  }

  // ── RESULTS ──
  if (state === "results" && report) {
    const riskCfg = RISK_CONFIG[report.overallRisk];

    // Calculate dynamic delay for Top Risks (depends on number of obligations)
    // Gauge takes ~2800ms to finish. Then obligations start.
    // Obligations take: 120ms stagger * length + 400ms duration
    const obligationsDelay = 3000;
    const topRisksDelay = obligationsDelay + (report.obligations.length * 120) + 400;

    return (
      <div className="relative min-h-screen bg-gray-50 pb-24" id="compliance-report">
        
        {/* Step 1: Score Gauge Reveal */}
        <div className={`relative w-full overflow-hidden transition-all duration-1000 ${resultsRevealStage >= 1 ? "bg-charcoal py-16" : "fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center"}`}>
           <RiskGauge risk={report.overallRisk as "Low" | "Medium" | "High"} delayMs={0} />

           {resultsRevealStage >= 1 && (
             <div className="text-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 mx-auto max-w-2xl px-6">
                <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">{report.summary}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => {
                      document.getElementById('report-details')?.scrollIntoView({ behavior: 'smooth' });
                  }} className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white/10 transition-colors">
                    View Full Report ↓
                  </button>
                </div>
             </div>
           )}
        </div>

        {resultsRevealStage >= 1 && (
          <div id="report-details" className="max-w-4xl mx-auto px-6 pt-16">
            
            {/* Share Section */}
            <div className="bg-white rounded-2xl p-8 mb-16 border border-border/60 shadow-sm text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
               <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                 <Share2 className="w-5 h-5 text-primary" />
               </div>
               <h3 className="text-xl font-semibold mb-2 text-charcoal">Share Your Score</h3>
               <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                 How does your building compare? Share this secure, read-only result link with your FM team or stakeholders.
               </p>
               <div className="flex flex-wrap justify-center gap-3">
                 <button onClick={handleCopyLink} className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-charcoal px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                   {copySuccess ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                   {copySuccess ? "Copied!" : "Copy Link"}
                 </button>
                 <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0a66c2] hover:bg-[#084e96] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                   <Linkedin className="w-4 h-4" /> Share
                 </a>
                 <a href={`mailto:?subject=EntireFM Compliance Report&body=${encodeURIComponent(shareText)}`} className="inline-flex items-center gap-2 bg-charcoal hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                   <Mail className="w-4 h-4" /> Email
                 </a>
               </div>
            </div>

            {/* Step 2: Card Reveal (Obligations) */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-charcoal">Action Plan & Obligations</h2>
              
              <div className="grid gap-3">
                {/* Sort obligations by urgency: Immediate -> 3 months -> 12 months -> None */}
                {[...report.obligations].sort((a,b) => {
                  const u = { "Immediate": 1, "Within 3 months": 2, "Within 12 months": 3 };
                  return (u[a.urgency as keyof typeof u] || 99) - (u[b.urgency as keyof typeof u] || 99);
                }).map((o, i) => (
                   <ObligationCard 
                     key={i} 
                     index={i} 
                     delayStartMs={500} // slight delay after scrolling into view
                     area={o.area} 
                     status={o.status} 
                     frequency={o.frequency} 
                     detail={o.detail} 
                     urgency={o.urgency} 
                   />
                ))}
              </div>
            </div>

        {/* Summary */}
        <div className="bg-charcoal text-white rounded-xl p-8 mb-8">
          <h2 className="text-lg font-semibold mb-3 text-primary uppercase tracking-widest">Your Compliance Position</h2>
          <p className="text-gray-200 font-light leading-relaxed text-lg">{report.summary}</p>
        </div>

        {/* Obligations Table */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Your Compliance Obligations</h2>
          <div className="overflow-x-auto rounded-xl border border-border shadow-sm print:shadow-none">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="px-5 py-4 text-left font-semibold text-xs uppercase tracking-wider">Compliance Area</th>
                  <th className="px-5 py-4 text-left font-semibold text-xs uppercase tracking-wider">Status</th>
                  <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wider">Frequency</th>
                  <th className="px-5 py-4 text-left font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Detail</th>
                  <th className="px-4 py-4 text-left font-semibold text-xs uppercase tracking-wider">Urgency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {report.obligations.map((o, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4 font-semibold text-charcoal">{o.area}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap ${STATUS_COLORS[o.status] ?? "bg-gray-100 text-gray-700"}`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">{o.frequency}</td>
                    <td className="px-5 py-4 text-muted-foreground hidden md:table-cell max-w-xs">{o.detail}</td>
                    <td className={`px-4 py-4 whitespace-nowrap text-sm ${URGENCY_COLORS[o.urgency] ?? ""}`}>
                      {o.urgency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

            {/* Step 3: Top Risks */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-charcoal">Identified Vulnerabilities</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {report.topRisks.slice(0, 3).map((risk, i) => (
                  <TopRiskCard key={i} index={i} risk={risk} delayStartMs={topRisksDelay} />
                ))}
              </div>
            </div>

        {/* Recommendation */}
        <div className="border-2 border-amber-400 bg-amber-50 rounded-xl p-8 mb-10">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-amber-600" />
            <h3 className="font-semibold text-amber-800 uppercase tracking-widest text-xs">EntireFM Recommendation</h3>
          </div>
          <p className="text-charcoal font-light leading-relaxed text-lg mb-4">{report.recommendation}</p>
          <p className="text-xs text-muted-foreground">
            This report is based on the information you provided. Actual compliance requirements may vary — we recommend a professional FM site survey to confirm.
          </p>
        </div>

            {/* CTA */}
            <div className="bg-charcoal rounded-xl p-10 text-center text-white mb-8 print:hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1000 fill-mode-both relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}></div>
              <h2 className="text-3xl font-light mb-3 relative z-10">Ready to Address Your Compliance Gaps?</h2>
              <p className="text-gray-300 font-light mb-8 max-w-xl mx-auto relative z-10">
                EntireFM can carry out a full site survey and build an SFG20-aligned PPM programme tailored to your building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-lg">
                  Get a Free Site Survey <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/ppm" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Learn About Our PPM Services
                </Link>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center print:hidden animate-in fade-in duration-700 delay-1000 fill-mode-both">
              <button onClick={reset} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-charcoal transition-colors font-medium">
                <RotateCcw className="w-4 h-4" /> Start Again
              </button>
              <button onClick={handleDownloadPDF} disabled={isDownloading} className="inline-flex items-center gap-2 text-sm border border-border px-5 py-2.5 rounded-lg hover:bg-muted transition-colors font-medium disabled:opacity-50 bg-white">
                {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Printer className="w-4 h-4" />} 
                {isDownloading ? "Generating PDF..." : "Download PDF Report"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── FORM ──
  const selectedOptions = current.type === "multi"
    ? (Array.isArray(answers[current.key]) ? (answers[current.key] as string[]) : [])
    : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Step {step + 1} of {questions.length}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {Math.round(((step + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= step ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div
        className={`transition-all duration-200 ${isAnimating ? `opacity-0 translate-x-${slideDir === "right" ? "4" : "-4"}` : "opacity-100 translate-x-0"}`}
      >
        <h2 className="text-2xl md:text-3xl font-light text-charcoal mb-8 leading-snug">
          {current.text}
        </h2>

        {current.type === "multi" && (
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
            Select up to {current.maxSelect} options
          </p>
        )}

        <div className="grid gap-3">
          {current.options.map((option) => {
            const isSelected = current.type === "multi"
              ? selectedOptions.includes(option)
              : answers[current.key] === option;

            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 font-medium ${
                  isSelected
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:border-primary/40 hover:bg-muted/30 text-charcoal"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                    isSelected ? "border-primary bg-primary" : "border-border"
                  }`}>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                  </span>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {validationError && (
          <p className="mt-4 text-sm text-red-500 font-medium">Please select an option to continue.</p>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <button
          onClick={() => navigate("back")}
          disabled={step === 0}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        {isLast ? (
          <button
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg"
          >
            Generate My Report <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => navigate("next")}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-charcoal text-white font-bold uppercase tracking-widest text-sm hover:bg-black transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
