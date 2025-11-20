import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="text-2xl font-light mb-4">
              <span>Entire</span>
              <span className="text-primary">FM</span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Owner-led, tech-driven facilities management for teams that demand excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Services", to: "/services" },
                { label: "Sectors", to: "/sectors" },
                { label: "Technology", to: "/technology" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "About", to: "/about" },
                { label: "Resources", to: "/resources" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-gray-400 hover:text-primary transition-colors font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Key Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 font-light">Hard Services & M&E</li>
              <li className="text-sm text-gray-400 font-light">Compliance & Life Safety</li>
              <li className="text-sm text-gray-400 font-light">Soft Services</li>
              <li className="text-sm text-gray-400 font-light">Projects & Small Works</li>
              <li className="text-sm text-gray-400 font-light">24/7 Emergency Response</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-medium mb-4 underline-accent">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-400 font-light">
                <a href="tel:08001234567" className="hover:text-primary transition-colors">
                  0800 123 4567
                </a>
              </li>
              <li className="text-sm text-gray-400 font-light">
                <a href="mailto:hello@entirefm.co.uk" className="hover:text-primary transition-colors">
                  hello@entirefm.co.uk
                </a>
              </li>
              <li className="text-sm text-gray-400 font-light mt-4">
                London Office<br />
                United Kingdom
              </li>
              <li className="mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Follow us</span>
                </a>
              </li>
            </ul>
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
