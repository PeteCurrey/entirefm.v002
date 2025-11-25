import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { RelatedServices } from "@/components/shared/RelatedServices";

const Electrical = () => {
  const faqs = [
    {
      question: "How often do I need an EICR?",
      answer: "Typically every 5 years for commercial premises, or more frequently based on use/risk."
    },
    {
      question: "Can you carry out remedials after the inspection?",
      answer: "Yes — we quote instantly and can start same day if required."
    },
    {
      question: "Do you work out-of-hours?",
      answer: "Of course. Operational continuity comes first."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Compliance & Maintenance</title>
        <meta 
          name="description" 
          content="EICR, testing & repairs for legal uptime. Fast & certified."
        />
        <link rel="canonical" href="https://entirefm.com/services/electrical" />
      </Helmet>

      <ServiceSchema 
        name="Electrical Compliance & Testing"
        description="Commercial electrical testing, EICR certification, PAT testing, and electrical maintenance"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Electrical Compliance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Electrical Compliance Without the Guesswork.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Safety assurance. Zero disruption. Full legal protection.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Electrical Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book EICR Survey</Link>
                  </Button>
                </div>
              </header>

              {/* Board-Level Priority */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why Electrical Compliance Is a Board-Level Priority
                </h2>
                <p className="text-lg font-light mb-6">Electrical faults are silent threats — until they aren't.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Fires",
                    "Life safety failures",
                    "Expensive downtime",
                    "Criminal liability for you as the duty holder"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We make sure none of that ever lands on your desk.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Services Delivered by Qualified UK Specialists
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
                        <td className="p-4 font-light">EICR Testing (5-Yearly Standard)</td>
                        <td className="p-4 font-light text-sm">Clear coding of risks (C1–C3) with photographic evidence</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Emergency Call-Outs & Remedial Works</td>
                        <td className="p-4 font-light text-sm">Same-day fixes for compliance breaches</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">PAT Testing</td>
                        <td className="p-4 font-light text-sm">Asset tags + inventory for audit trail</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Distribution Board Maintenance</td>
                        <td className="p-4 font-light text-sm">Thermographic scanning + load analysis</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Lighting & Control Gear</td>
                        <td className="p-4 font-light text-sm">Energy efficiency upgrades & safety checks</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">ARC / Panel Maintenance</td>
                        <td className="p-4 font-light text-sm">Minimising outages & switchgear failure</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground font-light mt-6">
                  You get certificates with every visit — downloadable anytime via our portal.
                </p>
              </section>

              {/* Multi-Site FM Teams */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Built for Multi-Site FM Teams
                </h2>
                <p className="text-lg font-light mb-6">
                  One contractor, one helpdesk, one compliance dashboard.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">
                      Group-wide <Link to="/fm-operations/ppm-delivery" className="text-primary hover:underline">PPM scheduling</Link>
                    </h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Coordinated maintenance across your entire portfolio.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Automatic expiry warnings</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      On EICRs, PAT, and lighting — never miss a deadline.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Site condition risk scoring</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Benchmark performance across sites.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link to="/technology">View a sample compliance dashboard</Link>
                  </Button>
                </div>
              </section>

              {/* UK Legal Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  UK Legal Requirements Covered
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Your compliance obligations — handled:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Electricity at Work Regulations 1989",
                    "BS 7671 requirements for electrical installations",
                    "Landlord safety responsibilities (commercial tenancy)",
                    "Insurance audit readiness"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We translate regulations into actions — and then deliver them on time.
                </p>
              </section>

              {/* Reporting */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Reporting Clients Actually Use
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Every report includes:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Clear coding & recommended actions</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      No ambiguity. Just clear next steps.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Photographic evidence & timestamps</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Full audit trail for every inspection.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Costed remedials ready for approval</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Budget-ready pricing with no surprises.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Root-cause insights</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Prevent repeat failures with actionable intelligence.
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  No jargon. No hiding behind standards.
                </p>
              </section>

              <RelatedServices 
                services={[
                  {
                    title: "PPM Delivery",
                    description: "Scheduled electrical testing and maintenance programs",
                    link: "/fm-operations/ppm-delivery"
                  },
                  {
                    title: "Reactive Maintenance",
                    description: "24/7 electrical fault response and emergency repairs",
                    link: "/fm-operations/reactive-maintenance"
                  },
                  {
                    title: "Asset Lifecycle Planning",
                    description: "Electrical infrastructure condition surveys and replacement forecasting",
                    link: "/fm-operations/asset-lifecycle"
                  },
                  {
                    title: "Technical Helpdesk",
                    description: "Single point of contact for all electrical service requests",
                    link: "/fm-operations/helpdesk"
                  }
                ]}
              />

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Electrical risk doesn't wait. Neither should your contractor.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Request your electrical compliance plan today.
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                    <Link to="/contact">Get Your Compliance Plan</Link>
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

export default Electrical;
