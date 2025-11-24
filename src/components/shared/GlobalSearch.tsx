import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ArrowRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchAnalytics } from "@/hooks/useSearchAnalytics";
interface SearchResult {
  title: string;
  url: string;
  category: "Services" | "Sectors" | "FM Insights" | "Case Studies" | "Resources";
  description?: string;
  date?: string;
  relevanceScore?: number;
}
const searchData: SearchResult[] = [
// Services
{
  title: "Fire Safety & Life Protection",
  url: "/services/fire-safety",
  category: "Services",
  description: "Fire alarms, emergency lighting, sprinklers",
  date: "2024-12-01"
}, {
  title: "Electrical Compliance",
  url: "/services/electrical-compliance",
  category: "Services",
  description: "EICR testing, BS 7671 compliance",
  date: "2024-12-01"
}, {
  title: "Emergency Lighting",
  url: "/services/emergency-lighting",
  category: "Services",
  description: "BS 5266 testing and certification",
  date: "2024-12-01"
}, {
  title: "Water Hygiene & Legionella",
  url: "/services/water-hygiene",
  category: "Services",
  description: "ACOP L8 compliance and testing",
  date: "2024-12-01"
}, {
  title: "Gas Safety",
  url: "/services/gas-safety",
  category: "Services",
  description: "Gas Safe registered engineers",
  date: "2024-12-01"
}, {
  title: "HVAC & F-Gas",
  url: "/services/hvac-compliance",
  category: "Services",
  description: "TM44, F-Gas, air conditioning",
  date: "2024-12-01"
}, {
  title: "PPM & Asset Lifecycle",
  url: "/services/ppm-compliance",
  category: "Services",
  description: "Planned preventative maintenance",
  date: "2024-12-01"
},
// Sectors
{
  title: "Corporate Offices",
  url: "/sectors/offices",
  category: "Sectors",
  date: "2024-11-01"
}, {
  title: "Retail & Hospitality",
  url: "/sectors/retail-hospitality",
  category: "Sectors",
  date: "2024-11-01"
}, {
  title: "Industrial & Logistics",
  url: "/sectors/industrial-logistics",
  category: "Sectors",
  date: "2024-11-01"
}, {
  title: "Healthcare & Public Buildings",
  url: "/sectors/healthcare-public",
  category: "Sectors",
  date: "2024-11-01"
}, {
  title: "Hotels & Leisure",
  url: "/sectors/hotels-leisure",
  category: "Sectors",
  date: "2024-11-01"
}, {
  title: "PBSA & Student Housing",
  url: "/sectors/pbsa",
  category: "Sectors",
  date: "2024-11-01"
}, {
  title: "Universities & Education",
  url: "/sectors/education",
  category: "Sectors",
  date: "2024-11-01"
},
// Case Studies
{
  title: "Corporate Office London",
  url: "/case-studies/corporate-office-london",
  category: "Case Studies",
  date: "2024-10-15"
}, {
  title: "Retail Complex Birmingham",
  url: "/case-studies/retail-complex-birmingham",
  category: "Case Studies",
  date: "2024-10-10"
}, {
  title: "Industrial Warehouse Sheffield",
  url: "/case-studies/industrial-warehouse-sheffield",
  category: "Case Studies",
  date: "2024-10-05"
}, {
  title: "PBSA Estate Manchester",
  url: "/case-studies/pbsa-estate-manchester",
  category: "Case Studies",
  date: "2024-09-20"
},
// FM Insights
{
  title: "Fire Risk Assessment Guide",
  url: "/resources/fire-risk-guide",
  category: "FM Insights",
  description: "Comprehensive fire risk assessment methodology",
  date: "2025-01-15"
}, {
  title: "EICR Survival Manual",
  url: "/resources/eicr-manual",
  category: "FM Insights",
  description: "Electrical compliance guide",
  date: "2025-01-10"
}, {
  title: "Emergency Lighting Checklist",
  url: "/resources/emergency-lighting-checklist",
  category: "FM Insights",
  description: "BS 5266 testing procedures",
  date: "2025-01-05"
}, {
  title: "Legionella Governance Guide",
  url: "/resources/legionella-guide",
  category: "FM Insights",
  description: "ACOP L8 compliance requirements",
  date: "2024-12-15"
}, {
  title: "Compliance Calendar 2025",
  url: "/resources/compliance-calendar",
  category: "FM Insights",
  description: "Annual compliance schedule",
  date: "2024-12-01"
},
// Resources
{
  title: "F-Gas Leak Compliance Tracker",
  url: "/resources/fgas-tracker",
  category: "Resources",
  description: "Track F-Gas compliance",
  date: "2024-11-20"
}, {
  title: "Audit Framework",
  url: "/resources/audit-framework",
  category: "Resources",
  description: "FM audit methodology",
  date: "2024-11-15"
}, {
  title: "Switching FM Provider",
  url: "/resources/switching-provider",
  category: "Resources",
  description: "Provider change guide",
  date: "2024-11-10"
}];
export const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    trackSearch,
    trackSearchClick,
    getPopularSearches
  } = useSearchAnalytics();
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowPopular(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    // Load popular searches on mount
    setPopularSearches(getPopularSearches());
  }, [getPopularSearches]);
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      setShowPopular(false);
      return;
    }

    // Calculate relevance score for each result
    const searchResults = searchData.map(item => {
      let score = 0;
      const queryLower = query.toLowerCase();
      const titleLower = item.title.toLowerCase();
      const descLower = item.description?.toLowerCase() || "";

      // Exact match in title (highest priority)
      if (titleLower === queryLower) {
        score += 100;
      }
      // Title starts with query
      else if (titleLower.startsWith(queryLower)) {
        score += 80;
      }
      // Title contains query
      else if (titleLower.includes(queryLower)) {
        score += 60;
      }
      // Description contains query
      else if (descLower.includes(queryLower)) {
        score += 40;
      }

      // Boost score for newer content
      if (item.date) {
        const daysSincePublish = Math.floor((new Date().getTime() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24));
        if (daysSincePublish < 30) {
          score += 10;
        } else if (daysSincePublish < 90) {
          score += 5;
        }
      }

      // Boost priority categories
      if (item.category === "Services") {
        score += 15;
      } else if (item.category === "FM Insights") {
        score += 10;
      }
      return {
        ...item,
        relevanceScore: score
      };
    }).filter(item => item.relevanceScore > 0).sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
    setResults(searchResults.slice(0, 8));
    setIsOpen(searchResults.length > 0);
    setShowPopular(false);

    // Track search
    if (searchResults.length > 0) {
      trackSearch({
        query: query.trim(),
        resultsCount: searchResults.length,
        timestamp: new Date().toISOString()
      });
    }
  }, [query, trackSearch]);
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);
  const handleResultClick = (url: string, position: number) => {
    trackSearchClick(query, url, position);
    navigate(url);
    setQuery("");
    setIsOpen(false);
    setShowPopular(false);
  };
  const handlePopularSearchClick = (searchQuery: string) => {
    setQuery(searchQuery);
    setShowPopular(false);
  };
  const handleFocus = () => {
    if (query.trim().length >= 2) {
      setIsOpen(true);
    } else if (popularSearches.length > 0) {
      setShowPopular(true);
    }
  };
  return <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative opacity-65">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input type="text" value={query} onChange={e => setQuery(e.target.value)} onFocus={handleFocus} className="pr-4 pl-[40px] ml-0" placeholder="Search ..." />
        {query && <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0" onClick={() => {
        setQuery("");
        setResults([]);
        setIsOpen(false);
      }}>
            ×
          </Button>}
      </div>

      {/* Popular Searches */}
      {showPopular && popularSearches.length > 0 && <Card className="absolute top-full mt-2 w-full z-50 shadow-lg">
          <div className="p-3">
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground mb-2">
              <TrendingUp className="w-4 h-4" />
              Popular Searches
            </div>
            <div className="space-y-1">
              {popularSearches.slice(0, 5).map((search, index) => <button key={index} onClick={() => handlePopularSearchClick(search)} className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors text-sm">
                  {search}
                </button>)}
            </div>
          </div>
        </Card>}

      {isOpen && results.length > 0 && <Card className="absolute top-full mt-2 w-full max-h-[70vh] overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {Object.entries(groupedResults).map(([category, items]) => <div key={category} className="mb-4 last:mb-0">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground">
                  {category}
                </div>
                <div className="space-y-1">
                  {items.map((result, idx) => {
              const position = Object.values(groupedResults).flat().findIndex(r => r.url === result.url);
              return <button key={result.url} onClick={() => handleResultClick(result.url, position)} className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors group">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <div className="text-sm font-medium group-hover:text-primary transition-colors">
                                {result.title}
                              </div>
                              {result.relevanceScore && result.relevanceScore >= 80 && <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded">
                                  Best match
                                </span>}
                            </div>
                            {result.description && <div className="text-xs text-muted-foreground mt-0.5">
                                {result.description}
                              </div>}
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2 shrink-0" />
                        </div>
                      </button>;
            })}
                </div>
              </div>)}
            
            <div className="border-t pt-3 mt-3 space-y-2">
              {results.some(r => r.category === "Services") && <Button asChild size="sm" className="w-full">
                  <Link to="/request-proposal">
                    Request Inspection <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>}
              <Button asChild size="sm" variant="outline" className="w-full">
                <Link to={`/search?q=${encodeURIComponent(query)}`}>
                  View All Results ({results.length})
                </Link>
              </Button>
            </div>
          </div>
        </Card>}
    </div>;
};