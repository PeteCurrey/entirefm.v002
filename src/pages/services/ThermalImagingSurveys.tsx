import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const ThermalImagingSurveys = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Thermal Imaging Surveys" }
  ];

  const faqs = [
    {
      question: "What temperature differences can thermal cameras detect?",
      answer: "Modern thermal imaging cameras detect temperature differences as small as 0.05°C (thermal sensitivity). This allows identification of subtle electrical hotspots, minor insulation gaps, and early-stage bearing failures. Cameras used for building diagnostics typically operate in the 8-14μm infrared spectrum and measure temperatures from -20°C to +350°C, covering all building fabric and electrical applications."
    },
    {
      question: "Can thermal imaging detect electrical faults before failure?",
      answer: "Yes. Electrical connections degrade gradually—oxidation, loose terminations, and overloading cause resistance increases, which generate heat. Thermal imaging detects these hotspots months before catastrophic failure. A 10°C temperature rise above ambient suggests developing fault; 20°C+ rise indicates imminent failure risk. Surveys prevent fires, electrical shutdowns, and equipment damage. Recommended annually for critical electrical infrastructure."
    },
    {
      question: "When should thermal imaging surveys be conducted?",
      answer: "For electrical surveys: during normal operational load (ideally 60-80% capacity) to reveal thermal anomalies under realistic conditions. For building fabric surveys: during heating season with minimum 10°C indoor/outdoor temperature differential to maximise contrast. Wind, rain, and direct sunlight affect results—surveys should avoid these conditions. Early morning (pre-sunrise) is ideal for external fabric surveys."
    },
    {
      question: "Is thermal imaging disruptive to building operations?",
      answer: "No. Thermal imaging is non-contact and non-invasive. Electrical surveys are conducted during normal operation without shutdowns or disconnections. Building fabric surveys require internal and external access but do not require building closure. Surveys typically take 2-8 hours depending on building size. Results are available within 5-10 working days with prioritised remedial recommendations."
    },
    {
      question: "What is the ROI for thermal imaging surveys?",
      answer: "Electrical surveys prevent catastrophic failures costing £10,000-£100,000+ (equipment replacement, downtime, fire damage). Building fabric surveys identify insulation defects saving 10-25% on heating costs annually. HVAC surveys optimise plant performance reducing maintenance costs by 15-30%. Typical survey cost: £800-£3,000. Single prevented failure pays for 10+ years of annual surveys. Highly cost-effective risk management."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Thermal Imaging Surveys | Electrical & Building Diagnostics | EntireFM</title>
        <meta name="description" content="Thermal imaging surveys identifying hidden electrical, building fabric and HVAC inefficiencies using infrared diagnostics. Prevent failures and reduce energy waste." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Thermal Imaging Surveys"
        description="Thermal imaging surveys for commercial estates across the UK. Identifying electrical hotspots, insulation defects, air leakage, and HVAC inefficiencies using infrared diagnostics."
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
                Thermal Imaging Surveys
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Identifying hidden electrical, building fabric and HVAC inefficiencies using infrared diagnostics to prevent failures and reduce energy waste.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Beyond Visual Inspection
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Many building defects are invisible to the human eye—electrical connections degrade internally, insulation fails behind walls, and HVAC systems waste energy through hidden air leakage. These problems cause equipment failure, energy waste, and occupant discomfort, yet remain undetected until catastrophic failure occurs.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Thermal imaging cameras detect infrared radiation (heat) emitted by objects, revealing temperature patterns invisible to visual inspection. Electrical hotspots, insulation gaps, water ingress, and HVAC inefficiencies are immediately apparent. This non-contact, non-invasive technology enables predictive maintenance—identifying faults months before failure, preventing costly downtime and safety incidents.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Electrical Thermography
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Electrical failures are a leading cause of commercial building fires and unplanned shutdowns. Poor connections, overloaded circuits, and component degradation generate excess heat—thermal imaging detects these anomalies before failure occurs.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Electrical Distribution Boards</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Thermal surveys identify loose connections, overloaded circuits, and faulty breakers. A 10°C temperature rise above baseline suggests developing fault; 20°C+ indicates imminent failure risk. Early detection prevents electrical fires (insurance claims averaging £50,000-£500,000+), equipment damage, and business interruption. Recommended annually for critical electrical infrastructure, every 3 years for general estate.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">High Voltage Switchgear</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    HV switchgear failures cause catastrophic damage—transformer explosions, prolonged outages (days/weeks), and costs exceeding £100,000+. Thermal imaging detects insulator degradation, busbar hotspots, and contact resistance increases. Surveys are conducted using specialist long-distance thermal cameras (safe working distance from HV equipment). Mandatory for DNO compliance in many contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Motor Control Centres</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    MCCs supply motors for HVAC, pumps, lifts, and industrial plant. Thermal surveys identify starter contact degradation, cable termination faults, and motor overheating. Early detection prevents motor burnout (replacement costs £2,000-£20,000+ per motor) and unplanned production/HVAC shutdowns. Particularly critical for 24/7 operations (data centres, hospitals, industrial).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Electrical Connections & Terminations</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Loose or corroded electrical terminations cause 60%+ of electrical failures. Thermal imaging detects these faults immediately—a glowing hotspot indicates high-resistance connection. Surveys cover busbar connections, cable terminations, isolators, and MCBs. Remedial action is typically simple (re-torque connections) and inexpensive (£50-£200 per fault) but prevents failures costing £5,000-£50,000+.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Building Fabric Thermography
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Heat loss through building fabric accounts for 30-50% of heating energy in commercial buildings. Insulation defects, air leakage, and thermal bridging waste energy and cause occupant discomfort (cold spots, draughts). Thermal imaging identifies these defects for targeted remediation.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Insulation Defects</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Missing or degraded insulation appears as warm (external view) or cold (internal view) areas on thermal images. Common in roof spaces (insulation displacement by contractors), wall cavities (settlement, water damage), and around penetrations (pipes, cables). Targeted insulation improvements reduce heating costs by 10-25% with payback periods of 2-5 years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Air Leakage</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Uncontrolled air leakage (infiltration/exfiltration) wastes heating/cooling energy and causes occupant discomfort. Thermal imaging conducted during blower door testing (building pressurised/depressurised) reveals leak paths—gaps around windows, doors, service penetrations, and construction joints. Sealing air leaks reduces heating/cooling demand by 15-30% and improves occupant comfort. Particularly effective in older buildings with poor airtightness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Thermal Bridging</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Thermal bridges (steel beams, concrete columns, lintels) bypass insulation, causing localised heat loss and cold spots. This wastes energy and can cause condensation/mould growth. Thermal imaging identifies thermal bridges for targeted insulation improvement (insulated plasterboard, external insulation). Particularly problematic in steel-framed buildings and buildings with cantilevered balconies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Water Ingress & Dampness</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Water ingress causes insulation failure, structural damage, and mould growth. Damp areas have different thermal properties—they appear cooler on thermal images due to evaporative cooling. Thermal imaging identifies hidden water leaks (roofs, gutters, pipework) and rising damp. Early detection prevents costly damage (£10,000-£100,000+ for major roof/facade repairs) and protects occupant health (mould exposure).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                HVAC System Diagnostics
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                HVAC systems waste energy through poor insulation, air leakage, and component failures. Thermal imaging identifies these inefficiencies for targeted improvement.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Ductwork Insulation Failures</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Uninsulated or poorly insulated ductwork wastes heating/cooling energy—warm air loses heat in winter, cool air gains heat in summer. Thermal imaging identifies insulation gaps (displaced, damaged, missing) and thermal bridging (metal support brackets). Ductwork insulation improvements typically deliver 10-20% HVAC energy savings with 2-4 year payback periods.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Steam & Hot Water Pipe Insulation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Uninsulated pipework causes massive heat loss—1 metre of uninsulated 100mm steam pipe wastes £500+ annually. Thermal imaging identifies insulation defects (missing, damaged, degraded) for targeted remediation. Steam systems, hot water heating, and chilled water systems all benefit. Payback periods are typically 6-18 months. Insurance companies may mandate pipe insulation surveys for fire risk reduction (hot pipes near combustibles).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Refrigeration & Cooling Systems</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Thermal imaging detects refrigerant leaks (cold spots on pipework), compressor bearing failures (excessive heat), and condenser fouling (uneven temperatures). Early detection prevents catastrophic failures (compressor replacement £5,000-£50,000+), reduces refrigerant top-ups (environmental impact, cost), and improves system efficiency (10-20% energy reduction through fault correction).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Compliance & Insurance Requirements
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Many insurance policies require or recommend periodic thermal imaging surveys as part of risk management programmes. Electrical thermography reduces fire risk (insurers may offer premium discounts), and building fabric surveys demonstrate energy efficiency compliance (MEES, EPC regulations).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                BS 7671 (18th Edition Wiring Regulations) does not mandate thermal imaging, but IET Guidance Note 3 recommends it for maintenance regimes. BS 8469:2016 specifically covers fixed electrical installations inspection using thermal imaging. Many large estates (government, NHS, education) mandate periodic thermal surveys as best practice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/services/electrical-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Electrical Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">EICR testing and electrical safety</p>
                </Link>
                <Link to="/services/energy-audits" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Energy Audits</h3>
                  <p className="text-sm text-muted-foreground font-light">Building performance assessments</p>
                </Link>
                <Link to="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Plant testing and commissioning</p>
                </Link>
                <Link to="/services/building-inspections" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Building Inspections</h3>
                  <p className="text-sm text-muted-foreground font-light">Comprehensive building surveys</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Thermal Imaging Survey</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our chartered engineers conduct thermal imaging surveys for electrical systems, building fabric, and HVAC plant across commercial, industrial, and public sector estates. We provide comprehensive reports with prioritised remedial recommendations and ROI analysis. Contact us for a site-specific survey proposal.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Survey Quote
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

export default ThermalImagingSurveys;
