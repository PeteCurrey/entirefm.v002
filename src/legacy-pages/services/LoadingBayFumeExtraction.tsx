"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
;

const LoadingBayFumeExtraction = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loading Bay Fume Extraction" }
  ];

  const faqs = [
    {
      question: "Why are loading bay extraction systems necessary?",
      answer: "Enclosed loading bays accumulate diesel and petrol exhaust fumes from idling vehicles. Without adequate extraction, carbon monoxide and nitrogen dioxide reach harmful concentrations, creating health risks and violating workplace exposure limits."
    },
    {
      question: "How often should loading bay fans be tested?",
      answer: "Annual testing including duty/standby fan rotation, airflow verification, sensor calibration, and interlock testing with door systems. More frequent checks may be required in high-usage facilities."
    },
    {
      question: "What triggers automatic activation?",
      answer: "Typically CO or NO2 sensors, roller shutter door position switches, or vehicle detection systems. Some installations use timed activation during known delivery schedules to ensure continuous extraction during loading operations."
    },
    {
      question: "What are the consequences of inadequate extraction?",
      answer: "Occupational health violations, prosecution under COSHH regulations, employee illness claims, and operational shutdowns if air quality breaches workplace exposure limits (WELs)."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Loading Bay Fume Extraction Systems"
        description="Protecting enclosed logistics spaces from exhaust build-up with automatic fan systems, CO/NO2 monitoring, and COSHH-compliant air quality control."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Loading Bay Fume Extraction Systems
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Protecting enclosed logistics spaces from exhaust build-up.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Loading Bay Extraction Is Critical
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Enclosed loading bays are hazardous environments. HGVs, forklifts, and delivery vehicles idle for extended periods while goods are transferred, generating substantial diesel and petrol exhaust emissions. Without effective mechanical extraction, carbon monoxide, nitrogen dioxide, and particulate matter accumulate to levels that breach workplace exposure limits.
                  </p>
                  <p>
                    COSHH regulations require employers to control exposure to hazardous substances, including vehicle exhaust fumes. Loading bay extraction systems use duty and standby fans to maintain continuous airflow, preventing fume build-up. CO and NO2 sensors trigger automatic fan activation when pollutant levels rise, ensuring compliance with occupational health standards.
                  </p>
                  <p>
                    Annual testing verifies fan performance, sensor calibration, duty/standby switchover, and airflow capacity. Failures can result in prosecution under the Health and Safety at Work Act, employee illness claims, and operational shutdowns if air quality monitoring detects breaches of workplace exposure limits.
                  </p>
                </div>
              </section>

              {/* Compliance Standards */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Compliance Standards
                </h2>
                <div className="grid gap-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">COSHH Regulations 2002</h3>
                        <p className="text-muted-foreground font-light">
                          Control of Substances Hazardous to Health. Requires employers to assess and control exposure to vehicle exhaust fumes. Enforcement includes improvement notices, prohibition notices, and prosecution.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">EH40 Workplace Exposure Limits</h3>
                        <p className="text-muted-foreground font-light">
                          HSE guidance defining maximum permitted concentrations for carbon monoxide (30 ppm long-term, 200 ppm short-term) and nitrogen dioxide (0.5 ppm long-term, 1 ppm short-term) in workplace air.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Health and Safety at Work Act 1974</h3>
                        <p className="text-muted-foreground font-light">
                          Places general duty on employers to ensure the health, safety and welfare of employees. Inadequate fume control can result in prosecution and unlimited fines.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Testing Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Duty/Standby Fan Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Verifying automatic switchover between duty and standby fans if the primary fan fails. Testing both fans under load to ensure adequate airflow capacity. Checking vibration, bearing condition, and motor current draw.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Sensor Testing & Calibration</h3>
                        <p className="text-muted-foreground font-light">
                          Annual calibration of CO and NO2 sensors using certified test gases. Verifying sensor response times, alarm thresholds, and integration with fan control systems. Sensors typically require replacement every 3-5 years.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Airflow Verification</h3>
                        <p className="text-muted-foreground font-light">
                          Using anemometers to measure air velocity at extract grilles. Calculating total extract capacity and verifying it meets design air change rates (typically 10-15 air changes per hour for loading bays).
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Interlock & Control Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Verifying interlocks with roller shutter doors, vehicle detection systems, or manual override controls. Testing automatic activation sequences and alarm/warning systems for air quality breaches.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Risks */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Risks of Non-Compliance
                </h2>
                <div className="space-y-4">
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Occupational Health Violations</h3>
                        <p className="text-muted-foreground font-light">
                          Employees working in fume-contaminated loading bays suffer acute symptoms (headaches, dizziness, nausea) and chronic respiratory conditions. COSHH breaches result in prosecution and unlimited fines.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Operational Shutdowns</h3>
                        <p className="text-muted-foreground font-light">
                          HSE inspections that detect inadequate fume control can result in immediate prohibition notices, shutting down loading operations until systems are compliant. This can halt entire supply chains.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legal and Financial Liability</h3>
                        <p className="text-muted-foreground font-light">
                          Employers face civil claims from employees who develop respiratory illnesses due to prolonged fume exposure. Corporate manslaughter charges are possible in cases of fatal CO poisoning.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure COSHH-Compliant Loading Bay Extraction
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for annual testing, sensor calibration, and air quality monitoring. Our engineers specialise in industrial extraction systems and COSHH compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/request-proposal">
                      Request a Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                    <a href="tel:+448001234567">
                      <Phone className="w-4 h-4 mr-2" />
                      24/7 Helpdesk
                    </a>
                  </Button>
                </div>
              </section>

              {/* FAQ Section */}
              <FAQSection faqs={faqs} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <SidebarCTA />

              <Card className="p-6">
                <h3 className="font-medium mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/car-park-smoke-control" className="text-muted-foreground hover:text-foreground transition-colors">
                      Car Park Smoke Control
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hvac-compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                      HVAC Compliance & Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/health-safety" className="text-muted-foreground hover:text-foreground transition-colors">
                      Health & Safety Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ppm" className="text-muted-foreground hover:text-foreground transition-colors">
                      Planned Preventative Maintenance
                    </Link>
                  </li>
                </ul>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingBayFumeExtraction;