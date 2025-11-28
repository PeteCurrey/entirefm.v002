import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, AlertTriangle, CheckCircle2, Phone, Zap } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";
import { RelatedServices } from "@/components/shared/RelatedServices";
import { Helmet } from "react-helmet";

const UPSMaintenance = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Critical Infrastructure", href: "/services/critical-infrastructure" },
    { label: "UPS Maintenance" }
  ];

  const faqs = [
    {
      question: "What is UPS battery impedance testing?",
      answer: "Impedance testing measures internal resistance of battery cells, detecting sulfation and plate degradation before capacity failure. Unlike voltage testing, impedance identifies failing cells maintaining voltage but unable to deliver current under load. Testing prevents unexpected runtime failures during power cuts."
    },
    {
      question: "How often should UPS systems be serviced?",
      answer: "Quarterly visual inspections identify electrolyte leaks and terminal corrosion. Annual load testing verifies runtime capacity. Battery impedance testing every 6-12 months detects cells nearing failure. Battery replacement typically occurs at 5 years for VRLA, 3 years for flooded cells in critical applications."
    },
    {
      question: "What happens during UPS load bank testing?",
      answer: "Load banks simulate full building load, forcing UPS to support systems on battery power. Testing measures runtime against design specifications, identifies weak batteries, and verifies transfer switching operates correctly. Load testing is essential before relying on UPS for emergency power."
    },
    {
      question: "Why do UPS systems fail during actual power cuts?",
      answer: "Batteries pass voltage tests but fail to deliver current under load due to sulfation, internal short circuits, or dry cells. Transfer switches seize from lack of exercising. Capacitors fail from heat exposure. Regular maintenance testing under load conditions prevents power-cut failures."
    }
  ];

  const relatedServices = [
    {
      title: "Generator Maintenance",
      description: "Generator servicing ensuring reliable backup power during extended outages.",
      link: "/services/critical/generator-maintenance"
    },
    {
      title: "Electrical Compliance",
      description: "Fixed-wire testing and power distribution verification for safe operations.",
      link: "/services/electrical"
    },
    {
      title: "Power Redundancy Testing",
      description: "Load bank testing and redundancy verification for mission-critical systems.",
      link: "/services/critical/power-redundancy"
    },
    {
      title: "Data Room Audits",
      description: "Critical infrastructure compliance for data centres and server rooms.",
      link: "/services/critical/data-room-audits"
    },
    {
      title: "HV Switching",
      description: "High-voltage system management and authorised switching operations.",
      link: "/services/critical/hv-switching"
    },
    {
      title: "Thermal Imaging",
      description: "Infrared surveys identifying electrical faults before failure occurs.",
      link: "/services/critical/thermal-imaging"
    }
  ];

  return (
    <>
      <Helmet>
        <title>UPS Maintenance & Battery Testing | Critical Power</title>
        <meta name="description" content="UPS maintenance including battery impedance testing, load bank verification, and replacement cycles. Static and modular UPS servicing for data centres and mission-critical facilities." />
        <link rel="canonical" href="https://entirefm.com/services/critical/ups-maintenance" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="UPS Maintenance & Battery Replacements"
        description="Comprehensive UPS maintenance including battery impedance testing, thermal imaging, load bank verification, and replacement cycles ensuring reliable emergency power for critical systems."
        provider="Entire FM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-charcoal/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64')] bg-cover bg-center" />
          
          <div className="container mx-auto px-6 relative z-20 text-white">
            <Breadcrumb items={breadcrumbItems} className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl">
              UPS Maintenance & Battery Testing
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl text-gray-200">
              Prevent power-cut failures through battery impedance testing, load verification, and timely replacement cycles.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why UPS Systems Fail When Needed Most
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    UPS batteries maintaining correct voltage fail to deliver runtime when power cuts occur. Internal resistance increases through sulfation, plate degradation, and electrolyte depletion. Batteries passing voltage tests collapse under load, providing seconds instead of specified minutes. Transfer switches seize from lack of exercising. Capacitors fail from heat, preventing inverter operation. Without load testing and impedance verification, UPS systems provide false security.
                  </p>
                  <p>
                    Data centres, hospitals, and facilities relying on UPS protection face catastrophic failures during outages. Server crashes, data loss, and equipment damage result from inadequate runtime. Insurance policies mandate annual load testing. Maintenance prevents failures through battery impedance monitoring, thermal profiling, and controlled load verification before reliance during emergencies.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Essential Maintenance Components
                </h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Battery className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Battery Impedance Tests</h3>
                        <p className="text-muted-foreground font-light">
                          Impedance testing identifies failing cells before voltage drops occur. Testing measures internal resistance, detecting sulfation and plate degradation invisible to voltage checks. Cells exceeding impedance thresholds indicate imminent failure. We test individual cells in battery strings, identifying weak batteries requiring replacement. Testing prevents unexpected runtime failures during power cuts.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Load Bank Testing</h3>
                        <p className="text-muted-foreground font-light">
                          Load banks simulate full building load, forcing UPS to operate on battery power. Testing measures actual runtime against specifications, identifies capacity degradation, and verifies transfer switching functions correctly. Thermal imaging during load tests identifies overheating components indicating cooling failures. Annual load testing is essential for mission-critical installations.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-2">Battery Replacement Cycles</h3>
                        <p className="text-muted-foreground font-light">
                          VRLA batteries last 3-5 years depending on temperature and cycling. Flooded cells in critical applications require replacement at 3 years. High ambient temperatures accelerate aging. We track battery age, impedance trends, and load test results to recommend replacement before failures occur. Replacement scheduling prevents emergency failures requiring immediate costly intervention.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Static & Modular UPS Systems
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    Static UPS systems use solid-state electronics converting DC battery power to AC. Maintenance includes capacitor bank inspection, thermal imaging of power modules, and firmware updates. Modular UPS systems allow hot-swap module replacement without downtime. We service both architectures, maintaining redundancy through N+1 and 2N configurations ensuring continuous protection during maintenance.
                  </p>
                  <p>
                    Data centre redundancy requires parallel UPS systems with automatic failover. Maintenance includes bypass function testing, verifying seamless transfer during UPS failures. We coordinate maintenance windows with critical operations, test redundant paths, and document load distribution across parallel systems. Redundancy testing confirms systems survive single points of failure without interruption.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Bypass Function Tests & Failure Risk
                </h2>
                <div className="prose prose-lg max-w-none font-light leading-relaxed space-y-4">
                  <p>
                    UPS bypass allows direct mains supply during maintenance or faults. Bypass failures prevent servicing without downtime. We test manual bypass switches, verify static bypass transfers occur within 4ms, and inspect bypass contactors for wear. Bypass testing ensures maintenance proceeds without powering down critical loads. Failed bypass functions trap systems online, preventing necessary servicing.
                  </p>
                </div>
              </section>

              <RelatedServices services={relatedServices} />

              <section className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-light mb-6">Where We Deliver UPS Maintenance</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Link to="/services/critical/ups-maintenance/london" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    London
                  </Link>
                  <Link to="/services/critical/ups-maintenance/birmingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Birmingham
                  </Link>
                  <Link to="/services/critical/ups-maintenance/manchester" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Manchester
                  </Link>
                  <Link to="/services/critical/ups-maintenance/leeds" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Leeds
                  </Link>
                  <Link to="/services/critical/ups-maintenance/sheffield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Sheffield
                  </Link>
                  <Link to="/services/critical/ups-maintenance/nottingham" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Nottingham
                  </Link>
                  <Link to="/services/critical/ups-maintenance/derby" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Derby
                  </Link>
                  <Link to="/services/critical/ups-maintenance/chesterfield" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Chesterfield
                  </Link>
                  <Link to="/services/critical/ups-maintenance/lincoln" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Lincoln
                  </Link>
                </div>
              </section>

              <section className="bg-charcoal text-white p-8 rounded-lg">
                <h2 className="text-3xl font-light mb-4">
                  Prevent UPS Failures During Power Cuts
                </h2>
                <p className="text-gray-300 mb-6 font-light leading-relaxed">
                  Get a fixed-price proposal for UPS maintenance with battery impedance testing and load verification.
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

export default UPSMaintenance;