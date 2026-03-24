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

const KitchenSuppressionSystems = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Kitchen Fire Suppression Systems" }
  ];

  const faqs = [
    {
      question: "How often should kitchen suppression systems be serviced?",
      answer: "NFPA 17A and BS 5306 require six-monthly inspections including nozzle checks, cylinder weight verification, activation linkage testing, and manual pull station functionality tests."
    },
    {
      question: "What is a wet chemical suppression system?",
      answer: "Wet chemical systems discharge potassium-based agents that react with hot oils to create a foam blanket, cooling the oil below its auto-ignition temperature and preventing re-ignition."
    },
    {
      question: "Can I operate my kitchen after the system discharges?",
      answer: "No. After discharge, the system must be professionally reset, cylinders refilled, and the entire installation re-commissioned before the kitchen can legally operate again."
    },
    {
      question: "What triggers automatic activation?",
      answer: "Fusible links above cooking appliances melt at specific temperatures (typically 79°C or 182°C), releasing the wet chemical agent. Manual pull stations provide emergency backup activation."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Kitchen Fire Suppression Systems"
        description="Wet chemical automatic suppression for commercial catering environments, including Ansul and PAFSS systems to NFPA and BS standards."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Kitchen Fire Suppression Systems
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Wet chemical automatic suppression for commercial catering environments.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Kitchen Suppression Systems Are Essential
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Commercial kitchen fires are among the most common and destructive in the facilities sector. Deep fat fryers, grills, and range cookers generate extreme heat, creating conditions where oil can reach auto-ignition temperature in seconds. Traditional sprinkler systems can cause explosive reactions when water contacts burning oil.
                  </p>
                  <p>
                    Wet chemical suppression systems (Ansul, PAFSS, and equivalent) discharge potassium-based agents that react with hot oil to create a saponification layer—essentially turning the oil into soap. This foam blanket cools the oil below its ignition point and prevents oxygen from reigniting the fire.
                  </p>
                  <p>
                    NFPA 17A and BS 5306-3 require six-monthly maintenance, including nozzle checks, cylinder weight verification, fusible link replacement, and activation testing. Failure to maintain these systems properly can result in catastrophic kitchen fires, total operational shutdown, and prosecution under fire safety legislation.
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
                        <h3 className="font-medium text-lg mb-2">NFPA 17A</h3>
                        <p className="text-muted-foreground font-light">
                          Standard for Wet Chemical Extinguishing Systems. Defines installation, inspection, and maintenance requirements for kitchen suppression systems in commercial catering environments.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">BS 5306-3</h3>
                        <p className="text-muted-foreground font-light">
                          Fire extinguishing installations and equipment on premises – Code of practice for the inspection and maintenance of portable fire extinguishers and installed systems.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">Regulatory Reform (Fire Safety) Order 2005</h3>
                        <p className="text-muted-foreground font-light">
                          Requires the Responsible Person to maintain fire suppression systems. Non-compliance can result in prohibition notices, prosecution, and unlimited fines.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Testing Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  System Components & Testing
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Ansul / PAFSS Systems</h3>
                        <p className="text-muted-foreground font-light">
                          Industry-standard brands for wet chemical suppression. Systems include discharge nozzles positioned above hazard areas, detection fusible links, manual pull stations, and pressurised cylinders.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Nozzle Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Visual inspection for blockages, corrosion, or grease build-up. Nozzles must be clear and correctly aligned over cooking appliances to ensure effective agent discharge during activation.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Cylinder Weight Checks</h3>
                        <p className="text-muted-foreground font-light">
                          Weighing cylinders to verify agent quantity. Significant weight loss indicates leakage or discharge. Cylinders must be refilled or replaced if weight falls below manufacturer specifications.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Activation Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Manual pull station functionality tests, fusible link integrity checks, and verification that activation triggers gas/power shutoff to cooking appliances. Full system activation tests are conducted during installation and after any discharge.
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
                        <h3 className="font-medium mb-2">Catastrophic Kitchen Fires</h3>
                        <p className="text-muted-foreground font-light">
                          Failed or poorly maintained systems cannot suppress deep fat fryer fires. Oil fires spread rapidly, reaching temperatures over 300°C, destroying kitchen equipment, and threatening adjacent areas.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Total Operational Shutdown</h3>
                        <p className="text-muted-foreground font-light">
                          Fire authorities can issue prohibition notices if suppression systems are inadequately maintained. Restaurants, hotels, and catering facilities face complete closure until compliance is restored.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legal and Insurance Consequences</h3>
                        <p className="text-muted-foreground font-light">
                          The Responsible Person can face prosecution and unlimited fines under fire safety legislation. Insurance claims may be rejected if maintenance records are not current, leaving operators financially exposed.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Your Kitchen with Compliant Suppression
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for six-monthly maintenance, cylinder refills, and emergency callout support. Our engineers are certified on all major brands including Ansul and PAFSS.
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
                    <Link href="/services/fire-alarms" className="text-muted-foreground hover:text-foreground transition-colors">
                      Fire Alarm Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/fire-suppression-systems-novec-fm200" className="text-muted-foreground hover:text-foreground transition-colors">
                      Clean Agent Suppression (FM200/Novec)
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/gas-safety" className="text-muted-foreground hover:text-foreground transition-colors">
                      Gas Safety & Interlock Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/grease-trap-maintenance" className="text-muted-foreground hover:text-foreground transition-colors">
                      Grease Trap Maintenance
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

export default KitchenSuppressionSystems;