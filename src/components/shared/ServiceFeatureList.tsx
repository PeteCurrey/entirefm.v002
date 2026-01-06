import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceFeatureListProps {
  items: ServiceItem[];
  columns?: 1 | 2;
  className?: string;
  variant?: "default" | "cards" | "minimal";
}

const ServiceFeatureList = ({
  items,
  columns = 1,
  className,
  variant = "default",
}: ServiceFeatureListProps) => {
  const getGridCols = () => {
    return columns === 2 ? "md:grid-cols-2" : "grid-cols-1";
  };

  if (variant === "minimal") {
    return (
      <div className={cn(`grid ${getGridCols()} gap-4`, className)}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-foreground">{item.title}</span>
              <span className="text-muted-foreground font-light"> — {item.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={cn(`grid ${getGridCols()} gap-6`, className)}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
          >
            <h3 className="text-lg font-medium mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <h3 className="text-xl font-medium mb-3 text-foreground">{item.title}</h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceFeatureList;
