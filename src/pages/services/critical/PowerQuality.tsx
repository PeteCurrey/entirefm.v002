import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Activity, TrendingUp, Zap, AlertTriangle } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { Button } from "@/components/ui/button";
import { RelatedServices } from "@/components/shared/RelatedServices";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
  { label: "Power Quality Analysis" }
];

const faqs = [
  {
    question: "What is Total Harmonic Distortion (THD)?",
    answer: "THD measures the distortion in electrical waveforms caused by non-linear loads like variable speed drives, UPS systems, and LED lighting. High THD causes overheating, equipment failure, and efficiency losses. IEEE 519 recommends THD below 5% for most commercial installations."
  },
  {
    question: "Why does poor power factor matter?",
    answer: "Low power factor means wasted energy and higher electricity bills. Many suppliers charge penalties for power factor below 0.95. More importantly, poor power factor stresses electrical infrastructure, reduces capacity, and can trip protection devices unexpectedly."
  },
  {
    question: "Can power quality issues damage IT equipment?",
    answer: "Yes. Voltage sags, harmonics, and transients cause server crashes, data corruption, and premature hardware failure. Data centres and IT-heavy environments require clean, stable power to maintain uptime and equipment longevity."
  },
  {
    question: "How often should power quality monitoring be performed?",
    answer: "Initial baseline surveys should be conducted when issues arise or before major electrical changes. Ongoing monitoring is recommended for critical facilities, with quarterly or annual reviews to identify degradation trends and validate corrective measures."
  }
];

const relatedServices = [
  {
    title: "Electrical Compliance",
    description: "Complete electrical testing, inspection, and certification programs.",
    link: "/services/electrical"
  },
  {
    title: "UPS Maintenance",
    description: "Uninterruptible power supply servicing and battery management.",
    link: "/services/critical/ups-maintenance"
  },
  {
    title: "Thermal Imaging",
    description: "Infrared surveys to detect electrical faults and overheating.",
    link: "/services/critical/thermal-imaging"
  },
  {
    title: "Arc Flash Assessment",
    description: "High-voltage and low-voltage electrical hazard quantification.",
    link: "/services/critical/arc-flash-assessment"
  },
  {
    title: "Generator Maintenance",
    description: "Backup power system servicing and power quality validation.",
    link: "/services/critical/generator-maintenance"
  },
  {
    title: "Data Room Audits",
    description: "Server room and data centre infrastructure compliance checks.",
    link: "/services/critical/data-room-audits"
  }
];

