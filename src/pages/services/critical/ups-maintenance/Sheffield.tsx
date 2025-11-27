import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UPSMaintenanceSheffield() {
  return (
    <>
      <Helmet>
        <title>UPS Maintenance & Battery Replacement in Sheffield | EntireFM</title>
        <meta name="description" content="UPS maintenance and battery services in Sheffield. Critical power protection for South Yorkshire manufacturing and commercial facilities." />
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
              UPS Maintenance in Sheffield
            </h1>
            <p className="text-xl text-white/90 font-light">
              Critical power protection across South Yorkshire
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
            <h2 className="text-3xl font-light mb-6">UPS Services in Sheffield</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Sheffield's manufacturing heritage and modern business districts require reliable UPS protection for critical systems. 
                Our South Yorkshire engineers provide comprehensive UPS maintenance, battery impedance testing, and replacement services 
                ensuring operational continuity across industrial and commercial facilities.
              </p>
              <p>
                From advanced manufacturing plants to the Digital Campus, we service all major UPS brands with planned maintenance 
                and emergency response for power protection failures.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Sheffield Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Kelham Island</div>
              <div>Digital Campus</div>
              <div>Attercliffe</div>
              <div>Ecclesall</div>
              <div>Hillsborough</div>
              <div>Rotherham</div>
              <div>Barnsley</div>
              <div>Doncaster</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Sheffield UPS Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Sheffield and South Yorkshire</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>24/7 UPS emergency support available</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:sheffield@entirefm.com" className="text-primary hover:underline">
                  sheffield@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request UPS Maintenance in Sheffield</h3>
            <p className="text-muted-foreground mb-6 font-light">
              South Yorkshire engineers for UPS maintenance and battery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Sheffield Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
