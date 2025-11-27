import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LightningProtectionBirmingham() {
  return (
    <>
      <Helmet>
        <title>Lightning Protection Testing in Birmingham | EntireFM</title>
        <meta name="description" content="BS EN 62305 lightning protection testing in Birmingham. Earth resistance, strike path continuity, and compliance inspections for Midlands commercial properties." />
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
              Lightning Protection Testing in Birmingham
            </h1>
            <p className="text-xl text-white/90 font-light">
              BS EN 62305 compliance across the Midlands
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
            <h2 className="text-3xl font-light mb-6">Lightning Protection in Birmingham</h2>
            <div className="prose prose-lg max-w-none font-light leading-relaxed text-muted-foreground space-y-4">
              <p>
                Birmingham's commercial estates, industrial facilities, and retail complexes require regular lightning protection validation. 
                Our Midlands-based engineers provide BS EN 62305 testing throughout Birmingham and surrounding areas, ensuring insurance compliance 
                and protecting against storm damage.
              </p>
              <p>
                From the Jewellery Quarter's heritage buildings to modern office developments in Brindleyplace, 
                we deliver earth resistance testing, continuity checks, and rooftop inspection services meeting landlord and regulatory requirements.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-muted/20 border border-border/50 rounded-lg p-8">
            <h3 className="text-2xl font-light mb-6">Birmingham Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>City Centre</div>
              <div>Brindleyplace</div>
              <div>Jewellery Quarter</div>
              <div>Digbeth</div>
              <div>Edgbaston</div>
              <div>Solihull</div>
              <div>Sutton Coldfield</div>
              <div>Castle Bromwich</div>
              <div>Erdington</div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-2xl font-light mb-6">Contact Our Birmingham Team</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Serving Birmingham and the wider West Midlands</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Rapid response for lightning damage assessments</span>
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
            <h3 className="text-2xl font-light mb-4">Request Lightning Protection Testing in Birmingham</h3>
            <p className="text-muted-foreground mb-6 font-light">
              Local Midlands engineers for BS EN 62305 compliance testing.
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
