import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { SchemaMarkup } from "@/components/shared/SchemaMarkup";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { useConversionTracking } from "@/hooks/useConversionTracking";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";

const GasSafetyManchester = () => {
  const { trackDownload, trackProposalRequest } = useConversionTracking();

  const faqs = [
    {
      question: "Why is gas safety critical in PBSA estates?",
      answer: "Student accommodation has high occupancy density, shared heating systems, and vulnerable populations. Gas safety failures in PBSA create elevated CO exposure risk and potential for mass evacuation. CP1/CP15 certification and annual boiler servicing are legal requirements.",
    },
    {
      question: "Do nightlife venues need CP42 certification?",
      answer: "Yes. Any commercial kitchen using gas — including bars, restaurants, and entertainment venues — must maintain valid CP42 catering gas safety certification. This includes combustion analysis, ventilation checks, and CO monitoring.",
    },
    {
      question: "How do energy upgrades benefit large campus estates?",
      answer: "Multi-building PBSA and campus estates benefit significantly from centralised boiler optimisation, BMS upgrades, and heat recovery systems. Typical fuel cost reductions of 20-30% with payback under 2 years.",
    },
  ];

  const LocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Entire FM - Gas Safety & Boiler Compliance Manchester",
    "description": "Gas safety compliance for PBSA & entertainment-led estates in Manchester.",
    "areaServed": "Manchester",
    "serviceType": "Gas Safety Compliance",
    "email": "manchester@entirefm.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manchester",
      "addressCountry": "GB"
    }
  };

  const heroStats = [
    { value: "PBSA", label: "Specialist" },
    { value: "CP42", label: "Catering Safety" },
    { value: "20-30", label: "Energy Savings", suffix: "%" },
    { value: "24/7", label: "Response" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gas Safety", href: "/services/gas-safety" },
    { label: "Manchester" }
  ];

  return (
    <>
      <Helmet>
        <title>Gas Safety & Boiler Compliance in Manchester | Local Testing & Statutory Compliance | EntireFM</title>
        <meta name="description" content="Gas safety protection for Manchester's PBSA & entertainment estates. CP42 catering, CO risk elimination, and energy-efficiency upgrades." />
        <link rel="canonical" href="https://entirefm.com/services/gas-safety" />
      </Helmet>

      <SchemaMarkup schema={LocalBusinessSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <ServiceHeroSection
        breadcrumbItems={breadcrumbItems}
        title="Gas Safety & Boiler Compliance – Manchester"
        description="Gas safety protection for PBSA & entertainment-led estates. CP42 certification, CO monitoring, and energy-efficiency upgrades."
        stats={heroStats}
        primaryCTA={{
          label: "Request Gas Audit",
          href: "/contact",
          icon: ArrowRight
        }}
        secondaryCTA={{
          label: "Download Checklist",
          href: "#",
          icon: Download
        }}
        backgroundImage="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Manchester's City Risk Profile
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Manchester's student and guest populations demand zero outbreak exposure from gas heating and catering systems.
              </p>
              <p className="text-foreground font-medium">
                We maintain safe systems — and proof of safety.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Gas Safe Services
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">ACOP L8 Monitoring</h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Hot/cold outlet temperature checks
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      Water sampling & lab analysis
                    </li>
                    <li className="text-sm text-muted-foreground font-light flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      CO monitoring & ventilation verification
                    </li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-light mb-4">Instant Remedials</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    When gas safety risks are identified, we fix them immediately to eliminate exposure and restore compliance.
                  </p>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Digital Governance Platform
              </h2>
              <Card className="p-6 bg-muted/50">
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Everything logged — nothing missed.
                </p>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Real-time compliance dashboards
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Digital certificates accessible 24/7
                  </li>
                  <li className="text-sm text-muted-foreground font-light flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Automated renewal notifications
                  </li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Energy Efficiency for Campus Estates
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Energy upgrades for large campus estates deliver significant cost reductions with rapid payback periods.
              </p>
            </section>

            <section className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4 underline-accent inline-block">Case Study</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                University accommodation — PBSA safety uplift delivered with compliance + efficiency gains.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                Local Coverage in Manchester
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our engineers serve: City Centre, Salford Quays, Trafford, Airport City, Didsbury.
              </p>
            </section>

            <FAQSection faqs={faqs} />

            <section className="bg-charcoal text-white p-12 rounded-lg text-center">
              <h2 className="text-3xl font-light mb-4">Protect Your Community</h2>
              <p className="text-xl mb-8 text-gray-300 font-light">
                📩 manchester@entirefm.com
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Request Gas Safety Visit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <SidebarCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GasSafetyManchester;
