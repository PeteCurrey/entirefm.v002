import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { 
  Wind, Settings, Flame, Lightbulb, Zap, Droplets, Smartphone, FileText,
  Hammer, CheckCircle2, XCircle, ArrowRight, Building, Factory, ShoppingBag, 
  Building2, Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title: "Planned Preventative Maintenance (PPM) Services UK | EntireFM",
  description: "EntireFM delivers SFG20-aligned planned preventative maintenance across the UK — scheduled M&E servicing, HVAC, fire safety, and statutory compliance. Reduce reactive costs. Stay compliant.",
  alternates: {
    canonical: "https://www.entirefm.com/services/ppm",
  },
};

export default function PPMLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between planned preventative maintenance and reactive maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PPM is a scheduled, proactive approach — maintenance is carried out at set intervals to prevent failures before they happen. Reactive maintenance only occurs after something breaks. PPM reduces long-term costs, extends asset lifespan, and ensures compliance. Reactive maintenance is unpredictable in cost and carries compliance risk."
        }
      },
      {
        "@type": "Question",
        "name": "How often should PPM visits take place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Frequency depends on the asset type and its criticality. Fire alarm systems typically require quarterly testing. HVAC systems may require bi-annual or annual servicing. SFG20 provides the benchmark for most hard FM assets. EntireFM will build a schedule based on your specific asset register and site requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What is SFG20 and do I need to comply with it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SFG20 is the industry standard for building services maintenance in the UK. While not all tasks are a legal requirement, many statutory obligations (fire safety, electrical compliance, water safety) sit within the SFG20 framework. Using SFG20-aligned schedules demonstrates reasonable duty of care and protects you in the event of an audit or incident."
        }
      },
      {
        "@type": "Question",
        "name": "Can EntireFM take over an existing PPM contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We carry out a full site survey and asset register review before building your new PPM programme. We identify any gaps from your previous provider and ensure nothing is missed. Transition is managed to ensure zero lapse in compliance coverage."
        }
      },
      {
        "@type": "Question",
        "name": "What documentation does EntireFM provide after each PPM visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After every scheduled visit your account manager receives a full compliance report detailing work carried out, asset condition, any identified issues, and recommendations. All records are retained and available on demand for audits or inspections."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Planned Preventative Maintenance (PPM)",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "description": "SFG20-aligned planned preventative maintenance across the UK. Covered assets include HVAC, boilers, fire alarms, electrical systems, and building fabric.",
    "areaServed": "UK",
    "serviceType": "Facilities Management"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.entirefm.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.entirefm.com/services" },
      { "@type": "ListItem", "position": 3, "name": "PPM", "item": "https://www.entirefm.com/services/ppm" }
    ]
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "PPM" },
  ];

  const assets = [
    { name: "HVAC & Air Conditioning", icon: <Wind className="w-8 h-8" />, desc: "Cooling and ventilation maintenance" },
    { name: "Boilers & Heating Systems", icon: <Flame className="w-8 h-8" />, desc: "Gas Safe commercial heating" },
    { name: "Fire Alarm Systems", icon: <Flame className="w-8 h-8" />, desc: "BS 5839 compliant weekly & periodic" },
    { name: "Emergency Lighting", icon: <Lightbulb className="w-8 h-8" />, desc: "Flick tests and 3-hour drains" },
    { name: "Fixed Wire Testing (EICR)", icon: <Zap className="w-8 h-8" />, desc: "5-year inspection scheduling" },
    { name: "PAT Testing", icon: <Monitor className="w-8 h-8" />, desc: "Portable appliance safety" },
    { name: "Dry Risers & Sprinklers", icon: <Droplets className="w-8 h-8" />, desc: "Pressure testing and flow checks" },
    { name: "Water Safety (Legionella)", icon: <Droplets className="w-8 h-8" />, desc: "ACOP L8 risk mitigation" },
    { name: "Generators & UPS", icon: <Zap className="w-8 h-8" />, desc: "Critical backup power tests" },
    { name: "Extraction & Ventilation", icon: <Wind className="w-8 h-8" />, desc: "TR19 duct cleaning and airflow" },
    { name: "Building Fabric", icon: <Hammer className="w-8 h-8" />, desc: "Roof, gutter, and structural checks" },
    { name: "Access Control & Entry", icon: <Smartphone className="w-8 h-8" />, desc: "Gates, barriers, and door entry" },
  ];

  const sectors = [
    "Retail", "Residential", "Commercial", "Industrial", "Hotel & Hospitality", 
    "Healthcare", "Education", "Motorway Services", "Aviation", "Arenas"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-building-engineering.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        
        <div className="container mx-auto px-6 relative z-10 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight tracking-tight">
              Planned Preventative Maintenance — <br/>
              <span className="font-semibold text-primary">Proactive. Compliant. Cost-Effective.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl">
              EntireFM's PPM programmes keep your building's critical systems safe, compliant, and running efficiently — eliminating the cost and disruption of reactive repairs.
            </p>
          </div>
        </div>
      </section>

      {/* Stat Strip */}
      <section className="bg-charcoal text-white py-8 border-b border-primary/20 relative z-20 -mt-10 mx-6 rounded-xl shadow-2xl backdrop-blur-md bg-charcoal/90">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
            <div className="px-4">
              <div className="text-primary text-2xl md:text-3xl font-bold mb-1">Up to 34%</div>
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Reduce reactive spend</div>
            </div>
            <div className="px-4">
              <div className="text-primary text-2xl md:text-3xl font-bold mb-1">SFG20</div>
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Aligned schedules</div>
            </div>
            <div className="px-4">
              <div className="text-primary text-2xl md:text-3xl font-bold mb-1">2,000+</div>
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Asset types covered</div>
            </div>
            <div className="px-4">
              <div className="text-primary text-2xl md:text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Emergency helpdesk</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PPM & Flow Diagram */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
                What Is Planned Preventative Maintenance?
              </h2>
              <div className="prose prose-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Planned Preventative Maintenance (PPM) is a strategic, scheduled approach to building upkeep. Instead of waiting for critical equipment to fail, PPM ensures your assets are serviced, calibrated, and inspected at precise intervals.
                </p>
                <p>
                  By aligning our maintenance schedules with SFG20 industry standards and manufacturer guidelines, we pinpoint potential faults before they escalate. This proactive strategy extends the lifespan of your expensive assets, guarantees statutory compliance (like fire safety and water hygiene), and safeguards your occupants.
                </p>
                <p>
                  Financially, the impact is undeniable. A well-designed PPM programme can <strong>reduce reactive maintenance spend by 12–18%</strong> naturally, eliminating expensive emergency call-out fees and unpredictable operational downtime.
                </p>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl border border-border">
              <h3 className="font-semibold text-lg mb-8 text-center text-charcoal">The EntireFM PPM Lifecycle</h3>
              
              {/* SVG Flow Diagram */}
              <div className="relative w-full overflow-hidden">
                <svg viewBox="0 0 800 120" className="w-full h-auto drop-shadow-sm">
                  <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
                      <path d="M 0 0 L 6 3 L 0 6 z" fill="#ec4899" />
                    </marker>
                  </defs>
                  
                  {/* Connecting Line */}
                  <line x1="80" y1="50" x2="720" y2="50" stroke="#ec4899" strokeWidth="2" strokeDasharray="6 6" />
                  
                  {/* Steps */}
                  <g className="hover:scale-105 transition-transform origin-center">
                    <circle cx="80" cy="50" r="24" fill="#1e293b" />
                    <text x="80" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">1</text>
                    <text x="80" y="95" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="600">Asset Register</text>
                  </g>

                  <g className="hover:scale-105 transition-transform origin-center">
                    <circle cx="240" cy="50" r="24" fill="#1e293b" />
                    <text x="240" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">2</text>
                    <text x="240" y="95" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="600">Schedule Built</text>
                  </g>

                  <g className="hover:scale-105 transition-transform origin-center">
                    <circle cx="400" cy="50" r="24" fill="#ec4899" />
                    <text x="400" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">3</text>
                    <text x="400" y="95" textAnchor="middle" fill="#ec4899" fontSize="13" fontWeight="bold">Engineer Visit</text>
                  </g>

                  <g className="hover:scale-105 transition-transform origin-center">
                    <circle cx="560" cy="50" r="24" fill="#1e293b" />
                    <text x="560" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">4</text>
                    <text x="560" y="95" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="600">Compliance Report</text>
                  </g>

                  <g className="hover:scale-105 transition-transform origin-center">
                    <circle cx="720" cy="50" r="24" fill="#1e293b" />
                    <text x="720" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">5</text>
                    <text x="720" y="95" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="600">Review & Repeat</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reactive vs PPM Comparison Table */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Reactive Maintenance <span className="text-primary font-normal text-2xl mx-3">VS</span> Planned Preventative Maintenance
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Compare the true impact of adopting a proactive approach.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-secondary text-white font-semibold text-lg divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-6 hidden md:block"></div>
              <div className="p-6 text-center bg-secondary/80 text-gray-300">Reactive Maintenance</div>
              <div className="p-6 text-center bg-primary text-white">PPM with EntireFM</div>
            </div>
            
            <div className="divide-y divide-border text-sm md:text-base">
              {[
                { label: "Cost", reactive: "Unpredictable, high emergency spend", ppm: "Predictable budget, lower long-term cost" },
                { label: "Compliance", reactive: "Risk of missed statutory requirements", ppm: "Full SFG20 alignment, audit-ready" },
                { label: "Disruption", reactive: "Unexpected downtime", ppm: "Scheduled visits, minimal disruption" },
                { label: "Asset Lifespan", reactive: "Shortened by neglect", ppm: "Extended through regular servicing" },
                { label: "Reporting", reactive: "Reactive, inconsistent", ppm: "Proactive, full documentation trail" },
                { label: "Response", reactive: "After failure", ppm: "Before failure" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border hover:bg-muted/30 transition-colors">
                  <div className="p-5 font-semibold text-charcoal flex items-center">{row.label}</div>
                  <div className="p-5 flex items-center gap-3 text-muted-foreground text-sm md:text-base">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    {row.reactive}
                  </div>
                  <div className="p-5 flex items-center gap-3 font-medium text-charcoal bg-primary/5 text-sm md:text-base">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {row.ppm}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SFG20 Explainer Box Inline */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-r from-secondary to-charcoal text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="absolute -right-10 -top-10 text-white/5 Rotate-12">
              <FileText className="w-64 h-64" />
            </div>
            <div className="md:w-1/3 z-10">
              <h3 className="text-3xl font-light mb-2">What is SFG20?</h3>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="md:w-2/3 z-10 text-gray-300 font-light text-lg leading-relaxed">
              SFG20 is the UK's standard specification for building services maintenance, published by BESA. It sets out the frequency and scope of maintenance tasks for over 2,000 asset types. EntireFM uses SFG20 as the baseline for all PPM programmes, ensuring your maintenance schedules are legislation-aligned and defensible in any audit.
            </div>
          </div>
        </div>
      </section>

      {/* What PPM Covers Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              What Does Our PPM Cover?
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              From critical life safety to environmental control, our scheduled maintenance encompasses all hard FM disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {assets.map((item, i) => (
              <div key={i} className="bg-white border border-border p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{item.name}</h3>
                <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build Your PPM Programme */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 underline-accent inline-block">
              How EntireFM Builds Your PPM Programme
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0"></div>
            
            {[
              { num: "1", title: "Site Survey & Asset Register", desc: "We audit every asset across your site and build a comprehensive register." },
              { num: "2", title: "Schedule Design", desc: "SFG20-aligned maintenance frequencies set per asset type, tailored to your site's criticality." },
              { num: "3", title: "Engineer Deployment", desc: "Qualified, accredited engineers carry out scheduled visits and document all work." },
              { num: "4", title: "Reporting & Review", desc: "Full compliance documentation delivered after every visit, reviewed quarterly." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white">
                <div className="w-20 h-20 rounded-full bg-charcoal text-white text-3xl font-bold flex items-center justify-center shadow-lg border-4 border-white mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-charcoal">{step.title}</h3>
                <p className="text-muted-foreground font-light text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Pills */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-light mb-8 text-charcoal">
            PPM Services Across Every Sector
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {sectors.map((sector, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-medium text-charcoal shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
            Planned Preventative Maintenance — <br className="hidden md:block"/>
            <span className="font-semibold text-charcoal">Frequently Asked Questions</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/20 border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                  {faq.name}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-light text-base pb-6 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-gradient-to-br from-charcoal to-[#1a1c23] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Build Your PPM Programme?
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10">
            Talk to EntireFM today — we'll survey your site, build your asset register, and deliver a fully SFG20-aligned PPM schedule.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:-translate-y-1 transition-transform" asChild>
              <Link href="/contact" className="gap-2">
                Get a PPM Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
