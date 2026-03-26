"use client";

import { useState } from "react";
import { TrendingUp, Info } from "lucide-react";

export default function TeaserBarChart() {
  const data = [
    { label: "Compliance Risk", current: 85, managed: 12, color: "bg-red-500" },
    { label: "Reactive Spend", current: 72, managed: 34, color: "bg-amber-500" },
    { label: "Energy Efficiency", current: 45, managed: 78, color: "bg-green-500" },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-8">
        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Efficiency Benchmarks 2025</h4>
        <TrendingUp className="w-4 h-4 text-primary" />
      </div>
      
      <div className="space-y-6">
        {data.map((item, i) => (
          <div key={i} className="group">
            <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
              <span>{item.label}</span>
              <span className="text-white group-hover:text-primary transition-colors cursor-help">Industry Avg</span>
            </div>
            <div className="h-6 bg-white/5 rounded-lg overflow-hidden flex relative">
              <div className={`h-full opacity-30 ${item.color}`} style={{ width: `${item.current}%` }} />
              <div className={`h-full absolute left-0 top-0 transition-all duration-1000 ${item.color}`} style={{ width: `${item.managed}%` }} />
            </div>
            <div className="flex justify-between mt-1 text-[8px] text-gray-600 font-bold uppercase tracking-widest">
              <span>Current</span>
              <span className="text-primary">Optimized</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
        <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <p className="text-[9px] text-gray-500 font-light italic leading-relaxed">
          *Data derived from EntireFM's 2024 auditing of 2,400+ UK commercial sites. Full breakdown in report.
        </p>
      </div>
    </div>
  );
}
