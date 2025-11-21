import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Factory, Shield, Zap, AlertTriangle } from "lucide-react";

const IndustrialPlant = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Industrial Plant FM Case Study - 53% Downtime Reduction & Zero H&S Actions | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM achieved operational uptime and safety retention for a critical production site, cutting downtime by 53% with zero H&S enforcement actions." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Industrial Plant Uptime & Safety" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Factory className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Industrial / Manufacturing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Operational Uptime & Safety Retention for a Critical Production Site
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              A heavy-engineering plant achieving 53% downtime reduction and zero H&S enforcement actions through reliability-first FM.
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
              A heavy-engineering plant was facing operational instability and mounting safety pressures from environmental failures and reactive firefighting.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Machinery environment failures
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  HVAC and environmental control issues affecting production equipment.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Electrical faults causing downtime
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Power and electrical system failures interrupting critical operations.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  High-risk H&S environment under audit pressure
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Regulatory scrutiny threatening operational continuity.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Constant supervision required from internal FM team
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Management capacity consumed by daily crisis management.
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
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Ruthless root-cause analysis to eliminate repeat failures</h3>
                  <p className="text-muted-foreground font-light">
                    Deep diagnostic approach targeting underlying issues rather than symptoms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Robust M&E PPM aligned to business continuity plan</h3>
                  <p className="text-muted-foreground font-light">
                    Strategic maintenance programming protecting operational priorities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Electrical risk mitigation and thermal scanning</h3>
                  <p className="text-muted-foreground font-light">
                    Proactive identification and resolution of electrical vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Safety-first RAMS with live reporting to H&S lead</h3>
                  <p className="text-muted-foreground font-light">
                    Real-time safety documentation and compliance transparency.
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
              Measurable Wins (6 Months)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <MetricCard value="53" label="Production downtime reduction" prefix="–" suffix="%" />
              <MetricCard value="0" label="H&S enforcement actions" />
              <MetricCard value="100" label="Electrical stability improvement" suffix="%" />
              <MetricCard value="100" label="Internal FM team freed from crisis mode" suffix="%" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "The difference is reliability. If something fails, it doesn't fail twice."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — H&S Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to protect uptime in high-risk environments?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get reliability-first FM for your industrial or manufacturing facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Protect Uptime in High-Risk Environments
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

export default IndustrialPlant;
