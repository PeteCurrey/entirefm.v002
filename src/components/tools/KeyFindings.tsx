"use client";

import { ShieldAlert, AlertCircle, CheckCircle2 } from "lucide-react";

interface Finding {
  title: string;
  description: string;
  risk: "Critical" | "Important" | "Recommended";
}

interface Props {
  findings: Finding[];
}

const RISK_STYLES = {
  Critical: { bg: "bg-red-50", border: "border-red-100", text: "text-red-700", icon: ShieldAlert, label: "Immediate Risk" },
  Important: { bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700", icon: AlertCircle, label: "Statutory Breach" },
  Recommended: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700", icon: CheckCircle2, label: "Best Practice" },
};

export default function KeyFindings({ findings }: Props) {
  return (
    <div className="space-y-4">
      {findings.map((finding, idx) => {
        const style = RISK_STYLES[finding.risk];
        const Icon = style.icon;

        return (
          <div key={idx} className={`p-6 rounded-2xl border transition-all hover:shadow-md ${style.bg} ${style.border} group`}>
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div className="h-full w-0.5 bg-charcoal/5 group-last:hidden" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-charcoal text-lg">{finding.title}</h4>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex items-center gap-1.5 ${style.text} bg-white/50 border ${style.border}`}>
                    <Icon className="w-3 h-3" /> {style.label}
                  </span>
                </div>
                <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                  {finding.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
