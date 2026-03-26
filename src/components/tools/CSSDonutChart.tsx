"use client";

import { useEffect, useState, useRef } from "react";
import type { ChartDataSet } from "@/lib/fmIntelligence";

export function CSSDonutChart({ dataset }: { dataset: ChartDataSet }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  
  const total = dataset.data.reduce((acc, curr) => acc + curr.value, 0);
  
  // Calculate segments for conic-gradient
  let currentPercentage = 0;
  const colors = ["#d4af37", "#0a1c3b", "#163366", "#1a4a99", "#2460cc", "#eee"];
  
  const segments = dataset.data.map((d, i) => {
    const start = currentPercentage;
    const end = start + (d.value / total) * 100;
    currentPercentage = end;
    return { ...d, start, end, color: colors[i % colors.length] };
  });

  const gradient = segments.map(s => `${s.color} ${s.start}% ${s.end}%`).join(", ");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={chartRef} className="flex flex-col lg:flex-row items-center gap-12">
      <div className="relative w-64 h-64">
        {/* The Donut */}
        <div 
          className="w-full h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            background: `conic-gradient(${isVisible ? gradient : "#eee 0% 100%"})`,
            mask: "radial-gradient(circle, transparent 65%, black 66%)",
            WebkitMask: "radial-gradient(circle, transparent 65%, black 66%)",
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            opacity: isVisible ? 1 : 0
          }}
        />
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-4xl font-light text-charcoal">{total}%</span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Total Analyzed</span>
        </div>
      </div>

      <div className="flex-1 w-full space-y-3">
        {segments.map((s, i) => (
          <button 
            key={i}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all text-left group ${activeIdx === i ? "border-primary bg-primary/5 translate-x-1" : "border-border hover:border-primary/30"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
              <div className="text-xs font-bold text-charcoal uppercase tracking-widest">{s.label}</div>
            </div>
            <div className="text-xs font-medium text-muted-foreground">{s.value}%</div>
          </button>
        ))}
        {activeIdx !== null && (
          <div className="mt-6 p-4 bg-charcoal text-white rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{segments[activeIdx].label}</h4>
            <p className="text-[11px] font-light text-gray-400 leading-relaxed">
              {segments[activeIdx].value}% of all statutory enforcement notices in 2024 were attributed to failures in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
