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
      question: "How often do fire alarms need testing?",
      answer: "Weekly user tests + quarterly specialist maintenance, per BS 5839."
    },
    {
      question: "Do you service multi-site portfolios?",
      answer: "Yes — our CAFM platform simplifies cross-site scheduling and reporting."
    },
    {
      question: "Can you respond to fire panel faults 24/7?",
      answer: "Absolutely. Critical response is instant."
    },
    {
      question: "Do you handle Cause & Effect?",
      answer: "Yes — we validate logic and update programming where required."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fire Alarm Maintenance UK | BS 5839 Testing | Fire Alarm Servicing Contractor | EntireFM</title>
        <meta 
          name="description" 
          content="Certified fire alarm testing and maintenance that protects people, property, and your legal liability. BS 5839 compliance, 24/7 response, multi-site coverage."
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
                  Fire Safety with No Room for Error.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Certified fire alarm testing and maintenance that protects people, property, and your legal liability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Fire Alarm Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Fire System Survey</Link>
                  </Button>
                </div>
              </header>

              {/* Risk: Fires Don't Give Second Chances */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Risk: Fires Don't Give Second Chances
                </h2>
                <p className="text-lg font-light mb-6">
                  When fire protection fails, everything fails. We keep your systems compliant, responsive, and ready.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Maintain
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  All critical detection and control components:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Fire alarm panels (addressable & conventional)",
                    "Smoke & heat detectors",
                    "Manual call points",
                    "Sounders, strobes & visual alarms",
                    "Dampers & fire doors interfacing",
                    "Aspirating & VESDA systems",
                    "Cause & Effect programming",
                    "Integration to sprinklers & extinguishing systems"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  If it protects life — we maintain it.
                </p>
              </section>

              {/* BS 5839: Full Compliance, No Grey Areas */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  BS 5839: Full Compliance, No Grey Areas
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We inspect, test and maintain to BS 5839-1 for commercial buildings, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    "Weekly user tests (supported & scheduled reminders)",
                    "Quarterly & biannual inspections",
                    "Annual full-system test",
                    "Zone testing with recorded traceability"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium">
                  All visits logged. All records stored. Easily retrievable for audits or HSE.
                </p>
              </section>

              {/* Reporting Fire Risk Clearly */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Reporting Fire Risk Clearly
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Every inspection includes:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Device-by-device test records</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Complete traceability for every component tested.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Photographic evidence of failures</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Visual proof of issues for audit and remedial action.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Risk-prioritised remedial actions</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Clear priorities to address critical issues first.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Costed compliance proposals</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Data-driven decision support for Responsible Persons.
                    </p>
                  </div>
                </div>
              </section>

              {/* Industry Problem */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Industry Problem: Vendors Who Just Tick Boxes
                </h2>
                <p className="text-lg font-light mb-6">
                  We fix the industry's biggest fire safety issues:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Missed tests",
                    "Non-existent asset registers",
                    "Lost certificates",
                    "Zero context for risk exposure"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We build a full compliance storyline — not a checkbox exercise.
                </p>
              </section>

              {/* Technology Advantage */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Our Technology Advantage
                </h2>
                <p className="text-lg font-light mb-6">
                  Your fire system compliance is visible in real-time:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">QR-coded asset tagging</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Instant access to equipment history and records.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Digital certificates</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Immediate access to compliance documentation.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Automatic expiry reminders</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Never miss a test deadline or inspection window.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Mobile engineer updates</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Real-time job status and completion notifications.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Cloud storage of all records</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Complete audit trail accessible anytime, anywhere.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">SLA tracking for downtime & rectifications</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Performance metrics that prove reliability.
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  No more "paper folder in the FM office".
                </p>
              </section>

              {/* Proof & Performance */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Proof & Performance
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <div className="text-3xl font-light mb-2">98%</div>
                    <p className="text-sm font-light text-muted-foreground">
                      Of critical remedial actions completed within SLA
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <div className="text-3xl font-light mb-2">100%</div>
                    <p className="text-sm font-light text-muted-foreground">
                      Compliance retention across portfolio clients
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <div className="text-3xl font-light mb-2">Zero</div>
                    <p className="text-sm font-light text-muted-foreground">
                      Enforcement notices in 24 months across high-risk sites
                    </p>
                  </div>
                </div>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Fire safety negligence isn't a risk — it's a guarantee of failure.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Switch to a provider who won't miss the basics.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Request a Full Fire Alarm Compliance Review</Link>
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
