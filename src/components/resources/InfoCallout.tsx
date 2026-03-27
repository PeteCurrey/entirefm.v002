import React from "react";

interface InfoCalloutProps {
  heading: string;
  body: string;
}

export function InfoCallout({ heading, body }: InfoCalloutProps) {
  return (
    <div className="w-full bg-[#1a2e4a] text-white rounded-lg p-8 my-8 relative overflow-hidden shadow-md">
      <div className="absolute top-0 right-0 w-2 h-full bg-[#f5a623]"></div>
      <h4 className="font-bold text-2xl mb-4 pr-6">{heading}</h4>
      <p className="text-white/90 font-light leading-relaxed pr-6 m-0">{body}</p>
    </div>
  );
}
