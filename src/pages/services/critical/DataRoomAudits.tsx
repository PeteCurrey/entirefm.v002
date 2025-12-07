import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Server, Thermometer, Shield, Zap } from "lucide-react";
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
  { label: "Data Room Compliance Audits" }
];

const faqs = [
  {
    question: "What's the difference between a data room and a data centre?",
    answer: "Data rooms are smaller-scale IT spaces within commercial buildings, typically 50-500 sqm. Data centres are purpose-built facilities with Tier-rated infrastructure, extensive redundancy, and carrier-neutral connectivity. However, compliance requirements around power, cooling, and fire safety apply equally to both."
  },
  {
    question: "How often should data room audits be performed?",
    answer: "Annual comprehensive audits are recommended for most environments. High-availability operations or sites with regulatory requirements (financial services, healthcare) may need six-monthly reviews. Post-incident audits should occur after any significant failure or near-miss event."
  },
  {
    question: "Can poor data room infrastructure affect IT performance?",
    answer: "Absolutely. Inadequate cooling causes thermal throttling reducing server performance. Power quality issues create crashes and data corruption. Poor airflow management wastes energy and shortens equipment lifespan. These problems are often blamed on IT hardware when the root cause is environmental."
  },
  {
    question: "Do you audit both infrastructure and IT equipment?",
    answer: "We focus on the infrastructure supporting IT operations: power distribution, UPS systems, cooling, fire suppression, environmental monitoring, and physical security. We don't audit server configurations or network architecture unless it impacts infrastructure resilience."
  }
];

const relatedServices = [
  {
    title: "UPS Maintenance",
    description: "Uninterruptible power supply servicing and battery management for data rooms.",
    link: "/services/critical/ups-maintenance"
  },
  {
    title: "HVAC Compliance",
    description: "Cooling system maintenance and environmental control for server rooms.",
    link: "/services/hvac"
  },
  {
    title: "Electrical Compliance",
    description: "Complete electrical testing ensuring reliable power distribution to IT loads.",
    link: "/services/electrical"
  },
  {
    title: "Fire Suppression Systems",
    description: "Gaseous fire suppression (Novec, FM-200) protecting critical IT infrastructure.",
    link: "/services/fire-suppression-systems"
  },
  {
    title: "Thermal Imaging",
    description: "Infrared surveys detecting electrical hotspots in data room power distribution.",
    link: "/services/critical/thermal-imaging"
  },
  {
    title: "Power Redundancy",
    description: "Load bank testing and Black Building simulations validating backup power capacity.",
    link: "/services/critical/power-redundancy"
  }
];

