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

const PPMLincoln = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How does PPM support healthcare environments?",
      answer: "Healthcare facilities require absolute system reliability protecting patient safety and regulatory compliance. PPM delivers predictive maintenance, sensitive scheduling, and immediate emergency response capability without disrupting clinical operations."
    },
    {
      question: "Can PPM accommodate heritage building constraints?",
      answer: "Yes. We design PPM programmes respecting conservation requirements while ensuring modern safety and compliance standards, using non-invasive techniques and heritage-appropriate maintenance strategies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Lincoln | Healthcare PPM | Entire FM</title>
        <meta 
          name="description" 
          content="PPM for Lincoln healthcare and heritage estates. Integrated maintenance with digital compliance governance. Build long-term maintenance plan." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/lincoln" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Lincoln"
        description="PPM for healthcare and heritage estates with sensitive requirements"
        areaServed="Lincoln"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Lincoln"
        address={{
          street: "Lincoln Service Centre",
          city: "Lincoln",
          postalCode: "LN1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "PPM", href: "/services/ppm" },
          { label: "Lincoln" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Lincoln" }
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
                  Planned Preventive Maintenance – Lincoln
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Healthcare and heritage venues require absolute consistency. Integrated PPM with digital compliance governance ensures reliable operations protecting vulnerable populations.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/lincoln')}>
                  <Link to="/contact">
                    Build Long-Term Maintenance Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Healthcare & Heritage Require Absolute Consistency
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Lincoln's healthcare and heritage estates demand PPM programmes balancing modern compliance standards with sensitive operational requirements and conservation constraints.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Sensitive facilities PPM:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Patient-safe maintenance scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Heritage-appropriate techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire, electrical, and HVAC integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Water hygiene and infection control</span>
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
                    Hospital Estate – Compliance Stabilized Without Clinical Disruption
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    NHS facility faced regulatory enforcement risk with expired certificates across critical systems. We deployed phased PPM programme with clinical-safe scheduling — achieving 100% compliance across all safety-critical systems within 16 weeks with zero clinical service disruption.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Healthcare", "Heritage", "Hospitality", "Public Sector", "Education"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Ermine, Branston, North Hykeham, and all Lincoln districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Patient Safety. Heritage Protection. Complete Compliance.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 lincoln@entirefm.com
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

export default PPMLincoln;