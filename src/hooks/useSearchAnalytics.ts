import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface SearchAnalyticsData {
  query: string;
  category?: string;
  resultsCount: number;
  timestamp?: string;
  clickedResult?: string;
}

/**
 * Hook for tracking search analytics
 * Persists search data to the database for comprehensive analytics
 */
export const useSearchAnalytics = () => {
  const trackSearch = useCallback(async (data: SearchAnalyticsData) => {
    const analyticsData = {
      query: data.query.trim().toLowerCase(),
      results_count: data.resultsCount,
      category: data.category || null,
      source_page: window.location.pathname,
      user_agent: navigator.userAgent,
    };

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'search', {
        search_term: data.query,
        search_category: data.category,
        search_results: data.resultsCount,
      });
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log('🔍 Search Tracked:', analyticsData);
    }

    // Store in localStorage for fallback and immediate local stats
    try {
      const searches = JSON.parse(localStorage.getItem('search_history') || '[]');
      searches.push({
        query: data.query,
        timestamp: new Date().toISOString(),
        resultsCount: data.resultsCount,
      });
      
      // Keep only last 100 searches
      if (searches.length > 100) {
        searches.shift();
      }
      
      localStorage.setItem('search_history', JSON.stringify(searches));
    } catch (error) {
      // Silent fail for localStorage
    }

    // Persist to database via edge function
    try {
      const { error } = await supabase.functions.invoke('track-search', {
        body: analyticsData,
      });
      
      if (error) {
        console.error('Failed to track search to database:', error);
      }
    } catch (error) {
      // Silent fail - don't break user experience
      console.error('Search tracking error:', error);
    }
  }, []);

  const trackSearchClick = useCallback(async (query: string, resultUrl: string, position: number) => {
    const clickData = {
      query: query.trim().toLowerCase(),
      results_count: 0, // Not applicable for click tracking
      clicked_result: resultUrl,
      click_position: position,
      source_page: window.location.pathname,
      user_agent: navigator.userAgent,
    };

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'search_result_click', {
        search_term: query,
        result_url: resultUrl,
        result_position: position,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Search Click Tracked:', clickData);
    }

    // Update local search history with click info
    try {
      const searches = JSON.parse(localStorage.getItem('search_history') || '[]');
      const updatedSearches = searches.map((search: any) => {
        if (search.query.toLowerCase() === query.toLowerCase()) {
          return { ...search, clicked: true };
        }
        return search;
      });
      localStorage.setItem('search_history', JSON.stringify(updatedSearches));
    } catch (error) {
      // Silent fail
    }

    // Persist click to database
    try {
      await supabase.functions.invoke('track-search', {
        body: clickData,
      });
    } catch (error) {
      // Silent fail
    }
  }, []);

  const getPopularSearches = useCallback(() => {
    try {
      const searches = JSON.parse(localStorage.getItem('search_history') || '[]');
      
      // Count occurrences of each query
      const queryCount: Record<string, number> = {};
      searches.forEach((search: any) => {
        const query = search.query.toLowerCase().trim();
        queryCount[query] = (queryCount[query] || 0) + 1;
      });

      // Sort by frequency and return top 10
      return Object.entries(queryCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([query]) => query);
    } catch (error) {
      return [];
    }
  }, []);

  return {
    trackSearch,
    trackSearchClick,
    getPopularSearches,
  };
};
