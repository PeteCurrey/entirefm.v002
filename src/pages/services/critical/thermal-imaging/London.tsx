import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

export default function ThermalImagingLondon() {
  const breadcrumbItems = [
    { label: "Critical Infrastructure", href: "/services/critical" },
    { label: "Thermal Imaging", href: "/services/critical/thermal-imaging" },
    { label: "London" }
  ];

  const coverageAreas = [
    "City of London",
    "Canary Wharf",
    "Docklands",
    "Westminster",
    "Camden",
    "Islington",
    "Southwark",
    "Tower Hamlets",
    "Hackney"
  ];

  return (
    <>
      <Helmet>
        <title>Thermal Imaging Surveys in London | Electrical Hotspot Detection | EntireFM</title>
        <meta name="description" content="Thermal imaging surveys in London. Electrical hotspot detection and energy loss investigation for data centres and critical facilities across Greater London." />
        <link rel="canonical" href="https://entirefm.com/services/critical/thermal-imaging/london" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Thermal Imaging Surveys in London"
          description="Electrical hotspot detection and energy loss investigation for data centres, switchrooms, and critical infrastructure across the capital."
          stats={[
            { value: "IR", label: "Certified" },
            { value: "24/7", label: "Availability" },
            { value: "2hr", label: "Response" },
            { value: "Level 2", label: "Thermographers" }
          ]}
          primaryCTA={{
            label: "Request Survey",
            href: "/request-proposal",
            icon: ArrowRight
          }}
          secondaryCTA={{
            label: "Back to Thermal Imaging",
            href: "/services/critical/thermal-imaging",
            icon: Thermometer
          }}
          backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80"
        />

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Thermal Imaging Services in London
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  London's concentration of data centres, financial trading floors, and mission-critical facilities demands proactive electrical monitoring. Our Level 2 certified thermographers identify hotspots in switchgear, distribution boards, and cable runs before they cause costly failures or fire risk.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Thermal imaging surveys detect: Loose connections and high-resistance joints, overloaded circuits, failing components, and insulation breakdown. Early detection prevents unplanned outages and supports insurance compliance requirements.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  London Service Coverage
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {coverageAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="p-4 text-center hover:border-primary/50 transition-colors">
                        <span className="text-sm font-light">{area}</span>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Why Thermal Imaging for London Facilities?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Prevent Unplanned Downtime</h3>
                      <p className="text-sm text-muted-foreground">Identify failing components before they cause outages in critical London operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Insurance Compliance</h3>
                      <p className="text-sm text-muted-foreground">Many London insurers require annual thermal surveys for high-value electrical installations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Fire Risk Reduction</h3>
                      <p className="text-sm text-muted-foreground">Electrical faults are a leading cause of commercial fires—thermal imaging provides early warning.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Contact Our London Team
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Serving all London boroughs and Greater London</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:london@entirefm.com" className="text-primary hover:underline">london@entirefm.com</a>
                  </div>
                </div>
              </section>

              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-light mb-4">Request Thermal Imaging in London</h3>
                <p className="text-muted-foreground mb-6 font-light">
                  London specialists for thermal imaging surveys of electrical systems, data centres, and critical infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">Request Proposal</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact London Team</Link>
                  </Button>
                </div>
              </section>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <SidebarCTA />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}