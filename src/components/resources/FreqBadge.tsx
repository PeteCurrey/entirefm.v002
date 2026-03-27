import React from 'react';
import { cn } from '@/lib/utils';

interface FreqBadgeProps {
  frequency: "Monthly" | "Quarterly" | "Annual" | "Every 2 years" | "Weekly";
  label?: string;
}

export function FreqBadge({ frequency, label }: FreqBadgeProps) {
  const display = label || frequency;
  
  const colors = {
    "Monthly": "bg-blue-50 text-blue-800 border-blue-200",
    "Quarterly": "bg-amber-50 text-amber-900 border-amber-200",
    "Annual": "bg-slate-50 text-slate-800 border-slate-200",
    "Every 2 years": "bg-green-50 text-green-800 border-green-200",
    "Weekly": "bg-purple-50 text-purple-800 border-purple-200"
  };

  const style = colors[frequency] || "bg-slate-50 text-slate-800 border-slate-200";

  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-sm", style)}>
      {display}
    </span>
  );
}
