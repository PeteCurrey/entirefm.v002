import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const WaterHygiene = () => {
  const faqs = [
    {
      question: "How often should water hygiene checks be carried out?",
      answer: "Depends on risk — typically monthly monitoring for outlets, annual risk assessments or earlier if system changes."
    },
    {
      question: "Do you include laboratory analysis?",
      answer: "Yes — accredited labs with rapid reporting."
    },
    {
      question: "Can you take over existing compliance regimes?",
      answer: "Seamlessly — including gap analysis and corrective actions."
    },
    {
      question: "What happens if we fail compliance?",
      answer: "We produce costed remedial actions and fix the risk before it becomes a crisis."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Legionella Compliance (ACOP L8 / HSG274)</title>
        <meta 
          name="description" 
          content="Water testing, monitoring & remedials. Zero hygiene compromise."
        />
        <link rel="canonical" href="https://entirefm.com/services/water-hygiene" />
      </Helmet>

      <ServiceSchema 
        name="Water Hygiene & Legionella Control"
        description="Water hygiene management, Legionella risk assessments, and L8 ACoP compliance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Water Hygiene & Legionella" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Don't Let Water Become a Silent Legal Threat.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Legionella compliance engineered to protect your people — and your liability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request L8 Compliance Plan</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Legionella Risk Assessment</Link>
                  </Button>
                </div>
              </header>

              {/* Risk Impact */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  When Water Systems Go Wrong, Directors Take the Fall
                </h2>
                <p className="text-lg font-light mb-6">Legionella outbreaks cause:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Severe illness & fatalities",
                    "Huge compensation claims",
                    "Criminal prosecution for duty holders",
                    "Irrecoverable brand damage"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We make compliance non-negotiable.
                </p>
              </section>

              {/* Compliance Standards */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Fully Compliant With:
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "ACOP L8",
                    "HSG274 Parts 1–3",
                    "COSHH Regulations",
                    "Drinking Water Safety Standards"
                  ].map((standard, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{standard}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We don't misunderstand risk. We control it.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Water Hygiene Services
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Service</th>
                        <th className="p-4 text-left font-medium">Benefit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Legionella Risk Assessments</td>
                        <td className="p-4 font-light text-sm">Identifies contamination risks before exposure</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Water System Monitoring</td>
                        <td className="p-4 font-light text-sm">Routine checks & temperature logging</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Sampling & Lab Testing</td>
                        <td className="p-4 font-light text-sm">Rapid detection and corrective actions</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Tank Cleaning & Disinfection</td>
                        <td className="p-4 font-light text-sm">Eliminates biofilm, sediment, stagnation</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">TMV Servicing (Thermostatic Mixing Valves)</td>
                        <td className="p-4 font-light text-sm">Protects from scalding + bacteria growth</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Closed System Water Treatment</td>
                        <td className="p-4 font-light text-sm">Corrosion control for heating/chilled water</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Flushing Unused Outlets</td>
                        <td className="p-4 font-light text-sm">Avoids stagnation & bacterial growth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg font-medium mt-6">
                  Everything is recorded. Every action traceable.
                </p>
              </section>

              {/* Asset Condition Intelligence */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Asset Condition Intelligence
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We build a complete asset register including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Sentinel outlets",
                    "Calorifiers & cylinders",
                    "Cold water storage tanks",
                    "TMVs",
                    "Dead legs",
                    "Pipework vulnerabilities"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Action plan: red → amber → green remediation.
                </p>
              </section>

              {/* Digital Water Safety Management */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Digital Water Safety Management
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Your compliance, always proveable:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Cloud-stored logbooks & sampling results</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Automated monitoring reminders</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Photographic validation</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Portfolio-level compliance dashboards</h3>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Easy access for audits, insurers & EHO</h3>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  Bye-bye lever-arch binders.
                </p>
              </section>

              {/* High-Risk Environments */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  High-Risk Environments — Zero Tolerance
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We give extra priority to:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Healthcare & care homes",
                    "Hotels & leisure facilities (showers/spas)",
                    "Education",
                    "Residential blocks",
                    "Logistics sites with low-occupancy wings"
                  ].map((env, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{env}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  If water stagnates, risk accelerates.
                </p>
              </section>

              {/* L8 Compliance Framework */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  L8 ACoP Statutory Requirements
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We manage full compliance with HSE L8 Approved Code of Practice:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Task</th>
                        <th className="p-4 text-left font-medium">Frequency</th>
                        <th className="p-4 text-left font-medium">What's Checked</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Temperature Monitoring</td>
                        <td className="p-4 font-light text-sm">Monthly</td>
                        <td className="p-4 font-light text-sm">Hot water ≥50°C at outlets, cold water ≤20°C</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Legionella Sampling</td>
                        <td className="p-4 font-light text-sm">Quarterly (risk-based)</td>
                        <td className="p-4 font-light text-sm">UKAS lab testing for Legionella bacteria presence</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">TMV Servicing</td>
                        <td className="p-4 font-light text-sm">Annual</td>
                        <td className="p-4 font-light text-sm">Temperature accuracy, fail-safe operation (HTM 04-01)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Tank Cleaning</td>
                        <td className="p-4 font-light text-sm">Annual or as required</td>
                        <td className="p-4 font-light text-sm">Sediment removal, disinfection, inspection</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Risk Assessment Review</td>
                        <td className="p-4 font-light text-sm">Every 2 years</td>
                        <td className="p-4 font-light text-sm">System changes, control effectiveness, new risks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/resources">Download L8 Compliance Guide</Link>
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
                    <h3 className="font-medium mb-2">Written Scheme of Control</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Bespoke water management plan aligned to your building's risk profile and L8 requirements.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Digital Log Books</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All temperature checks, tests, and remedial actions logged with timestamps and evidence.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">UKAS-Accredited Testing</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Legionella sampling analysed by accredited laboratories with rapid result turnaround.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Outbreak Response Planning</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Immediate remedial action and incident management if positive results detected.
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    If there's Legionella risk — there's personal liability.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Protect your people. Protect your reputation. Protect yourself.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Request Legionella Compliance Review</Link>
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

export default WaterHygiene;
