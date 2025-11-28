import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, TrendingDown, Phone } from "lucide-react";
import { YouMayAlsoNeed } from "@/components/shared/YouMayAlsoNeed";

const IndustrialLogistics = () => {
  const faqs = [
    {
      question: "Do you support 24/7 operations?",
      answer: "Yes — logistics requires zero downtime, and we match that energy."
    },
    {
      question: "Can you integrate with warehouse automation?",
      answer: "We work around conveyors, robotics and AGVs without disruption."
    },
    {
      question: "Do you take on neglected maintenance portfolios?",
      answer: "Regularly — with a rapid initial stabilisation programme."
    },
    {
      question: "What response times can you achieve?",
      answer: "Minutes, not hours — backed by live ETA visibility via our portal."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FM for Logistics & Industrial Sites UK</title>
        <meta 
          name="description" 
          content="Uptime-critical FM for warehouses & logistics. SLA excellence." 
        />
        <link rel="canonical" href="https://entirefm.com/sectors/logistics-industrial" />
      </Helmet>

      <ServiceSchema 
        name="Industrial & Logistics Facilities Management"
        description="Facilities management for industrial warehouses, distribution centers, and logistics operations"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Sectors", href: "/sectors" },
            { label: "Industrial & Logistics" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Operational Continuity, Delivered.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  FM for logistics environments where downtime costs thousands per minute — and excuses aren't tolerated.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Logistics FM Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book Site Walk-Through</Link>
                  </Button>
                </div>
              </header>

              {/* Logistics Never Stops */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Logistics Never Stops — And Neither Do We
                </h2>
                <p className="text-lg font-light mb-6">Industrial and distribution centres run:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "24/7 operations",
                    "Tight SLAs",
                    "Intense usage on assets",
                    "Critical safety obligations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-charcoal text-white p-6 rounded-lg mb-4">
                  <p className="text-lg font-medium mb-3">Failure =</p>
                  <div className="space-y-2">
                    {[
                      "🚫 Missed dispatch windows",
                      "🚫 Stock write-offs",
                      "🚫 Damaged reputation",
                      "🚫 Lost revenue"
                    ].map((item, index) => (
                      <div key={index} className="font-light text-gray-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-lg font-medium">
                  EntireFM firefights the risks before they become failures.
                </p>
              </section>

              {/* Bespoke FM Challenges */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Bespoke FM for Fast-Moving Environments
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Challenge</th>
                        <th className="p-4 text-left font-medium">How We Fix It</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">High reactive call-outs</td>
                        <td className="p-4 font-light text-sm">Rapid response & fault eradication strategy</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Harsh asset use</td>
                        <td className="p-4 font-light text-sm">Frequent monitoring + resilience improvements</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Boundary assets with heavy weather exposure</td>
                        <td className="p-4 font-light text-sm">Preventative exterior fabric protection</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Industrial health & safety risk</td>
                        <td className="p-4 font-light text-sm">Strict compliance governance</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Downtime sensitivity</td>
                        <td className="p-4 font-light text-sm">Night & shift-based work with real visibility</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground font-light mt-6">
                  We support general warehouses → temperature-controlled → automation-heavy facilities.
                </p>
              </section>

              {/* Hard Services */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Hard Services & Industrial Compliance
                </h2>
                <p className="text-lg font-light mb-6">
                  We keep your infrastructure running like a machine:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "HVAC for high-volume air changes",
                    "Roller shutters & dock levellers",
                    "Electrical & high-bay lighting",
                    "Fire alarms & emergency lighting",
                    "Sprinkler systems & smoke vents",
                    "Water hygiene compliance",
                    "Security systems & access control"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Everything aligned under one accountable partner.
                </p>
              </section>

              {/* Compliance Standards */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Protecting People & Standards
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Strict adherence to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "PUWER",
                    "COSHH",
                    "Permit To Work policies",
                    "Fire safety compliance",
                    "Risk & method statements",
                    "Visitor & contractor control"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We keep H&S officers smiling — and compliance watertight.
                </p>
              </section>

              {/* Service Models */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Value-Driven Service Models
                </h2>
                <p className="text-muted-foreground font-light mb-6">You choose:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Integrated FM (TFM)</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Complete facilities management under one provider
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Hard services only</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      M&E, compliance, and technical services
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Projects + PPM</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Planned maintenance with project delivery capability
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">24/7 reactive only with upgrade path</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Emergency response with scalability to full PPM
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  All under crystal-clear SLAs and reporting.
                </p>
              </section>

              {/* Case Studies */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Proven Results in Action
                </h2>
                <div className="space-y-6">
                  {/* Case Study 1 */}
                  <div className="border border-border p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium mb-3">Logistics Hub — Midlands</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <TrendingDown className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">32% reduction in reactive call-outs in first 6 months</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Lighting upgrade → 18% energy savings</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Full compliance regained after long-term vendor failure</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 2 */}
                  <div className="border border-border p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-medium mb-3">Temp-Controlled Site — UK-Wide</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Full sprinkler remediation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Fire door integrity restored across 800k sq ft site</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="font-light">Zero downtime during peak season</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              <YouMayAlsoNeed 
                services={[
                  {
                    title: "HV Switching Services",
                    description: "High voltage operations for large industrial estates",
                    url: "/services/critical/hv-switching"
                  },
                  {
                    title: "Power Quality Analysis",
                    description: "Protect sensitive warehouse automation and control systems",
                    url: "/services/critical/power-quality"
                  },
                  {
                    title: "Power Redundancy Testing",
                    description: "N+1 validation ensuring 24/7 operational continuity",
                    url: "/services/critical/power-redundancy"
                  },
                  {
                    title: "Generator Maintenance",
                    description: "Critical backup power for distribution centres",
                    url: "/services/critical/generator-maintenance"
                  }
                ]}
              />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Supply chains don't pause. Neither should your FM partner.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Get an FM team built around uptime and performance.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                      <Link to="/contact">Request a Logistics FM Proposal</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+448001234567" className="text-white border-white hover:bg-white hover:text-charcoal">
                        <Phone className="w-4 h-4 mr-2" />
                        Speak to Helpdesk (24/7)
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

export default IndustrialLogistics;
