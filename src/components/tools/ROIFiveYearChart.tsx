"use client";

import { useEffect, useState, useRef } from "react";
import { YearProjection } from "@/lib/roiCalculator";
import { fmt } from "@/lib/roiCalculator";

interface Props {
  data: YearProjection[];
  fiveYearSaving: number;
  delayMs?: number;
}

export function ROIFiveYearChart({ data, fiveYearSaving, delayMs = 0 }: Props) {
  const [linesDrawn, setLinesDrawn] = useState(false);
  const [fillDrawn, setFillDrawn] = useState(false);
  const [dotsDrawn, setDotsDrawn] = useState<boolean[]>([false, false, false, false, false]);
  const [pathLength, setPathLength] = useState(4000); // arbitrarily large fallback

  const currentPathRef = useRef<SVGPathElement>(null);
  const efmPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // 1. Lines draw over 1800ms
    // 2. Data dots scale up sequentially as line reaches them
    // 3. Gap fill fades in (1800ms + 200ms)
    // 4. Label fades in (+ 200ms)

    const t0 = setTimeout(() => {
       if (currentPathRef.current) {
         setPathLength(currentPathRef.current.getTotalLength() || 4000);
       }
       setLinesDrawn(true);

       // Time the dots (1800 / 4 segments = 450ms per dot)
       for (let i = 0; i < 5; i++) {
         setTimeout(() => {
           setDotsDrawn(prev => {
             const next = [...prev];
             next[i] = true;
             return next;
           });
         }, Math.max(0, (i * (1800 / 4)) - 100)); // slight lead
       }
    }, delayMs);

    const t1 = setTimeout(() => setFillDrawn(true), delayMs + 1800);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
    };
  }, [delayMs]);

  // Coordinate mapping
  // SVG ViewBox: 0 0 800 400
  // X range: 80 (left pad) to 760 (right pad) = width 680
  // Y range: 340 (bottom pad) to 60 (top pad) = height 280

  const pL = 80;
  const pR = 40;
  const pT = 60;
  const pB = 60;
  const vW = 800;
  const vH = 400;
  
  const width = vW - pL - pR;
  const height = vH - pT - pB;

  const maxVal = Math.max(...data.map(d => d.currentCost)) * 1.1; // 10% headroom
  const minVal = 0; // Fixed y-axis to 0 for absolute scale

  const getX = (index: number) => pL + (index * (width / 4));
  const getY = (val: number) => (vH - pB) - ((val - minVal) / (maxVal - minVal)) * height;

  const currentPoints = data.map((d, i) => `${getX(i)},${getY(d.currentCost)}`).join(" L ");
  const currentPathD = `M ${currentPoints}`;

  const efmPoints = data.map((d, i) => `${getX(i)},${getY(d.entireFMCost)}`).join(" L ");
  const efmPathD = `M ${efmPoints}`;

  // Polygon connecting both lines to fill the gap
  const polygonPoints = [
    ...data.map((d, i) => `${getX(i)},${getY(d.currentCost)}`),
    ...[...data].reverse().map((d, i) => `${getX(4 - i)},${getY(d.entireFMCost)}`)
  ].join(" ");

  // Grid lines (y-axis)
  const gridSteps = 4;
  const gridLines = Array.from({ length: gridSteps + 1 }).map((_, i) => {
    const val = (i / gridSteps) * maxVal;
    return { val, y: getY(val) };
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-visible select-none font-sans">
       <svg viewBox={`0 0 ${vW} ${vH}`} className="w-full h-auto overflow-visible">
          {/* Y-Axis Grid & Labels */}
          {gridLines.map((g, i) => (
             <g key={i}>
                <line x1={pL} y1={g.y} x2={vW - pR} y2={g.y} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                <text x={pL - 10} y={g.y} dominantBaseline="middle" textAnchor="end" className="text-[10px] fill-muted-foreground font-semibold">
                  £{(g.val / 1000).toFixed(0)}k
                </text>
             </g>
          ))}

          {/* X-Axis Baseline & Labels */}
          <line x1={pL} y1={vH - pB} x2={vW - pR} y2={vH - pB} stroke="#cbd5e1" strokeWidth="2" />
          {data.map((d, i) => (
            <text key={`x-${i}`} x={getX(i)} y={vH - pB + 20} textAnchor="middle" className="text-xs fill-charcoal font-bold uppercase tracking-widest">
              Year {d.year}
            </text>
          ))}

          {/* Gap Fill Polygon */}
          <polygon 
            points={polygonPoints} 
            fill="url(#goldGrad)"
            className="transition-opacity duration-600"
            style={{ opacity: fillDrawn ? 1 : 0 }}
          />
          <defs>
             <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5a623" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f5a623" stopOpacity="0.05" />
             </linearGradient>
          </defs>

          {/* Lines */}
          <path 
             ref={currentPathRef}
             d={currentPathD} 
             fill="none" 
             stroke="#1a2e4a" // navy
             strokeWidth="3"
             strokeDasharray={pathLength}
             strokeDashoffset={linesDrawn ? 0 : pathLength}
             style={{ transition: `stroke-dashoffset 1800ms cubic-bezier(0.4, 0, 0.2, 1)` }}
          />
          <path 
             ref={efmPathRef}
             d={efmPathD} 
             fill="none" 
             stroke="#f5a623" // gold
             strokeWidth="3"
             strokeDasharray={pathLength}
             strokeDashoffset={linesDrawn ? 0 : pathLength}
             style={{ transition: `stroke-dashoffset 1800ms cubic-bezier(0.4, 0, 0.2, 1)` }}
          />

          {/* Data Dots & Interactive Hit Targets */}
          {data.map((d, i) => (
             <g key={`dots-${i}`} className="group relative">
                <circle 
                  cx={getX(i)} cy={getY(d.currentCost)} r="6" 
                  fill="#ffffff" stroke="#1a2e4a" strokeWidth="3" 
                  className="transition-transform duration-300 origin-center"
                  style={{ transform: `scale(${dotsDrawn[i] ? 1 : 0})`, transformOrigin: `${getX(i)}px ${getY(d.currentCost)}px` }}
                />
                <circle 
                  cx={getX(i)} cy={getY(d.entireFMCost)} r="6" 
                  fill="#ffffff" stroke="#f5a623" strokeWidth="3" 
                  className="transition-transform duration-300 origin-center"
                  style={{ transform: `scale(${dotsDrawn[i] ? 1 : 0})`, transformOrigin: `${getX(i)}px ${getY(d.entireFMCost)}px` }}
                />

                {/* Vertical hover guide */}
                <line x1={getX(i)} y1={pT} x2={getX(i)} y2={vH - pB} stroke="#e5e7eb" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Hit target for CSS tooltip */}
                <rect x={getX(i) - 30} y={0} width="60" height={vH} fill="transparent" className="cursor-crosshair" />
                
                {/* CSS Tooltip node injected via foreignObject so it can use standard HTML/Tailwind */}
                <foreignObject x={getX(i) > vW / 2 ? getX(i) - 170 : getX(i) + 10} y={getY(d.currentCost) - 40 > pT ? getY(d.currentCost) - 40 : pT} width="160" height="120" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="bg-charcoal text-white text-xs rounded-xl p-3 shadow-xl border border-white/10">
                    <div className="font-bold text-primary mb-1 border-b border-white/10 pb-1">Year {d.year}</div>
                    <div className="flex justify-between mb-0.5">
                       <span className="text-gray-400">Current:</span>
                       <span>{fmt(d.currentCost)}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                       <span className="text-gray-400">EntireFM:</span>
                       <span className="text-primary font-bold">{fmt(d.entireFMCost)}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-white/10 text-green-400 font-bold">
                       <span>Saving:</span>
                       <span>{fmt(d.saving)}</span>
                    </div>
                  </div>
                </foreignObject>
             </g>
          ))}

          {/* Gap Saving Annotation (Year 5) */}
          <g className="transition-opacity duration-500 delay-300" style={{ opacity: fillDrawn ? 1 : 0 }}>
             <rect x={getX(4) - 100} y={getY((data[4].currentCost + data[4].entireFMCost) / 2) - 15} width="85" height="30" rx="15" fill="#ffffff" stroke="#f5a623" strokeWidth="1.5" />
             <text x={getX(4) - 57} y={getY((data[4].currentCost + data[4].entireFMCost) / 2) + 4} textAnchor="middle" className="text-xs font-bold fill-primary/90">
               {fmt(fiveYearSaving)} saved
             </text>
          </g>
       </svg>

       <div className="-rotate-90 absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Annual Cost (£)
       </div>
    </div>
  );
}
