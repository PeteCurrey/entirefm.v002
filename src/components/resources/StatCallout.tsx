import React from "react";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";

interface StatCalloutProps {
  stats: { value: string; label: string }[];
}

export function StatCallout({ stats }: StatCalloutProps) {
  const icons = [<TrendingUp key="1" className="w-5 h-5" />, <BarChart3 key="2" className="w-5 h-5" />, <PieChart key="3" className="w-5 h-5" />];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white border-2 border-border p-8 rounded-2xl relative group hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                {icons[i % icons.length]}
              </div>
              <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Benchmark
              </div>
            </div>

            <div className="mb-2">
              <span className="text-4xl md:text-5xl font-light text-charcoal tracking-tighter leading-none">
                {stat.value}
              </span>
            </div>

            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground leading-snug">
              {stat.label}
            </h3>
            
            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest font-bold">Industry Average</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
