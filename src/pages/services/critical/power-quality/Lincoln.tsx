import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PowerQualityLincoln() {
  return (
    <>
      <Helmet>
        <title>Power Quality Analysis in Lincoln | EntireFM</title>
        <meta name="description" content="Power quality analysis for Lincoln healthcare and food processing facilities. Voltage monitoring and harmonic testing protecting sensitive medical and production equipment." />
        <link rel="canonical" href="https://entirefm.com/services/critical/power-quality" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg)' }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">Power Quality Analysis in Lincoln</h1>
            <p className="text-xl text-white/90 font-light">Electrical disturbance investigation across Lincolnshire</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12"><Link to="/services/critical/power-quality" className="text-primary hover:underline mb-8 inline-block">← Back to Power Quality</Link></div>
          
          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Power Quality Services in Lincoln</h2>
            <p className="text-muted-foreground">Lincoln facilities require power quality monitoring. Our engineers provide harmonic analysis and voltage disturbance investigation.</p>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Lincoln Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div><div>Brayford Wharf</div><div>North Hykeham</div><div>Waddington</div><div>Bracebridge Heath</div><div>Skellingthorpe</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Lincoln Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground"><MapPin className="w-5 h-5 text-primary" /><span>Serving Lincoln and Lincolnshire</span></div>
              <div className="flex items-center gap-3 text-muted-foreground"><Mail className="w-5 h-5 text-primary" /><a href="mailto:lincoln@entirefm.com" className="text-primary hover:underline">lincoln@entirefm.com</a></div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request Power Quality Analysis in Lincoln</h3>
            <p className="text-muted-foreground mb-6 font-light">Lincolnshire specialists for power quality monitoring.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg"><Link to="/request-proposal">Request Proposal</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Contact Lincoln Team</Link></Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
