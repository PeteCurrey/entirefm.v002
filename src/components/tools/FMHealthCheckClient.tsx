"use client";

import { useState, useEffect } from "react";
import { fmHealthCheckQuestions, getScoreBracket, FMHealthCheckQuestion } from "@/lib/fmHealthCheck";
import { CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp, Share2, RotateCcw, ArrowRight, AlertTriangle, Flame } from "lucide-react";
import Link from "next/link";
import { HealthCheckBenchmark } from "./HealthCheckBenchmark";
import { cn } from "@/lib/utils";

type Answer = "yes" | "no" | "unsure";
type State = "intro" | "quiz" | "lead" | "results";

interface QuestionResult {
  question: FMHealthCheckQuestion;
  answer: Answer;
  score: number;
}

const ANSWER_CONFIG = {
  yes: { icon: CheckCircle2, color: "border-green-500 bg-green-50 text-green-700", emoji: "✅" },
  no: { icon: XCircle, color: "border-red-500 bg-red-50 text-red-700", emoji: "❌" },
  unsure: { icon: HelpCircle, color: "border-amber-500 bg-amber-50 text-amber-700", emoji: "🤷" },
} as const;

const BRACKET_STYLES: Record<string, string> = {
  green: "text-green-700 bg-green-100 border-green-300",
  amber: "text-amber-700 bg-amber-100 border-amber-300",
  orange: "text-orange-700 bg-orange-100 border-orange-300",
  red: "text-red-700 bg-red-100 border-red-300",
};

const GAUGE_COLORS: Record<string, string> = {
  green: "#16a34a",
  amber: "#d97706",
  orange: "#ea580c",
  red: "#dc2626",
};

