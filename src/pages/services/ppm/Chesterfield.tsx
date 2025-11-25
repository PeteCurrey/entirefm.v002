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

const PPMChesterfield = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is PPM critical for logistics operations?",
      answer: "Logistics estates operate on tight schedules where downtime equals lost orders and revenue. PPM prevents system failures during peak operational periods, maintaining productivity and protecting customer commitments."
    },
    {
      question: "How quickly can PPM impact operational costs?",
      answer: "Most logistics operators see measurable cost reductions within 6-12 months through reduced emergency callouts, extended asset life, energy optimization, and avoided downtime losses."
    }
  ];

  return (
    <>
      <Helmet>
        <title>PPM Services in Chesterfield | Planned Preventative Maintenance | Entire FM</title>
        <meta 
          name="description" 
          content="PPM for Chesterfield logistics estates. Safety and productivity protection preventing lost orders from downtime. Book PPM audit." 
        />
        <link rel="canonical" href="https://entirefm.com/services/ppm" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Chesterfield"
        description="PPM for logistics estates preventing operational downtime"
        areaServed="Chesterfield"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Chesterfield"
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
          { label: "PPM", href: "/services/ppm" },
          { label: "Chesterfield" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Chesterfield" }
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
                  Planned Preventive Maintenance – Chesterfield
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Logistics estates face reality: downtime equals lost orders. PPM delivers safety and productivity protection through integrated asset management.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/chesterfield')}>
                  <Link to="/contact">
                    Book PPM Audit
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Logistics Estates = Downtime = Lost Orders
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Chesterfield's M1 corridor logistics facilities operate on tight schedules. Integrated PPM prevents system failures that disrupt operations and customer commitments.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Logistics-focused PPM:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire protection and safety compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">HVAC efficiency and staff comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Electrical reliability and emergency lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Operational-hours maintenance scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Predictive failure prevention</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Distribution Centre – Uptime Increased Through Proactive Maintenance
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Multi-site logistics operator faced recurring HVAC and electrical failures disrupting peak-season operations. We deployed integrated PPM programme — achieving 99.2% system availability and eliminating operational disruption during critical Q4 trading period.
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
                  Operational Continuity. Zero Lost Orders. Peak Performance.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 chesterfield@entirefm.com
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

export default PPMChesterfield;