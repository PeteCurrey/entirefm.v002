"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { ComplianceReport } from "@/lib/toolTypes";
import { RiskGauge } from "@/components/tools/RiskGauge";
import { ObligationCard } from "@/components/tools/ObligationCard";
import { TopRiskCard } from "@/components/tools/TopRiskCard";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";

export default function SharedResultsPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  
  const [report, setReport] = useState<ComplianceReport | null>(null);
  const [sector, setSector] = useState<string>("Unknown");
  const [building, setBuilding] = useState<string>("Unknown");
  const [resultsRevealStage, setResultsRevealStage] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const dataStr = searchParams.get("d");
      const paramS = searchParams.get("s");
      const paramB = searchParams.get("b");
      
      if (paramS) setSector(paramS);
      if (paramB) setBuilding(paramB);

      if (dataStr) {
        const decoded = JSON.parse(decodeURIComponent(atob(dataStr)));
        setReport(decoded);
        
        // Trigger reveal
        const t1 = setTimeout(() => setResultsRevealStage(1), 2800);
        return () => clearTimeout(t1);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to decode shared report", err);
      setError(true);
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-charcoal">Invalid or Expired Link</h2>
        <p className="text-muted-foreground mb-8">This shared compliance report cannot be read.</p>
        <Link href="/tools/compliance-checker" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
          Run Your Own Check
        </Link>
      </div>
    );
  }

  if (!report) {
    return (
       <div className="min-h-screen bg-charcoal flex items-center justify-center">
         <div className="animate-pulse w-16 h-16 rounded-full border-4 border-white/20 border-t-primary" />
       </div>
    );
  }

  const obligationsDelay = 3000;
  const topRisksDelay = obligationsDelay + (report.obligations.length * 120) + 400;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Shared Banner */}
      <div className="bg-primary px-6 py-3 text-white text-center text-sm font-medium flex flex-col sm:flex-row items-center justify-center gap-4">
        <span>This compliance report was generated using the EntireFM Compliance Checker.</span>
        <Link href="/tools/compliance-checker" className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded transition-colors text-xs font-bold uppercase tracking-wider">
          Check Your Own Building <ArrowLeft className="w-3 h-3 rotate-180" />
        </Link>
      </div>

      <div className="bg-white border-b border-border px-6 py-6 text-center">
        <h1 className="text-2xl font-light text-charcoal mb-2">Compliance Report — Shared Result</h1>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm uppercase tracking-widest font-bold">
           <Building2 className="w-4 h-4" /> {sector} • {building} • {params.ref as string}
        </div>
      </div>

      <div className={`relative w-full transition-all duration-1000 ${resultsRevealStage >= 1 ? "bg-charcoal py-16 overflow-hidden" : "fixed inset-0 top-[120px] z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center"}`}>
         <RiskGauge risk={report.overallRisk as "Low" | "Medium" | "High"} delayMs={0} />

         {resultsRevealStage >= 1 && (
           <div className="text-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 mx-auto max-w-2xl px-6">
              <p className="text-gray-300 font-light leading-relaxed text-lg">{report.summary}</p>
           </div>
         )}
      </div>

      {resultsRevealStage >= 1 && (
        <div id="report-details" className="max-w-4xl mx-auto px-6 pt-16">
          {/* Action Plan */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-charcoal">Action Plan & Obligations</h2>
            <div className="grid gap-3">
              {[...report.obligations].sort((a,b) => {
                const u = { "Immediate": 1, "Within 3 months": 2, "Within 12 months": 3 };
                return (u[a.urgency as keyof typeof u] || 99) - (u[b.urgency as keyof typeof u] || 99);
              }).map((o, i) => (
                 <ObligationCard 
                   key={i} 
                   index={i} 
                   delayStartMs={500}
                   area={o.area} 
                   status={o.status} 
                   frequency={o.frequency} 
                   detail={o.detail} 
                   urgency={o.urgency} 
                 />
              ))}
            </div>
          </div>

          {/* Top Risks */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-charcoal">Identified Vulnerabilities</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {report.topRisks.slice(0, 3).map((risk, i) => (
                <TopRiskCard key={i} index={i} risk={risk} delayStartMs={topRisksDelay} />
              ))}
            </div>
          </div>

          <div className="text-center mt-24">
            <p className="text-muted-foreground mb-6">Want to see where your building stands on fire safety, water hygiene, and electrical compliance?</p>
            <Link href="/tools/compliance-checker" className="inline-flex items-center gap-2 bg-charcoal text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded hover:bg-black transition-colors">
              Run a Free Compliance Check
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
