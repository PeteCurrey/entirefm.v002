"use client";

;
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, Shield } from "lucide-react";

const HardServices = () => {
  const faqs = [
    {
      question: "What is included in hard services FM?",
      answer: "Hard services cover all mechanical, electrical, and building fabric maintenance including HVAC systems, electrical installations, plumbing, gas systems, lifts, BMS controls, emergency systems, and structural repairs. We deliver planned preventative maintenance (PPM), reactive repairs, statutory compliance testing, and minor project works."
    },
    {
      question: "How often does M&E equipment need servicing?",
      answer: "Service frequencies are determined by manufacturer guidelines, SFG20 schedules, and statutory requirements. Typical frequencies: HVAC quarterly, electrical testing every 5 years (EICR), gas appliances annually, emergency lighting monthly tests with annual duration tests, and fire alarms weekly call points with quarterly full system tests."
    },
    {
      question: "Do you support multi-site UK portfolios?",
      answer: "Yes. We manage FM contracts across multiple UK sites with standardised service delivery, centralised helpdesk, consistent reporting, and dedicated account management. Our CAFM platform provides unified visibility across your entire portfolio."
    },
    {
      question: "What is your emergency response time?",
      answer: "Emergency M&E failures receive a 2-hour response time as standard, with critical life safety issues prioritised immediately. Our 24/7 helpdesk triages all calls and dispatches our mobile engineer network across the UK."
    }
  ];

  return (
    <>
      

      <ServiceSchema 
        name="Hard Services & M&E Maintenance"
        description="Comprehensive mechanical, electrical, and building fabric maintenance services"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Hard Services & M&E" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Section */}
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Hard Services & M&E — Guaranteed Uptime. Full Compliance. Zero Excuses.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Mission-critical maintenance for buildings that cannot afford downtime.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">Request a Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+448001234567">24/7 Reactive Support</a>
                  </Button>
                </div>
              </header>

              {/* Why It Matters */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Hard FM Matters
                </h2>
                <p className="text-lg font-light mb-6">
                  If your assets fail, productivity stops. Customers leave. Revenue leaks.
                  We keep your environment operational — always.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Planned Preventative Maintenance (PPM) aligned to SFG20</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Fast-response Reactive Maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">M&E Asset Lifecycle Planning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Real-time job tracking + engineer ETA visibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span className="font-light">Compliance reporting senior leadership can trust</span>
                  </div>
                </div>
              </section>

              {/* What We Cover - Table Format */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Cover
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Hard FM service delivery through qualified UK specialists:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-4 font-medium border border-border">Service Category</th>
                        <th className="text-left p-4 font-medium border border-border">Includes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border border-border font-medium">Electrical Services</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Testing (EICR), maintenance, fault-finding, distribution boards</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Mechanical Services</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Pumps, motors, conveyors, HVAC machinery, pressurisation</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Plumbing & Drainage</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Pipework, leaks, booster sets, hot & cold water</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Gas & Heating</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Commercial gas safety, boiler PPM, plant room optimisation</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Building Fabric</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">Joinery, locks, roof repairs, glazing, fire doors</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-border font-medium">Lighting</td>
                        <td className="p-4 border border-border font-light text-muted-foreground">LED upgrades, emergency lighting, control gear</td>
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
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "SLA-driven response times proven in KPIs",
                    "Before & after photographic & video reports",
                    "Full statutory compliance dashboard",
                    "Director-level communication — no corporate scripts",
                    "Lifecycle risk forecasting for asset investment planning",
                    "Transparent fixed pricing or T&M — your call"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Compliance Framework */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance & Statutory Considerations
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We help you hit every regulatory requirement with zero admin burden:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "SFG20 maintenance guidance",
                    "Electricity at Work Regulations",
                    "Gas Safety (Installation & Use) Regulations",
                    "Building Regulations Part L",
                    "FRA / PAS 79 support for fire strategy",
                    "F-Gas compliance for refrigerants"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                      <Shield className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href="/contact">Book a Compliance Audit</Link>
                  </Button>
                </div>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">How often should M&E systems be serviced?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Typically quarterly or biannual for most commercial assets, aligned to SFG20. Critical systems may require monthly inspection.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you manage multi-site portfolios?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Yes — our CAFM platform manages grouped PPM plans and reporting across your entire UK estate.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Do you provide 24/7 emergency call-outs?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Absolutely. If critical systems fail, we roll immediately. 2-hour response time as standard.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">What is included in hard services FM?</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      All mechanical, electrical, and building fabric maintenance including HVAC, electrical installations, plumbing, gas systems, BMS controls, emergency systems, and structural repairs with PPM and reactive support.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-muted/30 p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Don't wait for a system failure to expose the cracks.
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Request a proposal tailored to your assets and operational risk profile.
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/contact">Request Hard Services Proposal</Link>
                  </Button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
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

export default HardServices;
