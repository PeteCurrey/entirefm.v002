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

const ArcFlashAssessment = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
    { label: "Arc Flash Assessment" }
  ];

  const faqs = [
    {
      question: "What is an arc flash event?",
      answer: "Arc flash is explosive energy release during electrical faults, creating temperatures exceeding 19,000°C, blast pressure capable of throwing personnel, and molten metal spray. Arc flash injuries cause severe burns, blindness, hearing loss, and death. Risk assessment identifies hazard levels, enabling personnel protection through PPE and safe work practices."
    },
    {
      question: "Who needs arc flash assessments?",
      answer: "Any site with electrical equipment above 240V single-phase or operating at higher voltages requires assessment. High-voltage switchgear, motor control centres, and distribution boards present significant arc flash hazard. Facilities with exposed busbars, open-front switchboards, or frequent live working face elevated risk requiring detailed analysis."
    },
    {
      question: "What is arc flash boundary and incident energy?",
      answer: "Arc flash boundary defines the distance where personnel receive second-degree burns (1.2 cal/cm²). Working within this boundary requires flame-resistant PPE rated for calculated incident energy. Incident energy (cal/cm²) determines required PPE level, ranging from Category 1 (4 cal/cm²) to Category 4 (40+ cal/cm²) protection."
    },
    {
      question: "How does arc flash assessment reduce insurance premiums?",
      answer: "Documented assessments, labelled equipment, and trained personnel demonstrate proactive risk management. Insurers recognize reduced liability exposure through engineered controls and safe work procedures. Assessment implementation reduces injury severity, claim costs, and business interruption, supporting premium reduction negotiations."
    }
  ];

  const relatedServices = [
    {
      title: "Electrical Compliance",
      description: "Fixed-wire testing and EICR certification ensuring electrical safety.",
      link: "/services/electrical"
    },
    {
      title: "HV Switching",
      description: "High-voltage system management with authorised personnel and safe procedures.",
      link: "/services/critical/hv-switching"
    },
    {
      title: "Thermal Imaging",
      description: "Infrared electrical surveys identifying fault conditions before arc flash events.",
      link: "/services/critical/thermal-imaging"
    },
    {
      title: "Power Quality Analysis",
      description: "Electrical system analysis reducing fault current and arc flash risk.",
      link: "/services/critical/power-quality"
    },
    {
      title: "PPM Delivery",
      description: "Planned maintenance reducing equipment failures that cause arc flash.",
      link: "/services/ppm"
    },
    {
      title: "Data Room Audits",
      description: "Critical infrastructure compliance including electrical safety verification.",
      link: "/services/critical/data-room-audits"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Arc Flash Risk Assessment (High Voltage & LV Systems)</title>
        <meta name="description" content="Arc flash risk assessment for high-voltage and low-voltage systems. System modelling, PPE recommendations, safety labelling, and insurance risk reduction through engineered controls." />
        <link rel="canonical" href="https://entirefm.com/services/critical/arc-flash-assessment" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Arc Flash Risk Assessment"
        description="Comprehensive arc flash assessment including system modelling, incident energy calculation, PPE recommendations, and safety labelling protecting personnel from electrical explosion hazards."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565008576549-57569a49371d')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Arc Flash Risk Assessment (High Voltage & LV Systems)
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              System modelling and PPE recommendations protecting personnel from electrical explosion hazards.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Understanding Arc Flash Hazard
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Arc flash events create plasma temperatures exceeding 19,000°C, four times hotter than the sun's surface. Explosive energy vaporizes copper conductors, creating molten metal spray traveling at supersonic speed. Blast pressure throws personnel across rooms. Sound waves cause permanent hearing loss. Intense light causes retinal damage and blindness. Without protective equipment, personnel within arc flash boundary suffer fatal burns in fractions of a second.
                  </p>
                  <p>
                    Arc flash occurs during electrical faults, equipment failures, dropped tools, and vermin contact. High-voltage switchgear, motor control centres, and distribution boards present greatest hazard. Risk increases with fault current magnitude and clearing time. Assessment identifies incident energy levels, establishes arc flash boundaries, and specifies PPE requirements. Labeled equipment warns personnel, enabling safe approach distances and appropriate protection selection.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  High-Voltage & Low-Voltage Risks
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">High-Voltage Switchgear Assessment</h3>
                        <p className="text-muted-foreground font-light">
                          HV systems (above 1000V) present extreme arc flash hazard due to high fault currents and longer clearing times. Assessment includes single-line diagram analysis, fault current calculation, and protective device coordination. HV arc flash energy often exceeds PPE protection limits, requiring remote operation or de-energization before approach. We model system impedance, verify relay settings, and recommend engineering controls reducing incident energy.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Low-Voltage Distribution Analysis</h3>
                        <p className="text-muted-foreground font-light">
                          LV systems (below 1000V) still present significant arc flash risk, particularly at main switchboards where fault currents reach tens of kiloamperes. We calculate incident energy at all accessible equipment, identifying high-risk panels requiring upgraded protection. Analysis considers transformer impedance, cable lengths, and protective device characteristics. Recommendations include current-limiting fuses, arc-flash relays, and maintenance mode settings reducing clearing time.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  System Modelling & Safety Labelling
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Computer modelling creates single-line diagrams representing entire electrical distribution. Software calculates fault currents at all nodes, determines protective device coordination, and computes incident energy. Modelling identifies equipment exceeding PPE protection limits, enabling engineering solutions before injuries occur. Analysis considers worst-case scenarios including maximum fault contribution, minimum protective device clearing time, and arc gap distance.
                  </p>
                  <p>
                    Each piece of electrical equipment receives arc flash warning labels stating incident energy (cal/cm²), arc flash boundary distance, required PPE category, and working voltage. Labels enable rapid hazard assessment before approach. Color-coded labels indicate risk severity. We maintain label database, updating labels when system modifications alter fault characteristics. Labelling ensures personnel recognize hazards and select appropriate protection.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  PPE Recommendations & Insurance Risk Reduction
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Personal protective equipment selection depends on calculated incident energy. Category 1 (4 cal/cm²) requires flame-resistant shirt and trousers. Category 4 (40+ cal/cm²) requires flash suit with face shield, insulated gloves, and arc-rated helmet. We specify minimum PPE ratings for each task, ensuring personnel carry appropriate protection. Training programs teach PPE donning procedures, hazard recognition, and emergency response.
                  </p>
                  <p>
                    Insurance underwriters recognize arc flash assessment as proactive risk management. Documented assessments, labelled equipment, trained personnel, and engineered controls demonstrate duty of care. Reduced injury severity lowers claim costs. Assessment implementation supports liability premium reduction negotiations. We provide comprehensive documentation meeting insurer requirements, protecting organizations from negligence claims following arc flash injuries.
                  </p>
                </div>
              </section>

              <RelatedServices services={relatedServices} />

              <section className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-6">Where We Deliver Arc Flash Assessment</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link to="/services/critical/arc-flash-assessment/london" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    London
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/birmingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Birmingham
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/manchester" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Manchester
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/leeds" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Leeds
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/sheffield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Sheffield
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/nottingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Nottingham
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/derby" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Derby
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/chesterfield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Chesterfield
                  </Link>
                  <Link to="/services/critical/arc-flash-assessment/lincoln" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Lincoln
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Personnel From Arc Flash Hazards
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for arc flash assessment with system modelling and safety labelling.
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

export default ArcFlashAssessment;