"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, FileText, AlertTriangle, Shield } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const InterceptorMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Interceptor Maintenance" }
  ];

  const faqs = [
    {
      question: "What is an interceptor and why is it required?",
      answer: "Interceptors (also called separators) remove oil, fuel, and contaminants from surface water before discharge to prevent environmental pollution. They're legally required in car parks, loading bays, fuel stations, and industrial areas."
    },
    {
      question: "How often should interceptors be serviced?",
      answer: "Quarterly servicing is typically required, with monthly inspections for high-risk sites. Frequency depends on interceptor size, site activity, and environmental permit conditions."
    },
    {
      question: "What happens if interceptors are not maintained?",
      answer: "Blocked interceptors cause surface water flooding, allow pollutants to discharge into watercourses (environmental offenses), trigger EA enforcement action, and invalidate insurance policies requiring pollution prevention measures."
    },
    {
      question: "Are there regulations governing interceptor maintenance?",
      answer: "Yes—interceptors must comply with PPG3 (Pollution Prevention Guidelines), Building Regulations Part H, and environmental discharge consent conditions. Non-compliance can result in prosecution and substantial fines."
    },
    {
      question: "What documentation is required for interceptor compliance?",
      answer: "Service records, sludge disposal certificates (waste transfer notes), pollution incident logs, and inspection reports demonstrating compliance with environmental permit conditions and duty of care obligations."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Interceptor & Separator Maintenance"
        description="Compliance servicing for oil, fuel and water interceptors used in car parks, loading bays and industrial estates."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interceptor & Separator Maintenance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compliance servicing for oil, fuel and water interceptors used in car parks, loading bays and industrial estates
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Droplets className="w-8 h-8 text-primary" />
                  Environmental Protection Through Pollution Control
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Interceptors and separators prevent oil, fuel, and hydrocarbons from entering drainage systems and watercourses—protecting the environment, meeting regulatory obligations, and avoiding prosecution under environmental legislation.
                  </p>
                  <p>
                    Installed in car parks, loading bays, fuel stations, and industrial estates, these systems require regular servicing to maintain capacity, prevent blockages, and ensure effective pollutant removal before discharge.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Environmental Regulations & Compliance
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Interceptor maintenance is governed by PPG3 (Pollution Prevention Guidelines), Building Regulations Part H, and environmental discharge consent conditions. Sites discharging surface water must demonstrate adequate pollution control measures.
                  </p>
                  <p>
                    The Environment Agency enforces strict penalties for pollution incidents—including prosecution, unlimited fines, and remediation costs. Duty of care obligations require documented maintenance records and proper disposal of interceptor contents.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  Servicing & Maintenance Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Sludge Removal</h3>
                    <p className="text-muted-foreground">
                      Quarterly emptying prevents capacity loss, maintains separation efficiency, and ensures interceptors continue to trap pollutants effectively.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Oil Layer Extraction</h3>
                    <p className="text-muted-foreground">
                      Removal of accumulated hydrocarbon layer prevents bypass and ensures continued pollutant capture before discharge to surface water drains.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Structural Inspection</h3>
                    <p className="text-muted-foreground">
                      Check for cracks, damaged baffles, blocked outlets, and structural defects that compromise interceptor performance or allow pollutant bypass.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Waste Transfer Documentation</h3>
                    <p className="text-muted-foreground">
                      Licensed waste carriers must provide waste transfer notes for all extracted materials, demonstrating compliance with duty of care obligations.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Pollution Risk & Enforcement Consequences
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Neglected interceptor maintenance exposes estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Environmental pollution:</strong> Oil and fuel bypassing interceptors contaminates watercourses, triggering EA enforcement action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Prosecution risk:</strong> Pollution incidents can result in unlimited fines, director liability, and remediation costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Surface water flooding:</strong> Blocked interceptors cause car park and loading bay flooding during heavy rainfall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance invalidation:</strong> Policies often require pollution prevention measures as a condition of cover</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Related Drainage & Water Services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/drainage-cctv-surveys" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Drainage CCTV Surveys</h3>
                    <p className="text-sm text-muted-foreground">Remote inspection of drainage systems</p>
                  </Link>
                  <Link href="/services/pump-station-servicing" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Pump Station Servicing</h3>
                    <p className="text-sm text-muted-foreground">Foul and surface water pumps</p>
                  </Link>
                  <Link href="/services/grease-trap-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Grease Trap Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Commercial kitchen compliance</p>
                  </Link>
                  <Link href="/services/water-hygiene" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Water Hygiene</h3>
                    <p className="text-sm text-muted-foreground">Legionella control</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request an Interceptor Compliance Review</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about interceptor maintenance and environmental compliance for your estate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </section>

              <FAQSection faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterceptorMaintenance;
