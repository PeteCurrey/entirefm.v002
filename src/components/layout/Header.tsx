"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Zap, Siren, Cable, Thermometer, Droplets, Flame, Wrench, HardHat, Droplet, Hammer, Phone, Building, Factory, ShoppingBag, Info, Mail, MapPin, Monitor, BookOpen, Building2, Calculator, PoundSterling, Target, ShieldAlert, FileText, Calendar, ClipboardCheck, Lightbulb, ChevronLeft, ChevronRight, Landmark, Briefcase, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { EnhancedGlobalSearch } from "@/components/shared/EnhancedGlobalSearch";
import { motion, AnimatePresence } from "framer-motion";

const ButterflyLogo = ({ className }: { className?: string }) => (
  <div className={cn("relative w-12 h-12 flex items-center justify-center", className)}>
    <img src="/logo.png" alt="EntireFM Logo" className="w-full h-full object-contain" />
  </div>
);

const Header = ({ className }: { className?: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const sectorsScrollRef = React.useRef<HTMLDivElement>(null);

  const scrollSectors = (direction: 'left' | 'right') => {
    if (sectorsScrollRef.current) {
      const scrollAmount = 400;
      sectorsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesItems = [
    { label: "Fire Safety", to: "/services/fire-safety", description: "Compliance & life protection", icon: Siren, image: "/images/service-fire.jpg" },
    { label: "Electrical", to: "/services/electrical-compliance", description: "EICR testing & remedial", icon: Cable, image: "/images/service-electrical.png" },
    { label: "Water Hygiene", to: "/services/water-hygiene", description: "Legionella & ACOP L8", icon: Droplets, image: "/images/service-water.jpg" },
    { label: "Gas Safety", to: "/services/gas-safety", description: "Gas Safe registered works", icon: Flame, image: "/images/service-gas.jpg" },
    { label: "HVAC", to: "/services/hvac-compliance", description: "Maintain air quality & temp", icon: Thermometer, image: "/images/service-hvac.jpg" },
    { label: "PPM Hub", to: "/services/ppm-compliance", description: "Life-cycle asset care", icon: Wrench, image: "/images/service-ppm.jpg" }
  ];

  const reactiveItems = [
    { label: "Building Fabric Repairs", to: "/services/building-fabric", icon: HardHat },
    { label: "Commercial Plumbing", to: "/services/commercial-plumbing", icon: Droplet },
    { label: "Electrical Defects", to: "/services/electrical-defects", icon: Zap },
    { label: "General Maintenance", to: "/services/general-maintenance", icon: Hammer },
    { label: "Emergency Response", to: "/services/emergency-response", icon: Siren }
  ];

  const sectorsItems = [
    { label: "Commercial Offices", to: "/sectors/offices", icon: Building, image: "/images/sector-offices.jpg" },
    { label: "Logistics Hubs", to: "/sectors/industrial-logistics", icon: Factory, image: "/images/sector-industrial.png" },
    { label: "Retail Parks", to: "/sectors/retail-hospitality", icon: ShoppingBag, image: "/images/sector-retail.jpg" },
    { label: "Aviation Sites", to: "/sectors/aviation", icon: Factory, image: "/images/sector-aviation.jpg" },
    { label: "Education", to: "/sectors/education", icon: BookOpen, image: "/images/sector-education.jpg" },
    { label: "Healthcare", to: "/sectors/healthcare", icon: ShieldAlert, image: "/images/sector-healthcare.jpg" },
    { label: "Hospitality & Leisure", to: "/sectors/hospitality", icon: Building2, image: "/images/sector-hospitality.jpg" },
    { label: "Residential & PBSA", to: "/sectors/residential", icon: Building, image: "/images/sector-residential.jpg" }
  ];

  const toolsItems = [
    { label: "FM Health Check", to: "/tools/fm-health-check", description: "Audit your building compliance in 2 mins", icon: ShieldAlert },
    { label: "TCO/ROI Calculator", to: "/tools/fm-roi-calculator", description: "Calculate total FM cost of ownership", icon: PoundSterling },
    { label: "PPM Schedule Builder", to: "/tools/ppm-schedule-builder", description: "Build an SFG20 aligned schedule", icon: Calendar },
    { label: "Compliance Checker", to: "/tools/compliance-checker", description: "AI-powered compliance risk audit", icon: ClipboardCheck },
    { label: "PPM Cost Estimator", to: "/tools/ppm-estimator", description: "Instant PPM pricing estimation", icon: Calculator },
    { label: "RFP/Tender Assistant", to: "/tools/tender-brief", description: "AI builder for tender documents", icon: FileText }
  ];

  const guidesItems = [
    { label: "Fire Risk Guide", to: "/resources/fire-risk-guide", icon: Flame },
    { label: "EICR Manual", to: "/resources/eicr-manual", icon: FileText },
    { label: "Legionella Guide", to: "/resources/legionella-guide", icon: Droplet },
    { label: "Compliance Calendar", to: "/resources/compliance-calendar", icon: Calendar },
    { label: "Audit Framework", to: "/resources/audit-framework", icon: ClipboardCheck },
    { label: "Emergency Lighting Checklist", to: "/resources/emergency-lighting-checklist", icon: Lightbulb }
  ];

  const knowledgeItems = [
    { label: "FM Intelligence Hub", to: "/fm-intelligence", icon: Target },
    { label: "EntireFM Academy", to: "/academy", icon: BookOpen },
    { label: "The Building Walk", to: "/building-walk", icon: Landmark },
    { label: "Market Report 2025", to: "/fm-market-report", icon: FileText },
    { label: "Contractor Marketplace", to: "/marketplace", icon: Briefcase },
    { label: "About EntireFM", to: "/about", icon: Info },
    { label: "Partner Network", to: "/partners", icon: Users }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-slate-950/95 backdrop-blur-lg border-b border-white/5 py-2 shadow-2xl" : "bg-transparent py-4",
      className
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center group">
            <ButterflyLogo />
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-sm">
            <EnhancedGlobalSearch />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg font-extralight text-white/70 hover:text-white hover:bg-white/5 h-12 px-2 transition-colors">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div 
                    className="w-[900px] bg-slate-950/95 backdrop-blur-3xl border border-white/10 p-6 shadow-2xl overflow-hidden rounded-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="grid grid-cols-12 gap-8">
                      {/* Featured Section */}
                      <div className="col-span-4 border-r border-white/10 pr-8">
                        <h4 className="text-[10px] font-medium text-primary uppercase tracking-[0.2em] mb-6">Hard FM & Compliance</h4>
                        <div className="space-y-4">
                          {servicesItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="flex items-start gap-4 group/item">
                              <div className="w-8 h-8 rounded-none border border-white/20 flex items-center justify-center bg-white/5 group-hover/item:bg-white/10 group-hover/item:border-primary/50 transition-all">
                                <item.icon className="w-4 h-4 text-white/80 group-hover/item:text-primary transition-colors" />
                              </div>
                              <div>
                                <p className="text-sm font-light text-white group-hover/item:text-primary transition-colors">{item.label}</p>
                                <p className="text-[11px] text-white/60 font-light">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Reactive Section */}
                      <div className="col-span-4 border-r border-white/10 pr-8">
                        <h4 className="text-[10px] font-medium text-primary uppercase tracking-[0.2em] mb-6">Reactive & 24/7</h4>
                        <div className="space-y-4">
                          {reactiveItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="flex items-center gap-4 group/item">
                              <item.icon className="w-4 h-4 text-white/60 group-hover/item:text-primary transition-colors" />
                              <span className="text-sm font-light text-white group-hover/item:text-white transition-colors">{item.label}</span>
                            </Link>
                          ))}
                          <div className="mt-8 pt-6 border-t border-white/10">
                            <Link href="/services" className="text-sm font-light text-primary hover:underline flex items-center gap-2">
                              View All FM Services <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Visual Feature Section */}
                      <div className="col-span-4 space-y-6">
                        <h4 className="text-[10px] font-medium text-white/60 uppercase tracking-[0.2em]">Key Sectors</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {sectorsItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="relative aspect-video overflow-hidden group/thumb border border-white/10 hover:border-primary/50 transition-colors">
                              <div className="absolute inset-0 bg-slate-950/60 z-10 group-hover/thumb:bg-slate-950/20 transition-colors duration-500" />
                              <div className="absolute inset-x-0 bottom-0 p-3 z-20">
                                <p className="text-[11px] font-medium text-white tracking-wide drop-shadow-md">{item.label}</p>
                              </div>
                              {item.image && <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-110" />}
                            </Link>
                          ))}
                        </div>
                        <div className="bg-primary/10 border border-primary/30 p-4 mt-4 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 pointer-events-none" />
                          <p className="text-[11px] text-white/90 font-light italic leading-relaxed relative z-10">
                            "EntireFM delivers proactive maintenance strategies that protect your assets and your bottom line."
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg font-extralight text-white/70 hover:text-white hover:bg-white/5 h-12 px-2 transition-colors">
                  Sectors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div 
                    className="w-[850px] bg-slate-950/95 backdrop-blur-3xl border border-white/10 p-6 shadow-2xl overflow-hidden rounded-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between items-end border-b border-white/10 pb-4">
                         <h4 className="text-[10px] font-medium text-primary uppercase tracking-[0.2em]">Industry Sectors</h4>
                         <Link href="/sectors" className="text-[11px] text-white/60 hover:text-white transition-colors flex items-center gap-1">View All <ArrowRight className="w-3 h-3" /></Link>
                      </div>
                      <div className="relative group/scroll">
                        <div 
                          ref={sectorsScrollRef}
                          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden" 
                          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                          {sectorsItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="group/sector shrink-0 w-[200px] relative aspect-square overflow-hidden bg-slate-900 border border-white/10 hover:border-primary/50 transition-all snap-start shadow-xl">
                              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 to-slate-950/20 group-hover/sector:from-slate-950/70 transition-all duration-500" />
                              {item.image && <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/sector:scale-110 group-hover/sector:opacity-90 transition-all duration-700" />}
                              <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                                <item.icon className="w-6 h-6 text-primary mb-3 opacity-90 group-hover/sector:scale-110 transition-transform duration-300" />
                                <span className="text-sm font-medium text-white group-hover/sector:text-primary transition-colors">{item.label}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Scroll Arrows */}
                        <button 
                          onClick={() => scrollSectors('left')}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 w-10 h-10 bg-slate-900/90 border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover/scroll:opacity-100 group-hover/scroll:translate-x-0 transition-all hover:bg-primary hover:border-primary"
                          aria-label="Scroll left"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => scrollSectors('right')}
                          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 w-10 h-10 bg-slate-900/90 border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover/scroll:opacity-100 group-hover/scroll:translate-x-0 transition-all hover:bg-primary hover:border-primary"
                          aria-label="Scroll right"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg font-extralight text-white/70 hover:text-white hover:bg-white/5 h-12 px-2 transition-colors">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div 
                    className="w-[950px] bg-slate-950/95 backdrop-blur-3xl border border-white/10 p-6 shadow-2xl overflow-hidden rounded-none flex"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex-1 grid grid-cols-3 gap-8 pr-8 border-r border-white/10">
                       {/* Interactive Tools */}
                       <div>
                        <h4 className="text-[10px] font-medium text-primary uppercase tracking-[0.2em] mb-6 px-3">Interactive Tools</h4>
                        <div className="space-y-1">
                          {toolsItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="flex items-start gap-3 p-3 hover:bg-white/10 group/item transition-colors">
                              <item.icon className="w-4 h-4 text-white/60 group-hover/item:text-primary transition-colors mt-0.5" />
                              <div>
                                <p className="text-sm font-light text-white group-hover/item:text-primary transition-colors">{item.label}</p>
                                <p className="text-[11px] text-white/60 font-light leading-tight">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Guides & Compliance */}
                      <div>
                        <h4 className="text-[10px] font-medium text-primary uppercase tracking-[0.2em] mb-6 px-3">Guides & Compliance</h4>
                        <div className="space-y-1">
                          {guidesItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="flex items-center gap-3 p-3 hover:bg-white/10 group/item transition-colors">
                              <item.icon className="w-4 h-4 text-white/60 group-hover/item:text-primary transition-colors" />
                              <span className="text-sm font-light text-white transition-colors">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Knowledge & Company */}
                      <div>
                        <h4 className="text-[10px] font-medium text-primary uppercase tracking-[0.2em] mb-6 px-3">Knowledge & Company</h4>
                        <div className="space-y-1">
                          {knowledgeItems.map((item, idx) => (
                            <Link key={idx} href={item.to} className="flex items-center gap-3 p-3 hover:bg-white/10 group/item transition-colors">
                              <item.icon className="w-4 h-4 text-white/60 group-hover/item:text-primary transition-colors" />
                              <span className="text-sm font-light text-white transition-colors">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-[280px] pl-8 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[10px] font-medium text-white/60 uppercase tracking-[0.2em] mb-6">Featured Insight</h4>
                        <Link href="/fm-insights/future-of-fm" className="block relative aspect-[4/3] overflow-hidden group/feat border border-white/10 mb-4 hover:border-primary/50 transition-colors">
                          <div className="absolute inset-0 z-10 bg-slate-950/20 group-hover/feat:bg-transparent transition-colors duration-500" />
                          <img src="/images/fm-insights-hero.jpg" alt="FM Insights" className="absolute inset-0 w-full h-full object-cover group-hover/feat:scale-110 transition-transform duration-700" />
                        </Link>
                        <h5 className="text-sm font-medium text-white mb-2 leading-tight hover:text-primary transition-colors cursor-pointer">The Future of Smart Facilities Management</h5>
                        <p className="text-[11px] text-white/60 font-light mb-4 leading-relaxed">Discover how IoT and AI are transforming building compliance and maintenance strategies.</p>
                      </div>
                      
                      <Link href="/resources" className="inline-flex text-[11px] font-medium text-primary hover:text-white transition-colors items-center gap-2 group/link uppercase tracking-wider w-fit">
                        Explore Hub <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-4 ml-auto">
            {/* Removed extra buttons to match live site */}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 -mr-2 rounded-none hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden absolute left-0 right-0 top-full bg-slate-950/98 backdrop-blur-md shadow-lg border-t border-white/5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <nav className="flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="px-6 py-4 border-b border-white/5">
                  <EnhancedGlobalSearch />
                </div>
                
                <div className="border-b border-white/5">
                  <button className="w-full text-left px-6 py-4 font-light text-sm flex items-center justify-between hover:bg-white/5 transition-colors" onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}>
                    Services
                    <ArrowRight className={cn("w-4 h-4 transition-transform duration-200", openDropdown === 'services' && "rotate-90")} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === 'services' && (
                      <motion.div className="bg-white/5" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        {servicesItems.map(item => (
                          <Link key={item.to} href={item.to} className="flex items-center gap-3 px-8 py-3 text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-4 h-4 text-primary" />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="px-6 py-4 space-y-4">
                  <Link href="/case-studies" className="block text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
                  <Link href="/about" className="block text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                  <Link href="/contact" className="block text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>

                <div className="p-6">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-none" asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Request Proposal</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;