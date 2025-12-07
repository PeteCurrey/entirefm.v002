import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  link?: string;
}
const ServiceCard = ({
  title,
  description,
  items,
  link = "/services"
}: ServiceCardProps) => {
  return <Card className="p-6 hover-lift group cursor-pointer opacity-65 shadow-md rounded-sm">
      <h3 className="text-xl font-light mb-3 underline-accent">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 font-light leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {items.map((item, index) => <li key={index} className="text-sm text-foreground font-light flex items-start">
            <span className="text-primary mr-2">•</span>
            {item}
          </li>)}
      </ul>
      <Link to={link} className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-300">
        Explore service
        <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </Card>;
};
export default ServiceCard;