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

const HVACNottingham = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is HVAC critical for PBSA properties?",
      answer: "Student accommodation requires consistent comfort standards and excellent indoor air quality to support health, concentration and satisfaction. HVAC failures trigger tenant complaints, regulatory scrutiny and reputational damage."
    },
    {
      question: "Can you provide capacity event HVAC support?",
      answer: "Yes. We design HVAC strategies for high-occupancy events including pre-event system verification, real-time monitoring and emergency response capability to maintain comfort during peak loads."
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Compliance in Nottingham | TM44 & F-Gas Services | Entire FM</title>
        <meta 
          name="description" 
          content="PBSA and leisure HVAC compliance in Nottingham. TM44 audits, refrigerant management and air quality monitoring. Book review." 
        />
        <link rel="canonical" href="https://entirefm.com/services/hvac-compliance" />
      </Helmet>

      <ServiceSchema
        name="HVAC & F-Gas Compliance Services - Nottingham"
        description="PBSA and leisure HVAC compliance with TM44 and air quality focus"
        areaServed="Nottingham"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - HVAC Services Nottingham"
        address={{
          street: "Nottingham Service Centre",
          city: "Nottingham",
          postalCode: "NG1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "HVAC Compliance", href: "/services/hvac" },
          { label: "Nottingham" }
        ]}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "HVAC Compliance", href: "/services/hvac" },
              { label: "Nottingham" }
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
                  HVAC Compliance – Nottingham
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  PBSA and leisure HVAC compliance with TM44 audits, refrigerant management and air quality monitoring.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/hvac/nottingham')}>
                  <Link to="/contact">
                    Book HVAC Compliance Review
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  PBSA + Leisure HVAC Must Support Capacity Events
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Nottingham's student and entertainment venues require HVAC systems capable of maintaining comfort during high-occupancy periods with strict regulatory compliance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Complete service coverage:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">TM44 certification and energy compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Refrigerant compliance and leak management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Indoor Air Quality monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Capacity event HVAC planning</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Student Estate – Overheating Risk Removed
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    PBSA operator faced persistent summer overheating complaints and F-Gas compliance concerns. We delivered complete system audit, cooling capacity upgrade, and refrigerant governance programme—eliminating comfort complaints and achieving full regulatory compliance.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["PBSA", "Leisure & Entertainment", "Retail", "Corporate Offices", "Heritage"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, West Bridgford, Beeston, Colwick, and all Nottingham districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Tenant Comfort. Regulatory Compliance. Zero Complaints.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 nottingham@entirefm.com
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Request Compliance Review
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

export default HVACNottingham;