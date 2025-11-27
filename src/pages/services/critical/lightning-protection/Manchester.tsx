import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LightningProtectionManchester() {
  return (
    <>
      <Helmet>
        <title>Lightning Protection Testing in Manchester | EntireFM</title>
        <meta name="description" content="BS EN 62305 lightning protection testing in Manchester. Earth resistance measurement and strike path testing for Greater Manchester commercial buildings." />
        <link rel="canonical" href="https://entirefm.com/services/critical/lightning-protection-testing" />
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
              Lightning Protection Testing in Manchester
            </h1>
            <p className="text-xl text-white/90 font-light">
              BS EN 62305 compliance across Greater Manchester
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link to="/services/critical/lightning-protection-testing" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Lightning Protection Testing
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Lightning Protection in Manchester</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Manchester's growing skyline and commercial developments require specialist lightning protection compliance. 
                Our North West engineers deliver BS EN 62305 testing throughout Greater Manchester, from MediaCityUK to Salford Quays, 
                ensuring insurance requirements and protecting critical infrastructure.
              </p>
              <p>
                With Manchester's industrial heritage including mill conversions and modern office towers, 
                we provide tailored lightning protection testing meeting the diverse requirements of the city's commercial property portfolio.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Manchester Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Salford Quays</div>
              <div>MediaCityUK</div>
              <div>Trafford Park</div>
              <div>Spinningfields</div>
              <div>Ancoats</div>
              <div>Stockport</div>
              <div>Oldham</div>
              <div>Bolton</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Manchester Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Manchester and Greater Manchester region</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Emergency lightning damage response available</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:manchester@entirefm.com" className="text-primary hover:underline">
                  manchester@entirefm.com
                </a>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Request Lightning Protection Testing in Manchester</h3>
            <p className="text-muted-foreground mb-6 font-light">
              Local North West engineers for BS EN 62305 testing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/request-proposal">Request Proposal</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Manchester Team</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
