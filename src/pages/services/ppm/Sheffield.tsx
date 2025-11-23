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

const PPMSheffield = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is predictive maintenance critical for industrial facilities?",
      answer: "Industrial operations have zero tolerance for unplanned downtime. Predictive maintenance identifies potential failures before they occur, protecting production schedules, workforce safety, and revenue continuity."
    },
    {
      question: "How does PPM reduce total cost of ownership?",
      answer: "PPM extends asset lifespan, reduces emergency repair costs, prevents production losses, optimizes energy consumption, and provides budget certainty — typically delivering 20-30% reduction in total maintenance costs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Sheffield | Industrial PPM | Entire FM</title>
        <meta 
          name="description" 
          content="Industrial PPM for Sheffield manufacturing estates. Predictive maintenance and full compliance management. Protect asset availability." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/sheffield" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Sheffield"
        description="Industrial PPM with predictive maintenance focus"
        areaServed="Sheffield"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Sheffield"
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
          { label: "PPM", href: "/services/ppm" },
          { label: "Sheffield" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Sheffield" }
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
                  Planned Preventive Maintenance – Sheffield
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Industrial operations demand zero tolerance for downtime. Our PPM delivers predictive maintenance and full compliance management protecting asset availability.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/sheffield')}>
                  <Link to="/contact">
                    Protect Asset Availability
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Industrial Operations = No Tolerance for Downtime
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Sheffield's manufacturing and industrial environments require absolute system reliability. Predictive PPM programmes identify and resolve issues before they impact production.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Critical facilities PPM:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Predictive maintenance and failure prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Production-sensitive scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire, electrical, and HVAC integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Water hygiene and gas safety compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">24/7 emergency response capability</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Factory Estate – Breakdown Risk Reduced Through Predictive Analytics
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Advanced manufacturing facility faced recurring unplanned maintenance disrupting production schedules. We deployed predictive PPM programme with condition monitoring — identifying 15 pre-failure asset conditions and preventing £340k estimated production loss over 12-month period.
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
                  Production Continuity. Zero Unplanned Downtime.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 sheffield@entirefm.com
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

export default PPMSheffield;