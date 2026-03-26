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
} from "lucide-react";
import Link from "next/link";

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

type State = "form" | "generating" | "results";

export default function ComplianceCheckerClient({ questions }: Props) {
  const [state, setState] = useState<State>("form");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [report, setReport] = useState<ComplianceReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [validationError, setValidationError] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  const handleSubmit = async () => {
    if (!isAnswered) { setValidationError(true); return; }
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
        body: JSON.stringify({ answers: flatAnswers }),
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
    const RiskIcon = riskCfg.icon;

    return (
      <div className="max-w-5xl mx-auto px-6 py-12 print:py-6" id="compliance-report">
        {/* Risk Badge */}
        <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-bold uppercase tracking-widest ${riskCfg.color} mb-8`}>
          <RiskIcon className="w-5 h-5" />
          Overall Compliance Risk: {report.overallRisk}
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

        {/* Top Risks */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Your Top 3 Risk Areas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {report.topRisks.slice(0, 3).map((risk, i) => (
              <div key={i} className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <p className="text-charcoal font-medium text-sm leading-snug">{risk}</p>
              </div>
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
        <div className="bg-charcoal rounded-xl p-10 text-center text-white mb-8 print:hidden">
          <h2 className="text-3xl font-light mb-3">Ready to Address Your Compliance Gaps?</h2>
          <p className="text-gray-300 font-light mb-8 max-w-xl mx-auto">
            EntireFM can carry out a full site survey and build an SFG20-aligned PPM programme tailored to your building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-lg">
              Get a Free Site Survey <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/ppm" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
              Learn About Our PPM Services
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center print:hidden">
          <button onClick={reset} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-charcoal transition-colors font-medium">
            <RotateCcw className="w-4 h-4" /> Start Again
          </button>
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-sm border border-border px-5 py-2.5 rounded-lg hover:bg-muted transition-colors font-medium">
            <Printer className="w-4 h-4" /> Print Report
          </button>
        </div>
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
