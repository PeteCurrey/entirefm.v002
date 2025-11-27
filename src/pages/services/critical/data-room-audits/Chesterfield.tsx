import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DataRoomAuditsChesterfield() {
  return (
    <>
      <Helmet>
        <title>Data Room Audits in Chesterfield | EntireFM</title>
        <meta name="description" content="Data room audits in Chesterfield. Infrastructure assessments for North Derbyshire data centre facilities." />
        <link rel="canonical" href="https://entirefm.com/services/critical/data-room-audits" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Data Room Audits in Chesterfield</h1>
            <p className="text-xl text-white/90 font-light">Infrastructure assessments across North Derbyshire</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12"><Link to="/services/critical/data-room-audits" className="text-primary hover:underline mb-8 inline-block">← Back to Data Room Audits</Link></div>
          <section className="mb-12"><h2 className="text-3xl font-light mb-6">Data Room Audit Services in Chesterfield</h2><p className="text-muted-foreground">Chesterfield data centres require comprehensive infrastructure audits. Our engineers provide detailed assessments of cooling, power, and environmental systems.</p></section>
          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8"><h3 className="text-2xl font-light mb-6">Chesterfield Service Coverage</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm"><div>Town Centre</div><div>Staveley</div><div>Brimington</div><div>Bolsover</div><div>Clay Cross</div><div>Dronfield</div></div></section>
          <section className="mb-12"><h3 className="text-2xl font-light mb-6">Contact Our Chesterfield Team</h3><div className="space-y-4"><div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /><span>Serving Chesterfield and North Derbyshire</span></div><div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /><a href="mailto:chesterfield@entirefm.com" className="text-primary hover:underline">chesterfield@entirefm.com</a></div></div></section>
          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"><h3 className="text-2xl font-light mb-4">Request Data Room Audit in Chesterfield</h3><p className="text-muted-foreground mb-6 font-light">North Derbyshire specialists for data room infrastructure audits.</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Button asChild size="lg"><Link to="/request-proposal">Request Proposal</Link></Button><Button asChild variant="outline" size="lg"><Link to="/contact">Contact Chesterfield Team</Link></Button></div></section>
        </div>
      </div>
    </>
  );
}
