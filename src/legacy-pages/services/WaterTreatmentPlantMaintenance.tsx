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

const WaterTreatmentPlantMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Water Treatment Plant Maintenance" }
  ];

  const faqs = [
    {
      question: "What water treatment systems are common in commercial estates?",
      answer: "Large estates use filtration systems removing sediment and particulates, water softeners preventing scale buildup in heating systems, UV sterilization for potable water, and chlorination systems for cooling towers and ornamental water features. Each system requires specific maintenance regimes ensuring continued effective treatment and regulatory compliance."
    },
    {
      question: "How does water treatment relate to legionella control?",
      answer: "Water treatment plants often serve cooling towers, evaporative condensers, and water features—all high-risk legionella systems. Biocide dosing, temperature control, and system cleaning prevent legionella colonization. Treatment plant failures cause inadequate biocide levels allowing bacterial growth. Water treatment maintenance integrates with wider legionella control programs."
    },
    {
      question: "What maintenance do water softeners require?",
      answer: "Salt level monitoring ensures regeneration cycles function correctly. Resin bed inspection identifies fouling requiring chemical cleaning or replacement. Control valve testing verifies automatic regeneration timing. Bypass valve operation testing enables isolation during maintenance. Failed softeners cause scale accumulation damaging heating systems and reducing efficiency."
    },
    {
      question: "What are the consequences of treatment plant failure?",
      answer: "Filtration failures allow sediment accumulation blocking pipework and damaging pumps. Softener failures cause scale buildup reducing heat exchanger efficiency and causing boiler failures. Chlorination failures in cooling towers create legionella risks requiring immediate system shutdown and disinfection. Treatment plant neglect generates expensive remedial works and regulatory enforcement."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Water Treatment Plant Maintenance"
        description="Commercial water quality systems for large estates including filtration media checks, softener maintenance, chlorination, and legionella control integration."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Water Treatment Plant Maintenance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Commercial water quality systems for large estates.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  The Foundation of Water Quality Management
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Large commercial estates operate water treatment plants processing incoming mains water for specific applications: softening preventing scale in heating systems, filtration removing sediment protecting pipework, UV sterilization ensuring potable water quality, and chlorination controlling bacteria in cooling towers. Treatment plant failures compromise water quality causing equipment damage, operational disruptions, and health hazards requiring immediate remediation.
                  </p>
                  <p>
                    Water treatment systems require routine maintenance ensuring continued effective operation. Filtration media becomes fouled requiring backwashing or replacement. Water softener resin beds exhaust requiring regeneration. Chlorine dosing pumps fail allowing bacterial colonization in cooling systems. UV lamp output degrades reducing sterilization effectiveness. Without preventative maintenance, treatment plants transition from assets protecting systems to liabilities creating damage and compliance failures.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Treatment System Components
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Filtration Media Checks & Softener Maintenance</h3>
                        <p className="text-muted-foreground font-light">
                          Filtration media inspection identifies fouling requiring backwashing or media replacement. Pressure differential monitoring indicates blocked filters. Softener resin bed testing verifies ion exchange capacity remains adequate. Salt level monitoring ensures regeneration cycles function correctly. Control valve testing confirms automatic operation during regeneration cycles.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Chlorination Systems</h3>
                        <p className="text-muted-foreground font-light">
                          Chlorine dosing pump inspection identifies diaphragm wear, injection valve blockages, and calibration drift. Residual chlorine testing verifies adequate disinfectant levels throughout systems. Chemical tank level monitoring prevents treatment interruptions. Safety shower and eyewash station testing ensures emergency decontamination equipment functions correctly.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legionella Control Integration</h3>
                        <p className="text-muted-foreground font-light">
                          Water treatment plants often serve legionella-risk systems including cooling towers and water features. Treatment failures create inadequate biocide levels allowing bacterial colonization. Temperature monitoring, biocide residual testing, and system cleaning integrate with wider legionella control programs. Treatment plant records provide evidence of control measure effectiveness during regulatory inspections.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/services/water-hygiene" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Water Hygiene & Legionella
                  </Link>
                  <Link href="/services/plumbing" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Plumbing Services
                  </Link>
                  <Link href="/services/pump-room-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Pump Room Maintenance
                  </Link>
                  <Link href="/fm-insights/what-is-statutory-maintenance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Statutory Maintenance Guide
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Maintain Water Quality and System Protection
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for water treatment plant maintenance with filtration, softening, and chlorination system servicing.
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

export default WaterTreatmentPlantMaintenance;
