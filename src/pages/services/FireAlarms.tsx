import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const FireAlarms = () => {
  const faqs = [
    {
      question: "How often should fire alarm systems be tested?",
      answer: "Weekly call point testing, quarterly inspection visits, and annual full system commissioning tests are required under BS 5839-1 for most commercial premises."
    },
    {
      question: "What happens if a fire alarm fails testing?",
      answer: "We provide immediate fault rectification where possible, or a clear remedial plan with risk mitigation steps until full repair. All failures are logged and reported to responsible persons."
    },
    {
      question: "Do you maintain all fire alarm brands?",
      answer: "Yes. We service and maintain all major brands including Advanced, Gent, Kentec, Apollo, Hochiki, and legacy analogue systems."
    },
    {
      question: "Can you integrate fire alarms with BMS?",
      answer: "Absolutely. We handle integration between fire panels, BMS systems, and building automation for coordinated emergency response."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Fire Alarm Service & Maintenance UK | BS 5839 Compliance | EntireFM</title>
        <meta 
          name="description" 
          content="Fire alarm testing, maintenance, and BS 5839 compliance for UK commercial buildings. Weekly testing, servicing, and 24/7 emergency response."
        />
      </Helmet>

      <ServiceSchema 
        name="Fire Alarm Service & Maintenance"
        description="Fire alarm testing, maintenance, and BS 5839 compliance for commercial properties"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Fire Alarm Systems" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Fire Alarm Systems That Work When It Matters.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  BS 5839 compliance, reliable servicing, and zero tolerance for false alarms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Fire Alarm Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Compliance Audit</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  The Cost of Fire Alarm Failure
                </h2>
                <p className="text-lg font-light mb-6">When fire detection systems aren't maintained:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Life safety risk becomes unmanageable",
                    "Insurance cover is invalidated",
                    "HSE prosecution exposure increases",
                    "False alarms disrupt operations daily"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We engineer reliability into your fire strategy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Fire Alarm Services We Deliver
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Weekly call point testing (BS 5839)",
                    "Quarterly inspection & maintenance",
                    "Annual full system commissioning",
                    "Fault finding & diagnostics",
                    "Panel replacement & upgrades",
                    "Detector cleaning & replacement",
                    "Sounder & beacon testing",
                    "Integration with evacuation & BMS",
                    "False alarm investigation & reduction",
                    "L1 / L2 / L3 system design & compliance",
                    "Fire alarm log book management",
                    "Emergency call-out & repair"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* BS 5839 Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  BS 5839 Compliance Framework
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We align all fire alarm maintenance to BS 5839-1 standards:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Test Type</th>
                        <th className="p-4 text-left font-medium">Frequency</th>
                        <th className="p-4 text-left font-medium">What's Checked</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Weekly Test</td>
                        <td className="p-4 font-light text-sm">Every 7 days</td>
                        <td className="p-4 font-light text-sm">Call point activation, sounder operation, panel response</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Quarterly Service</td>
                        <td className="p-4 font-light text-sm">Every 3 months</td>
                        <td className="p-4 font-light text-sm">Full inspection, detector sensitivity, battery tests, log review</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Annual Commissioning</td>
                        <td className="p-4 font-light text-sm">12 months</td>
                        <td className="p-4 font-light text-sm">Full system test, zone verification, integration checks</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Battery Replacement</td>
                        <td className="p-4 font-light text-sm">As required (typically 4-5 years)</td>
                        <td className="p-4 font-light text-sm">Standby power capacity verification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* What You Get */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  What You Get as Standard
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Digital Log Book</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All tests logged digitally with timestamps, engineer notes, and compliance tracking.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">False Alarm Reduction Plans</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Root cause analysis and practical solutions to reduce unwanted activations.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Multi-Site Coordination</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Grouped PPM schedules and centralised compliance reporting for portfolios.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Emergency Response</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      24/7 call-out for panel failures, detector faults, and urgent compliance issues.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Fire alarm failures don't announce themselves until it's too late.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a fire alarm compliance audit and maintenance plan today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Fire Safety Plan</Link>
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

export default FireAlarms;
