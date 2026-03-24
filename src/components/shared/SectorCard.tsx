import Link from "next/link";
import { Card } from "@/components/ui/card";

interface SectorCardProps {
  title: string;
  description: string;
  image: string | any;
  link?: string;
}

const SectorCard = ({
  title,
  description,
  image,
  link = "/sectors"
}: SectorCardProps) => {
  const imageUrl = typeof image === 'object' ? (image as any).src : image;

  return (
    <Link href={link}>
      <Card className="overflow-hidden hover-lift group cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-light relative inline-block pb-2">
              {title}
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            {description}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default SectorCard;
