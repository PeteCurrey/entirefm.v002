import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Zap, Battery, Cog, Activity, Server, TrendingUp, Scan, Database, Calculator, PoundSterling, Target, Thermometer, Droplets, ShieldAlert, FileText, Flame, Droplet, Calendar, ClipboardCheck, Lightbulb, BookOpen, Building2, Info, Mail, MapPin, Monitor, Siren, Cable, BatteryCharging, Shield, Wrench, Building, ShoppingBag, Factory, HeartPulse, Hotel, GraduationCap, Home, Hammer, Phone, Search as SearchIcon, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { EnhancedGlobalSearch } from "@/components/shared/EnhancedGlobalSearch";
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
    description: "Fire alarms, emergency lighting, sprinklers",
    icon: Siren
  }, {
    label: "Electrical Compliance",
    to: "/services/electrical-compliance",
    description: "EICR testing, BS 7671 compliance",
    icon: Cable
  }, {
    label: "Emergency Lighting",
    to: "/services/emergency-lighting",
    description: "BS 5266 testing and certification",
    icon: Lightbulb
  }, {
    label: "Water Hygiene & Legionella",
    to: "/services/water-hygiene",
    description: "ACOP L8 compliance and testing",
    icon: Droplets
  }, {
    label: "Gas Safety",
    to: "/services/gas-safety",
    description: "Gas Safe registered engineers",
    icon: Flame
  }, {
    label: "HVAC & F-Gas",
    to: "/services/hvac-compliance",
    description: "TM44, F-Gas, air conditioning",
    icon: Thermometer
  }, {
    label: "PPM & Asset Lifecycle",
    to: "/services/ppm-compliance",
    description: "Planned preventative maintenance",
    icon: Wrench
  }];

  const criticalInfrastructureItems = [{
    label: "Lightning Protection",
    to: "/services/critical/lightning-protection",
    icon: Zap
  }, {
    label: "UPS Maintenance",
    to: "/services/critical/ups-maintenance",
    icon: Battery
  }, {
    label: "Generator Maintenance",
    to: "/services/critical/generator-maintenance",
    icon: Cog
  }, {
    label: "Arc Flash Assessment",
    to: "/services/critical/arc-flash-assessment",
    icon: Activity
  }, {
    label: "HV Switching",
    to: "/services/critical/hv-switching",
    icon: Zap
  }, {
    label: "Power Redundancy",
    to: "/services/critical/power-redundancy",
    icon: TrendingUp
  }, {
    label: "Power Quality",
    to: "/services/critical/power-quality",
    icon: Activity
  }, {
    label: "Thermal Imaging",
    to: "/services/critical/thermal-imaging",
    icon: Scan
  }, {
    label: "Data Room Audits",
    to: "/services/critical/data-room-audits",
    icon: Server
  }];
  const reactiveItems = [{
    label: "Building Fabric Repairs",
    to: "/services/building-fabric",
    icon: HardHat
  }, {
    label: "Commercial Plumbing",
    to: "/services/commercial-plumbing",
    icon: Droplet
  }, {
    label: "Leak Detection & Repair",
    to: "/services/leak-detection-repair",
    icon: SearchIcon
  }, {
    label: "Electrical Defects",
    to: "/services/electrical-defects",
    icon: Zap
  }, {
    label: "General Maintenance",
    to: "/services/general-maintenance",
    icon: Hammer
  }, {
    label: "Emergency Response",
    to: "/services/emergency-response",
    icon: Siren
  }, {
    label: "Out of Hours Support",
    to: "/services/out-of-hours-support",
    icon: Phone
  }];
  const sectorsItems = [{
    label: "Corporate Offices",
    to: "/sectors/offices",
    icon: Building
  }, {
    label: "Retail & Hospitality",
    to: "/sectors/retail-hospitality",
    icon: ShoppingBag
  }, {
    label: "Industrial & Logistics",
    to: "/sectors/industrial-logistics",
    icon: Factory
  }, {
    label: "Healthcare & Public Buildings",
    to: "/sectors/healthcare-public",
    icon: HeartPulse
  }, {
    label: "Hotels & Leisure",
    to: "/sectors/hotels-leisure",
    icon: Hotel
  }, {
    label: "PBSA & Student Housing",
    to: "/sectors/pbsa",
    icon: Home
  }, {
    label: "Universities & Education",
    to: "/sectors/education",
    icon: GraduationCap
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
    label: "Why EntireFM",
    to: "/why-entirefm"
  }, {
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
  const toolsItems = [{
    label: "PPM Calculator",
    to: "/tools/ppm-calculator",
    description: "Calculate PPM ROI & risk exposure",
    icon: Calculator
  }, {
    label: "Cost Savings Calculator",
    to: "/tools/cost-savings-calculator",
    description: "Estimate savings from improved FM",
    icon: PoundSterling
  }, {
    label: "SLA Benchmark",
    to: "/tools/sla-benchmark",
    description: "Compare your SLA performance",
    icon: Target
  }, {
    label: "TM44 Checker",
    to: "/tools/tm44-checker",
    description: "AC inspection compliance checker",
    icon: Thermometer
  }, {
    label: "Water Risk Grader",
    to: "/tools/water-risk-grader",
    description: "Assess your L8 compliance risk",
    icon: Droplets
  }, {
    label: "Risk Diagnostic",
    to: "/tools/risk-diagnostic",
    description: "Identify compliance gaps",
    icon: ShieldAlert
  }];

  const guidesItems = [{
    label: "Fire Risk Guide",
    to: "/resources/fire-risk-guide",
    icon: Flame
  }, {
    label: "EICR Manual",
    to: "/resources/eicr-manual",
    icon: FileText
  }, {
    label: "Legionella Guide",
    to: "/resources/legionella-guide",
    icon: Droplet
  }, {
    label: "Compliance Calendar",
    to: "/resources/compliance-calendar",
    icon: Calendar
  }, {
    label: "Audit Framework",
    to: "/resources/audit-framework",
    icon: ClipboardCheck
  }, {
    label: "Emergency Lighting Checklist",
    to: "/resources/emergency-lighting-checklist",
    icon: Lightbulb
  }];

  const knowledgeItems = [{
    label: "FM Insights",
    to: "/fm-insights",
    icon: BookOpen
  }, {
    label: "Case Studies",
    to: "/case-studies",
    icon: Building2
  }, {
    label: "About EntireFM",
    to: "/about",
    icon: Info
  }, {
    label: "Contact",
    to: "/contact",
    icon: Mail
  }, {
    label: "Locations",
    to: "/locations",
    icon: MapPin
  }];
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent", className)}>
      <div className="container mx-auto px-6 pr-[10px] pl-[10px]">
        <div className="h-20 gap-0 flex-row mx-0 my-[5px] flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 mx-[5px] pl-[8px]">
            <img src={logo} alt="EntireFM Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <EnhancedGlobalSearch />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem className="text-sm text-gray-500">
                <NavigationMenuTrigger className="text-sm font-light h-10">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div className="w-[900px] p-4" initial={{
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
                    <div className="grid grid-cols-3 gap-4">
                      {/* Core Services Column */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">Core Services</h4>
                        <div className="grid gap-2">
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
                                <Link to={item.to} className="flex items-center gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
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
                      </div>

                      {/* Reactive & Day-to-Day Column */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">Reactive & Day-to-Day</h4>
                        <div className="grid gap-2">
                          {reactiveItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
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
                                <Link to={item.to} className="flex items-center gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium leading-none">{item.label}</div>
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
                      </div>

                      {/* Critical Infrastructure Column */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">Critical Infrastructure</h4>
                        <div className="grid gap-2">
                          {criticalInfrastructureItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
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
                                <Link to={item.to} className="flex items-center gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium leading-none">{item.label}</div>
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
                      </div>
                    </div>

                    <div className="border-t pt-3 mt-3">
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
                          <Link to={item.to} className="flex items-center gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                            <div className="text-sm font-medium flex-1">{item.label}</div>
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
                  <motion.div className="w-[800px] p-4" initial={{
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
                    <div className="grid grid-cols-3 gap-4">
                      {/* Interactive Tools Column */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">Interactive Tools</h4>
                        <div className="grid gap-2">
                          {toolsItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
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
                                <Link to={item.to} className="flex items-start gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium leading-none mb-1">{item.label}</div>
                                    <div className="text-xs text-muted-foreground">{item.description}</div>
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
                                    <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                  </motion.div>
                                </Link>
                              </motion.div>
                            </NavigationMenuLink>)}
                        </div>
                      </div>

                      {/* Guides & Compliance Column */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">Guides & Compliance</h4>
                        <div className="grid gap-2">
                          {guidesItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
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
                                <Link to={item.to} className="flex items-center gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium leading-none">{item.label}</div>
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
                      </div>

                      {/* Knowledge & Company Column */}
                      <div>
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-3">Knowledge & Company</h4>
                        <div className="grid gap-2">
                          {knowledgeItems.map((item, index) => <NavigationMenuLink key={item.to} asChild>
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
                                <Link to={item.to} className="flex items-center gap-2 group rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]">
                                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                                  <div className="flex-1">
                                    <div className="text-sm font-medium leading-none">{item.label}</div>
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
                      </div>
                    </div>

                    <div className="border-t pt-3 mt-3 flex items-center justify-between gap-4">
                      <NavigationMenuLink asChild>
                        <a href="https://portal.entirefm.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group rounded-md p-3 text-sm font-medium bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/20 hover:border-primary/40 hover:from-primary/20 hover:to-primary/10 transition-all duration-200 hover:scale-[1.02] text-primary">
                          <Monitor className="w-4 h-4" />
                          EntireFM CAFM Portal
                          <span className="ml-1 inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/resources" className="flex items-center justify-between group rounded-md p-3 text-sm font-medium hover:bg-accent transition-all duration-200 hover:scale-[1.02]">
                          View All Resources
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 -mr-2 rounded-md hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <nav className="flex flex-col max-h-[calc(100vh-5rem)] overflow-y-auto bg-background">
                {/* Mobile Search */}
                <div className="px-4 py-3 border-b border-border">
                  <EnhancedGlobalSearch />
                </div>
                
                {/* Services Section */}
                <div className="border-b border-border">
                  <button className="w-full text-left px-6 py-4 font-medium text-sm flex items-center justify-between hover:bg-accent transition-colors active:bg-accent/80" onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}>
                    Services
                    <ArrowRight className={cn("w-4 h-4 transition-transform duration-200", openDropdown === 'services' && "rotate-90")} />
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
                        {servicesItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-3 text-sm font-light hover:bg-accent active:bg-accent/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                            {item.label}
                          </Link>)}
                        <div className="px-8 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Reactive & Day-to-Day</div>
                        {reactiveItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-3 text-sm font-light hover:bg-accent active:bg-accent/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                            {item.label}
                          </Link>)}
                        <div className="px-8 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Critical Infrastructure</div>
                        {criticalInfrastructureItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-3 text-sm font-light hover:bg-accent active:bg-accent/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                            {item.label}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Sectors Section */}
                <div className="border-b border-border">
                  <button className="w-full text-left px-6 py-4 font-medium text-sm flex items-center justify-between hover:bg-accent active:bg-accent/80 transition-colors" onClick={() => setOpenDropdown(openDropdown === 'sectors' ? null : 'sectors')}>
                    Sectors
                    <ArrowRight className={cn("w-4 h-4 transition-transform duration-200", openDropdown === 'sectors' && "rotate-90")} />
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
                        {sectorsItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-3 text-sm font-light hover:bg-accent active:bg-accent/80 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                            {item.label}
                          </Link>)}
                      </motion.div>}
                  </AnimatePresence>
                </div>

                {/* Resources Section */}
                <div className="border-b border-border">
                  <button className="w-full text-left px-6 py-4 font-medium text-sm flex items-center justify-between hover:bg-accent active:bg-accent/80 transition-colors" onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}>
                    Resources
                    <ArrowRight className={cn("w-4 h-4 transition-transform duration-200", openDropdown === 'resources' && "rotate-90")} />
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
                        <div className="px-8 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Interactive Tools</div>
                        {toolsItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-2 text-sm font-light hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-3 h-3 text-primary" />
                            {item.label}
                          </Link>)}
                        <div className="px-8 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Guides & Compliance</div>
                        {guidesItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-2 text-sm font-light hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-3 h-3 text-primary" />
                            {item.label}
                          </Link>)}
                        <div className="px-8 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">Knowledge & Company</div>
                        {knowledgeItems.map(item => <Link key={item.to} to={item.to} className="flex items-center gap-2 px-8 py-2 text-sm font-light hover:bg-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            <item.icon className="w-3 h-3 text-primary" />
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