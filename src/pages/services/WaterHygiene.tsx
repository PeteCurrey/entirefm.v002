import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import heroImage from "@/assets/industrial-facility.jpg";

const WaterHygiene = () => {
  useConversionTracking();

  const faqs = [
    {
      question: "What causes Legionella risk?",
      answer: "Stagnation, temperature abuse, biofilm formation and poor governance are the main causes of Legionella risk in water systems. Regular monitoring and maintenance prevent these conditions."
    },
    {
      question: "Who is legally responsible for control?",
      answer: "The building's Responsible Person — usually the owner, employer, or managing agent — is legally responsible. We support full execution of their compliance duties under ACOP L8."
    },
    {
      question: "How often should reviews happen?",
      answer: "Depends on system risk — typically annual monitoring with a 2-year risk assessment refresh. More frequent reviews may be required for high-risk environments or after system changes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Water Hygiene & Legionella Compliance Services | ACOP L8 & HSG274 | Entire FM</title>
        <meta name="description" content="ACOP L8 and HSG274 risk control across commercial estates — sampling, monitoring, flushing and remedial actions that protect health, uptime, and legal accountability." />
        <link rel="canonical" href="https://entirefm.com/services/water-hygiene" />
        <meta property="og:title" content="Water Hygiene & Legionella Compliance | Entire FM" />
        <meta property="og:description" content="ACOP L8 and HSG274 compliant water safety management across UK commercial estates." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://entirefm.com/services/water-hygiene" />
      </Helmet>

      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Water Hygiene & Legionella Compliance" }
        ]}
      />

      <ServiceSchema
        name="Water Hygiene & Legionella Compliance Services"
        description="ACOP L8 and HSG274 risk control across commercial estates — sampling, monitoring, flushing and remedial actions that protect health, uptime, and legal accountability."
        provider="Entire FM"
        areaServed="United Kingdom"
      />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Water Hygiene & Legionella Compliance Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light leading-relaxed">
                ACOP L8 and HSG274 risk control across commercial estates — sampling, monitoring, flushing and remedial actions that protect health, uptime, and legal accountability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/contact">Request Legionella Risk Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="mailto:hello@entirefm.com">Download Water Hygiene Compliance Guide</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Exposure Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Legionella Risk = Legal, Financial & Reputational Exposure
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                A single outbreak can:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border border-destructive/30">
                  <p className="font-light flex items-start gap-3">
                    <span className="text-destructive text-xl">→</span>
                    <span>Trigger criminal prosecution</span>
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-destructive/30">
                  <p className="font-light flex items-start gap-3">
                    <span className="text-destructive text-xl">→</span>
                    <span>Shut down businesses instantly</span>
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-destructive/30">
                  <p className="font-light flex items-start gap-3">
                    <span className="text-destructive text-xl">→</span>
                    <span>Make headlines for all the wrong reasons</span>
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-destructive/30">
                  <p className="font-light flex items-start gap-3">
                    <span className="text-destructive text-xl">→</span>
                    <span>Cause long-term brand damage</span>
                  </p>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 mt-8 text-center">
                <p className="text-2xl font-light">
                  We don't take chances with public health —<br />
                  <span className="text-primary text-3xl">we remove Legionella risk at the source.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ACOP L8 / HSG274 Compliance Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                ACOP L8 / HSG274 Compliance Services
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
                We design and deliver:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Legionella Risk Assessments (LRAs)",
                  "Temperature monitoring & flushing",
                  "Sampling + UKAS laboratory testing",
                  "TMV servicing & calibration",
                  "Tank inspections, cleaning & chlorination",
                  "Asset remedials to eliminate stagnation risk"
                ].map((service, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-2xl">💧</span>
                      <span className="text-lg font-light">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xl text-center mt-12 text-muted-foreground font-light">
                Regulations met. Evidence proven.
              </p>
            </div>
          </div>
        </section>

        {/* Remedials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Remedials — Risk Closed, Same Visit Where Possible
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                When risk appears, it gets:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="text-3xl mb-4">✔</div>
                  <h3 className="text-xl font-light mb-2">A risk-rated action</h3>
                  <p className="text-muted-foreground font-light text-sm">Severity classified</p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="text-3xl mb-4">✔</div>
                  <h3 className="text-xl font-light mb-2">A costed fix</h3>
                  <p className="text-muted-foreground font-light text-sm">Clear pricing</p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="text-3xl mb-4">✔</div>
                  <h3 className="text-xl font-light mb-2">A scheduled remedial date</h3>
                  <p className="text-muted-foreground font-light text-sm">Rapid deployment</p>
                </div>
              </div>
              <p className="text-xl text-center mt-8 text-muted-foreground font-light">
                No waiting while bacteria multiply.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Audit Trail */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Digital Audit Trail & Compliance Dashboard
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                All evidence stored securely:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  "Inspector-ready audit packs",
                  "Renewals and re-test alerts",
                  "Complete asset condition records",
                  "Photo logging of issues and fixes"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card p-6 rounded-lg border border-border">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-lg font-light">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-xl font-light">
                  Insurers love it.<br />
                  <span className="text-primary">CQC/HSE demand it.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High-Scrutiny Sector Expertise */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                High-Scrutiny Sector Expertise
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8">We protect:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "PBSA & universities", link: "/sectors/residential-pbsa" },
                  { name: "Hospitality & leisure", link: "/sectors/hospitality-leisure" },
                  { name: "Healthcare environments", link: "/sectors" },
                  { name: "Retail", link: "/sectors/retail-service-stations" },
                  { name: "Corporate workplaces", link: "/sectors/offices-corporate" },
                  { name: "Industrial estates", link: "/sectors/industrial-logistics" }
                ].map((sector, index) => (
                  <Link 
                    key={index}
                    to={sector.link}
                    className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors text-center"
                  >
                    <span className="text-lg font-light">{sector.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Case Study Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-light mb-4">PBSA Outbreak Prevention</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Complete risk control and remedials delivered in &lt;48 hours.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-light mb-4">Healthcare Compliance Delivery</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Full digital audit traceability — zero findings at inspection.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8">
                Detailed case studies coming soon
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FAQSection faqs={faqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-6">
                Protect health. Protect compliance. Protect your business.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <p className="text-lg">📩 hello@entirefm.com</p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request Legionella Risk Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WaterHygiene;
