"use client";

;
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, FAQSchema, SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, Wind, Snowflake, Thermometer, Activity, Database, Zap, Shield, TrendingDown } from "lucide-react";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const HVACCompliance = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "When is TM44 required?",
      answer: "For AC systems > 12kW — inspection every 5 years under the Energy Performance of Buildings Regulations."
    },
    {
      question: "How often do leak checks need to be performed?",
      answer: "Depends on refrigerant volume & GWP risk rating. Systems with >5kg of refrigerant require regular checks, with frequency determined by CO2 equivalent."
    },
    {
      question: "Can works be performed out of hours?",
      answer: "Yes — to protect business continuity and minimize operational disruption."
    },
    {
      question: "What is F-Gas compliance and why does it matter?",
      answer: "F-Gas regulations (EC 517/2014) control refrigerant leaks and emissions. Non-compliance results in fines, insurance issues, and environmental liability."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EntireFM HVAC & F-Gas Compliance Services",
    "description": "TM44 inspections, F-Gas leak governance and proactive HVAC maintenance",
    "areaServed": "United Kingdom",
    "serviceType": "HVAC, Air Conditioning & F-Gas Compliance",
    "email": "hello@entirefm.com"
  };

  return (
    <>
      

      <ServiceSchema 
        name="HVAC, Air Conditioning & F-Gas Compliance Services"
        description="TM44 inspections, F-Gas leak governance and proactive HVAC maintenance that optimise comfort, uptime, and safety across commercial estates"
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <SchemaMarkup schema={localBusinessSchema} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { label: "Services", href: "/services" },
        { label: "HVAC, Air Conditioning & F-Gas Compliance" }
      ]} />

      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-6 py-8">
          <Breadcrumb items={[
            { label: "Services", href: "/services" },
            { label: "HVAC, Air Conditioning & F-Gas Compliance" }
          ]} />

          <div className="grid lg:grid-cols-3 gap-12 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <header>
                <h1 className="text-4xl md:text-5xl font-light mb-4 underline-accent inline-block">
                  HVAC, Air Conditioning & F-Gas Compliance Services
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                  TM44 inspections, F-Gas leak governance and proactive HVAC maintenance that optimise comfort, uptime, and safety across commercial estates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => trackProposalRequest('hvac_compliance_hero')}
                    asChild
                  >
                    <Link href="/contact">Book HVAC Compliance Audit</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => trackDownload('tm44_inspection_guide')}
                    asChild
                  >
                    <Link href="/contact">Download TM44 Inspection Guide</Link>
                  </Button>
                </div>
              </header>

              {/* HVAC Compliance Impact */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  HVAC Compliance = Comfort, Productivity & Risk Control
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-6">
                  Your heating and cooling systems directly influence:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Activity, text: "Staff productivity" },
                    { icon: Thermometer, text: "Public comfort experiences" },
                    { icon: Shield, text: "Building compliance & insurance" },
                    { icon: Wind, text: "Airborne contaminant control" },
                    { icon: TrendingDown, text: "Energy performance and operating cost" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium">
                  When HVAC performance collapses → so does your reputation.
                </p>
                <p className="text-muted-foreground font-light mt-4">
                  We ensure your environment stays safe, compliant and comfortable.
                </p>
              </section>

              {/* Full HVAC Service */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Full HVAC Service & Governance Programmes
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We deliver:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Snowflake, text: "VRV/VRF system servicing" },
                    { icon: Wind, text: "Air Handling Unit (AHU) performance checks" },
                    { icon: Activity, text: "Indoor Air Quality monitoring" },
                    { icon: CheckCircle2, text: "Filter lifecycle management" },
                    { icon: Wind, text: "Ventilation compliance (post-Grenfell scrutiny)" },
                    { icon: Thermometer, text: "Comfort performance diagnostics" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Your estate never struggles with overheating or poor ventilation.
                </p>
              </section>

              {/* TM44 Inspection */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  TM44 Inspection & Certification
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-6">
                  Mandatory under the Energy Performance of Buildings Regulations.
                </p>
                <p className="text-muted-foreground font-light mb-6">
                  We provide:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Full TM44 audits",
                    "Efficiency scoring",
                    "Action plans for performance improvement",
                    "Inspection evidence for insurers and auditors"
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-accent pl-6">
                      <h3 className="font-medium">{item}</h3>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Compliance delivered. Energy waste eliminated.
                </p>
              </section>

              {/* F-Gas Leak Governance */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  F-Gas Leak Governance
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Aligned to EC 517/2014 compliance:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: AlertTriangle, text: "Refrigerant leak checks" },
                    { icon: Database, text: "Logbook creation & digital history" },
                    { icon: CheckCircle2, text: "Automatic leakage alerts" },
                    { icon: Zap, text: "Low-GWP migration planning" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Zero refrigerant governance risk. Zero environmental liability surprises.
                </p>
              </section>

              {/* Energy Efficiency & ESG */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Energy Efficiency & ESG Gains
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  We identify — and deliver:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Database, text: "BMS optimisation" },
                    { icon: Zap, text: "VSD efficiencies" },
                    { icon: TrendingDown, text: "Heat recovery opportunities" },
                    { icon: Activity, text: "Improved part-load performance" },
                    { icon: Snowflake, text: "R32 conversion pathways" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Reduced energy. Reduced emissions. Increased compliance score.
                </p>
              </section>

              {/* Digital Compliance Platform */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Digital Compliance Platform
                </h2>
                <p className="text-muted-foreground font-light mb-6">
                  Decision-grade clarity:
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Database, text: "Asset audit history" },
                    { icon: CheckCircle2, text: "Remedials with evidence" },
                    { icon: AlertTriangle, text: "Compliance expiry alerts" },
                    { icon: Activity, text: "Workflows and SLA performance dashboards" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="font-light">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg font-medium mt-6">
                  Full HVAC control — from anywhere.
                </p>
              </section>

              {/* Sector Expertise */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Who We Support
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: "Corporate workplaces", link: "/sectors/offices-corporate" },
                    { name: "PBSA & residential", link: "/sectors/residential-pbsa" },
                    { name: "Retail and leisure", link: "/sectors/retail-service-stations" },
                    { name: "Logistics & industrial", link: "/sectors/industrial-logistics" },
                    { name: "Healthcare & public buildings", link: "/sectors" }
                  ].map((sector, index) => (
                    <Link 
                      key={index}
                      href={sector.link}
                      className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-accent transition-colors group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="font-light group-hover:text-accent transition-colors">{sector.name}</span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Case Studies Placeholder */}
              <section className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-6">
                  Case Study Highlights
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Corporate Estate Comfort Stabilised</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Overheating events reduced by 70% through AHU optimization and IAQ monitoring.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-6">
                    <h3 className="font-medium mb-2">Industrial AHU Failure Prevention</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Thermal inspection prevented major failure — saving thousands in production downtime.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-light mt-6 italic">
                  * Real performance stories coming soon
                </p>
              </section>

              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="border-t border-border pt-12">
                <div className="text-center bg-charcoal text-white p-12 rounded-lg">
                  <h2 className="text-3xl font-light mb-4">
                    Comfort protected. Compliance delivered. Cost reduced.
                  </h2>
                  <p className="text-lg text-gray-300 font-light mb-8 max-w-2xl mx-auto">
                    Optimise your HVAC systems for performance, safety, and efficiency.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="bg-white text-charcoal hover:bg-gray-100"
                      onClick={() => trackProposalRequest('hvac_compliance_footer')}
                      asChild
                    >
                      <Link href="/contact">Book HVAC Compliance Audit</Link>
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

export default HVACCompliance;
