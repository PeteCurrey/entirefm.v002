import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FAQSection } from "@/components/shared/FAQSection";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import heroImage from "@/assets/office-interior.jpg";

const EmergencyLighting = () => {
  useConversionTracking();

  const faqs = [
    {
      question: "What causes a failed duration test?",
      answer: "Ageing batteries, poor charging circuits or insufficient capacity can all cause emergency lighting duration tests to fail. Regular maintenance and timely battery replacements prevent these issues."
    },
    {
      question: "Who is responsible for emergency lighting compliance?",
      answer: "The Responsible Person — usually the building owner, employer, or managing agent — is legally responsible for ensuring emergency lighting systems are compliant with BS 5266 standards."
    },
    {
      question: "Can tests be carried out after hours?",
      answer: "Absolutely. We schedule disruptive works responsibly to minimize operational impact, including evening and weekend testing when required."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Emergency Lighting & Evacuation Safety Compliance | BS 5266 Testing | Entire FM</title>
        <meta name="description" content="BS 5266 certified emergency lighting testing, 3-hour duration verification and remedials for compliant evacuation safety across UK commercial estates." />
        <link rel="canonical" href="https://entirefm.com/services/emergency-lighting" />
        <meta property="og:title" content="Emergency Lighting & Evacuation Safety Compliance | Entire FM" />
        <meta property="og:description" content="BS 5266 testing, duration verification and remedials for safe evacuation systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://entirefm.com/services/emergency-lighting" />
      </Helmet>

      <BreadcrumbSchema 
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Emergency Lighting Compliance" }
        ]}
      />

      <ServiceSchema
        name="Emergency Lighting & Evacuation Safety Compliance"
        description="BS 5266 certified emergency lighting testing, 3-hour duration verification and remedials for compliant and safe evacuation across commercial estates."
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
                Emergency Lighting & Evacuation Safety Compliance
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light leading-relaxed">
                BS 5266 testing, 3-hour duration verification and remedials for compliant and safe evacuation across commercial estates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/contact">Request 3-Hour Duration Test</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="mailto:hello@entirefm.com">Download BS 5266 Audit Checklist</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Evacuation Safety Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Evacuation Safety When Visibility Fails
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                In an emergency, people don't panic because of fire — they panic because they can't see.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-2xl font-light mb-4">When Emergency Lighting Fails:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span>Evacuation slows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span>Injury & liability rise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span>Insurers reject claims</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span>Fire safety enforcement escalates</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 flex items-center justify-center">
                  <div>
                    <p className="text-2xl font-light text-center">
                      Compliance isn't optional —<br />
                      <span className="text-primary text-3xl">it's life preservation.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full BS 5266 Compliance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Full BS 5266 Compliance Delivery
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
                We maintain and certify:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Monthly functional testing",
                  "Annual 3-hour duration testing",
                  "Signage illumination performance",
                  "Escape route coverage mapping",
                  "Battery and fitting replacements",
                  "Logbooks & digital certification"
                ].map((service, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-2xl">🔦</span>
                      <span className="text-lg font-light">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xl text-center mt-12 text-muted-foreground font-light">
                Your evacuation stays safe — even when power fails.
              </p>
            </div>
          </div>
        </section>

        {/* Live Remedials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Live Remedials — Zero Exposure
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                Any failure is:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="text-3xl mb-4">✔</div>
                  <h3 className="text-xl font-light mb-2">Risk-coded</h3>
                  <p className="text-muted-foreground font-light">Severity categorized</p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="text-3xl mb-4">✔</div>
                  <h3 className="text-xl font-light mb-2">Costed</h3>
                  <p className="text-muted-foreground font-light">Transparent pricing</p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="text-3xl mb-4">✔</div>
                  <h3 className="text-xl font-light mb-2">Resolved rapidly</h3>
                  <p className="text-muted-foreground font-light">Fast deployment</p>
                </div>
              </div>
              <p className="text-xl text-center mt-8 text-muted-foreground font-light">
                We don't leave evacuation safety to chance.
              </p>
            </div>
          </div>
        </section>

        {/* Digital Compliance Governance */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Digital Compliance Governance
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8 leading-relaxed">
                Every test. Every asset. Every result. Stored electronically with:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  "Photo evidence",
                  "Remedial lifecycle logs",
                  "Downloadable certificates",
                  "Automatic re-test alerts"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card p-6 rounded-lg border border-border">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-lg font-light">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-xl font-light">
                  Auditors love this.<br />
                  <span className="text-primary">Insurers expect it.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors We Protect */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Sectors We Protect
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {[
                  { name: "PBSA & residential", link: "/sectors/residential-pbsa" },
                  { name: "Retail & hospitality", link: "/sectors/retail-service-stations" },
                  { name: "Corporate offices", link: "/sectors/offices-corporate" },
                  { name: "Public buildings & venues", link: "/sectors" },
                  { name: "Logistics & industrial", link: "/sectors/industrial-logistics" }
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

        {/* Case Studies Placeholder */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light mb-6 underline-accent inline-block">
                Case Study Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-light mb-4">City Retail Centre</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Compliance restored within 48 hours of audit deadline.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <h3 className="text-xl font-light mb-4">PBSA Building</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Duration failures eliminated across full site.
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
                Evacuation readiness = life safety.
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-8">
                Don't leave it unclear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <p className="text-lg">📩 hello@entirefm.com</p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request 3-Hour Test</Link>
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

export default EmergencyLighting;
