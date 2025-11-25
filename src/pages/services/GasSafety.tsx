import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema, SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertTriangle, Flame, Shield, Database, Zap } from "lucide-react";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { RelatedServices } from "@/components/shared/RelatedServices";

const GasSafety = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often do commercial boilers require servicing?",
      answer: "Annually at minimum — more if high-load or critical use."
    },
    {
      question: "Do kitchens legally require CP42 certification?",
      answer: "Yes — every year."
    },
    {
      question: "Do you offer 24/7 emergency response?",
      answer: "Yes — urgent hazards are resolved immediately."
    },
    {
      question: "What causes carbon monoxide risk?",
      answer: "Poor combustion, inadequate ventilation, blocked flues, and faulty equipment. We test and eliminate these risks during every inspection."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EntireFM Gas Safety Services",
    "description": "Commercial gas safety, CP1/CP15/CP42 certification, and boiler compliance services",
    "areaServed": "United Kingdom",
    "serviceType": "Gas Safety & Commercial Boiler Compliance",
    "email": "hello@entirefm.com"
  };

  return (
    <>
      <Helmet>
        <title>Commercial Gas Safety & Boiler Compliance Services | Gas Safe Inspections</title>
        <meta 
          name="description" 
          content="Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates."
        />
        <link rel="canonical" href="https://entirefm.com/services/gas-safety" />
      </Helmet>

      <ServiceSchema 
        name="Commercial Gas Safety & Boiler Compliance Services"
        description="Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <SchemaMarkup schema={localBusinessSchema} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { label: "Services", href: "/services" },
        { label: "Gas Safety & Boiler Compliance" }
      ]} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "Gas Safety & Heating" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  Commercial Gas Safety & Boiler Compliance Services
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => trackProposalRequest('gas_safety_hero')}
                    asChild
                  >
                    <Link to="/contact">Request Gas Compliance Audit</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => trackDownload('gas_compliance_checklist')}
                    asChild
                  >
                    <Link to="/contact">Download Gas Compliance Checklist</Link>
                  </Button>
                </div>
              </header>

              {/* Gas Safety Failures */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Gas Safety Failures Are Public — and Prosecuted
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-6">
                  Gas is high hazard. When systems fail:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Carbon monoxide exposure kills silently",
                    "HSE prosecutes under Gas Safety (Installation & Use) Regulations 1998",
                    "Insurance claims are voided",
                    "Buildings are evacuated and closed",
                    "Operators make headlines for all the wrong reasons"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium">
                  We remove the risk entirely — and prove it's controlled.
                </p>
              </section>

              {/* Full Gas Compliance */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Full Gas Compliance Delivery
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  All statutory requirements delivered:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Flame, text: "CP1 / CP15 Commercial Gas Certificates" },
                    { icon: Flame, text: "CP42 Catering Gas Safety (restaurants, takeaways, hotel kitchens, dark kitchens)" },
                    { icon: CheckCircle2, text: "Commercial boiler servicing & combustion checks" },
                    { icon: Shield, text: "Pressure system safety & PRV testing" },
                    { icon: CheckCircle2, text: "Ventilation & flue integrity validation" },
                    { icon: AlertTriangle, text: "Emergency shut-off systems proven and labelled" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Certified Gas Safe engineers only. No subcontracting gambles.
                </p>
              </section>

              {/* Carbon Monoxide Risk */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Carbon Monoxide Risk — Zero Tolerance
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We test and enforce safety on:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Combustion performance",
                    "Fresh air supply",
                    "Extraction airflow",
                    "CO detector operation",
                    "Flue gas leakage"
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium">{item}</h3>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  If CO risk exists → Stop. Fix. Sign off. No negotiation with hazard.
                </p>
              </section>

              {/* Energy & Efficiency */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Energy & Efficiency Performance Gains
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We turn plantrooms into productivity assets:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Zap, text: "High-efficiency boiler upgrades" },
                    { icon: Flame, text: "Burner optimisation" },
                    { icon: Database, text: "Smart BMS control improvements" },
                    { icon: Shield, text: "R32 & low-GWP migration planning" },
                    { icon: Zap, text: "Heat recovery integration" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Save fuel. Save downtime. Save CO₂.
                </p>
              </section>

              {/* Governance & Certification */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Governance & Certification Digitalised
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Our platform stores:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Database, text: "Full certificate history" },
                    { icon: CheckCircle2, text: "Remedial lifecycle tracking" },
                    { icon: Shield, text: "Asset condition scores" },
                    { icon: AlertTriangle, text: "Renewal notifications" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Auditors love it. Insurers expect it. Procurement trusts it.
                </p>
              </section>

              {/* Sector Expertise */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Sector Expertise
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We support:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Hospitality / food service", link: "/sectors/hospitality-leisure" },
                    { name: "PBSA & residential operators", link: "/sectors/residential-pbsa" },
                    { name: "Retail environments", link: "/sectors/retail-service-stations" },
                    { name: "Industrial estates", link: "/sectors/industrial-logistics" },
                    { name: "Healthcare & public buildings", link: "/sectors" },
                    { name: "Corporate workplaces", link: "/sectors/offices-corporate" }
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-accent pl-6 p-4 bg-muted/30 rounded-r-lg">
                    <h3 className="font-medium mb-2">City Hotel</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Full CP42 compliance delivered with zero guest disruption.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6 p-4 bg-muted/30 rounded-r-lg">
                    <h3 className="font-medium mb-2">Industrial Park</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Emergency flue remedials completed same day.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-light mt-4 italic">
                  * Real performance stories coming soon
                </p>
              </section>

              <RelatedServices 
                services={[
                  {
                    title: "PPM Delivery",
                    description: "Annual gas safety inspections and boiler servicing schedules",
                    link: "/fm-operations/ppm-delivery"
                  },
                  {
                    title: "Reactive Maintenance",
                    description: "Emergency gas leak response and appliance repairs",
                    link: "/fm-operations/reactive-maintenance"
                  },
                  {
                    title: "Emergency Response",
                    description: "24/7 gas emergency attendance and make-safe procedures",
                    link: "/services/emergency-response"
                  },
                  {
                    title: "Asset Lifecycle Planning",
                    description: "Boiler and heating system replacement forecasting",
                    link: "/fm-operations/asset-lifecycle"
                  }
                ]}
              />

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Gas compliance isn't optional — it's operational survival.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Protect health. Protect compliance. Protect your business.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="bg-white text-charcoal hover:bg-gray-100"
                      onClick={() => trackProposalRequest('gas_safety_footer')}
                      asChild
                    >
                      <Link to="/contact">Request Gas Compliance Audit</Link>
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

export default GasSafety;
