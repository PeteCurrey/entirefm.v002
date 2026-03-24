"use client";

;
import Link from "next/link";
import { ArrowRight, Wrench, Users, Zap, Building2, Shield, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSection } from "@/components/shared/FAQSection";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HardFMvsSoftFM = () => {
  const breadcrumbItems = [
    { label: "FM Insights", href: "/fm-insights" },
    { label: "Hard FM vs Soft FM" }
  ];

  const faqs = [
    {
      question: "What is the main difference between Hard FM and Soft FM?",
      answer: "Hard FM covers the physical infrastructure and building systems (mechanical, electrical, plumbing), while Soft FM focuses on services that support people and operations (cleaning, security, catering). Hard FM failures typically pose safety and compliance risks; Soft FM failures affect occupant experience and productivity."
    },
    {
      question: "What is specialist engineering in facilities management?",
      answer: "Specialist engineering covers highly technical systems requiring specific certifications and expertise beyond standard M&E maintenance. This includes fire suppression systems, building maintenance units (BMUs), lifting equipment, critical power systems, and specialist ventilation for laboratories or cleanrooms."
    },
    {
      question: "Can one provider manage all three FM categories?",
      answer: "Yes, through a Total Facilities Management (TFM) or Integrated FM (IFM) model. A managing agent like EntireFM coordinates specialist contractors across all categories while providing single-point accountability, unified compliance reporting, and streamlined governance."
    },
    {
      question: "Why do estates need a combined FM approach?",
      answer: "Building systems are interdependent—fire systems link to access control, HVAC affects air quality for occupants, and cleaning standards depend on building use patterns. A combined approach ensures coordinated maintenance, reduces gaps between service boundaries, and provides holistic compliance oversight."
    },
    {
      question: "How do compliance requirements differ across FM categories?",
      answer: "Hard FM has strict statutory requirements (electrical testing, gas safety, legionella). Specialist engineering has enhanced regulations (LOLER for lifting, BS 9999 for fire). Soft FM compliance is typically contractual and operational (cleaning frequencies, security SLAs) with some statutory elements like food hygiene."
    }
  ];

  const hardFMServices = [
    "Electrical maintenance & testing",
    "HVAC servicing & repairs",
    "Plumbing & water systems",
    "Building fabric maintenance",
    "Fire alarm systems",
    "Access control & door entry"
  ];

  const softFMServices = [
    "Cleaning & janitorial",
    "Security & manned guarding",
    "Reception & front of house",
    "Grounds & landscaping",
    "Waste management",
    "Catering & vending"
  ];

  const specialistServices = [
    "Fire suppression systems (sprinklers, gas)",
    "Building Maintenance Units (BMUs)",
    "Lifting equipment (lifts, hoists, cranes)",
    "Critical power (UPS, generators)",
    "Laboratory ventilation & fume cupboards",
    "High voltage systems"
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Hard FM vs Soft FM vs Specialist Engineering
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Understanding the three pillars of facilities management—and why modern estates 
              need coordinated delivery across all categories to maintain compliance, safety, 
              and operational excellence.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              Facilities management is commonly divided into <strong className="text-foreground">Hard FM</strong> (building 
              infrastructure) and <strong className="text-foreground">Soft FM</strong> (people services). However, a third 
              category—<strong className="text-foreground">Specialist Engineering</strong>—covers high-risk, highly regulated 
              systems that require specific certifications and expertise beyond standard maintenance teams.
            </p>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Effective estates management requires understanding where each category starts and ends, 
              their distinct compliance frameworks, and how to coordinate delivery without creating 
              gaps or overlaps.
            </p>
          </section>

          {/* Three Categories Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-8 underline-accent inline-block">
              The Three FM Categories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Hard FM Card */}
              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Hard FM</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
                  Physical building infrastructure and mechanical/electrical systems. Focuses on 
                  keeping the building safe, functional, and compliant.
                </p>
                <ul className="space-y-2">
                  {hardFMServices.map((service, index) => (
                    <li key={index} className="text-sm font-light flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Soft FM Card */}
              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Soft FM</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
                  Services that support people and day-to-day operations. Focuses on occupant 
                  experience, comfort, and productivity.
                </p>
                <ul className="space-y-2">
                  {softFMServices.map((service, index) => (
                    <li key={index} className="text-sm font-light flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Specialist Engineering Card */}
              <Card className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Specialist Engineering</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
                  High-risk, highly regulated systems requiring specific certifications and 
                  specialist competencies.
                </p>
                <ul className="space-y-2">
                  {specialistServices.map((service, index) => (
                    <li key={index} className="text-sm font-light flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Compliance Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              Compliance Requirements by Category
            </h2>

            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Hard FM Compliance</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Electricity at Work Regulations</strong> – 5-yearly fixed wire testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Gas Safety Regulations</strong> – Annual CP12 certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">L8/HSG274</strong> – Legionella risk assessment and control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Building Regulations Part L</strong> – Energy performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">F-Gas Regulations</strong> – Refrigerant leak checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">RRO 2005</strong> – Fire detection maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Specialist Engineering Compliance</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">LOLER 1998</strong> – 6-monthly thorough examinations for lifting equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">BS 9999 / BS 5306</strong> – Fire suppression system standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">PUWER 1998</strong> – Work equipment including BMUs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">BS EN 50171</strong> – Central power supply systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">COSHH</strong> – Laboratory ventilation and fume extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">HV Authorisation</strong> – High voltage switching competency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-medium">Soft FM Compliance</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">SIA Licensing</strong> – Mandatory for security operatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Food Safety Act / HACCP</strong> – Catering operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Environmental Permits</strong> – Waste management duty of care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">COSHH</strong> – Cleaning chemical handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">BICSc Standards</strong> – Cleaning industry benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong className="text-foreground">Contract SLAs</strong> – Response times, coverage hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specialist Engineering Deep Dive */}
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              Specialist Engineering Categories
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              These systems require engineers with specific certifications, manufacturer training, 
              and often separate insurance coverage. Standard M&E contractors cannot legally or 
              safely maintain them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Fire Suppression Systems
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Sprinkler systems, gas suppression (FM200, Novec, Inergen), kitchen suppression, 
                  and deluge systems. Requires LPCB/BAFE certification and manufacturer accreditation.
                </p>
              </div>

              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Building Maintenance Units
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Cradles, monorails, and davit systems for façade access. Subject to LOLER 
                  thorough examinations and requires specialist rigging competencies.
                </p>
              </div>

              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Critical Power Systems
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  UPS systems, standby generators, automatic transfer switches, and battery banks. 
                  Essential for data centres, hospitals, and mission-critical facilities.
                </p>
              </div>

              <div className="border border-border rounded-lg p-5">
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  Lifting Equipment
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Passenger lifts, goods hoists, stairlifts, platform lifts, and vehicle lifts. 
                  Requires LOLER thorough examination by competent persons every 6 or 12 months.
                </p>
              </div>
            </div>
          </section>

          {/* Why Combined Model */}
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              Why Estates Need a Combined Model
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              Separating FM delivery into silos creates coordination failures, compliance gaps, 
              and inefficiencies. Modern estates benefit from integrated management that provides 
              single-point accountability across all three categories.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mb-6">
              <h3 className="font-medium mb-4">Benefits of Integrated FM</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Single compliance dashboard</strong> – All statutory obligations visible in one place</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Coordinated access</strong> – Shared permit-to-work and site access systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Unified CAFM</strong> – All assets, PPMs, and reactive jobs in one system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Interdependency management</strong> – Understanding how systems affect each other</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Consolidated reporting</strong> – Single monthly report covering all services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong className="text-foreground">Reduced interface risk</strong> – No gaps between service boundaries</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-muted-foreground font-light italic">
                "The highest-risk point in any FM contract is the interface between services. 
                Integrated management eliminates the 'not my job' gaps that cause compliance 
                failures and operational disruption."
              </p>
            </div>
          </section>

          {/* How EntireFM Helps */}
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              How EntireFM Delivers Integrated FM
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              As a managing agent, EntireFM coordinates specialist contractors across all three 
              FM categories while providing unified governance, compliance oversight, and 
              single-point accountability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Vetted contractor network across Hard FM, Soft FM, and Specialist Engineering",
                "Single CAFM platform tracking all assets and compliance obligations",
                "Unified permit-to-work system for all contractor activities",
                "Consolidated monthly reporting with compliance RAG status",
                "Proactive lifecycle planning across all asset categories",
                "24/7 helpdesk with intelligent triage to correct specialist"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection faqs={faqs} />

          {/* Related Insights */}
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fm-insights/what-is-hard-fm" 
                className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                    What Is Hard FM?
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Deep dive into mechanical, electrical, and building fabric maintenance.
                </p>
              </Link>

              <Link href="/fm-insights/what-is-soft-fm" 
                className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                    What Is Soft FM?
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Understanding cleaning, security, and support services.
                </p>
              </Link>

              <Link href="/fm-insights/what-is-a-fire-risk-assessment" 
                className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                    What Is a Fire Risk Assessment?
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  FRA types, responsible person duties, and compliance requirements.
                </p>
              </Link>

              <Link href="/services" 
                className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                    Our Services
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Explore our full range of facilities management services.
                </p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-light mb-4">
              Request an FM Strategy Review
            </h2>
            <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
              Let us assess your current FM delivery model and identify opportunities for 
              better integration, compliance oversight, and cost efficiency across Hard FM, 
              Soft FM, and Specialist Engineering.
            </p>
            <Button asChild size="lg">
              <Link href="/request-proposal">
                Request Strategy Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default HardFMvsSoftFM;
