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

const HVACManchester = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How often should F-Gas systems be inspected?",
      answer: "Systems containing 5+ tonnes CO2e require annual leak checks. Larger systems (50+ tonnes) need quarterly inspections. All systems must maintain accurate refrigerant logbooks."
    },
    {
      question: "What is Indoor Air Quality monitoring?",
      answer: "IAQ monitoring measures CO2, particulates, humidity and temperature to ensure occupant health and comfort. Critical for PBSA, offices and hospitality venues."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Compliance Manchester | TM44 & F-Gas | Entire FM</title>
        <meta 
          name="description" 
          content="TM44 audits, F-Gas compliance and IAQ monitoring for Manchester PBSA and corporate estates. Digital governance platform included." 
        />
        <link rel="canonical" href="https://entirefm.com/hvac/manchester" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Manchester"
        description="TM44 audits, F-Gas compliance and IAQ monitoring"
        areaServed="Manchester"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Manchester"
        address={{
          street: "Manchester Service Centre",
          city: "Manchester",
          postalCode: "M1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Manchester" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Manchester" }
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
                  HVAC Compliance – Manchester
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  TM44 audits, F-Gas compliance and IAQ monitoring for Manchester's PBSA and corporate estates.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/manchester')}>
                  <Link to="/contact">
                    Request HVAC Compliance Survey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Nightlife + Corporate + PBSA = Strict Comfort & IAQ Performance
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Manchester's student and entertainment populations demand exceptional HVAC reliability and indoor air quality standards.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Complete HVAC governance:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 certification and energy assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas leak detection and logbook management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Indoor Air Quality monitoring and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Digital compliance dashboard</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    PBSA Estate – Comfort Restored with IAQ Lift
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Student accommodation operator faced persistent tenant comfort complaints and pending TM44 compliance deadline. We delivered full system audit, F-Gas rectification, and IAQ improvement programme—achieving measurable comfort improvement and full regulatory compliance.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["PBSA", "Corporate Offices", "Hospitality", "Entertainment", "Retail"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Salford Quays, Trafford, Airport City, and all Greater Manchester districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  IAQ Excellence. F-Gas Compliance. Tenant Satisfaction.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 manchester@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Book HVAC Survey
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

export default HVACManchester;