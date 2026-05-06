"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, prefix = "", suffix = "", className }) => {
  const [count, setCount] = useState(0);
  const isNumeric = /^\d+$/.test(value);
  const numericValue = isNumeric ? parseInt(value) : NaN;

  useEffect(() => {
    if (!isNumeric || isNaN(numericValue)) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isNumeric, numericValue]);

  return (
    <div className={cn("bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-6 shadow-2xl", className)}>
      <div className="text-3xl font-extralight text-primary mb-2">
        {prefix}{isNaN(numericValue) ? value : count}{suffix}
      </div>
      <div className="text-[11px] text-white/60 font-medium uppercase tracking-widest">{label}</div>
    </div>
  );
};

export default MetricCard;
