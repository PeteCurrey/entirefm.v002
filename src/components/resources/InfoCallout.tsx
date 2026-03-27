import React from "react";
import { Info } from "lucide-react";

interface InfoCalloutProps {
  heading: string;
  body: string;
}

export function InfoCallout({ heading, body }: InfoCalloutProps) {
  return (
    <div className="w-full bg-charcoal rounded-2xl p-8 md:p-12 my-12 relative overflow-hidden group shadow-2xl border border-white/5">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/30 transition-all duration-700" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
             <Info className="w-5 h-5" />
           </div>
           <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Specialist Guidance</span>
        </div>
        
        <h4 className="text-2xl md:text-4xl font-light text-white mb-6 tracking-tighter leading-tight">
          {heading.split(' ').map((word, i) => i === heading.split(' ').length - 1 ? <span key={i} className="font-bold text-primary">{word}</span> : word + ' ')}
        </h4>
        
        <p className="text-lg text-gray-300 font-light leading-relaxed m-0 max-w-2xl">
          {body}
        </p>
      </div>
    </div>
  );
}
