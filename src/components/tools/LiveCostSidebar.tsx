"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, CheckCircle2 } from "lucide-react";
import { AnimatedNumber } from "./AnimatedNumber";

interface Props {
  progress: number;
  low: number;
  high: number;
  isFormComplete: boolean;
  onContinue: () => void;
}

export function LiveCostSidebar({ progress, low, high, isFormComplete, onContinue }: Props) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Pulse animation on number change
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 600);
    return () => clearTimeout(t);
  }, [low, high]);

  const fmtOptions = { style: 'currency', currency: 'GBP', minimumFractionDigits: 0, maximumFractionDigits: 0 };

  return (
    <>
      {/* Desktop Sticky Panel */}
      <div className="hidden lg:block sticky top-24 w-full bg-white border border-border rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
         <div className="bg-charcoal px-6 py-4 text-white">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Live Estimate
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full animate-pulse">Updates instantly</span>
            </h3>
         </div>
         <div className="p-6">
            <div className="mb-8">
               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                 <span>Form Completion</span>
                 <span className={isFormComplete ? "text-green-600" : ""}>{progress}%</span>
               </div>
               <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div className={cn("h-full transition-all duration-500", isFormComplete ? "bg-green-500" : "bg-primary")} style={{ width: `${progress}%` }} />
               </div>
            </div>

            <div className={cn("bg-gray-50 rounded-xl p-6 text-center border transition-colors duration-300", pulse ? "border-primary/50 bg-primary/5" : "border-border")}>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Estimated Annual Cost</p>
               <div className={cn("text-3xl xl:text-4xl font-bold tracking-tight text-charcoal transition-transform duration-300", pulse && "scale-105")}>
                 {low === 0 && high === 0 ? (
                   "£0"
                 ) : (
                   <>
                     £<AnimatedNumber end={low} duration={600} /> – £<AnimatedNumber end={high} duration={600} />
                   </>
                 )}
               </div>
            </div>

            <div className="mt-8">
               {isFormComplete ? (
                 <button onClick={onContinue} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-14 rounded-xl shadow-lg transition-colors flex flex-col items-center justify-center uppercase tracking-widest text-sm">
                   Get Formal Proposal →
                 </button>
               ) : (
                 <div className="w-full bg-muted text-muted-foreground font-bold h-14 rounded-xl flex items-center justify-center uppercase tracking-widest text-[11px] cursor-not-allowed border border-border opacity-60">
                   Complete profile to continue
                 </div>
               )}
            </div>
         </div>
         
         <div className="bg-slate-50 border-t border-border px-6 py-4">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-charcoal mb-3">What's included in this baseline?</h4>
            <ul className="text-xs text-muted-foreground space-y-2">
               <li className="flex gap-2 items-start"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /> Preventative statutory maintenance</li>
               <li className="flex gap-2 items-start"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /> 24/7 helpdesk administration</li>
               <li className="flex gap-2 items-start"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /> Full digital compliance footprint</li>
            </ul>
         </div>
      </div>

      {/* Mobile Bottom Fixed Drawer */}
      <div className={cn("lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out border-t border-border rounded-t-2xl", mobileExpanded ? "translate-y-0" : "translate-y-[calc(100%-80px)]")}>
         {/* Handle / Header (always visible) */}
         <button onClick={() => setMobileExpanded(!mobileExpanded)} className="w-full px-6 flex items-center justify-between h-[80px]">
            <div className="flex flex-col items-start gap-1">
               <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Live Annual Estimate</span>
               <span className="font-bold text-lg text-charcoal tracking-tight flex items-baseline gap-1">
                 {low === 0 ? "£0" : <>£<AnimatedNumber end={low} duration={600} /> – £<AnimatedNumber end={high} duration={600} /></>}
               </span>
            </div>
            <div className={cn("p-2 rounded-full bg-gray-100 transition-transform duration-300", mobileExpanded && "rotate-180")}>
               <ChevronUp className="w-5 h-5 text-charcoal" />
            </div>
         </button>

         {/* Drawer Body (expanded) */}
         <div className="px-6 pb-8 pt-2 h-auto max-h-[60vh] overflow-y-auto">
            <div className="mb-6">
               <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                 <span>Form Completion</span>
                 <span className={isFormComplete ? "text-green-600" : ""}>{progress}%</span>
               </div>
               <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                 <div className={cn("h-full transition-all duration-500", isFormComplete ? "bg-green-500" : "bg-primary")} style={{ width: `${progress}%` }} />
               </div>
            </div>

            <div className="bg-slate-50 border border-border rounded-xl p-4 mb-6">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-charcoal mb-3">Baseline Coverage</h4>
              <ul className="text-xs text-muted-foreground space-y-2">
                 <li className="flex gap-2 items-start"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /> SFG20 Aligned Preventative</li>
                 <li className="flex gap-2 items-start"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /> 24/7 UK Based Helpdesk</li>
              </ul>
            </div>

            {isFormComplete ? (
               <button onClick={onContinue} className="w-full bg-green-600 text-white font-bold h-12 rounded-xl shadow-lg transition-colors uppercase tracking-widest text-xs">
                 Get Formal Proposal →
               </button>
            ) : (
               <div className="w-full bg-muted text-muted-foreground font-bold h-12 rounded-xl flex items-center justify-center uppercase tracking-widest text-[10px] cursor-not-allowed border border-border">
                 Complete profile to request proposal
               </div>
            )}
         </div>
      </div>
    </>
  );
}
