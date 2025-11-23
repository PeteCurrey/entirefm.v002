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

const PPMBirmingham = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What compliance systems are covered by PPM?",
      answer: "All critical hard services: fire protection, electrical testing (EICR), HVAC/TM44/F-Gas, emergency lighting, water hygiene (ACOP L8), and gas safety including catering equipment compliance."
    },
    {
      question: "How does PPM improve operational reliability?",
      answer: "Proactive maintenance identifies and resolves issues before they cause failures, typically reducing unplanned downtime by 40-60% while extending asset lifespan and maintaining regulatory compliance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Birmingham | PPM Services | Entire FM</title>
        <meta 
          name="description" 
          content="Integrated PPM for Birmingham logistics and manufacturing estates. Fire, HVAC, electrical, water & gas compliance in one proactive programme. Build PPM plan." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/birmingham" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Birmingham"
        description="Integrated PPM for logistics and manufacturing estates"
        areaServed="Birmingham"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Birmingham"
        address={{
          street: "Birmingham Service Centre",
          city: "Birmingham",
          postalCode: "B1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "PPM", href: "/services/ppm" },
          { label: "Birmingham" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Birmingham" }
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
                  Planned Preventive Maintenance – Birmingham
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Integrated PPM consolidating fire, HVAC, electrical, water and gas compliance into one proactive programme for Birmingham's logistics and manufacturing hub.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/birmingham')}>
                  <Link to="/contact">
                    Build PPM Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Logistics & Manufacturing Demand Reliable Uptime
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Birmingham's industrial estates cannot afford unplanned downtime. Our PPM programmes consolidate all critical compliance services into one predictable, proactive maintenance schedule.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Complete PPM integration:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire protection systems maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">HVAC and F-Gas compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Electrical testing and certification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Water hygiene and gas safety programmes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Digital governance and CAFM integration</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    NEC Corridor Estate – Downtime Avoided Through Predictive Maintenance
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Multi-site logistics operator faced recurring HVAC failures during peak operational periods. We deployed integrated PPM programme with predictive asset monitoring — identifying and resolving 12 critical system vulnerabilities before failure, eliminating unplanned downtime during critical trading periods.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Logistics", "Manufacturing", "Industrial Parks", "Retail", "Commercial Offices"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Solihull, Digbeth, NEC corridor, and all Birmingham metropolitan areas.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Eliminate Downtime. Maintain Compliance. Reduce Costs.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 birmingham@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Build PPM Plan
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

export default PPMBirmingham;