"use client";

;
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowRight, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceHeroSection from "@/components/shared/ServiceHeroSection";
import { SidebarCTA } from "@/components/shared/SidebarCTA";

export default function ThermalImagingBirmingham() {
  const breadcrumbItems = [
    { label: "Critical Infrastructure", href: "/services/critical" },
    { label: "Thermal Imaging", href: "/services/critical/thermal-imaging" },
    { label: "Birmingham" }
  ];

  const coverageAreas = ["City Centre", "Digbeth", "Solihull", "Aston", "Edgbaston", "Sutton Coldfield", "Jewellery Quarter", "Selly Oak", "Kings Heath"];

  return (
    <>
      

      <div className="min-h-screen bg-background">
        <ServiceHeroSection
          breadcrumbItems={breadcrumbItems}
          title="Thermal Imaging Surveys in Birmingham"
          description="Electrical hotspot detection and energy loss investigation for manufacturing, automotive and commercial facilities across the West Midlands."
          stats={[
            { value: "IR", label: "Certified" },
            { value: "Same Day", label: "Reports" },
            { value: "Level 2", label: "Thermographers" },
            { value: "24/7", label: "Emergency" }
          ]}
          primaryCTA={{ label: "Request Survey", href: "/request-proposal", icon: ArrowRight }}
          secondaryCTA={{ label: "Back to Thermal Imaging", href: "/services/critical/thermal-imaging", icon: Thermometer }}
          backgroundImage="https://images.unsplash.com/photo-1567359781514-3b964ea46b97?w=1920&q=80"
        />

        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">Thermal Imaging Services in Birmingham</h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-4">Birmingham's manufacturing and automotive industries demand reliable electrical systems. Our Level 2 certified thermographers provide proactive inspection of switchgear, motor control centres, and production line electrical systems.</p>
                <p className="text-muted-foreground font-light leading-relaxed">Early detection of hotspots prevents costly production downtime and supports insurance compliance for high-value installations.</p>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">Birmingham Service Coverage</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {coverageAreas.map((area, index) => (
                    <motion.div key={area} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                      <Card className="p-4 text-center hover:border-primary/50 transition-colors"><span className="text-sm font-light">{area}</span></Card>
                    </motion.div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-light mb-6 underline-accent inline-block">Contact Our Birmingham Team</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /><span>Serving Birmingham and West Midlands</span></div>
                  <div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /><a href="mailto:birmingham@entirefm.com" className="text-primary hover:underline">birmingham@entirefm.com</a></div>
                </div>
              </section>

              <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-light mb-4">Request Thermal Imaging in Birmingham</h3>
                <p className="text-muted-foreground mb-6 font-light">West Midlands specialists for thermal imaging surveys of manufacturing and commercial facilities.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg"><Link href="/request-proposal">Request Proposal</Link></Button>
                  <Button asChild variant="outline" size="lg"><Link href="/contact">Contact Birmingham Team</Link></Button>
                </div>
              </section>
            </div>
            <aside className="lg:col-span-1"><div className="sticky top-24"><SidebarCTA /></div></aside>
          </div>
        </div>
      </div>
    </>
  );
}