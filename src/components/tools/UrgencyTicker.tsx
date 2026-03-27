"use client";

import { useMemo } from "react";
import { AlertCircle, CalendarClock, ShieldAlert } from "lucide-react";
import { AnimatedNumber } from "./AnimatedNumber";
import type { ComplianceEvent } from "@/lib/calendarRules";

interface Props {
  events: ComplianceEvent[];
  lastReviewDate: "recent" | "over_2_years" | "never" | null;
}

export function UrgencyTicker({ events, lastReviewDate }: Props) {
  const currentMonthIndex = new Date().getMonth();
  
  const stats = useMemo(() => {
    let dueThisMonth = 0;
    let dueNext90Days = 0;
    let overdueEvents = 0;

    // A simple next 3 months array, wrapping around December
    const next3Months = [
       (currentMonthIndex + 1) % 12,
       (currentMonthIndex + 2) % 12,
       (currentMonthIndex + 3) % 12,
    ];

    events.forEach((event) => {
      // Is it due this month?
      if (event.months.includes(currentMonthIndex)) {
        dueThisMonth++;
      }
      // Is it due in next 90 days?
      if (event.months.some(m => next3Months.includes(m))) {
        dueNext90Days++;
      }
      
      // Overdue logic: if it's statutory and the review was >2 years ago
      if (event.statutory && (lastReviewDate === "over_2_years" || lastReviewDate === "never")) {
        overdueEvents++;
      }
    });

    return { dueThisMonth, dueNext90Days, overdueEvents };
  }, [events, currentMonthIndex, lastReviewDate]);

  return (
    <div className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-border">
         
         <div className="flex-1 py-4 sm:pr-6 flex items-center justify-between group">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-amber-50 rounded text-amber-600 transition-colors group-hover:bg-amber-100"><CalendarClock className="w-5 h-5" /></div>
             <div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Due This Month</p>
               <h4 className="text-xl font-bold text-charcoal leading-none mt-1">
                 <AnimatedNumber end={stats.dueThisMonth} duration={1000} /> Tasks
               </h4>
             </div>
           </div>
         </div>

         <div className="flex-1 py-4 sm:px-6 flex items-center justify-between group">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-blue-50 rounded text-blue-600 transition-colors group-hover:bg-blue-100"><AlertCircle className="w-5 h-5" /></div>
             <div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Upcoming (90 Days)</p>
               <h4 className="text-xl font-bold text-charcoal leading-none mt-1">
                 <AnimatedNumber end={stats.dueNext90Days} duration={1000} /> Tasks
               </h4>
             </div>
           </div>
         </div>

         <div className="flex-1 py-4 sm:pl-6 flex items-center justify-between group">
           <div className="flex items-center gap-3">
             <div className={`p-2 rounded transition-colors ${stats.overdueEvents > 0 ? "bg-red-50 text-red-600 group-hover:bg-red-100 animate-pulse" : "bg-green-50 text-green-600 group-hover:bg-green-100"}`}>
               <ShieldAlert className="w-5 h-5" />
             </div>
             <div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Potentially Overdue</p>
               <h4 className={`text-xl font-bold leading-none mt-1 ${stats.overdueEvents > 0 ? "text-red-600" : "text-green-600"}`}>
                 <AnimatedNumber end={stats.overdueEvents} duration={1000} /> High Risk
               </h4>
             </div>
           </div>
         </div>

      </div>
    </div>
  );
}
