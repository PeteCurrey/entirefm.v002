import Link from "next/link";
import { ArrowRight, Building2, Compass, HardHat, ShieldAlert } from "lucide-react";
import type { PartnerType } from "@/lib/partners";

const iconMap: Record<string, any> = {
  Building2,
  Compass,
  HardHat,
  ShieldAlert
};

export function PartnerTypeCard({ partner }: { partner: PartnerType }) {
  const Icon = iconMap[partner.icon] || Building2;

  return (
    <Link 
      href={`/partners/${partner.slug}`}
      className="bg-white border-2 border-border p-10 rounded-xl group hover:border-primary/50 transition-all duration-500 flex flex-col items-start relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
      
      <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-8 shadow-lg group-hover:bg-primary transition-colors">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold text-charcoal mb-3 uppercase tracking-tighter leading-none">
        {partner.title}
      </h3>
      <p className="text-xs text-muted-foreground font-light mb-8 line-clamp-2">
        {partner.subtitle}
      </p>

      <ul className="space-y-3 mb-10 w-full">
        {partner.benefits.slice(0, 3).map((benefit, idx) => (
          <li key={idx} className="flex gap-3 text-[11px] font-medium text-charcoal/80 leading-tight border-b border-border/50 pb-3 last:border-0 last:pb-0">
            <span className="text-primary">•</span>
            {benefit}
          </li>
        ))}
      </ul>

      <span className="mt-auto text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 group-hover:translate-x-2 transition-transform">
        Explore Partnership <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}
