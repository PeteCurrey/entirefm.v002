"use client";
import { useState, useMemo, useEffect } from "react";
import { complianceEvents, getEventsForBuilding, type ComplianceEvent } from "@/lib/calendarRules";
import { 
  Calendar, Download, CheckCircle2, AlertCircle, Info, 
  ArrowRight, Settings2, ShieldCheck, Mail, Clock
} from "lucide-react";
import Link from "next/link";
import { UrgencyTicker } from "./UrgencyTicker";

type State = "setup" | "calendar";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function ComplianceCalendarClient() {
  const [state, setState] = useState<State>("setup");
  const [selectedAssets, setSelectedAssets] = useState<string[]>(["General Building", "Fire Safety", "Electrical"]);
  const [lastReviewDate, setLastReviewDate] = useState<"recent" | "over_2_years" | "never" | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ComplianceEvent | null>(null);
  const [mountedMonths, setMountedMonths] = useState<number>(0);

  useEffect(() => {
    if (state === "calendar") {
      setMountedMonths(0);
      const interval = setInterval(() => {
        setMountedMonths((m) => {
          if (m >= 12) {
            clearInterval(interval);
            return 12;
          }
          return m + 1;
        });
      }, 100); // Stagger each month card by 100ms
      return () => clearInterval(interval);
    }
  }, [state]);

  const activeEvents = useMemo(() => getEventsForBuilding(selectedAssets), [selectedAssets]);

  // Group events by month
  const monthlySchedule = useMemo(() => {
    const schedule: Record<string, ComplianceEvent[]> = {};
    MONTHS.forEach(m => schedule[m] = []);

    activeEvents.forEach(event => {
      event.months.forEach(mIndex => {
        schedule[MONTHS[mIndex]].push(event);
      });
    });
    return schedule;
  }, [activeEvents]);

  const toggleAsset = (asset: string) => {
    if (asset === "General Building") return; // Always required
    setSelectedAssets(prev => prev.includes(asset) ? prev.filter(a => a !== asset) : [...prev, asset]);
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const res = await fetch("/api/calendar-export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assetIds: selectedAssets }),
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "entirefm-compliance-calendar.ics";
        a.click();
      }
    } catch (e) {
      console.error("Export failed", e);
    } finally {
      setIsExporting(false);
    }
  };

  if (state === "setup") return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="bg-charcoal p-8 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16" />
          <h2 className="text-2xl font-light mb-2">Build Your Building Profile</h2>
          <p className="text-gray-400 text-sm font-light">Select the assets present in your building to generate your custom statutory compliance calendar.</p>
        </div>
        <div className="p-8">
          {/* Section 1 */}
          <h3 className="text-sm font-bold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full text-[10px]">1</span> 
            Select Your Infrastructure
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {complianceEvents.reduce((acc: string[], e) => acc.includes(e.category) ? acc : [...acc, e.category], []).map(cat => (
              <button key={cat} onClick={() => toggleAsset(cat)} className={`p-4 rounded-xl border-2 transition-all text-left flex items-start gap-3 group ${selectedAssets.includes(cat) ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"}`}>
                <div className={`mt-0.5 rounded p-1.5 transition-colors ${selectedAssets.includes(cat) ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"}`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal">{cat}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-widest leading-none">Statutory</div>
                </div>
              </button>
            ))}
          </div>

          {/* Section 2 */}
          <h3 className="text-sm font-bold text-charcoal mb-4 flex items-center gap-2">
            <span className="w-5 h-5 flex items-center justify-center bg-primary text-white rounded-full text-[10px]">2</span> 
            Compliance Exposure
          </h3>
          <div className="bg-slate-50 border border-border p-5 rounded-xl mb-10">
            <p className="text-xs text-muted-foreground mb-4">When was your last comprehensive PPM review or compliance audit?</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <button onClick={() => setLastReviewDate("recent")} className={`text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-lg border transition-all ${lastReviewDate === "recent" ? "bg-green-100 text-green-800 border-green-300" : "bg-white text-muted-foreground hover:border-primary"}`}>In the last 2 years</button>
              <button onClick={() => setLastReviewDate("over_2_years")} className={`text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-lg border transition-all ${lastReviewDate === "over_2_years" ? "bg-amber-100 text-amber-800 border-amber-300" : "bg-white text-muted-foreground hover:border-primary"}`}>Over 2 years ago</button>
              <button onClick={() => setLastReviewDate("never")} className={`text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-lg border transition-all ${lastReviewDate === "never" ? "bg-red-100 text-red-800 border-red-300" : "bg-white text-muted-foreground hover:border-primary"}`}>Never / Not Sure</button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 border-t border-border pt-8 text-center px-4">
            <div className="max-w-lg">
              <h4 className="text-sm font-bold text-charcoal mb-1">Your statutory roadmap is ready</h4>
              <p className="text-xs text-muted-foreground">Based on your selection, we've identified {activeEvents.length} distinct statutory and best-practice maintenance events required annually.</p>
            </div>
            <button disabled={!lastReviewDate} onClick={() => setState("calendar")} className="bg-primary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-xl disabled:opacity-40 disabled:cursor-not-allowed">
              Generate My Calendar <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pb-24">
      {/* Calendar Header */}
      <div className="bg-charcoal border-b border-white/5 py-4">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setState("setup")} className="text-gray-400 hover:text-white transition-colors">
              <Settings2 className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-white font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Building Compliance Schedule
              </h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{selectedAssets.length} asset categories tracked</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={handleExport} disabled={isExporting} className="bg-white/10 text-white hover:bg-white/20 px-4 py-2 rounded font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50">
              <Download className="w-3.5 h-3.5" /> {isExporting ? "Exporting..." : "Export to Outlook/iCal"}
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded font-bold text-xs uppercase tracking-widest shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" /> Get Weekly Reminders
            </button>
          </div>
        </div>
      </div>

      <UrgencyTicker events={activeEvents} lastReviewDate={lastReviewDate} />

      <div className="container mx-auto max-w-7xl px-6 mt-12 grid lg:grid-cols-4 gap-8">
        {/* Main Calendar Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {MONTHS.map((month, idx) => (
              <div 
                key={month} 
                className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-500 ease-out flex flex-col min-h-[160px] 
                  ${idx === new Date().getMonth() ? "border-primary ring-1 ring-primary/20 bg-primary/[0.02]" : "border-border"}
                  ${idx < mountedMonths ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className={`px-4 py-2 border-b text-[11px] font-bold uppercase tracking-[0.15em] flex justify-between items-center ${idx === new Date().getMonth() ? "bg-primary text-white" : "bg-muted text-muted-foreground border-border"}`}>
                  {month}
                  {idx === new Date().getMonth() && <span className="bg-white/20 px-1.5 py-0.5 rounded text-[8px] animate-pulse">Current</span>}
                </div>
                <div className="p-3 space-y-1.5 flex-1 overflow-y-auto max-h-[140px] custom-scrollbar">
                  {monthlySchedule[month].length > 0 ? (
                    monthlySchedule[month].map((event) => {
                      const isOverdue = event.statutory && (lastReviewDate === "never" || lastReviewDate === "over_2_years");
                      return (
                        <button key={event.id} onClick={() => setSelectedEvent(event)} className={`w-full text-left p-2 rounded text-[10px] leading-tight transition-all border group ${event.statutory ? "bg-red-50/50 border-red-100 text-red-900" : "bg-blue-50/50 border-blue-100 text-blue-900"} ${isOverdue ? "ring-1 ring-red-400 group-hover:ring-red-500" : ""}`}>
                          <div className="font-bold flex justify-between gap-1 items-start">
                            <span className="truncate">{event.title}</span>
                            {event.statutory && <ShieldCheck className={`w-2.5 h-2.5 shrink-0 ${isOverdue ? "text-red-600" : "text-red-500"}`} />}
                          </div>
                          <div className="opacity-60 flex items-center justify-between gap-1 mt-0.5 uppercase tracking-tighter">
                            <span className="flex items-center gap-1"><Clock className="w-2 h-2 shrink-0" /> {event.frequency}</span>
                            {isOverdue && <span className="text-[8px] font-bold text-red-600 bg-red-100 px-1 rounded">Past Due</span>}
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <div className="h-full flex items-center justify-center text-[10px] text-muted-foreground/40 italic">No events scheduled</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white border border-border rounded-xl shadow-sm p-6 sticky top-24">
            {selectedEvent ? (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${selectedEvent.statutory ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                    {selectedEvent.statutory ? "Statutory Duty" : "Industry Best Practice"}
                  </span>
                  <button onClick={() => setSelectedEvent(null)} className="text-muted-foreground hover:text-charcoal text-xs">✕</button>
                </div>
                <h3 className="text-lg font-bold text-charcoal leading-tight mb-3">{selectedEvent.title}</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Standard Reference</span>
                    <p className="text-sm font-medium text-charcoal">{selectedEvent.legislation}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Impact & Requirement</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedEvent.description}</p>
                  </div>
                  <div className="bg-muted p-4 rounded-xl">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">EntireFM Recommendation</span>
                    <p className="text-xs text-charcoal/80 leading-relaxed italic">"Missing this test can result in an enforcement notice. Ensure engineer certificates are logged in your compliance file."</p>
                  </div>
                </div>
                <Link href="/contact" className="w-full bg-primary text-white py-3 rounded-lg font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md">
                  Book This Service
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info className="w-6 h-6 text-muted-foreground" />
                </div>
                <h4 className="text-sm font-bold text-charcoal mb-2">Event Details</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Select any compliance event in the calendar to see detailed statutory requirements, standard references, and maintenance advice.</p>
              </div>
            )}
          </div>

          <div className="bg-charcoal text-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-3xl -mr-12 -mt-12 transition-all group-hover:bg-primary/40" />
            <h4 className="text-sm font-bold mb-2">Never Miss a Test</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">Connect your calendar to EntireFM's compliance engine. We'll automatically schedule your services and log your completion certificates.</p>
            <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:translate-x-1 transition-transform">
              Learn about Managed FM <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #eee;
          border-radius: 10px;
        }
        @media print {
          .bg-charcoal { background: #0a1c3b !important; color: #fff !important; }
          button { display: none !important; }
        }
      `}</style>
    </div>
  );
}
