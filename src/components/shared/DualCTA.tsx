import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Phone } from 'lucide-react';

interface DualCTAProps {
  variant?: 'default' | 'compact';
  className?: string;
}

export const DualCTA = ({ variant = 'default', className = '' }: DualCTAProps) => {
  if (variant === 'compact') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <Button asChild size="lg" className="flex-1">
          <Link to="/request-proposal">
            <FileText className="mr-2 h-5 w-5" />
            Request a Proposal
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link to="/fm-operations/helpdesk">
            <Phone className="mr-2 h-5 w-5" />
            Contact FM Team
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className={`bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to Get Started?</h2>
      <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
        Request a tailored proposal or speak directly with our facilities management team.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link to="/request-proposal">
            <FileText className="mr-2 h-5 w-5" />
            Request a Proposal
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/fm-operations/helpdesk">
            <Phone className="mr-2 h-5 w-5" />
            Contact FM Team
          </Link>
        </Button>
      </div>
    </section>
  );
};
