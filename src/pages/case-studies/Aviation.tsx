import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Plane, Shield, Clock, CheckCircle2 } from "lucide-react";

const Aviation = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Aviation Terminal Life Safety Case Study - Zero Disruption Fire Compliance | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM delivered critical fire and life-safety upgrades at a live aviation terminal, achieving full BS 5839 compliance with zero passenger disruption." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Aviation Terminal Life Safety" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Aviation Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Zero-Disruption Life Safety Overhaul in a Live Terminal
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Critical fire and life-safety upgrades delivered airside and landside without impacting passenger flow or operational security.
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
              A major travel hub needed critical fire and life-safety upgrades — airside and landside — without impacting passenger movement or operational security.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Legacy fire alarm zones with reliability issues
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Outdated systems created compliance risks and operational uncertainty.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Emergency lighting non-compliance risk
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Failure to meet statutory requirements threatened operational continuity.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  High congestion = zero tolerance for closures
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Passenger movement and flight schedules demanded precision timing.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Multiple contractors… zero accountability
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Fragmented delivery created coordination chaos and compliance gaps.
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
                  <h3 className="font-medium mb-2">End-to-end life-safety remediation under strict aviation RAMS</h3>
                  <p className="text-muted-foreground font-light">
                    Comprehensive safety protocols tailored to aviation operational requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Night-works and micro-zoning around flight schedules</h3>
                  <p className="text-muted-foreground font-light">
                    Strategic scheduling ensured zero impact on passenger flow and operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">ETA-tracked access + work sequencing with operations teams</h3>
                  <p className="text-muted-foreground font-light">
                    Real-time coordination with terminal operations maintained seamless integration.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Plane className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Compliance reporting structured for CAA scrutiny</h3>
                  <p className="text-muted-foreground font-light">
                    Documentation and evidence prepared to the highest regulatory standards.
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
              <MetricCard value="100" label="BS 5839 compliance achieved" suffix="%" />
              <MetricCard value="0" label="Life-safety audit actions" />
              <MetricCard value="0" label="Disruption to passenger flow" />
              <MetricCard value="1" label="Provider accountability point" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "They respected aviation safety and operational tempo — rare in FM."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Head of Terminal Operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to secure mission-critical compliance?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get an aviation-compliant fire safety plan for your terminal or facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Secure Mission-Critical Fire Compliance
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

export default Aviation;
