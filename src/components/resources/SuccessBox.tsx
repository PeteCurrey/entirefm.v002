import React from "react";
import { CheckCircle2 } from "lucide-react";

interface SuccessBoxProps {
  title: string;
  body: string;
}

export function SuccessBox({ title, body }: SuccessBoxProps) {
  return (
    <div className="w-full bg-[#F0FDF4] border-l-4 border-[#22c55e] rounded-r-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <CheckCircle2 className="w-6 h-6 text-[#22c55e] shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-[#166534] mb-2">{title}</h4>
          <p className="text-gray-800 font-light leading-relaxed m-0">{body}</p>
        </div>
      </div>
    </div>
  );
}
