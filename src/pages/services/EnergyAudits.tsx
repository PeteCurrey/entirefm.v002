import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const EnergyAudits = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Energy Audits & Building Performance Reviews" }
  ];

  const faqs = [
    {
      question: "What is covered in an energy audit?",
      answer: "A comprehensive energy audit includes baseline consumption analysis, HVAC system performance testing, controls strategy review, lighting assessment, building fabric thermal performance, and identification of energy waste patterns. Audits comply with ESOS and ISO 50001 methodologies and provide actionable recommendations with ROI calculations."
    },
    {
      question: "How much can energy audits save?",
      answer: "Commercial buildings typically achieve 15-30% energy cost reduction through audit-led improvements. Savings vary based on baseline inefficiency, plant age, and building use. Many operational improvements require minimal capital investment—optimised controls, improved scheduling, and maintenance-led efficiency gains often deliver immediate savings."
    },
    {
      question: "Are energy audits mandatory?",
      answer: "Large undertakings (250+ employees or turnover >€50m) must comply with the Energy Savings Opportunity Scheme (ESOS), requiring audits every four years. SECR (Streamlined Energy and Carbon Reporting) mandates annual energy disclosure for quoted companies and large unquoted companies. Non-compliance results in financial penalties and reputational risk."
    },
    {
      question: "How long does an energy audit take?",
      answer: "Desktop reviews and data analysis typically require 2-3 weeks. Site surveys range from one day for small buildings to 5+ days for complex multi-site estates. Final reports with investment-grade recommendations are delivered within 4-6 weeks of site completion. ESOS-compliant audits follow prescribed timelines."
    },
    {
      question: "What happens after the audit?",
      answer: "Reports provide prioritised recommendations with capital costs, annual savings, and payback periods. Clients typically implement quick wins (controls optimisation, operational changes) immediately, followed by phased capital projects. We support implementation, validate savings, and provide ongoing performance monitoring to ensure ROI is achieved."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Energy Audits & Building Performance Reviews | ESOS Compliance | EntireFM</title>
        <meta name="description" content="Energy audits identifying hidden inefficiencies in HVAC, lighting, controls and plant systems. ESOS-compliant assessments reducing operational costs and carbon footprint." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Energy Audits & Building Performance Reviews"
        description="Energy audits identifying hidden inefficiencies in HVAC, lighting, controls and plant systems across commercial estates in the UK. ESOS-compliant assessments."
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
                Energy Audits & Building Performance Reviews
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Identifying hidden inefficiencies across HVAC, lighting, controls and plant systems to reduce operational costs and carbon footprint.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Why Energy Audits Deliver ROI
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Commercial buildings waste 20-40% of energy consumption through inefficient plant operation, poor controls, oversized systems, and operational drift. Energy audits systematically identify these inefficiencies and provide investment-grade recommendations with quantified savings and payback periods.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Unlike generic energy assessments, our audits are conducted by chartered engineers with deep HVAC and electrical knowledge. We test plant performance, review BMS programming, measure actual loads, and validate theoretical assumptions against real operational data. This engineering rigour ensures recommendations are achievable and ROI projections are accurate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                What We Assess
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Energy Flow Mapping</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Disaggregating total consumption into HVAC, lighting, small power, and process loads. Identifies where energy is consumed and which systems offer the greatest savings potential. Sub-metering data or short-term monitoring may be deployed to validate energy flows.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Baseline Consumption Analysis</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Normalising energy use against degree days, occupancy, and building area to benchmark performance. Poor-performing buildings (above industry benchmarks) indicate significant efficiency opportunities. Baseline data establishes pre-improvement consumption for savings validation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">HVAC System Optimisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Testing boiler efficiency, chiller performance, AHU airflow, and pump duty. Identifying oversized plant, poor part-load performance, simultaneous heating/cooling, and excessive outside air intake. HVAC typically represents 40-60% of building energy—optimisation delivers substantial savings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Controls Strategy Review</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Reviewing BMS programming, time schedules, temperature setpoints, and control loops. Poorly configured controls cause excessive runtime, simultaneous operation of heating/cooling, and wasteful operation during unoccupied periods. Controls optimisation often delivers 10-20% savings with zero capital cost.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Lighting & Small Power Assessment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Assessing lighting technology, control strategies (occupancy sensors, daylight harvesting), and small power consumption (plug loads, IT equipment). LED upgrades and automated controls reduce electrical demand with rapid payback.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Behavioural Energy Waste</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Identifying energy waste from occupant behaviour—open windows with heating on, lights left on, excessive heating/cooling setpoint adjustments. Operational policies and staff engagement programmes can reduce consumption by 5-15% without capital investment.
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
                  <h3 className="font-medium mb-2">ESOS (Energy Savings Opportunity Scheme)</h3>
                  <p className="text-sm text-muted-foreground font-light">Large organisations must conduct comprehensive energy audits every four years. Non-compliance results in financial penalties and Environment Agency enforcement.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">SECR (Streamlined Energy and Carbon Reporting)</h3>
                  <p className="text-sm text-muted-foreground font-light">Annual energy and carbon disclosure for quoted and large unquoted companies. Audits support accurate reporting and identify improvement opportunities.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">ISO 50001 (Energy Management)</h3>
                  <p className="text-sm text-muted-foreground font-light">International standard for systematic energy management. Audits form the foundation of ISO 50001 certification and continual improvement frameworks.</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">EPC Regulations</h3>
                  <p className="text-sm text-muted-foreground font-light">Minimum Energy Efficiency Standards (MEES) require EPC B by 2030 in England & Wales. Audits identify interventions to achieve compliance.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESG & Governance Impact
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">ESG Reporting:</span> Investors require evidence of energy management capability. Energy audits demonstrate governance, provide baseline data for carbon reduction targets, and support credible net zero commitments.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Asset Value:</span> Energy-inefficient buildings face valuation penalties, reduced tenant demand, and difficulty securing finance. Audits identify interventions to maintain asset competitiveness and comply with emerging green finance requirements.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Tenant Expectations:</span> Corporate occupiers demand low-carbon buildings with transparent energy performance. Audits provide verifiable evidence of efficiency and support green lease negotiations.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Operational Resilience:</span> Rising energy costs make efficiency a financial imperative. Buildings without energy management strategies face significant operating cost inflation and reduced profitability.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/energy-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Implementing audit recommendations and plant improvements</p>
                </Link>
                <Link to="/services/bms-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">BMS Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Controls strategy and system tuning</p>
                </Link>
                <Link to="/services/smart-metering" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Metering</h3>
                  <p className="text-sm text-muted-foreground font-light">Consumption data and performance monitoring</p>
                </Link>
                <Link to="/services/thermal-imaging-surveys" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Thermal Imaging</h3>
                  <p className="text-sm text-muted-foreground font-light">Building fabric and electrical diagnostics</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Energy Audit</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our chartered engineers conduct ESOS-compliant energy audits for single buildings and multi-site portfolios. We provide investment-grade recommendations with ROI calculations and support implementation to ensure savings are realised. Contact us for a site-specific proposal.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Energy Audit
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

export default EnergyAudits;
