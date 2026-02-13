import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CTASection from "@/components/shared/CTASection";

const Locations = () => {
  const locations = [
    { 
      city: "London", 
      region: "Greater London & M25", 
      slug: "london",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
    },
    { 
      city: "Manchester", 
      region: "North West", 
      slug: "manchester",
      image: "https://images.unsplash.com/photo-1549042428-b4209b05aa1f?w=800&q=80"
    },
    { 
      city: "Birmingham", 
      region: "West Midlands", 
      slug: "birmingham",
      image: "https://images.unsplash.com/photo-1567605974523-7af4c0c42fbc?w=800&q=80"
    },
    { 
      city: "Leeds", 
      region: "Yorkshire", 
      slug: "leeds",
      image: "https://images.unsplash.com/photo-1590079168573-5ee822a56e8e?w=800&q=80"
    },
    { 
      city: "Sheffield", 
      region: "South Yorkshire", 
      slug: "sheffield",
      image: "https://images.unsplash.com/photo-1595880500386-4b33c4e7d0c5?w=800&q=80"
    },
    { 
      city: "Liverpool", 
      region: "Merseyside", 
      slug: "liverpool",
      image: "https://images.unsplash.com/photo-1571504211935-1c936b327411?w=800&q=80"
    },
    { 
      city: "Leicester", 
      region: "East Midlands", 
      slug: "leicester",
      image: "https://images.unsplash.com/photo-1590084871842-b5b3c1ad1a8a?w=800&q=80"
    },
    { 
      city: "Nottingham", 
      region: "Nottinghamshire", 
      slug: "nottingham",
      image: "https://images.unsplash.com/photo-1584463699033-0f0bea1ec75b?w=800&q=80"
    },
    { 
      city: "Derby", 
      region: "Derbyshire", 
      slug: "derby",
      image: "https://images.unsplash.com/photo-1590079059869-2b5e4e7c1f44?w=800&q=80"
    },
    { 
      city: "Chesterfield", 
      region: "North Derbyshire", 
      slug: "chesterfield",
      image: "https://images.unsplash.com/photo-1582407947092-405442958a5e?w=800&q=80"
    },
    { 
      city: "Lincoln", 
      region: "Lincolnshire", 
      slug: "lincoln",
      image: "https://images.unsplash.com/photo-1590079168573-5ee822a56e8e?w=800&q=80"
    }
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
