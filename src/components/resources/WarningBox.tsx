import React from "react";
import { AlertTriangle } from "lucide-react";

interface WarningBoxProps {
  title: string;
  body: string;
}

export function WarningBox({ title, body }: WarningBoxProps) {
  return (
    <div className="w-full bg-amber-50 border-y border-amber-200 p-8 my-10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0 border border-amber-200 shadow-sm group-hover:scale-110 transition-transform">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-xs font-bold text-amber-900 uppercase tracking-[0.2em] mb-3">{title}</h4>
          <p className="text-[15px] text-amber-800/80 font-light leading-relaxed m-0">{body}</p>
        </div>
      </div>
    </div>
  );
}
