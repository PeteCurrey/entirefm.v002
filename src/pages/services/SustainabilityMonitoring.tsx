import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const SustainabilityMonitoring = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Sustainability Performance Monitoring" }
  ];

  const faqs = [
    {
      question: "What sustainability metrics should commercial buildings track?",
      answer: "Core metrics: energy consumption (kWh/m²/year), carbon emissions (kgCO₂e/m²/year), water consumption (litres/person/year or m³/m²/year), waste generation (kg/person/year) and recycling rate (%). Additional metrics: renewable energy generation, EPC rating, air quality (CO₂, VOC, PM2.5), thermal comfort, and occupant satisfaction. Metrics should align with ESG frameworks (GRI, SASB, TCFD) and sustainability certifications (BREEAM, NABERS, LEED)."
    },
    {
      question: "How often should sustainability data be reported?",
      answer: "Monthly reporting for operational management (identifying trends, validating interventions). Quarterly reporting for board/investor updates (ESG performance, target progress). Annual reporting for regulatory compliance (SECR, ESOS), sustainability certifications (BREEAM, NABERS), and external ESG disclosures (CDP, GRESB). Real-time dashboards enable continuous monitoring—facilities teams can respond immediately to anomalies (equipment failures, excessive consumption, comfort complaints)."
    },
    {
      question: "What is the difference between SECR, ESOS, and voluntary ESG reporting?",
      answer: "SECR (Streamlined Energy & Carbon Reporting): mandatory annual disclosure of energy consumption and carbon emissions for large UK companies (>250 employees or £36m turnover). ESOS (Energy Savings Opportunity Scheme): mandatory energy audits every 4 years for large undertakings (>250 employees or £44m turnover). Voluntary ESG reporting: companies disclose environmental performance to investors, tenants, and stakeholders via CDP, GRESB, GRI, or custom frameworks. SECR/ESOS are legal obligations; ESG reporting is voluntary but increasingly expected by stakeholders."
    },
    {
      question: "Can sustainability monitoring improve financial performance?",
      answer: "Yes. Energy/water optimisation reduces operating costs (10-40% reductions common). Improved EPC ratings increase asset value and rental income (green premium: 5-20% higher rents/values for sustainable buildings). Lower vacancy rates (tenants prefer sustainable buildings). Reduced regulatory risk (compliance with MEES, SECR, ESOS). Access to green finance (lower interest rates for sustainable assets). Sustainability is not a cost—it's a value driver for modern commercial real estate."
    },
    {
      question: "What platforms are available for sustainability data management?",
      answer: "Cloud-based platforms aggregate data from smart meters, BMS, IoT sensors, and manual inputs. Examples: Watchwire, Measurabl, Envizi, Arc (LEED), Sigma Earth, Deepki. Features include automated data collection, portfolio-level dashboards, benchmarking, target tracking, carbon accounting, and ESG reporting. Cost: £1,000-£10,000+ per year depending on portfolio size and features. ROI through reduced manual reporting effort, improved data quality, and insight-driven optimisation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sustainability Performance Monitoring | ESG Reporting | EntireFM</title>
        <meta name="description" content="Sustainability performance monitoring tracking energy, water, waste and carbon metrics to optimise operational sustainability and ESG reporting for commercial estates." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Sustainability Performance Monitoring"
        description="Sustainability performance monitoring for commercial estates. Tracking energy, water, waste and carbon metrics to optimise operational sustainability and support ESG reporting."
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
                Sustainability Performance Monitoring
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Tracking energy, water, waste and carbon metrics to optimise operational sustainability and support ESG reporting requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Beyond Annual Reporting
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Many organisations treat sustainability as an annual compliance exercise—collecting data retrospectively, producing reports for regulators/investors, then returning to business as usual. This reactive approach misses the operational benefits of continuous sustainability monitoring: identifying inefficiencies, validating improvement measures, and demonstrating progress to stakeholders.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Sustainability performance monitoring uses automated data collection, real-time dashboards, and benchmarking to track energy, water, waste, and carbon metrics continuously. This enables proactive management—facilities teams respond immediately to anomalies (equipment failures, excessive consumption), validate optimisation measures (are savings sustained?), and demonstrate continuous improvement. Data quality improves (no retrospective data gaps), reporting effort reduces (automated), and operational performance improves (insight-driven action).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Core Sustainability Metrics
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Energy Consumption & Carbon Emissions</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Electricity, gas, and heating fuel consumption tracked monthly (kWh/m²/year). Convert to carbon emissions using UK Government conversion factors (electricity: ~0.19 kgCO₂e/kWh, gas: ~0.18 kgCO₂e/kWh). Track Scope 1 (on-site combustion), Scope 2 (purchased electricity), and Scope 3 (business travel, waste, supply chain—where material). Compare against benchmarks (UK office: 80-120 kWh/m²/year electricity, 90-130 kWh/m²/year gas). Set annual reduction targets (typically 2-5% per year). Essential for SECR, ESOS, and voluntary ESG reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Water Consumption</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Track monthly water consumption (m³/occupant/year or litres/m²/year depending on building type). UK office benchmark: 6-9m³/person/year. Retail: 5-15m³/100m²/year. Hotels: 100-500 litres/occupied room/day. Consumption above benchmarks indicates leaks or inefficient equipment. Set reduction targets (20-30% over 2-3 years achievable through leak detection, flow restrictors, equipment upgrades). Required for BREEAM, NABERS, and ESG reporting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste Generation & Recycling Rate</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Track monthly waste generation (kg/occupant/year) split by general waste, dry recyclables, food waste, and hazardous waste. Calculate recycling rate (recyclables ÷ total waste). UK office benchmark: 50-100 kg/person/year total waste, 40-60% recycling rate. Target: 50-70% recycling rate through segregation improvements, occupant training, and contamination reduction. Essential for circular economy commitments, BREEAM, and ESG reporting. Waste data often requires manual collection from contractors (monthly weighbridge tickets).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Indoor Environmental Quality (IEQ)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Track CO₂ levels (target &lt;800ppm during occupied hours), VOC concentrations (target &lt;500µg/m³), PM2.5 particulate matter (target &lt;25µg/m³), temperature (20-24°C in winter, 23-26°C in summer), and humidity (40-60%). Poor IEQ causes occupant complaints, productivity loss, and health issues. Continuous monitoring via IoT sensors identifies problem zones and validates ventilation improvements. Required for WELL Building Standard, Fitwel, and increasingly demanded by tenants. Post-pandemic, IEQ visibility has become essential for occupant confidence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Renewable Energy Generation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Track on-site renewable generation (solar PV, wind, CHP) in kWh/year. Calculate renewable percentage (generation ÷ total consumption). Even small-scale solar installations (50-100kWp) can provide 5-15% of building electricity demand, reducing carbon emissions and energy costs. Required for BREEAM Outstanding, LEED Platinum, and net zero commitments. Feed-in tariffs (legacy schemes) or Power Purchase Agreements (new installations) provide revenue or cost savings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">EPC (Energy Performance Certificate) Rating</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Track EPC rating annually (A-G scale). Commercial buildings must achieve minimum EPC rating of 'E' under MEES (Minimum Energy Efficiency Standards) to be legally lettable. From April 2027, minimum standard increases to 'B' for new tenancies and renewals (proposed). Improving EPC rating increases asset value (5-20% green premium), reduces void periods (tenants prefer sustainable buildings), and protects against stranding risk (low EPC buildings become unlettable). EPC ratings updated every 10 years or when significant building works occur.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Data Collection & Automation
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Manual data collection (spreadsheets, emailed invoices) is time-consuming, error-prone, and retrospective. Automated data collection via smart meters, BMS integration, IoT sensors, and API connections provides real-time visibility, reduces manual effort by 80%+, and improves data quality.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart Meter Integration</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Half-hourly electricity meters (mandatory for large sites) and smart gas/water meters provide automatic consumption data via API or FTP. Data is ingested into sustainability platforms (Watchwire, Measurabl, Envizi) eliminating manual meter reading and invoice processing. Real-time visibility enables immediate anomaly detection (equipment failures, excessive consumption) rather than discovering issues months later via invoices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">BMS & IoT Sensor Data</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    BMS trend logs provide granular energy data (chiller consumption, AHU runtime, heating valve positions). IoT sensors (occupancy, CO₂, temperature, humidity) provide indoor environmental quality data. Cloud platforms aggregate this data with utility consumption providing complete sustainability dashboards. Integration via BACnet, Modbus, MQTT, or proprietary APIs. Enables correlation analysis—e.g. high CO₂ complaints coincide with reduced AHU runtime, suggesting ventilation optimisation opportunity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Waste & Water Data</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Waste data typically requires manual collection from contractors (monthly weighbridge tickets or bin lift counts). Water data increasingly available from smart meters (some water companies provide API access). Semi-automated approaches: contractors upload data directly to platforms or scan weighbridge tickets via mobile apps. Goal is to minimise manual data entry while ensuring complete, accurate records.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Cloud Dashboards & Reporting
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Sustainability platforms aggregate data from multiple sources and provide portfolio-level dashboards accessible via web and mobile. Facilities teams, asset managers, ESG teams, and board members gain real-time visibility of sustainability performance—no waiting for quarterly reports.
              </p>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Real-Time Dashboards</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Live view of energy, water, waste, carbon, and IEQ metrics. Colour-coded alerts (green/amber/red) highlight underperformance or anomalies. Drill-down capability—portfolio → building → floor → zone → equipment. Customisable views for different stakeholders (facilities: operational metrics, ESG teams: carbon/waste/certifications, board: high-level KPIs).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Benchmarking & Target Tracking</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Compare consumption against industry benchmarks (CIBSE TM46, NABERS, Energy Star). Set annual reduction targets (e.g. 3% energy reduction per year) and track progress monthly. Visualise target trajectories vs actual performance—are you on track? Identify underperforming assets requiring intervention.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Automated Reporting</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Schedule monthly/quarterly/annual reports emailed to stakeholders. Reports include consumption summaries, carbon emissions, year-on-year comparisons, target progress, and executive summaries. Reduces manual reporting effort by 80%+. Supports SECR, ESOS, CDP, GRESB, and internal ESG reporting. Export capabilities for detailed analysis (CSV, Excel, PDF).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Anomaly Detection & Alerts</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Machine learning algorithms detect abnormal consumption patterns—e.g. energy consumption 20% higher than expected for given weather conditions/occupancy. Automated alerts sent via email/SMS to facilities teams enabling immediate investigation. Detects equipment failures, metering errors, and operational issues within hours rather than discovering problems months later via invoices.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ESG Reporting Frameworks
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">SECR (Streamlined Energy & Carbon Reporting)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Mandatory annual disclosure of UK energy consumption and carbon emissions for large companies (&gt;250 employees or £36m turnover). Report must include: global energy consumption (kWh), UK energy consumption (kWh), associated carbon emissions (tonnes CO₂e), intensity metric (e.g. emissions per employee), and description of energy efficiency actions. Non-compliance results in Companies House filing rejection and potential penalties.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">ESOS (Energy Savings Opportunity Scheme)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Mandatory energy audits every 4 years for large undertakings (&gt;250 employees or £44m turnover). Audit must cover 90%+ of energy consumption, identify cost-effective energy-saving opportunities, and be conducted by Lead Assessor. Non-compliance results in financial penalties (£50,000-£100,000+). Phase 3 deadline: 5 December 2023 (many organisations are late—enforcement action ongoing). Continuous monitoring supports ESOS compliance by maintaining up-to-date energy data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">CDP (Carbon Disclosure Project)</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Voluntary disclosure of climate-related information to investors. Scored A-D (leadership to disclosure). Covers Scope 1, 2, 3 emissions, climate risks/opportunities, governance, and targets. Over 680 investors representing $130 trillion request CDP disclosure—increasingly expected for listed companies and large private firms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">GRESB (Global Real Estate Sustainability Benchmark)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Voluntary ESG assessment for real estate portfolios. Covers energy, carbon, water, waste, certifications, resilience, health & wellbeing, and stakeholder engagement. Scored 0-100 with star ratings (1-5 stars). Used by institutional investors for portfolio comparison and investment decisions. Participation demonstrates ESG leadership and may improve access to green finance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Portfolio-Level Sustainability Management
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Multi-site portfolios benefit most from centralised sustainability monitoring—identify underperforming assets, share best practices, and demonstrate portfolio-level progress. Portfolio dashboards aggregate data from all sites providing executive-level visibility.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Typical portfolio findings: 20-30% of sites account for 60-70% of carbon emissions (Pareto principle)—targeting underperformers delivers maximum impact. Similar buildings with vastly different consumption (5-floor office: 90 kWh/m²/year vs identical building: 140 kWh/m²/year)—investigate why and replicate best practices. Portfolio-level targets (e.g. 50% carbon reduction by 2030) with site-specific action plans ensure accountability and progress.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">ESOS compliant energy assessments</p>
                </Link>
                <Link to="/services/net-zero-roadmaps" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Net Zero Roadmaps</h3>
                  <p className="text-sm text-muted-foreground font-light">Carbon reduction strategies</p>
                </Link>
                <Link to="/services/smart-metering" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Metering</h3>
                  <p className="text-sm text-muted-foreground font-light">Automated consumption monitoring</p>
                </Link>
                <Link to="/services/smart-building-iot" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Building IoT</h3>
                  <p className="text-sm text-muted-foreground font-light">Real-time environmental monitoring</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Sustainability Monitoring Setup</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our sustainability specialists implement monitoring systems for single buildings and multi-site portfolios. We configure cloud platforms, integrate data sources, establish baselines, set targets, and provide ongoing reporting support. Contact us for a site-specific sustainability monitoring proposal.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Setup Proposal
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

export default SustainabilityMonitoring;
