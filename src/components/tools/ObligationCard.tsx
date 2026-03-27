"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  area: string;
  status: string;
  frequency: string;
  detail: string;
  urgency: string;
  index: number;
  delayStartMs?: number;
  className?: string;
}

const STATUS_COLORS: Record<string, string> = {
  Required: "bg-red-100 text-red-700 border border-red-200",
  Recommended: "bg-amber-100 text-amber-700 border border-amber-200",
  "Review Needed": "bg-blue-100 text-blue-700 border border-blue-200",
};

const URGENCY_BORDER_COLORS: Record<string, string> = {
  Immediate: "border-l-red-500",
  "Within 3 months": "border-l-amber-500",
  "Within 12 months": "border-l-green-500",
};

export function ObligationCard({ area, status, frequency, detail, urgency, index, delayStartMs = 0, className }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delayStartMs + 50);
    return () => clearTimeout(t);
  }, [delayStartMs]);

  const borderColorClass = URGENCY_BORDER_COLORS[urgency] || "border-l-gray-500";

  return (
    <div 
      className={cn(
        "relative bg-white rounded-r-xl border-y border-r border-border p-5 shadow-sm transition-all duration-400 opacity-0 translate-y-6 flex flex-col md:flex-row md:items-start justify-between gap-4 border-l-0",
        mounted && "opacity-100 translate-y-0",
        borderColorClass,
        mounted && "border-l-4",
        className
      )}
      style={{ 
        transitionDelay: mounted ? `${index * 120}ms` : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="flex-1 space-y-2 pl-2">
        <h3 className="font-semibold text-charcoal text-lg">{area}</h3>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">{detail}</p>
      </div>

      <div className="flex flex-col md:items-end gap-2.5 shrink-0">
        <span className={cn("inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap w-fit", STATUS_COLORS[status] || "bg-gray-100 text-gray-700")}>
          {status}
        </span>
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{frequency}</span>
        <span className={cn(
            "text-xs font-bold uppercase tracking-wider", 
            urgency === "Immediate" ? "text-red-600" : urgency === "Within 3 months" ? "text-amber-600" : "text-green-600"
        )}>
            {urgency}
        </span>
      </div>
    </div>
  );
}
