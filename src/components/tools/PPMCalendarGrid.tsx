"use client";

import { useState, useEffect } from "react";
import { assetCategories, type PPMAsset } from "@/lib/ppmAssets";

interface Props {
  selectedAssets: PPMAsset[];
  calendarData: Record<number, Set<string>>;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CATEGORY_COLORS: Record<string, string> = {
  "HVAC & Climate Control": "bg-blue-100 text-blue-700 border-blue-200",
  "Fire Safety": "bg-red-100 text-red-700 border-red-200",
  Electrical: "bg-yellow-100 text-yellow-800 border-yellow-200",
  "Water & Plumbing": "bg-cyan-100 text-cyan-700 border-cyan-200",
  "Vertical Transport": "bg-purple-100 text-purple-700 border-purple-200",
  "Security & Access": "bg-slate-100 text-slate-700 border-slate-200",
  "Building Fabric": "bg-stone-100 text-stone-700 border-stone-200",
  "Grounds & External": "bg-green-100 text-green-700 border-green-200",
};

const MONTH_DOT_COLORS: Record<string, string> = {
  "HVAC & Climate Control": "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]",
  "Fire Safety": "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]",
  Electrical: "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]",
  "Water & Plumbing": "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]",
  "Vertical Transport": "bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]",
  "Security & Access": "bg-slate-500 shadow-[0_0_8px_rgba(100,116,139,0.6)]",
  "Building Fabric": "bg-stone-500 shadow-[0_0_8px_rgba(120,113,108,0.6)]",
  "Grounds & External": "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]",
};

export function PPMCalendarGrid({ selectedAssets, calendarData }: Props) {
  // Phase 0: Render grid skeleton immediately
  // Phase 1: Mount rows staggeredly
  // Phase 2: Pop out dots
  const [activeRows, setActiveRows] = useState<number>(-1);
  const [dotsRevealed, setDotsRevealed] = useState(false);

  const activeCategories = assetCategories.filter((cat) => selectedAssets.some((a) => a.category === cat));

  useEffect(() => {
    // 1. Mount rows
    const rowTimer = setInterval(() => {
      setActiveRows(r => {
        if (r >= activeCategories.length) {
          clearInterval(rowTimer);
          return r;
        }
        return r + 1;
      });
    }, 150);

    // 2. Reveal dots after rows finish
    const dotTimer = setTimeout(() => {
       setDotsRevealed(true);
    }, 150 * activeCategories.length + 400);

    return () => {
      clearInterval(rowTimer);
      clearTimeout(dotTimer);
    };
  }, [activeCategories.length]);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-xl isolate">
      <div className="overflow-x-auto relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-10 pointer-events-none -z-10" />
        <table className="w-full text-xs min-w-[700px] relative z-10">
          <thead>
            <tr className="bg-charcoal text-white">
              <th className="px-4 py-4 text-left font-bold uppercase tracking-widest text-[10px] w-48 border-r border-white/10 shadow-sm">Facility Infrastructure</th>
              {MONTHS.map((m) => (
                <th key={m} className="px-2 py-4 text-center font-bold uppercase tracking-widest text-[10px] w-14 border-x border-white/10 shadow-sm">{m}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {activeCategories.map((cat, rowIdx) => {
              const rowVisible = activeRows >= rowIdx;
              
              return (
                <tr 
                  key={cat} 
                  className={`transition-all duration-700 ease-out transform ${
                    rowVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } hover:bg-slate-50/80 backdrop-blur-sm`}
                >
                  <td className="px-4 py-3 border-r border-border/50 bg-white/50">
                    <span className={`inline-flex px-2 py-1 border rounded text-[10px] uppercase font-bold tracking-widest transition-transform duration-500 ${rowVisible ? "scale-100" : "scale-90"} ${CATEGORY_COLORS[cat] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}>
                      {cat.replace(" & ", " / ")}
                    </span>
                  </td>
                  {MONTHS.map((_, mi) => {
                    const month = mi + 1;
                    const hasVisit = calendarData[month]?.has(cat);
                    return (
                      <td key={mi} className="px-2 py-3 text-center border-l border-border/50 relative">
                        {hasVisit && (
                          <div className={`mx-auto rounded-full transition-all duration-500 ease-out absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${MONTH_DOT_COLORS[cat] ?? "bg-charcoal shadow-sm"} ${dotsRevealed ? "w-4 h-4 opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-0"}`} />
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            
            {/* Show an empty state if no categories are active yet, just blank rows for structure */}
            {activeCategories.length === 0 && (
               <tr>
                  <td colSpan={13} className="py-24 text-center text-muted-foreground font-light text-sm italic">
                    Select assets on the left to render your dynamic PPM schedule.
                  </td>
               </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
