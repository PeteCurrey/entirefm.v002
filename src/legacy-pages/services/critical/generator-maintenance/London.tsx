"use client";

;
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GeneratorMaintenanceLondon() {
  return (
    <>
      

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero-building-engineering.jpg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Generator Maintenance in London
            </h1>
            <p className="text-xl text-white/90 font-light">
              Emergency power protection across the capital
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link href="/services/critical/generator-maintenance" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Generator Maintenance
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Generator Services in London</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                London's commercial properties, data centres, and critical facilities require reliable standby power generation. 
                Our London-based engineers provide comprehensive generator maintenance, load bank testing, and fuel quality management 
                ensuring operational continuity across all London boroughs.
              </p>
              <p>
                From the City to Canary Wharf, we maintain diesel and gas generators with planned preventive maintenance 
                and emergency response for power generation failures.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">London Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City of London</div>
              <div>Canary Wharf</div>
              <div>Westminster</div>
              <div>Camden</div>
              <div>Islington</div>
              <div>Hackney</div>
              <div>Tower Hamlets</div>
              <div>Southwark</div>
              <div>Lambeth</div>
              <div>Wandsworth</div>
              <div>Hammersmith</div>
              <div>Kensington & Chelsea</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our London Generator Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving all London boroughs</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>24/7 emergency generator support and load bank testing</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:london@entirefm.com" className="text-primary hover:underline">
                  london@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request Generator Maintenance in London</h3>
            <p className="text-muted-foreground mb-6 font-light">
              London engineers for generator servicing and load bank testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact London Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
