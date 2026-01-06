import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "compact" | "gradient";
  className?: string;
}

const FeatureCardGrid = ({
  features,
  columns = 3,
  variant = "default",
  className,
}: FeatureCardGridProps) => {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "md:grid-cols-2";
      case 3:
        return "md:grid-cols-3";
      case 4:
        return "md:grid-cols-2 lg:grid-cols-4";
      default:
        return "md:grid-cols-3";
    }
  };

  const getCardStyles = () => {
    switch (variant) {
      case "compact":
        return "p-4 bg-muted/30 border border-border/50 rounded-lg";
      case "gradient":
        return "p-6 bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 rounded-xl shadow-sm";
      default:
        return "p-6 bg-card border border-border rounded-xl shadow-sm";
    }
  };

  return (
    <div className={cn(`grid grid-cols-1 ${getGridCols()} gap-6`, className)}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={cn(
            getCardStyles(),
            "hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          )}
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground">{feature.title}</h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCardGrid;
