import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Heart, Shield, Wind, Droplets } from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Healthcare FM Case Study - 100% Compliance & 41% IAQ Improvement | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM restored life-critical compliance and improved environment quality for a healthcare facility, achieving 100% statutory compliance with zero shutdowns." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Healthcare Compliance & Environment" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Healthcare / Clinical</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Life-Critical Compliance & Environment Improvement in a Healthcare Facility
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              A healthcare facility achieving 100% statutory compliance and 41% IAQ improvement through zero-contamination protocols and phased remediation.
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
              A healthcare facility was facing severe compliance risk and environmental quality concerns affecting patient safety and regulatory standing.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Severe compliance risk from legacy systems
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Outdated fire, emergency, and life-safety infrastructure threatening continuity.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Patient comfort & infection control concerns
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Environmental quality impacting clinical outcomes and patient wellbeing.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Mounting audit findings & insurer scrutiny
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Regulatory pressure from accumulating compliance failures.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Sensitive environment with vulnerable occupancy
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Works requiring highest standards of care and contamination control.
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
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Fire safety and emergency lighting uplift in phased sections</h3>
                  <p className="text-muted-foreground font-light">
                    Strategic sequencing maintaining full operational continuity throughout works.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">HVAC clean-air performance recovery (filter upgrade + airflow balance)</h3>
                  <p className="text-muted-foreground font-light">
                    Environmental system optimization protecting patient comfort and clinical standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Water hygiene programme re-engineered to HSG274</h3>
                  <p className="text-muted-foreground font-light">
                    Complete Legionella control strategy meeting healthcare regulatory standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Zero-contamination work protocols enforced</h3>
                  <p className="text-muted-foreground font-light">
                    Infection prevention and control embedded throughout delivery methodology.
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
              <MetricCard value="100" label="Statutory compliance restored and verified" suffix="%" />
              <MetricCard value="41" label="IAQ performance improvement" prefix="+" suffix="%" />
              <MetricCard value="0" label="Infection-risk observations returned" />
              <MetricCard value="0" label="Operational shutdowns during works" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "They treated the environment like lives depended on it — because they do."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Clinical Facilities Lead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to secure healthcare-grade compliance?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get life-critical facilities management for your healthcare environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Secure Healthcare-Grade Compliance
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/case-studies">
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

export default Healthcare;
