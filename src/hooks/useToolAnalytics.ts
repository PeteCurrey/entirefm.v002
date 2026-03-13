import { useCallback, useEffect } from 'react';

interface ToolAnalyticsData {
  toolName: string;
  action: 'view' | 'start' | 'complete' | 'download';
  metadata?: Record<string, any>;
}

/**
 * Hook for tracking tool usage analytics
 * Tracks tool views, completions, and interactions
 */
export const useToolAnalytics = () => {
  const trackToolEvent = useCallback((data: ToolAnalyticsData) => {
    const analyticsData = {
      ...data,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
    };

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tool_interaction', {
        tool_name: data.toolName,
        action: data.action,
        metadata: JSON.stringify(data.metadata || {}),
      });
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log('🔧 Tool Analytics:', analyticsData);
    }

    // Store in localStorage for popular tools tracking
    try {
      const toolHistory = JSON.parse(localStorage.getItem('tool_usage_history') || '[]');
      toolHistory.push({
        toolName: data.toolName,
        action: data.action,
        timestamp: analyticsData.timestamp,
      });
      
      // Keep only last 500 events
      if (toolHistory.length > 500) {
        toolHistory.shift();
      }
      
      localStorage.setItem('tool_usage_history', JSON.stringify(toolHistory));
    } catch (error) {
      // Silent fail
    }

    // Send to analytics endpoint
    try {
      fetch('/api/track-tool-usage', {
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

  const trackToolView = useCallback((toolName: string) => {
    trackToolEvent({
      toolName,
      action: 'view',
    });
  }, [trackToolEvent]);

  const trackToolStart = useCallback((toolName: string, metadata?: Record<string, any>) => {
    trackToolEvent({
      toolName,
      action: 'start',
      metadata,
    });
  }, [trackToolEvent]);

  const trackToolComplete = useCallback((toolName: string, metadata?: Record<string, any>) => {
    trackToolEvent({
      toolName,
      action: 'complete',
      metadata,
    });
  }, [trackToolEvent]);

  const trackToolDownload = useCallback((toolName: string, downloadType: string) => {
    trackToolEvent({
      toolName,
      action: 'download',
      metadata: { downloadType },
    });
  }, [trackToolEvent]);

  const getPopularTools = useCallback(() => {
    try {
      const toolHistory = JSON.parse(localStorage.getItem('tool_usage_history') || '[]');
      
      // Count usage by tool name
      const toolCount: Record<string, number> = {};
      toolHistory.forEach((event: any) => {
        if (event.action === 'complete' || event.action === 'view') {
          toolCount[event.toolName] = (toolCount[event.toolName] || 0) + 1;
        }
      });

      // Sort by frequency and return top 10
      return Object.entries(toolCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([toolName, count]) => ({ toolName, count }));
    } catch (error) {
      return [];
    }
  }, []);

  const getToolCompletionRate = useCallback((toolName: string) => {
    try {
      const toolHistory = JSON.parse(localStorage.getItem('tool_usage_history') || '[]');
      
      const views = toolHistory.filter(
        (event: any) => event.toolName === toolName && event.action === 'view'
      ).length;
      
      const completions = toolHistory.filter(
        (event: any) => event.toolName === toolName && event.action === 'complete'
      ).length;

      if (views === 0) return 0;
      return Math.round((completions / views) * 100);
    } catch (error) {
      return 0;
    }
  }, []);

  return {
    trackToolEvent,
    trackToolView,
    trackToolStart,
    trackToolComplete,
    trackToolDownload,
    getPopularTools,
    getToolCompletionRate,
  };
};

/**
 * Hook to automatically track tool page views
 */
export const useToolPageView = (toolName: string) => {
  const { trackToolView } = useToolAnalytics();

  useEffect(() => {
    trackToolView(toolName);
  }, [toolName, trackToolView]);
};
