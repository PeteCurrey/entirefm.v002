"use client";

;
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Hotel, Zap, Star, DollarSign } from "lucide-react";

const Hospitality = () => {
  return (
    <div className="min-h-screen pt-20">
      

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Hospitality Revenue Protection" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Hotel className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Hospitality Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Revenue Protection Through Rapid Reactive & Brand-Critical Repairs
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              28 hotel rooms restored to revenue status in 2 weeks through rapid reactive response and guest-first facilities management.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
              The Client Challenge
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-6 leading-relaxed">
              A large hotel was losing revenue and reputation through facility failures that directly impacted guest experience and room availability.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Rooms being taken offline
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Direct revenue loss from unavailable inventory due to maintenance issues.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  HVAC failures driving comfort complaints
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Guest satisfaction eroded by temperature control problems.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Visible defects destroying brand impression
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Front-of-house aesthetic issues undermining premium positioning.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Maintenance delays crippling staff morale
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Operational teams overwhelmed by unresolved facility issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
              Our Solution
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">On-demand rapid reactive crews with hotel-trained engineers</h3>
                  <p className="text-muted-foreground font-light">
                    Hospitality-specialist engineers understanding guest experience priorities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Front-of-house aesthetic refresh without guest notice</h3>
                  <p className="text-muted-foreground font-light">
                    Discreet service delivery maintaining premium brand standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Energy optimisation to support ESG commitments</h3>
                  <p className="text-muted-foreground font-light">
                    Efficiency improvements aligning with sustainability objectives.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Hotel className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Smart Helpdesk routing to reduce GM admin burden</h3>
                  <p className="text-muted-foreground font-light">
                    Intelligent job allocation freeing management from coordination tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Wins */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
              Measurable Wins
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <MetricCard value="28" label="Rooms restored to revenue in 2 weeks" />
              <MetricCard value="25" label="Comfort complaints reduced" prefix="–" suffix="%" />
              <MetricCard value="94" label="First-time fix rate achieved" suffix="%" />
              <MetricCard value="100" label="Brand review uplift (sentiment)" suffix="%" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "It finally feels like the facilities match the guest experience we promise."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Hotel General Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to protect revenue through guest-first FM?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get a hospitality FM plan that prioritizes guest experience and revenue protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Protect Revenue Through Guest-First FM
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;
