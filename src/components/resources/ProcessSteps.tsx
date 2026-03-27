import React from "react";

interface ProcessStepsProps {
  steps: { title: string; body: string }[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="relative my-12">
      {/* Connecting Line */}
      <div className="absolute top-[40px] left-[20px] bottom-0 w-[2px] border-l-2 border-dashed border-gray-200"></div>
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 relative group">
            <div className="shrink-0 relative z-10 w-10 h-10 rounded-full bg-[#1a2e4a] text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#f5a623] transition-colors">
              {index + 1}
            </div>
            <div className="pt-1 bg-white relative z-10 pr-4 w-full">
              <h4 className="font-semibold text-[#1a2e4a] text-xl mb-3">{step.title}</h4>
              <p className="text-gray-700 font-light leading-relaxed m-0">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
