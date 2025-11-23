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

const PPMDerby = () => {
  const { trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "How does PPM support critical aerospace operations?",
      answer: "Aerospace and advanced engineering facilities require absolute system reliability. PPM delivers predictive maintenance, production-sensitive scheduling, and rapid emergency response to protect mission-critical operations."
    },
    {
      question: "What compliance systems are covered?",
      answer: "All safety-critical building services: fire protection, electrical safety, HVAC/ventilation, emergency lighting, water hygiene, and gas safety — integrated into one unified compliance programme."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Planned Preventive Maintenance Derby | Aerospace PPM | Entire FM</title>
        <meta 
          name="description" 
          content="PPM for Derby aerospace and engineering estates. Total reliability for production and public access. Schedule PPM review." 
        />
        <link rel="canonical" href="https://entirefm.com/ppm/derby" />
      </Helmet>

      <ServiceSchema
        name="Planned Preventive Maintenance Services - Derby"
        description="PPM for aerospace and advanced engineering environments"
        areaServed="Derby"
        provider="Entire FM"
      />

      <LocalBusinessSchema
        name="Entire FM - PPM Services Derby"
        address={{
          street: "Derby Service Centre",
          city: "Derby",
          postalCode: "DE1",
          country: "UK"
        }}
      />

      <BreadcrumbSchema 
        items={[
          { label: "Services", href: "/services" },
          { label: "PPM", href: "/services/ppm" },
          { label: "Derby" }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <Breadcrumb 
            items={[
              { label: "Services", href: "/services" },
              { label: "PPM", href: "/services/ppm" },
              { label: "Derby" }
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
                  Planned Preventive Maintenance – Derby
                </h1>
                <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                  Aerospace and advanced engineering environments demand total reliability. PPM keeps production and public access secure through predictive asset management.
                </p>
                <Button size="lg" asChild onClick={() => trackProposalRequest('/ppm/derby')}>
                  <Link to="/contact">
                    Schedule PPM Review
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">
                  Aerospace & Advanced Engineering = Total Reliability Required
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Derby's high-value manufacturing and transport facilities demand PPM programmes designed for mission-critical operations with zero tolerance for system failures.
                </p>
                <Card className="p-6">
                  <h3 className="font-medium mb-4">Mission-critical PPM:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Production-aligned maintenance scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Predictive failure prevention strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Fire, electrical, and HVAC integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Water and gas safety compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                      <span className="font-light">Emergency response capability</span>
                    </li>
                  </ul>
                </Card>
              </section>

              <section>
                <Card className="p-8 bg-muted/50">
                  <span className="text-sm font-medium text-primary">CASE STUDY</span>
                  <h3 className="text-2xl font-light mt-2 mb-4">
                    Critical Systems Risk-Managed Across Aerospace Campus
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Major aerospace facility required PPM programme supporting high-value production without operational disruption. We deployed predictive maintenance platform with condition monitoring — identifying 22 pre-failure conditions and preventing estimated £1.2m production loss over 18-month programme period.
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Sectors We Support</h2>
                <div className="flex flex-wrap gap-3">
                  {["Aerospace", "Transport", "Advanced Manufacturing", "Industrial Parks", "Commercial"].map((sector) => (
                    <span key={sector} className="px-4 py-2 bg-primary/10 text-primary rounded-md font-light">
                      {sector}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6">Local Coverage</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  City Centre, Pride Park, Sinfin, Allestree, and all Derby districts.
                </p>
              </section>

              <FAQSection faqs={faqs} />

              <section className="text-center py-12 px-6 bg-charcoal text-white rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Mission-Critical Reliability. Zero Tolerance for Failure.
                </h2>
                <p className="text-gray-300 font-light mb-6">
                  📩 derby@entirefm.com
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

export default PPMDerby;