"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delayMs?: number;
  className?: string;
}

export function AnimatedNumber({ 
  start = 0, 
  end, 
  duration = 1000, 
  prefix = "", 
  suffix = "", 
  delayMs = 0,
  className 
}: Props) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    
    t = setTimeout(() => {
      let startTime = performance.now();
      
      const animate = (time: number) => {
        const elapsed = time - startTime;
        if (elapsed >= duration) {
          setValue(end);
          return;
        }
        
        // easeOutCubic
        const progress = elapsed / duration;
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * ease;
        
        setValue(Math.round(current));
        requestAnimationFrame(animate);
      };
      
      requestAnimationFrame(animate);
    }, delayMs);

    return () => clearTimeout(t);
  }, [start, end, duration, delayMs]);

  // Format with commas for large numbers
  const formatted = value.toLocaleString();

  return (
    <span className={cn("inline-block", className)}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
