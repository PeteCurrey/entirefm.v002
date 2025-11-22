import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import MetricCard from "@/components/shared/MetricCard";
import { ArrowRight, Building2, Shield, CheckCircle2, TrendingDown } from "lucide-react";

const ResidentialPBSA = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Residential Block FM Case Study</title>
        <meta 
          name="description" 
          content="FRA backlog cleared + reduced complaints fast." 
        />
        <link rel="canonical" href="https://entirefm.com/case-studies/pbsa" />
      </Helmet>

      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "PBSA Fire Risk Recovery" }
        ]} 
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-charcoal-light text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <span className="text-primary font-light uppercase tracking-wider text-sm">PBSA / Residential Sector</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 underline-accent inline-block">
              FRA Recovery & Resident Satisfaction Uplift for a High-Rise Block
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              70+ overdue fire risk actions cleared in 8 weeks with zero resident disruption, transforming safety compliance and operational stability.
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
              A PBSA operator was facing mounting fire safety compliance issues alongside declining resident satisfaction and regulatory scrutiny risk.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  70+ overdue FRA actions
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Accumulated compliance backlog creating serious regulatory and safety risks.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Fire doors failing statutory checks
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Critical life-safety components below required standards.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Rising resident complaints
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Maintenance issues eroding trust and satisfaction levels.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-destructive">✗</span>
                  Risk of regulatory scrutiny
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  Compliance failures threatening operational continuity.
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
                  <h3 className="font-medium mb-2">High-speed FRA action programme</h3>
                  <p className="text-muted-foreground font-light">
                    Rapid deployment strategy to clear the entire compliance backlog systematically.
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
                  <h3 className="font-medium mb-2">Door integrity remediation & compartmentation checks</h3>
                  <p className="text-muted-foreground font-light">
                    Comprehensive fire door programme restoring life-safety compartmentation.
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
                  <h3 className="font-medium mb-2">Night/weekend works to avoid resident disruption</h3>
                  <p className="text-muted-foreground font-light">
                    Strategic scheduling ensured minimal impact on resident experience.
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
                  <h3 className="font-medium mb-2">Digital evidence & action log accessible for audits</h3>
                  <p className="text-muted-foreground font-light">
                    Complete documentation trail providing regulatory confidence and transparency.
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
              <MetricCard value="100" label="FRA actions cleared in 8 weeks" suffix="%" />
              <MetricCard value="35" label="Reactive call-outs reduced" prefix="–" suffix="%" />
              <MetricCard value="22" label="Resident satisfaction improved" prefix="+" suffix="%" />
              <MetricCard value="100" label="Block manager workload reduction" suffix="%" />
            </div>

            <div className="bg-secondary/5 border-l-4 border-primary p-8 rounded-lg">
              <p className="text-xl font-light italic text-foreground mb-4 leading-relaxed">
                "EntireFM solved problems before they became complaints."
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                — Senior Property Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to fix life-safety backlogs fast?
          </h2>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto mb-8">
            Get a fire risk recovery plan tailored to your residential portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                Fix Life-Safety Backlogs Fast
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

export default ResidentialPBSA;
