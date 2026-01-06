import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucideIcon, ArrowRight, Phone } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryIcon?: LucideIcon;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryIcon?: LucideIcon;
  variant?: "default" | "gradient" | "dark";
  className?: string;
}

const CTASection = ({
  title,
  description,
  primaryLabel = "Request Proposal",
  primaryHref = "/request-proposal",
  primaryIcon: PrimaryIcon = ArrowRight,
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  secondaryIcon: SecondaryIcon = Phone,
  variant = "default",
  className = "",
}: CTASectionProps) => {
  const getContainerStyles = () => {
    switch (variant) {
      case "gradient":
        return "py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background";
      case "dark":
        return "py-20 bg-charcoal text-white";
      default:
        return "py-20 bg-muted/30";
    }
  };

  return (
    <section className={`${getContainerStyles()} ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-light mb-6 ${variant === "dark" ? "text-white" : "text-foreground"}`}>
            {title}
          </h2>
          <p className={`text-lg font-light mb-8 ${variant === "dark" ? "text-gray-300" : "text-muted-foreground"}`}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="hover-lift">
              <Link to={primaryHref}>
                {primaryLabel}
                <PrimaryIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant={variant === "dark" ? "outline" : "secondary"} 
              asChild 
              className={`hover-lift ${variant === "dark" ? "bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal" : ""}`}
            >
              <Link to={secondaryHref}>
                <SecondaryIcon className="w-5 h-5 mr-2" />
                {secondaryLabel}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
