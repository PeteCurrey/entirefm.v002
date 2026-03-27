import React from "react";
import { AlertTriangle } from "lucide-react";

interface WarningBoxProps {
  title: string;
  body: string;
}

export function WarningBox({ title, body }: WarningBoxProps) {
  return (
    <div className="w-full bg-[#FFF7ED] border-l-4 border-[#f59e0b] rounded-r-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-[#f59e0b] shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-[#f59e0b] mb-2">{title}</h4>
          <p className="text-gray-800 font-light leading-relaxed m-0">{body}</p>
        </div>
      </div>
    </div>
  );
}
