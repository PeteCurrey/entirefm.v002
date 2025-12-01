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

  const shouldShowVideo = !isMobile && !prefersReducedMotion;

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (Desktop) or Image (Mobile) with Parallax */}
      {shouldShowVideo ? (
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: prefersReducedMotion ? 0 : y, opacity }}
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      ) : (
        <motion.div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${posterImage})`,
            y: prefersReducedMotion ? 0 : y,
            opacity
          }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
