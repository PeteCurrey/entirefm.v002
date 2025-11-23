import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="text-2xl font-light mb-4">
              <span>Entire</span>
              <span className="text-primary">FM</span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Total facilities management excellence delivered nationwide. Compliance, performance, and partnership you can trust.
            </p>
          </div>

          {/* Column 2: Compliance & Risk */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Compliance & Risk</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/health-safety" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  H&S Governance
                </Link>
              </li>
              <li>
                <Link to="/services/water-hygiene" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Water Hygiene
                </Link>
              </li>
              <li>
                <Link to="/services/fire-alarms" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Fire & Life Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Commercial</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Tender Support
                </Link>
              </li>
              <li>
                <Link to="/services/ppm-compliance" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  SLA Guarantees
                </Link>
              </li>
              <li>
                <Link to="/why-switch" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Mobilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Tools & Insight */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Tools & Insight</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/fm-insights" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  FM Insights
                </Link>
              </li>
              <li>
                <Link to="/tools/cost-savings" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Who We Are + Contact */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Who We Are</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Story & Purpose
                </Link>
              </li>
              <li>
                <Link to="/social-value" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Social Value
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-400 font-light mb-2">24/7 Helpdesk</p>
              <a href="tel:08001234567" className="text-sm text-gray-400 hover:text-primary transition-colors font-light block mb-1">
                0800 123 4567
              </a>
              <a href="mailto:hello@entirefm.co.uk" className="text-sm text-gray-400 hover:text-primary transition-colors font-light block">
                hello@entirefm.co.uk
              </a>
              <div className="mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  aria-label="Follow EntireFM on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Follow us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500 font-light">
              EntireFM is a trading name of Alkota Group Limited. Company No. 12345678
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-primary transition-colors font-light">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-primary transition-colors font-light">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
