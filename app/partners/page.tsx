import { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { partnerTypes, featuredPartners } from "@/lib/partners";
import { PartnerTypeCard } from "@/components/partners/PartnerTypeCard";
import { PartnerApplicationForm } from "@/components/partners/PartnerApplicationForm";
import { ShieldCheck, Zap, BarChart3, Users, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FM Partner Programme | Earn Referral Fees | EntireFM",
  description: "Join the EntireFM Partner Network — earn referral fees by connecting your clients with expert UK FM services. Property managers, surveyors, developers, and insurance brokers welcome.",
  alternates: { canonical: "https://www.entirefm.com/partners" },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Partners" }]} className="mb-12" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-6 border border-primary/30 px-5 py-2 rounded-full backdrop-blur-sm">
                B2B Referral Network
              </span>
              <h1 className="text-5xl md:text-8xl font-light text-white mb-8 tracking-tighter leading-[0.9]">
                The EntireFM <span className="font-bold text-primary">Partner</span> Network
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-xl">
                Earn referral fees by connecting your clients with the UK's most trusted facilities management provider.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest shadow-xl shadow-primary/20" asChild>
                  <Link href="#apply">Apply to Join</Link>
                </Button>
                <Link href="#types" className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-primary transition-colors group">
                  Explore Partner Types <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Instant Fees</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Referral fees paid directly to you upon contract signature.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm translate-y-8">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Trusted Service</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Your reputation is safe with our award-winning FM delivery.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Monthly Data</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Detailed reports on referral performance and portfolio health.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm translate-y-8">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Dedicated PM</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">Your own EntireFM partner manager for all accounts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Grid */}
      <section id="types" className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl md:text-6xl font-light text-charcoal mb-6 tracking-tighter">Find Your <span className="font-bold">Partner</span> Type</h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto">We've built specialized partnership frameworks for specific industry sectors to maximize client value and referral ease.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type) => (
              <PartnerTypeCard key={type.id} partner={type} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-24 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {[
              { t: "Earn While You Sleep", d: "Referral fees paid on contract signature — no ongoing effort required." },
              { t: "Co-Marketing", d: "Branded materials, joint case studies, and co-authored content." },
              { t: "Transparent Reporting", d: "Monthly reports on referral values and earnings." }
            ].map((benefit, idx) => (
              <div key={idx} className="flex-1 text-center lg:text-left flex flex-col gap-3">
                <h3 className="text-sm font-bold text-charcoal uppercase tracking-widest border-l-2 border-primary pl-4">{benefit.t}</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed pl-4">{benefit.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-end mb-16 px-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-charcoal mb-4 tracking-tighter">Our <span className="font-bold">Partners</span></h2>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">Trusted by leading UK firms</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {featuredPartners.map((partner) => (
              <div key={partner.id} className="bg-white border border-border p-8 rounded-2xl group hover:shadow-xl transition-all duration-500">
                <div className="h-16 w-32 bg-muted rounded-xl mb-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Logo Spot</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-charcoal leading-tight">{partner.name}</h3>
                  <span className="text-[8px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-full">{partner.type}</span>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">{partner.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-charcoal uppercase tracking-tighter">
                  <Users className="w-3 h-3 text-primary" /> {partner.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Ready to start?</span>
              <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tighter leading-tight">Apply to join the <span className="font-bold text-primary">Network</span></h2>
              <p className="text-gray-400 font-light leading-relaxed mb-12">Applications are reviewed within 48 hours. Once approved, you'll receive your partner toolkit and meet your dedicated manager.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary text-xs font-bold">1</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Application Review</h4>
                    <p className="text-xs text-gray-500 font-light">We assess your firm's sector and client volume.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary text-xs font-bold">2</div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Onboarding Call</h4>
                    <p className="text-xs text-gray-500 font-light">Meet your manager and walk through the referral process.</p>
                  </div>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest">Partnership Desk</h4>
                    <a href="mailto:partners@entirefm.com" className="text-sm font-light hover:text-white transition-colors">partners@entirefm.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <PartnerApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
