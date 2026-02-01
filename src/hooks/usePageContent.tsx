import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface CMSSection {
  id: string;
  type: string;
  title?: string;
  content?: Record<string, unknown>;
}

export interface PageContent {
  id: string;
  page_path: string;
  page_title: string;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  sections: CMSSection[];
}

interface UsePageContentResult {
  pageContent: PageContent | null;
  isLoading: boolean;
  error: Error | null;
  isUsingCMS: boolean;
}

export function usePageContent(pagePath: string): UsePageContentResult {
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('page_content')
          .select('*')
          .eq('page_path', pagePath)
          .eq('is_published', true)
          .maybeSingle();

        if (fetchError) throw fetchError;

        if (data) {
          const sections = Array.isArray(data.sections) 
            ? (data.sections as unknown as CMSSection[])
            : [];
          
          setPageContent({
            ...data,
            sections
          });
        } else {
          setPageContent(null);
        }
      } catch (err) {
        console.error('Error fetching page content:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch page content'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageContent();
  }, [pagePath]);

  return {
    pageContent,
    isLoading,
    error,
    isUsingCMS: pageContent !== null && pageContent.sections.length > 0
  };
}
