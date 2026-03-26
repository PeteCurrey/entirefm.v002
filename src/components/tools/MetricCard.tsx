"use client";

import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown, Minus, Info } from "lucide-react";
import type { DataPoint } from "@/lib/fmIntelligence";

export function MetricCard({ metric }: { metric: DataPoint }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const targetValue = typeof metric.value === "number" ? metric.value : parseFloat(metric.value.toString());
  const isFloat = targetValue % 1 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOutQuad = (t: number) => t * (2 - t);
          const currentCount = easeOutQuad(progress) * targetValue;
          
          setCount(isFloat ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [targetValue, isFloat]);

  return (
    <div ref={cardRef} className="bg-white border-2 border-border p-8 rounded-xl relative group hover:border-primary/50 transition-all duration-500 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground leading-tight max-w-[140px]">
            {metric.label}
          </h3>
          <div className={`flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider ${
            metric.trend === "up" ? "text-green-600" : metric.trend === "down" ? "text-red-600" : "text-blue-600"
          }`}>
            {metric.trend === "up" && <TrendingUp className="w-3 h-3" />}
            {metric.trend === "down" && <TrendingDown className="w-3 h-3" />}
            {metric.trend === "stable" && <Minus className="w-3 h-3" />}
            {metric.trendValue}
          </div>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-light text-charcoal tracking-tighter">
            {metric.unit === "£bn" && "£"}{count}{metric.unit !== "£bn" && metric.unit}
            {metric.unit === "£bn" && <span className="text-2xl ml-1 font-bold text-primary">bn</span>}
          </span>
        </div>

        <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
          {metric.context}
        </p>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
            <Info className="w-3 h-3 text-muted-foreground" />
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-medium">Source: {metric.source}</span>
          </div>
          <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">{metric.updatedDate}</span>
        </div>
      </div>
    </div>
  );
}
