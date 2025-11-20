import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const PPM = () => {
  const faqs = [
    {
      question: "What is PPM in facilities management?",
      answer: "Planned Preventative Maintenance (PPM) is scheduled servicing of building systems and equipment before failures occur. PPM reduces reactive breakdowns, extends asset life, ensures compliance, and creates predictable maintenance budgets."
    },
    {
      question: "How is a PPM schedule created?",
      answer: "PPM schedules are built using SFG20 industry standards, manufacturer guidelines, statutory testing frequencies, and operational risk assessments. We audit your assets, identify service requirements, and create a calendar of all necessary maintenance activities."
    },
    {
      question: "What's the difference between PPM and reactive maintenance?",
      answer: "PPM is proactive scheduled maintenance that prevents failures. Reactive maintenance fixes equipment after it breaks. PPM costs less long-term, reduces downtime, and maintains compliance. Most well-run sites aim for 70-80% PPM spend vs 20-30% reactive."
    },
    {
      question: "Do you provide PPM for multi-site portfolios?",
      answer: "Yes. We deliver standardised PPM programs across multi-site UK portfolios with centralised scheduling, consistent reporting, unified SLAs, and dedicated account management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPM Services UK | Planned Preventative Maintenance Contractors | EntireFM</title>
        <meta 
          name="description" 
          content="Expert PPM (Planned Preventative Maintenance) across the UK. Reduce breakdowns, control costs, and maintain compliance with structured M&E maintenance schedules."
        />
      </Helmet>

      <ServiceSchema 
        name="Planned Preventative Maintenance (PPM)"
        description="Structured PPM schedules for building systems and M&E equipment"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "PPM" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Planned Preventative Maintenance That Actually Prevents Problems
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Move from reactive chaos to proactive control with structured PPM schedules across your M&E systems, building fabric, and compliance-critical equipment.
                </p>
              </header>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Cover in PPM Programs
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "HVAC systems & air conditioning",
                    "Electrical installations & testing",
                    "Mechanical plant & pumps",
                    "Fire alarm systems",
                    "Emergency lighting",
                    "Sprinklers & dry risers",
                    "Gas appliances & pipework",
                    "Water hygiene (L8)",
                    "Lifts & escalators (LOLER)",
                    "Building fabric & roofs",
                    "Generators & UPS",
                    "BMS & control systems"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Why PPM Beats Reactive Maintenance
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl font-light text-accent">70%</div>
                    <div>
                      <p className="font-light text-gray-300">
                        Lower cost than emergency reactive repairs
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl font-light text-accent">3x</div>
                    <div>
                      <p className="font-light text-gray-300">
                        Longer equipment lifespan with regular servicing
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl font-light text-accent">Zero</div>
                    <div>
                      <p className="font-light text-gray-300">
                        Compliance failures when statutory tests are scheduled
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Our PPM Delivery Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Asset Audit & Risk Assessment",
                      description: "We survey all M&E systems, capture asset data, review maintenance histories, and identify compliance gaps."
                    },
                    {
                      step: "2",
                      title: "PPM Schedule Design",
                      description: "Build a calendar of all maintenance activities aligned to SFG20, manufacturer guidelines, and statutory requirements."
                    },
                    {
                      step: "3",
                      title: "CAFM Integration",
                      description: "Load PPM schedule into our CAFM platform with automated job generation, engineer assignment, and compliance tracking."
                    },
                    {
                      step: "4",
                      title: "Scheduled Execution",
                      description: "Engineers complete PPM visits on schedule with digital job sheets, photographic evidence, and defect escalation."
                    },
                    {
                      step: "5",
                      title: "Reporting & Continuous Improvement",
                      description: "Monthly compliance dashboards, asset condition tracking, and recommendations for lifecycle improvements."
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <span className="text-accent font-medium">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-muted-foreground font-light">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <FAQSection faqs={faqs} />

              <section className="border-t border-border pt-12">
                <div className="text-center">
                  <h2 className="text-3xl font-light mb-4">
                    Get a Tailored PPM Schedule
                  </h2>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                    Send us your site details and we'll provide a comprehensive PPM plan with all statutory tests, service frequencies, and fixed monthly pricing.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Request PPM Proposal</Link>
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

export default PPM;
