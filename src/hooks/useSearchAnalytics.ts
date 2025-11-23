import { useCallback } from 'react';

interface SearchAnalyticsData {
  query: string;
  category?: string;
  resultsCount: number;
  timestamp: string;
  clickedResult?: string;
}

/**
 * Hook for tracking search analytics
 * Tracks search queries, popular searches, and user interactions
 */
export const useSearchAnalytics = () => {
  const trackSearch = useCallback((data: SearchAnalyticsData) => {
    const analyticsData = {
      ...data,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
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
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 Search Tracked:', analyticsData);
    }

    // Store in localStorage for popular searches tracking
    try {
      const searches = JSON.parse(localStorage.getItem('search_history') || '[]');
      searches.push({
        query: data.query,
        timestamp: analyticsData.timestamp,
        resultsCount: data.resultsCount,
      });
      
      // Keep only last 100 searches
      if (searches.length > 100) {
        searches.shift();
      }
      
      localStorage.setItem('search_history', JSON.stringify(searches));
    } catch (error) {
      // Silent fail
    }

    // Send to analytics endpoint if needed
    try {
      fetch('/api/track-search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(analyticsData),
      }).catch(() => {
        // Silent fail - don't break user experience
      });
    } catch (error) {
      // Silent fail
    }
  }, []);

  const trackSearchClick = useCallback((query: string, resultUrl: string, position: number) => {
    const clickData = {
      query,
      resultUrl,
      position,
      timestamp: new Date().toISOString(),
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

    // Update search history with click info
    try {
      const searches = JSON.parse(localStorage.getItem('search_history') || '[]');
      const updatedSearches = searches.map((search: any) => {
        if (search.query === query) {
          return { ...search, clicked: true };
        }
        return search;
      });
      localStorage.setItem('search_history', JSON.stringify(updatedSearches));
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
