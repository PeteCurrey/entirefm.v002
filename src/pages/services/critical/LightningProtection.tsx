import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Phone, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { Helmet } from "react-helmet";
import { DynamicYouMayAlsoNeed } from "@/components/shared/DynamicYouMayAlsoNeed";

const LightningProtection = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
    { label: "Lightning Protection Testing" }
  ];

  const faqs = [
    {
      question: "How often should lightning protection systems be tested?",
      answer: "BS EN 62305 mandates annual visual inspections and testing every 11 months for all Risk Level buildings. Testing includes earth resistance measurement, continuity testing of down conductors, and bonding verification. Buildings with high occupancy, explosive materials, or critical systems may require more frequent testing (6-monthly). Neglected systems degrade through corrosion, mechanical damage, and earthing deterioration—annual testing is essential for compliance and safety."
    },
    {
      question: "What are the consequences of lightning protection system failure?",
      answer: "Direct lightning strikes without protection cause catastrophic damage: building fires (structural ignition), electrical equipment destruction (surges), personal injury/death (touch voltages), and insurance claim rejection (failure to maintain mandatory protection). Indirect strikes cause power surges destroying IT systems, control equipment, and telecommunications. Annual cost of lightning damage in UK: £50-100M. Proper protection prevents 99%+ of strike damage."
    },
    {
      question: "What is measured during lightning protection testing?",
      answer: "Earth resistance (must be <10Ω, ideally <1Ω for sensitive systems), Continuity of down conductors and bonding (<0.2Ω between any two points), Visual condition of air terminations and fixings, Surge protection device (SPD) condition, Separation distances from metalwork, Bond integrity to services (gas, water, structural steel). Testing identifies corrosion, loose connections, missing bonds, and damaged conductors requiring remedial action."
    },
    {
      question: "Do all buildings require lightning protection systems?",
      answer: "BS EN 62305-2 requires risk assessment to determine protection necessity. Buildings >28m height, explosive/flammable storage, high electronic value, historic significance, or high occupancy typically require protection. Insurance companies often mandate protection regardless of calculated risk. New buildings: protection designed during construction. Existing buildings: retrofitted protection designed by specialist engineers. Most commercial buildings benefit from lightning protection—cost of system (£5,000-£50,000) is insignificant compared to unprotected strike damage (£100,000-£1M+)."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lightning Protection Testing & Earthing Compliance | EntireFM</title>
        <meta name="description" content="Lightning protection testing for critical infrastructure. Annual testing, earth resistance measurement, continuity testing and BS EN 62305 compliance for commercial buildings." />
        <link rel="canonical" href="https://entirefm.com/services/critical/lightning-protection-testing" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Lightning Protection Testing & Maintenance"
        description="Annual lightning protection testing to BS EN 62305. Earth resistance testing, continuity checks, visual inspections and surge protection device verification for critical infrastructure."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504192010706-dd7f569ee2be')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              Lightning Protection Testing & Earthing Compliance
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Protecting critical infrastructure from catastrophic lightning strike damage through annual BS EN 62305 compliance testing.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Critical Protection for High-Risk Assets
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Lightning strikes deliver 100,000+ amperes and billions of volts in microseconds—direct strikes cause building fires, structural damage, and equipment destruction. Indirect strikes induce voltage surges destroying IT infrastructure, control systems, and telecommunications. Without protection, a single strike can cause damage exceeding £1M and operational downtime lasting days or weeks.
                  </p>
                  <p>
                    Lightning protection systems intercept strikes using air terminations (rods, meshed conductors), channel current safely to earth via down conductors, and dissipate energy through low-resistance earthing systems. BS EN 62305 mandates annual testing to verify system integrity—corrosion, mechanical damage, and earthing degradation silently compromise protection, leaving buildings vulnerable to catastrophic strike damage.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  BS EN 62305 Compliance Requirements
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Annual Testing & Inspection</h3>
                        <p className="text-muted-foreground font-light">
                          Visual inspection of air terminations, down conductors, and bonds every 11 months. Testing includes earth resistance measurement (&lt;10Ω required, &lt;1Ω ideal for sensitive systems), continuity verification of all conductors (&lt;0.2Ω between any points), and surge protection device (SPD) condition checks. Inspections identify corrosion, loose fixings, missing bonds, and mechanical damage requiring immediate remediation.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Earth Resistance & Bonding Verification</h3>
                        <p className="text-muted-foreground font-light">
                          Earth resistance testing using fall-of-potential or clamp-on methods. Multiple earth electrodes tested individually and in parallel. Bonding continuity verified between lightning protection system, structural steelwork, services (gas, water, electrical), and metalwork. Poor earthing or broken bonds create touch voltage hazards during strikes—potentially lethal to occupants and maintenance personnel.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Risk Assessment & System Design</h3>
                        <p className="text-muted-foreground font-light">
                          BS EN 62305-2 requires lightning risk assessment calculating strike probability and consequence. Buildings &gt;28m, explosive storage, high occupancy, or critical systems typically require protection. Existing buildings without protection: specialist engineers conduct risk assessment and design retrofit systems. New buildings: lightning protection integrated during design phase. Insurance companies often mandate protection regardless of calculated risk.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Asset Criticality & Protection Levels
                </h2>
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Data Centres & Telecommunications</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Lightning-induced surges destroy servers, network equipment, and UPS systems. Protection Level I-II required (highest protection level). Multiple surge protection devices (SPDs) at service entrance, distribution boards, and sensitive equipment. Earthing resistance &lt;1Ω essential. Downtime cost: £5,000-£50,000+ per hour.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Explosive/Flammable Storage</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Petroleum storage, chemical plants, ammunition storage require Protection Level I. Direct strikes cause catastrophic explosions and fires. Enhanced bonding prevents static discharge. Continuous earth resistance monitoring may be required. Regulatory authorities (HSE, DNO) mandate protection—non-compliance results in license suspension.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">High-Rise & Historic Buildings</h3>
                    <p className="text-sm text-muted-foreground font-light">
                      Buildings &gt;28m height experience significantly higher strike incidence. Historic/listed buildings require specialist protection design (discreet routing, minimal visual impact). Protection Level II-III typical. Insurance premiums reduced 10-20% with certified lightning protection. Listed building consent may be required for external conductors.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Standards & Regulations
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">BS EN 62305 Series</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Comprehensive lightning protection standard covering risk assessment (Part 2), physical protection (Part 3), and electrical/electronic systems (Part 4). Replaced BS 6651 in 2008. Requires annual testing and maintenance. Non-compliance invalidates insurance and creates employer liability under CDM Regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Insurance & Liability</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Most commercial insurance policies require lightning protection for high-value buildings. Annual test certificates demonstrate due diligence. Failure to maintain protection results in claim rejection. Employer liability: duty of care requires protection where risk assessment indicates necessity. Lightning-related injuries/deaths create corporate manslaughter exposure.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Regional Service Coverage</h3>
                <p className="text-muted-foreground font-light mb-6">
                  EntireFM delivers lightning protection testing across all UK regions with specialist engineers qualified to IET and BAFE schemes.
                </p>
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

              <section className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-4">Related Critical Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/services/critical/arc-flash-assessment" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Arc Flash Assessment
                  </Link>
                  <Link to="/services/critical/hv-switching" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    HV Switching Operations
                  </Link>
                  <Link to="/services/critical/power-quality" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Power Quality Analysis
                  </Link>
                  <Link to="/services/electrical-compliance" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Electrical Compliance
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Protect Your Critical Assets from Lightning Strike Damage
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for lightning protection testing, earth resistance measurement, and BS EN 62305 compliance certification.
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

      <DynamicYouMayAlsoNeed pageType="critical" currentPageUrl="/services/critical/lightning-protection" />
    </>
  );
};

export default LightningProtection;
