import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

export default function ThermalImagingDerby() {
  const breadcrumbItems = [
    { label: "Critical Infrastructure", href: "/services/critical" },
    { label: "Thermal Imaging", href: "/services/critical/thermal-imaging" },
    { label: "Derby" }
  ];

  const coverageAreas = [
    "City Centre",
    "Pride Park",
    "Chaddesden",
    "Spondon",
    "Mickleover",
    "Alvaston",
    "Littleover",
    "Allestree",
    "Chellaston"
  ];

  return (
    <>
      <Helmet>
        <title>Thermal Imaging for Electrical Systems & Data Rooms — Derby | EntireFM</title>
        <meta name="description" content="Thermal imaging surveys in Derby. Electrical hotspot detection and energy loss investigation for manufacturing, logistics and critical facilities across Derbyshire." />
        <link rel="canonical" href="https://entirefm.com/services/critical/thermal-imaging/derby" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Thermal Imaging for Electrical Systems — Derby"
          description="Electrical hotspot detection and energy loss investigation for manufacturing, logistics and critical infrastructure across Derbyshire."
          stats={[
            { value: "IR", label: "Certified" },
            { value: "Same Day", label: "Reports" },
            { value: "Level 2", label: "Thermographers" },
            { value: "24/7", label: "Emergency" }
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
          backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        />

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Thermal Imaging Services in Derby
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">
                  Derby's manufacturing and logistics sector relies on continuous electrical systems. Our Level 2 certified thermographers provide proactive inspection of switchgear, motor control centres, and distribution systems to prevent production downtime and electrical fires.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Thermal imaging surveys detect: Loose connections and high-resistance joints, overloaded circuits, failing components, bearing wear in motors, and insulation breakdown. Early detection prevents unplanned outages and supports insurance compliance requirements.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Derby Service Coverage
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
                  Why Thermal Imaging for Derby Facilities?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Manufacturing Continuity</h3>
                      <p className="text-sm text-muted-foreground">Prevent production line failures by identifying electrical issues before they cause downtime.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Motor & Drive Analysis</h3>
                      <p className="text-sm text-muted-foreground">Detect bearing wear and electrical faults in industrial motors and variable speed drives.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Thermometer className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Insurance Compliance</h3>
                      <p className="text-sm text-muted-foreground">Annual thermal surveys often required by insurers for high-value electrical installations.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
                  Contact Our Derby Team
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Serving Derby and Derbyshire</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:derby@entirefm.com" className="text-primary hover:underline">derby@entirefm.com</a>
                  </div>
                </div>
              </section>

              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-light mb-4">Request Thermal Imaging in Derby</h3>
                <p className="text-muted-foreground mb-6 font-light">
                  Derbyshire specialists for thermal imaging surveys of manufacturing, logistics and critical infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link to="/request-proposal">Request Proposal</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Derby Team</Link>
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