import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, ArrowRight, TrendingUp, Loader2 } from "lucide-react";
import { useSearchAnalytics } from "@/hooks/useSearchAnalytics";
import { searchIndex, type SearchItem } from "@/data/searchIndex";
import Fuse from "fuse.js";
import { supabase } from "@/integrations/supabase/client";

interface EnhancedSearchResult extends SearchItem {
  relevanceScore?: number;
  highlightedTitle?: string;
  highlightedDescription?: string;
}

const fuseOptions = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 2 },
    { name: 'keywords', weight: 2 },
    { name: 'aliases', weight: 1.5 }
  ],
  threshold: 0.4, // Allow typos and fuzzy matching
  distance: 100,
  minMatchCharLength: 2,
  includeScore: true,
  includeMatches: true,
  ignoreLocation: true,
};

const fuse = new Fuse(searchIndex, fuseOptions);

export const EnhancedGlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<EnhancedSearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const [isAILoading, setIsAILoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { trackSearch, trackSearchClick, getPopularSearches } = useSearchAnalytics();
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
    setPopularSearches(getPopularSearches());
  }, [getPopularSearches]);

  // Highlight matching keywords in text
  const highlightText = (text: string, searchQuery: string): string => {
    if (!searchQuery.trim()) return text;
    const regex = new RegExp(`(${searchQuery.split(' ').filter(w => w.length > 2).join('|')})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      setShowPopular(false);
      return;
    }

    // Perform fuzzy search with Fuse.js
    const fuseResults = fuse.search(query);
    
    const enhancedResults: EnhancedSearchResult[] = fuseResults.map((result, index) => {
      const item = result.item;
      const score = result.score ? (1 - result.score) * 100 : 0;
      
      return {
        ...item,
        relevanceScore: score,
        highlightedTitle: highlightText(item.title, query),
        highlightedDescription: item.description ? highlightText(item.description, query) : undefined,
      };
    }).slice(0, 15); // Show top 15 results

    setResults(enhancedResults);
    setIsOpen(enhancedResults.length > 0);
    setShowPopular(false);

    // Track search
    if (enhancedResults.length > 0) {
      trackSearch({
        query: query.trim(),
        resultsCount: enhancedResults.length,
        timestamp: new Date().toISOString()
      });
    }

    // Get AI suggestions for complex queries (debounced)
    if (query.length > 5 && enhancedResults.length < 5) {
      const debounceTimer = setTimeout(() => {
        fetchAISuggestions(query, enhancedResults);
      }, 500);
      return () => clearTimeout(debounceTimer);
    }
  }, [query, trackSearch]);

  const fetchAISuggestions = async (searchQuery: string, currentResults: EnhancedSearchResult[]) => {
    try {
      setIsAILoading(true);
      const { data, error } = await supabase.functions.invoke('smart-search', {
        body: { query: searchQuery, results: currentResults }
      });

      if (!error && data?.success) {
        console.log('AI Analysis:', data.analysis);
      }
    } catch (err) {
      console.error('AI search error:', err);
    } finally {
      setIsAILoading(false);
    }
  };

  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, EnhancedSearchResult[]>);

  // Ensure category order
  const orderedCategories = [
    "Services",
    "Sectors", 
    "FM Operations",
    "Soft Services",
    "Insights / Resources",
    "Case Studies"
  ];

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

  const hasResults = results.length > 0;
  const showNoResults = query.trim().length >= 2 && !hasResults && !isAILoading;

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          className="pr-4 pl-10"
          placeholder="Search services, sectors, insights..."
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={() => {
              setQuery("");
              setResults([]);
              setIsOpen(false);
            }}
          >
            ×
          </Button>
        )}
      </div>

      {/* Popular Searches */}
      {showPopular && popularSearches.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg border-border">
          <div className="p-3">
            <div className="flex items-center gap-2 px-2 py-1 text-xs font-medium text-muted-foreground mb-2">
              <TrendingUp className="w-4 h-4" />
              Popular Searches
            </div>
            <div className="space-y-1">
              {popularSearches.slice(0, 5).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handlePopularSearchClick(search)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </Card>
      )}

      {/* Search Results */}
      {isOpen && hasResults && (
        <Card className="absolute top-full mt-2 w-full max-h-[70vh] overflow-y-auto z-50 shadow-lg border-border">
          <div className="p-2">
            {orderedCategories.map(category => {
              const items = groupedResults[category];
              if (!items || items.length === 0) return null;

              return (
                <div key={category} className="mb-4 last:mb-0">
                  <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {category}
                  </div>
                  <div className="space-y-1">
                    {items.map((result) => {
                      const position = Object.values(groupedResults)
                        .flat()
                        .findIndex(r => r.url === result.url);
                      
                      return (
                        <button
                          key={result.url}
                          onClick={() => handleResultClick(result.url, position)}
                          className="w-full text-left px-3 py-2 rounded-md hover:bg-accent transition-colors group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <div 
                                  className="text-sm font-medium group-hover:text-primary transition-colors"
                                  dangerouslySetInnerHTML={{ __html: result.highlightedTitle || result.title }}
                                />
                                {result.relevanceScore && result.relevanceScore >= 80 && (
                                  <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded shrink-0">
                                    Best match
                                  </span>
                                )}
                              </div>
                              {result.description && (
                                <div 
                                  className="text-xs text-muted-foreground line-clamp-1"
                                  dangerouslySetInnerHTML={{ 
                                    __html: result.highlightedDescription || result.description 
                                  }}
                                />
                              )}
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            
            {/* Sticky CTA */}
            <div className="border-t pt-3 mt-3 space-y-2 sticky bottom-0 bg-card">
              <Button 
                onClick={() => {
                  navigate('/request-proposal');
                  setQuery("");
                  setIsOpen(false);
                }}
                size="sm" 
                className="w-full"
              >
                Request a Proposal <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* No Results / Zero State */}
      {showNoResults && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg border-border">
          <div className="p-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              No exact matches found for "<strong>{query}</strong>"
            </p>
            <p className="text-sm font-medium mb-4">
              We can help — request a proposal for a tailored service
            </p>
            <Button 
              onClick={() => {
                navigate('/request-proposal');
                setQuery("");
                setIsOpen(false);
              }}
              className="w-full mb-4"
            >
              Request a Proposal <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <div className="text-xs text-muted-foreground mb-2">Browse by category:</div>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  navigate('/services');
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                Services
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  navigate('/sectors');
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                Sectors
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  navigate('/fm-operations');
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                FM Operations
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  navigate('/resources');
                  setQuery("");
                  setIsOpen(false);
                }}
              >
                Resources
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* AI Loading Indicator */}
      {isAILoading && (
        <div className="absolute top-full mt-2 right-0 z-50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border rounded-md px-3 py-2 shadow-sm">
            <Loader2 className="w-3 h-3 animate-spin" />
            Analyzing...
          </div>
        </div>
      )}
    </div>
  );
};
