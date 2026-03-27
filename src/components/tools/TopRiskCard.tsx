"use client";

import { useEffect, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  risk: string;
  index: number;
  delayStartMs?: number;
  className?: string;
}

export function TopRiskCard({ risk, index, delayStartMs = 0, className }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stagger the flip in sequentially 
    const t = setTimeout(() => setMounted(true), delayStartMs + (index * 200));
    return () => clearTimeout(t);
  }, [delayStartMs, index]);

  return (
    <div style={{ perspective: "1000px" }} className={className}>
        <div 
          className={cn(
            "border-l-4 border-red-500 bg-red-50 rounded-r-xl p-5 flex items-start gap-3 transition-all duration-500",
            mounted ? "opacity-100" : "opacity-0"
          )}
          style={{
            transformOrigin: "top center",
            transform: mounted ? "rotateX(0deg)" : "rotateX(-90deg)",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-charcoal font-medium text-sm leading-snug">{risk}</p>
        </div>
    </div>
  );
}
