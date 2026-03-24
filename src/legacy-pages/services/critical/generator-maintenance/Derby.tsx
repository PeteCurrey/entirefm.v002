"use client";

;
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GeneratorMaintenanceDerby() {
  return (
    <>
      

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Generator Maintenance in Derby
            </h1>
            <p className="text-xl text-white/90 font-light">
              Emergency power protection across Derbyshire
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
            <h2 className="text-3xl font-light mb-6">Generator Services in Derby</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Derby's industrial heritage and modern commercial properties require reliable standby power generation. 
                Our Derbyshire engineers provide comprehensive generator maintenance, load bank testing, and fuel quality management 
                ensuring operational continuity across the region.
              </p>
              <p>
                Serving Derby and wider Derbyshire, we maintain diesel and gas generators with planned preventive maintenance 
                and emergency response for power generation failures.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Derby Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Pride Park</div>
              <div>Chaddesden</div>
              <div>Alvaston</div>
              <div>Spondon</div>
              <div>Mickleover</div>
              <div>Littleover</div>
              <div>Allestree</div>
              <div>Chellaston</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Derby Generator Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Derby and Derbyshire</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Emergency generator support and load bank testing</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:derby@entirefm.com" className="text-primary hover:underline">
                  derby@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request Generator Maintenance in Derby</h3>
            <p className="text-muted-foreground mb-6 font-light">
              Derbyshire engineers for generator servicing and load bank testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Derby Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
