"use client";

;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Wind } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const HVACLincoln = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How do you handle HVAC in sensitive heritage buildings?",
      answer: "We employ non-invasive assessment techniques, respect building fabric constraints, and design HVAC solutions that balance conservation requirements with modern comfort and safety standards."
    },
    {
      question: "What IAQ oversight is required for healthcare facilities?",
      answer: "Healthcare environments require continuous IAQ monitoring including temperature, humidity, CO2, particulates and air changes per hour. We provide automated monitoring with immediate alert capability for out-of-range conditions."
    }
  ];

  return (
    <>
      

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Lincoln"
        description="Healthcare and heritage HVAC compliance with sensitive IAQ focus"
        areaServed="Lincoln"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Lincoln"
        address={{
          street: "Lincoln Service Centre",
          city: "Lincoln",
          postalCode: "LN1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Lincoln" }
        ]}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Lincoln" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Wind className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-primary">HVAC & F-Gas Compliance</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light mb-6">
                  HVAC & F-Gas Compliance – Lincoln
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Healthcare and heritage HVAC compliance with sensitive IAQ oversight, TM44 audits and energy optimization.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/lincoln')}>
                  <Link href="/contact">
                    Request TM44 Inspection
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Healthcare + Heritage Assets = Sensitive HVAC Control
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Lincoln's healthcare and heritage estates require HVAC systems that protect vulnerable populations and historic fabric while maintaining strict regulatory compliance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Sensitive facilities expertise:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 certification with heritage consideration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Indoor Air Quality oversight and monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas compliance with minimal disruption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Energy optimization for public sector estates</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Hospital Wing – AHU Risk Mitigated
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    NHS facility required urgent AHU compliance upgrade without disrupting patient care. We delivered phased TM44 audit, critical AHU servicing, F-Gas rectification and IAQ improvement programme—achieving full compliance with zero patient impact.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Healthcare", "Heritage", "Hospitality", "Public Sector", "Education"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Ermine, Branston, North Hykeham, and all Lincoln districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Sensitive Facilities HVAC. Patient & Heritage Protection.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 lincoln@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Request Compliance Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>
            </div>

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

export default HVACLincoln;