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

const PPMManchester = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is PPM critical for student accommodation?",
      answer: "PBSA properties face intense regulatory scrutiny and high tenant expectations. PPM ensures continuous safety compliance, prevents reputation-damaging failures, and maintains optimal living conditions throughout the academic year."
    },
    {
      question: "Can PPM programmes be customized by building?",
      answer: "Yes. We tailor maintenance schedules to each property's systems, occupancy patterns, and compliance requirements while maintaining unified governance and reporting across your entire portfolio."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Manchester | PPM PBSA | Entire FM</title>
        <meta 
          name="description" 
          content="Integrated PPM for Manchester student and hospitality estates. Protect reputation and revenue with proactive maintenance across essential services. Create schedule." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/manchester" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Manchester"
        description="Integrated PPM for student and hospitality estates"
        areaServed="Manchester"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Manchester"
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
          { label: "PPM", href: "/services/ppm" },
          { label: "Manchester" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Manchester" }
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
                  Planned Preventive Maintenance – Manchester
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Integrated PPM protecting reputation and revenue for Manchester's student accommodation and hospitality estates through proactive maintenance across essential services.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/manchester')}>
                  <Link to="/contact">
                    Create Maintenance Schedule
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Student & Hospitality Estates = High Exposure if Systems Fail
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Manchester's high-occupancy properties demand absolute reliability. Unplanned failures damage reputation, trigger complaints, and create regulatory risk. Integrated PPM prevents that pain entirely.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Complete service integration:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire protection and emergency systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">HVAC comfort and IAQ management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Electrical safety and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Water hygiene and gas safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Digital compliance governance</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    PBSA Portfolio – 100% Compliance Maintained Year-Round
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    1,200-bed PBSA operator struggled with fragmented compliance records and recurring tenant complaints about system failures. We deployed unified PPM programme with digital governance — achieving sustained 100% compliance across all safety-critical systems and reducing tenant complaints by 67% within one academic year.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["PBSA", "Hospitality", "Entertainment", "Corporate Offices", "Retail"].map((sector) => (
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
                  Protect Reputation. Eliminate Failures. Maintain Compliance.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 manchester@entirefm.com
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

export default PPMManchester;