import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Building2, Wind, Thermometer, Users, TrendingUp } from "lucide-react";

const CorporateHQ = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Corporate HQ Case Study - 40% Reduction in Comfort Complaints | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM transformed workplace experience at a major corporate HQ, reducing comfort complaints by 40% and improving indoor air quality by 37%." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Corporate HQ" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Corporate Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Productivity Through Environment — Workplace Experience Overhaul
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Transforming a corporate HQ from facilities frustration to performance-supporting workspace.
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
              A major corporate HQ was facing mounting facilities issues that directly impacted employee experience and brand perception.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-destructive" />
                  Thermal comfort complaints
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Inconsistent temperatures across floors created discomfort and productivity concerns.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5 text-destructive" />
                  Air quality concerns
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Poor indoor air quality affected wellbeing and contributed to sick building syndrome symptoms.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-destructive" />
                  Low team morale tied to facilities issues
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Persistent environment problems eroded staff satisfaction and retention metrics.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-destructive" />
                  Embarrassing FOH weaknesses for VIP visits
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Reception and entrance areas failed to reflect the organisation's premium brand positioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
              Our Approach
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">HVAC rule optimisation & IAQ monitoring</h3>
                  <p className="text-muted-foreground font-light">
                    Fine-tuned climate control systems and implemented continuous air quality monitoring for data-driven improvements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Reception & foyer refresh aligned to brand</h3>
                  <p className="text-muted-foreground font-light">
                    Upgraded front-of-house presentation to match corporate standards and create impressive first impressions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Fire door integrity remediation without disruption</h3>
                  <p className="text-muted-foreground font-light">
                    Addressed critical compliance gaps through carefully scheduled works that avoided operational impact.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frictionless Helpdesk rollout</h3>
                  <p className="text-muted-foreground font-light">
                    Eliminated "chasing" emails with responsive, transparent communication channels and proactive updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
              The Outcome
            </h2>
            <p className="text-muted-foreground font-light mb-8">120 Days</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <MetricCard value="40" label="Comfort complaints reduced" prefix="–" suffix="%" />
              <MetricCard value="37" label="IAQ scores improved" suffix="%" />
              <MetricCard value="50" label="FM escalations reduced" prefix="–" suffix="%" />
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-muted-foreground font-light">
                  <strong className="text-foreground">First-impression brand metrics</strong> lifted significantly with reception area transformation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-muted-foreground font-light">
                  <strong className="text-foreground">HR feedback confirmed:</strong> "Environment no longer blocks productivity"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-muted-foreground font-light">
                  <strong className="text-foreground">Frictionless service delivery</strong> restored staff focus to core business activities
                </p>
              </div>
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "The space finally supports performance — not frustration."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Workplace Experience Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Transform your workplace experience
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Request a workplace performance review to identify improvement opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Request Workplace Performance Review
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

export default CorporateHQ;
