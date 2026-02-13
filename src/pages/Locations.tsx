import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/shared/CTASection";
import londonSkyline from "@/assets/locations/london-skyline.jpg";
import manchesterSkyline from "@/assets/locations/manchester-skyline.jpg";
import birminghamSkyline from "@/assets/locations/birmingham-skyline.jpg";
import leedsSkyline from "@/assets/locations/leeds-skyline.jpg";
import sheffieldSkyline from "@/assets/locations/sheffield-skyline.jpg";
import liverpoolSkyline from "@/assets/locations/liverpool-skyline.jpg";
import leicesterSkyline from "@/assets/locations/leicester-skyline.jpg";
import nottinghamSkyline from "@/assets/locations/nottingham-skyline.jpg";
import derbySkyline from "@/assets/locations/derby-skyline.jpg";
import chesterfieldSkyline from "@/assets/locations/chesterfield-skyline.jpg";
import lincolnSkyline from "@/assets/locations/lincoln-skyline.jpg";

const Locations = () => {
  const locations = [
    { city: "London", region: "Greater London & M25", slug: "london", image: londonSkyline },
    { city: "Manchester", region: "North West", slug: "manchester", image: manchesterSkyline },
    { city: "Birmingham", region: "West Midlands", slug: "birmingham", image: birminghamSkyline },
    { city: "Leeds", region: "Yorkshire", slug: "leeds", image: leedsSkyline },
    { city: "Sheffield", region: "South Yorkshire", slug: "sheffield", image: sheffieldSkyline },
    { city: "Liverpool", region: "Merseyside", slug: "liverpool", image: liverpoolSkyline },
    { city: "Leicester", region: "East Midlands", slug: "leicester", image: leicesterSkyline },
    { city: "Nottingham", region: "Nottinghamshire", slug: "nottingham", image: nottinghamSkyline },
    { city: "Derby", region: "Derbyshire", slug: "derby", image: derbySkyline },
    { city: "Chesterfield", region: "North Derbyshire", slug: "chesterfield", image: chesterfieldSkyline },
    { city: "Lincoln", region: "Lincolnshire", slug: "lincoln", image: lincolnSkyline },
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

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-b from-charcoal to-charcoal/95 pt-40">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white leading-tight">
                National FM coverage. Local accountability.
              </h1>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Mobile engineer network across the UK delivering consistent hard services, soft services, compliance, and emergency response to your sites.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 font-light text-lg mb-12 max-w-2xl"
            >
              Select a location below to see how we support commercial, industrial and residential estates in your area.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={location.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={`/locations/${location.slug}`}>
                    <Card className="relative p-6 bg-white/10 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full overflow-hidden">
                      {/* Hover background image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                        style={{ backgroundImage: `url(${location.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/70 group-hover:from-charcoal group-hover:via-charcoal/90 group-hover:to-charcoal/60 transition-all duration-500" />
                      
                      {/* Accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <MapPin className="w-6 h-6 text-primary shrink-0" />
                          <div>
                            <h2 className="text-2xl font-light mb-1 text-white group-hover:text-primary transition-colors duration-300">{location.city}</h2>
                            <p className="text-sm text-gray-400 font-light">{location.region}</p>
                          </div>
                        </div>
                        <p className="text-sm font-light text-gray-400 mb-6">
                          Comprehensive FM services including M&E maintenance, compliance, and 24/7 support across {location.city} and surrounding areas.
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-white transition-colors duration-300">
                          View {location.city} Services
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Don't see your location?"
          description="Our mobile engineer network covers the entire UK. Talk to us about FM support for your sites."
          primaryLabel="Discuss Your Requirements"
          primaryHref="/contact"
          secondaryLabel="Call Us Now"
          secondaryHref="tel:+448001234567"
          variant="dark"
        />
      </div>
    </>
  );
};

export default Locations;
