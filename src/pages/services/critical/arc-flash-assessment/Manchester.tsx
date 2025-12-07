import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArcFlashAssessmentManchester() {
  return (
    <>
      <Helmet>
        <title>Arc Flash Assessment & Risk Evaluation in Manchester | EntireFM</title>
        <meta name="description" content="Arc flash assessment and electrical safety analysis in Manchester. Comprehensive risk evaluation for Greater Manchester commercial and industrial facilities." />
        <link rel="canonical" href="https://entirefm.com/services/critical/arc-flash-assessment" />
      </Helmet>

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
              Arc Flash Assessment in Manchester
            </h1>
            <p className="text-xl text-white/90 font-light">
              Electrical safety analysis across Greater Manchester
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-12">
            <Link to="/services/critical/arc-flash-assessment" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Arc Flash Assessment
            </Link>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-light mb-6">Arc Flash Services in Manchester</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Manchester's commercial and industrial facilities require comprehensive arc flash risk assessment and safety labeling. 
                Our Greater Manchester specialists provide detailed electrical system modeling, incident energy calculations, and PPE recommendations 
                ensuring compliance with BS EN 61482 and HSE guidance across the region.
              </p>
              <p>
                From MediaCityUK to Trafford Park, we deliver arc flash studies with safety labels 
                and comprehensive documentation for electrical safety protocols.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Manchester Service Coverage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Spinningfields</div>
              <div>MediaCityUK</div>
              <div>Salford Quays</div>
              <div>Trafford Park</div>
              <div>Ancoats</div>
              <div>Deansgate</div>
              <div>Northern Quarter</div>
              <div>Piccadilly</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Manchester Arc Flash Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Manchester and Greater Manchester</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Arc flash studies and electrical safety assessment</span>
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
            <h3 className="text-2xl font-light mb-4">Request Arc Flash Assessment in Manchester</h3>
            <p className="text-muted-foreground mb-6 font-light">
              Greater Manchester specialists for arc flash studies and electrical safety analysis.
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
