import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const KnowledgeCentreCTA = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg border border-primary/20">
      <div className="flex items-start gap-4">
        <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-2xl font-light mb-2">Compliance Knowledge Centre</h3>
          <p className="text-muted-foreground mb-4">
            Access expert guidance, checklists, and frameworks to strengthen your facilities management compliance.
          </p>
          <Button asChild variant="outline">
            <Link to="/resources" className="group">
              Explore Compliance Guidance
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
