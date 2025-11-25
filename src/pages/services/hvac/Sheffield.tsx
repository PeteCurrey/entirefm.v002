import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Wind } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const HVACSheffield = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How do you handle high-heat process cooling?",
      answer: "We provide specialized cooling solutions for industrial environments including chiller maintenance, heat rejection optimization, and emergency cooling contingency planning to protect production continuity."
    },
    {
      question: "What causes HVAC energy inefficiency?",
      answer: "Common causes include poor control strategies, refrigerant leaks, worn components, incorrect system sizing, and lack of preventative maintenance. Our audits identify and rectify all efficiency barriers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Compliance in Sheffield | TM44 & F-Gas Services | Entire FM</title>
        <meta 
          name="description" 
          content="Industrial HVAC compliance in Sheffield. TM44 audits, process cooling and F-Gas leak detection. Energy performance improvements. Book audit." 
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac-compliance" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Sheffield"
        description="Industrial HVAC compliance with TM44 and process cooling expertise"
        areaServed="Sheffield"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Sheffield"
        address={{
          street: "Sheffield Service Centre",
          city: "Sheffield",
          postalCode: "S1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Sheffield" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Sheffield" }
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
                  HVAC & F-Gas Compliance – Sheffield
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Industrial air handling, high-heat process cooling and strict F-Gas compliance for Sheffield's manufacturing estates.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/sheffield')}>
                  <Link to="/contact">
                    Request TM44 + F-Gas Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Industrial Heat Loads + Stagnation Risk = Compliance Essential
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Sheffield's industrial environments demand robust HVAC systems with continuous performance monitoring and strict refrigerant governance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Full compliance delivery:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 audits and energy performance certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas leak detection and remediation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Industrial ventilation optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Energy performance improvements</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Industrial Park – Ventilation Compliance Restored
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Manufacturing facility faced HSE enforcement notice regarding ventilation safety and pending F-Gas compliance deadline. We delivered emergency ventilation upgrade, complete leak rectification and TM44 certification—restoring full compliance without production shutdown.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Advanced Manufacturing", "Industrial Parks", "Retail", "Logistics", "Mixed-Use"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Lower Don Valley, Meadowhall, Attercliffe, Hillsborough, and all Sheffield districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Industrial HVAC Expertise. Zero Compliance Risk.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 sheffield@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Book HVAC Audit
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

export default HVACSheffield;