import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Flame } from "lucide-react";

const GasSafety = () => {
  const faqs = [
    {
      question: "Do I need a commercial Gas Safety certificate every year?",
      answer: "Yes — annual certification is mandatory under Gas Safety Regulations."
    },
    {
      question: "Can you work out of hours to avoid disruption?",
      answer: "Regularly — retail, logistics and hospitality demand it."
    },
    {
      question: "Do you handle both gas and heating assets together?",
      answer: "Exactly — the whole system must work as one to stay safe & compliant."
    },
    {
      question: "Do you create digital gas compliance records?",
      answer: "Yes — no more lost certificates or audit panic."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Gas Safety UK | Gas Safe FM Contractor | EntireFM</title>
        <meta 
          name="description" 
          content="Gas Safe registered commercial heating and boiler maintenance. Plant room servicing, gas safety certificates, and 24/7 emergency response across the UK."
        />
      </Helmet>

      <ServiceSchema 
        name="Gas Safety & Commercial Heating Maintenance"
        description="Gas Safe registered commercial heating maintenance, boiler servicing, and plant room management"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Gas Safety & Heating" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Heat On. Risk Off.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Commercial gas safety that protects lives, uptime, and your legal obligations — with zero corner-cutting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Gas Safety Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Boiler & Plant Survey</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  When It Comes to Gas, There Are No Small Mistakes
                </h2>
                <p className="text-lg font-light mb-6">Gas faults escalate instantly:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Explosions",
                    "Carbon monoxide poisoning",
                    "Forced shutdowns",
                    "HSE prosecutions for duty holders"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We eliminate that risk — permanently.
                </p>
              </section>

              {/* Gas Safe Engineers */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Gas Safe Registered Engineers
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Every engineer attending your site is:
                </p>
                <div className="space-y-4">
                  {[
                    "Gas Safe registered for commercial systems",
                    "Competent in plant rooms, multi-boiler cascades & industrial appliances",
                    "Experienced with complex access and high-traffic environments"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  No domestic-only cowboys. Ever.
                </p>
              </section>

              {/* What We Maintain */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Maintain & Support
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">System / Asset</th>
                        <th className="p-4 text-left font-medium">Includes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Commercial Boilers</td>
                        <td className="p-4 font-light text-sm">Burner checks, seals, combustion, condensate, flues</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Plant Rooms</td>
                        <td className="p-4 font-light text-sm">Full system test, controls, safety devices, ventilation</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Gas Leak Detection</td>
                        <td className="p-4 font-light text-sm">Pressure tests, purge and relight, alarms</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Kitchen Gas Equipment</td>
                        <td className="p-4 font-light text-sm">Interlock systems, canopy gas safety</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Heaters & Radiant Systems</td>
                        <td className="p-4 font-light text-sm">High-level and industrial applications</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">BMS & Control</td>
                        <td className="p-4 font-light text-sm">Seasonal optimisation & efficiency checks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Compliance */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Compliance Delivered — Not Left to Chance
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We ensure full alignment with:
                </p>
                <div className="space-y-4">
                  {[
                    "Gas Safety (Installation & Use) Regulations",
                    "IGEM/UP standards where applicable",
                    "Annual commercial gas safety certifications",
                    "Carbon monoxide monitoring strategy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Every certificate: stored digitally, retrievable instantly.
                </p>
              </section>

              {/* Energy Optimisation */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Energy Optimisation That Pays for Itself
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We don't just maintain — we improve performance:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Flue & combustion tuning for efficiency</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Heat recovery opportunities</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Demand-based control optimisation</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">CAPEX forecasting to reduce lifecycle cost</h3>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  Lower energy bills = immediate budget wins.
                </p>
              </section>

              {/* Reactive Response */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Reactive Response That Doesn't Leave You in the Cold
                </h2>
                <p className="text-lg font-light mb-6">
                  If your heating stops — operations fail.<br />
                  Our 24/7 emergency on-call means:
                </p>
                <div className="space-y-4">
                  {[
                    "Rapid engineer dispatch",
                    "Real-time ETA tracking",
                    "Transparent communication with site & FM teams"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Flame className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We heat. You relax.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    A cold building is an operational failure. A gas incident is a catastrophe.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Choose a partner who protects both.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Request Gas & Heating Compliance Plan</Link>
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

export default GasSafety;
