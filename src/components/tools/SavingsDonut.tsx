"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { fmt } from "@/lib/roiCalculator";

interface Breakdown {
  category: string;
  amount: number;
  percentage: number;
}

interface Props {
  breakdown: Breakdown[];
  delayMs?: number;
  className?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Reactive Maintenance Reduction": "#f5a623", // gold
  "Management Time Saved": "#1a2e4a", // navy
  "Compliance Cost Reduction": "#3b82f6", // blue
};

export function SavingsDonut({ breakdown, delayMs = 0, className }: Props) {
  const [stage, setStage] = useState(-1);
  const [activeSegment, setActiveSegment] = useState<Breakdown | null>(null);

  const radius = 80;
  const strokeWidth = 24;
  const viewBoxSize = (radius + strokeWidth) * 2;
  const center = viewBoxSize / 2;
  const circumference = 2 * Math.PI * radius;

  // Find largest to show at the end
  const largest = [...breakdown].sort((a,b) => b.percentage - a.percentage)[0];

  useEffect(() => {
    // Stage -1 = hidden
    // Stage 0 = first segment drawing
    // Stage 1 = second segment drawing
    // Stage 2 = third segment drawing
    // Stage 3 = complete/legend
    
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    
    timeouts.push(setTimeout(() => {
      setStage(0);
      if (breakdown[0]) setActiveSegment(breakdown[0]);
    }, delayMs));

    if (breakdown[1]) {
      timeouts.push(setTimeout(() => {
        setStage(1);
        setActiveSegment(breakdown[1]);
      }, delayMs + 800)); // 600ms draw + 200ms stagger
    }

    if (breakdown[2]) {
      timeouts.push(setTimeout(() => {
        setStage(2);
        setActiveSegment(breakdown[2]);
      }, delayMs + 1600));
    }

    timeouts.push(setTimeout(() => {
      setStage(3);
      setActiveSegment(largest || null);
    }, delayMs + (breakdown.length * 800) + 400));

    return () => timeouts.forEach(clearTimeout);
  }, [breakdown, delayMs, largest]);

  let currentOffset = 0; // Cumulative percentage offset

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative" style={{ width: viewBoxSize, height: viewBoxSize }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="-rotate-90 transform origin-center">
           {/* Background ring */}
           <circle 
             cx={center} cy={center} r={radius} 
             stroke="#f1f5f9" strokeWidth={strokeWidth} fill="none"
           />
           
           {/* Data rings */}
           {breakdown.map((item, i) => {
             const segmentLength = (item.percentage / 100) * circumference;
             const color = CATEGORY_COLORS[item.category] || "#94a3b8";
             
             // The offset for the start of THIS segment
             const strokeDashoffsetStart = circumference - currentOffset;
             
             // The dash array needs to be: segment length, gap length
             const strokeDasharray = `${segmentLength} ${circumference - segmentLength}`;
             
             // The offset rotation mapping so it starts in the right place
             // strokeDashoffset pushes the DASH pattern backwards. 
             // To start at cumulative offset `currentOffset` (pixels from top), 
             // we set the offset to `circumference - currentOffset`.
             const startOffset = circumference - currentOffset;
             
             // When drawing, it transitions from a "zero length" state to "segmentLength"
             // Actually, the easiest way to animate sequential segments without them moving is:
             // 1. dasharray = `0 circumference` -> transitions to `segmentLength circumference`
             // 2. dashoffset = fixed at startOffset
             
             // Is this segment active or already drawn?
             const isDrawn = stage >= i;
             
             const currentDashArray = isDrawn ? strokeDasharray : `0 ${circumference}`;

             // Add for next iteration
             currentOffset += segmentLength;

             return (
               <circle 
                 key={i}
                 cx={center} cy={center} r={radius} 
                 stroke={color} strokeWidth={strokeWidth} fill="none"
                 strokeDasharray={currentDashArray}
                 strokeDashoffset={startOffset}
                 className="transition-all duration-600 ease-out"
                 style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
               />
             );
           })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300">
           {activeSegment && (
             <div className="text-center animate-in fade-in zoom-in duration-300" key={activeSegment.category}>
               <span className="text-3xl font-bold block" style={{ color: CATEGORY_COLORS[activeSegment.category] || "#1a2e4a" }}>
                 {activeSegment.percentage}%
               </span>
             </div>
           )}
        </div>
      </div>

      {/* Legend */}
      <div className={cn("mt-8 w-full max-w-sm space-y-3 transition-all duration-700", stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
         {breakdown.map((item, i) => (
           <div key={i} className="flex items-center justify-between text-sm">
             <div className="flex items-center gap-2">
               <span className="w-3 h-3 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[item.category] || "#94a3b8" }} />
               <span className="text-charcoal font-medium">{item.category}</span>
             </div>
             <div className="flex items-center gap-3">
               <span className="text-muted-foreground">{item.percentage}%</span>
               <span className="font-bold text-charcoal">{fmt(item.amount)}</span>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
}
