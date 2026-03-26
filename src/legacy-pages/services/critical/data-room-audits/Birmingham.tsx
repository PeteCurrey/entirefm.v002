"use client";

;
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DataRoomAuditsBirmingham() {
  return (
    <>
      

      <div className="min-h-screen bg-background pt-20">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/hero-building-engineering.jpg)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Data Room Audits in Birmingham</h1>
            <p className="text-xl text-white/90 font-light">Infrastructure assessments across the West Midlands</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12"><Link href="/services/critical/data-room-audits" className="text-primary hover:underline mb-8 inline-block">← Back to Data Room Audits</Link></div>
          <section className="mb-12"><h2 className="text-3xl font-light mb-6">Data Room Audit Services in Birmingham</h2><p className="text-muted-foreground">Birmingham data centres require comprehensive infrastructure audits. Our engineers provide detailed assessments of cooling, power, and environmental systems.</p></section>
          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8"><h3 className="text-2xl font-light mb-6">Birmingham Service Coverage</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm"><div>City Centre</div><div>Digbeth</div><div>Solihull</div><div>Aston</div><div>Edgbaston</div><div>Sutton Coldfield</div></div></section>
          <section className="mb-12"><h3 className="text-2xl font-light mb-6">Contact Our Birmingham Team</h3><div className="space-y-4"><div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /><span>Serving Birmingham and West Midlands</span></div><div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /><a href="mailto:birmingham@entirefm.com" className="text-primary hover:underline">birmingham@entirefm.com</a></div></div></section>
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"><h3 className="text-2xl font-light mb-4">Request Data Room Audit in Birmingham</h3><p className="text-muted-foreground mb-6 font-light">West Midlands specialists for data room infrastructure audits.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button asChild size="lg"><Link href="/request-proposal">Request Proposal</Link></Button><Button asChild variant="outline" size="lg"><Link href="/contact">Contact Birmingham Team</Link></Button></div></section>
        </div>
      </div>
    </>
  );
}
