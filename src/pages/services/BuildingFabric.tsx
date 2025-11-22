import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const BuildingFabric = () => {
  const faqs = [
    {
      question: "What does building fabric maintenance include?",
      answer: "Everything that forms the physical structure — walls, floors, doors, roofs, fixtures, passive fire elements and finishing works."
    },
    {
      question: "Can you work inside operational hours?",
      answer: "Yes — clean, controlled, low-disturbance repairs are standard procedure."
    },
    {
      question: "Do you handle fire door compliance?",
      answer: "Absolutely — certification, remedials, seals, and compartmentation integrity."
    },
    {
      question: "Do you provide preventative maintenance plans?",
      answer: "Yes — targeted plans that reduce reactive requests by 30–50% on average."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Fabric Repairs & PPM UK</title>
        <meta 
          name="description" 
          content="Prevent breakdowns & protect brand image with proactive fabric care."
        />
        <link rel="canonical" href="https://entirefm.com/services/building-fabric" />
      </Helmet>

      <ServiceSchema 
        name="Building Fabric Maintenance"
        description="Building fabric maintenance, repairs, and refurbishment for commercial properties"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Building Fabric Maintenance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  If the Building Looks Broken, Trust is Broken.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Fast-response fabric repairs and planned upkeep that protect safety, brand image and operational continuity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Fabric Maintenance Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Log a Reactive Repair (24/7)</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Reactive Fabric Issues Aren't Cosmetic — They're Risk
                </h2>
                <p className="text-lg font-light mb-6">When fabric fails, you don't just lose aesthetics. You lose:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Safety compliance",
                    "Tenant satisfaction",
                    "Insurer confidence",
                    "Operational integrity",
                    "Revenue"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We make sure none of those pains land on your desk ever again.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Full Building Fabric Service Coverage
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Category</th>
                        <th className="p-4 text-left font-medium">Typical Works</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Internal Repairs</td>
                        <td className="p-4 font-light text-sm">Door sets, locks, glazing, floor repairs, ceilings, walls</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">External Structure</td>
                        <td className="p-4 font-light text-sm">Roofing, cladding, guttering, brickwork & blockwork</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Fire Doors & Passive Fire Protection</td>
                        <td className="p-4 font-light text-sm">Inspections, seals, intumescent upgrades</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Joinery & Carpentry</td>
                        <td className="p-4 font-light text-sm">Fixings, fixtures, cabinetry & reception features</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Paint & Decor / Dilapidations</td>
                        <td className="p-4 font-light text-sm">Refresh & make-good for leases</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Accessibility Adjustments</td>
                        <td className="p-4 font-light text-sm">DDA compliance, ramps, ironmongery upgrades</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg font-medium mt-6">
                  If it touches the built environment — we fix it.
                </p>
              </section>

              {/* Planned Works */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Planned Works That Reduce Your Reactive Spend
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We monitor performance and intervene before failure results in cost or complaint:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Condition surveys",
                    "Lifecycle planning",
                    "High-risk asset watchlists",
                    "Seasonal resilience checks",
                    "Minor works to eliminate repeat faults"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We strategically crush future costs.
                </p>
              </section>

              {/* Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance Matters Here Too
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Fabric failures can trigger:
                </p>
                <div className="space-y-4">
                  {[
                    "FRA breaches (fire door damage, compromised compartmentation)",
                    "Slips / trips from flooring issues",
                    "Security risks from defective access",
                    "Leaks, damp & mould impacting health + insurance coverage"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We convert weak points into strength multipliers.
                </p>
              </section>

              {/* Technology */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Technology Driving Accountability
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Our live compliance and job-tracking platform gives:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Real-time status on every repair</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Track progress from initial report to completion
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Photo & video evidence</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Visual documentation for every task completed
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Root-cause insights</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Identify and eliminate repeat issues
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Client approvals and signatures</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Digital sign-off and acceptance
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Risk priority scoring</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Intelligent prioritization of critical issues
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  No more guesswork. No more chasing.
                </p>
              </section>


              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Stop letting minor defects turn into major costs.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Get a building fabric partner who keeps you ahead of risk — not reacting to it.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Request Fabric Maintenance Support</Link>
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

export default BuildingFabric;
