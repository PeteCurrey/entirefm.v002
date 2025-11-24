import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const WaterOptimisation = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Consumption Optimisation" }
  ];

  const faqs = [
    {
      question: "What is typical water consumption for commercial buildings?",
      answer: "UK offices: 0.3-0.6m³ per person per year. Retail: 5-15m³ per 100m² per year. Hospitals: 0.5-1.0m³ per bed per day. Hotels: 0.3-0.5m³ per occupied room per day. Industrial: highly variable (1-1000m³ per day) depending on processes. Consumption above these benchmarks indicates leaks, inefficient equipment, or excessive use. Water costs £1-£3 per m³ (supply + wastewater charges), so high consumption estates can save £10,000-£100,000+ annually through optimisation."
    },
    {
      question: "Can water leaks be detected without visible evidence?",
      answer: "Yes, through continuous flow monitoring (smart meters) and pressure testing. Small leaks (dripping taps, toilet cisterns, underground pipework) waste thousands of litres annually yet remain invisible. Smart meters detect abnormal 24-hour baseload (flow during unoccupied periods) indicating hidden leaks. Typical undetected leak: 1 litre/min = 1,440 litres/day = 526,000 litres/year = £1,000+ annual cost. Acoustic leak detection (listening devices) pinpoints underground leak locations. Annual leak surveys recommended for large estates."
    },
    {
      question: "What are the benefits of flow restrictors and aerators?",
      answer: "Flow restrictors reduce water flow at taps/showers without affecting user experience. Standard tap flow: 12-15 litres/min. Aerated restrictors: 4-6 litres/min (60-70% reduction). Showers: standard 12-18 litres/min, restricted 6-9 litres/min. Cost: £5-£20 per unit. Typical office (100 occupants, 200 taps/toilets): annual saving 500-1,000m³ = £1,000-£3,000. Payback <1 year. No maintenance, no behaviour change required—savings are automatic and permanent."
    },
    {
      question: "Are rainwater harvesting systems cost-effective?",
      answer: "For large buildings (>5,000m²) with significant non-potable water demand (toilet flushing, irrigation, cooling tower makeup), yes. Capital cost: £15,000-£100,000+ depending on tank size and filtration. Annual savings: £2,000-£20,000 depending on rainfall, storage capacity, and demand. Typical payback: 5-15 years. ROI improves if installed during new-build (lower installation cost). Benefits beyond cost: reduced surface water drainage charges, BREEAM credits, flood risk mitigation, water security during supply interruptions."
    },
    {
      question: "What is the link between water consumption and energy use?",
      answer: "Heating hot water accounts for 5-15% of building energy consumption. Reducing hot water demand reduces gas/electricity use. Example: reducing hot water flow by 30% (via flow restrictors) cuts heating energy by 30%. Additionally, water supply and wastewater treatment consume energy—embedded energy in water is ~0.5-1.0 kWh/m³. Reducing water consumption by 500m³/year saves 250-500 kWh/year (£40-£100) plus gas savings (much larger). Water and energy optimisation should be integrated strategies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Water Consumption Optimisation | Leak Detection & Efficiency | EntireFM</title>
        <meta name="description" content="Water consumption optimisation reducing wastage and improving efficiency in commercial estates. Flow restrictors, leak detection, smart metering and benchmarking." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Water Consumption Optimisation"
        description="Water consumption optimisation for commercial estates across the UK. Reducing water wastage and improving system efficiency through leak detection, flow control, and smart metering."
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
                Water Consumption Optimisation
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Reducing wastage and improving the efficiency of water systems in commercial estates through leak detection, flow control, and consumption monitoring.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Beyond Basic Consumption Monitoring
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Most commercial buildings receive quarterly water bills showing total consumption—a lagging indicator providing no insight into where water is used or wasted. By the time excessive consumption is noticed, thousands of pounds have been wasted, and leak damage may have occurred.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Water optimisation uses smart metering, leak detection, flow control, and behavioural interventions to reduce consumption by 20-40% while maintaining operational performance. These measures reduce costs (water supply + wastewater charges), improve sustainability credentials (ESG/BREEAM), and protect buildings from water damage. Unlike energy efficiency (requiring capital investment in plant), most water savings are achieved through low-cost interventions with 1-3 year payback periods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Water Optimisation Strategies
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Leak Detection & Repair</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Undetected leaks are the single largest source of water waste in commercial buildings. Small leaks (dripping taps, toilet cisterns, underground pipework) waste 100-1,000 litres/day yet remain invisible. Smart meters detect abnormal 24-hour baseload (flow during unoccupied periods) indicating hidden leaks. Acoustic leak detection uses listening devices to pinpoint underground leak locations. Annual water audits identify and quantify leaks—typical finding: 20-40% of water consumption is wasted through leaks. Repair costs are minimal (£50-£500 per leak) compared to ongoing waste costs (£500-£5,000+ per leak per year).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Flow Restrictors & Aerators</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Flow restrictors reduce water flow at taps and showers without affecting user experience. Standard tap flow: 12-15 litres/min. Aerated flow restrictors: 4-6 litres/min (60-70% reduction). Showers: standard 12-18 litres/min, restricted 6-9 litres/min. Aerators mix water with air creating sensation of normal flow despite reduced volume. Cost: £5-£20 per unit. Installation takes seconds. No maintenance required. No behaviour change required—savings are automatic. Typical payback: {'<'}12 months. Essential for offices, hotels, leisure centres, healthcare.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Toilet & Urinal Controls</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Toilets account for 30-50% of commercial building water use. Dual-flush toilets (6/4 litre vs 9/6 litre single-flush) reduce consumption by 30-40%. Leaking toilet cisterns waste 200-400 litres/day (£150-£300/year per toilet)—detectable via dye tests or smart meters. Urinals often operate on continuous flush (wasteful)—PIR sensors or time-of-day controls reduce flushes by 60-80%. Waterless urinals eliminate water use entirely but require maintenance (cartridge replacement every 6-12 months). Urinal controls payback: 6-18 months.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Water Metering</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Smart meters provide real-time visibility of water consumption at building or zone level. Continuous monitoring detects leaks (abnormal overnight flow), tracks consumption trends, and validates optimisation measures. Data is accessible via cloud dashboards (desktop/mobile). Automated alerts notify facilities teams of abnormal consumption—leak detected within hours, not months. Submetering allows tenant billing in multi-tenant buildings, incentivising water efficiency. Smart meters cost £200-£1,000 per location. ROI through leak detection alone: 1-3 years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Cooling Tower Water Treatment Optimisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Cooling towers consume significant water (evaporation, blowdown). Poor water treatment causes excessive blowdown (water dumped to control mineral concentration), wasting 20-40% of makeup water. Optimised treatment (conductivity controllers, chemical dosing, side-stream filtration) reduces blowdown by 50-70%, cutting water consumption by 10-30%. Typical cooling tower (500kW): baseline 50-100m³/month, optimised 30-60m³/month. Annual saving: £200-£1,000. Additional benefits: reduced chemical use, improved heat transfer efficiency, extended equipment life.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Rainwater Harvesting</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Rainwater harvesting captures roof runoff for non-potable uses (toilet flushing, irrigation, cooling tower makeup, vehicle washing). System includes collection (gutters), filtration, storage (underground tanks 5-50m³), pumping, and distribution. Suitable for large buildings ({'>'}5,000m²) with significant non-potable demand. Typical capture: 30-60% of roof area runoff (50-100 litres/m² roof/year). Capital cost: £15,000-£100,000+. Payback: 5-15 years (improves if installed during new-build). Benefits: cost reduction, BREEAM credits, reduced surface water drainage charges, flood risk mitigation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Greywater Recycling</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Greywater systems capture wastewater from basins/showers, treat it (biological/membrane filtration), and reuse for toilet flushing. Suitable for large buildings (hotels, leisure centres, offices) with balanced demand (similar volumes of greywater generated and toilet flushing). Reduces mains water consumption by 20-40%. Capital cost: £30,000-£150,000+ depending on capacity and treatment technology. Payback: 10-20 years (often not economically viable for retrofit but beneficial for BREEAM/sustainability targets). Requires ongoing maintenance (treatment systems, pumps, filters).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Water Benchmarking & Targeting
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Water consumption should be benchmarked against industry standards to identify underperformance. UK offices: 0.3-0.6m³ per person per year. Retail: 5-15m³ per 100m² per year. Hotels: 0.3-0.5m³ per occupied room per day. Consumption above benchmarks indicates leaks, inefficient equipment, or excessive use.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Targets should be set based on best-practice benchmarks and validated through ongoing monitoring. Typical improvement target: 20-30% reduction over 2-3 years through leak elimination, equipment upgrades, and behavioural change. Targets should be integrated into ESG reporting, BREEAM assessments, and facilities KPIs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Real-World Savings Examples
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Office Building, London (8,000m², 400 occupants)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Baseline:</span> 2,400m³/year (6m³ per person—poor performance)<br/>
                    <span className="font-medium text-foreground">Interventions:</span> Leak detection (3 major leaks repaired), flow restrictors (200 taps), dual-flush toilets (50 replacements)<br/>
                    <span className="font-medium text-foreground">Result:</span> 35% reduction (1,560m³/year), £2,600 annual saving, 18-month payback
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Leisure Centre, Birmingham (5,000m², pool + gym)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Baseline:</span> 15,000m³/year (high consumption typical for pools)<br/>
                    <span className="font-medium text-foreground">Interventions:</span> Shower flow restrictors (40 units), urinal PIR controls (15 units), pool backwash optimisation<br/>
                    <span className="font-medium text-foreground">Result:</span> 22% reduction (3,300m³/year), £6,600 annual saving, 12-month payback
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Retail Park, Manchester (20,000m², multiple tenants)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Baseline:</span> 8,000m³/year (4m³ per 100m²—moderate performance)<br/>
                    <span className="font-medium text-foreground">Interventions:</span> Smart metering (leak detection), irrigation controls (timer + rain sensors), toilet retrofits<br/>
                    <span className="font-medium text-foreground">Result:</span> 28% reduction (2,240m³/year), £4,500 annual saving, 24-month payback (higher cost due to submetering installation)
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Compliance & Sustainability Frameworks
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                <strong>Water Supply (Water Fittings) Regulations 1999:</strong> Prevents waste, misuse, contamination, and undue consumption of water. Requires water-efficient fittings in new installations. Enforced by water companies.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                <strong>BREEAM:</strong> Water credits awarded for consumption benchmarks (excellent: {'<'}0.4m³ per person per year for offices), flow restrictors, leak detection, rainwater harvesting, greywater recycling. Water consumption is significant BREEAM scoring category.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                <strong>ESG Reporting:</strong> Water consumption is a key environmental metric. Investors, regulators, and tenants increasingly demand water stewardship evidence—consumption data, reduction targets, and efficiency measures. Water optimisation supports ESG credentials and improves asset value.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/water-hygiene" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Water Hygiene</h3>
                  <p className="text-sm text-muted-foreground font-light">Legionella testing and tank cleaning</p>
                </Link>
                <Link to="/services/smart-metering" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Metering</h3>
                  <p className="text-sm text-muted-foreground font-light">Energy, gas, and water submetering</p>
                </Link>
                <Link to="/services/plumbing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Commercial Plumbing</h3>
                  <p className="text-sm text-muted-foreground font-light">Pipework and sanitary systems</p>
                </Link>
                <Link to="/services/sustainability-monitoring" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Sustainability Monitoring</h3>
                  <p className="text-sm text-muted-foreground font-light">ESG reporting and target tracking</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Water Audit</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our water efficiency specialists conduct comprehensive water audits for commercial, industrial, and public sector estates. We identify leaks, benchmark consumption, and provide costed recommendations with ROI analysis. Contact us for a site-specific water optimisation proposal.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Water Audit
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

export default WaterOptimisation;
