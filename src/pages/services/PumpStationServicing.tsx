import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Zap, AlertTriangle, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema, FAQSchema } from "@/components/shared/SchemaMarkup";
import { FAQSection } from "@/components/shared/FAQSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

const PumpStationServicing = () => {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Pump Station Servicing" }
  ];

  const faqs = [
    {
      question: "How often should pump stations be serviced?",
      answer: "Quarterly servicing is recommended for foul and surface water pump stations, with monthly visual inspections for high-usage or critical installations. Frequency increases for stations serving sensitive environments."
    },
    {
      question: "What causes pump station failures?",
      answer: "Common failures include float switch malfunctions, pump blockages, control panel faults, electrical issues, seal deterioration, and inadequate duty/standby rotation causing pump seizure."
    },
    {
      question: "What are the consequences of pump station failure?",
      answer: "Failures cause sewage backups, environmental pollution, flooding, operational disruption, EA enforcement action, insurance issues, and reputational damage—particularly in PBSA, healthcare, and hospitality sectors."
    },
    {
      question: "Are pump stations subject to regulatory requirements?",
      answer: "Yes—discharge consents, environmental permits, and duty of care obligations apply. Water companies may impose maintenance standards for adoptable pump stations. EA enforcement applies to pollution incidents."
    },
    {
      question: "What is duty/standby pump rotation?",
      answer: "Regular alternation between primary (duty) and backup (standby) pumps prevents seizure, equalizes wear, and ensures standby pumps operate correctly when the duty pump fails or requires maintenance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pump Station Servicing | Foul & Surface Water Pump Maintenance</title>
        <meta name="description" content="Commercial foul & surface water pump station servicing, monitoring and compliance. Expert pump station maintenance and environmental compliance." />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema 
        name="Pump Station Servicing"
        description="Commercial foul & surface water pump station servicing, monitoring and compliance."
        provider="EntireFM"
        areaServed="United Kingdom"
      />
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-background pt-20">
        <div className="relative h-[40vh] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pump Station Servicing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Commercial foul & surface water pump station servicing, monitoring and compliance
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Droplet className="w-8 h-8 text-primary" />
                  Critical Drainage Infrastructure
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Pump stations transport foul sewage and surface water from below-ground levels to drainage networks—essential infrastructure for basements, car parks, and developments below mains sewer level. Pump failure causes sewage backups, flooding, and environmental pollution.
                  </p>
                  <p>
                    Preventative maintenance ensures pump reliability, prevents emergency breakdowns, and demonstrates environmental compliance—critical for sites where pump failure would cause operational shutdown or regulatory enforcement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Settings className="w-8 h-8 text-primary" />
                  Servicing & Maintenance Regime
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Duty/Standby Pumps</h3>
                    <p className="text-muted-foreground">
                      Regular rotation between duty and standby pumps prevents seizure, equalizes wear, and ensures backup pumps operate correctly during emergencies.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Float Switch Testing</h3>
                    <p className="text-muted-foreground">
                      Verify level control switches activate pumps correctly, preventing dry running (pump damage) or overflow (flooding and pollution).
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Control Panel Testing</h3>
                    <p className="text-muted-foreground">
                      Check electrical connections, alarm functions, telemetry systems, and automatic changeover between duty and standby pumps.
                    </p>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Seal & Mechanical Inspection</h3>
                    <p className="text-muted-foreground">
                      Inspect pump seals, impellers, volutes, and bearings for wear, corrosion, or damage that could cause failure or reduced performance.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-8 h-8 text-primary" />
                  Telemetry & Remote Monitoring
                </h2>
                <div className="prose prose-lg max-w-none space-y-4">
                  <p>
                    Modern pump stations can be monitored remotely using telemetry systems that alert maintenance teams to high levels, pump faults, or power failures before they escalate into flooding or environmental incidents.
                  </p>
                  <p>
                    Remote monitoring reduces reactive callouts, enables proactive intervention, and provides operational data for maintenance optimization and regulatory reporting.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  Failure Consequences
                </h2>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-lg">
                    Pump station failures expose estates to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Sewage backups:</strong> Foul water flooding into basements, car parks, or ground floors causing health hazards and operational shutdown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Environmental pollution:</strong> Sewage overflow breaches discharge consents, triggering EA prosecution and unlimited fines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Operational disruption:</strong> Building closure in PBSA, healthcare, hotels, or office environments where facilities cannot function without drainage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">→</span>
                      <span><strong>Emergency repair costs:</strong> Out-of-hours callouts, specialist equipment hire, and contamination cleanup significantly exceed preventative maintenance costs</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  Related Drainage Services
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/drainage-cctv-surveys" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Drainage CCTV Surveys</h3>
                    <p className="text-sm text-muted-foreground">Remote drainage inspection</p>
                  </Link>
                  <Link to="/services/interceptor-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Interceptor Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Oil separator servicing</p>
                  </Link>
                  <Link to="/services/grease-trap-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Grease Trap Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Commercial kitchen compliance</p>
                  </Link>
                  <Link to="/services/pump-room-maintenance" className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <h3 className="font-semibold mb-2">Pump Room Maintenance</h3>
                    <p className="text-sm text-muted-foreground">Mechanical plant servicing</p>
                  </Link>
                </div>
              </section>

              <section className="bg-primary/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Request a Pump Station Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Speak to our team about reliable pump station maintenance and monitoring for your estate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">
                      Request Proposal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Support</Link>
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

export default PumpStationServicing;
