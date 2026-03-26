"use client";

import { useEffect, useState, useRef } from "react";
import type { ChartDataSet } from "@/lib/fmIntelligence";

export function CSSSVGLineChart({ dataset }: { dataset: ChartDataSet }) {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<SVGSVGElement>(null);
  
  const width = 800;
  const height = 300;
  const padding = 40;
  
  const data = dataset.data;
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  const range = maxValue - minValue;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - ((d.value - minValue) / range) * (height - padding * 2);
    return { x, y, value: d.value, label: d.label };
  });

  const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaData = `${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <svg 
        ref={chartRef}
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-auto drop-shadow-xl"
        style={{ filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.05))" }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((p) => (
          <line
            key={p}
            x1={padding}
            y1={padding + p * (height - padding * 2)}
            x2={width - padding}
            y2={padding + p * (height - padding * 2)}
            stroke="#eee"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Area */}
        <path
          d={areaData}
          fill="url(#areaGradient)"
          className="transition-all duration-1000 ease-out"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(20px)" }}
        />

        {/* Path line */}
        <path
          d={pathData}
          fill="none"
          stroke="#d4af37"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={width * 2}
          strokeDashoffset={isVisible ? 0 : width * 2}
          className="transition-all duration-1000 ease-out"
        />

        {/* Points */}
        {points.map((p, idx) => (
          <g key={idx} className="group cursor-pointer">
            <circle
              cx={p.x}
              cy={p.y}
              r="4"
              fill="white"
              stroke="#d4af37"
              strokeWidth="2"
              className="transition-all duration-300 group-hover:r-6"
              style={{ opacity: isVisible ? 1 : 0, transitionDelay: `${idx * 50}ms` }}
            />
            <title>{p.label}: £{p.value}bn</title>
          </g>
        ))}

        {/* X Axis Labels */}
        {points.filter((_, i) => i % 2 === 0).map((p, idx) => (
          <text
            key={idx}
            x={p.x}
            y={height - 10}
            textAnchor="middle"
            className="text-[10px] font-bold fill-muted-foreground uppercase tracking-widest"
          >
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
}
