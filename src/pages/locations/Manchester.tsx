import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LocalBusinessSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { CheckCircle2 } from "lucide-react";

const Manchester = () => {
  return (
    <>
      <Helmet>
        <title>Facilities Management Manchester</title>
        <meta 
          name="description" 
          content="Local engineer network & full FM compliance. Protect uptime & operations." 
        />
        <link rel="canonical" href="https://entirefm.com/locations/manchester" />
      </Helmet>

      <LocalBusinessSchema 
        name="EntireFM Manchester"
        address={{
          street: "Placeholder Street",
          city: "Manchester",
          postalCode: "M1 1AA",
          country: "United Kingdom"
        }}
      />

      <FAQSchema faqs={[
        {
          question: "Do you provide FM services across Greater Manchester?",
          answer: "Yes — full regional coverage including Manchester, Salford, Stockport, Bolton."
        },
        {
          question: "Can you manage multi-site portfolios in Manchester?",
          answer: "Yes — we integrate multiple sites under one portal for real-time visibility."
        },
        {
          question: "Do you offer same-day reactive services?",
          answer: "Yes — local engineers and spares mean faster response time and less downtime."
        },
        {
          question: "Do you handle full life-safety compliance?",
          answer: "Yes — fire systems, water hygiene, electrical compliance included under our integrated FM model."
        }
      ]} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Locations" },
            { label: "Manchester" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Manchester Moves. Your FM Should Run at the Same Speed.
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Comprehensive facilities management across Greater Manchester — fast response, full compliance, local presence.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Proposal</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+448001234567">24/7 Helpdesk – Speak Now</a>
                  </Button>
                </div>
              </header>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Manchester Demands a Specialist FM Partner
                </h2>
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Greater Manchester is a major commercial hub with rapid growth in property, infrastructure and business services.
                  </p>
                  <p>
                    This means FM providers must be highly responsive, multi-sector capable and regionally embedded. Count on no slowdowns, no excuses.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Our Manchester Coverage & Capability
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Full Greater Manchester footprint: city centre, Trafford Park, Salford, Stockport, Bolton",
                    "Local engineer bases, spares stock, rapid mobilisation",
                    "Scalable for single site or multi-estate portfolios",
                    "Services built for Manchester's mix of offices, industrial, logistics, retail and residential estates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Integrated FM Services for Manchester-Based Estates
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "M&E hard services (electrical, mechanical, HVAC)",
                    "Compliance management (fire systems, water hygiene, life-safety)",
                    "Building fabric & external maintenance",
                    "24/7 reactive support, national escalation model",
                    "Unified portal: asset registers, job tracking, KPI dashboards"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-2xl font-light mb-6">
                  Sectors We Cover Locally
                </h2>
                <div className="grid md:grid-cols-2 gap-4 font-light">
                  {[
                    "Industrial & logistics estates around Manchester",
                    "Retail parks & service stations in the region",
                    "Office campuses & multi-tenant blocks",
                    "High-rise residential blocks & PBSA",
                    "Hospitality venues and leisure complexes"
                  ].map((sector, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-gray-300">
                  Whatever your estate type, we scale to you.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Our Manchester Clients Stick With Us
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Region-based resource plus national capability",
                    "Clear SLAs, transparent pricing, measurable results",
                    "No \"one size fits all\" scripts — direct accountability",
                    "Tech-enabled asset visibility and reporting",
                    "Local presence means faster fixes, less downtime"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Manchester Case Example
                </h2>
                <Card className="p-6">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-accent">Logistics Hub – Trafford Park</span>
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    Regional Distribution Centre: 32% Reduction in Reactive Call-Outs
                  </h3>
                  <div className="space-y-4 text-sm font-light text-muted-foreground">
                    <p>
                      <strong>Challenge:</strong> 24/7 logistics operation with critical infrastructure. High reactive maintenance costs and poor response times causing operational delays.
                    </p>
                    <p>
                      <strong>Solution:</strong> Structured PPM program, critical spares holding, mobile engineer network, and priority emergency response SLA.
                    </p>
                    <p>
                      <strong>Results:</strong> Reactive call-outs reduced 32%, average response time cut to 41 minutes, annual savings £47k, zero downtime incidents in 12 months.
                    </p>
                  </div>
                </Card>
              </section>

              <FAQSection faqs={[
                {
                  question: "Do you provide FM services across Greater Manchester?",
                  answer: "Yes — full regional coverage including Manchester, Salford, Stockport, Bolton."
                },
                {
                  question: "Can you manage multi-site portfolios in Manchester?",
                  answer: "Yes — we integrate multiple sites under one portal for real-time visibility."
                },
                {
                  question: "Do you offer same-day reactive services?",
                  answer: "Yes — local engineers and spares mean faster response time and less downtime."
                },
                {
                  question: "Do you handle full life-safety compliance?",
                  answer: "Yes — fire systems, water hygiene, electrical compliance included under our integrated FM model."
                }
              ]} />

              <section className="border-t border-border pt-12">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Stop settling for generic FM. Get a partner built for Manchester.
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Protect your operation, minimise downtime, and scale with confidence.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link to="/contact">Request FM Support in Manchester</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:+448001234567">Speak to a Specialist - 24/7</a>
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

export default Manchester;
