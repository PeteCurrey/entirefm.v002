import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Building2,
  Clock,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { MarketplaceForm } from "@/components/marketplace/MarketplaceForm";

export const metadata: Metadata = {
  title: "Contractor Marketplace — Join the Network | EntireFM",
  description: "The future of FM contracting. Join the EntireFM partner network to access high-value maintenance contracts, automated invoicing, and rapid payment terms. Join the waitlist today.",
  alternates: { canonical: "https://www.entirefm.com/marketplace" },
};

const benefits = [
  {
    icon: Zap,
    title: "Instant Contract Alerts",
    description: "Receive real-time notifications for reactive and PPM jobs in your specific postcode areas."
  },
  {
    icon: ShieldCheck,
    title: "Verified Compliance",
    description: "One-time onboarding for all your insurance and accreditation documents. No more repeated paperwork."
  },
  {
    icon: TrendingUp,
    title: "Rapid Payment Terms",
    description: "We handle the client billing. You get paid on time, every time, via our automated platform."
  }
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] -z-0" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" }, 
              { label: "Partners", href: "/partners" }, 
              { label: "Contractor Marketplace" }
            ]} 
            className="mb-8" 
          />
          
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
              Launching 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              The Future of <span className="font-bold text-primary">FM Contracting</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-10">
              EntireFM is building the UK's most advanced marketplace for specialist FM contractors. Whether you handle HVAC, electrical, fire safety, or cleaning — we're connecting the best talent with the UK's premier building estates.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl shadow-primary/20" asChild>
                <a href="#waitlist">Join the Waitlist</a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 h-14 px-10 uppercase tracking-widest font-bold" asChild>
                <Link href="/partners">View Partner Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4">Why Join the EntireFM Network?</h2>
            <p className="text-muted-foreground font-light text-lg">We're not just a directory. We're a full-service platform designed to help specialist contractors scale without the administrative headache.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-8">Streamlined Onboarding</h2>
              <div className="space-y-8">
                {[
                  { icon: Building2, title: "1. Create Your Profile", desc: "List your specialties, certifications, and coverage areas." },
                  { icon: Clock, title: "2. Compliance Audit", desc: "Our team verifies your insurance and trade accreditations within 48 hours." },
                  { icon: Briefcase, title: "3. Start Receiving Jobs", desc: "Once approved, you'll start receiving work orders direct to your dashboard." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shrink-0 font-bold text-primary shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-charcoal mb-1">{step.title}</h4>
                      <p className="text-muted-foreground font-light text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-charcoal rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 -z-0" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Marketplace Features</h3>
                <div className="space-y-4">
                  {[
                    "SFG20-aligned task lists for every job",
                    "Integrated digital sign-off via client portal",
                    "Automated self-bill invoicing system",
                    "Specialist material procurement discounts",
                    "Direct communication with FM managers",
                    "Performance ratings based on SLA adherence"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-300 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="border-2 border-primary/20 bg-primary/5 shadow-2xl overflow-hidden rounded-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-charcoal mb-4 tracking-tight">Join the Waitlist</h2>
              <p className="text-muted-foreground font-light text-lg mb-10 max-w-xl mx-auto">
                Be among the first to access the marketplace when we launch. We'll prioritize early applicants for our Tier 1 'Preferred Partner' status.
              </p>
              
              <MarketplaceForm />
              
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-6 font-bold">
                Applying does not guarantee acceptance. All contractors must pass a technical audit.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
