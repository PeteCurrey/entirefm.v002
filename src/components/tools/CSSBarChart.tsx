"use client";

import { useEffect, useState, useRef } from "react";
import type { ChartDataSet } from "@/lib/fmIntelligence";

export function CSSBarChart({ dataset }: { dataset: ChartDataSet }) {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...dataset.data.map(d => d.value));

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
    <div ref={chartRef} className="space-y-4">
      {dataset.data.map((item, idx) => (
        <div key={item.label} className="group">
          <div className="flex justify-between items-end mb-1.5 px-1">
            <span className="text-[11px] font-bold text-charcoal uppercase tracking-widest">{item.label}</span>
            <span className="text-[11px] font-medium text-primary">{item.value}%</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out flex items-center justify-end px-2"
              style={{ 
                width: isVisible ? `${(item.value / maxValue) * 100}%` : "0%",
                transitionDelay: `${idx * 100}ms`
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
