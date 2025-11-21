import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Car, Shield, Clock, TrendingUp } from "lucide-react";

const ServiceStations = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Service Station FM Case Study - Instant Response FM Achieving 98% SLA | EntireFM</title>
        <meta 
          name="description" 
          content="How EntireFM delivered instant response FM for a high-footfall service station estate, achieving 100% compliance and 42% faster reactive response times." 
        />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Service Station Instant Response" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">Retail / Service Stations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              Instant Response FM for a High-Footfall Service Station Estate
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              A national roadside retail network achieving 100% compliance and 98% SLA performance through unified FM accountability.
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
              A national roadside retail network was struggling with fragmented FM delivery impacting revenue and customer experience.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Revenue-critical defects left unresolved
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Trading-critical equipment failures causing direct revenue loss.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Public hygiene & appearance complaints
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Customer-facing facility issues undermining brand reputation.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Forecourt safety actions not completed
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Critical safety compliance gaps creating regulatory risk.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Stores stuck chasing multiple FM vendors
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Management time lost to coordination and escalation.
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
                  <h3 className="font-medium mb-2">Unified Hard + Soft FM with one point of accountability</h3>
                  <p className="text-muted-foreground font-light">
                    Single-provider responsibility eliminating coordination overhead and vendor finger-pointing.
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
                  <h3 className="font-medium mb-2">Forecourt systems compliance with rapid-fire remediation</h3>
                  <p className="text-muted-foreground font-light">
                    High-speed response to critical safety and operational issues.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Night-works for zero trading disruption</h3>
                  <p className="text-muted-foreground font-light">
                    Strategic scheduling protecting revenue hours and customer experience.
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
                  <h3 className="font-medium mb-2">Live job tracking via QR-linked asset tags</h3>
                  <p className="text-muted-foreground font-light">
                    Digital transparency providing real-time visibility and accountability.
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
              Measurable Wins (90 Days)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <MetricCard value="100" label="Fire & life safety compliance" suffix="%" />
              <MetricCard value="42" label="Reactive response time reduction" prefix="–" suffix="%" />
              <MetricCard value="30" label="Store manager satisfaction increase" prefix="+" suffix="%" />
              <MetricCard value="98" label="SLA performance consistency" suffix="%+" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "We finally stopped firefighting. EntireFM brought control back."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — National Retail FM Lead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to bring control back to your retail estate?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get service station compliance support with instant response and unified accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Request Service Station Compliance Support
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

export default ServiceStations;
