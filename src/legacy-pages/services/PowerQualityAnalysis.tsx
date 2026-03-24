"use client";

;
import Link from "next/link";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const PowerQualityAnalysis = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Power Quality Analysis" }
  ];

  const faqs = [
    {
      question: "What is considered 'good' power quality?",
      answer: "UK mains electricity should be 230V ±10% (207-253V) at 50Hz ±1% (49.5-50.5Hz) with voltage harmonic distortion <5% THD (Total Harmonic Distortion). Power factor should be >0.95 to avoid penalties from DNOs. Voltage sags should not exceed 10% depth more than a few times per year. Transients should be suppressed below 1kV peak. Most electronic equipment tolerates moderate deviations, but sensitive loads (IT, medical, process control) require tighter tolerances."
    },
    {
      question: "What causes poor power quality?",
      answer: "Harmonics: non-linear loads (VFDs, LED lighting, switch-mode power supplies). Voltage sags: motor starting, DNO faults, heavy load switching. Transients: lightning, switching operations, grid faults. Imbalance: uneven single-phase loads across three-phase supply. Poor power factor: inductive loads (motors) without correction. Electrical noise: high-frequency interference from equipment. Many issues originate from on-site equipment, not the utility supply."
    },
    {
      question: "How long should power quality monitoring be conducted?",
      answer: "Minimum 7 days to capture weekly load patterns. Ideally 4 weeks to capture monthly variations. Critical sites (hospitals, data centres) may require continuous monitoring. Monitoring should span typical operational conditions—avoid monitoring during shutdowns or abnormal operations. Longer monitoring periods increase detection of intermittent issues (infrequent voltage sags, transient events). We recommend 2-4 week surveys for comprehensive diagnostics."
    },
    {
      question: "Can poor power quality damage equipment?",
      answer: "Yes. Harmonics cause transformer/cable overheating, nuisance tripping, and premature equipment failure. Voltage sags cause control system resets, process interruptions, and motor stalling. Transients damage sensitive electronics (PLCs, servers, variable speed drives). Poor power factor increases electricity costs (DNO penalties) and cable losses. Cumulative effect is reduced equipment lifespan (10-30% reduction), increased maintenance costs, and operational disruption."
    },
    {
      question: "What is the typical cost to resolve power quality issues?",
      answer: "Depends on root cause. Harmonic filters: £2,000-£20,000 depending on size. Power factor correction: £1,000-£10,000. Voltage regulators: £3,000-£30,000. Load balancing: £500-£5,000 (circuit reconfiguration). Surge protection: £200-£2,000 per location. Most issues are resolved with <£10,000 investment. ROI is typically 1-3 years through reduced equipment failures, lower electricity costs (power factor penalties), and improved uptime."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Power Quality Analysis"
        description="Power quality analysis for commercial and industrial estates. Identifying harmonics, voltage dips, transients and electrical supply anomalies affecting critical plant performance."
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
                Power Quality Analysis
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Identifying harmonics, voltage dips and electrical supply anomalies affecting plant performance and causing equipment failures.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Beyond Voltage and Frequency
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Most facilities teams assume electrical power is either 'on' or 'off'—if voltage is present and equipment is running, the power supply is considered acceptable. However, modern electronic equipment (variable speed drives, IT systems, LED lighting, UPS systems) is sensitive to power quality disturbances invisible to basic voltage checks.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Harmonics, voltage sags, transients, and power factor issues cause nuisance tripping, equipment overheating, premature failures, and process interruptions. These problems are often misdiagnosed as equipment faults when the root cause is poor power quality. Power quality analysis using specialist monitoring equipment identifies these issues, enabling targeted remediation and preventing costly downtime.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Power Quality Parameters
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Voltage Harmonics (THD)</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Harmonics are distortions of the sinusoidal voltage waveform caused by non-linear loads—variable speed drives, LED lighting, switch-mode power supplies, UPS systems. Harmonics cause transformer/cable overheating, neutral conductor overloading, nuisance tripping, and premature equipment failure. UK/EU standard: voltage THD &lt;5%, current THD &lt;15%. Mitigation: harmonic filters, oversized neutrals, K-rated transformers. Particularly problematic in buildings with high VFD/LED usage (offices, data centres, industrial).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Voltage Sags & Swells</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Voltage sags (dips) are short-duration voltage reductions (10-90% drop) lasting 0.5 cycles to 1 minute. Causes: motor starting, grid faults, heavy load switching. Effects: control system resets, process interruptions, lighting flicker, motor stalling. Voltage swells are less common but equally damaging. Mitigation: voltage regulators, UPS systems, soft-starters for motors, improved supply infrastructure. Critical for hospitals, data centres, industrial process control.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Transients & Surges</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Transients are very short-duration voltage spikes (microseconds to milliseconds) reaching 1kV-10kV+ peak. Causes: lightning strikes, capacitor bank switching, motor/transformer switching, grid operations. Effects: damage to sensitive electronics (PLCs, servers, variable speed drives), data corruption, system lockups. Mitigation: surge protection devices (SPDs), transient voltage surge suppressors (TVSS), isolation transformers. Essential for IT infrastructure, medical equipment, process control systems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Power Factor</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Power factor measures how effectively electrical power is converted to useful work. Inductive loads (motors, transformers, fluorescent lighting) cause lagging power factor, increasing electricity costs and cable losses. UK DNOs charge penalties for power factor &lt;0.95. Mitigation: power factor correction capacitors, synchronous condensers, active PFC systems. Typical improvement: 0.70 → 0.95 PF reduces electricity costs by 5-10% and eliminates DNO penalties. Payback: 1-3 years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Voltage Imbalance</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Three-phase supplies should have equal voltage on all phases (within 2%). Imbalance causes motor overheating, increased neutral current, and reduced equipment lifespan. Causes: uneven single-phase loads (office equipment, lighting) across three phases, poor load distribution, single-phase faults. Mitigation: load balancing, phase redistribution, neutral conductor upgrades. Imbalance &gt;5% can reduce motor lifespan by 20-30%.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Frequency Variation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    UK mains frequency should be 50Hz ±1% (49.5-50.5Hz). Deviations indicate grid instability or generator issues. Frequency variations affect motor speed, clock accuracy, and sensitive electronics. Normally not an issue for grid-connected buildings but critical for sites with standby generators (hospitals, data centres). Generator frequency stability should be ±0.5Hz under steady load. Poor frequency regulation indicates governor/AVR faults requiring immediate attention.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Power Quality Monitoring Process
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">1. Survey Planning</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Identify critical loads, supply points, and monitoring locations. Review electrical drawings, equipment specifications, and operational schedules. Define monitoring duration (typically 7-28 days) and parameters (voltage, current, harmonics, power factor, transients). Obtain safe access to electrical distribution boards and switchgear.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">2. Instrument Installation</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Install Class A power quality analysers at main incomer, distribution boards, and critical load circuits. Current measurement via clamp-on CTs (non-invasive), voltage measurement via flying leads or permanent taps. Equipment continuously logs all electrical parameters at high resolution (sub-cycle capture for transients). Installation takes 1-4 hours depending on site complexity.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">3. Data Collection & Analysis</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Monitor for 1-4 weeks capturing typical operational patterns. Data is downloaded and analysed using specialist software (Fluke Power Analyze, Dranetz PP4000, etc.). Identify voltage/frequency deviations, harmonic content, power factor, transients, and imbalance. Compare against BS EN 50160 (voltage characteristics) and IEEE 519 (harmonic limits). Generate statistical summaries and event logs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">4. Reporting & Recommendations</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Comprehensive report detailing findings, non-compliances, and remedial recommendations. Prioritised action plan with cost estimates and ROI analysis. Typical recommendations: harmonic filters, power factor correction, voltage regulators, surge protection, load balancing. Report delivered within 10 working days of monitoring completion. Follow-up support available for implementation.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Critical Applications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Data Centres</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    IT equipment is extremely sensitive to voltage sags (causing server resets), harmonics (UPS failures), and transients (hardware damage). Power quality issues cause downtime costing £5,000-£50,000+ per hour. Power quality monitoring is essential pre-commissioning (validate supply quality) and ongoing (detect degradation). Tier III/IV data centres mandate continuous power quality monitoring as part of operational requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Healthcare Facilities</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Medical equipment (MRI scanners, CT scanners, life support systems) requires clean, stable power. Voltage sags/transients cause equipment malfunctions, diagnostic errors, and patient safety risks. HTM 06-01 (electrical services in healthcare premises) recommends power quality monitoring for critical medical equipment supplies. Isolation transformers and dedicated UPS systems often required for sensitive loads.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Industrial Manufacturing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Process control systems (PLCs, SCADA, variable speed drives) are sensitive to voltage sags and transients. Production line stoppages cost £1,000-£100,000+ per hour depending on industry. Power quality issues cause product defects (incorrect process parameters), equipment damage (drive failures), and safety incidents (unexpected shutdowns). Monitoring identifies issues before they cause costly disruption.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Compliance & Standards
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    <strong>BS EN 50160:</strong> Voltage characteristics of electricity supplied by public distribution systems. Defines acceptable voltage levels, frequency, harmonics, and interruptions. Used as benchmark for power quality compliance in UK/EU.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                <strong>IEEE 519:</strong> Recommended practice for harmonic control in electrical power systems. Defines harmonic distortion limits for voltage (THD &lt;5%) and current (THD &lt;15%). Widely used in industrial/commercial applications.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                <strong>HTM 06-01:</strong> Healthcare technical memorandum covering electrical services in healthcare premises. Recommends power quality monitoring for critical medical equipment and standby power systems. Mandatory for NHS estates.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/electrical-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Electrical Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">EICR testing and electrical safety</p>
                </Link>
                <Link href="/services/thermal-imaging-surveys" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Thermal Imaging Surveys</h3>
                  <p className="text-sm text-muted-foreground font-light">Electrical hotspot detection</p>
                </Link>
                <Link href="/services/ups-maintenance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">UPS Maintenance</h3>
                  <p className="text-sm text-muted-foreground font-light">Uninterruptible power systems</p>
                </Link>
                <Link href="/services/generator-maintenance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Generator Maintenance</h3>
                  <p className="text-sm text-muted-foreground font-light">Standby power testing</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Power Quality Survey</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our chartered electrical engineers conduct power quality surveys for commercial, industrial, and healthcare estates using Class A monitoring equipment. We provide comprehensive reports with prioritised remedial recommendations and ROI analysis. Contact us for a site-specific survey proposal.
                </p>
                <Link href="/request-proposal" 
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

export default PowerQualityAnalysis;
