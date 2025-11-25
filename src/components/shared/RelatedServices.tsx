import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  link: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

export const RelatedServices = ({ services, title = "Related Services" }: RelatedServicesProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-light mb-6 underline-accent inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <Link 
            key={index}
            to={service.link} 
            className="group p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all duration-300 hover-lift border border-transparent hover:border-primary/20"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