export default function FMHealthCheckClient() {
  const [state, setState] = useState<State>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [contact, setContact] = useState({ name: "", email: "", company: "", phone: "" });
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [copySuccess, setCopySuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // New Momentum State
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [flashState, setFlashState] = useState<Answer | null>(null);

  const handleAnswer = (answer: Answer) => {
    const q = fmHealthCheckQuestions[currentQ];
    
    // Streak Physics
    if (answer === "yes") {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) setLongestStreak(newStreak);
    } else {
      setCurrentStreak(0);
    }

    setAnswers((a) => ({ ...a, [q.id]: answer }));
    setFlashState(answer);

    setTimeout(() => {
      setFlashState(null);
      if (currentQ < fmHealthCheckQuestions.length - 1) {
        setCurrentQ((i) => i + 1);
      } else {
        setState("lead");
      }
    }, 400); // slightly longer to appreciate the flash
  };

  const totalScore = Object.entries(answers).reduce((sum, [id, ans]) => {
    const q = fmHealthCheckQuestions.find((q) => q.id === id);
    return sum + (q?.scoring[ans] ?? 0);
  }, 0);

  const maxScore = fmHealthCheckQuestions.length * 2;
  const bracket = getScoreBracket(totalScore);
  const gaugePercent = Math.round((totalScore / maxScore) * 100);
  const gaugeColor = GAUGE_COLORS[bracket.colour];

  const results: QuestionResult[] = fmHealthCheckQuestions.map((q) => ({
    question: q,
    answer: answers[q.id] ?? "unsure",
    score: q.scoring[answers[q.id] ?? "unsure"],
  }));

  const gaps = results.filter((r) => r.answer !== "yes");
  const highRiskGaps = gaps.filter((r) => r.question.risk === "high");
  const medRiskGaps = gaps.filter((r) => r.question.risk === "medium");
  const lowRiskGaps = gaps.filter((r) => r.question.risk === "low");

  const toggleExpand = (id: string) => {
    setExpandedIds((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch("/api/leads/health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          results: {
            score: totalScore,
            maxScore,
            label: bracket.label,
            gapCount: gaps.length
          }
        }),
      });
    } catch (error) {
      console.error("Failed to save lead:", error);
    }

    setSubmitted(true);
    // Auto-expand gaps
    setExpandedIds(new Set(gaps.map((g) => g.question.id)));
    setState("results");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setCurrentStreak(0);
    setLongestStreak(0);
    setContact({ name: "", email: "", company: "", phone: "" });
    setExpandedIds(new Set());
    setSubmitted(false);
    setState("intro");
  };

  // ── INTRO ──
  if (state === "intro") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="text-6xl mb-6">🏢</div>
        <h2 className="text-3xl font-light text-charcoal mb-4">12 questions. 2 minutes.</h2>
        <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
          Find out exactly where your FM compliance stands — and which gaps need attention first.
        </p>
        <button
          onClick={() => setState("quiz")}
          className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg"
        >
          Start the Health Check <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // ── QUIZ ──
  if (state === "quiz") {
    const q = fmHealthCheckQuestions[currentQ];
    const progress = ((currentQ) / fmHealthCheckQuestions.length) * 100;
    const isFlashing = flashState !== null;

    return (
      <div className="max-w-2xl mx-auto px-6 py-12 relative">
        {/* Momentum Indicator Container. Absolutely positioned to not shift layout */}
        <div className="absolute right-6 top-12 md:top-6 z-10 transition-all duration-300">
          {currentStreak >= 2 && (
             <div className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1.5 rounded-full shadow-lg transform data-[pulse=true]:scale-110 transition-transform origin-center" data-pulse={isFlashing && flashState === "yes"}>
                <Flame className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">{currentStreak} in a row</span>
             </div>
          )}
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-4 md:mt-0">
              Question {currentQ + 1} of {fmHealthCheckQuestions.length}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mt-4 md:mt-0">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-1.5">
            <div
              className={`h-full rounded-full transition-all duration-500 ${currentStreak >= 3 ? "bg-orange-500" : "bg-primary"}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card Container */}
        <div className={cn("bg-white border p-6 md:p-8 rounded-2xl shadow-sm transition-all duration-300", 
            isFlashing && flashState === "yes" && "border-green-400 bg-green-50 scale-[1.02]",
            isFlashing && flashState === "no" && "border-red-400 bg-red-50 scale-[0.98]",
            isFlashing && flashState === "unsure" && "border-amber-400 bg-amber-50 scale-[0.99]",
            !isFlashing && "border-border"
        )}>
           {/* Category */}
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
             {q.category}
           </span>

           {/* Question */}
           <h2 className="text-2xl md:text-3xl font-light text-charcoal mb-10 leading-snug">
             {q.question}
           </h2>

           {/* Answers */}
           <div className="space-y-3">
             {(["yes", "no", "unsure"] as Answer[]).map((ans) => {
               const cfg = ANSWER_CONFIG[ans];
               const label = ans === "yes" ? q.yesLabel : ans === "no" ? q.noLabel : q.unsureLabel;
               const selected = answers[q.id] === ans;
               const flashingThis = isFlashing && flashState === ans;

               return (
                 <button
                   key={ans}
                   onClick={() => handleAnswer(ans)}
                   disabled={isFlashing}
                   className={cn(
                     "w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-300 font-medium flex items-center gap-4 group disabled:cursor-wait",
                     selected || flashingThis ? cfg.color : "border-border hover:border-primary hover:bg-slate-50",
                     flashingThis && "scale-105 shadow-md"
                   )}
                 >
                   <span className={cn("text-xl transition-transform duration-300", flashingThis && "scale-125")}>{cfg.emoji}</span>
                   <span className="text-charcoal">{label}</span>
                 </button>
               );
             })}
           </div>
        </div>
      </div>
    );
  }

  // ── LEAD CAPTURE ──
  if (state === "lead") {
    return (
      <div className="max-w-xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-semibold text-charcoal mb-2">Your results are ready</h2>
          <p className="text-muted-foreground font-light">
            Enter your details to see your full FM compliance score and breakdown.
          </p>
        </div>
        <form onSubmit={handleLeadSubmit} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Full name *"
            value={contact.name}
            onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <input
            required
            type="email"
            placeholder="Email address *"
            value={contact.email}
            onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <input
            type="text"
            placeholder="Company (optional)"
            value={contact.company}
            onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
            className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-lg"
          >
            See My Score →
          </button>
          <p className="text-xs text-center text-muted-foreground">We respect your privacy. No spam.</p>
        </form>
      </div>
    );
  }

  // ── RESULTS ──
  const circumference = 2 * Math.PI * 54; // radius 54
  const offset = circumference - (gaugePercent / 100) * circumference;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Score Gauge */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative w-36 h-36 mb-4">
          <svg className="w-full h-full -rotate-90 origin-center" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="10" />
            <circle
              cx="60" cy="60" r="54" fill="none"
              stroke={gaugeColor}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-charcoal">{totalScore}</span>
            <span className="text-xs text-muted-foreground font-medium">/ {maxScore}</span>
          </div>
        </div>
        <span className={`inline-flex px-5 py-2 rounded-full border font-bold text-sm uppercase tracking-widest ${BRACKET_STYLES[bracket.colour]}`}>
          {bracket.label}
        </span>
        <p className="text-center text-muted-foreground font-light max-w-lg mt-4 leading-relaxed">
          {bracket.summary}
        </p>
      </div>

      {/* Benchmark Integration */}
      <div className="mb-12">
         <HealthCheckBenchmark score={totalScore} maxScore={maxScore} bracketColor={bracket.colour} />
      </div>

      {/* Gaps Summary */}
      {gaps.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Your Compliance Gaps
          </h3>
          {[
            { label: "High Risk", items: highRiskGaps, color: "text-red-700" },
            { label: "Medium Risk", items: medRiskGaps, color: "text-amber-700" },
            { label: "Lower Risk", items: lowRiskGaps, color: "text-blue-700" },
          ].filter((g) => g.items.length > 0).map(({ label, items, color }) => (
            <div key={label} className="mb-3">
              <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${color}`}>{label}</p>
              <ul className="space-y-1">
                {items.map((r) => (
                  <li key={r.question.id} className="text-sm text-charcoal flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    {r.question.category}: {r.question.question.slice(0, 60)}…
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Question Breakdown */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-charcoal mb-6">Full Breakdown</h2>
        <div className="space-y-3">
          {results.map((r) => {
            const isExpanded = expandedIds.has(r.question.id);
            const isGap = r.answer !== "yes";
            return (
              <div
                key={r.question.id}
                className={`rounded-xl border overflow-hidden transition-all ${isGap ? "border-amber-200" : "border-border"}`}
              >
                <button
                  onClick={() => toggleExpand(r.question.id)}
                  className={`w-full px-5 py-4 flex items-center justify-between text-left ${isGap ? "bg-amber-50" : "bg-white"}`}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="shrink-0">
                      {r.answer === "yes" ? "✅" : r.answer === "no" ? "❌" : "🤷"}
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">{r.question.category}</span>
                      <span className="text-sm font-medium text-charcoal leading-tight block truncate">{r.question.question}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${r.score === 2 ? "bg-green-100 text-green-700" : r.score === 1 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                      {r.score}/{r.question.scoring.yes}
                    </span>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-5 pb-4 pt-2 bg-white border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.question.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal rounded-xl p-10 text-center text-white mb-8">
        <h2 className="text-3xl font-light mb-3">Ready to Close These Gaps?</h2>
        <p className="text-gray-300 font-light mb-8 max-w-lg mx-auto">
          EntireFM can address every compliance gap identified in your results — from fire safety and electrical testing to PPM programmes and 24/7 reactive support.
        </p>
        <Link
          href="/contact?source=health-check"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-lg"
        >
          Get a Free FM Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Share / Restart */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Think a colleague should take this?</span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Share2 className="w-4 h-4" /> {copySuccess ? "Copied!" : "Copy Link"}
          </button>
        </div>
        <button onClick={reset} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-charcoal transition-colors">
          <RotateCcw className="w-4 h-4" /> Retake the Quiz
        </button>
      </div>
    </div>
  );
}
