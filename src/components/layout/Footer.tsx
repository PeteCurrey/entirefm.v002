"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { cn } from "@/lib/utils";

const ButterflyLogo = ({ className }: { className?: string }) => (
  <div className={cn("relative w-16 h-16 flex items-center justify-center", className)}>
    <img src="/logo.png" alt="EntireFM Logo" className="w-full h-full object-contain" />
  </div>
);

export const Footer = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-[#0a0a0b] text-white border-t border-white/5 font-inter">
      {/* Premium CTA Strip */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#1A1C23" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerDots)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-charcoal">Ready to Elevate Your FM?</h3>
              <p className="text-xl text-charcoal/80 font-medium">Speak to our specialists about your building's requirements.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg" className="bg-charcoal hover:bg-black text-white px-10 h-16 rounded-none border-none uppercase tracking-widest font-black text-xs shadow-2xl transition-colors">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white px-10 h-16 rounded-none uppercase tracking-widest font-black text-xs transition-colors">
                <Link href="/contact">Talk to the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand Info */}
            <div className="space-y-10">
              <Link href="/" className="flex items-center group mb-4">
                <ButterflyLogo />
              </Link>
              <p className="text-gray-400 font-light leading-relaxed max-w-xs">
                Nationwide facilities management specialists delivering technical excellence, 
                statutory compliance, and integrated service solutions since 2009.
              </p>
              <div className="flex gap-4">
                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10">FM Solutions</h4>
              <ul className="space-y-4">
                {[
                  { label: "Hard FM Services", to: "/services/hard-fm-services" },
                  { label: "Soft FM Services", to: "/services/soft-fm-services" },
                  { label: "PPM Maintenance", to: "/services/ppm-compliance" },
                  { label: "Compliance Audits", to: "/tools/compliance-checker" },
                  { label: "Sector FM", to: "/sectors" },
                  { label: "Contractor Marketplace", to: "/marketplace" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.to} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hubs & Resources */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10">Intelligence & Learning</h4>
              <ul className="space-y-4">
                {[
                  { label: "FM Intelligence Hub", to: "/fm-intelligence" },
                  { label: "EntireFM Academy", to: "/academy" },
                  { label: "Document Vault", to: "/resources/document-vault" },
                  { label: "Building Walk Series", to: "/building-walk" },
                  { label: "Market Report 2025", to: "/fm-market-report" },
                  { label: "Partner Network", to: "/partners" },
                  { label: "About EntireFM", to: "/about" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.to} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10">FM Tools</h4>
              <ul className="space-y-4">
                {[
                  { label: "Health Check Quiz", to: "/tools/fm-health-check" },
                  { label: "ROI/TCO Calculator", to: "/tools/fm-roi-calculator" },
                  { label: "PPM Schedule Builder", to: "/tools/ppm-schedule-builder" },
                  { label: "PPM Cost Estimator", to: "/tools/ppm-estimator" },
                  { label: "RFP/Tender Assistant", to: "/tools/tender-brief" },
                  { label: "Compliance Calendar", to: "/tools/compliance-calendar" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.to} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-10">Get in Touch</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    Nationwide Coverage <br />
                    Central Support Office <br />
                    United Kingdom
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-gray-400 font-medium tracking-tight">0800 000 0000</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm text-gray-400 font-medium tracking-tight">hello@entirefm.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            <p>&copy; {new Date().getFullYear()} EntireFM. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            <div className="flex items-center gap-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-white">Fully Accredited Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

