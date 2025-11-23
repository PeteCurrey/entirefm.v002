import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { GlobalSearch } from "@/components/shared/GlobalSearch";
import { Badge } from "@/components/ui/badge";
const Header = ({ className }: { className?: string }) => {
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
  const servicesItems = [
    {
      label: "Fire Safety & Life Protection",
      to: "/services/fire-safety",
      description: "Fire alarms, emergency lighting, sprinklers"
    },
    {
      label: "Electrical Compliance",
      to: "/services/electrical-compliance",
      description: "EICR testing, BS 7671 compliance"
    },
    {
      label: "Emergency Lighting",
      to: "/services/emergency-lighting",
      description: "BS 5266 testing and certification"
    },
    {
      label: "Water Hygiene & Legionella",
      to: "/services/water-hygiene",
      description: "ACOP L8 compliance and testing"
    },
    {
      label: "Gas Safety",
      to: "/services/gas-safety",
      description: "Gas Safe registered engineers"
    },
    {
      label: "HVAC & F-Gas",
      to: "/services/hvac-compliance",
      description: "TM44, F-Gas, air conditioning"
    },
    {
      label: "PPM & Asset Lifecycle",
      to: "/services/ppm-compliance",
      description: "Planned preventative maintenance"
    }
  ];
  const sectorsItems = [
    { label: "Corporate Offices", to: "/sectors/offices" },
    { label: "Retail & Hospitality", to: "/sectors/retail-hospitality" },
    { label: "Industrial & Logistics", to: "/sectors/industrial-logistics" },
    { label: "Healthcare & Public Buildings", to: "/sectors/healthcare-public" },
    { label: "Hotels & Leisure", to: "/sectors/hotels-leisure" },
    { label: "PBSA & Student Housing", to: "/sectors/pbsa" },
    { label: "Universities & Education", to: "/sectors/education" }
  ];
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
  const resourcesItems = [
    { label: "All Resources", to: "/resources" },
    { label: "FM Insights", to: "/fm-insights" },
    { label: "Compliance Calendar", to: "/resources/compliance-calendar" },
    { label: "Fire Risk Guide", to: "/resources/fire-risk-guide" },
    { label: "EICR Manual", to: "/resources/eicr-manual" }
  ];
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
              <span className="text-foreground">Entire</span>
              <span className="text-primary">FM</span>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <GlobalSearch />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light h-10">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4">
                    <div className="grid gap-2 mb-3">
                      {servicesItems.map(item => (
                        <NavigationMenuLink key={item.to} asChild>
                          <Link 
                            to={item.to} 
                            className="flex items-center justify-between group rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="flex-1">
                              <div className="text-sm font-medium leading-none mb-1">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="border-t pt-3">
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services" 
                          className="flex items-center justify-between group rounded-md p-3 text-sm font-medium hover:bg-accent transition-colors"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light h-10">Sectors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-2 p-4">
                    {sectorsItems.map(item => <NavigationMenuLink key={item.to} asChild>
                        <Link to={item.to} className="flex items-center justify-between group rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">{item.label}</div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </NavigationMenuLink>)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/fm-insights" className="text-sm font-light text-foreground hover:text-primary transition-colors px-4 py-2 h-10 inline-flex items-center">
                    FM Insights
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/case-studies" className="text-sm font-light text-foreground hover:text-primary transition-colors px-4 py-2 h-10 inline-flex items-center">
                    Case Studies
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button asChild size="sm" variant="default" className="h-10">
                  <Link to="/request-proposal">Request Proposal</Link>
                </Button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button asChild size="sm" variant="outline" className="h-10">
                  <a href="mailto:hello@entirefm.com" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="hidden xl:inline">Emergency</span>
                    <Badge variant="destructive" className="ml-1 text-[10px] px-1.5 py-0">24/7</Badge>
                  </a>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              {mobileNavItems.map(item => <Link key={item.to} to={item.to} className="text-sm font-light text-foreground hover:text-primary transition-colors py-2 px-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>)}
              <Button className="w-full mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Proposal
                </Link>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;