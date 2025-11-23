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

const HVACLeeds = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What does AHU servicing include?",
      answer: "Complete Air Handling Unit servicing includes filter replacement, belt inspection and adjustment, motor and bearing checks, damper operation testing, and full system performance verification."
    },
    {
      question: "Can you optimize existing HVAC systems for energy efficiency?",
      answer: "Yes. We implement VSD optimization, BMS control upgrades, heat recovery, and refrigerant efficiency improvements to reduce energy costs while maintaining comfort standards."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC & F-Gas Compliance Leeds | TM44 Audits | Entire FM</title>
        <meta 
          name="description" 
          content="Corporate and retail HVAC compliance in Leeds. TM44 audits, AHU servicing and F-Gas infrastructure management. Book audit." 
        />
        <link rel="canonical" href="https://entirefm.com/hvac/leeds" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Leeds"
        description="Corporate and retail HVAC compliance with TM44 and F-Gas management"
        areaServed="Leeds"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Leeds"
        address={{
          street: "Leeds Service Centre",
          city: "Leeds",
          postalCode: "LS1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Leeds" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Leeds" }
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
                  HVAC & F-Gas Compliance – Leeds
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Corporate HQ and retail HVAC compliance with TM44 audits, AHU servicing and F-Gas infrastructure management.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/leeds')}>
                  <Link to="/contact">
                    Book HVAC Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Corporate HQs + Large Retail Centres Rely on HVAC Uptime
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Leeds' premium office and retail estates demand continuous HVAC performance with zero compromise on regulatory compliance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Complete service delivery:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 certification and energy performance assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Air Handling Unit servicing and optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas infrastructure compliance and leak detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Energy efficiency upgrades</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Retail Estate – Comfort Risk Eliminated
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major retail operator faced tenant complaints and TM44 non-compliance across multi-unit estate. We delivered complete HVAC audit, F-Gas rectification and system optimization—restoring comfort standards and achieving full compliance within deadline.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Corporate HQs", "Retail Centres", "Hospitality", "Commercial Offices", "Mixed-Use"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Holbeck, Headingley, White Rose district, and all Leeds metropolitan areas.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  HVAC Reliability. Regulatory Compliance. Energy Efficiency.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 leeds@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Request HVAC Audit
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

export default HVACLeeds;