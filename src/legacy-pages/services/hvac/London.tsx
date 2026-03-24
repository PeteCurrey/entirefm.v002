"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Phone, 
  Download, 
  ArrowRight, 
  CheckCircle2,
  Wind,
  Thermometer,
  Shield,
  Gauge
} from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const HVACLondon = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const handleDownloadChecklist = () => {
    trackDownload('TM44 Compliance Checklist');
  };

  const handleProposalRequest = () => {
    trackProposalRequest('/hvac/london');
  };

  const faqs = [
    {
      question: "When must TM44 inspections be refreshed?",
      answer: "TM44 Energy Performance of Buildings (England & Wales) Regulations require AC systems over 12kW to be inspected every 5 years. Systems that have been significantly modified or show performance degradation may require earlier re-inspection."
    },
    {
      question: "What triggers mandatory F-Gas leak checks?",
      answer: "Systems containing 5 tonnes CO2 equivalent or more of F-Gas require annual leak checks. Systems with 50 tonnes or more require quarterly checks. Any system with detected leaks must be repaired within 14 days and leak-checked again within one month of repair."
    },
    {
      question: "Can HVAC servicing be completed without operational downtime?",
      answer: "Yes. We schedule maintenance during off-peak hours, use phased approaches for multi-system sites, and deploy temporary cooling solutions where necessary to ensure business continuity throughout all servicing activities."
    },
    {
      question: "What is included in a comprehensive HVAC compliance audit?",
      answer: "Our audits include TM44 energy assessments, F-Gas leak detection and logbook review, AHU filter and belt inspections, ventilation performance testing, control system verification, and Indoor Air Quality monitoring with actionable improvement recommendations."
    }
  ];

  return (
    <>
      

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - London"
        description="TM44 inspections, F-Gas leak governance and high-performance HVAC maintenance for London's complex estates"
        areaServed="London"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services London"
        address={{
          street: "London Service Centre",
          city: "London",
          postalCode: "EC1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "London" }
        ]}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "London" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Section */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Wind className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-primary">HVAC & F-Gas Compliance</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light mb-6">
                  HVAC, AC & F-Gas Compliance – London
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  TM44 inspections, F-Gas leak governance and high-performance HVAC maintenance for London's complex estates.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild onClick={handleProposalRequest}>
                    <Link href="/contact">
                      Book HVAC Compliance Audit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleDownloadChecklist}>
                    <Download className="mr-2 w-4 h-4" />
                    Download TM44 Checklist
                  </Button>
                </div>
              </section>

              {/* Risk Profile */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  London's HVAC Risk Profile = Zero Room for Failure
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  High-rise density + heat-loaded sites = elevated IAQ, overheating and refrigerant compliance pressure.
                </p>
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <h3 className="font-medium mb-4">Non-compliance triggers:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">Tenant comfort crises & lost productivity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">F-Gas penalties + enforced system shutdown</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">BREEAM/EPC score damage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="font-light">Legal exposure on fire-safety Air Handling Units</span>
                    </li>
                  </ul>
                </Card>
                <p className="text-muted-foreground font-light leading-relaxed mt-6">
                  We deliver HVAC certainty in the most demanding environment in the UK.
                </p>
              </section>

              {/* Service Programmes */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  HVAC Service & Compliance Programmes
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <Wind className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-3">Air Handling Units</h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Complete AHU servicing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Filter lifecycle tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Post-Grenfell ventilation compliance</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <Thermometer className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-3">VRV/VRF Systems</h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Multi-split system maintenance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Refrigerant integrity checks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Performance optimization</span>
                      </li>
                    </ul>
                  </Card>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mt-6">
                  Your environment stays productive and safe — always.
                </p>
              </section>

              {/* TM44 & F-Gas */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  TM44 & F-Gas Compliance
                </h2>
                <Card className="p-6 border-primary/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-4">Regulatory Compliance</h3>
                      <ul className="space-y-3 text-muted-foreground font-light">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>TM44 Audit & Certification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>F-Gas leak detection & reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Refrigerant logbooks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>Energy efficiency improvement plans</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-4">Standards Alignment</h3>
                      <p className="text-muted-foreground font-light leading-relaxed mb-4">
                        Full alignment with EC 517/2014 & Energy Performance of Buildings Regulations.
                      </p>
                      <p className="text-primary font-medium">
                        ✓ Zero refrigerant governance breaches
                      </p>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Energy Efficiency */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Energy Efficiency & ESG Gains
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <Gauge className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-3">System Optimization</h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Variable speed drive optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Heat recovery integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Control strategy upgrades</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <Wind className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-medium mb-3">Low-GWP Conversion</h3>
                    <ul className="space-y-2 text-muted-foreground font-light">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>R32 refrigerant upgrades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Low-GWP conversion paths</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Future-proof compliance</span>
                      </li>
                    </ul>
                  </Card>
                </div>
                <p className="text-primary font-medium mt-6">
                  Designed to cut costs and emissions simultaneously.
                </p>
              </section>

              {/* Case Study */}
              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Canary Wharf Tenant – TM44 Upgraded + Cooling Energy Reduced by 19%
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major financial services tenant required urgent TM44 compliance certification alongside energy reduction targets. We delivered complete system audit, F-Gas leak rectification, and control optimization—achieving 19% cooling energy reduction while restoring full regulatory compliance within 4 weeks.
                  </p>
                </Card>
              </section>

              {/* Sectors */}
              <section>
                <h2 className="text-3xl font-light mb-6">
                  Sectors We Support in London
                </h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Corporate Offices",
                    "PBSA",
                    "Hospitality",
                    "Retail",
                    "Data Centres",
                    "Airports"
                  ].map((sector) => (
                    <span 
                      key={sector}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              {/* Coverage Areas */}
              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City, Canary Wharf, West End, Heathrow corridor, Stratford, Westminster, Docklands, and all Greater London boroughs.
                </p>
              </section>

              {/* FAQs */}
              <FAQSection faqs={faqs} />

              {/* Final CTA */}
              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  HVAC Certainty. F-Gas Compliance. Energy Efficiency.
                </h2>
                <p className="text-gray-300 font-light mb-6 max-w-2xl mx-auto">
                  📩 london@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Request HVAC Compliance Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <SidebarCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HVACLondon;