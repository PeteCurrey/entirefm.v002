import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, AlertTriangle, CheckCircle2, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { Helmet } from "react-helmet";

const LightningProtectionTesting = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
    { label: "Lightning Protection Testing" }
  ];

  const faqs = [
    {
      question: "What is BS EN 62305 lightning protection testing?",
      answer: "BS EN 62305 defines requirements for lightning protection systems on buildings. Testing verifies continuity of down conductors, earth resistance values below 10Ω, and bonding integrity. Annual testing is required for high-risk buildings including tower blocks, industrial facilities, and structures with explosive atmospheres."
    },
    {
      question: "Why is earth resistance testing critical for lightning protection?",
      answer: "Lightning strikes discharge thousands of amperes into earth. High earth resistance causes voltage rise, damaging equipment and creating fire risk. Testing ensures earth electrode systems maintain resistance below 10Ω, dissipating strike energy safely without voltage rise."
    },
    {
      question: "What happens if lightning protection fails testing?",
      answer: "Failed systems cannot safely dissipate strike energy, creating fire risk and equipment damage. Insurance policies often mandate compliant lightning protection. We provide remedial works to restore continuity, reduce earth resistance, and re-certify systems to BS EN 62305."
    },
    {
      question: "How often should lightning protection be tested?",
      answer: "BS EN 62305 recommends annual visual inspection and testing for all lightning protection systems. High-risk sites (explosive atmospheres, data centres, heritage buildings) require six-monthly inspection. Testing frequency may increase based on exposure level and insurance requirements."
    }
  ];

  const relatedServices = [
    {
      title: "Electrical Compliance",
      description: "Fixed-wire testing and EICR certification ensuring safe electrical installations.",
      link: "/services/electrical"
    },
    {
      title: "Building Inspections",
      description: "Comprehensive building condition surveys and structural safety assessments.",
      link: "/services/building-inspections"
    },
    {
      title: "PPM Delivery",
      description: "Planned preventative maintenance reducing breakdown risk and ensuring compliance.",
      link: "/services/ppm"
    },
    {
      title: "Water Hygiene",
      description: "Legionella risk management and water system testing for safe operations.",
      link: "/services/water-hygiene"
    },
    {
      title: "Data Room Audits",
      description: "Critical infrastructure compliance for data centres and server rooms.",
      link: "/services/critical/data-room-audits"
    },
    {
      title: "Thermal Imaging",
      description: "Infrared electrical surveys identifying faults before failure occurs.",
      link: "/services/critical/thermal-imaging"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lightning Protection Testing | BS EN 62305 Compliance | Entire FM</title>
        <meta name="description" content="Lightning protection testing to BS EN 62305 standards. Earth resistance testing, strike path continuity verification, and rooftop system inspections ensuring safety and insurance compliance." />
        <link rel="canonical" href="https://entirefm.com/services/critical/lightning-protection" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Lightning Protection Testing"
        description="BS EN 62305 compliant lightning protection testing including earth resistance verification, down conductor continuity testing, and bonding integrity checks for critical infrastructure."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605726965796-b6f4c60ffa00')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Lightning Protection Testing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              BS EN 62305 compliance testing ensuring strike energy dissipates safely without fire or equipment damage.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Lightning Protection Testing Matters
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Lightning strikes deliver millions of volts and tens of thousands of amperes in microseconds. Without properly maintained lightning protection systems, strike energy cannot dissipate safely, causing fires, destroying electrical systems, and creating lethal voltage rise across metalwork. BS EN 62305 testing verifies that down conductors maintain continuity, earth electrodes achieve resistance below 10Ω, and bonding prevents dangerous potential differences.
                  </p>
                  <p>
                    Insurance policies mandate annual testing for buildings with lightning protection systems. Failed systems void coverage, leaving property owners liable for fire damage and equipment destruction. Testing identifies corrosion-damaged conductors, inadequate earth electrode systems, and missing bonding connections before strikes occur. For tower blocks, industrial facilities, and data centres, testing prevents catastrophic failures that halt operations and endanger life.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Comprehensive Testing Methodology
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Earth Resistance Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Earth electrode systems must achieve resistance below 10Ω to safely dissipate strike current. We test using precision earth resistance meters, verifying electrode integrity and soil contact. Failed electrodes require additional rods, horizontal earth tapes, or chemical treatment to reduce resistance. Testing ensures strike energy flows to earth without voltage rise.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Strike Path Continuity Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Down conductors carry strike current from air terminations to earth. Corrosion, poor connections, or physical damage breaks continuity, preventing safe current dissipation. We test conductor continuity from rooftop terminals to earth electrodes, identifying breaks requiring repair. Testing includes bonding to metalwork, preventing dangerous side-flashing during strikes.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Tower & Block Rooftop Inspections</h3>
                        <p className="text-muted-foreground font-light">
                          Air termination rods, finials, and tape systems deteriorate from weather exposure. Visual inspection identifies corrosion, damaged fixings, and missing terminals. High-rise buildings require specialist rope access for terminal inspection. We verify protection covers vulnerable points, install missing terminals, and replace corroded components to maintain protection integrity.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Insurance & Landlord Responsibilities
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Building owners carry legal duty to maintain lightning protection systems. Insurance policies require annual testing certification. Failed tests void fire insurance, making owners liable for strike damage. Landlords of tower blocks face additional liability for tenant safety. Testing certificates demonstrate compliance, protecting against insurance disputes and negligence claims.
                  </p>
                  <p>
                    Frequency requirements depend on exposure level and building use. High-risk sites including explosive atmospheres, heritage buildings, and structures exceeding 20m require six-monthly inspection. Standard commercial and industrial buildings require annual testing. We maintain testing schedules, issue renewal reminders, and provide certified reports meeting insurer requirements.
                  </p>
                </div>
              </section>

              <RelatedServices services={relatedServices} />

              <section className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-6">Where We Deliver Lightning Protection Testing</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link to="/services/critical/lightning-protection/london" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    London
                  </Link>
                  <Link to="/services/critical/lightning-protection/birmingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Birmingham
                  </Link>
                  <Link to="/services/critical/lightning-protection/manchester" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Manchester
                  </Link>
                  <Link to="/services/critical/lightning-protection/leeds" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Leeds
                  </Link>
                  <Link to="/services/critical/lightning-protection/sheffield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Sheffield
                  </Link>
                  <Link to="/services/critical/lightning-protection/nottingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Nottingham
                  </Link>
                  <Link to="/services/critical/lightning-protection/derby" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Derby
                  </Link>
                  <Link to="/services/critical/lightning-protection/chesterfield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Chesterfield
                  </Link>
                  <Link to="/services/critical/lightning-protection/lincoln" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Lincoln
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Ensure Lightning Protection Compliance
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for BS EN 62305 testing with earth resistance verification and full certification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/request-proposal">
                      Request a Proposal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                    <a href="tel:+448001234567">
                      <Phone className="w-4 h-4 mr-2" />
                      24/7 Helpdesk
                    </a>
                  </Button>
                </div>
              </section>

              <FAQSection faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <SidebarCTA />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightningProtectionTesting;