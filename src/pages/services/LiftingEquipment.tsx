import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const LiftingEquipment = () => {
  const { trackProposalRequest } = useConversionTracking();

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Lifting Equipment" }
  ];

  const faqs = [
    {
      question: "What is LOLER compliance?",
      answer: "LOLER (Lifting Operations and Lifting Equipment Regulations 1998) requires that all lifting equipment is thoroughly examined at specified intervals by a competent person to ensure it remains safe for use."
    },
    {
      question: "How often should lifting equipment be inspected?",
      answer: "Under LOLER, lifting equipment must be thoroughly examined at least every 6 or 12 months depending on the equipment type and use. Equipment used to lift people requires 6-monthly examinations, while most other lifting equipment requires annual examinations."
    },
    {
      question: "What equipment is covered by LOLER?",
      answer: "LOLER covers all lifting equipment including lifts, hoists, cranes, mobile elevating work platforms (MEWPs), scissor lifts, vehicle inspection ramps, patient hoists, lifting slings, chains, eyebolts, and lifting accessories."
    },
    {
      question: "What happens if equipment fails inspection?",
      answer: "Equipment that fails inspection must be immediately removed from service. We provide detailed failure reports and can arrange urgent repairs or replacement to minimize operational disruption."
    }
  ];

  const relatedServices = [
    { title: "Height Safety Systems", href: "/services/height-safety" },
    { title: "Fire Safety", href: "/services/fire-safety" },
    { title: "Electrical Compliance", href: "/services/electrical" }
  ];

  const ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lifting Equipment Inspection & Testing (LOLER)",
    "description": "LOLER-compliant lifting equipment inspection, testing and certification services",
    "provider": {
      "@type": "Organization",
      "name": "EntireFM"
    },
    "areaServed": "United Kingdom",
    "serviceType": "Lifting Equipment Compliance"
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
      <Helmet>
        <title>Lifting Equipment Inspection & Testing (LOLER) | EntireFM</title>
        <meta name="description" content="LOLER-compliant lifting equipment inspection, testing and certification. Thorough examinations for hoists, lifts, cranes, MEWPs and all lifting accessories." />
        <link rel="canonical" href="https://entirefm.com/services/lifting-equipment" />
      </Helmet>

      <SchemaMarkup schema={ServiceSchema} />
      <SchemaMarkup schema={FAQSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background/90 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')` }} aria-label="Industrial lifting equipment inspection and LOLER compliance testing" />
        
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">Lifting Equipment Inspection</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">LOLER-compliant thorough examinations. Protecting operations and personnel.</p>
          <Button size="lg" variant="secondary" onClick={() => trackProposalRequest('lifting-equipment')}>Request Inspection</Button>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-light mb-6 underline-accent inline-block">LOLER Compliance Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) place legal duties on organizations to ensure lifting equipment remains safe throughout its working life. EntireFM delivers comprehensive LOLER thorough examinations by competent engineers, protecting your people and operations.
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Legislative Framework</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>LOLER 1998:</strong> Thorough examination at specified intervals by competent person</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>PUWER 1998:</strong> Provision and Use of Work Equipment Regulations compliance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Health & Safety at Work Act 1974:</strong> Duty of care to employees and public</p>
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
                      <td className="border border-border p-3">Person-lifting equipment</td>
                      <td className="border border-border p-3">Every 6 months</td>
                      <td className="border border-border p-3">LOLER Reg 9</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Goods-lifting equipment</td>
                      <td className="border border-border p-3">Every 12 months</td>
                      <td className="border border-border p-3">LOLER Reg 9</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Lifting accessories</td>
                      <td className="border border-border p-3">Every 6-12 months</td>
                      <td className="border border-border p-3">Based on use</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Mobile elevating work platforms</td>
                      <td className="border border-border p-3">Every 6 months</td>
                      <td className="border border-border p-3">LOLER Reg 9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Equipment Coverage</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Fixed Equipment</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Passenger & goods lifts</li>
                    <li>• Service lifts & dumbwaiters</li>
                    <li>• Platform lifts</li>
                    <li>• Vehicle inspection ramps</li>
                    <li>• Overhead cranes & gantries</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Mobile Equipment</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• MEWPs & scissor lifts</li>
                    <li>• Mobile cranes</li>
                    <li>• Hoists & winches</li>
                    <li>• Patient hoists</li>
                    <li>• Pallet trucks (powered)</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Lifting Accessories</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Wire rope slings</li>
                    <li>• Chain slings & shackles</li>
                    <li>• Webbing slings & straps</li>
                    <li>• Eyebolts & lifting points</li>
                    <li>• Hooks & karabiners</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Specialized Equipment</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Stage & theatrical rigging</li>
                    <li>• Vehicle lifts & ramps</li>
                    <li>• Loading bay equipment</li>
                    <li>• Dock levellers</li>
                    <li>• Tail lifts</li>
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
                    <li>• Unlimited fines for corporate manslaughter following lifting equipment failure</li>
                    <li>• Personal prosecution of directors and responsible persons</li>
                    <li>• Imprisonment up to 2 years for serious breaches</li>
                    <li>• HSE prohibition notices halting operations</li>
                    <li>• Insurance policy invalidation following incidents</li>
                    <li>• Reputational damage and loss of contracts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Our LOLER Service</h3>
              <p className="text-muted-foreground mb-4">EntireFM delivers comprehensive LOLER thorough examinations through competent engineers holding relevant qualifications and experience:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Pre-inspection planning:</strong> Equipment registers and examination scheduling</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Thorough examination:</strong> Visual, functional and load testing where appropriate</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Detailed reporting:</strong> Pass/fail certification with defect categorization</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Defect rectification:</strong> Immediate or planned remedial works</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Equipment registers:</strong> Centralized tracking and compliance management</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p><strong>Renewal reminders:</strong> Automated alerts preventing lapses</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-light mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedServices.map((service, index) => (
                  <Link key={index} to={service.href}>
                    <Card className="p-4 hover:shadow-lg transition-shadow h-full">
                      <h4 className="font-semibold">{service.title}</h4>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            <FAQSection faqs={faqs} />

            <div className="mt-12 text-center">
              <Button size="lg" onClick={() => trackProposalRequest('lifting-equipment')}>
                Request LOLER Inspection
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

export default LiftingEquipment;