export default function DataRoomAudits() {
  return (
    <>
      <Helmet>
        <title>Data Room Compliance Audits & Power Resilience</title>
        <meta name="description" content="Comprehensive data room and server room infrastructure audits covering power resilience, cooling adequacy, fire suppression, and environmental monitoring compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Data Room & Server Room Compliance Audits"
        description="Infrastructure audits for data rooms and server rooms ensuring power resilience, cooling adequacy, fire safety, and environmental compliance."
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
              Data Room Compliance Audits & Power Resilience
            </h1>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto">
              Infrastructure assessments ensuring power resilience, environmental control, and fire safety for mission-critical IT operations.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Data Room Audits Matter
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
                  <p>
                    Data rooms are often afterthoughts in commercial buildings—repurposed offices or storage spaces converted to house servers 
                    without proper infrastructure planning. Unlike purpose-built data centres, these environments frequently lack adequate cooling, 
                    power redundancy, environmental monitoring, or fire suppression appropriate for high-density IT equipment.
                  </p>
                  <p>
                    The consequences manifest as equipment failures blamed on "faulty hardware" when the real cause is thermal stress from poor airflow, 
                    power quality issues from overloaded circuits, or condensation from inadequate environmental control. Insurance claims are rejected 
                    because "the data room wasn't fit for purpose." Business continuity plans fail because backup power systems were never tested under load.
                  </p>
                  <p>
                    Our data room audits identify infrastructure deficiencies before they cause downtime, data loss, or equipment damage. 
                    We provide a comprehensive assessment against industry best practices (ASHRAE, TIA-942, EN 50600) with prioritised remediation plans.
                  </p>
                </div>
              </section>

              {/* Audit Components */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  What We Audit
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Power Resilience</h3>
                    <p className="text-muted-foreground font-light">
                      UPS capacity, backup generator integration, power distribution redundancy, and single points of failure in the electrical supply chain.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Thermometer className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Cooling & HVAC</h3>
                    <p className="text-muted-foreground font-light">
                      Cooling capacity vs heat load, airflow management, hot/cold aisle containment, precision CRAC/CRAH adequacy, and temperature/humidity control.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Fire Suppression</h3>
                    <p className="text-muted-foreground font-light">
                      Gaseous suppression systems (Novec, FM-200), detection adequacy, equipment shutdown interlocks, and emergency response procedures.
                    </p>
                  </div>
                  <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                    <Server className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-xl font-medium mb-2">Environmental Monitoring</h3>
                    <p className="text-muted-foreground font-light">
                      Temperature/humidity sensors, leak detection, air quality monitoring, alerting systems, and 24/7 monitoring capabilities.
                    </p>
                  </div>
                </div>
              </section>

              {/* Detailed Assessment Areas */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Comprehensive Assessment Areas
                </h2>
                <div className="space-y-6">
                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Power Chain Resilience
                    </h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">UPS Capacity Analysis:</strong> Validate UPS sizing against current and projected IT load. 
                          Identify inadequate runtime, battery degradation, and maintenance requirements. Review bypass arrangements and failure modes.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">PDU Distribution:</strong> Assess power distribution unit capacity, redundancy, 
                          and circuit protection. Check for overloaded phases, inadequate monitoring, and poor cable management creating fire risks.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Generator Integration:</strong> Verify automatic transfer switch operation, 
                          generator start procedures, load acceptance capacity, and fuel management for extended outages.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Single Points of Failure:</strong> Identify critical components without redundancy 
                          (single circuit breaker feeding entire room, single UPS module, single cooling unit) creating unacceptable downtime risk.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                      <Thermometer className="w-5 h-5 text-primary" />
                      Cooling & Environmental Control
                    </h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Heat Load Calculation:</strong> Measure actual heat generation vs cooling capacity. 
                          ASHRAE recommends 18-27°C and 40-60% RH. Many data rooms operate outside these parameters causing reliability issues.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Airflow Management:</strong> Assess hot/cold aisle containment, blanking panels, 
                          under-floor plenum effectiveness, and short-cycling preventing proper cooling. Poor airflow wastes energy and creates hotspots.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Precision Cooling:</strong> Evaluate CRAC/CRAH units for capacity, redundancy, 
                          maintenance records, and failure alerting. Office-grade AC units are inadequate for 24/7 server room cooling.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Condensation Risk:</strong> Identify cold spots, inadequate insulation, 
                          or humidity control failures creating condensation that shorts electrical equipment.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Fire Safety & Suppression
                    </h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Suppression System Type:</strong> Data rooms require gaseous suppression 
                          (Novec, FM-200, Inergen) not water sprinklers that destroy servers. Verify coverage, discharge tests, and agent levels.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Early Warning Detection:</strong> VESDA (Very Early Smoke Detection Apparatus) 
                          or aspirating systems detect smoke before visible fire, allowing intervention before suppression discharge.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Equipment Shutdown:</strong> BMS interlocks to shut down cooling/ventilation 
                          when fire detected, preventing smoke spread while maintaining server protection.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Cable Management:</strong> Assess fire load from cable density, 
                          plenum-rated cable requirements, and cable tray segregation preventing ignition sources.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/20 border border-border/50 rounded-lg p-6">
                    <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary" />
                      Monitoring & Physical Security
                    </h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Environmental Sensors:</strong> Multiple temperature/humidity sensors at different heights, 
                          leak detection under raised floors, and alerting systems providing 24/7 monitoring with escalation procedures.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Access Control:</strong> Appropriate physical security preventing unauthorised access, 
                          visitor logging, CCTV coverage, and segregation from general building areas.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Leak Detection:</strong> Water ingress from cooling systems, plumbing, or roof leaks 
                          requires detection before damaging equipment. Many data rooms lack adequate monitoring.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Documentation:</strong> As-built drawings, equipment manuals, maintenance schedules, 
                          emergency procedures, and contact lists maintained and accessible to operations teams.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Deliverables */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Audit Deliverables
                </h2>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-muted-foreground font-light mb-4">
                    You receive a comprehensive audit report including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Executive summary highlighting critical risks and immediate actions required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Detailed findings across power, cooling, fire safety, monitoring, and physical security</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Risk-prioritised remediation plan with cost estimates and implementation timeframes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Compliance mapping against TIA-942, EN 50600, and ASHRAE thermal guidelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Load capacity analysis showing current utilisation vs future growth headroom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-medium">✓</span>
                      <span>Photographic evidence and thermal imaging where relevant to support findings</span>
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
                <h2 className="text-2xl font-light mb-4">Audit Your Data Room Infrastructure</h2>
                <p className="text-muted-foreground mb-6 font-light max-w-2xl mx-auto">
                  Comprehensive assessments identifying risks to uptime, equipment, and data before failures occur.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">Request Data Room Audit</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Discuss Your Setup</Link>
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
