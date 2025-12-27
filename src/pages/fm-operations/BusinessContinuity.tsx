import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { YouMayAlsoNeed } from "@/components/shared/YouMayAlsoNeed";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  AlertTriangle, 
  Zap, 
  FileText,
  ArrowRight,
  Phone
} from "lucide-react";

const BusinessContinuity = () => {
  const breadcrumbItems = [
    { label: "FM Operations", href: "/fm-operations" },
    { label: "Business Continuity & Resilience Planning" }
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: "System Redundancy",
      description: "N+1 configurations and backup plant ensuring service continuity"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Critical system identification and dependency mapping"
    },
    {
      icon: Zap,
      title: "Rapid Recovery",
      description: "Defined RTOs and emergency response procedures"
    },
    {
      icon: FileText,
      title: "Tested Plans",
      description: "Regular desktop exercises and live failover testing"
    }
  ];

  const faqs = [
    {
      question: "What is business continuity planning in an FM context?",
      answer: "Business continuity planning (BCP) ensures critical building systems and services continue operating during disruptions—equipment failures, supply interruptions, extreme weather, cyber attacks, or pandemics. FM-focused BCP identifies: Critical systems (power, HVAC, fire safety, access control, water supply), Single points of failure (no redundancy—backup generators, dual feeds, standby plant), Recovery time objectives (how quickly systems must be restored), Alternative provisions (temporary systems, emergency suppliers). BCP prevents operational shutdown, protects revenue, ensures occupant safety, and demonstrates regulatory compliance (Civil Contingencies Act 2004, ISO 22301)."
    },
    {
      question: "How do you identify critical building systems and dependencies?",
      answer: "Critical system identification considers: Operational impact (systems essential for business operation—IT cooling, production environments, life-safety), Regulatory requirements (fire alarms, emergency lighting, ventilation), Revenue protection (tenant-critical services, retail refrigeration, hospitality HVAC), Dependency mapping (interdependencies—BMS requires power, HVAC requires water). Risk assessment scores systems by: Likelihood of failure (age, condition, maintenance history), Impact of failure (safety, financial, reputational), Recovery complexity (parts availability, specialist skills, system redundancy). Critical systems receive: Enhanced PPM, Condition monitoring, Redundant configurations (N+1 plant, dual feeds), Emergency response prioritisation."
    },
    {
      question: "What is the role of redundancy in FM resilience?",
      answer: "Redundancy provides backup capacity ensuring service continuity during failures: N+1 configuration (one spare unit—if 3 chillers required, install 4), Dual utility feeds (electricity, water from independent sources), Standby generators (automatic changeover, fuel reserves for 24-72 hours), UPS systems (protect IT, life-safety systems during power transitions), Duty/standby plant (primary and backup boilers, pumps, AHUs). Redundancy increases capital cost but reduces downtime risk. Cost-benefit analysis determines appropriate redundancy levels—data centres require high redundancy (2N—fully duplicate systems), standard offices require minimal (single backup). Redundant systems must be maintained and tested regularly—untested backups often fail when needed."
    },
    {
      question: "How do you plan for supply chain disruptions affecting FM?",
      answer: "Supply chain resilience strategies: Critical spares inventory (stock high-value, long-lead-time parts—motors, control boards, pumps), Multi-supplier agreements (avoid single-source dependencies for consumables, fuels, services), Emergency procurement protocols (expedited delivery, alternative suppliers, temporary equipment hire), Standardisation (common equipment types across estate simplifies parts management), Supplier financial monitoring (early warning of supplier failure). Recent disruptions (COVID-19, Brexit, global supply chain issues) highlighted supply chain vulnerabilities. FM continuity requires: Supplier diversification, Strategic inventory, Emergency procurement capability, Flexibility in specifications (accept alternative but equivalent components)."
    },
    {
      question: "What testing and exercising is required for business continuity plans?",
      answer: "BCP testing ensures plans are effective and stakeholders are prepared: Desktop exercises (theoretical scenarios, decision-making review—annually), Live tests (simulate failures, test response procedures—critical systems tested annually), Component testing (generator load testing, UPS failover tests, BMS backup power—quarterly/bi-annually), Communication drills (test alert systems, escalation pathways, stakeholder notifications—annually), Post-incident reviews (analyze real events, update plans based on lessons learned). Testing identifies: Plan gaps (missing contact details, unclear procedures), Technical failures (backup systems not operational), Training needs (staff unfamiliar with emergency protocols). Untested plans fail during real incidents—regular testing is essential for resilience."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Continuity & Resilience Planning | FM Risk Management | EntireFM</title>
        <meta name="description" content="Business continuity and resilience planning aligned to asset risk, system resilience and estate operations. FM-focused continuity ensuring operational uptime and recovery capability." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Business Continuity & Resilience Planning"
        description="Continuity planning aligned to asset risk, system resilience and estate operations. FM-focused business continuity ensuring operational uptime and rapid recovery capability."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Business Continuity & Resilience Planning"
          description="Continuity planning aligned to asset risk, system resilience and estate operations. Ensuring operational uptime and rapid recovery capability."
          stats={[
            { value: "N+1", label: "Redundancy" },
            { value: "4hr", label: "Critical RTO" },
            { value: "ISO", label: "22301 Aligned" },
            { value: "24/7", label: "Emergency Response" }
          ]}
          primaryCTA={{
            label: "Request Assessment",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Emergency Support",
            href: "/services/emergency-response",
            icon: Phone
          }}
          backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        />

        {/* Key Features */}
        <section className="py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:border-primary/50 transition-colors hover-lift">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                
                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    FM Resilience: Beyond Emergency Response
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Business continuity planning ensures building systems continue operating during disruptions—equipment failures, supply interruptions, extreme weather events, or broader crises. While emergency response addresses immediate incidents, business continuity focuses on: Preventing failures (redundancy, preventative maintenance), Rapid recovery (backup systems, emergency procedures), Alternative provisions (temporary plant, emergency suppliers), Organizational resilience (training, testing, continuous improvement).
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    FM systems underpin operational continuity—power loss shuts down IT infrastructure, HVAC failure impacts production environments, water supply interruption affects healthcare and hospitality. Effective business continuity planning identifies critical dependencies, implements resilience measures, and tests recovery capability. This prevents: Revenue loss (operational downtime), Reputational damage (service failures), Regulatory action (failure to demonstrate due diligence), Insurance claims (preventable losses due to inadequate planning).
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Critical System Identification & Risk Assessment
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Asset Criticality Assessment</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Critical systems are those whose failure causes: Immediate safety risk (fire alarms, emergency lighting, smoke control), Operational shutdown (IT cooling, production HVAC, access control), Regulatory non-compliance (ventilation, water treatment, lift availability), Revenue loss (retail refrigeration, hospitality HVAC, manufacturing plant). Risk matrix scores systems by: Impact (safety, financial, reputational), Likelihood (based on age, condition, maintenance history), Recovery time (parts availability, repair complexity). High-impact, high-likelihood assets receive priority for redundancy and enhanced maintenance.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Dependency Mapping</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        System dependencies create cascading failures: Electrical failure disables BMS, HVAC, IT, access control, fire alarms (unless UPS-backed), Water failure impacts HVAC (chillers, cooling towers), sanitary facilities, fire suppression, Network failure disables BMS remote monitoring, access control, CCTV. Dependency mapping identifies single points of failure and informs resilience investments—backup power for critical systems, water storage for fire suppression continuity, cellular backup for network-dependent systems.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Recovery Time Objectives (RTO)</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        RTO defines maximum tolerable downtime for each system: Life-safety systems (immediate—0 hours), Critical operations (minimal—1-4 hours), Standard comfort systems (tolerable—24-48 hours), Non-critical systems (extended—5-10 days). RTO informs: Redundancy requirements (critical systems need N+1 or 2N configurations), Emergency response priorities (dispatch sequence based on RTO), Temporary provisions (portable generators, chillers, heaters for longer recoveries). RTO alignment with operational needs prevents over/under-investment in resilience.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Resilience Strategies & Technical Provisions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">Redundant Systems & Backup Plant</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Redundancy configurations: <strong>N+1</strong> (one spare—3 required, 4 installed), <strong>N+2</strong> (two spares—high-critical environments), <strong>2N</strong> (fully duplicate systems—data centres, hospitals), <strong>Duty/Standby</strong> (primary with tested backup). Examples: Standby generators (automatic changeover, fuel for 24-72 hours), UPS systems (protect IT, fire alarms, BMS during power transitions), Dual utility feeds (electricity, water from independent distribution networks), Redundant HVAC plant (multiple chillers, boilers, AHUs). Redundant systems require ongoing maintenance and regular testing—untested backups frequently fail when activated.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Emergency Procurement & Supplier Agreements</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Pre-qualified emergency suppliers for: Temporary plant hire (generators, chillers, boilers, heaters—delivered within 4-24 hours), Critical spares (motors, pumps, control boards—expedited delivery agreements), Emergency services (drainage clearance, electrical repairs, HVAC specialists—guaranteed callout), Fuel supplies (emergency diesel, gas, oil deliveries). Framework agreements ensure availability, transparent pricing, and priority service during crises. Multi-supplier relationships avoid single-source dependencies—critical during supply chain disruptions (COVID-19, Brexit, fuel crises).
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Preventative Measures & Enhanced Maintenance</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        Resilience through prevention: Critical spares inventory (stock high-value, long-lead-time components), Enhanced PPM frequency (critical assets inspected more frequently than standard schedules), Condition monitoring (vibration, thermography, oil analysis—predict failures before occurrence), Proactive replacement (assets nearing end-of-life replaced before failure). Prevention is more cost-effective than recovery—investment in PPM and condition monitoring reduces emergency response frequency and downtime costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Emergency Procedures & Response Plans
                  </h2>
                  <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">System Failure Response Plans</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Documented procedures for each critical system: Power failure (generator startup, load prioritisation, utility liaison), HVAC failure (temporary plant deployment, critical environment protection, occupant notification), Water supply interruption (emergency storage, temporary supplies, hygiene management), Fire system faults (fire watch procedures, emergency services notification, temporary provisions).
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Escalation & Communication Protocols</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Clear escalation pathways: Initial response (on-call engineer, immediate assessment), Management escalation (duty manager notified if incident critical or extended), Client communication (status updates, ETA for resolution, alternative provisions), Stakeholder coordination (tenants, emergency services, utilities, contractors). Communication templates and contact lists maintained in CAFM—ensuring rapid, accurate notifications during crises.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Training & Competency</h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Engineers trained in: Emergency procedures (system-specific response plans, safety protocols), Backup system operation (generator startup, UPS management, standby plant activation), Stakeholder communication (client notifications, emergency service liaison), Documentation (incident logging, evidence capture, reporting). Regular training ensures competent response during high-stress incidents—reducing decision-making errors and downtime.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                    Testing, Exercising & Continuous Improvement
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-4">
                    Business continuity plans require regular testing: Desktop exercises (annual—scenario-based discussions, decision-making review), Live drills (critical systems tested annually—generator failover, UPS transitions, backup plant activation), Component testing (quarterly/bi-annually—load bank testing, failover tests, emergency lighting), Post-incident reviews (analyze real events, update procedures, address gaps).
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Testing identifies: Plan deficiencies (missing procedures, outdated contact details), Technical failures (backup systems not operational, inadequate capacity), Training needs (staff unfamiliar with emergency protocols). Continuous improvement culture updates plans based on testing outcomes, industry incidents, and regulatory changes. Untested plans routinely fail during real incidents—organizations discover backup generators don't start, emergency suppliers cannot deliver, or staff lack competency to execute procedures.
                  </p>
                </div>

                <RelatedServices 
                  services={[
                    {
                      title: "Emergency Response",
                      description: "Critical incident management and priority response protocols",
                      link: "/services/emergency-response"
                    },
                    {
                      title: "Disaster Recovery",
                      description: "Major incident recovery services and business restoration",
                      link: "/services/disaster-recovery"
                    },
                    {
                      title: "Asset Lifecycle Planning",
                      description: "Condition-based forecasting and redundancy planning",
                      link: "/fm-operations/asset-lifecycle"
                    },
                    {
                      title: "FM Strategy",
                      description: "Strategic risk management and resilience consultancy",
                      link: "/fm-operations/fm-strategy"
                    }
                  ]}
                />

                <YouMayAlsoNeed 
                  services={[
                    {
                      title: "Power Redundancy Testing",
                      description: "N+1 validation and failover testing ensuring business continuity",
                      url: "/services/critical/power-redundancy"
                    },
                    {
                      title: "Generator Maintenance",
                      description: "Standby power PPM with load testing and fuel management",
                      url: "/services/critical/generator-maintenance"
                    },
                    {
                      title: "UPS Maintenance",
                      description: "Uninterruptible power supply testing and battery replacements",
                      url: "/services/critical/ups-maintenance"
                    }
                  ]}
                />

                <section>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h2 className="text-2xl font-light mb-4">Request Business Continuity Assessment</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-6">
                      Our business continuity service assesses critical systems, identifies vulnerabilities, and develops resilience strategies. We deliver tested plans ensuring operational continuity and rapid recovery from disruptions.
                    </p>
                    <Link 
                      to="/request-proposal" 
                      className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Request Continuity Assessment
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
        </section>
      </div>
    </>
  );
};

export default BusinessContinuity;
