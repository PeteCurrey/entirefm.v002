import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema, SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Flame, Zap, Droplet, Snowflake, Activity, Database, TrendingDown, Shield } from "lucide-react";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { KnowledgeCentreCTA } from "@/components/shared/KnowledgeCentreCTA";
import { DualCTA } from "@/components/shared/DualCTA";

const PPM = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Can you implement PPM mid-contract?",
      answer: "Yes — with zero disruption to operations. We can seamlessly integrate PPM programmes into existing contracts."
    },
    {
      question: "How do you reduce CAPEX spend?",
      answer: "By forecasting asset life and optimising maintenance before failure. Predictive maintenance extends asset lifecycles significantly."
    },
    {
      question: "Can we unify all compliance under one provider?",
      answer: "That is our standard delivery model. One contract, one dashboard, complete visibility."
    },
    {
      question: "What is the difference between reactive and preventive maintenance?",
      answer: "Reactive fixes things after they break. Preventive maintenance stops failures before they happen, reducing costs by up to 40%."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EntireFM PPM & Asset Lifecycle Governance",
    "description": "Proactive maintenance programmes integrating fire, electrical, HVAC, water and gas compliance",
    "areaServed": "United Kingdom",
    "serviceType": "PPM & Asset Lifecycle Governance",
    "email": "hello@entirefm.com"
  };

  return (
    <>
      <Helmet>
        <title>PPM & Asset Lifecycle Governance | Planned Preventive Maintenance Services</title>
        <meta 
          name="description" 
          content="Proactive maintenance programmes integrating fire, electrical, HVAC, water and gas compliance — eliminating downtime, reducing cost, and safeguarding operational continuity."
        />
        <link rel="canonical" href="https://entirefm.com/services/ppm-compliance" />
      </Helmet>

      <ServiceSchema 
        name="PPM & Asset Lifecycle Governance"
        description="Proactive maintenance programmes integrating fire, electrical, HVAC, water and gas compliance — eliminating downtime, reducing cost, and safeguarding operational continuity"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <SchemaMarkup schema={localBusinessSchema} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { label: "Services", href: "/services" },
        { label: "PPM & Asset Lifecycle Governance" }
      ]} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "PPM & Asset Lifecycle Governance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  PPM & Asset Lifecycle Governance
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Proactive maintenance programmes integrating fire, electrical, HVAC, water and gas compliance — eliminating downtime, reducing cost, and safeguarding operational continuity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => trackProposalRequest('ppm_hero')}
                    asChild
                  >
                    <Link to="/contact">Build My PPM Programme</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => trackDownload('ppm_compliance_calendar')}
                    asChild
                  >
                    <Link to="/contact">Download PPM Compliance Calendar</Link>
                  </Button>
                </div>
              </header>

              {/* PPM = Predictability */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  PPM = Predictability, Compliance & Cost Control
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-6">
                  When buildings are maintained <Link to="/fm-operations/reactive-maintenance" className="text-primary hover:underline">reactively</Link>:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: AlertTriangle, text: "Compliance deadlines are missed" },
                    { icon: AlertTriangle, text: "Failures disrupt operations and revenue" },
                    { icon: AlertTriangle, text: "Insurance claims collapse" },
                    { icon: AlertTriangle, text: "Directors face enforcement risk" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mb-4">
                  Planned Preventive Maintenance delivers:
                </p>
                <div className="space-y-4">
                  {[
                    "Zero missed compliance",
                    "Zero business interruption surprises",
                    "Lower lifetime asset costs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Every stakeholder sleeps better.
                </p>
              </section>

              {/* Full Hard Services Integration */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Full Hard Services Integration
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Compliance-led PPM covering every critical system:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Flame, text: "Fire Safety — alarms, extinguishers, risers", link: "/services/fire-safety" },
                    { icon: Zap, text: "Electrical — EICR, load checks, remedials", link: "/services/electrical-compliance" },
                    { icon: Activity, text: "Emergency Lighting — BS 5266", link: "/services/emergency-lighting" },
                    { icon: Droplet, text: "Water Hygiene — ACOP L8 & HSG274", link: "/services/water-hygiene" },
                    { icon: Flame, text: "Gas — CP1/CP15 + CP42 catering compliance", link: "/services/gas-safety" },
                    { icon: Snowflake, text: "HVAC — TM44, F-Gas, IAQ performance", link: "/services/hvac-compliance" }
                  ].map((item, index) => (
                    <Link 
                      key={index}
                      to={item.link}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors group"
                    >
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="font-light group-hover:text-accent transition-colors">{item.text}</span>
                    </Link>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  One contract. One dashboard. Zero blindspots.
                </p>
              </section>

              {/* Preventive + Predictive */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Preventive + Predictive Maintenance
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We go beyond "calendar-based" servicing:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Asset condition scoring",
                    "Failure forecasting",
                    "Critical spares strategy",
                    "Lifecycle cost modelling",
                    "CAPEX investment planning"
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium">{item}</h3>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  From compliance… to operational excellence.
                </p>
              </section>

              {/* Digital Compliance */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Digital Compliance & CAFM Integration
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Full governance through our platform:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Database, text: "Certificates & asset histories" },
                    { icon: Activity, text: "SLA tracking" },
                    { icon: CheckCircle2, text: "Workflows with automated reminders" },
                    { icon: Shield, text: "Portfolio-wide compliance visibility" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Procurement teams finally get the control they&apos;ve wanted for years.
                </p>
              </section>

              {/* Energy & ESG */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Energy & ESG Performance Wins
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  PPM delivers:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: TrendingDown, text: "Lower breakdown-related energy spikes" },
                    { icon: Activity, text: "Extended asset life" },
                    { icon: CheckCircle2, text: "Higher EPC/BREEAM scores" },
                    { icon: TrendingDown, text: "Reduced carbon footprint" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Compliance that pays for itself.
                </p>
              </section>

              {/* Sector Expertise */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Sector Expertise
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Scaling PPM intelligently for:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Corporate estates", link: "/sectors/offices-corporate" },
                    { name: "Retail & hospitality", link: "/sectors/retail-service-stations" },
                    { name: "PBSA / residential", link: "/sectors/residential-pbsa" },
                    { name: "Logistics & industrial", link: "/sectors/industrial-logistics" },
                    { name: "Healthcare & public buildings", link: "/sectors" }
                  ].map((sector, index) => (
                    <Link 
                      key={index}
                      to={sector.link}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="font-light group-hover:text-accent transition-colors">{sector.name}</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Case Studies Placeholder */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Case Studies
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6 p-4 bg-muted/30 rounded-r-lg">
                    <h3 className="font-medium mb-2">Corporate Workplace</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      PPM uplift → unplanned callouts down 33%.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6 p-4 bg-muted/30 rounded-r-lg">
                    <h3 className="font-medium mb-2">Industrial Facility</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Lifecycle extension → major CAPEX deferred by 2 years.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-light mt-6 italic">
                  * Real performance stories coming soon
                </p>
              </section>

              <RelatedServices 
                services={[
                  {
                    title: "PPM Delivery Operations",
                    description: "Strategic PPM scheduling, delivery and performance management",
                    link: "/fm-operations/ppm-delivery"
                  },
                  {
                    title: "What Is a PPM Planner?",
                    description: "How PPM planners underpin compliance and reduce lifecycle costs",
                    link: "/fm-insights/what-is-a-ppm-planner"
                  },
                  {
                    title: "Asset Lifecycle Planning",
                    description: "Condition-based maintenance and replacement forecasting",
                    link: "/fm-operations/asset-lifecycle"
                  },
                  {
                    title: "Reactive Maintenance",
                    description: "Complementary reactive services reducing PPM workload",
                    link: "/fm-operations/reactive-maintenance"
                  }
                ]}
              />

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Compliance without chaos. Uptime without uncertainty.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Transform <Link to="/fm-operations/reactive-maintenance" className="text-white underline hover:text-gray-200">reactive maintenance</Link> into strategic <Link to="/fm-operations/asset-lifecycle" className="text-white underline hover:text-gray-200">asset management</Link>.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="bg-white text-charcoal hover:bg-gray-100"
                      onClick={() => trackProposalRequest('ppm_footer')}
                      asChild
                    >
                      <Link to="/contact">Build My PPM Programme</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400 mt-6">
                    📩 hello@entirefm.com
                  </p>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default PPM;
