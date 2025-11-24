import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const EnergyOptimisationAdvanced = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Advanced Energy Optimisation" }
  ];

  const faqs = [
    {
      question: "What is the difference between basic and advanced energy optimisation?",
      answer: "Basic optimisation addresses simple improvements—time schedules, setpoint adjustments, and filter changes. Advanced optimisation involves complex controls tuning (PID loops, deadband adjustments), plant sequencing strategies, free cooling maximisation, and model-based predictive control. Advanced work requires deep HVAC engineering knowledge and typically delivers 20-40% savings compared to 10-15% for basic measures."
    },
    {
      question: "Can optimisation work with old plant?",
      answer: "Yes, but effectiveness depends on plant condition and controls capability. Even ageing plant benefits from improved scheduling, load balancing, and setpoint optimisation. However, if plant is severely degraded or controls are primitive, capital upgrades may be required to unlock full savings potential. We assess plant condition as part of optimisation studies."
    },
    {
      question: "How long do savings last?",
      answer: "Indefinitely, if systems are maintained and monitored. However, controls drift over time—setpoints are overridden, schedules are adjusted, and operational discipline erodes. Annual recommissioning or continuous monitoring platforms are recommended to sustain savings. Buildings with ongoing performance monitoring maintain 95%+ of initial savings; those without monitoring often lose 30-50% of gains within 2-3 years."
    },
    {
      question: "Does optimisation affect comfort or compliance?",
      answer: "No. Optimisation reduces waste, not performance. Temperature control, air quality, and statutory compliance are maintained or improved. In fact, optimised systems often deliver better comfort due to improved control stability and elimination of simultaneous heating/cooling. We validate comfort and IAQ post-optimisation to confirm no degradation."
    },
    {
      question: "What is the typical ROI for advanced optimisation?",
      answer: "Payback periods typically range from 6 months to 2 years depending on baseline inefficiency and energy costs. Buildings with poor controls, oversized plant, or 24/7 operation achieve the fastest payback. Annual savings commonly range from £5,000-£50,000+ per building depending on size and energy intensity. ROI is often 50-200% in first year."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Energy Optimisation | HVAC Tuning | Controls Strategy | EntireFM</title>
        <meta name="description" content="Advanced energy optimisation reducing mechanical and electrical plant energy consumption through controls tuning, sequencing strategies, and operational improvements." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Advanced Energy Optimisation"
        description="Advanced energy optimisation for commercial estates across the UK. Reducing mechanical and electrical plant energy consumption through controls tuning and operational improvements."
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
                Advanced Energy Optimisation
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Optimising mechanical and electrical plant to reduce cost without compromising compliance or comfort. Engineering-led efficiency improvement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Beyond Basic Energy Efficiency
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Most commercial buildings have exhausted obvious efficiency measures—LED lighting, insulation, basic time scheduling. Yet HVAC systems continue to waste 20-40% of energy through poor controls, simultaneous heating/cooling, excessive outside air intake, and suboptimal plant sequencing.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Advanced energy optimisation addresses these complex inefficiencies through controls tuning, plant performance testing, and model-based optimisation strategies. This work requires chartered engineering expertise and deep HVAC knowledge—it is not achievable through generic energy assessments or facility management alone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Optimisation Strategies
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">AHU Optimisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Testing actual airflow rates against design intent, reducing excessive ventilation rates, implementing demand-controlled ventilation based on CO₂ or occupancy sensors, and eliminating simultaneous heating/cooling. Many AHUs deliver 150-200% of required airflow—reducing fan duty cuts energy consumption by 30-50% without compromising IAQ.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Cooling Plant Sequencing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Optimising chiller staging and condenser water temperature reset to improve part-load efficiency. Poor sequencing causes multiple chillers to operate at low part-load (inefficient), or single chillers to operate at high load (reduced reliability). Advanced sequencing matches chiller operation to actual cooling demand, reducing kWh/ton by 15-30%.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Night Purge Strategies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Exploiting cool night air to pre-cool buildings before occupancy, reducing daytime chiller runtime. Night purge is particularly effective for high thermal mass buildings in temperate climates. Automated control based on outdoor/indoor temperature differentials maximises free cooling without manual intervention.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Deadband Tuning</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Increasing temperature control deadbands (the range within which heating/cooling systems do not operate) reduces unnecessary plant cycling and simultaneous operation. Widening deadbands from ±1°C to ±2°C can reduce HVAC energy consumption by 10-20% without affecting occupant comfort. Requires careful commissioning to avoid comfort complaints.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Heating System Optimisation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Implementing weather compensation (reducing flow temperatures during mild weather), optimising boiler staging for part-load efficiency, and reducing unnecessary system temperatures. Many heating systems operate at fixed high temperatures year-round—weather compensation reduces gas consumption by 15-25% without capital investment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Variable Speed Drive (VSD) Control</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Optimising VSD setpoints for pumps and fans to match actual demand. Existing VSDs often operate at fixed speeds or poorly tuned control loops—proper commissioning reduces motor energy by 20-50%. Pressure differential control, trim & respond algorithms, and night setback further improve VSD efficiency.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Real-World Savings Examples
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Office Building, London (15,000m²)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Baseline:</span> 180 kWh/m²/yr electricity consumption<br/>
                    <span className="font-medium text-foreground">Interventions:</span> AHU airflow reduction, chiller sequencing optimisation, deadband widening<br/>
                    <span className="font-medium text-foreground">Result:</span> 28% reduction (50 kWh/m²/yr), £42,000 annual saving, 12-month payback
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Data Centre, Manchester (5,000m²)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Baseline:</span> PUE 1.8 (Power Usage Effectiveness)<br/>
                    <span className="font-medium text-foreground">Interventions:</span> Free cooling maximisation, hot aisle containment, raised floor optimisation<br/>
                    <span className="font-medium text-foreground">Result:</span> PUE reduced to 1.3, £180,000 annual saving, 18-month payback
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Retail Park, Birmingham (25,000m²)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    <span className="font-medium text-foreground">Baseline:</span> £120,000 annual gas consumption<br/>
                    <span className="font-medium text-foreground">Interventions:</span> Weather compensation, boiler sequencing, zone control improvements<br/>
                    <span className="font-medium text-foreground">Result:</span> 22% gas reduction, £26,000 annual saving, controls-only intervention (zero capex)
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Sustaining Performance
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Optimised systems require ongoing monitoring to sustain savings. Controls drift occurs through setpoint overrides, schedule changes, and sensor degradation. Buildings without performance monitoring typically lose 30-50% of initial savings within 2-3 years.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                We recommend annual recommissioning or continuous monitoring platforms (BMS-integrated analytics or cloud IoT systems) to detect performance degradation and trigger corrective action. Continuous monitoring costs £500-2,000/year but protects £10,000-50,000+ annual savings—highly cost-effective insurance against performance erosion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">Identifying optimisation opportunities</p>
                </Link>
                <Link to="/services/bms-optimisation" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">BMS Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Controls tuning and strategy improvement</p>
                </Link>
                <Link to="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Plant testing and commissioning</p>
                </Link>
                <Link to="/services/smart-building-iot" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Building IoT</h3>
                  <p className="text-sm text-muted-foreground font-light">Continuous performance monitoring</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Optimisation Assessment</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our chartered engineers conduct advanced energy optimisation for commercial, industrial, and public sector estates. We provide guaranteed savings contracts with performance monitoring and annual recommissioning. Contact us for a site-specific optimisation proposal.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Optimisation Assessment
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

export default EnergyOptimisationAdvanced;
