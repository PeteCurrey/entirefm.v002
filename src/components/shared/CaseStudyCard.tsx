import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  sector: string;
  title: string;
  metrics: string[];
  slug?: string;
  image?: string;
}

const CaseStudyCard = ({ sector, title, metrics, slug = "/case-studies", image }: CaseStudyCardProps) => {
  return (
    <Card className="relative p-6 bg-white/10 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-500 group cursor-pointer h-full flex flex-col overflow-hidden">
      {/* Background image */}
      {image && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/70 group-hover:from-charcoal group-hover:via-charcoal/90 group-hover:to-charcoal/60 transition-all duration-500" />
        </>
      )}
      
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
      
      <div className="relative z-10">
        <Badge 
          variant="secondary" 
          className="w-fit mb-4 font-light bg-primary/20 text-primary border-primary/30 backdrop-blur-sm"
        >
          {sector}
        </Badge>
        
        <h3 className="text-lg font-light mb-5 leading-snug text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <ul className="space-y-3 mb-6 flex-grow">
          {metrics.map((metric, index) => (
            <motion.li 
              key={index} 
              className="text-sm text-gray-300 font-light flex items-start gap-3"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1, x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{metric}</span>
            </motion.li>
          ))}
        </ul>
        
        <Link
          to={slug}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-white transition-colors duration-300 group/link"
        >
          <span className="relative">
            Read case study
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover/link:w-full transition-all duration-300" />
          </span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
