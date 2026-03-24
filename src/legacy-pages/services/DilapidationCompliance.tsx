"use client";

;
import Link from "next/link";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { FAQSchema } from "@/components/shared/SchemaMarkup";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const DilapidationCompliance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Dilapidation & End-of-Lease Compliance" }
  ];

  const faqs = [
    {
      question: "What is a dilapidations claim?",
      answer: "A dilapidations claim is a landlord's demand for compensation or reinstatement works where a tenant has failed to comply with lease repairing obligations. Claims can be substantial—often six or seven figures for commercial premises—and are enforceable through civil litigation if not settled."
    },
    {
      question: "What is a Schedule of Dilapidations?",
      answer: "A Schedule of Dilapidations is a formal document prepared by a surveyor detailing breaches of lease covenants, required remedial works, and estimated costs. It forms the basis of the landlord's claim against the tenant. Responding to a schedule requires technical validation and negotiation."
    },
    {
      question: "What does 'yielding up' mean in a lease?",
      answer: "'Yielding up' refers to the tenant's obligation to return the property in a specified condition at lease end—typically 'good and substantial repair'. Failure to meet yielding-up obligations results in dilapidations claims. Lease terms vary significantly and must be reviewed carefully."
    },
    {
      question: "Can landlords claim for improvements as well as disrepair?",
      answer: "No. Landlords cannot claim for improvements beyond the original specification. However, they can claim for removal of tenant alterations if not properly authorised or if reinstatement is required by the lease. Dilapidation claims must relate to breaches of covenant, not betterment."
    },
    {
      question: "What is the Dilapidations Protocol?",
      answer: "The Pre-Action Protocol for Claims for Damages in Relation to the Physical State of Commercial Property at Termination of a Tenancy is a procedural framework for dilapidations disputes. It requires formal notice, quantified schedules, and attempts at settlement before litigation. Non-compliance can result in cost penalties."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Dilapidation & End-of-Lease Compliance"
        description="Dilapidation and end-of-lease compliance services across the UK. Engineering inspections, remedial works, and handover certification for commercial property lease exits."
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
                Dilapidation & End-of-Lease Compliance
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Engineering inspections, remedial works, and handover compliance certification for commercial lease exits. Minimising dilapidations exposure and landlord claims.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Dilapidations Risk in Commercial Leases
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Commercial leases impose significant repairing obligations on tenants. At lease end, tenants must return the property in a specified condition—typically 'good and substantial repair and condition'. Failure to meet these obligations results in dilapidations claims from landlords.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Dilapidations claims commonly include building fabric defects, defective M&E systems, statutory compliance failures, and outstanding PPM works. Claims can be substantial—often exceeding six figures—and are enforceable through litigation if not resolved. Proper preparation and proactive remedial works reduce exposure significantly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Engineering & Compliance Scope
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">M&E Systems Condition Assessment</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Mechanical and electrical plant must be in working order at lease end. Defective boilers, chillers, air handling units, electrical distribution, and fire systems are common dilapidations issues. Pre-exit assessments identify defects and remedial requirements before landlord inspection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Statutory Compliance Certification</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Landlords expect valid compliance certificates at handover—including EICRs, gas safety certificates, legionella risk assessments, fire alarm certificates, and emergency lighting test records. Missing or expired certificates result in dilapidations claims for re-testing and remedial works.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Outstanding PPM & Maintenance Works</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Tenants are generally required to maintain PPM regimes throughout the lease. Evidence of neglected maintenance—such as overdue services, dirty filters, or corroded plant—supports landlord dilapidations claims. Completing outstanding PPM before exit reduces exposure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Removal of Tenant Alterations</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Tenant alterations—such as additional air conditioning, supplementary electrical circuits, or demountable partitions—may require removal if not properly consented or if reinstatement is required by the lease. Failure to remove alterations results in landlord claims for reinstatement costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Handover Documentation</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Landlords expect comprehensive handover documentation—including operation and maintenance manuals, PPM records, compliance certificates, and as-built drawings. Failure to provide documentation supports dilapidations claims and complicates dispute resolution.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Responding to Schedules of Dilapidations
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Landlords typically serve a Schedule of Dilapidations detailing alleged breaches and claimed costs. Technical validation of the schedule is essential—many claims include exaggerated costs, works beyond tenant obligation, or items already completed.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Engineering assessments validate or challenge technical claims—such as plant life expectancy, repair vs replacement decisions, and statutory compliance requirements. Expert evidence is often required to negotiate settlements and defend against inflated claims.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Proactive Dilapidations Mitigation
              </h2>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Early Exit Planning:</span> Conduct terminal schedules 12–18 months before lease expiry to identify defects and plan remedial programmes. Early identification allows budgeting and phased works.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">PPM Compliance:</span> Maintain PPM regimes throughout the lease. Documented PPM reduces landlord claims and demonstrates compliance with repairing obligations.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Statutory Compliance:</span> Ensure all statutory certificates are current and defects addressed before handover. Missing certificates create significant exposure.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Proactive Repairs:</span> Address known defects during the lease rather than deferring until exit. Proactive maintenance reduces final dilapidations claims substantially.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  <span className="font-medium text-foreground">Documentation:</span> Maintain comprehensive records of PPM, repairs, compliance testing, and tenant improvements. Documentation supports defences against dilapidations claims.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light mb-4 underline-accent inline-block">
                Related Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/ppm-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">PPM Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Planned preventive maintenance and records</p>
                </Link>
                <Link href="/services/electrical-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Electrical Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">EICRs and statutory testing at lease end</p>
                </Link>
                <Link href="/services/hvac-compliance" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">HVAC Compliance</h3>
                  <p className="text-sm text-muted-foreground font-light">Mechanical system condition and certification</p>
                </Link>
                <Link href="/services/building-inspections" className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <h3 className="font-medium mb-2">Building Inspections</h3>
                  <p className="text-sm text-muted-foreground font-light">Pre-exit condition surveys and terminal schedules</p>
                </Link>
              </div>
            </section>

            <section className="mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <h2 className="text-2xl font-light mb-4">Request Dilapidations Support</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Our dilapidations team provides terminal schedules, remedial works programmes, and technical validation of landlord claims. We support tenants approaching lease expiry and those responding to Schedules of Dilapidations. Contact us for site-specific dilapidations advice.
                </p>
                <Link href="/request-proposal" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Request Dilapidations Assessment
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

export default DilapidationCompliance;
