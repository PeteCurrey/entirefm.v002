import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const EnergyOptimisation = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Energy Efficiency & Optimisation" }
  ];

  const faqs = [
    {
      question: "What is the typical energy saving potential from plant optimisation?",
      answer: "Commercial buildings typically achieve 10–25% energy reduction through HVAC optimisation, controls tuning, and improved operational regimes. Savings vary depending on baseline inefficiencies, plant age, and building use. Investment payback is commonly 2–4 years."
    },
    {
      question: "How does TM44 relate to energy optimisation?",
      answer: "TM44 (air conditioning energy assessment) identifies inefficiencies in cooling systems and recommends improvement measures. Optimisation work implements these recommendations—such as control adjustments, part-load performance improvements, and free cooling utilisation—to reduce energy consumption."
    },
    {
      question: "Can energy optimisation be done without capital investment?",
      answer: "Yes. Many energy savings are achieved through better control strategies, improved plant operating schedules, and maintenance improvements—requiring no capital outlay. These 'low-hanging fruit' measures often deliver 5–15% savings before any equipment replacement is considered."
    },
    {
      question: "What role does ESG play in energy optimisation?",
      answer: "Energy performance is a core ESG metric. Investors, tenants, and regulators expect evidence of energy efficiency improvement and decarbonisation progress. Building owners must demonstrate energy management capability to meet net zero commitments and maintain asset value."
    },
    {
      question: "How often should energy optimisation be reviewed?",
      answer: "Annually. Building use patterns change, plant deteriorates, and controls drift from optimal settings. Annual energy reviews identify new opportunities and validate ongoing performance. ESOS and ISO 50001 frameworks mandate regular energy audits for large organisations."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Building Energy Efficiency & Optimisation | TM44 | HVAC Performance | EntireFM</title>
        <meta name="description" content="Building energy efficiency and optimisation services. Reducing energy demand through HVAC plant optimisation, controls tuning, and compliance audits. Supporting ESG and net zero targets." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Building Energy Efficiency & Optimisation"
        description="Building energy efficiency and optimisation services across the UK. Reducing energy demand through HVAC plant optimisation, controls tuning, and compliance audits."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                Building Energy Efficiency & Optimisation
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Reducing energy demand through HVAC plant optimisation, controls tuning, and compliance audits. Supporting ESG targets and operational cost reduction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Case for Energy Optimisation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Commercial buildings account for approximately 18% of UK carbon emissions, with HVAC systems consuming 40–60% of total building energy. Inefficient plant operation, poor controls, and inadequate maintenance result in significant waste.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Energy optimisation addresses these inefficiencies through systematic review, controls improvements, and operational changes—often delivering substantial savings without capital investment. For building owners facing net zero commitments and rising energy costs, optimisation is a fundamental requirement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Optimisation Measures
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">HVAC Plant Optimisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Boilers, chillers, and air handling units often operate inefficiently due to poor part-load performance, incorrect sequencing, or legacy control strategies. Optimisation involves load balancing, setpoint adjustments, and operational scheduling to match actual building demand.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Controls Strategy Review</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    BMS and standalone controls frequently drift from optimal settings over time. Reviewing control logic, temperature setpoints, time schedules, and occupancy-based adjustments identifies wasteful operation. Simple control changes can reduce energy consumption by 10–20%.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Free Cooling Utilisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Many buildings fail to exploit free cooling opportunities—using outside air to meet cooling demand instead of mechanical refrigeration. Optimising economiser operation and night purge strategies reduces chiller runtime and energy costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Variable Speed Drive (VSD) Implementation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Pumps and fans running at constant speed consume excessive energy. Retrofitting VSDs and implementing variable flow regimes matches energy use to actual demand. VSD projects typically achieve 20–50% energy savings on motor loads.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Lighting & Small Power Optimisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    LED upgrades, occupancy sensors, and daylight harvesting reduce electrical demand. While lighting accounts for a smaller proportion of total energy than HVAC, improvements are low-cost and deliver rapid payback.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Maintenance-Led Efficiency</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Poor maintenance causes efficiency losses—fouled heat exchangers, dirty filters, and refrigerant leaks increase energy consumption. Optimised PPM regimes restore plant efficiency and prevent performance degradation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Compliance & Regulatory Drivers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">TM44 (Air Conditioning Energy Assessment)</h3>
                  <p className="text-sm text-muted-foreground font-light">Mandatory for systems over 12kW. Identifies inefficiencies and recommends improvement measures.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">ESOS (Energy Savings Opportunity Scheme)</h3>
                  <p className="text-sm text-muted-foreground font-light">Large organisations must conduct energy audits every four years. Optimisation implements audit findings.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">ISO 50001 (Energy Management)</h3>
                  <p className="text-sm text-muted-foreground font-light">International standard for systematic energy management and continual improvement.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Net Zero Targets</h3>
                  <p className="text-sm text-muted-foreground font-light">Building owners must reduce emissions to meet UK net zero by 2050. Optimisation is essential first step.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESG & Building Value
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">ESG Reporting:</span> Investors require evidence of energy performance improvement. Buildings without demonstrable energy management strategies face valuation penalties and reduced tenant demand.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">EPC Ratings:</span> Energy Performance Certificates affect marketability. Buildings with poor ratings (below EPC B by 2030 in England & Wales) face rental restrictions and reduced liquidity.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Tenant Expectations:</span> Corporate occupiers increasingly demand low-carbon buildings with verifiable energy performance. Energy efficiency is now a core leasing criterion.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Operational Cost:</span> Rising energy costs make optimisation a financial imperative. Buildings with unmanaged energy consumption face significant operating cost inflation.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">TM44 assessments and plant performance validation</p>
                </Link>
                <Link to="/services/bms-integration-testing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">BMS Integration Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">Controls strategy and system optimisation</p>
                </Link>
                <Link to="/services/indoor-air-quality-testing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">IAQ Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">Balancing energy efficiency with air quality</p>
                </Link>
                <Link to="/services/ppm-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">PPM Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Maintenance-led efficiency and plant reliability</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Energy Optimisation Assessment</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our energy specialists conduct building-wide energy audits, identify optimisation opportunities, and implement improvement measures. We support ESOS compliance, TM44 recommendations, and ESG reporting. Contact us to reduce energy demand and operating costs.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Energy Assessment
                </Link>
              </div>
            </section>

            <FAQSection faqs={faqs} />
          </div>

          <aside className="lg:col-span-1">
            <SidebarCTA />
          </aside>
        </div>
      </div>
    </>
  );
};

export default EnergyOptimisation;
