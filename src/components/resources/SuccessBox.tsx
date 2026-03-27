import React from "react";
import { CheckCircle2 } from "lucide-react";

interface SuccessBoxProps {
  title: string;
  body: string;
}

export function SuccessBox({ title, body }: SuccessBoxProps) {
  return (
    <div className="w-full bg-green-50 border-y border-green-200 p-8 my-10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-green-500" />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 border border-green-200 shadow-sm group-hover:scale-110 transition-transform">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-[10px] font-bold text-green-900 uppercase tracking-[0.2em] mb-2">{title}</h4>
          <p className="text-[14px] text-green-800/80 font-light leading-relaxed m-0">{body}</p>
        </div>
      </div>
    </div>
  );
}
