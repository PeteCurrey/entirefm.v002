import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
interface SectorCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}
const SectorCard = ({
  title,
  description,
  image,
  link = "/sectors"
}: SectorCardProps) => {
  return <Link to={link}>
      <Card className="overflow-hidden hover-lift group cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-light underline-accent pb-[2px]">
            {title}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </Link>;
};
export default SectorCard;