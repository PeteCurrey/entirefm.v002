"use client";

;
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Waves, AlertTriangle, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const DrainageCCTVSurveys = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Drainage CCTV Surveys" }
  ];

  const faqs = [
    {
      question: "When should a drainage CCTV survey be conducted?",
      answer: "Before property purchase, after suspected blockages, during routine estate maintenance, following flooding incidents, or as part of insurance and compliance documentation requirements."
    },
    {
      question: "What can drainage CCTV detect?",
      answer: "Structural cracks, root ingress, collapsed sections, misaligned joints, blockages, corrosion, sediment buildup, and connection defects—all of which can lead to flooding or system failure if unaddressed."
    },
    {
      question: "How does jetting integrate with CCTV surveys?",
      answer: "High-pressure water jetting clears obstructions before camera inspection, revealing underlying structural issues. Post-jetting surveys confirm clearance and identify permanent damage requiring repair."
    },
    {
      question: "What documentation is provided after a survey?",
      answer: "Video footage, defect coding (WRc standards), location mapping, severity grading, remedial recommendations, and compliance reports suitable for insurers, solicitors, and environmental regulators."
    },
    {
      question: "Can drainage surveys prevent flood risk?",
      answer: "Yes—early detection of blockages, structural defects, and capacity issues allows preventative intervention before surface water or foul drainage failures cause flooding, contamination, or operational disruption."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Drainage CCTV Surveys"
        description="High-definition remote inspection of internal and external drainage infrastructure."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Drainage CCTV Surveys</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-definition remote inspection of internal and external drainage infrastructure
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Camera className="w-8 h-8 text-primary" />
                  Remote Inspection of Below-Ground Infrastructure
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Drainage CCTV surveys provide non-invasive, high-definition inspection of underground drainage systems—identifying blockages, structural defects, root ingress, and misalignment before they escalate into flooding, contamination, or costly excavation.
                  </p>
                  <p>
                    Modern survey equipment captures detailed footage of foul, surface water, and combined drainage networks, producing reports that meet WRc standards for defect coding and severity grading.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Waves className="w-8 h-8 text-primary" />
                  Survey Methodology & Integration
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Jetting Integration</h3>
                    <p className="text-muted-foreground">
                      High-pressure water jetting clears obstructions before camera insertion, revealing underlying structural defects and ensuring accurate condition assessment.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Mapping & Reporting</h3>
                    <p className="text-muted-foreground">
                      Survey footage is geolocated, defects are coded using WRc standards, and reports include remedial recommendations prioritized by risk and cost.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Structural Defects</h3>
                    <p className="text-muted-foreground">
                      Cameras detect cracks, collapsed sections, joint displacement, corrosion, and material degradation—critical for preventing system failure and flooding.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Flood Risk Prevention</h3>
                    <p className="text-muted-foreground">
                      Early detection of capacity issues, blockages, and structural weaknesses allows preventative intervention before drainage failures cause operational disruption.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  Applications & Use Cases
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Drainage CCTV surveys are essential for:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Pre-acquisition due diligence:</strong> Assess drainage condition before property purchase to avoid inheriting costly defects</li>
                    <li><strong>Routine estate maintenance:</strong> Preventative surveys identify issues before they escalate into emergency repairs</li>
                    <li><strong>Post-flooding investigation:</strong> Determine root causes and document structural damage for insurance claims</li>
                    <li><strong>Compliance documentation:</strong> Provide evidence of drainage condition for environmental permits and insurance requirements</li>
                    <li><strong>Remedial planning:</strong> Inform scope and cost of drainage repairs, relining, or replacement programs</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Risks of Undetected Drainage Defects
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Failure to inspect drainage infrastructure exposes estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Flooding:</strong> Blockages, collapses, or capacity failures cause surface water or foul drainage backups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Environmental contamination:</strong> Foul water escaping through cracks or misaligned joints breaches environmental regulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Emergency excavation:</strong> Undetected defects escalate into reactive repairs with higher costs and operational disruption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Insurance complications:</strong> Lack of maintenance records or condition surveys can invalidate claims for drainage-related damage</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Related Water & Drainage Services
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/services/interceptor-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Interceptor Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Oil and fuel separator servicing</p>
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
                    <p className="text-sm text-muted-foreground">Legionella control and risk management</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request a Drainage Survey</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about comprehensive drainage CCTV inspection for your estate.
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

export default DrainageCCTVSurveys;
