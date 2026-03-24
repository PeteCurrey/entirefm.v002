"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface RegionalLocation {
  city: string;
  url: string;
}

interface RegionalServiceIndexProps {
  serviceName: string;
  serviceSlug: string;
  title?: string;
}

const LOCATIONS: RegionalLocation[] = [
  { city: "London", url: "london" },
  { city: "Birmingham", url: "birmingham" },
  { city: "Manchester", url: "manchester" },
  { city: "Leeds", url: "leeds" },
  { city: "Sheffield", url: "sheffield" },
  { city: "Nottingham", url: "nottingham" },
  { city: "Derby", url: "derby" },
  { city: "Chesterfield", url: "chesterfield" },
  { city: "Lincoln", url: "lincoln" },
];

export const RegionalServiceIndex = ({ 
  serviceName, 
  serviceSlug,
  title = "Available Across Our Service Regions"
}: RegionalServiceIndexProps) => {
  return (
    <section className="py-12 bg-muted/30 rounded-lg">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-light mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our {serviceName} services are delivered by local engineers across major UK cities, 
          ensuring rapid response times and regional expertise.
        </motion.p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/services/${serviceSlug}/${location.url}`}>
                <Card className="p-4 hover:shadow-lg transition-all hover:border-primary/50 group">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {location.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {serviceName} in {location.city}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
