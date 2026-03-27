// src/components/resources/StatCallout.tsx
import React from "react";

interface StatCalloutProps {
  stats: { value: string; label: string }[];
}

export function StatCallout({ stats }: StatCalloutProps) {
  return (
    <div className="w-full bg-[#1a2e4a] text-white rounded-xl p-8 my-10 shadow-lg border border-[#f5a623]/20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center text-center pt-6 sm:pt-0 first:pt-0 px-4">
            <span className="text-4xl md:text-5xl font-black text-[#f5a623] mb-3 tracking-tight drop-shadow-sm">{stat.value}</span>
            <span className="text-sm font-semibold opacity-90 uppercase tracking-widest leading-relaxed max-w-[200px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
