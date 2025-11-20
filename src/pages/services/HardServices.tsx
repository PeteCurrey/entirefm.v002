import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      <Helmet>
        <title>Hard Services & M&E Maintenance | Mechanical & Electrical FM | EntireFM</title>
        <meta 
          name="description" 
          content="Expert hard services and M&E maintenance across the UK. HVAC, electrical, mechanical, plumbing, BMS, and building fabric maintenance with guaranteed SLAs and 24/7 support."
        />
        <meta name="keywords" content="hard services, M&E maintenance, HVAC servicing, electrical maintenance, mechanical services, building fabric, facilities management UK" />
      </Helmet>

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
                  Hard Services & M&E Maintenance That Keeps Your Operations Running
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Reduce downtime, control costs, and maintain compliance with integrated mechanical, electrical, and building fabric maintenance across your UK sites.
                </p>
              </header>

              {/* What's Included */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "HVAC systems maintenance & repair",
                    "Electrical installations & testing",
                    "Mechanical systems & pumps",
                    "Plumbing, gas & drainage",
                    "Building fabric & structure",
                    "BMS & controls systems",
                    "Lighting & emergency systems",
                    "Energy optimisation & monitoring",
                    "Lift & escalator maintenance",
                    "Chillers & boilers",
                    "Ventilation & extraction",
                    "Water treatment & hygiene"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pain Points */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <h2 className="text-2xl font-light mb-4">
                      Common M&E Failures That Cost You Money
                    </h2>
                  </div>
                </div>
                <ul className="space-y-3 font-light text-muted-foreground">
                  <li><strong>Reactive-only approach:</strong> Equipment failures cause expensive emergency call-outs and operational downtime</li>
                  <li><strong>Poor contractor coordination:</strong> Multiple M&E trades create conflicting schedules and accountability gaps</li>
                  <li><strong>Compliance blind spots:</strong> Missed statutory tests expose you to HSE enforcement and insurance issues</li>
                  <li><strong>No asset visibility:</strong> Unknown equipment age, service history, or lifecycle costs prevent budget planning</li>
                  <li><strong>Slow emergency response:</strong> Delays in critical failures impact business continuity and staff safety</li>
                </ul>
              </section>

              {/* Compliance Frameworks */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Statutory Compliance Built-In
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-border rounded-lg p-6">
                    <Shield className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-medium mb-3">Electrical Safety</h3>
                    <ul className="space-y-2 text-sm font-light text-muted-foreground">
                      <li>• BS 7671 (IET Wiring Regulations)</li>
                      <li>• EICR testing every 5 years</li>
                      <li>• PAT testing schedules</li>
                      <li>• Emergency lighting BS 5266</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <Shield className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-medium mb-3">Mechanical Systems</h3>
                    <ul className="space-y-2 text-sm font-light text-muted-foreground">
                      <li>• SFG20 maintenance schedules</li>
                      <li>• F-Gas regulations (HVAC)</li>
                      <li>• Pressure systems PSSR compliance</li>
                      <li>• LOLER (lifting equipment)</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <Shield className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-medium mb-3">Water & Gas</h3>
                    <ul className="space-y-2 text-sm font-light text-muted-foreground">
                      <li>• Legionella control (L8)</li>
                      <li>• Gas Safe installations</li>
                      <li>• Water hygiene testing</li>
                      <li>• Backflow prevention</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-6">
                    <Shield className="w-8 h-8 text-accent mb-4" />
                    <h3 className="text-lg font-medium mb-3">Building Fabric</h3>
                    <ul className="space-y-2 text-sm font-light text-muted-foreground">
                      <li>• CDM regulations compliance</li>
                      <li>• Structural inspections</li>
                      <li>• Asbestos management</li>
                      <li>• Glazing & facade safety</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Service Delivery Model */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  How We Deliver Hard Services
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Asset Audit & PPM Schedule Design</h3>
                      <p className="text-muted-foreground font-light">
                        We audit your M&E assets, map service histories, identify compliance gaps, and build a tailored PPM schedule aligned to SFG20 and manufacturer requirements.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Scheduled PPM Delivery</h3>
                      <p className="text-muted-foreground font-light">
                        Our mobile engineers execute PPM visits on schedule with digital job sheets, photographic records, and immediate escalation of any defects found.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Reactive Response & Emergency Call-Outs</h3>
                      <p className="text-muted-foreground font-light">
                        24/7 helpdesk triage, 2-hour emergency response, and first-time fix focus. Critical spares held for common failures.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-accent font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Lifecycle Planning & Capital Investment</h3>
                      <p className="text-muted-foreground font-light">
                        We track asset condition, flag end-of-life equipment, and provide costed replacement recommendations to avoid unplanned failures.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Benefits */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  What You Get
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Reduced Downtime</h3>
                    <p className="text-sm text-gray-300 font-light">
                      Preventative approach catches failures before they impact operations
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Predictable Budgets</h3>
                    <p className="text-sm text-gray-300 font-light">
                      Fixed monthly costs replace unpredictable reactive spend
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Extended Asset Life</h3>
                    <p className="text-sm text-gray-300 font-light">
                      Regular servicing maximises equipment lifespan and performance
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Compliance Confidence</h3>
                    <p className="text-sm text-gray-300 font-light">
                      All statutory tests scheduled, tracked, and certified
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Energy Efficiency</h3>
                    <p className="text-sm text-gray-300 font-light">
                      Optimised systems reduce utility costs and carbon footprint
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Single Point of Contact</h3>
                    <p className="text-sm text-gray-300 font-light">
                      One helpdesk, one account manager, no trade coordination headaches
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Ready to Fix Your M&E Maintenance?
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Send us your site details and current maintenance pain points. We'll provide a clear, costed hard services plan with SLAs and mobilisation timeline.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Request Hard Services Proposal</Link>
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
