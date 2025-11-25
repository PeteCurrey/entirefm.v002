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

const HVACChesterfield = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is HVAC efficiency important for large warehouse spaces?",
      answer: "Warehouses present unique HVAC challenges due to high ceilings, large volumes, and intermittent occupancy. Efficient systems dramatically reduce energy costs while maintaining staff welfare and protecting temperature-sensitive inventory."
    },
    {
      question: "What energy efficiency improvements deliver fastest ROI?",
      answer: "Variable speed drives, improved controls, heat recovery, and refrigerant optimization typically deliver 12-36 month payback periods while improving system reliability and compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Compliance in Chesterfield | TM44 & F-Gas Services | Entire FM</title>
        <meta 
          name="description" 
          content="Logistics HVAC compliance in Chesterfield. Warehouse cooling, TM44 audits and F-Gas leak detection. Energy efficiency focus. Book survey." 
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac-compliance" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Chesterfield"
        description="Logistics HVAC compliance with energy efficiency focus"
        areaServed="Chesterfield"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Chesterfield"
        address={{
          street: "Chesterfield Service Centre",
          city: "Chesterfield",
          postalCode: "S40",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Chesterfield" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Chesterfield" }
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
                  HVAC & F-Gas Compliance – Chesterfield
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Logistics cooling and staff welfare ventilation compliance with F-Gas leak detection and efficiency enhancements.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/chesterfield')}>
                  <Link to="/contact">
                    Book Survey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Logistics Cooling + Staff Welfare Ventilation Compliance
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Chesterfield's M1 corridor logistics facilities demand efficient HVAC systems that protect staff welfare while controlling operational energy costs.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Logistics HVAC expertise:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 audits and compliance certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas leak detection and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Large-space cooling optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Energy efficiency improvements</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Distribution Centre – Cooling Efficiency Improved
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Multi-site logistics operator faced escalating cooling costs and pending F-Gas compliance concerns. We delivered complete TM44 audit programme, refrigerant leak rectification, and control optimization—achieving 22% energy reduction and full regulatory compliance.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Logistics", "Distribution Centres", "Industrial Parks", "Warehousing", "Commercial"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Town Centre, Tapton, Clay Cross, Staveley, Whittington Moor, and all Chesterfield districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Logistics HVAC Efficiency. Compliance Certainty.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 chesterfield@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Request HVAC Survey
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

export default HVACChesterfield;