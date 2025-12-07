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

const HVACDerby = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How do you prevent HVAC downtime in critical facilities?",
      answer: "We implement predictive maintenance strategies, 24/7 monitoring capability, rapid response protocols, and maintain critical spare parts inventory to ensure maximum uptime for mission-critical environments."
    },
    {
      question: "What is VRF maintenance?",
      answer: "Variable Refrigerant Flow maintenance includes indoor/outdoor unit servicing, refrigerant circuit testing, control system verification, and performance optimization to ensure efficient multi-zone climate control."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Compliance in Derby | TM44 & F-Gas Services | Entire FM</title>
        <meta 
          name="description" 
          content="Transport and manufacturing HVAC compliance in Derby. TM44 certification, AHU and VRF maintenance. Zero downtime focus. Book F-Gas check." 
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac-compliance" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Derby"
        description="Transport and manufacturing HVAC compliance with uptime focus"
        areaServed="Derby"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Derby"
        address={{
          street: "Derby Service Centre",
          city: "Derby",
          postalCode: "DE1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Derby" }
        ]}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Derby" }
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
                  HVAC & F-Gas Compliance – Derby
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Transport and manufacturing HVAC compliance with TM44 certification, AHU and VRF maintenance for Derby's critical facilities.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/derby')}>
                  <Link to="/contact">
                    Book F-Gas Check
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Transport/Manufacturing — Ventilation Failure = Downtime Risk
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Derby's aerospace and transport facilities require absolute HVAC reliability with zero tolerance for system failures that impact production continuity.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Critical facilities expertise:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 certification and compliance audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Air Handling Unit servicing and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">VRF system maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas compliance and leak management</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Aerospace Site – Uptime Protected
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Critical aerospace facility required HVAC reliability upgrade without production interruption. We delivered phased TM44 compliance audit, refrigerant system optimization, and predictive maintenance programme—achieving full compliance while maintaining 100% operational continuity.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Aerospace", "Transport", "Manufacturing", "Industrial Parks", "Commercial"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Pride Park, Sinfin, Allestree, and all Derby districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Critical Facilities HVAC. Zero Downtime Tolerance.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 derby@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Schedule HVAC Audit
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

export default HVACDerby;