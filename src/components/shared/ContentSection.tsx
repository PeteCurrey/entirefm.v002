import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "muted" | "gradient" | "bordered";
  centered?: boolean;
  id?: string;
}

const ContentSection = ({
  children,
  title,
  subtitle,
  className = "",
  variant = "default",
  centered = false,
  id,
}: ContentSectionProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "muted":
        return "bg-muted/30 py-16 md:py-24";
      case "gradient":
        return "bg-gradient-to-br from-muted/30 via-background to-muted/20 py-16 md:py-24";
      case "bordered":
        return "py-16 md:py-24 border-y border-border";
      default:
        return "py-16 md:py-24";
    }
  };

  return (
    <section id={id} className={cn(getVariantStyles(), className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={cn("mb-12", centered && "text-center max-w-3xl mx-auto")}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-foreground">
                <span className="underline-accent">{title}</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
