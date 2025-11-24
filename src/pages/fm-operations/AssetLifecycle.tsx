import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const AssetLifecycle = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/services" },
    { label: "Asset Lifecycle Planning" }
  ];

  const faqs = [
    {
      question: "What is asset lifecycle planning and why does it matter?",
      answer: "Asset lifecycle planning is the strategic management of building assets from installation through operation, maintenance, and eventual replacement. It uses condition data, failure trends, and performance metrics to forecast when assets will reach end-of-life and require capital investment. Effective lifecycle planning prevents reactive failures (costly emergency replacements), optimises capital expenditure (planned replacement vs emergency procurement), and ensures operational continuity (no unexpected downtime). Poor lifecycle planning results in: unexpected capital costs, operational disruption from failures, reduced asset performance, and insurance/compliance issues."
    },
    {
      question: "How do you determine when an asset needs replacing?",
      answer: "Asset replacement decisions are based on: Age (compared to typical lifespan—boilers 15-20 years, chillers 20-25 years, lifts 25-30 years), Condition (survey data, defect trends, performance degradation), Reliability (failure frequency, reactive maintenance costs), Efficiency (energy consumption vs modern standards), Compliance (ability to meet current regulations—refrigerants, emissions, safety), Obsolescence (parts availability, manufacturer support, technology compatibility). Risk-based assessment scores assets across these factors—high-risk assets are prioritised for replacement. Capital planning cycles (3-5 year forecasts) allocate budgets based on prioritised replacement schedules."
    },
    {
      question: "What is the difference between reactive and planned replacement?",
      answer: "Reactive replacement (run-to-failure): Asset replaced after catastrophic failure. Costs 2-3x planned replacement (emergency procurement, premium labour, expedited delivery, operational downtime, collateral damage). Typical for low-value, non-critical assets. Planned replacement (proactive): Asset replaced before failure based on condition/age forecasts. Scheduled during planned shutdowns minimising disruption. Procurement via competitive tender reduces costs. Budgeted and funded through capital planning cycles. Appropriate for critical, high-value, life-safety assets. Best-practice FM maximises planned replacement through condition monitoring and lifecycle forecasting."
    },
    {
      question: "How do you prioritise capital investment across multiple sites?",
      answer: "Capital prioritisation considers: Risk (life-safety, compliance, operational criticality), Condition (imminent failure vs long-term deterioration), Cost-benefit (energy savings, maintenance reduction, reliability improvement), Regulatory drivers (compliance deadlines, legislation changes), Strategic alignment (ESG targets, portfolio rationalisation). Portfolio-wide condition surveys create capital investment roadmaps—ranking projects by risk-adjusted ROI. Multi-site portfolios require transparent prioritisation frameworks preventing ad-hoc, reactive spending. Centralised capital planning ensures optimal allocation of limited budgets across estates."
    },
    {
      question: "What role does condition monitoring play in lifecycle planning?",
      answer: "Condition monitoring provides real-time asset health data—vibration analysis (rotating equipment), thermography (electrical/mechanical), oil analysis (engines/gearboxes), ultrasonic testing (compressed air leaks), performance trending (efficiency degradation). Data informs: Predictive maintenance (service before failure), Dynamic PPM scheduling (extend intervals for healthy assets), Replacement forecasting (deterioration trends predict failure timelines), ROI justification (energy savings, reliability improvements). IoT sensors enable continuous monitoring—replacing periodic surveys. Condition-based maintenance is more accurate and cost-effective than time-based schedules. Investment in monitoring technology delivers ROI through optimised lifecycle decisions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Asset Lifecycle Planning | Condition-Based Forecasting | EntireFM</title>
        <meta name="description" content="Asset lifecycle planning and condition-based forecasting for commercial estates. Strategic capital planning, replacement prioritisation and lifecycle optimisation." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Asset Lifecycle Planning"
        description="Condition-based forecasting, capital planning and lifecycle optimisation for building assets. Strategic replacement scheduling ensuring operational continuity and budget control."
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
                Asset Lifecycle Planning
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Condition-based forecasting, capital planning and lifecycle optimisation ensuring operational continuity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Lifecycle Planning: Strategic Asset Management
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Asset lifecycle planning transforms reactive maintenance culture into strategic capital management. It uses condition data, failure trends, and performance metrics to forecast when building assets will reach end-of-life—enabling proactive replacement planning rather than emergency response. Effective lifecycle planning optimises capital expenditure, prevents operational disruption, and ensures regulatory compliance.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Without lifecycle planning, estates experience: Unexpected capital costs (reactive replacement 2-3x more expensive), Operational disruption (failures cause downtime, tenant complaints, revenue loss), Budget uncertainty (unplanned capital demands distort forecasts), Compliance failures (aging assets cannot meet current regulations). Strategic lifecycle planning delivers predictable capital cycles, operational reliability, and informed investment decisions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Asset Condition Surveying & Data Collection
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Comprehensive Condition Surveys</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Condition surveys assess asset health across all building systems—HVAC (boilers, chillers, AHUs, BMS), electrical (distribution, emergency systems, lighting), water (pumps, tanks, treatment), fire safety (alarms, sprinklers, suppression), fabric (roofs, windows, structure), vertical transport (lifts, escalators). Each asset is graded: A (excellent, recently installed), B (satisfactory, minor wear), C (poor, significant defects), D (critical, immediate action required), X (end-of-life, replacement required). Surveys include photographic evidence, defect schedules, and cost estimates for remediation/replacement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Age & Performance Analysis</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Asset age is compared to typical lifespans: Boilers 15-20 years, Chillers 20-25 years, AHUs 20-25 years, Electrical distribution 40-50 years, Lifts 25-30 years, Roofs 20-30 years (dependent on material). Performance data (energy consumption, reliability, maintenance costs) is analyzed against age—identifying deterioration trends. Assets nearing end-of-life show: Increased failure frequency, Rising maintenance costs, Reduced efficiency, Parts obsolescence. Age alone does not determine replacement—well-maintained assets may exceed typical lifespans while poorly maintained assets fail prematurely.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Failure Trend & Cost Analysis</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Historical failure data reveals: Recurring defects (chronic issues indicating design/manufacturing faults), Failure frequency (increasing reactive callouts suggest deterioration), Maintenance cost trends (rising costs indicate end-of-life approaching), Downtime impact (operational/revenue loss from failures). Cost analysis compares: Annual maintenance cost vs replacement cost (when annual maintenance exceeds 10-15% of replacement cost, replacement is economically justified), Energy efficiency gains (modern equipment 20-40% more efficient), Reliability improvements (reduced downtime, tenant complaints). Financial modeling informs replacement ROI decisions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Capital Investment Planning & Prioritisation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Capital planning forecasts replacement requirements over 3-10 year horizons. Assets are prioritised by: Risk (life-safety, compliance, operational criticality), Condition (imminent failure vs long-term deterioration), Financial impact (energy savings, maintenance reduction, operational efficiency), Regulatory drivers (compliance deadlines, legislation changes—F-Gas phase-down, Building Safety Act). Priority matrix scores each asset—high-risk, poor-condition assets receive immediate capital allocation.
              </p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">3-Year Capital Forecast</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Year 1 (immediate): Critical failures, compliance deadlines, life-safety risks<br/>
                    Year 2 (planned): Assets in poor condition, high maintenance cost, efficiency upgrades<br/>
                    Year 3 (strategic): End-of-life forecasts, performance improvements, ESG initiatives
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Budget Allocation Strategy</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Capital budgets are allocated across: 40-50% essential (safety, compliance, critical systems), 30-40% planned (lifecycle replacements, efficiency upgrades), 10-20% contingency (unexpected failures, scope changes). Transparent prioritisation frameworks prevent ad-hoc spending and ensure optimal capital deployment.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Replacement vs Refurbishment Decisions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Total Replacement</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Full asset replacement is appropriate when: Asset is beyond economic repair (refurbishment cost {'>'} 60-70% of replacement cost), Technology obsolescence (parts unavailable, no manufacturer support), Compliance issues (cannot meet current regulations), Performance inadequate (efficiency, capacity, reliability below requirements). Replacement delivers: Warranty protection (5-10 years manufacturer warranty), Energy efficiency (modern standards 20-40% improvement), Reliability (new equipment failure rate minimal for 5-10 years), Compliance assurance (meets current Building Regulations, BS standards).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Major Refurbishment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Refurbishment extends asset life when: Core components remain sound (structural integrity, major assemblies), Cost-effective (refurbishment cost {'<'} 50% of replacement), Performance adequate (can meet operational requirements with upgrades), Downtime constraints (replacement requires extended shutdowns). Examples: Boiler controls upgrade (extend life 5-7 years), Chiller refrigerant conversion (F-Gas compliance), Lift modernisation (control systems, safety features). Refurbishment is interim solution—eventually full replacement is required.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Lifecycle Cost Modeling & ROI Analysis
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Lifecycle costing evaluates total cost of ownership: Capital cost (purchase, installation, commissioning), Operating costs (energy, maintenance, consumables over asset life), Disposal costs (decommissioning, waste removal, replacement downtime), Intangible costs (operational disruption, tenant complaints, reputational impact). ROI analysis compares: Replace now vs replace later (risk of failure, escalating maintenance costs), New technology vs like-for-like (energy savings, reliability improvements), Refurbish vs replace (life extension vs long-term performance).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Financial modeling includes: Net present value (NPV) of future cash flows, Payback period (years to recover capital investment through savings), Internal rate of return (IRR) for capital justification, Sensitivity analysis (impact of energy price changes, maintenance cost assumptions). Robust financial analysis supports evidence-based capital decisions and board-level approvals.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/building-inspections" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Building Inspections</h3>
                  <p className="text-sm text-muted-foreground font-light">Condition surveys and compliance audits</p>
                </Link>
                <Link to="/fm-operations/ppm-delivery" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">PPM Delivery</h3>
                  <p className="text-sm text-muted-foreground font-light">Preventative maintenance programmes</p>
                </Link>
                <Link to="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">Performance reviews and efficiency analysis</p>
                </Link>
                <Link to="/fm-operations/fm-strategy" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">FM Strategy</h3>
                  <p className="text-sm text-muted-foreground font-light">Estate performance consultancy</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Asset Lifecycle Assessment</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our asset lifecycle planning service provides condition surveys, capital forecasting, and replacement prioritisation. We deliver strategic investment roadmaps that optimise capital expenditure, prevent operational disruption, and ensure regulatory compliance.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Lifecycle Assessment
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

export default AssetLifecycle;
