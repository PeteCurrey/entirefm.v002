import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Phone } from "lucide-react";

const PPM = () => {
  const faqs = [
    {
      question: "What is PPM in facilities management?",
      answer: "A scheduled maintenance approach that prevents asset failures and ensures legal compliance."
    },
    {
      question: "How often should PPM be carried out?",
      answer: "Based on SFG20, manufacturer guidance, and operational risk — anywhere from monthly to annually per asset."
    },
    {
      question: "Can PPM really save money?",
      answer: "Yes — reducing major breakdowns massively cuts spend over time."
    },
    {
      question: "Do you combine PPM with compliance reporting?",
      answer: "Always — compliance is baked into the maintenance plan."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPM Maintenance UK | Facilities Compliance Management | Statutory Building Maintenance</title>
        <meta 
          name="description" 
          content="PPM that eliminates surprises, downtime and excuses. Proactive maintenance strategy that stops failures before they cost you time, money and reputation."
        />
      </Helmet>

      <ServiceSchema 
        name="Planned Preventative Maintenance (PPM)"
        description="Structured PPM schedules for building systems and M&E equipment"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "PPM" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  PPM That Eliminates Surprises, Downtime and Excuses.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  A proactive maintenance strategy that stops failures before they cost you time, money and reputation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request PPM Strategy Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Compliance & Asset Audit</Link>
                  </Button>
                </div>
              </header>

              {/* Why PPM Isn't Optional */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why PPM Isn't Optional
                </h2>
                <p className="text-lg font-light mb-6">
                  <strong>Reactive only = chaos.</strong><br />
                  <strong>PPM = predictable uptime, predictable budgets, predictable compliance.</strong>
                </p>
                <p className="text-lg font-light mb-4">We deliver maintenance that protects:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "People (safety + wellbeing)",
                    "Operations (zero interruptions)",
                    "Budgets (no last-minute CAPEX shocks)",
                    "Directors (no enforcement notices or sleepless nights)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  PPM is not a cost. It's your insurance against operational failure.
                </p>
              </section>

              {/* Full-Scope PPM Portfolio */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Full-Scope PPM Portfolio
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We maintain everything that keeps your building legal, functional, and profitable:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Category</th>
                        <th className="p-4 text-left font-medium">Includes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Mechanical & Electrical</td>
                        <td className="p-4 font-light text-sm">HVAC, controls, pumps, motors, electrical systems</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Life Safety Systems</td>
                        <td className="p-4 font-light text-sm">Fire alarms, emergency lighting, sprinklers, risers</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Water Hygiene</td>
                        <td className="p-4 font-light text-sm">Legionella, sampling, tank cleaning, TMVs</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Gas & Boilers</td>
                        <td className="p-4 font-light text-sm">Annual certs, plant optimisation</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Fabric & Civils</td>
                        <td className="p-4 font-light text-sm">Fire doors, roofs, external repairs</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Specialist Equipment</td>
                        <td className="p-4 font-light text-sm">Lifts, shutters, access systems</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg font-medium mt-6">
                  One provider. One plan. One accountable helpdesk.
                </p>
              </section>

              {/* Compliance Standards */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Aligned to UK Building Compliance Standards
                </h2>
                <p className="text-lg font-light mb-6">You get full governance across:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "SFG20 maintenance schedules",
                    "BS 5839 / BS 5266 / BS EN 12845 / BS 9990 compliance",
                    "ACOP L8 & HSG274 requirements",
                    "Gas Safety Regulations",
                    "Insurance-required testing & documentation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Compliance delivered proactively — not chased reactively.
                </p>
              </section>

              {/* Perfect-Fit Strategy */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Your Perfect-Fit Maintenance Strategy
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  No copy-paste schedules. We engineer your plan based on:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Asset condition & age",
                    "Occupancy & business risk",
                    "Manufacturer guidance",
                    "Energy consumption",
                    "Site-specific compliance profile"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-medium mb-4">The output:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Costed 12–60 month maintenance plan</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">SLA matrix for every asset class</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">Critical asset firefighting eliminated</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data-Driven Visibility */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Data-Driven Visibility for Directors
                </h2>
                <p className="text-lg font-light mb-6">
                  Every visit. Every test. Every risk.<br />
                  <strong>Tracked. Logged. Validated.</strong>
                </p>
                <p className="text-muted-foreground font-light mb-6">
                  Our PPM visibility includes:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Real-time dashboards</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Live status tracking for all maintenance activities
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Traffic-light risk scoring</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Clear visual indicators of asset health
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Digital certificates + asset histories</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Complete documentation at your fingertips
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Compliance expiry alerts</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Never miss a critical deadline
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Failure root-cause reports</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Learn from issues to prevent recurrence
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Energy performance benchmarking</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Optimize efficiency and reduce costs
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  You can prove compliance at any moment.
                </p>
              </section>

              {/* Commercial Win */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  The Commercial Win: Save £££ Through Prevention
                </h2>
                <p className="text-lg font-light mb-6">PPM reduces:</p>
                <div className="space-y-3 mb-6">
                  {[
                    "Emergency call-outs",
                    "Asset downtime",
                    "Disruption to operations",
                    "High-cost failures & insurance exposure"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <p className="text-2xl font-light">
                    Typical savings: <span className="text-accent font-medium">20–35%</span> reduction in reactive spend within 12 months.
                  </p>
                </div>
              </section>

              {/* PPM + Reactive */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  PPM + Reactive = Total FM Assurance
                </h2>
                <p className="text-muted-foreground font-light mb-6">We integrate:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Reactive response for unplanned faults</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      24/7 emergency support when things go wrong
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Planned interventions</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Prevent repeat failures through systematic maintenance
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  Proactive + reactive = operational resilience
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Take downtime off your worry list. Forever.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    We'll build you a full PPM plan with clear-cut risk priorities and budget certainty.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                      <Link to="/contact">Request a Full PPM Strategy Proposal</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+448001234567" className="text-white border-white hover:bg-white hover:text-charcoal">
                        Speak to a Compliance Specialist (24/7)
                      </a>
                    </Button>
                  </div>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default PPM;