export default function PowerQuality() {
  return (
    <>
      <Helmet>
        <title>Power Quality Analysis (PF, THD & Voltage Stability)</title>
        <meta name="description" content="Power quality surveys identifying harmonic distortion, voltage sags, transients, and power factor issues. Corrective engineering to protect critical IT and electrical infrastructure." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Power Quality Analysis & Load Testing"
        description="Comprehensive electrical power quality surveys, harmonic analysis, power factor correction, and corrective engineering for mission-critical infrastructure."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Power Quality Analysis (PF, THD & Voltage Stability)
            </h1>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto">
              Identifying and correcting harmonic distortion, voltage instability, and power factor issues protecting critical systems.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Power Quality Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Modern electrical systems face power quality challenges that didn't exist a generation ago. Variable speed drives, 
                    switched-mode power supplies, LED lighting, and renewable energy sources introduce harmonic distortion, voltage fluctuations, 
                    and reactive power issues that degrade equipment performance and shorten lifespan.
                  </p>
                  <p>
                    Poor power quality manifests as unexplained equipment failures, nuisance tripping, overheating transformers, 
                    premature capacitor failure, and increased energy costs. For IT infrastructure, the consequences include server crashes, 
                    data corruption, and unplanned downtime.
                  </p>
                  <p>
                    Our power quality analysis identifies root causes, quantifies problems against industry standards (IEEE 519, EN 50160), 
                    and implements corrective engineering to restore clean, stable electrical supply.
                  </p>
                </div>
              </section>

              {/* Power Quality Issues */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Common Power Quality Issues
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Activity className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Harmonic Distortion</h3>
                    <p className="text-muted-foreground font-light">
                      Non-sinusoidal waveforms caused by non-linear loads. Creates overheating, neutral conductor overload, 
                      and interference with sensitive equipment. Measured as Total Harmonic Distortion (THD).
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <TrendingUp className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Voltage Sags & Swells</h3>
                    <p className="text-muted-foreground font-light">
                      Temporary voltage reductions or increases caused by load switching, motor starts, or grid events. 
                      Resets controls, crashes IT systems, and damages variable speed drives.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Power Factor Issues</h3>
                    <p className="text-muted-foreground font-light">
                      Reactive power from motors, transformers, and lighting reduces system capacity and increases bills. 
                      Power factor below 0.95 typically attracts supplier penalties.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <AlertTriangle className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Transients & Spikes</h3>
                    <p className="text-muted-foreground font-light">
                      High-frequency voltage spikes from lightning, switching operations, or equipment faults. 
                      Destroys electronics, corrupts data, and causes cascading failures in networked systems.
                    </p>
                  </div>
                </div>
              </section>

              {/* Survey Methodology */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Power Quality Survey Process
                </h2>
                <div className="space-y-6">
                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3">Phase 1: Baseline Monitoring</h3>
                    <p className="text-muted-foreground font-light mb-3">
                      We install calibrated power quality analysers at critical points throughout the electrical distribution system, 
                      typically for 7-14 days to capture daily, weekly, and load variation patterns.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Voltage and current waveform recording at 200 samples per cycle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Harmonic analysis up to 50th order (2.5kHz) per IEEE 519</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Power factor, reactive power, and demand profiling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Transient capture with sub-cycle time resolution</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3">Phase 2: Data Analysis</h3>
                    <p className="text-muted-foreground font-light mb-3">
                      Raw data is processed against international standards to identify non-compliances, quantify severity, 
                      and correlate issues with operational events or equipment behaviour.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>IEEE 519 harmonic limits for both voltage and current distortion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>EN 50160 voltage quality benchmarks for UK commercial supply</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Equipment compatibility assessment against recorded conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Financial impact quantification including energy waste and penalties</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3">Phase 3: Corrective Engineering</h3>
                    <p className="text-muted-foreground font-light mb-3">
                      Based on analysis findings, we design and implement targeted solutions to restore power quality within acceptable limits.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Harmonic filters (passive or active) sized for measured distortion levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Power factor correction systems with detuned capacitors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Voltage regulation equipment including AVRs or tap-changing transformers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Surge protection and transient suppression at sensitive loads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Neutral conductor upgrades for high harmonic current installations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Critical Applications */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Infrastructure Applications
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    <strong className="text-foreground">Data Centres:</strong> Server power supplies are highly non-linear loads creating significant 
                    harmonic currents. Poor power quality causes IT equipment failures, corrupted data, and reduced UPS runtime. 
                    We validate that data hall power meets ASHRAE and TIA-942 recommendations.
                  </p>
                  <p>
                    <strong className="text-foreground">Manufacturing:</strong> Variable speed drives controlling motors, conveyors, and process equipment 
                    generate harmonics while simultaneously being sensitive to voltage sags and transients. Power quality issues manifest 
                    as production stoppages, scrap, and equipment damage.
                  </p>
                  <p>
                    <strong className="text-foreground">Healthcare:</strong> Medical imaging equipment (MRI, CT scanners) creates power quality disturbances 
                    affecting other sensitive systems. Life-critical equipment requires stable, clean power with appropriate isolation and conditioning.
                  </p>
                  <p>
                    <strong className="text-foreground">Commercial Offices:</strong> Modern offices with extensive IT infrastructure, LED lighting, 
                    and HVAC controls face cumulative power quality degradation. This affects productivity (computer crashes), 
                    comfort (lighting flicker), and energy efficiency.
                  </p>
                </div>
              </section>

              {/* Benefits */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Benefits of Power Quality Improvement
                </h2>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <ul className="space-y-3 text-muted-foreground font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Reduced unplanned downtime from equipment trips and failures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Extended equipment lifespan by eliminating thermal stress and voltage strain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Lower energy costs through improved efficiency and eliminated power factor penalties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Increased system capacity without infrastructure upgrades</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Reduced insurance risk from electrical incidents and fire hazards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Compliance with equipment warranty requirements and industry standards</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Related Services */}
              <RelatedServices services={relatedServices} />

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />

              {/* CTA Section */}
              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-light mb-4">Concerned About Power Quality?</h2>
                <p className="text-muted-foreground mb-6 font-light max-w-2xl mx-auto">
                  Comprehensive surveys identifying harmonics, voltage issues, and power factor problems with corrective engineering solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">Request Power Quality Survey</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Discuss Your Issues</Link>
                  </Button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
