"use client";

import type { SeasonalAlert } from "@/lib/fmIntelligence";

export function SeasonalStrip({ alerts }: { alerts: SeasonalAlert[] }) {
  const currentMonth = new Date().getMonth();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-6 md:grid-cols-12">
        {months.map((m, idx) => {
          const alert = alerts.find(a => a.month === idx);
          const isCurrent = currentMonth === idx;
          
          return (
            <div key={m} className={`relative flex flex-col items-center py-6 border-r last:border-r-0 border-border group ${isCurrent ? "bg-primary/[0.03]" : ""}`}>
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                {m}
              </span>
              
              <div className="h-6 flex items-center justify-center">
                {alert && (
                  <div 
                    className={`w-2 h-2 rounded-full cursor-help animate-pulse ${
                      alert.urgency === "high" ? "bg-red-500" : alert.urgency === "medium" ? "bg-amber-500" : "bg-blue-500"
                    }`}
                  />
                )}
              </div>

              {isCurrent && <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />}
              
              {alert && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-charcoal text-white p-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none shadow-2xl">
                  <div className={`text-[8px] font-bold uppercase tracking-widest mb-1 ${
                    alert.urgency === "high" ? "text-red-400" : alert.urgency === "medium" ? "text-amber-400" : "text-blue-400"
                  }`}>
                    {alert.urgency} Urgency
                  </div>
                  <h4 className="text-[10px] font-bold mb-1 leading-tight">{alert.title}</h4>
                  <p className="text-[9px] font-light text-gray-400 leading-relaxed truncate-2-lines">{alert.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
