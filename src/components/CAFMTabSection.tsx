'use client';

import { useState } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

const TABS = [
  { id: 'operations', label: 'Operations' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'engineers', label: 'Engineers' },
  { id: 'clients', label: 'Clients' },
];

export default function CAFMTabSection() {
  const [activeTab, setActiveTab] = useState('operations');

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar bg-[#f8f9fa] pt-2 px-2 md:px-6">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-6 py-4 font-semibold text-sm transition-all duration-200 border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-t-lg
                ${isActive 
                  ? 'text-[#0f172a] border-[#dbaa4c] bg-white' 
                  : 'text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-100'
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tabs Content */}
      <div className="p-8 md:p-12 min-h-[450px] relative bg-white overflow-hidden transition-all duration-300">
        
        {/* TAB 1 — OPERATIONS */}
        <div className={`transition-opacity duration-300 ease-in-out absolute inset-0 p-8 md:p-12 ${activeTab === 'operations' ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-95'}`}>
          <div className="grid md:grid-cols-2 gap-12 h-full items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-sans">Complete Operational Control</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Every job, request, quote, and schedule managed in one place. 
                From the moment a request arrives to the moment an invoice is paid — 
                EntireCAFM tracks everything.
              </p>
              <ul className="space-y-4">
                {[
                  "Live job pipeline — New through to Invoiced in real time",
                  "Intelligent scheduling — engineer workload heatmap and drag-and-drop calendar",
                  "SLA tracking with live countdown timers and automatic escalation",
                  "Reactive and PPM jobs in a single unified workflow",
                  "Quote builder with one-click PDF generation",
                  "Instant job-to-invoice conversion"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#dbaa4c] mt-0.5 mr-3 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              {/* Mini Mockup right */}
              <div className="bg-[#1E293B] rounded-xl p-6 shadow-2xl border border-slate-700 transform rotate-1">
                 <div className="flex justify-between items-center text-xs text-slate-400 font-medium pb-4 relative">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-700 -z-10 transform -translate-y-1/2"></div>
                  {[
                    { lb: 'New', vl: 14 },
                    { lb: 'On Site', vl: 8 },
                    { lb: 'Complete', vl: 32 }
                  ].map((stage, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-[#1E293B] px-2 z-10">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 text-white font-bold border-2 border-[#E91E8C] mb-2 shadow-[0_0_10px_rgba(233,30,140,0.5)]">
                        {stage.vl}
                      </div>
                      <span className="uppercase tracking-wider">{stage.lb}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TAB 2 — COMPLIANCE */}
        <div className={`transition-opacity duration-300 ease-in-out absolute inset-0 p-8 md:p-12 ${activeTab === 'compliance' ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-95'}`}>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-sans">Statutory Compliance — Automated</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              EntireCAFM&apos;s PPM Planner builds SFG20-aligned maintenance schedules 
              from your asset register automatically. Every statutory obligation is tracked, 
              every overdue item flagged, every certificate stored.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Asset register with full lifecycle tracking and QR code labels",
                "Auto-generated PPM schedules from asset categories using SFG20 frequency mapping",
                "12-month visual compliance calendar per site",
                "Statutory vs recommended task distinction — nothing gets confused",
                "Compliance score per site — live percentage updated on every task completion",
                "Certificate and document vault — all evidence in one place",
                "Automated overdue alerts before inspections happen"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#dbaa4c] shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TAB 3 — INTELLIGENCE */}
        <div className={`transition-opacity duration-300 ease-in-out absolute inset-0 p-8 md:p-12 ${activeTab === 'intelligence' ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-95'}`}>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-sans">AI That Actually Helps You Run the Business</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              EntireCAFM&apos;s AI operations layer goes beyond dashboards. Every morning, 
              the AI Director Dashboard analyses live operational data and delivers 
              a plain-English briefing: what needs attention, what the risks are, and 
              what the single most important action is today.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "AI Director Dashboard — daily business briefing, specific to real data",
                "AI Accounts Dashboard — cash flow intelligence, overdue risk identification",
                "AI Marketing Dashboard — growth analysis, upsell opportunities",
                "Executive Briefing — AI-generated monthly board pack, exportable as PDF",
                "AI Assistant — conversational interface with live data access",
                "Automated analytics reports — written narrative from real numbers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#dbaa4c] shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TAB 4 — ENGINEERS */}
        <div className={`transition-opacity duration-300 ease-in-out absolute inset-0 p-8 md:p-12 ${activeTab === 'engineers' ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-95'}`}>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-sans">Your Engineers. Live. Always Connected.</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Every EntireFM engineer works through the EntireCAFM mobile app — 
              a progressive web app designed for on-site use. Live location, job 
              updates, photo capture, QR asset scanning. Everything logged automatically.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Live GPS tracking — engineer locations on the operations map in real time",
                "Engineer Mobile App (PWA) — works on any device, no app store required",
                "On-site job management — status updates, notes, photos captured on site",
                "QR code asset scanning — engineer scans an asset and pulls full service history",
                "Offline capability — works without signal, syncs when reconnected",
                "Engineer workload heatmap — operations team sees availability and load in real time"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#dbaa4c] shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TAB 5 — CLIENTS */}
        <div className={`transition-opacity duration-300 ease-in-out absolute inset-0 p-8 md:p-12 ${activeTab === 'clients' ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 pointer-events-none scale-95'}`}>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4 font-sans">Complete Visibility for Your Estate</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              EntireCAFM&apos;s client portal gives your stakeholders real-time access 
              to their estate data — job status, compliance scores, PPM schedules, 
              documents, and invoices. No more chasing for updates.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Client portal — secure login, site-specific data only",
                "Live job status — see every open job across their estate in real time",
                "PPM compliance dashboard — their compliance score, updated continuously",
                "Document access — certificates, reports, and compliance evidence on demand",
                "Invoice and quote history",
                "Request submission — clients raise maintenance requests directly into the platform"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#dbaa4c] shrink-0 mr-3 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
