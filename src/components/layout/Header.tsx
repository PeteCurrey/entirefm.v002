import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { GlobalSearch } from "@/components/shared/GlobalSearch";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
const Header = ({
  className
}: {
  className?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const servicesItems = [{
    label: "Fire Safety & Life Protection",
    to: "/services/fire-safety",
    description: "Fire alarms, emergency lighting, sprinklers"
  }, {
    label: "Electrical Compliance",
    to: "/services/electrical-compliance",
    description: "EICR testing, BS 7671 compliance"
  }, {
    label: "Emergency Lighting",
    to: "/services/emergency-lighting",
    description: "BS 5266 testing and certification"
  }, {
    label: "Water Hygiene & Legionella",
    to: "/services/water-hygiene",
    description: "ACOP L8 compliance and testing"
  }, {
    label: "Gas Safety",
    to: "/services/gas-safety",
    description: "Gas Safe registered engineers"
  }, {
    label: "HVAC & F-Gas",
    to: "/services/hvac-compliance",
    description: "TM44, F-Gas, air conditioning"
  }, {
    label: "PPM & Asset Lifecycle",
    to: "/services/ppm-compliance",
    description: "Planned preventative maintenance"
  }];
  const sectorsItems = [{
    label: "Corporate Offices",
    to: "/sectors/offices"
  }, {
    label: "Retail & Hospitality",
    to: "/sectors/retail-hospitality"
  }, {
    label: "Industrial & Logistics",
    to: "/sectors/industrial-logistics"
  }, {
    label: "Healthcare & Public Buildings",
    to: "/sectors/healthcare-public"
  }, {
    label: "Hotels & Leisure",
    to: "/sectors/hotels-leisure"
  }, {
    label: "PBSA & Student Housing",
    to: "/sectors/pbsa"
  }, {
    label: "Universities & Education",
    to: "/sectors/education"
  }];
  const locationsItems = [{
    label: "London",
    to: "/locations/london"
  }, {
    label: "Birmingham",
    to: "/locations/birmingham"
  }, {
    label: "Manchester",
    to: "/locations/manchester"
  }, {
    label: "Leeds",
    to: "/locations/leeds"
  }, {
    label: "Sheffield",
    to: "/locations/sheffield"
  }, {
    label: "Liverpool",
    to: "/locations/liverpool"
  }, {
    label: "Leicester",
    to: "/locations/leicester"
  }];
  const aboutItems = [{
    label: "Our Story",
    to: "/about"
  }, {
    label: "Leadership",
    to: "/leadership"
  }, {
    label: "Social Value",
    to: "/social-value"
  }, {
    label: "ESG & Sustainability",
    to: "/esg"
  }, {
    label: "Health & Safety",
    to: "/health-safety"
  }];
  const resourcesItems = [{
    label: "FM Insights",
    to: "/fm-insights"
  }, {
    label: "Case Studies",
    to: "/case-studies"
  }, {
    label: "About",
    to: "/about"
  }, {
    label: "Contact",
    to: "/contact"
  }, {
    label: "Locations",
    to: "/locations"
  }, {
    label: "Request Proposal",
    to: "/request-proposal"
  }, {
    label: "PPM Calculator",
    to: "/tools/ppm-calculator"
  }, {
    label: "Cost Savings Calculator",
    to: "/tools/cost-savings-calculator"
  }, {
    label: "SLA Benchmark",
    to: "/tools/sla-benchmark"
  }, {
    label: "Risk Diagnostic",
    to: "/tools/risk-diagnostic"
  }];
  const mobileNavItems = [...servicesItems, ...sectorsItems, ...locationsItems, {
    label: "Case Studies",
    to: "/case-studies"
  }, ...resourcesItems, ...aboutItems, {
    label: "Contact",
    to: "/contact"
  }];
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent", className)}>
      <div className="container mx-auto px-6 pr-[10px] pl-[10px]">
        <div className="h-20 gap-0 flex-row mx-0 my-[5px] flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="EntireFM Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <GlobalSearch />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem className="text-sm">
                <NavigationMenuTrigger className="text-sm font-light h-10">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div className="w-[500px] p-4" initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}>
                    <div className="grid gap-2 mb-3">
                      {servicesItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
                          <motion.div initial={{
                        opacity: 0,
                        x: -10
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} transition={{
                        delay: index * 0.03,
                        duration: 0.2
                      }}>
                            <Link to={item.to} className="flex items-center justify-between group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                              <div className="flex-1">
                                <div className="text-sm font-medium leading-none mb-1">{item.label}</div>
                                {item.description && <div className="text-xs text-muted-foreground">{item.description}</div>}
                              </div>
                              <motion.div initial={{
                            x: -5,
                            opacity: 0
                          }} whileHover={{
                            x: 0,
                            opacity: 1
                          }} transition={{
                            duration: 0.2
                          }}>
                                <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        </NavigationMenuLink>)}
                    </div>
                    <div className="border-t pt-3">
                      <NavigationMenuLink asChild>
                        <Link to="/services" className="flex items-center justify-between group rounded-md p-3 text-sm font-medium hover:bg-accent transition-all duration-200 hover:scale-[1.02]">
                          View All Services
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light h-10">Sectors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div className="grid w-[300px] gap-2 p-4" initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}>
                    {sectorsItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
                        <motion.div initial={{
                      opacity: 0,
                      x: -10
                    }} animate={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: index * 0.03,
                      duration: 0.2
                    }}>
                          <Link to={item.to} className="flex items-center justify-between group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                            <div className="text-sm font-medium">{item.label}</div>
                            <motion.div initial={{
                          x: -5,
                          opacity: 0
                        }} whileHover={{
                          x: 0,
                          opacity: 1
                        }} transition={{
                          duration: 0.2
                        }}>
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      </NavigationMenuLink>)}
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light h-10">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div className="grid w-[300px] gap-2 p-4" initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} exit={{
                  opacity: 0,
                  y: -10
                }} transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}>
                    {resourcesItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
                        <motion.div initial={{
                      opacity: 0,
                      x: -10
                    }} animate={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: index * 0.03,
                      duration: 0.2
                    }}>
                          <Link to={item.to} className="flex items-center justify-between group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] font-extralight">
                            <div className="text-sm font-medium">{item.label}</div>
                            <motion.div initial={{
                          x: -5,
                          opacity: 0
                        }} whileHover={{
                          x: 0,
                          opacity: 1
                        }} transition={{
                          duration: 0.2
                        }}>
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      </NavigationMenuLink>)}
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div className="lg:hidden absolute left-0 right-0 top-full bg-background/98 backdrop-blur-md shadow-lg border-t border-border" initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}>
              <nav className="flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto bg-background opacity-95">
                {/* Services Section */}
                <div className="border-b border-border">
                  <button className="w-full text-left px-6 py-3 font-medium text-sm flex items-center justify-between hover:bg-accent transition-colors" onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}>
                    Services
                    <ArrowRight className={cn("w-4 h-4 transition-transform", openDropdown === 'services' && "rotate-90")} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === 'services' && <motion.div className="bg-muted/50" initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.2
                }}>
                        {servicesItems.map(item => <Link key={item.to} to={item.to} className="block px-8 py-2 text-sm font-light hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.label}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Sectors Section */}
                <div className="border-b border-border">
                  <button className="w-full text-left px-6 py-3 font-medium text-sm flex items-center justify-between hover:bg-accent transition-colors" onClick={() => setOpenDropdown(openDropdown === 'sectors' ? null : 'sectors')}>
                    Sectors
                    <ArrowRight className={cn("w-4 h-4 transition-transform", openDropdown === 'sectors' && "rotate-90")} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === 'sectors' && <motion.div className="bg-muted/50" initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.2
                }}>
                        {sectorsItems.map(item => <Link key={item.to} to={item.to} className="block px-8 py-2 text-sm font-light hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.label}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Resources Section */}
                <div className="border-b border-border">
                  <button className="w-full text-left px-6 py-3 font-medium text-sm flex items-center justify-between hover:bg-accent transition-colors" onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}>
                    Resources
                    <ArrowRight className={cn("w-4 h-4 transition-transform", openDropdown === 'resources' && "rotate-90")} />
                  </button>
                  <AnimatePresence>
                    {openDropdown === 'resources' && <motion.div className="bg-muted/50" initial={{
                  height: 0,
                  opacity: 0
                }} animate={{
                  height: "auto",
                  opacity: 1
                }} exit={{
                  height: 0,
                  opacity: 0
                }} transition={{
                  duration: 0.2
                }}>
                        {resourcesItems.map(item => <Link key={item.to} to={item.to} className="block px-8 py-2 text-sm font-light hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.label}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Quick Links */}
                <div className="px-6 py-4 space-y-2">
                  <Link to="/case-studies" className="block py-2 text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Case Studies
                  </Link>
                  <Link to="/about" className="block py-2 text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link to="/contact" className="block py-2 text-sm font-light hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </div>

                {/* CTA */}
                <div className="p-6 bg-muted/30">
                  <Button className="w-full" asChild>
                    <Link to="/request-proposal" onClick={() => setIsMobileMenuOpen(false)}>
                      Request Proposal
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
};
export default Header;