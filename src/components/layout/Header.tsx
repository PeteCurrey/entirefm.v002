import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
const Header = () => {
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
    label: "Hard FM",
    to: "/services/hard-fm"
  }, {
    label: "HVAC",
    to: "/services/hvac"
  }, {
    label: "Electrical",
    to: "/services/electrical"
  }, {
    label: "Fire Alarms",
    to: "/services/fire-alarms"
  }, {
    label: "Emergency Lighting",
    to: "/services/emergency-lighting"
  }, {
    label: "Water Hygiene",
    to: "/services/water-hygiene"
  }, {
    label: "Gas Safety",
    to: "/services/gas-safety"
  }, {
    label: "Sprinklers & Risers",
    to: "/services/sprinklers-risers"
  }, {
    label: "Building Fabric",
    to: "/services/building-fabric"
  }, {
    label: "PPM & Compliance",
    to: "/services/ppm-compliance"
  }];
  const sectorsItems = [{
    label: "Logistics & Industrial",
    to: "/sectors/logistics-industrial"
  }, {
    label: "Retail & Forecourt",
    to: "/sectors/retail-service-stations"
  }, {
    label: "Offices & Corporate",
    to: "/sectors/offices-corporate"
  }, {
    label: "Aviation",
    to: "/sectors/aviation"
  }, {
    label: "Hospitality & Leisure",
    to: "/sectors/hospitality-leisure"
  }, {
    label: "Residential & PBSA",
    to: "/sectors/residential-pbsa"
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
    label: "All Resources",
    to: "/resources"
  }, {
    label: "Audit Framework",
    to: "/resources/audit-framework"
  }, {
    label: "Compliance Calendar",
    to: "/resources/compliance-calendar"
  }, {
    label: "Switching Playbook",
    to: "/resources/switch-playbook"
  }];
  const mobileNavItems = [...servicesItems, ...sectorsItems, ...locationsItems, {
    label: "Case Studies",
    to: "/case-studies"
  }, ...resourcesItems, ...aboutItems, {
    label: "Contact",
    to: "/contact"
  }];
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto px-6 pr-[10px] pl-[10px]">
        <div className="h-20 items-center justify-between gap-0 flex flex-row mx-0">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-light tracking-tight">
              <span className="text-foreground">Entire</span>
              <span className="text-primary">FM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {servicesItems.map(item => <NavigationMenuLink key={item.to} asChild>
                        <Link to={item.to} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light">Sectors</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[300px] gap-3 p-4">
                    {sectorsItems.map(item => <NavigationMenuLink key={item.to} asChild>
                        <Link to={item.to} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light">Locations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[250px] gap-3 p-4">
                    {locationsItems.map(item => <NavigationMenuLink key={item.to} asChild>
                        <Link to={item.to} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/case-studies" className="text-sm font-light text-foreground hover:text-primary transition-colors px-4 py-2">
                    Case Studies
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[280px] gap-3 p-4">
                    {resourcesItems.map(item => <NavigationMenuLink key={item.to} asChild>
                        <Link to={item.to} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-light">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[280px] gap-3 p-4">
                    {aboutItems.map(item => <NavigationMenuLink key={item.to} asChild>
                        <Link to={item.to} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.label}</div>
                        </Link>
                      </NavigationMenuLink>)}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="text-sm font-light text-foreground hover:text-primary transition-colors px-4 py-2">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button size="sm" asChild>
              <Link to="/contact">Request Proposal</Link>
            </Button>
          </div>

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