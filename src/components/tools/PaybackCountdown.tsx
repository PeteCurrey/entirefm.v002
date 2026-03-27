"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  months: number;
  delayMs?: number;
  className?: string;
}

export function PaybackCountdown({ months, delayMs = 0, className }: Props) {
  const [value, setValue] = useState(24); // Start at 24 months
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    
    t1 = setTimeout(() => {
      setStarted(true);
      const start = 24;
      const end = months;
      const duration = 1000;
      let startTime = performance.now();
      
      const animate = (time: number) => {
        const elapsed = time - startTime;
        if (elapsed >= duration) {
          setValue(end);
          return;
        }
        const progress = elapsed / duration;
        // Ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = start - ((start - end) * ease);
        setValue(Math.max(end, Math.round(current)));
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    }, delayMs);

    return () => clearTimeout(t1);
  }, [months, delayMs]);

  return (
    <div className={cn("bg-gradient-to-br from-charcoal to-black rounded-2xl p-8 text-center text-white border border-white/10 shadow-xl", className)}>
      <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Investment Payback</h3>
      
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="flex items-baseline gap-2">
           <span className="text-6xl md:text-8xl w-32 md:w-40 font-bold tracking-tight text-white tabular-nums drop-shadow-md text-right">
             {started ? value : 24}
           </span>
           <span className="text-2xl md:text-4xl font-light text-gray-400">months</span>
        </div>
      </div>
      
      <p className="text-gray-300 font-light leading-relaxed max-w-xl mx-auto text-sm md:text-base">
        At current reactive spend levels, your EntireFM TFM investment pays back in <strong className="text-white font-semibold">{months} months</strong> — then every subsequent month yields pure operational saving.
      </p>
    </div>
  );
}
