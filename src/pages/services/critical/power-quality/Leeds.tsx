import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PowerQualityLeeds() {
  return (
    <>
      <Helmet>
        <title>Power Quality Analysis in Leeds | EntireFM</title>
        <meta name="description" content="Power quality analysis and harmonic testing for Leeds financial, corporate and healthcare estates. Voltage sag, transient and THD investigation across West Yorkshire." />
        <link rel="canonical" href="https://entirefm.com/services/critical/power-quality" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Power Quality Analysis in Leeds</h1>
            <p className="text-xl text-white/90 font-light">Electrical disturbance investigation across West Yorkshire</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12"><Link to="/services/critical/power-quality" className="text-primary hover:underline mb-8 inline-block">← Back to Power Quality</Link></div>
          
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Power Quality Services in Leeds</h2>
            <p className="text-muted-foreground">Leeds facilities require power quality monitoring. Our engineers provide harmonic analysis and voltage disturbance investigation.</p>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Leeds Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div><div>Holbeck</div><div>Hunslet</div><div>Headingley</div><div>Kirkstall</div><div>Beeston</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Leeds Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /><span>Serving Leeds and West Yorkshire</span></div>
              <div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /><a href="mailto:leeds@entirefm.com" className="text-primary hover:underline">leeds@entirefm.com</a></div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request Power Quality Analysis in Leeds</h3>
            <p className="text-muted-foreground mb-6 font-light">West Yorkshire specialists for power quality monitoring.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"><Link to="/request-proposal">Request Proposal</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Leeds Team</Link></Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
