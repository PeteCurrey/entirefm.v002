import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { GlobalSearch } from "@/components/shared/GlobalSearch";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
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
        <div className="h-20 items-center justify-between gap-0 flex flex-row mx-0">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-light tracking-tight">
              <span className="text-3xl font-extralight text-gray-600 px-px">Entire</span>
              <span className="text-4xl font-extralight text-primary">FM</span>
            </div>
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
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button asChild size="sm" variant="default" className="h-10">
                    <Link to="/request-proposal" className="text-sm">Request Proposal</Link>
                  </Button>
                </motion.div>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button asChild size="sm" variant="outline" className="h-10">
                    <a href="mailto:hello@entirefm.com" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="hidden xl:inline">Emergency</span>
                      <Badge variant="destructive" className="ml-1 text-[10px] px-1.5 py-0 animate-pulse">24/7</Badge>
                    </a>
                  </Button>
                </motion.div>
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
          {isMobileMenuOpen && <motion.div className="lg:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto" initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}>
              <nav className="flex flex-col space-y-2">
                {mobileNavItems.map((item, index) => <motion.div key={item.to} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.03,
              duration: 0.2
            }}>
                    <Link to={item.to} className="text-sm font-light text-foreground hover:text-primary transition-colors py-2 px-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.div>)}
                <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.3
            }}>
                  <Button className="w-full mt-4" asChild>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Request Proposal
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
};
export default Header;