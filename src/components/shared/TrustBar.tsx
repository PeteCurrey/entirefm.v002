"use client";

import { Shield, Clock, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface TrustBarProps {
  variant?: 'default' | 'compact';
}

export const TrustBar = ({ variant = 'default' }: TrustBarProps) => {
  const accreditations = [
    { name: 'CHAS Accredited', icon: Shield },
    { name: 'SafeContractor Approved', icon: Award },
    { name: 'Gas Safe Registered', icon: Shield },
    { name: 'NICEIC Approved', icon: Award },
  ];

  const claims = [
    { text: '24/7 National Helpdesk', icon: Clock },
    { text: 'Nationwide Coverage', icon: MapPin },
  ];

  if (variant === 'compact') {
    return (
      <div className="border-y border-border bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {accreditations.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-light">{item.name}</span>
              </motion.div>
            ))}
            <div className="hidden md:block w-px h-6 bg-border" />
            {claims.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (accreditations.length + idx) * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="font-light">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 border-y border-border bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-light mb-2">Trusted by Enterprise Clients Nationwide</h3>
          <p className="text-muted-foreground font-light">
            Fully accredited, nationally covered, and available 24/7
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {accreditations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover-lift"
            >
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-sm font-light text-muted-foreground">{item.name}</span>
            </motion.div>
          ))}
          {claims.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (accreditations.length + idx) * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover-lift"
            >
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-sm font-light text-muted-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
