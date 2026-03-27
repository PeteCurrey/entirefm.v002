"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  risk: "Low" | "Medium" | "High";
  className?: string;
  delayMs?: number;
}

export function RiskGauge({ risk, className, delayMs = 0 }: Props) {
  const [stage, setStage] = useState(0);
  const [count, setCount] = useState(0);

  const targetScore = risk === "Low" ? 20 : risk === "Medium" ? 65 : 95;
  const color = risk === "Low" ? "#22c55e" : risk === "Medium" ? "#f59e0b" : "#ef4444";
  const circleRadius = 108; // 240/2 = 120, minus 12px stroke = 108
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = stage >= 2 ? circumference - (targetScore / 100) * circumference : circumference;

  useEffect(() => {
    // Stage timings:
    // +0ms overlay (parent handles)
    // +200ms gauge fades in (stage 1)
    // +400ms ring fills/num counts (stage 2)
    // +2200ms ring complete
    // +2400ms risk level text fades in (stage 3)
    
    const t1 = setTimeout(() => setStage(1), delayMs + 200);
    const t2 = setTimeout(() => {
      setStage(2);
      // animate count over 1800ms
      let start = performance.now();
      const duration = 1800;
      
      const animate = (time: number) => {
        const elapsed = time - start;
        if (elapsed >= duration) {
          setCount(targetScore);
          return;
        }
        // easeOutCubic
        const progress = elapsed / duration;
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(targetScore * ease));
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delayMs + 400);

    const t3 = setTimeout(() => setStage(3), delayMs + 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [targetScore, delayMs]);

  return (
    <div className={cn("flex flex-col items-center justify-center transition-opacity duration-300", stage >= 1 ? "opacity-100" : "opacity-0", className)}>
       <div className="relative w-[240px] h-[240px]">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 240 240">
             <circle 
               cx="120" cy="120" r={circleRadius} 
               stroke="#f1f5f9" strokeWidth="12" fill="none" 
             />
             <circle 
               cx="120" cy="120" r={circleRadius} 
               stroke={color} strokeWidth="12" fill="none"
               strokeLinecap="round"
               strokeDasharray={circumference}
               strokeDashoffset={strokeDashoffset}
               className="transition-all duration-[1800ms]"
               style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
             />
          </svg>
          
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <span className="text-5xl font-bold leading-none tracking-tighter" style={{ color }}>{count}</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-3">Compliance Risk</span>
          </div>
       </div>

       {/* Label text */}
       <div className={cn("mt-8 text-2xl font-bold uppercase tracking-widest transition-opacity duration-500", stage >= 3 ? "opacity-100" : "opacity-0")} style={{ color }}>
          {risk} RISK
       </div>
    </div>
  );
}
