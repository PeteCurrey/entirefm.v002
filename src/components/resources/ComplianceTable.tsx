import React from "react";
import { cn } from "@/lib/utils";

interface ComplianceTableProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

export function ComplianceTable({ headers, rows }: ComplianceTableProps) {
  return (
    <div className="w-full relative my-12 overflow-hidden rounded-2xl border border-border shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-[13px] border-collapse">
          <thead className="bg-slate-50 border-b border-border">
            <tr>
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className="px-8 py-5 text-[10px] font-bold text-charcoal uppercase tracking-[0.2em]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50/50 transition-colors group">
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className={cn(
                      "px-8 py-6 text-muted-foreground font-light leading-relaxed",
                      cellIndex === 0 ? "font-bold text-charcoal text-sm tracking-tight" : ""
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
