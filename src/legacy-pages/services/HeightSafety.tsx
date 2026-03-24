"use client";

;
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const HeightSafety = () => {
  const { trackProposalRequest } = useConversionTracking();

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Height Safety Systems" }
  ];

  const faqs = [
    {
      question: "What is the Work at Height Regulations 2005?",
      answer: "The Work at Height Regulations 2005 require employers to ensure all work at height is properly planned, supervised, and carried out by competent persons using appropriate equipment. This includes risk assessment, fall protection measures, and regular inspection of height safety equipment."
    },
    {
      question: "How often should height safety equipment be inspected?",
      answer: "Fixed height safety systems must be inspected at least annually by a competent person. Equipment subject to exceptional circumstances or heavy use may require more frequent inspection. Personal fall protection equipment (harnesses, lanyards) should be inspected before each use and formally inspected every 12 months."
    },
    {
      question: "What height safety systems do you inspect?",
      answer: "We inspect all height safety systems including roof edge protection, anchor points, lifelines, fall arrest systems, ladder safety systems, walkway systems, skylight protection, and personal protective equipment (PPE) including harnesses and lanyards."
    },
    {
      question: "What happens if equipment fails inspection?",
      answer: "Any equipment that fails inspection must be immediately removed from service and clearly labeled. We provide detailed failure reports specifying the defects found and can arrange urgent repairs or replacement to restore safe access."
    }
  ];

  const relatedServices = [
    { title: "Lifting Equipment (LOLER)", href: "/services/lifting-equipment" },
    { title: "Fire Safety", href: "/services/fire-safety" },
    { title: "Building Fabric", href: "/services/building-fabric" }
  ];

  const ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Height Safety Systems Inspection & Testing",
    "description": "Work at Height Regulations compliant inspection and testing of fall protection systems, anchor points, and height safety equipment",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Height Safety Compliance"
  };

  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      

      <SchemaMarkup schema={ServiceSchema} />
      <SchemaMarkup schema={FAQSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503551723145-6c040742065b?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Height safety equipment inspection and fall protection systems testing" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Height Safety Systems</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">Work at Height Regulations compliance. Fall protection that protects lives.</p>
          <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('height-safety')}>Request Inspection</Button>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">Height Safety Compliance</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Falls from height remain the largest cause of workplace fatalities in the UK. The Work at Height Regulations 2005 impose strict duties on employers to protect workers. EntireFM delivers comprehensive height safety system inspection and testing, ensuring your fall protection measures remain effective and compliant.
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Legislative Framework</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Work at Height Regulations 2005:</strong> Duty to prevent falls and ensure equipment safety</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>BS 7883:2019:</strong> Code of practice for design, selection, installation, inspection and maintenance of anchor devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>BS EN 795:2012:</strong> Personal fall protection equipment - Anchor devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Health & Safety at Work Act 1974:</strong> General duty of care for workplace safety</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Inspection Frequencies</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Equipment Type</th>
                      <th className="border border-border p-3 text-left">Frequency</th>
                      <th className="border border-border p-3 text-left">Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Fixed anchor points</td>
                      <td className="border border-border p-3">Annually</td>
                      <td className="border border-border p-3">BS 7883:2019</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Horizontal lifeline systems</td>
                      <td className="border border-border p-3">Annually</td>
                      <td className="border border-border p-3">BS EN 795:2012</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Vertical ladder systems</td>
                      <td className="border border-border p-3">Annually</td>
                      <td className="border border-border p-3">BS EN 353-1</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Personal fall protection PPE</td>
                      <td className="border border-border p-3">Before each use + annually</td>
                      <td className="border border-border p-3">WAHD 2005</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Roof edge protection</td>
                      <td className="border border-border p-3">Annually + post-incident</td>
                      <td className="border border-border p-3">BS 6180</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Systems Covered</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Fixed Systems</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Roof anchor points (single & multi-point)</li>
                    <li>• Horizontal lifeline systems</li>
                    <li>• Fall arrest rail systems</li>
                    <li>• Permanent guardrails</li>
                    <li>• Roof edge protection systems</li>
                    <li>• Skylight protection grilles</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Access Systems</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ladder safety systems (vertical)</li>
                    <li>• Fixed ladder cages</li>
                    <li>• Walkway & platform systems</li>
                    <li>• Step-over systems</li>
                    <li>• Roof hatch systems</li>
                    <li>• Access gates in edge protection</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Personal Protective Equipment</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Full-body harnesses</li>
                    <li>• Energy-absorbing lanyards</li>
                    <li>• Self-retracting lifelines (SRLs)</li>
                    <li>• Karabiners & connectors</li>
                    <li>• Work positioning equipment</li>
                    <li>• Rope access equipment</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Temporary Systems</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Mobile anchor devices</li>
                    <li>• Temporary edge protection</li>
                    <li>• Counterweight anchor systems</li>
                    <li>• Mobile elevated work platforms</li>
                    <li>• Scaffolding inspection</li>
                    <li>• Safety netting systems</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div className="mb-12 bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-destructive">Consequences of Non-Compliance</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Falls from height account for 40+ workplace deaths annually in UK</li>
                    <li>• Unlimited fines for corporate manslaughter following fatal falls</li>
                    <li>• Average HSE fine for Work at Height breaches: £350,000+</li>
                    <li>• Personal prosecution and imprisonment up to 2 years for responsible persons</li>
                    <li>• Insurance invalidation if equipment not properly inspected</li>
                    <li>• HSE prohibition notices halting operations immediately</li>
                    <li>• Civil liability claims from injured workers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Our Height Safety Service</h3>
              <p className="text-muted-foreground mb-4">EntireFM's competent height safety engineers deliver comprehensive inspection services:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Site survey & equipment register:</strong> Identifying and cataloging all height safety systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Detailed inspection:</strong> Visual and functional testing of all components</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Load testing:</strong> Proof load testing of anchor points where required</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Certification:</strong> Pass/fail reports with photographic evidence</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Defect rectification:</strong> Repair or replacement services for failed equipment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Rescue planning:</strong> Assessment of rescue procedures and equipment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Training coordination:</strong> Arranging competent person training if required</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedServices.map((service, index) => (
                  <Link key={index} href={service.href}>
                    <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                      <h4 className="font-semibold">{service.title}</h4>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <FAQSection faqs={faqs} />

            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => trackProposalRequest('height-safety')}>
                Request Height Safety Inspection
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeightSafety;