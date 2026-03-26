import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPartnerTypeBySlug, partnerTypes } from "@/lib/partners";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PartnerOnboarding } from "@/components/partners/PartnerOnboarding";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Mail, ArrowRight, Building2, Compass, HardHat, ShieldAlert, ChevronRight } from "lucide-react";

interface PartnerPageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, any> = {
  Building2,
  Compass,
  HardHat,
  ShieldAlert
};

export async function generateMetadata({ params }: PartnerPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const partner = getPartnerTypeBySlug(resolvedParams.slug);
  if (!partner) return {};
  
  return {
    title: `${partner.title} Partners | EntireFM Partner Programme`,
    description: partner.description.substring(0, 155),
    alternates: {
      canonical: `https://www.entirefm.com/partners/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return partnerTypes.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PartnerSlugPage({ params }: PartnerPageProps) {
  const resolvedParams = await params;
  const partner = getPartnerTypeBySlug(resolvedParams.slug);
  
  if (!partner) {
    notFound();
  }

  const Icon = iconMap[partner.icon] || Building2;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Link href="/partners" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors mb-12">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Partners
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/20">
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] block mb-2">Partner Programme</span>
              <h1 className="text-4xl md:text-7xl font-light text-white tracking-tighter leading-tight">
                {partner.title}
              </h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
            {partner.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-7xl pt-24 pb-32">
        <div className="grid lg:grid-cols-3 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-light text-charcoal mb-8 tracking-tight">Partnership <span className="font-bold underline decoration-primary decoration-4 underline-offset-8">Overview</span></h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                {partner.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {partner.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm font-medium text-charcoal/80 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Who It Suits For */}
            <section className="bg-muted/30 p-12 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-charcoal mb-8 uppercase tracking-widest">Is this right for you?</h2>
              <div className="grid md:grid-cols-2 gap-y-4">
                {partner.whoItSuitsFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-light text-charcoal mb-12 tracking-tight">How it <span className="font-bold">Protocol</span></h2>
              <PartnerOnboarding steps={partner.onboardingSteps} />
            </section>

            {/* Revenue Model */}
            <section className="bg-charcoal text-white p-12 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/40 transition-all" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6">Revenue Model</h2>
              <p className="text-2xl font-light leading-relaxed mb-8">
                {partner.revenueModel}
              </p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Exact fee structures discussed at application stage.</p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-light text-charcoal mb-12 tracking-tight">Frequently <span className="font-bold">Asked</span></h2>
              <div className="space-y-6">
                {partner.faq.map((item, idx) => (
                  <div key={idx} className="border-b border-border pb-6">
                    <h3 className="text-lg font-bold text-charcoal mb-3">{item.q}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white border-2 border-charcoal p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <h3 className="text-xl font-bold text-charcoal mb-6 uppercase tracking-tighter">Become a Partner</h3>
                <p className="text-xs text-muted-foreground font-light mb-10 leading-relaxed">
                  Join our network of elite property professionals and start generating revenue from your FM introductions today.
                </p>
                <Link href="/partners#apply" className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all group-hover:scale-[1.02]">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-muted p-10 rounded-2xl border border-border">
                <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-6 border-b border-border pb-4">EntireFM Quick Stats</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-2xl font-bold text-charcoal">28 Day</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Mobilisation Guarantee</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">Nationwide</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Self-Delivery Model</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">98%</div>
                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Client Retention Rate</div>
                  </div>
                </div>
              </div>

              <a href="mailto:partners@entirefm.com" className="flex items-center gap-6 p-4 rounded-xl hover:bg-muted transition-all group">
                <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Direct Helpdesk</div>
                  <div className="text-sm font-bold text-charcoal">partners@entirefm.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
