import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t border-border">
      {/* CTA Bar */}
      <div className="bg-primary/5 border-b border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-light mb-4">Ready to Elevate Your Facilities Management?</h3>
          <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
            Speak to our FM experts about your compliance, maintenance, and operational requirements
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/request-proposal">
              <Button size="lg" className="hover-lift">
                Request a Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/fm-operations/report-issue">
              <Button size="lg" variant="default" className="hover-lift">
                Report an Issue
              </Button>
            </Link>
            <Link to="/fm-operations/helpdesk">
              <Button size="lg" variant="outline" className="hover-lift">
                Speak to Our FM Team
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Key Services */}
            <div>
              <h3 className="font-medium mb-6 text-lg">Key Services</h3>
              <ul className="space-y-3">
                <li><Link to="/services/fire-safety" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Fire Safety</Link></li>
                <li><Link to="/services/electrical-compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Electrical Compliance</Link></li>
                <li><Link to="/services/hvac-compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">HVAC</Link></li>
                <li><Link to="/services/gas-safety" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Gas Safety</Link></li>
                <li><Link to="/services/water-hygiene" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Water Hygiene</Link></li>
                <li><Link to="/services/ppm" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">PPM</Link></li>
                <li><Link to="/services/hard-services-fm" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Hard Services</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-6 text-lg">FM Operations</h3>
              <ul className="space-y-3">
                <li><Link to="/fm-operations/helpdesk" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Helpdesk</Link></li>
                <li><Link to="/fm-operations/report-issue" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Report an Issue</Link></li>
                <li><Link to="/fm-operations/mobilisation" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Mobilisation</Link></li>
                <li><Link to="/fm-operations/ppm-delivery" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">PPM Delivery</Link></li>
                <li><Link to="/fm-operations/reactive-maintenance" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Reactive Maintenance</Link></li>
                <li><Link to="/fm-operations/asset-lifecycle" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Asset Lifecycle</Link></li>
                <li><Link to="/fm-operations/business-continuity" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Business Continuity</Link></li>
              </ul>
            </div>

            {/* Sectors */}
            <div>
              <h3 className="font-medium mb-6 text-lg">Sectors</h3>
              <ul className="space-y-3">
                <li><Link to="/sectors/offices" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Offices</Link></li>
                <li><Link to="/sectors/retail-hospitality" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Retail & Hospitality</Link></li>
                <li><Link to="/sectors/industrial-logistics" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Industrial & Logistics</Link></li>
                <li><Link to="/sectors/healthcare-public" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Healthcare</Link></li>
                <li><Link to="/sectors/hotels-leisure" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Hotels & Leisure</Link></li>
                <li><Link to="/sectors/residential-pbsa" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">PBSA</Link></li>
                <li><Link to="/sectors/education" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Education</Link></li>
                <li><Link to="/sectors/airports" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Airports</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-medium mb-6 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Knowledge Centre</Link></li>
                <li><Link to="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Case Studies</Link></li>
                <li><Link to="/fm-insights" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">FM Insights</Link></li>
                <li><Link to="/compliance-diagnostic" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Compliance Diagnostic</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-medium mb-6 text-lg">Connect</h3>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Contact</Link></li>
                <li><Link to="/request-proposal" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Request a Proposal</Link></li>
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">About Us</Link></li>
                <li><Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Careers</Link></li>
                <li><Link to="/locations" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">Our Locations</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground font-light">
                &copy; {new Date().getFullYear()} EntireFM. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Fully Accredited
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  24/7 Support
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Nationwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
