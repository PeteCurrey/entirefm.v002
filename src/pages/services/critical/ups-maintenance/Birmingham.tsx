import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UPSMaintenanceBirmingham() {
  return (
    <>
      <Helmet>
        <title>UPS Maintenance & Battery Replacement in Birmingham | EntireFM</title>
        <meta name="description" content="UPS maintenance and battery replacement for Birmingham hospitals, data centres and manufacturing plants. Impedance testing and modular UPS servicing across the Midlands." />
        <link rel="canonical" href="https://entirefm.com/services/critical/ups-maintenance" />
      </Helmet>

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
              UPS Maintenance in Birmingham
            </h1>
            <p className="text-xl text-white/90 font-light">
              Critical power protection across the Midlands
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link to="/services/critical/ups-maintenance" className="text-primary hover:underline mb-8 inline-block">
              ← Back to UPS Maintenance
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">UPS Services in Birmingham</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Birmingham's commercial estates, healthcare facilities, and manufacturing plants require reliable UPS protection. 
                Our Midlands engineers deliver comprehensive UPS maintenance, battery impedance testing, and replacement services 
                ensuring critical systems remain operational during power interruptions.
              </p>
              <p>
                Serving Birmingham and the wider West Midlands, we maintain all major UPS brands with planned preventive maintenance 
                programs and 24/7 emergency response for UPS failures and battery replacements.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Birmingham Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Brindleyplace</div>
              <div>Digbeth</div>
              <div>Edgbaston</div>
              <div>Solihull</div>
              <div>Sutton Coldfield</div>
              <div>Castle Bromwich</div>
              <div>Erdington</div>
              <div>Selly Oak</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Birmingham UPS Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Birmingham and the West Midlands</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Emergency UPS support and rapid battery replacement</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:birmingham@entirefm.com" className="text-primary hover:underline">
                  birmingham@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request UPS Maintenance in Birmingham</h3>
            <p className="text-muted-foreground mb-6 font-light">
              Midlands engineers for UPS maintenance and battery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Birmingham Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
