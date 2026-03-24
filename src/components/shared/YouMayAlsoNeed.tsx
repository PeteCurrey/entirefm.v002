"use client";

import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface RelatedService {
  title: string;
  description: string;
  url: string;
}

interface YouMayAlsoNeedProps {
  services: RelatedService[];
  title?: string;
}

export const YouMayAlsoNeed = ({ 
  services, 
  title = "You May Also Need" 
}: YouMayAlsoNeedProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-light mb-8 text-center underline-accent inline-block mx-auto">
            {title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.url}>
                  <Card className="p-6 h-full hover:border-primary/50 transition-all hover-lift group">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-light group-hover:translate-x-1 transition-transform">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
