import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  title: string;
  url: string;
  category: "Services" | "Sectors" | "FM Insights" | "Case Studies" | "Resources";
  description?: string;
}

const searchData: SearchResult[] = [
  // Services
  { title: "Fire Safety & Life Protection", url: "/services/fire-safety", category: "Services", description: "Fire alarms, emergency lighting, sprinklers" },
  { title: "Electrical Compliance", url: "/services/electrical-compliance", category: "Services", description: "EICR testing, BS 7671 compliance" },
  { title: "Emergency Lighting", url: "/services/emergency-lighting", category: "Services", description: "BS 5266 testing and certification" },
  { title: "Water Hygiene & Legionella", url: "/services/water-hygiene", category: "Services", description: "ACOP L8 compliance and testing" },
  { title: "Gas Safety", url: "/services/gas-safety", category: "Services", description: "Gas Safe registered engineers" },
  { title: "HVAC & F-Gas", url: "/services/hvac-compliance", category: "Services", description: "TM44, F-Gas, air conditioning" },
  { title: "PPM & Asset Lifecycle", url: "/services/ppm-compliance", category: "Services", description: "Planned preventative maintenance" },
  
  // Sectors
  { title: "Corporate Offices", url: "/sectors/offices", category: "Sectors" },
  { title: "Retail & Hospitality", url: "/sectors/retail-hospitality", category: "Sectors" },
  { title: "Industrial & Logistics", url: "/sectors/industrial-logistics", category: "Sectors" },
  { title: "Healthcare & Public Buildings", url: "/sectors/healthcare-public", category: "Sectors" },
  { title: "Hotels & Leisure", url: "/sectors/hotels-leisure", category: "Sectors" },
  { title: "PBSA & Student Housing", url: "/sectors/pbsa", category: "Sectors" },
  { title: "Universities & Education", url: "/sectors/education", category: "Sectors" },
  
  // Case Studies
  { title: "Corporate Office London", url: "/case-studies/corporate-office-london", category: "Case Studies" },
  { title: "Retail Complex Birmingham", url: "/case-studies/retail-complex-birmingham", category: "Case Studies" },
  { title: "Industrial Warehouse Sheffield", url: "/case-studies/industrial-warehouse-sheffield", category: "Case Studies" },
  { title: "PBSA Estate Manchester", url: "/case-studies/pbsa-estate-manchester", category: "Case Studies" },
  
  // Resources
  { title: "Fire Risk Assessment Guide", url: "/resources/fire-risk-guide", category: "Resources" },
  { title: "EICR Survival Manual", url: "/resources/eicr-manual", category: "Resources" },
  { title: "Emergency Lighting Checklist", url: "/resources/emergency-lighting-checklist", category: "Resources" },
  { title: "Legionella Governance Guide", url: "/resources/legionella-guide", category: "Resources" },
  { title: "Compliance Calendar 2025", url: "/resources/compliance-calendar", category: "Resources" },
];

export const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = searchData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    );

    setResults(searchResults.slice(0, 8));
    setIsOpen(searchResults.length > 0);
  }, [query]);

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  const handleResultClick = (url: string) => {
    navigate(url);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search services, sectors, resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
          className="pl-10 pr-4"
        />
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-[70vh] overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {Object.entries(groupedResults).map(([category, items]) => (
              <div key={category} className="mb-4 last:mb-0">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground">
                  {category}
                </div>
                <div className="space-y-1">
                  {items.map((result) => (
                    <button
                      key={result.url}
                      onClick={() => handleResultClick(result.url)}
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-sm font-medium group-hover:text-primary transition-colors">
                            {result.title}
                          </div>
                          {result.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {result.description}
                            </div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {results.some(r => r.category === "Services") && (
              <div className="border-t pt-3 mt-3">
                <Button asChild size="sm" className="w-full">
                  <Link to="/request-proposal">
                    Request Inspection <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
