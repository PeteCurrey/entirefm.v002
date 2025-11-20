import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const EmergencyLighting = () => {
  const faqs = [
    {
      question: "How often should emergency lighting be tested?",
      answer: "Monthly flick tests (functional check) and annual 3-hour duration tests are mandatory under BS 5266. We manage both as standard."
    },
    {
      question: "What is a 3-hour duration test?",
      answer: "A full discharge test that simulates a prolonged power outage to verify batteries can maintain illumination for the statutory 3-hour minimum."
    },
    {
      question: "Do you replace batteries and fittings?",
      answer: "Yes. We stock common battery packs and LED emergency fittings for rapid replacement during testing or emergency call-outs."
    },
    {
      question: "Can you upgrade old emergency lighting systems?",
      answer: "Absolutely. We design and install BS 5266-compliant LED emergency lighting systems with self-test capabilities and reduced maintenance burden."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing UK | BS 5266 Compliance | EntireFM</title>
        <meta 
          name="description" 
          content="Emergency lighting testing and maintenance for UK commercial properties. Monthly flick tests, annual 3-hour tests, and BS 5266 compliance management."
        />
      </Helmet>

      <ServiceSchema 
        name="Emergency Lighting Testing"
        description="Emergency lighting testing, maintenance, and BS 5266 compliance for commercial buildings"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Emergency Lighting" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Emergency Lighting That Works in the Dark.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  BS 5266 compliance, reliable testing, and zero tolerance for failures.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Testing Schedule</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Compliance Audit</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Emergency Lighting Can't Fail
                </h2>
                <p className="text-lg font-light mb-6">When emergency lighting isn't tested or maintained:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Evacuation routes become invisible in emergencies",
                    "Legal duty of care breached",
                    "Fire risk assessments invalidated",
                    "Insurance claims denied"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We make sure your lights work when the power doesn't.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Emergency Lighting Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Monthly flick tests (functional checks)",
                    "Annual 3-hour duration tests",
                    "BS 5266-1 compliance certification",
                    "Battery replacement & upgrades",
                    "LED emergency fitting installation",
                    "Self-test system design & integration",
                    "Fire exit signage illumination checks",
                    "Central battery system maintenance",
                    "Lux level surveys",
                    "Emergency lighting log book management",
                    "Fault rectification & emergency call-out",
                    "Multi-site coordination & reporting"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* BS 5266 Compliance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  BS 5266 Testing Requirements
                </h2>
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
                        <td className="p-4 font-light">Daily Visual Check</td>
                        <td className="p-4 font-light text-sm">Every day (by responsible person)</td>
                        <td className="p-4 font-light text-sm">Green indicator lights visible</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Monthly Flick Test</td>
                        <td className="p-4 font-light text-sm">Every 30 days</td>
                        <td className="p-4 font-light text-sm">Functional test of each fitting, brief discharge</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Annual 3-Hour Test</td>
                        <td className="p-4 font-light text-sm">12 months</td>
                        <td className="p-4 font-light text-sm">Full battery discharge for minimum 3 hours</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Battery Replacement</td>
                        <td className="p-4 font-light text-sm">As required (typically 3-5 years)</td>
                        <td className="p-4 font-light text-sm">Replace failed or degraded battery packs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download BS 5266 Compliance Guide</Link>
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
                    <h3 className="font-medium mb-2">Digital Test Records</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All monthly and annual tests logged with timestamps, failure reports, and remedial actions.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Proactive Battery Replacement</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      We forecast battery lifecycle and replace before failures occur during testing.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Multi-Site Synchronisation</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Coordinated testing schedules across portfolios with centralised compliance dashboards.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Self-Test System Integration</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      We design and install automated self-test emergency lighting to reduce manual burden.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't wait for a power cut to discover your emergency lighting doesn't work.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a BS 5266 compliance audit and testing schedule today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Testing Plan</Link>
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

export default EmergencyLighting;
