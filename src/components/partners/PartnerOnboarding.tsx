"use client";

import type { PartnerType } from "@/lib/partners";

export function PartnerOnboarding({ steps }: { steps: PartnerType["onboardingSteps"] }) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white border border-border p-6 rounded-xl flex flex-col items-center text-center group hover:border-primary/30 transition-all">
            <div className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center font-bold mb-4 text-xl shadow-lg border-4 border-white group-hover:bg-primary transition-colors">
              {step.step}
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-2">{step.title}</h4>
            <p className="text-[11px] text-muted-foreground font-light leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
