// src/components/resources/ComplianceTable.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface ComplianceTableProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
}

export function ComplianceTable({ headers, rows }: ComplianceTableProps) {
  return (
    <div className="w-full relative my-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
        <thead className="bg-[#1a2e4a] text-white uppercase font-bold text-xs tracking-wider">
          <tr>
            {headers.map((header, i) => (
              <th 
                key={i} 
                className={cn(
                  "px-6 py-4", 
                  // If it's the last column and looks numeric, we could right align, but it's hard to tell without data schema. We'll stick to left align.
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50/50 transition-colors even:bg-gray-50/30">
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className={cn(
                    "px-6 py-4 text-gray-700 leading-relaxed font-light",
                    cellIndex === 0 ? "font-semibold text-[#1a2e4a]" : ""
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
  );
}
