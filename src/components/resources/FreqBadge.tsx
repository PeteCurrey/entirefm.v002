// src/components/resources/FreqBadge.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface FreqBadgeProps {
  frequency: "Monthly" | "Quarterly" | "Annual" | "Every 2 years" | "Weekly";
  label?: string;
}

export function FreqBadge({ frequency, label }: FreqBadgeProps) {
  const display = label || frequency;
  
  const colors = {
    "Monthly": "bg-blue-100 text-blue-800 border-blue-200",
    "Quarterly": "bg-amber-100 text-amber-800 border-amber-200",
    "Annual": "bg-[#1a2e4a]/10 text-[#1a2e4a] border-[#1a2e4a]/20",
    "Every 2 years": "bg-green-100 text-green-800 border-green-200",
    "Weekly": "bg-purple-100 text-purple-800 border-purple-200"
  };

  const style = colors[frequency as keyof typeof colors] || "bg-gray-100 text-gray-800";

  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border whitespace-nowrap", style)}>
      {display}
    </span>
  );
}
