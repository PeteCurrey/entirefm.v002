import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { DOMParser, Element } from "https://deno.land/x/deno_dom@v0.1.38/deno-dom-wasm.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PageAnalysis {
  url: string;
  fetchedAt: string;
  title: { content: string; length: number };
  metaDescription: { content: string; length: number };
  canonical: { url: string; isPresent: boolean };
  headings: { h1: string[]; h2: string[]; h3: string[] };
  internalLinks: string[];
  externalLinks: string[];
  images: { src: string; hasAlt: boolean; altText?: string }[];
  structuredData: any[];
  openGraph: Record<string, string>;
  wordCount: number;
  hasViewport: boolean;
  robotsMeta: string | null;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, baseUrl } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const siteBaseUrl = baseUrl || Deno.env.get("SITE_BASE_URL") || "https://entirefm.com";
    const fullUrl = url.startsWith('http') ? url : `${siteBaseUrl}${url}`;
    
    console.log(`Fetching page: ${fullUrl}`);

    // Fetch the actual page
    const response = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'EntireFM-SEO-Auditor/1.0'
      }
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch page: ${response.status}` }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await response.text();
    
    // Parse HTML using deno-dom
    const doc = new DOMParser().parseFromString(html, "text/html");
    
    if (!doc) {
      return new Response(
        JSON.stringify({ error: 'Failed to parse HTML' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract title
    const titleEl = doc.querySelector("title");
    const title = titleEl?.textContent?.trim() || "";

    // Extract meta description
    const metaDescEl = doc.querySelector('meta[name="description"]') as Element | null;
    const metaDescription = metaDescEl?.getAttribute("content") || "";

    // Extract canonical URL
    const canonicalEl = doc.querySelector('link[rel="canonical"]') as Element | null;
    const canonicalUrl = canonicalEl?.getAttribute("href") || "";

    // Extract headings
    const h1s = Array.from(doc.querySelectorAll("h1")).map(h => h.textContent?.trim() || "");
    const h2s = Array.from(doc.querySelectorAll("h2")).map(h => h.textContent?.trim() || "");
    const h3s = Array.from(doc.querySelectorAll("h3")).map(h => h.textContent?.trim() || "");

    // Extract links
    const allLinks = Array.from(doc.querySelectorAll("a[href]")) as Element[];
    const internalLinks: string[] = [];
    const externalLinks: string[] = [];
    
    allLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      
      if (href.startsWith('/') || href.includes(siteBaseUrl.replace('https://', ''))) {
        // Internal link
        const normalized = href.startsWith('/') ? href : new URL(href).pathname;
        if (!internalLinks.includes(normalized)) {
          internalLinks.push(normalized);
        }
      } else if (href.startsWith('http')) {
        // External link
        if (!externalLinks.includes(href)) {
          externalLinks.push(href);
        }
      }
    });

    // Extract images
    const imgElements = Array.from(doc.querySelectorAll("img")) as Element[];
    const images = imgElements.map(img => ({
      src: img.getAttribute("src") || "",
      hasAlt: img.hasAttribute("alt") && (img.getAttribute("alt")?.trim() || "").length > 0,
      altText: img.getAttribute("alt") || undefined
    }));

    // Extract structured data (JSON-LD)
    const structuredData: any[] = [];
    const scriptEls = doc.querySelectorAll('script[type="application/ld+json"]');
    scriptEls.forEach(script => {
      try {
        const jsonContent = script.textContent;
        if (jsonContent) {
          structuredData.push(JSON.parse(jsonContent));
        }
      } catch (e) {
        console.log("Failed to parse JSON-LD:", e);
      }
    });

    // Extract Open Graph tags
    const openGraph: Record<string, string> = {};
    const ogTags = Array.from(doc.querySelectorAll('meta[property^="og:"]')) as Element[];
    ogTags.forEach(tag => {
      const property = tag.getAttribute("property");
      const content = tag.getAttribute("content");
      if (property && content) {
        openGraph[property.replace("og:", "")] = content;
      }
    });

    // Check viewport
    const viewportEl = doc.querySelector('meta[name="viewport"]');
    const hasViewport = !!viewportEl;

    // Check robots meta
    const robotsEl = doc.querySelector('meta[name="robots"]') as Element | null;
    const robotsMeta = robotsEl?.getAttribute("content") || null;

    // Calculate word count (approximate from body text)
    const bodyText = doc.body?.textContent || "";
    const words = bodyText.split(/\s+/).filter(w => w.trim().length > 0);
    const wordCount = words.length;

    const analysis: PageAnalysis = {
      url,
      fetchedAt: new Date().toISOString(),
      title: { content: title, length: title.length },
      metaDescription: { content: metaDescription, length: metaDescription.length },
      canonical: { url: canonicalUrl, isPresent: !!canonicalUrl },
      headings: { h1: h1s, h2: h2s, h3: h3s },
      internalLinks,
      externalLinks,
      images,
      structuredData,
      openGraph,
      wordCount,
      hasViewport,
      robotsMeta
    };

    console.log(`Analysis complete for ${url}:`, {
      title: title.substring(0, 50),
      h1Count: h1s.length,
      internalLinks: internalLinks.length,
      images: images.length
    });

    return new Response(
      JSON.stringify(analysis),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error analyzing page:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
