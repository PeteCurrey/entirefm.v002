"use client";

import { useEffect, useState, useMemo } from "react";
import { type PPMAsset, ppmAssets } from "@/lib/ppmAssets";
import { ShieldCheck, ShieldAlert, Activity } from "lucide-react";

interface Props {
  selectedAssets: PPMAsset[];
}

export function ScheduleHealthScore({ selectedAssets }: Props) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scoreData = useMemo(() => {
    // Total statutory items available
    const totalStatutory = ppmAssets.filter(a => a.compliance).length;
    // Total best practice items available
    const totalBestPractice = ppmAssets.filter(a => !a.compliance).length;

    // What did the user select?
    const selectedStat = selectedAssets.filter(a => a.compliance).length;
    const selectedBP = selectedAssets.filter(a => !a.compliance).length;

    // Mathematical formula for the pseudo-score out of 10
    // Statutory compliance drives the first 7 points.
    // Best practice drives the remaining 3 points.
    let baseScore = 0;
    
    if (totalStatutory > 0) {
      baseScore += (selectedStat / totalStatutory) * 7;
    }
    
    if (totalBestPractice > 0) {
      baseScore += (selectedBP / totalBestPractice) * 3;
    }

    const finalScore = Math.round(baseScore * 10) / 10; // 1 decimal
    const integralScore = Math.round(finalScore);

    let level: "critical" | "warning" | "optimal" = "warning";
    if (integralScore >= 8) level = "optimal";
    else if (integralScore < 5) level = "critical";

    return { score: integralScore, rawScore: finalScore, level, selectedStat, totalStatutory };
  }, [selectedAssets]);

  const colors = {
    critical: "bg-red-50 border-red-200 text-red-700 ring-red-500",
    warning: "bg-amber-50 border-amber-200 text-amber-700 ring-amber-500",
    optimal: "bg-green-50 border-green-200 text-green-700 ring-green-500"
  }[scoreData.level];

  const Icon = {
    critical: ShieldAlert,
    warning: Activity,
    optimal: ShieldCheck
  }[scoreData.level];

  return (
    <div className={`mt-6 p-5 rounded-2xl border transition-all duration-700 ease-out transform ${colors} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
       <div className="flex items-center justify-between md:items-start flex-col sm:flex-row gap-6">
          
          <div className="flex items-center gap-5">
             <div className={`relative w-20 h-20 shrink-0 flex items-center justify-center rounded-full bg-white shadow-sm border ${colors.split(' ')[1]}`}>
                {/* SVG Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" className="opacity-20" />
                  <circle 
                     cx="50" cy="50" r="46" fill="none" 
                     stroke="currentColor" strokeWidth="6" strokeLinecap="round" 
                     strokeDasharray={2 * Math.PI * 46} 
                     strokeDashoffset={mounted ? (2 * Math.PI * 46) - ((scoreData.score / 10) * (2 * Math.PI * 46)) : 2 * Math.PI * 46}
                     style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  />
                </svg>
                <div className="flex flex-col items-center leading-none">
                  <span className="text-2xl font-black">{scoreData.score}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-0.5">/ 10</span>
                </div>
             </div>

             <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-5 h-5" />
                  <h4 className="font-bold text-lg leading-none">Schedule Health Score</h4>
                </div>
                <p className="text-sm opacity-80 mt-2 max-w-sm leading-relaxed">
                  {scoreData.level === "optimal" && "Exceptional coverage. Your schedule meets all statutory obligations and includes strong preventative best practices."}
                  {scoreData.level === "warning" && "Moderate coverage. While some tasks are covered, consider adding more standard preventative maintenance regimes."}
                  {scoreData.level === "critical" && "High risk. Your schedule is missing crucial statutory obligations that could lead to enforcement action."}
                </p>
             </div>
          </div>
          
          <div className="ml-auto flex sm:flex-col gap-2 w-full sm:w-auto overflow-hidden rounded-xl bg-white/60 border border-white/40 p-3 shadow-inner">
             <div className="flex-1 text-center">
                <span className="block text-xl font-bold">{scoreData.selectedStat}</span>
                <span className="block text-[9px] uppercase tracking-widest font-bold opacity-60">Statutory Met</span>
             </div>
             <div className="hidden sm:block w-full h-px bg-current opacity-10" />
             <div className="flex-1 text-center border-l sm:border-l-0 sm:border-t-0 border-current/10">
                <span className="block text-xl font-bold">{scoreData.totalStatutory - scoreData.selectedStat}</span>
                <span className="block text-[9px] uppercase tracking-widest font-bold opacity-60">Gaps</span>
             </div>
          </div>

       </div>
    </div>
  );
}
