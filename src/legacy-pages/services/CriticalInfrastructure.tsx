"use client";

;
import Link from "next/link";
import { Zap, Shield, Activity, Server, ArrowRight } from "lucide-react";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceSchema } from "@/components/shared/SchemaMarkup";
import { Button } from "@/components/ui/button";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Critical Infrastructure" }
];

const services = [
  {
    title: "Lightning Protection Testing",
    description: "BS EN 62305 compliance testing including earth resistance, strike path continuity, and tower/rooftop inspections.",
    link: "/services/critical/lightning-protection-testing",
    icon: Zap
  },
  {
    title: "UPS Maintenance & Battery Replacements",
    description: "Uninterruptible power supply servicing, battery impedance testing, thermal imaging, and load bank validation.",
    link: "/services/critical/ups-maintenance",
    icon: Activity
  },
  {
    title: "Generator Servicing & Backup Power",
    description: "Planned generator maintenance, emergency callout, fuel polishing, and transfer switch testing.",
    link: "/services/critical/generator-maintenance",
    icon: Zap
  },
  {
    title: "Arc Flash Risk Assessments",
    description: "High-voltage and low-voltage electrical hazard analysis with PPE recommendations and safety labelling.",
    link: "/services/critical/arc-flash-assessment",
    icon: Shield
  },
  {
    title: "HV Switching & Authorised Personnel",
    description: "Qualified Authorised Persons for high-voltage switching operations, load transfers, and emergency isolations.",
    link: "/services/critical/hv-switching",
    icon: Shield
  },
  {
    title: "Power Redundancy & Load Bank Testing",
    description: "N+1 and N+2 redundancy design, load bank validation, and Black Building Tests for mission-critical systems.",
    link: "/services/critical/power-redundancy",
    icon: Activity
  },
  {
    title: "Electrical Load Testing & Power Quality",
    description: "Harmonic distortion analysis, power factor correction, voltage quality surveys, and corrective engineering.",
    link: "/services/critical/power-quality",
    icon: Activity
  },
  {
    title: "Thermal Imaging & Infrared Surveys",
    description: "Non-invasive infrared electrical surveys detecting hotspots, overheating, and fire risks before failure.",
    link: "/services/critical/thermal-imaging",
    icon: Zap
  },
  {
    title: "Data Room & Server Room Audits",
    description: "Comprehensive infrastructure audits covering power resilience, cooling, fire suppression, and monitoring.",
    link: "/services/critical/data-room-audits",
    icon: Server
  }
];

const regions = [
  { name: "London", slug: "london" },
  { name: "Birmingham", slug: "birmingham" },
  { name: "Manchester", slug: "manchester" },
  { name: "Leeds", slug: "leeds" },
  { name: "Sheffield", slug: "sheffield" },
  { name: "Nottingham", slug: "nottingham" },
  { name: "Derby", slug: "derby" },
  { name: "Chesterfield", slug: "chesterfield" },
  { name: "Lincoln", slug: "lincoln" }
];

export default function CriticalInfrastructure() {
  return (
    <>
      

      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        name="Critical Infrastructure Services"
        description="Specialist engineering compliance for mission-critical electrical infrastructure including lightning protection, UPS systems, generators, power quality analysis, and thermal imaging surveys."
        provider="EntireFM"
        areaServed="United Kingdom"
      />

      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/placeholder.svg)',
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
              Critical Infrastructure Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
              Mission-critical engineering compliance for data centres, manufacturing, high-rise assets, and corporate estates.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-light mb-6">
                Engineering That Cannot Fail
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Some assets demand absolute reliability. Data centres cannot lose power. Manufacturing plants cannot afford unplanned shutdowns. 
                High-rise buildings require failsafe life safety systems. Our critical infrastructure services ensure the engineering supporting 
                your operations performs when it matters most—protecting uptime, preventing catastrophic failure, and maintaining business continuity.
              </p>
            </div>
          </section>

          {/* Why This Category Matters */}
          <section className="mb-16 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h2 className="text-3xl font-light mb-6 text-center">
              Why Critical Infrastructure Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Risk Mitigation</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Single points of failure eliminated. Redundancy validated. Backup systems proven under load. Insurance requirements met.
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Shutdown Prevention</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Predictive maintenance identifying failures before they occur. Power quality protecting sensitive equipment. Thermal imaging preventing electrical fires.
                </p>
              </div>
              <div className="text-center">
                <Activity className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Operational Resilience</h3>
                <p className="text-sm text-muted-foreground font-light">
                  UPS capacity validated. Generator runtime proven. Black Building Tests demonstrating seamless failover under real-world conditions.
                </p>
              </div>
              <div className="text-center">
                <Server className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-medium mb-2">Compliance Assurance</h3>
                <p className="text-sm text-muted-foreground font-light">
                  BS EN standards met. Insurance obligations satisfied. Landlord requirements fulfilled. Regulatory frameworks documented.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-8 text-center">
              Our Critical Infrastructure Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.link}
                    className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-medium text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Regional Delivery */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-center">
              Where We Deliver Critical Infrastructure Services
            </h2>
            <p className="text-center text-muted-foreground font-light mb-8 max-w-3xl mx-auto">
              Our critical infrastructure specialists operate across the UK, with deep regional expertise in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {regions.map((region) => (
                <div key={region.slug} className="text-center">
                  <Link href={`/locations/${region.slug}`}
                    className="block p-4 bg-muted/20 rounded-lg hover:bg-muted/40 transition-colors border border-border/30 hover:border-primary/30"
                  >
                    <span className="font-medium">{region.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6 text-center">
              Related Services & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link href="/services/electrical"
                className="p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30 text-center"
              >
                <h3 className="font-medium mb-2">Electrical Compliance</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Complete electrical testing and certification programs
                </p>
              </Link>
              <Link href="/fm-operations/ppm-delivery"
                className="p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30 text-center"
              >
                <h3 className="font-medium mb-2">PPM Delivery</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Planned preventive maintenance integrating critical systems
                </p>
              </Link>
              <Link href="/fm-operations/helpdesk"
                className="p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors border border-border/50 hover:border-primary/30 text-center"
              >
                <h3 className="font-medium mb-2">24/7 Helpdesk</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Emergency response for critical infrastructure failures
                </p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-light mb-4">
              Protect Your Critical Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
              Speak with our critical infrastructure specialists about UPS maintenance, generator servicing, power quality analysis, 
              thermal imaging, or data room audits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Specialists</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
