"use client";

;
import Link from "next/link";
import { Shield, MapPin, Phone, Mail, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LightningProtectionLondon() {
  return (
    <>
      

      <div className="min-h-screen bg-background">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero-building-engineering.jpg)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Lightning Protection Testing — London</h1>
            <p className="text-xl text-white/90 font-light">BS EN 62305 compliance for the capital's critical infrastructure</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link href="/services/critical/lightning-protection" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Lightning Protection
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Lightning Protection in London</h2>
            <p className="text-muted-foreground mb-4">
              London's dense concentration of high-rise buildings, data centres, and critical infrastructure demands rigorous lightning protection compliance. Our BS EN 62305 certified engineers deliver comprehensive testing and maintenance across the capital.
            </p>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              London Compliance Requirements
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>BS EN 62305 annual inspections mandatory for buildings over 20m</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>London Building Control requirements for new developments</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Insurance-mandated testing for high-value commercial premises</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Data centre Tier III/IV certification requirements</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              London Asset Coverage
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-3">High-Rise Buildings</h4>
                <p className="text-sm text-muted-foreground">
                  Canary Wharf, The City, and emerging skyline developments require continuous lightning protection monitoring and testing.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Data Centres</h4>
                <p className="text-sm text-muted-foreground">
                  Docklands and Slough corridor facilities demand zero-downtime protection systems with annual certification.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Historic Buildings</h4>
                <p className="text-sm text-muted-foreground">
                  Listed structures in Westminster and the City require specialist protection solutions that preserve architectural integrity.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-semibold mb-3">Industrial Estates</h4>
                <p className="text-sm text-muted-foreground">
                  Park Royal, Enfield, and Croydon industrial zones with high-risk manufacturing and storage operations.
                </p>
              </div>
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
              <div>Kensington</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our London Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Greater London and M25 corridor</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>24/7 Emergency Response Available</span>
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
            <h3 className="text-2xl font-light mb-4">Request Lightning Protection Testing in London</h3>
            <p className="text-muted-foreground mb-6 font-light">
              BS EN 62305 certified engineers serving London's critical infrastructure.
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
