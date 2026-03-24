"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

interface ClientLogo {
  id: string;
  name: string;
  logo_url: string;
  alt_text: string | null;
  display_order: number;
}

export const ClientLogosSection = () => {
  const { data: logos, isLoading } = useQuery({
    queryKey: ["client-logos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("client_logos")
        .select("id, name, logo_url, alt_text, display_order")
        .eq("active", true)
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data as ClientLogo[];
    },
  });

  // Fallback placeholder names if no logos uploaded yet
  const placeholders = ["Logistics Group", "Retail Chain", "Aviation Hub", "Property Fund", "Industrial Estate"];

  return (
    <motion.section
      className="py-12 bg-muted/30 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.p 
          className="text-center text-sm text-muted-foreground mb-8 font-light"
          variants={fadeInUp}
        >
          Trusted by operations teams across the UK
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index}
                className="w-24 h-12 bg-muted animate-pulse rounded"
              />
            ))
          ) : logos && logos.length > 0 ? (
            // Real logos from database
            logos.map((logo) => (
              <motion.div
                key={logo.id}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={logo.logo_url}
                  alt={logo.alt_text || `${logo.name} company logo`}
                  className="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[150px] object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))
          ) : (
            // Fallback text placeholders
            placeholders.map((client, index) => (
              <motion.div 
                key={client} 
                className="text-lg font-light text-muted-foreground opacity-50 hover:opacity-80 transition-opacity duration-300"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                {client}
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
