"use client";

import { useEffect, useState } from "react";
import { Printer, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

interface Props {
  onBack: () => void;
  onLead: () => void;
  onDownload: () => void;
  isDownloading: boolean;
}

export function ScheduleStickyBar({ onBack, onLead, onDownload, isDownloading }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Stage the sticky bar to slide up slightly after the grid animation starts
    const t = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
         mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
       <div className="max-w-4xl mx-auto bg-charcoal/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
          
          <div className="text-white hidden sm:block">
             <h4 className="text-sm font-bold uppercase tracking-widest text-[#cbd5e1]">Your Schedule is Complete</h4>
             <p className="text-xs text-muted-foreground opacity-80 mt-0.5">Ready to convert to PDF or move to physical management.</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
             <button 
                onClick={onBack}
                className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 px-4 py-3 rounded-xl text-xs font-bold transition-colors ring-1 ring-white/10 hidden sm:block"
             >
                Edit
             </button>

             <button 
                onClick={onDownload}
                disabled={isDownloading}
                className="w-full sm:w-auto bg-white text-charcoal flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold hover:bg-muted transition-colors disabled:opacity-50 ring-1 ring-white shadow-xl"
             >
                {isDownloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Printer className="w-4 h-4" />}
                {isDownloading ? "Generating..." : "Download PDF"}
             </button>

             <button 
                onClick={onLead}
                className="w-full sm:w-auto bg-primary text-white flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold hover:bg-primary/90 transition-colors uppercase tracking-widest shadow-xl ring-1 ring-primary"
             >
                <ArrowRight className="w-4 h-4" /> Get Managed
             </button>
          </div>
       </div>
    </div>
  );
}
