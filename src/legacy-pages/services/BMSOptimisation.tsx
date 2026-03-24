"use client";

;
import Link from "next/link";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const BMSOptimisation = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "BMS Servicing & Optimisation" }
  ];

  const faqs = [
    {
      question: "What is BMS optimisation?",
      answer: "BMS optimisation involves reviewing and improving building management system programming, control strategies, sensor calibration, and alarm management. Optimisation reduces energy waste, improves comfort control, and enhances operational efficiency without replacing hardware. Most BMS systems operate at 40-60% of their potential—optimisation unlocks this wasted capability."
    },
    {
      question: "How does BMS optimisation differ from BMS servicing?",
      answer: "BMS servicing maintains existing functionality—checking hardware, replacing batteries, and responding to alarms. Optimisation improves functionality—rewriting control sequences, implementing advanced strategies (economisers, demand reset, optimum start), and tuning control loops for better performance. Optimisation delivers energy savings and comfort improvements; servicing maintains the status quo."
    },
    {
      question: "Can old BMS systems be optimised?",
      answer: "Yes, but capabilities depend on system age and complexity. Legacy BMS systems (10-20 years old) often lack advanced features but still benefit from improved scheduling, setpoint optimisation, and alarm rationalisation. Modern open-protocol BMS systems (BACnet, Lon Works) offer extensive optimisation potential. We assess BMS capability and recommend upgrades only when necessary."
    },
    {
      question: "What ROI can be expected from BMS optimisation?",
      answer: "Typical energy savings range from 10-25% with payback periods of 1-3 years. Buildings with poorly commissioned BMS systems achieve the highest savings. Comfort improvements and reduced maintenance callouts provide additional value. BMS optimisation is one of the most cost-effective energy efficiency interventions available."
    },
    {
      question: "How often should BMS systems be recommissioned?",
      answer: "Annually for optimal performance. BMS systems drift over time—setpoints are overridden, schedules are changed, and control logic becomes outdated. Annual recommissioning restores performance and identifies opportunities for continuous improvement. CIBSE guidance recommends annual BMS performance audits."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="BMS Servicing & Optimisation"
        description="BMS servicing and optimisation services for commercial estates across the UK. Improving building controls performance through controls tuning and strategy improvements."
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
                BMS Servicing & Optimisation
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Improving the way buildings breathe, heat and cool through enhanced controls performance. Engineering-led BMS optimisation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                The Untapped Potential of BMS Systems
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Building Management Systems control HVAC equipment, lighting, and building services across commercial estates. Despite this control capability, most BMS systems operate at 40-60% of their potential due to poor commissioning, outdated control strategies, and operational drift.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                BMS optimisation systematically improves control performance through advanced programming, sensor calibration, control loop tuning, and implementation of sophisticated strategies (weather compensation, demand reset, optimum start/stop). These improvements reduce energy waste by 10-25% without capital investment in plant or equipment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Optimisation Scope
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Control Loops & Tuning</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    PID (Proportional-Integral-Derivative) control loops regulate temperature, pressure, and flow across HVAC systems. Poorly tuned loops cause instability, overshoot, and excessive actuator wear. Loop tuning optimises P, I, and D parameters to achieve stable control with minimal energy consumption. Properly tuned loops reduce energy use by 5-15% and improve comfort.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Scheduling & Time Programming</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Reviewing occupancy schedules and implementing optimum start/stop algorithms. Optimum start calculates the latest possible plant start time to achieve comfort at occupancy—reducing unnecessary pre-heat/cool periods. Optimum stop shuts down plant early, exploiting thermal inertia. Combined savings typically range from 10-20% of heating/cooling energy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Trend Logs & Data Analysis</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Interrogating BMS historical data to identify operational inefficiencies—simultaneous heating/cooling, excessive runtime, equipment cycling, and setpoint drift. Trend log analysis reveals problems invisible during site inspections. Data-driven optimisation targets the most wasteful systems first, maximising ROI.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Sensor Calibration</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Testing and recalibrating temperature, humidity, pressure, and flow sensors. Sensor drift causes control errors—a +2°C temperature sensor error can increase heating energy by 15%. Regular sensor calibration (annually) ensures control accuracy and prevents waste.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Fire Interface Testing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Verifying BMS integration with fire alarm systems. When fire alarms activate, BMS systems must shut down AHUs, close dampers, and activate smoke extract. Testing confirms these interlocks function correctly—critical for life-safety compliance and regulatory requirements under BS 5839 and Building Regulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Advanced Control Strategies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Implementing weather compensation (adjusting heating/cooling based on outdoor temperature), demand-controlled ventilation (CO₂-based airflow modulation), and load shedding (reducing non-critical loads during peak demand). Advanced strategies reduce energy by 15-30% compared to fixed setpoint control.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                ROI from Optimisation
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Energy Savings:</span> 10-25% reduction in HVAC energy consumption. For a typical 10,000m² office building spending £100,000 annually on energy, savings range from £10,000-£25,000/year with 1-3 year payback.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Comfort Improvement:</span> Optimised controls deliver more stable temperatures, fewer hot/cold complaints, and improved IAQ. Comfort improvements reduce tenant complaints and enhance satisfaction.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Maintenance Reduction:</span> Properly tuned controls reduce equipment cycling, extend actuator life, and prevent premature failures. Maintenance savings typically represent 5-10% of energy savings.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Carbon Reduction:</span> Energy savings translate directly to carbon reductions. 20% energy saving = 20% carbon saving. Optimisation supports ESG targets and SECR reporting without capital investment.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                BMS Servicing vs Optimisation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">BMS Servicing</h3>
                  <ul className="text-sm text-muted-foreground font-light space-y-2">
                    <li>• Hardware checks and battery replacement</li>
                    <li>• Alarm response and fault rectification</li>
                    <li>• Basic setpoint adjustments</li>
                    <li>• Maintaining existing functionality</li>
                    <li>• Reactive maintenance approach</li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-medium mb-2">BMS Optimisation</h3>
                  <ul className="text-sm text-muted-foreground font-light space-y-2">
                    <li>• Control strategy improvement</li>
                    <li>• Energy savings through tuning</li>
                    <li>• Sensor calibration and validation</li>
                    <li>• Advanced algorithm implementation</li>
                    <li>• Performance improvement approach</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/energy-optimisation-advanced" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Advanced Energy Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light">Plant-level efficiency improvements</p>
                </Link>
                <Link href="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">System testing and commissioning</p>
                </Link>
                <Link href="/services/smart-building-iot" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Smart Building IoT</h3>
                  <p className="text-sm text-muted-foreground font-light">Continuous monitoring and analytics</p>
                </Link>
                <Link href="/services/ahu-fire-interlock-testing" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Fire Interlock Testing</h3>
                  <p className="text-sm text-muted-foreground font-light">Life-safety BMS integration testing</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request BMS Optimisation</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our controls engineers conduct BMS optimisation for commercial, industrial, and public sector estates. We support all major BMS platforms (Trend, Honeywell, Schneider, Johnson Controls, Siemens) and provide ongoing performance monitoring. Contact us for a site-specific proposal.
                </p>
                <Link href="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request BMS Optimisation
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

export default BMSOptimisation;
