"use client";

;
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UPSMaintenanceLincoln() {
  return (
    <>
      

      <div className="min-h-screen bg-background">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              UPS Maintenance in Lincoln
            </h1>
            <p className="text-xl text-white/90 font-light">
              Critical power protection across Lincolnshire
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link href="/services/critical/ups-maintenance" className="text-primary hover:underline mb-8 inline-block">
              ← Back to UPS Maintenance
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">UPS Services in Lincoln</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Lincoln's commercial properties and public sector facilities across Lincolnshire require robust UPS protection. 
                Our local engineers deliver comprehensive UPS maintenance, battery impedance testing, and replacement services 
                ensuring critical IT systems remain operational during power interruptions.
              </p>
              <p>
                We service all major UPS brands throughout Lincoln and the surrounding region, providing planned maintenance programs 
                and emergency callout for UPS failures and battery degradation.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Lincoln Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Cathedral Quarter</div>
              <div>Brayford Pool</div>
              <div>North Hykeham</div>
              <div>Bracebridge Heath</div>
              <div>Waddington</div>
              <div>Skellingthorpe</div>
              <div>Washingborough</div>
              <div>Burton</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Lincoln UPS Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Lincoln and Lincolnshire</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>24/7 UPS emergency support available</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:lincoln@entirefm.com" className="text-primary hover:underline">
                  lincoln@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request UPS Maintenance in Lincoln</h3>
            <p className="text-muted-foreground mb-6 font-light">
              Lincolnshire engineers for UPS maintenance and battery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Lincoln Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
