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

const FireSuppressionSystemsNovecFM200 = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Clean Agent Fire Suppression" }
  ];

  const faqs = [
    {
      question: "What is the difference between FM200, Novec 1230, and Inergen?",
      answer: "FM200 is a hydrofluorocarbon that suppresses fire chemically. Novec 1230 is a fluorinated ketone with lower environmental impact. Inergen is an inert gas blend (nitrogen, argon, CO2) that reduces oxygen levels. All are safe for occupied spaces and leave no residue."
    },
    {
      question: "How often should clean agent systems be tested?",
      answer: "Annual inspection including cylinder weight checks, pressure monitoring, nozzle integrity, room integrity testing, and control panel verification. Full discharge tests are typically conducted every 10 years or after any system activation."
    },
    {
      question: "Are clean agent systems affected by F-Gas regulations?",
      answer: "FM200 is subject to F-Gas regulations due to its global warming potential. Novec 1230 has a significantly lower GWP and is not currently restricted. Inergen is exempt as it contains no fluorinated gases."
    },
    {
      question: "What is room integrity testing?",
      answer: "A pressure decay test that verifies the protected space can hold the suppression agent long enough to extinguish the fire. Leaks around doors, dampers, and cable penetrations are identified and sealed to maintain effectiveness."
    }
  ];

  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Clean Agent Fire Suppression Systems"
        description="Inergen, FM200, and Novec 1230 suppression systems for server rooms, comms, and data-critical spaces. Clean-agent extinguishing with no residue."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Inergen, FM200 & Novec 1230 Suppression
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Clean-agent extinguishing systems for server rooms, comms and data-critical spaces.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Clean Agent Systems Matter
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Server rooms, telecommunications hubs, and data-critical facilities require fire suppression that won't destroy the very assets it's designed to protect. Water-based sprinkler systems cause catastrophic damage to electronics. Clean agent systems discharge gaseous suppressants that extinguish fire without leaving residue, allowing equipment to remain operational after discharge.
                  </p>
                  <p>
                    FM200 (HFC-227ea), Novec 1230 (FK-5-1-12), and Inergen (IG-541) are the three dominant clean agent technologies. FM200 works chemically by interrupting the combustion process. Novec 1230 combines chemical and physical cooling effects with minimal environmental impact. Inergen is an inert gas blend that reduces oxygen concentration to levels below combustion thresholds while remaining safe for human occupancy.
                  </p>
                  <p>
                    Annual testing includes cylinder pressure checks, room integrity testing (pressure hold tests), nozzle inspection, and control panel verification. F-Gas regulations apply to FM200 due to its global warming potential, making Novec 1230 and Inergen increasingly favoured for new installations and retrofits.
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
                        <h3 className="font-medium text-lg mb-2">ISO 14520</h3>
                        <p className="text-muted-foreground font-light">
                          Gaseous fire-extinguishing systems – Physical properties and system design. Defines agent-specific requirements for FM200, Novec 1230, and Inergen systems.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">NFPA 2001</h3>
                        <p className="text-muted-foreground font-light">
                          Standard on Clean Agent Fire Extinguishing Systems. Covers design, installation, testing, and maintenance of clean agent systems in the US and internationally.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-lg mb-2">F-Gas Regulations (EU) 517/2014</h3>
                        <p className="text-muted-foreground font-light">
                          Controls fluorinated greenhouse gases. FM200 systems require F-Gas certified engineers for maintenance. Novec 1230 and Inergen are not subject to these restrictions due to lower environmental impact.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Testing Requirements */}
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Testing & Maintenance Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Room Integrity Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Pressure decay testing to verify the protected enclosure can maintain agent concentration for the required hold time (typically 10 minutes). Identifies leaks around doors, dampers, cable penetrations, and suspended ceilings that must be sealed.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Pressure Holds & Cylinder Inspection</h3>
                        <p className="text-muted-foreground font-light">
                          Annual weighing and pressure monitoring of storage cylinders. Significant pressure loss or weight reduction indicates leakage requiring cylinder recharge or replacement.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Nozzle & Discharge Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Visual inspection of discharge nozzles for blockages or damage. Verification that nozzle positioning matches design calculations. Full discharge tests conducted after installation and every 10 years.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Environmental Regulations (F-Gas Crossover)</h3>
                        <p className="text-muted-foreground font-light">
                          FM200 systems require F-Gas certified engineers and leak detection measures. Many organisations are transitioning to Novec 1230 or Inergen to avoid regulatory burdens and align with ESG commitments.
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
                        <h3 className="font-medium mb-2">Total Data Loss & Business Interruption</h3>
                        <p className="text-muted-foreground font-light">
                          Failed suppression systems allow fire to destroy servers, network infrastructure, and backup systems. Data-dependent organisations can face days or weeks of downtime, with catastrophic financial and reputational consequences.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Inadequate Agent Concentration</h3>
                        <p className="text-muted-foreground font-light">
                          Poor room integrity or insufficient agent discharge results in sub-lethal concentrations that fail to extinguish fire. Leaks around unsealed penetrations allow agent to escape, compromising effectiveness.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6 border-destructive">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Legal & Insurance Exposure</h3>
                        <p className="text-muted-foreground font-light">
                          Inadequately maintained systems void insurance coverage. FM200 systems without F-Gas compliance can result in regulatory fines. The Responsible Person faces prosecution if fire results in loss due to system failure.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Your Critical Infrastructure
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for annual testing, room integrity surveys, and F-Gas compliant maintenance. Our engineers are certified on all major clean agent systems.
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
                    <Link href="/services/kitchen-suppression-systems" className="text-muted-foreground hover:text-foreground transition-colors">
                      Kitchen Suppression Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-lighting" className="text-muted-foreground hover:text-foreground transition-colors">
                      Emergency Lighting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hvac-compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                      HVAC & F-Gas Compliance
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

export default FireSuppressionSystemsNovecFM200;