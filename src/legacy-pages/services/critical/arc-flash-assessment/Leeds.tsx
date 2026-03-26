"use client";

;
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArcFlashAssessmentLeeds() {
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
              Arc Flash Assessment in Leeds
            </h1>
            <p className="text-xl text-white/90 font-light">
              Electrical safety analysis across West Yorkshire
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link href="/services/critical/arc-flash-assessment" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Arc Flash Assessment
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Arc Flash Services in Leeds</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Leeds' commercial and industrial facilities require comprehensive arc flash risk assessment and safety labeling. 
                Our West Yorkshire specialists provide detailed electrical system modeling, incident energy calculations, and PPE recommendations 
                ensuring compliance with BS EN 61482 and HSE guidance across the region.
              </p>
              <p>
                Serving Leeds and wider West Yorkshire, we deliver arc flash studies with safety labels 
                and comprehensive documentation for electrical safety protocols.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Leeds Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Holbeck</div>
              <div>Hunslet</div>
              <div>Chapel Allerton</div>
              <div>Headingley</div>
              <div>Roundhay</div>
              <div>Beeston</div>
              <div>Armley</div>
              <div>Kirkstall</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Leeds Arc Flash Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Leeds and West Yorkshire</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Arc flash studies and electrical safety assessment</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:leeds@entirefm.com" className="text-primary hover:underline">
                  leeds@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request Arc Flash Assessment in Leeds</h3>
            <p className="text-muted-foreground mb-6 font-light">
              West Yorkshire specialists for arc flash studies and electrical safety analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Leeds Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
