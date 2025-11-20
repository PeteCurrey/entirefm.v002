import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Smartphone, Database, BarChart3, Shield, Clock } from "lucide-react";
import techDashboard from "@/assets/tech-dashboard.jpg";

const Technology = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
              Real-time visibility without the noise.
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Our CAFM platform gives you complete control and transparency – without burying you in logins and dashboards you'll never use.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Technology that actually helps
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                EntireFM uses a purpose-built CAFM platform that's designed for operations teams, not just FM administrators.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                Every job, asset, and compliance record is tracked digitally. But we don't force you to learn complex software – our helpdesk and account managers handle the system, so you just get the visibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Job tracking with live engineer ETAs",
                  "Complete asset registers and histories",
                  "PPM schedules and compliance calendars",
                  "Photographic before/after records",
                  "Digital RAMS and method statements",
                  "Instant certificate access"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground font-light">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden shadow-lg">
                <img
                  src={techDashboard}
                  alt="CAFM Dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
            Key Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Job Management & SLAs",
                description: "Track every job from logging to completion. Live status updates. Automated SLA monitoring and escalations."
              },
              {
                icon: Database,
                title: "Asset Registers & PPM",
                description: "Complete digital asset records. Automated PPM scheduling. Service history and lifecycle tracking."
              },
              {
                icon: CheckCircle2,
                title: "Engineer Mobile App",
                description: "Engineers update jobs in real-time with photos, signatures, and notes. No paper. No delays."
              },
              {
                icon: Shield,
                title: "Compliance Documentation",
                description: "Digital RAMS, method statements, and risk assessments. Instant certificate access. Audit-ready records."
              },
              {
                icon: BarChart3,
                title: "Client Portal & Reports",
                description: "Web portal for live job status, asset histories, and reports. Dashboards showing key metrics and trends."
              },
              {
                icon: Clock,
                title: "Integration Capabilities",
                description: "Connect to BMS systems, energy data platforms, and finance systems. API access available."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-light mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Views */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 text-center underline-accent inline-block">
            Different views for different needs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Director's Dashboard",
                features: [
                  "KPI summary and trends",
                  "Budget vs actual spend",
                  "SLA performance metrics",
                  "Risk and compliance status",
                  "Site-by-site comparison"
                ]
              },
              {
                title: "Helpdesk Screen",
                features: [
                  "Live job queue and priorities",
                  "Engineer locations and availability",
                  "SLA countdown timers",
                  "Quick job logging",
                  "Escalation management"
                ]
              },
              {
                title: "Engineer Mobile View",
                features: [
                  "Job details and history",
                  "Site access information",
                  "Photo capture and upload",
                  "Digital signatures",
                  "Parts ordering"
                ]
              }
            ].map((view, index) => (
              <div key={index} className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-light mb-4 underline-accent inline-block">
                  {view.title}
                </h3>
                <ul className="space-y-3">
                  {view.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
              What this actually means for you
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-lg font-medium mb-3">No more spreadsheet chaos</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Everything in one place. No more chasing emails or lost paperwork.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Clear audit trail</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Every visit documented with photos, times, and engineer notes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Instant access to certificates</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  All compliance certificates available online, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Want to see it in action?
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-8">
            Book a 15-minute walkthrough of the client portal and see how it works for your sites.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Book a Portal Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Technology;
