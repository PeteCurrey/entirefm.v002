import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { LucideIcon } from "lucide-react";

interface HeroStat {
  value: string;
  label: string;
  suffix?: string;
}

interface HeroCTA {
  label: string;
  href: string;
  icon?: LucideIcon;
  variant?: "default" | "outline";
}

interface ServiceHeroSectionProps {
  breadcrumbItems: Array<{ label: string; href?: string }>;
  title: string;
  description: string;
  stats?: HeroStat[];
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  backgroundImage?: string;
}

const ServiceHeroSection = ({
  breadcrumbItems,
  title,
  description,
  stats,
  primaryCTA,
  secondaryCTA,
  backgroundImage
}: ServiceHeroSectionProps) => {
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[60vh] py-32 px-4 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal overflow-hidden flex items-center"
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          y,
          opacity
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-6"
        >
          <Breadcrumb items={breadcrumbItems} />
        </motion.div>
        
        <div className={`grid ${stats && stats.length > 0 ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
            {(primaryCTA || secondaryCTA) && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {primaryCTA && (
                  <Button size="lg" asChild className="hover-scale">
                    <Link to={primaryCTA.href}>
                      {primaryCTA.icon && <primaryCTA.icon className="w-5 h-5 mr-2" />}
                      {primaryCTA.label}
                    </Link>
                  </Button>
                )}
                {secondaryCTA && (
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-charcoal hover-scale" 
                    asChild
                  >
                    <Link to={secondaryCTA.href}>
                      {secondaryCTA.icon && <secondaryCTA.icon className="w-5 h-5 mr-2" />}
                      {secondaryCTA.label}
                    </Link>
                  </Button>
                )}
              </motion.div>
            )}
          </div>
          
          {stats && stats.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center"
                >
                  <div className="text-3xl md:text-4xl font-light text-white mb-1">
                    {stat.value}{stat.suffix && <span className="text-primary">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
