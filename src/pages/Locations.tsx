import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Locations = () => {
  const locations = [
    { city: "London", region: "Greater London & M25", slug: "london" },
    { city: "Manchester", region: "North West", slug: "manchester" },
    { city: "Birmingham", region: "West Midlands", slug: "birmingham" },
    { city: "Leeds", region: "Yorkshire", slug: "leeds" },
    { city: "Sheffield", region: "South Yorkshire", slug: "sheffield" },
    { city: "Liverpool", region: "Merseyside", slug: "liverpool" },
    { city: "Newcastle", region: "North East", slug: "newcastle" },
    { city: "Leicester", region: "East Midlands", slug: "leicester" },
    { city: "Bristol", region: "South West", slug: "bristol" }
  ];

  return (
    <>
      <Helmet>
        <title>UK Facilities Management Locations | National FM Coverage | EntireFM</title>
        <meta 
          name="description" 
          content="National facilities management coverage across the UK. FM services in London, Manchester, Birmingham, Leeds, and major cities. 24/7 support and local engineers."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-muted/50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-light mb-6 underline-accent inline-block">
                National FM coverage. Local accountability.
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Mobile engineer network across the UK delivering consistent hard services, soft services, compliance, and emergency response to your sites.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location) => (
                <Card key={location.slug} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <h2 className="text-2xl font-light mb-2">{location.city}</h2>
                      <p className="text-sm text-muted-foreground font-light">{location.region}</p>
                    </div>
                  </div>
                  <p className="text-sm font-light text-muted-foreground mb-6">
                    Comprehensive FM services including M&E maintenance, compliance, and 24/7 support across {location.city} and surrounding areas.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/locations/${location.slug}`}>
                      View {location.city} Services
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Don't see your location?
            </h2>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-8">
              Our mobile engineer network covers the entire UK. Talk to us about FM support for your sites.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-charcoal hover:bg-gray-100" asChild>
              <Link to="/contact">Discuss Your Requirements</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Locations;
