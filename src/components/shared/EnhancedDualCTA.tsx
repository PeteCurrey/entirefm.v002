import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface EnhancedDualCTAProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryUrl?: string;
  secondaryText?: string;
  secondaryUrl?: string;
}

export const EnhancedDualCTA = ({
  title = "Ready to Get Started?",
  description = "Speak to our FM experts about your compliance, maintenance, and operational requirements.",
  primaryText = "Request a Proposal",
  primaryUrl = "/request-proposal",
  secondaryText = "Speak to Our FM Team",
  secondaryUrl = "/fm-operations/helpdesk"
}: EnhancedDualCTAProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-background"
    >
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 text-center border-2">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryUrl}>
              <Button size="lg" className="hover-lift w-full sm:w-auto">
                {primaryText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={secondaryUrl}>
              <Button size="lg" variant="outline" className="hover-lift w-full sm:w-auto">
                <MessageSquare className="mr-2 w-5 h-5" />
                {secondaryText}
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};
