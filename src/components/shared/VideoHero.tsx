"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoHeroProps {
  videoSrc: string;
  posterImage: string;
  children: ReactNode;
}

export const VideoHero = ({ videoSrc, posterImage, children }: VideoHeroProps) => {
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const shouldShowVideo = !isMobile && !prefersReducedMotion;

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (Desktop) or Image (Mobile) with Parallax */}
      {shouldShowVideo ? (
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            y: prefersReducedMotion ? 0 : y, 
            opacity,
            filter: prefersReducedMotion ? 'none' : blur.get() !== undefined ? `blur(${blur.get()}px)` : 'none'
          } as any}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      ) : (
        <motion.div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${posterImage})`,
            y: prefersReducedMotion ? 0 : y,
            opacity,
            filter: prefersReducedMotion ? 'none' : blur.get() !== undefined ? `blur(${blur.get()}px)` : 'none'
          } as any}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-white/80 transition-colors"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
