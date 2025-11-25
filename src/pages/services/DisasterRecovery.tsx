import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";

const DisasterRecovery = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Estate Disaster Recovery Services" }
  ];

  const faqs = [
    {
      question: "What constitutes a disaster requiring FM recovery services?",
      answer: "FM disasters are major events causing significant building damage or system destruction: Fire (structural damage, smoke contamination, electrical/HVAC destruction), Flood (water ingress from storms, burst pipes, drainage failures), Impact damage (vehicle strikes, structural collapse, facade failures), Explosion (gas leaks, pressure vessel failures, industrial accidents), Extreme weather (storm damage, lightning strikes, freeze damage). Recovery differs from emergency response—disasters require: Extensive remediation (decontamination, structural repair, system replacement), Multi-disciplinary coordination (insurers, loss adjusters, contractors, regulators), Extended timescales (weeks to months vs hours to days), Temporary provisions (alternative premises, temporary systems). Disaster recovery restores buildings to operational status after catastrophic events."
    },
    {
      question: "What is the FM role in fire damage recovery?",
      answer: "Fire damage recovery includes: Initial make-safe (structural stabilisation, weather protection, security), Damage assessment (building survey, asset loss inventory, cost estimation), Decontamination (smoke cleaning, odor removal, water damage drying), System replacement (electrical rewiring, HVAC installation, fire alarm renewal), Testing and commissioning (full functional testing before reoccupation), Certification (electrical, fire, gas certificates for insurance/regulatory sign-off). Fire damage is complex—heat damages structure, smoke contaminates surfaces, water from firefighting causes secondary damage. Recovery requires coordination with insurers, loss adjusters, building control, and specialist contractors (fire investigation, structural engineers, decontamination specialists)."
    },
    {
      question: "How do you manage flood recovery and water damage?",
      answer: "Flood recovery process: Emergency water extraction (prevent escalation—mold growth within 24-48 hours), Structural drying (industrial dehumidifiers, air movers—typically 2-4 weeks), Damage assessment (building fabric, electrical systems, HVAC equipment flooded), Contamination testing (sewage-contaminated water requires biohazard protocols), System replacement (flood-damaged electrical, mechanical plant written off), Mold remediation (HVAC ductwork, fabric, furnishings). Flood damage is often underestimated—electrical systems may appear functional but have hidden water ingress causing delayed failures. Insurance claims require evidence (photographs, moisture readings, asset loss schedules) and professional loss adjustment."
    },
    {
      question: "What temporary provisions are used during disaster recovery?",
      answer: "Temporary systems enable partial operations during recovery: Portable generators (provide power while permanent systems repaired), Temporary boilers/chillers (maintain HVAC service during plant replacement), Portable welfare units (sanitary facilities if plumbing damaged), Temporary access scaffolding (provide safe access for repairs), Drying equipment (dehumidifiers, air movers for water damage), Temporary security (boarding, fencing, CCTV for damaged buildings). Temporary provisions allow: Partial occupancy (protect revenue, maintain tenant services), Accelerated recovery (works proceed while operations continue), Asset protection (weatherproofing prevents further damage). Temporary system costs are usually recoverable through insurance business interruption claims."
    },
    {
      question: "How do you coordinate with insurers and loss adjusters?",
      answer: "Insurance coordination is critical for disaster recovery: Immediate notification (inform insurer within policy terms—typically 24-48 hours), Emergency mitigation (make-safe works to prevent further loss—pre-approved by insurers), Loss adjuster liaison (provide damage evidence, cost estimates, recovery plans), Documentation (photographs, asset loss schedules, remediation specifications), Contractor selection (insurer-approved contractors or competitive tender), Cost control (regular reporting, variation management, final account reconciliation). Poor insurance coordination delays recovery and reduces claim settlements. FM providers act as client representative—ensuring technical quality, cost control, and timely completion while satisfying insurer requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Estate Disaster Recovery Services | Fire Flood Impact Damage | EntireFM</title>
        <meta name="description" content="Estate disaster recovery services for fire, flood, impact damage and major system failures. Structural, building services and system recovery with insurance coordination." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Estate Disaster Recovery Services"
        description="Structural, building services and system recovery after fire, flood, impact damage or major breakdown. Coordinated disaster recovery with insurance liaison and temporary provisions."
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
                Estate Disaster Recovery Services
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Structural, building services and system recovery after fire, flood, impact damage or major breakdown.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Disaster Recovery: Restoring Operations After Catastrophic Events
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Disaster recovery addresses major building damage requiring extensive remediation—fire, flood, structural failure, or system destruction. Unlike emergency response (immediate fault resolution), disaster recovery involves: Extended timescales (weeks to months), Multi-disciplinary coordination (insurers, regulators, contractors), Significant capital expenditure (system replacement, structural repair), Temporary provisions (alternative premises, interim systems). Disasters cause operational shutdown, revenue loss, and business disruption—effective recovery minimises downtime and restores functionality.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                FM providers coordinate disaster recovery through: Initial make-safe (structural stabilisation, weatherproofing, security), Damage assessment (survey, asset loss quantification, cost estimation), Insurance liaison (loss adjusters, evidence provision, claim management), Remediation works (decontamination, repair, system replacement), Temporary provisions (portable plant, welfare units, access scaffolding), Testing and commissioning (functional testing, certification, regulatory sign-off). Coordinated recovery restores operations while managing costs, quality, and stakeholder expectations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Disaster Categories & Recovery Approaches
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Fire Damage Recovery</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Fire damage is multi-layered: Heat damage (structural steel warping, concrete spalling, glazing failure), Smoke contamination (surfaces, ductwork, furnishings), Water damage (firefighting operations—secondary flooding), Electrical destruction (wiring insulation melted, distribution boards destroyed). <strong>Recovery process:</strong> Structural assessment (structural engineer survey, stabilisation if required), Decontamination (specialist cleaning, odor treatment, HVAC ductwork replacement), System replacement (rewire electrical, install new HVAC, fire alarm renewal), Testing (full functional tests, load testing, commissioning), Certification (electrical, fire, gas certificates for regulatory compliance). Recovery timescale: 3-12 months depending on extent. Insurance coordination essential—loss adjusters assess damage, agree scope, approve contractors.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Flood & Water Damage Recovery</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Flood damage escalates rapidly: Immediate (water ingress, equipment flooding, operational shutdown), Short-term (mold growth 24-48 hours, electrical corrosion, structural saturation), Long-term (rot, decay, hidden damage manifesting months later). <strong>Recovery process:</strong> Emergency extraction (industrial pumps, water removal within hours), Structural drying (dehumidifiers, air movers—typically 2-4 weeks), Contamination assessment (sewage-contaminated water requires biohazard protocols), System evaluation (flood-damaged electrical written off—hidden water ingress causes delayed failures), Mold remediation (HVAC cleaning, fabric treatment), Replacement and testing. Critical: rapid drying prevents mold and minimises secondary damage. Insurance evidence: moisture readings, photographs, asset loss schedules.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Impact & Structural Damage</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Impact damage (vehicle strikes, falling debris, structural collapse) requires: Structural engineer assessment (immediate survey, stabilisation design), Emergency works (propping, shoring, weather protection), Building control liaison (dangerous structure notices, compliance with Building Regulations), Structural repair (concrete repairs, steelwork replacement, facade restoration), Services reinstatement (electrical, mechanical, fire systems damaged by impact), Testing and certification (structural integrity, system functionality). Impact damage recovery is complex—structural issues take precedence, services restoration follows once structure safe. Coordination with HSE, building control, insurers, and structural engineers essential.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Major System Failures</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Catastrophic system failures (complete electrical failure, chiller destruction, boiler explosion) require: Emergency replacement (temporary systems to maintain operations), Root cause investigation (why did failure occur?—design fault, maintenance gap, end-of-life), Permanent replacement (new plant installation, upgraded capacity if required), System integration (BMS, controls, electrical connections), Commissioning and testing (functional performance, efficiency validation). Major failures often indicate asset end-of-life—recovery is opportunity to upgrade systems, improve efficiency, and enhance resilience (install redundancy, improve controls).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Temporary Provisions & Business Continuity
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Temporary Power & HVAC Systems</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Portable generators (200kVA-1000kVA+, diesel, rapid deployment), Temporary boilers (site-mounted, rapid connection to existing distribution), Portable chillers (air-cooled, water-cooled, packaged units), Temporary electrical distribution (site boards, cabling, safe connections). Temporary systems enable partial operations during recovery—protecting revenue, maintaining tenant services, preventing further losses (frozen pipes, data loss).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Drying & Decontamination Equipment</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Industrial dehumidifiers (dessicant, refrigerant), Air movers (accelerate evaporation), Moisture meters (monitor drying progress), HEPA filtration (mold spore control), Ozone generators (odor treatment), Thermal foggers (decontamination). Drying is time-critical—delay allows mold growth, rot, and escalating damage. Professional drying typically 2-4 weeks depending on saturation extent.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Weatherproofing & Security</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Temporary roofing (tarpaulins, scaffold shrouds), Window boarding (security, weather protection), Fencing and hoarding (site security, public safety), CCTV and security patrols (prevent theft, vandalism). Emergency weatherproofing prevents further damage—rain ingress into fire-damaged buildings causes extensive secondary damage. Security prevents theft of copper, plant equipment, and building materials during vacant recovery periods.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Insurance Coordination & Claims Management
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Insurance coordination is critical for disaster recovery: <strong>Immediate notification</strong> (inform insurer within policy terms—typically 24-48 hours), <strong>Emergency mitigation</strong> (make-safe works pre-approved by insurers to prevent further loss), <strong>Loss adjuster liaison</strong> (provide evidence—photographs, asset loss schedules, damage reports), <strong>Scope agreement</strong> (loss adjuster approves remediation scope and costs), <strong>Contractor selection</strong> (insurer-approved contractors or competitive tender with insurer consent), <strong>Cost control</strong> (regular reporting, variation management, avoid scope creep), <strong>Final account</strong> (reconciliation, settlement, close claim).
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Poor insurance coordination delays recovery and reduces claim settlements. Common issues: Inadequate evidence (insufficient photographs, missing asset records), Scope disputes (insurer disputes necessity of works), Cost overruns (unapproved variations, poor cost control), Documentation failures (missing certificates, incomplete records). FM providers act as client representative—managing technical delivery while satisfying insurer requirements. Transparent documentation, regular communication, and professional cost control ensure smooth claim settlement.
              </p>
            </section>

            <RelatedServices 
              services={[
                {
                  title: "Emergency Response",
                  description: "Critical incident management and immediate make-safe",
                  link: "/services/emergency-response"
                },
                {
                  title: "Business Continuity",
                  description: "Resilience planning and recovery preparedness",
                  link: "/fm-operations/business-continuity"
                },
                {
                  title: "Building Fabric",
                  description: "Structural repairs and fabric restoration",
                  link: "/services/building-fabric"
                },
                {
                  title: "Asset Lifecycle Planning",
                  description: "Post-recovery asset replacement planning",
                  link: "/fm-operations/asset-lifecycle"
                }
              ]}
            />

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Disaster Recovery Support</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our disaster recovery service provides coordinated response to major building damage—from initial make-safe through to full operational restoration. We manage technical delivery, insurance coordination, and temporary provisions to minimise downtime and ensure quality recovery.
                </p>
                <Link 
                  to="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Recovery Services
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

export default DisasterRecovery;
