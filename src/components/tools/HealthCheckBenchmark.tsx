"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  score: number;
  maxScore: number;
  bracketColor: string; // 'green' | 'amber' | 'orange' | 'red'
}

export function HealthCheckBenchmark({ score, maxScore, bracketColor }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stage the animation shortly after mount
    const t = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Hardcoded generic FM industry benchmarks mapped proportionally
  // Top quartile: 20-24 (83% - 100%)
  // Avg quartile: 14-19 (58% - 79%)
  // Bottom quartile: 0-13 (0% - 54%)

  const youPercent = (score / maxScore) * 100;

  // Determine indicator color based on the bracket
  const markerColors = {
    green: "bg-green-600",
    amber: "bg-amber-500",
    orange: "bg-orange-500",
    red: "bg-red-600",
  }[bracketColor] || "bg-charcoal";

  return (
    <div className="w-full bg-white border border-border rounded-xl p-8 pb-12 relative overflow-hidden">
      <h3 className="text-xl font-semibold text-charcoal mb-8 border-b border-border pb-4">
        Industry Benchmarking
      </h3>
      
      <div className="relative h-20 w-full flex rounded-lg overflow-hidden border border-border/50 shadow-inner">
         {/* Bottom Quartile Segment */}
         <div className="h-full bg-red-100 relative group flex-1" style={{ flexGrow: 54 }}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-red-200/50">
               <span className="text-[10px] font-bold text-red-800 uppercase tracking-widest">Bottom 25%</span>
            </div>
         </div>
         {/* Average Segment */}
         <div className="h-full bg-amber-100 relative group border-x border-white/50" style={{ flexGrow: 25 }}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-amber-200/50">
               <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">Average</span>
            </div>
         </div>
         {/* Top Quartile Segment */}
         <div className="h-full bg-green-100 relative group flex-1" style={{ flexGrow: 21 }}>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-green-200/50">
               <span className="text-[10px] font-bold text-green-800 uppercase tracking-widest">Top 25%</span>
            </div>
         </div>

         {/* 'You' Marker Indicator (Absolute positioning overlay) */}
         <div 
           className={cn("absolute bottom-0 w-1 flex flex-col items-center transition-all duration-1000 ease-out origin-bottom z-10", markerColors)}
           style={{ 
             left: `${youPercent}%`, 
             height: mounted ? "120%" : "0%",
             transform: "translateX(-50%)" 
           }}
         >
            {/* The Floating Pill */}
            <div className={cn("absolute -top-7 whitespace-nowrap px-3 py-1 rounded shadow-lg text-[10px] font-bold uppercase tracking-widest text-white transition-opacity duration-500 delay-500", markerColors, mounted ? "opacity-100" : "opacity-0")}>
               You ({score})
            </div>
            {/* The Arrow pointing down into the baseline */}
            <div className={cn("absolute -top-1 w-3 h-3 rotate-45 transition-opacity duration-500 delay-500", markerColors, mounted ? "opacity-100" : "opacity-0")} />
         </div>
      </div>
      
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-4 px-2">
         <span>High Risk (0)</span>
         <span>Audit Ready (24)</span>
      </div>
    </div>
  );
}
