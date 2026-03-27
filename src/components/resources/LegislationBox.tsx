import React from "react";
import { Scale } from "lucide-react";

interface LegislationBoxProps {
  legislation: string;
  summary: string;
}

export function LegislationBox({ legislation, summary }: LegislationBoxProps) {
  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 p-8 my-10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-slate-800" />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-slate-800/5 flex items-center justify-center text-slate-800 shrink-0 border border-slate-200 shadow-sm group-hover:bg-slate-800 group-hover:text-white transition-all transform group-hover:rotate-12">
          <Scale className="w-6 h-6" />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-[0.3em] mb-4">Statutory Legislation</h4>
          <h5 className="text-[15px] font-bold text-slate-950 mb-3 tracking-tight">{legislation}</h5>
          <p className="text-[14px] text-slate-700 font-light leading-relaxed m-0">{summary}</p>
        </div>
      </div>
    </div>
  );
}
