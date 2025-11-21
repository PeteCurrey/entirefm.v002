import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Package, TrendingDown, Wrench, Zap, Target } from "lucide-react";

const LogisticsDistributionHub = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Logistics Distribution Hub Case Study - 32% Reduction in Reactive Incidents | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM improved uptime and energy efficiency at a 24/7 logistics centre, reducing reactive incidents by 32% and achieving 87% first-time fix rate." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Logistics Distribution Hub" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Logistics Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Improving Uptime & Energy Efficiency at a Regional Distribution Hub
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              How strategic PPM restructuring and energy optimisation eliminated firefighting and delivered measurable operational improvements.
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
              A 24/7 logistics centre with a rising volume of reactive call-outs, increasing downtime hotspots and escalating energy bills due to ageing HVAC and lighting.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Poor visibility of asset performance
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Lack of structured asset tracking meant failures were reactive, not preventable.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Failures during peak loading hours
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Critical breakdowns coincided with high-volume operations, compounding delays.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Environment complaints from operators
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Inadequate temperature control affected staff comfort and productivity.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  SLA breaches with incumbent provider
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Persistent non-compliance eroded trust and operational predictability.
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
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Complete PPM restructure in line with asset condition scoring</h3>
                  <p className="text-muted-foreground font-light">
                    Implemented data-driven preventative maintenance schedules based on real asset performance.
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
                  <h3 className="font-medium mb-2">Lighting upgrade to LED + enhanced controls</h3>
                  <p className="text-muted-foreground font-light">
                    Energy-efficient lighting with intelligent controls reduced consumption and improved working conditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">HVAC optimisation targeting energy waste</h3>
                  <p className="text-muted-foreground font-light">
                    Fine-tuned climate control systems to eliminate waste and improve environmental stability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Job logging & ETA transparency through EntireFM portal</h3>
                  <p className="text-muted-foreground font-light">
                    Real-time visibility into service requests and engineer deployment eliminated uncertainty.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Night-shift engineer attendance to avoid disruption</h3>
                  <p className="text-muted-foreground font-light">
                    Scheduled maintenance during off-peak hours ensured zero impact on operations.
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
            <p className="text-muted-foreground font-light mb-8">First 6 Months</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <MetricCard value="32" label="Reactive incidents reduced" prefix="–" suffix="%" />
              <MetricCard value="87" label="First-time fix rate" suffix="%" />
              <MetricCard value="18" label="Energy savings achieved" suffix="%" />
              <MetricCard value="0" label="Downtime during peak season" />
              <MetricCard value="98" label="SLA compliance achieved" suffix="%" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "EntireFM stabilised our estate inside one quarter. We now run without firefighting."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Regional Operations Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready for similar results?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get a logistics uptime plan tailored to your distribution operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Request a Logistics Uptime Plan
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

export default LogisticsDistributionHub;
