"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Search as SearchIcon, Filter, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchAnalytics } from "@/hooks/useSearchAnalytics";

interface SearchResult {
  title: string;
  url: string;
  category: "Services" | "Sectors" | "FM Insights" | "Case Studies" | "Resources";
  description?: string;
  date?: string;
  relevanceScore?: number;
}

const allSearchData: SearchResult[] = [
  // Services
  { title: "Fire Safety & Life Protection", url: "/services/fire-safety", category: "Services", description: "Fire alarms, emergency lighting, sprinklers", date: "2024-12-01" },
  { title: "Electrical Compliance", url: "/services/electrical-compliance", category: "Services", description: "EICR testing, BS 7671 compliance", date: "2024-12-01" },
  { title: "Emergency Lighting", url: "/services/emergency-lighting", category: "Services", description: "BS 5266 testing and certification", date: "2024-12-01" },
  { title: "Water Hygiene & Legionella", url: "/services/water-hygiene", category: "Services", description: "ACOP L8 compliance and testing", date: "2024-12-01" },
  { title: "Gas Safety", url: "/services/gas-safety", category: "Services", description: "Gas Safe registered engineers", date: "2024-12-01" },
  { title: "HVAC & F-Gas", url: "/services/hvac-compliance", category: "Services", description: "TM44, F-Gas, air conditioning", date: "2024-12-01" },
  { title: "PPM & Asset Lifecycle", url: "/services/ppm-compliance", category: "Services", description: "Planned preventative maintenance", date: "2024-12-01" },
  
  // Sectors
  { title: "Corporate Offices", url: "/sectors/offices", category: "Sectors", description: "FM for corporate office environments", date: "2024-11-01" },
  { title: "Retail & Hospitality", url: "/sectors/retail-hospitality", category: "Sectors", description: "Retail and hospitality FM services", date: "2024-11-01" },
  { title: "Industrial & Logistics", url: "/sectors/industrial-logistics", category: "Sectors", description: "Industrial warehouse and logistics", date: "2024-11-01" },
  { title: "Healthcare & Public Buildings", url: "/sectors/healthcare-public", category: "Sectors", description: "Healthcare facility management", date: "2024-11-01" },
  { title: "Hotels & Leisure", url: "/sectors/hotels-leisure", category: "Sectors", description: "Hotel and leisure facility services", date: "2024-11-01" },
  { title: "PBSA & Student Housing", url: "/sectors/pbsa", category: "Sectors", description: "Student accommodation management", date: "2024-11-01" },
  { title: "Universities & Education", url: "/sectors/education", category: "Sectors", description: "Educational facility management", date: "2024-11-01" },
  
  // Case Studies
  { title: "Corporate Office London", url: "/case-studies/corporate-office-london", category: "Case Studies", description: "50,000 sq ft office compliance transformation", date: "2024-10-15" },
  { title: "Retail Complex Birmingham", url: "/case-studies/retail-complex-birmingham", category: "Case Studies", description: "Multi-site retail FM delivery", date: "2024-10-10" },
  { title: "Industrial Warehouse Sheffield", url: "/case-studies/industrial-warehouse-sheffield", category: "Case Studies", description: "Industrial compliance and PPM program", date: "2024-10-05" },
  { title: "PBSA Estate Manchester", url: "/case-studies/pbsa-estate-manchester", category: "Case Studies", description: "Student housing compliance upgrade", date: "2024-09-20" },
  
  // FM Insights
  { title: "Fire Risk Assessment Guide", url: "/resources/fire-risk-guide", category: "FM Insights", description: "Comprehensive fire risk assessment methodology", date: "2025-01-15" },
  { title: "EICR Survival Manual", url: "/resources/eicr-manual", category: "FM Insights", description: "Electrical compliance guide for property managers", date: "2025-01-10" },
  { title: "Emergency Lighting Checklist", url: "/resources/emergency-lighting-checklist", category: "FM Insights", description: "BS 5266 testing procedures and checklists", date: "2025-01-05" },
  { title: "Legionella Governance Guide", url: "/resources/legionella-guide", category: "FM Insights", description: "ACOP L8 compliance requirements and control", date: "2024-12-15" },
  { title: "Compliance Calendar 2025", url: "/resources/compliance-calendar", category: "FM Insights", description: "Annual compliance schedule and deadlines", date: "2024-12-01" },
  
  // Resources
  { title: "F-Gas Leak Compliance Tracker", url: "/resources/fgas-tracker", category: "Resources", description: "Track F-Gas compliance and leak detection", date: "2024-11-20" },
  { title: "Audit Framework", url: "/resources/audit-framework", category: "Resources", description: "FM audit methodology and checklists", date: "2024-11-15" },
  { title: "Switching FM Provider", url: "/resources/switching-provider", category: "Resources", description: "Guide to changing FM providers smoothly", date: "2024-11-10" },
];

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"relevance" | "date">("relevance");
  
  const { trackSearch, getPopularSearches } = useSearchAnalytics();
  const [popularSearches, setPopularSearches] = useState<string[]>([]);

  useEffect(() => {
    setPopularSearches(getPopularSearches());
  }, [getPopularSearches]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    // Calculate relevance scores
    const results = allSearchData
      .map((item) => {
        let score = 0;
        const queryLower = query.toLowerCase();
        const titleLower = item.title.toLowerCase();
        const descLower = item.description?.toLowerCase() || "";

        // Exact match in title
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
        // Category matches
        else if (item.category.toLowerCase().includes(queryLower)) {
          score += 30;
        }

        // Boost for newer content
        if (item.date) {
          const daysSincePublish = Math.floor(
            (new Date().getTime() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24)
          );
          if (daysSincePublish < 30) {
            score += 10;
          } else if (daysSincePublish < 90) {
            score += 5;
          }
        }

        // Priority categories
        if (item.category === "Services") {
          score += 15;
        } else if (item.category === "FM Insights") {
          score += 10;
        }

        return { ...item, relevanceScore: score };
      })
      .filter((item) => item.relevanceScore > 0);

    // Apply category filter
    let filtered = results;
    if (categoryFilter !== "all") {
      filtered = results.filter((r) => r.category === categoryFilter);
    }

    // Apply date filter
    if (dateFilter !== "all" && filtered.length > 0) {
      const now = new Date();
      filtered = filtered.filter((r) => {
        if (!r.date) return true;
        const itemDate = new Date(r.date);
        const daysDiff = Math.floor((now.getTime() - itemDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (dateFilter === "week") return daysDiff <= 7;
        if (dateFilter === "month") return daysDiff <= 30;
        if (dateFilter === "year") return daysDiff <= 365;
        return true;
      });
    }

    // Sort results
    if (sortBy === "relevance") {
      filtered.sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
    } else {
      filtered.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }

    // Track search
    if (filtered.length > 0) {
      trackSearch({
        query: query.trim(),
        category: categoryFilter !== "all" ? categoryFilter : undefined,
        resultsCount: filtered.length,
        timestamp: new Date().toISOString(),
      });
    }

    return filtered;
  }, [query, categoryFilter, dateFilter, sortBy, trackSearch]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.trim()) {
      router.replace(`/search?q=${encodeURIComponent(newQuery)}`, { scroll: false });
    } else {
      router.replace('/search', { scroll: false });
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Search Results" },
  ];

  const categories = ["all", "Services", "Sectors", "FM Insights", "Case Studies", "Resources"];

  return (
    <>
      

      <div className="bg-background min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* Search Header */}
          <div className="mt-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <SearchIcon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-light">Search Results</h1>
                {query && (
                  <p className="text-muted-foreground mt-1">
                    {searchResults.length} results for "{query}"
                  </p>
                )}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative max-w-2xl">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search services, sectors, resources..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-11 h-12 text-base"
              />
            </div>
          </div>

          {/* Filters & Sorting */}
          {query && (
            <div className="mb-6 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
              </div>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Past Week</SelectItem>
                  <SelectItem value="month">Past Month</SelectItem>
                  <SelectItem value="year">Past Year</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(v) => setSortBy(v as "relevance" | "date")}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="date">Most Recent</SelectItem>
                </SelectContent>
              </Select>

              {(categoryFilter !== "all" || dateFilter !== "all") && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setCategoryFilter("all");
                    setDateFilter("all");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Results */}
            <div className="lg:col-span-3">
              {!query ? (
                <Card className="p-8 text-center">
                  <SearchIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-xl font-light mb-2">Start Your Search</h2>
                  <p className="text-muted-foreground">
                    Enter keywords to find services, resources, and insights
                  </p>
                </Card>
              ) : searchResults.length === 0 ? (
                <Card className="p-8 text-center">
                  <h2 className="text-xl font-light mb-2">No Results Found</h2>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or filters
                  </p>
                  <Button asChild>
                    <Link href="/request-proposal">Request Consultation</Link>
                  </Button>
                </Card>
              ) : (
                <div className="space-y-4">
                  {searchResults.map((result, index) => (
                    <Card key={index} className="p-6 hover-lift">
                      <Link href={result.url} className="block">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="secondary" className="text-xs">
                                {result.category}
                              </Badge>
                              {result.relevanceScore && result.relevanceScore >= 80 && (
                                <Badge variant="default" className="text-xs">
                                  Best match
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-lg font-medium hover:text-primary transition-colors">
                              {result.title}
                            </h3>
                          </div>
                        </div>
                        {result.description && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {result.description}
                          </p>
                        )}
                        {result.date && (
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(result.date).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })}
                          </div>
                        )}
                      </Link>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {popularSearches.length > 0 && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-medium">Popular Searches</h3>
                  </div>
                  <div className="space-y-2">
                    {popularSearches.slice(0, 8).map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(search)}
                        className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </Card>
              )}

              <Card className="p-6 bg-primary/5">
                <h3 className="font-medium mb-3">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find what you're looking for? Our team can help.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
