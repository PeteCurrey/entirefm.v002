'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(endValue: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [endValue, duration, trigger]);

  return count;
}

export default function CAFMDashboardMockup() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const openJobs = useCountUp(47, 2000, isVisible);
  const slaRisk = useCountUp(3, 2000, isVisible);
  const ppmDue = useCountUp(12, 2000, isVisible);
  const overdue = useCountUp(1, 2000, isVisible);

  return (
    <div ref={ref} className="w-full max-w-lg mx-auto transform -rotate-2 bg-[#1E293B] rounded-xl shadow-2xl overflow-hidden border border-slate-700">
      {/* Header */}
      <div className="flex items-center px-4 py-3 bg-slate-800/80 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-xs font-bold font-sans tracking-wide">
            <span className="text-[#E91E8C]">ENTIRE</span><span className="text-white">CAFM</span>
          </span>
        </div>
        <div className="ml-auto flex items-center space-x-3">
          <span className="text-[10px] uppercase font-semibold text-slate-400">Operations</span>
          <div className="w-6 h-6 rounded-full bg-slate-600"></div>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* KPI Tiles */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Open Jobs', val: openJobs, color: 'text-white' },
            { label: 'SLA At Risk', val: slaRisk, color: 'text-red-400', pulse: true },
            { label: 'PPM Due', val: ppmDue, color: 'text-amber-400' },
            { label: 'Overdue', val: overdue, color: 'text-red-500' },
          ].map((kpi, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-3 relative flex flex-col items-center justify-center">
              {kpi.pulse && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              )}
              <span className={`text-2xl font-bold font-sans ${kpi.color}`}>{kpi.val}</span>
              <span className="text-[9px] text-slate-400 font-medium uppercase tracking-wider text-center pt-1">{kpi.label}</span>
            </div>
          ))}
        </div>

        {/* Heatmap Strip */}
        <div className="space-y-2">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Live Engineer Heatmap</span>
          <div className="space-y-1.5">
            {['Ryan', 'Mia', 'James'].map((eng, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-[10px] text-slate-300">
                <span className="w-8">{eng}</span>
                <div className="flex-1 flex h-2 rounded overflow-hidden">
                  <div className={`h-full ${idx === 1 ? 'bg-[#E91E8C]' : 'bg-green-500'} w-[30%]`}></div>
                  <div className={`h-full ${idx === 2 ? 'bg-green-500' : 'bg-amber-500'} w-[20%]`}></div>
                  <div className={`h-full ${idx === 0 ? 'bg-amber-500' : 'bg-slate-700'} w-[50%]`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Pipeline */}
        <div className="space-y-2 pt-2 border-t border-slate-700">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Job Pipeline</span>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium pb-2 relative">
            {/* simple line behind */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-700 -z-10 transform -translate-y-1/2"></div>
            {[
              { lb: 'New', vl: 8 },
              { lb: 'Sched', vl: 12 },
              { lb: 'On Site', vl: 5 },
              { lb: 'Review', vl: 3 },
              { lb: 'Ready', vl: 24 },
              { lb: 'Inv', vl: 18 }
            ].map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[#1E293B] px-1 z-10">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-slate-800 text-white font-bold border border-slate-600 mb-1">
                  <UsePipelineCount end={stage.vl} isVisible={isVisible} />
                </div>
                <span>{stage.lb}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UsePipelineCount({ end, isVisible }: { end: number; isVisible: boolean }) {
  const count = useCountUp(end, 2000, isVisible);
  return <>{count}</>;
}
