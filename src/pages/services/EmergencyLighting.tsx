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
      answer: "Monthly short tests + Annual full 3-hour duration test, as per BS 5266."
    },
    {
      question: "Can emergency lighting testing be done out of hours?",
      answer: "Yes — especially for critical or public-facing spaces."
    },
    {
      question: "Do you provide asset registers if we don't have one?",
      answer: "Yes. We create & maintain full digital records."
    },
    {
      question: "Can you combine emergency lighting with fire alarm visits?",
      answer: "Absolutely — improves efficiency and reduces downtime."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting Testing UK | BS 5266 Maintenance | Commercial Emergency Lights | EntireFM</title>
        <meta 
          name="description" 
          content="Compliance, visibility, and safe evacuation with zero disruption to operations. Monthly functional checks, annual 3-hour duration tests, BS 5266 compliance."
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
                  Emergency Lighting You Can Trust When Everything Else Goes Dark.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Compliance, visibility, and safe evacuation with zero disruption to operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Compliance Assessment</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Free Site Survey</Link>
                  </Button>
                </div>
              </header>

              {/* The Hidden Fail Point */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  The Hidden Fail Point in Fire Safety
                </h2>
                <p className="text-lg font-light mb-4">
                  In an emergency, panic is instant. Your lighting must not be.
                </p>
                <p className="text-lg font-medium">
                  We ensure safe escape routes with systems maintained to the highest standards.
                </p>
              </section>

              {/* Compliance to BS 5266 */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance to BS 5266 — No Exceptions
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We deliver full compliance to BS 5266-1 including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Monthly functional checks",
                    "Annual 3-hour duration test",
                    "Lux-level verification & photometry",
                    "Escape route & critical area mapping",
                    "Battery performance assessments",
                    "Logbook completion and digitisation"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  If a single luminaire fails — we fix the chain.
                </p>
              </section>

              {/* End-to-End Management */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  End-to-End Emergency Lighting Management
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Service</th>
                        <th className="p-4 text-left font-medium">Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Comprehensive Testing</td>
                        <td className="p-4 font-light text-sm">Pass/fail results with photographic evidence</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Asset Register Creation</td>
                        <td className="p-4 font-light text-sm">QR tagging + circuit grouping for traceability</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Remedial Works</td>
                        <td className="p-4 font-light text-sm">Costed proposals & immediate fixes</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Compliance Reporting</td>
                        <td className="p-4 font-light text-sm">Fully auditable, digitally stored</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">System Design & Upgrades</td>
                        <td className="p-4 font-light text-sm">LED conversions & energy savings</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg font-medium mt-6">
                  This isn't maintenance. It's life safety protection.
                </p>
              </section>

              {/* Risk Categorisation */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Risk Categorisation You Can Act On
                </h2>
                <p className="text-lg font-light mb-6">
                  Every luminaire receives a risk grading:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2 text-red-600">Critical (escape route failure)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Immediate action required for evacuation safety.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2 text-orange-600">High (stairwells / high-occupancy areas)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Priority repairs for high-traffic zones.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2 text-yellow-600">Medium (general circulation)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Scheduled maintenance for standard areas.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2 text-green-600">Low (non-essential areas)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Low-priority zones with planned updates.
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  You get a clear red-amber-green action plan aligned to evacuation strategy.
                </p>
              </section>

              {/* Technology Advantage */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Technology That Removes "I Think…" From the Vocabulary
                </h2>
                <p className="text-lg font-light mb-6">
                  Your compliance status is visible 24/7:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Cloud-stored certificates and test logs",
                    "Traffic-light portfolio dashboard",
                    "Automated reminders ahead of expiry or retest",
                    "Mobile engineer sign-offs on site"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Audit-ready. Always.
                </p>
              </section>

              {/* Common Failures */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Common Failures We Fix Fast
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Failed batteries",
                    "Inoperative test switches",
                    "Time delays out of tolerance",
                    "Poor installation design",
                    "Missing units in escape paths"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Your liability is our enemy.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't wait for smoke to show you the gaps.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request a full emergency lighting compliance review today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Request Compliance Review</Link>
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
