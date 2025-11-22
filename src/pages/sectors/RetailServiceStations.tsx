import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, TrendingUp, Phone } from "lucide-react";

const RetailServiceStations = () => {
  const faqs = [
    {
      question: "Do you work around trading hours?",
      answer: "Always — peak trading time is sacred."
    },
    {
      question: "Can you support national or regional retail estates?",
      answer: "Yes — scalable FM models with local resource coverage."
    },
    {
      question: "Do you manage fuel infrastructure compliance?",
      answer: "Yes — safety, monitoring, and rapid incident response."
    },
    {
      question: "What kind of SLAs do you commit to?",
      answer: "Fast — agreed based on asset criticality and footfall."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Retail & Forecourt FM UK</title>
        <meta 
          name="description" 
          content="Brand protection, safety & rapid responsive support for retail." 
        />
        <link rel="canonical" href="https://entirefm.com/sectors/retail-service-stations" />
      </Helmet>

      <ServiceSchema 
        name="Retail & Service Station Facilities Management"
        description="Facilities management for retail stores, service stations, and forecourt operations"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Sectors", href: "/sectors" },
            { label: "Retail & Service Stations" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  If the Customer Experience Fails, Revenue Fails.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  FM that keeps retail and service stations fully operational, clean, compliant, and customer-ready — every minute of the day.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Retail FM Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Site Survey</Link>
                  </Button>
                </div>
              </header>

              {/* Retail is High-Speed */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Retail is High-Speed. High-Visibility. High-Stakes.
                </h2>
                <p className="text-lg font-light mb-6">Every defect is a sales blocker:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Toilets out of order",
                    "Lighting failures",
                    "HVAC comfort complaints",
                    "Slips, leaks, hazards",
                    "Fuel system non-compliance",
                    "Visual damage harming brand trust"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We don't let the environment undermine the customer buying decision.
                </p>
              </section>

              {/* Service Stations */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Service Stations — Extra Compliance, Extra Risk
                </h2>
                <p className="text-lg font-light mb-6">Forecourts have dual exposure:</p>
                <div className="space-y-3 mb-6">
                  {[
                    "Customer experience + fuel infrastructure compliance",
                    "Long trading hours + safety-critical assets",
                    "Multiple revenue streams under one roof"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-light mb-4">We deliver specialist FM for:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Retail floors, back-of-house, kitchens",
                    "Forecourt infrastructure + emergency systems",
                    "Car washes & air/water equipment",
                    "Rapid reactive attendance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Everything must work — 24/7.
                </p>
              </section>

              {/* What We Maintain */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Maintain
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-charcoal text-white">
                        <th className="p-4 text-left font-medium">Critical Area</th>
                        <th className="p-4 text-left font-medium">Examples & Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">HVAC & refrigeration</td>
                        <td className="p-4 font-light text-sm">Safe food storage, customer comfort, energy efficiency</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Electrical & lighting</td>
                        <td className="p-4 font-light text-sm">Safe public spaces, full merchandising visibility</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Fire & life safety systems</td>
                        <td className="p-4 font-light text-sm">Zero tolerance for downtime & compliance gaps</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Water hygiene</td>
                        <td className="p-4 font-light text-sm">ACOP L8 adherence for public washrooms</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Building fabric</td>
                        <td className="p-4 font-light text-sm">Brand image protection & hazard prevention</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Wet stock & fuel equipment (where applicable)</td>
                        <td className="p-4 font-light text-sm">Operational & environmental safety</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 font-light">Waste / pest control</td>
                        <td className="p-4 font-light text-sm">Protect hygiene, compliance & reputation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-lg font-medium mt-6">
                  We safeguard footfall, dwell time, and basket value.
                </p>
              </section>

              {/* National Retail Rollouts */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  National Retail Rollouts — Zero Disruption
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We support programme works such as:
                </p>
                <div className="space-y-3">
                  {[
                    "Brand refresh and shop-fit minor works",
                    "LED lighting and HVAC energy upgrades",
                    "Fire door replacements and compliance catch-ups",
                    "Shelf, signage, and queue management layouts"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Rollout speed + consistent delivery = brand trust sustained at scale.
                </p>
              </section>

              {/* Operational Model */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Operational Model Tailored to Retail
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Out-of-hours delivery</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Avoid service interruption during peak trading
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">High-frequency PPM</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Scheduled during quieter windows for minimal impact
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Rapid SLA-driven reactive support</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Fast response when issues arise
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Live job tracking + ETA updates</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Real-time visibility for store managers
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Compliance dashboards</h3>
                    <p className="text-sm font-light text-muted-foreground">
                      Portfolio-level visibility for area managers
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium mt-6">
                  We integrate into your operational rhythm — not the other way around.
                </p>
              </section>

              {/* KPI-Driven Performance */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  KPI-Driven Performance Culture
                </h2>
                <p className="text-lg font-light mb-6">We monitor what matters:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Response time & first-time fix rates",
                    "Mystery shopper experience protection",
                    "Asset reliability",
                    "Compliance tracking",
                    "Customer complaint prevention"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  We don't let FM be the reason someone leaves empty-handed.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Retail runs fast. Stay ahead of the breakdowns.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Let's build FM around your customer — not your contractor.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
                      <Link to="/contact">Request Retail FM Proposal</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+448001234567" className="text-white border-white hover:bg-white hover:text-charcoal">
                        <Phone className="w-4 h-4 mr-2" />
                        Speak to 24/7 Helpdesk
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

export default RetailServiceStations;
