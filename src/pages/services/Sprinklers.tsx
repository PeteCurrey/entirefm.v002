import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const Sprinklers = () => {
  const faqs = [
    {
      question: "How often should sprinkler systems be tested?",
      answer: "Weekly visual checks, quarterly flow tests, and annual full commissioning tests are required under BS EN 12845. Dry risers require 6-monthly pressure testing."
    },
    {
      question: "What is a sprinkler flow test?",
      answer: "A quarterly flow test verifies water pressure, flow rates, and alarm activation to ensure the system will operate correctly during a fire event."
    },
    {
      question: "Do you service both wet and dry sprinkler systems?",
      answer: "Yes. We maintain wet pipe, dry pipe, pre-action, and deluge sprinkler systems, plus dry riser and wet riser installations."
    },
    {
      question: "Can you handle emergency sprinkler repairs?",
      answer: "Absolutely. 24/7 emergency response for sprinkler leaks, valve failures, and pressure loss to minimise water damage and restore fire protection."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sprinkler & Dry Riser Maintenance UK | BS EN 12845 Compliance | EntireFM</title>
        <meta 
          name="description" 
          content="Sprinkler system testing, dry riser maintenance, and fire suppression compliance for UK commercial properties. Weekly checks, flow tests, and emergency response."
        />
      </Helmet>

      <ServiceSchema 
        name="Sprinkler & Dry Riser Maintenance"
        description="Sprinkler system testing, dry riser maintenance, and fire suppression compliance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Sprinklers & Dry Risers" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Fire Suppression Systems Engineered to Activate.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Sprinklers, dry risers, and wet risers maintained to BS EN 12845 — no shortcuts.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Sprinkler Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Flow Test</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Sprinkler Reliability Matters
                </h2>
                <p className="text-lg font-light mb-6">When sprinkler systems fail or aren't tested:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Fire spreads unchecked",
                    "Life safety risk becomes critical",
                    "Insurance premiums spike or coverage denied",
                    "Building closure until compliance restored"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We make sure your suppression systems activate when seconds count.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Fire Suppression Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Weekly sprinkler system visual checks",
                    "Quarterly flow & pressure tests",
                    "Annual full commissioning tests",
                    "Dry riser 6-monthly pressure testing",
                    "Wet riser maintenance & certification",
                    "Sprinkler head replacement & obstruction surveys",
                    "Valve maintenance & seal verification",
                    "Pump performance testing",
                    "Alarm & monitoring integration",
                    "Water tank inspection & cleaning",
                    "Fire brigade inlet checks",
                    "Emergency leak repair & system shutdown"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compliance Framework */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  BS EN 12845 & Testing Requirements
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">System Type</th>
                        <th className="p-4 text-left font-medium">Test Frequency</th>
                        <th className="p-4 text-left font-medium">What's Checked</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Sprinkler Systems</td>
                        <td className="p-4 font-light text-sm">Weekly visual + quarterly flow test</td>
                        <td className="p-4 font-light text-sm">Pressure, flow rates, alarm activation, valve seals</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Dry Risers</td>
                        <td className="p-4 font-light text-sm">6-monthly pressure test</td>
                        <td className="p-4 font-light text-sm">Inlet/outlet couplings, pressure loss, valve operation</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Wet Risers</td>
                        <td className="p-4 font-light text-sm">6-monthly pressure test</td>
                        <td className="p-4 font-light text-sm">Water pressure at all outlets, pump performance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Sprinkler Pumps</td>
                        <td className="p-4 font-light text-sm">Weekly run test</td>
                        <td className="p-4 font-light text-sm">Start-up, pressure delivery, auto-changeover (duty/standby)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download Sprinkler Compliance Guide</Link>
                  </Button>
                </div>
              </section>

              {/* What You Get */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  What You Get as Standard
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Certificate Management</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All flow tests and pressure tests certified and logged digitally with expiry tracking.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Emergency Leak Response</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      24/7 call-out for sprinkler leaks, valve failures, and pump breakdowns.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Multi-Site Coordination</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Grouped PPM schedules and centralised compliance reporting for portfolios.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Impairment Management</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Clear risk mitigation plans when systems are offline for maintenance or repair.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Your sprinkler system is your last line of defence.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Make sure it works. Request a sprinkler compliance audit today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Suppression Plan</Link>
                  </Button>
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

export default Sprinklers;
