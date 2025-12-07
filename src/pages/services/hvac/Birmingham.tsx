import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Wind, Thermometer } from "lucide-react";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema, LocalBusinessSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { useConversionTracking } from "@/hooks/useConversionTracking";

const HVACBirmingham = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "What is included in TM44 certification?",
      answer: "TM44 inspections include energy efficiency assessment of AC systems, performance testing, refrigerant leak checks, control system review, and detailed recommendations for efficiency improvements."
    },
    {
      question: "Can HVAC maintenance be scheduled outside working hours?",
      answer: "Yes. We accommodate operational requirements by scheduling maintenance during evenings, weekends, or shutdown periods to minimize business disruption."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Compliance in Birmingham | TM44 & F-Gas Services | Entire FM</title>
        <meta 
          name="description" 
          content="Industrial HVAC maintenance, TM44 audits and F-Gas compliance for Birmingham estates. Retail and logistics cooling optimization. Book audit." 
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac-compliance" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Birmingham"
        description="Industrial HVAC maintenance, TM44 audits and F-Gas compliance"
        areaServed="Birmingham"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Birmingham"
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
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Birmingham" }
        ]}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Birmingham" }
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
                  HVAC & F-Gas Compliance – Birmingham
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Industrial HVAC maintenance, TM44 audits and F-Gas compliance for Birmingham's retail and logistics estates.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/birmingham')}>
                  <Link to="/contact">
                    Book TM44 Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Industrial HVAC + Retail Comfort = Critical Business Uptime
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Large workforce volumes combined with high-capacity cooling systems demand reliable HVAC performance and strict F-Gas governance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">We deliver:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 certification and energy assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">F-Gas leak detection and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">AHU servicing and filter management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Energy optimization strategies</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    NEC Venue – IAQ Enhancement and Compliance Uplift
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major hospitality venue required urgent TM44 compliance alongside improved indoor air quality for high-occupancy events. We delivered full system audit, refrigerant governance and ventilation optimization—achieving compliance certification and measurable IAQ improvement.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Industrial", "Retail", "Logistics", "Hospitality", "Commercial Offices"].map((sector) => (
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
                  HVAC Compliance. Energy Efficiency. Zero Downtime.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 birmingham@entirefm.com
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

export default HVACBirmingham;