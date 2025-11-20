import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  sector: string;
  title: string;
  metrics: string[];
  slug?: string;
}

const CaseStudyCard = ({ sector, title, metrics, slug = "/case-studies" }: CaseStudyCardProps) => {
  return (
    <Card className="p-6 hover-lift group cursor-pointer h-full flex flex-col">
      <Badge variant="secondary" className="w-fit mb-4 font-light">
        {sector}
      </Badge>
      <h3 className="text-lg font-light mb-4 leading-snug">{title}</h3>
      <ul className="space-y-2 mb-6 flex-grow">
        {metrics.map((metric, index) => (
          <li key={index} className="text-sm text-muted-foreground font-light flex items-start">
            <span className="text-primary mr-2">✓</span>
            {metric}
          </li>
        ))}
      </ul>
      <Link
        to={slug}
        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-300"
      >
        Read case study
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </Card>
  );
};

export default CaseStudyCard;
