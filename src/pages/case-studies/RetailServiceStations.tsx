import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, ShoppingBag, Flame, Snowflake, AlertTriangle, Clock } from "lucide-react";

const RetailServiceStations = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Retail & Service Stations Case Study - 100% Fire Compliance Regained | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM achieved zero-disruption compliance turnaround across a live trading estate, regaining 100% fire compliance in 90 days." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Retail & Service Stations" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Retail Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Zero-Disruption Compliance Turnaround Across a Live Trading Estate
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Achieving full fire compliance and brand-standard presentation without impacting trading operations.
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
              A portfolio of high-footfall retail & forecourt facilities was riddled with overdue compliance and brand-impacting defects.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-destructive" />
                  Fire system gaps
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Critical fire safety equipment was overdue for inspection and maintenance, creating compliance risks.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-destructive" />
                  AC comfort complaints
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Inconsistent climate control affected customer experience and staff working conditions.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Slips/trips hazards causing customer friction
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Visible defects and safety hazards undermined brand perception and created liability risks.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-destructive" />
                  Store teams overwhelmed with chasing contractors
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Fragmented FM coordination drained operational focus from core retail activity.
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
                    <Flame className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Rapid fire compliance remediation</h3>
                  <p className="text-muted-foreground font-light">
                    Prioritised and executed urgent fire safety works to eliminate compliance gaps immediately.
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
                  <h3 className="font-medium mb-2">Retail-friendly out-of-hours execution</h3>
                  <p className="text-muted-foreground font-light">
                    All disruptive works conducted outside trading hours to protect revenue and customer experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Guest-facing aesthetic refreshes</h3>
                  <p className="text-muted-foreground font-light">
                    Discreet improvements to front-of-house areas restored brand standards without disruption.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Installation of intelligent job categorisation</h3>
                  <p className="text-muted-foreground font-light">
                    Critical vs. non-critical prioritisation ensured urgent risks were addressed first.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Local engineers deployed for immediate response</h3>
                  <p className="text-muted-foreground font-light">
                    Regional resource allocation enabled rapid on-site attendance across the portfolio.
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
            <p className="text-muted-foreground font-light mb-8">First 90 Days</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <MetricCard value="100" label="Fire compliance regained" suffix="%" />
              <MetricCard value="0" label="Trading interruptions caused" />
              <MetricCard value="21" label="Comfort complaints reduction" prefix="–" suffix="%" />
            </div>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-muted-foreground font-light">
                  <strong className="text-foreground">Front-of-house brand uplift</strong> completed quietly without customer impact
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-muted-foreground font-light">
                  <strong className="text-foreground">Immediate response culture</strong> installed across all sites
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <p className="text-muted-foreground font-light">
                  <strong className="text-foreground">Managers regained operational headspace</strong> to focus on core retail operations
                </p>
              </div>
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "They didn't cause a single trading interruption. That's the difference."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Area Facilities Lead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Need compliance without disruption?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get retail compliance back under control with zero impact on trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Request Retail Compliance Review
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

export default RetailServiceStations;
