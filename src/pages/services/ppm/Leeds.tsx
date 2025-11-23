import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Settings } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const PPMLeeds = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How does PPM support corporate HQ operations?",
      answer: "Corporate environments demand absolute reliability. PPM ensures continuous operations, prevents reputational damage from system failures, maintains tenant satisfaction, and provides audit-ready compliance documentation for all critical building systems."
    },
    {
      question: "What is included in digital governance platforms?",
      answer: "Complete visibility of all maintenance activities, certificates, compliance renewals, SLA performance, asset histories, and remedial tracking — accessible 24/7 through secure online portals with automated alert systems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Leeds | Corporate PPM | Entire FM</title>
        <meta 
          name="description" 
          content="PPM safeguarding corporate HQ operations in Leeds. Fire, HVAC, electrical, gas, water bundled in one governance platform. Book PPM assessment." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/leeds" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Leeds"
        description="PPM programmes safeguarding corporate HQ operations"
        areaServed="Leeds"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Leeds"
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
          { label: "PPM", href: "/services/ppm" },
          { label: "Leeds" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Leeds" }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-primary">Planned Preventive Maintenance</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light mb-6">
                  Planned Preventive Maintenance – Leeds
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Corporate HQs rely on predictable operations. Our PPM programmes safeguard them through integrated fire, HVAC, electrical, gas, and water management in one governance platform.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/leeds')}>
                  <Link to="/contact">
                    Book PPM Assessment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Corporate Operations Demand Predictable Reliability
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Leeds' premium office estates cannot tolerate unexpected system failures. Integrated PPM delivers the reliability corporate environments require with complete compliance governance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Unified PPM delivery:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire protection systems and emergency response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">HVAC performance and tenant comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Electrical safety and certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Water and gas compliance programmes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Predictive maintenance and asset planning</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Retail Centre – Uptime Protected Through Predictive Maintenance
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major Leeds retail estate operator faced recurring HVAC comfort complaints during peak trading periods. We deployed predictive PPM programme identifying 8 critical pre-failure conditions — preventing system failures during Christmas trading period and achieving zero tenant complaints across 18-month programme.
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
                  City Centre, Holbeck, White Rose district, Headingley, and all Leeds metropolitan areas.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Predictable Operations. Zero Surprises. Complete Control.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 leeds@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Build PPM Programme
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

export default PPMLeeds;