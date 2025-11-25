import { supabase } from "@/integrations/supabase/client";

const GSC_SCOPES = [
  'https://www.googleapis.com/auth/webmasters.readonly',
];

export const getGoogleAuthUrl = () => {
  const redirectUri = `${window.location.origin}/link-health`;
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: GSC_SCOPES.join(' '),
    access_type: 'offline',
    prompt: 'consent',
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

export const exchangeCodeForTokens = async (code: string) => {
  const redirectUri = `${window.location.origin}/link-health`;
  const session = await supabase.auth.getSession();
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gsc-api?action=exchange-code`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${session.data.session?.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code, redirectUri }),
  });

  if (!response.ok) throw new Error('Failed to exchange code for tokens');
  return response.json();
};

export const getGSCConnection = async () => {
  const session = await supabase.auth.getSession();
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gsc-api?action=get-connection`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${session.data.session?.access_token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to get GSC connection');
  return response.json();
};

export const inspectUrl = async (url: string) => {
  const session = await supabase.auth.getSession();
  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gsc-api?action=inspect-url&url=${encodeURIComponent(url)}`;
  
  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${session.data.session?.access_token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to inspect URL');
  return response.json();
};

export const getSearchAnalytics = async (startDate: string, endDate: string) => {
  const session = await supabase.auth.getSession();
  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gsc-api?action=search-analytics`;
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${session.data.session?.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate,
      endDate,
      dimensions: ['page'],
    }),
  });

  if (!response.ok) throw new Error('Failed to fetch search analytics');
  return response.json();
};

export const getCrawlStats = async () => {
  const session = await supabase.auth.getSession();
  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/gsc-api?action=crawl-stats`;
  
  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${session.data.session?.access_token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch crawl stats');
  return response.json();
};