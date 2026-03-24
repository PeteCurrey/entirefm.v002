"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface StatsBannerProps {
  stats: Stat[];
  variant?: "default" | "gradient" | "dark";
  className?: string;
}

const AnimatedNumber = ({ 
  value, 
  prefix = "", 
  suffix = "",
  inView 
}: { 
  value: string; 
  prefix?: string; 
  suffix?: string;
  inView: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const isNumeric = !isNaN(numericValue);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, numericValue, isNumeric]);

  return (
    <span>
      {prefix}
      {isNumeric ? displayValue : value}
      {suffix}
    </span>
  );
};

const StatsBanner = ({
  stats,
  variant = "default",
  className = "",
}: StatsBannerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getContainerStyles = () => {
    switch (variant) {
      case "gradient":
        return "py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20";
      case "dark":
        return "py-16 bg-charcoal text-white";
      default:
        return "py-16 bg-muted/30 border-y border-border";
    }
  };

  return (
    <section ref={ref} className={`${getContainerStyles()} ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-2 ${stats.length >= 4 ? 'md:grid-cols-4' : `md:grid-cols-${stats.length}`} gap-8`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className={`text-3xl md:text-5xl font-light mb-2 ${variant === "dark" ? "text-white" : "text-primary"}`}>
                <AnimatedNumber 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <div className={`text-sm font-light ${variant === "dark" ? "text-gray-400" : "text-muted-foreground"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
