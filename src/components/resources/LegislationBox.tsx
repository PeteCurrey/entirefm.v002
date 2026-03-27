import React from "react";
import { Scale } from "lucide-react";

interface LegislationBoxProps {
  legislation: string;
  summary: string;
}

export function LegislationBox({ legislation, summary }: LegislationBoxProps) {
  return (
    <div className="w-full bg-[#EFF6FF] border-l-4 border-[#2563EB] rounded-r-lg p-6 my-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
          <Scale className="w-6 h-6 text-[#2563EB]" />
        </div>
        <div className="pt-0.5">
          <h4 className="font-bold text-[#2563EB] text-lg mb-2">Legal Requirement</h4>
          <p className="font-semibold text-gray-900 mb-2">{legislation}</p>
          <p className="text-gray-700 leading-relaxed font-light">{summary}</p>
        </div>
      </div>
    </div>
  );
}
