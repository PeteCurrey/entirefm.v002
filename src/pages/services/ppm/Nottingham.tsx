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

const PPMNottingham = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How does PPM prevent customer-facing failures?",
      answer: "Proactive maintenance schedules eliminate unexpected system failures during peak occupancy periods. PBSA and leisure operators report 60-80% reduction in tenant complaints after PPM implementation."
    },
    {
      question: "Can PPM be deployed mid-academic year?",
      answer: "Yes. We specialize in seamless onboarding without disrupting operations, including rapid compliance audits, gap closure programmes, and phased implementation aligned with term schedules."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Nottingham | PBSA PPM | Entire FM</title>
        <meta 
          name="description" 
          content="PPM for Nottingham PBSA and leisure estates. Proactive asset management prevents customer-facing failures. Build custom PPM plan." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/nottingham" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Nottingham"
        description="PPM for PBSA and leisure estates preventing customer-facing failures"
        areaServed="Nottingham"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Nottingham"
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
          { label: "PPM", href: "/services/ppm" },
          { label: "Nottingham" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Nottingham" }
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
                  Planned Preventive Maintenance – Nottingham
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  PBSA and leisure estates face immediate impact from unplanned outages. Proactive asset management prevents that pain entirely through integrated PPM.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/nottingham')}>
                  <Link to="/contact">
                    Build Custom PPM Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  PBSA & Leisure = Unplanned Outages Hit Customers Immediately
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Student accommodation and entertainment venues cannot afford system failures during occupied periods. Integrated PPM protects tenant satisfaction and regulatory compliance.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">High-occupancy PPM expertise:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire safety and emergency systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">HVAC comfort and indoor air quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Hot water reliability and Legionella control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Electrical safety and emergency lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Occupancy-sensitive scheduling</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    PBSA Portfolio – 100% Compliance Restored Across Academic Year
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    850-bed student accommodation operator faced regulatory scrutiny and persistent tenant complaints about hot water and heating reliability. We deployed integrated PPM programme — restoring 100% compliance across all safety-critical systems and eliminating comfort complaints within one academic term.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["PBSA", "Leisure & Entertainment", "Retail", "Heritage", "Corporate Offices"].map((sector) => (
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
                  Tenant Satisfaction. Zero Failures. Complete Compliance.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 nottingham@entirefm.com
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

export default PPMNottingham;