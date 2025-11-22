import { useCallback } from 'react';

// Conversion event types
export type ConversionEvent = 
  | 'proposal_request'
  | 'contact_form_submit'
  | 'phone_click'
  | 'download_playbook'
  | 'download_calendar'
  | 'tool_completion'
  | 'portal_demo_request';

interface ConversionData {
  event: ConversionEvent;
  source?: string;
  campaign?: string;
  keyword?: string;
  offer?: string;
  value?: number;
  page?: string;
}

/**
 * Hook for tracking conversion events
 * Integrates with Google Analytics, Facebook Pixel, or other tracking systems
 */
export const useConversionTracking = () => {
  const trackConversion = useCallback((data: ConversionData) => {
    const eventData = {
      ...data,
      timestamp: new Date().toISOString(),
      page: data.page || window.location.pathname,
      referrer: document.referrer,
    };

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', data.event, {
        event_category: 'conversion',
        event_label: data.offer || data.event,
        value: data.value || 0,
        source: data.source,
        campaign: data.campaign,
        keyword: data.keyword,
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: data.event,
        value: data.value || 0,
        currency: 'GBP',
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 Conversion Tracked:', eventData);
    }

    // Send to custom analytics endpoint if needed
    try {
      fetch('/api/track-conversion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      }).catch(() => {
        // Silent fail - don't break user experience
      });
    } catch (error) {
      // Silent fail
    }
  }, []);

  // Specific tracking helpers
  const trackProposalRequest = useCallback((source?: string) => {
    trackConversion({ 
      event: 'proposal_request', 
      source,
      value: 1000, // Estimated lead value
    });
  }, [trackConversion]);

  const trackPhoneClick = useCallback(() => {
    trackConversion({ 
      event: 'phone_click',
      value: 500,
    });
  }, [trackConversion]);

  const trackDownload = useCallback((resourceName: string) => {
    const event = resourceName.includes('Playbook') 
      ? 'download_playbook' 
      : 'download_calendar';
    
    trackConversion({ 
      event,
      offer: resourceName,
      value: 200,
    });
  }, [trackConversion]);

  const trackToolCompletion = useCallback((toolName: string) => {
    trackConversion({ 
      event: 'tool_completion',
      offer: toolName,
      value: 300,
    });
  }, [trackConversion]);

  return {
    trackConversion,
    trackProposalRequest,
    trackPhoneClick,
    trackDownload,
    trackToolCompletion,
  };
};
