import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";
import { CMSSectionRenderer } from "@/components/cms/CMSSectionRenderer";
import { CMSSection } from "@/hooks/usePageContent";
import { Loader2 } from "lucide-react";

export default function CMSPreviewPage() {
  const [searchParams] = useSearchParams();
  const pageId = searchParams.get('id');
  
  const [sections, setSections] = useState<CMSSection[]>([]);
  const [pageData, setPageData] = useState<{
    page_title: string;
    meta_title: string | null;
    meta_description: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      if (!pageId) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('page_content')
          .select('*')
          .eq('id', pageId)
          .single();

        if (error) throw error;

        const parsedSections = Array.isArray(data.sections) 
          ? (data.sections as unknown as CMSSection[])
          : [];
        
        setSections(parsedSections);
        setPageData({
          page_title: data.page_title,
          meta_title: data.meta_title,
          meta_description: data.meta_description
        });
      } catch (error) {
        console.error('Error fetching page for preview:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [pageId]);

  // Listen for content updates from parent editor
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'CMS_CONTENT_UPDATE') {
        setSections(event.data.sections);
      }
      
      if (event.data?.type === 'CMS_HIGHLIGHT_SECTION') {
        const sectionEl = document.querySelector(`[data-section-id="${event.data.sectionId}"]`);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          sectionEl.classList.add('cms-highlighted');
          setTimeout(() => sectionEl.classList.remove('cms-highlighted'), 2000);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Handle section click
  const handleSectionClick = (sectionId: string) => {
    window.parent?.postMessage({
      type: 'CMS_SECTION_CLICKED',
      sectionId
    }, '*');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!pageId || sections.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground bg-background">
        <div className="text-center">
          <p className="text-lg mb-2">No CMS content configured</p>
          <p className="text-sm">Add sections in the editor to see the preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageData?.meta_title || pageData?.page_title || 'Preview'}</title>
        {pageData?.meta_description && (
          <meta name="description" content={pageData.meta_description} />
        )}
      </Helmet>
      
      {/* Edit mode styles */}
      <style>{`
        [data-section-id] {
          position: relative;
          cursor: pointer;
        }
        [data-section-id]::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        [data-section-id]:hover::after {
          box-shadow: inset 0 0 0 3px hsl(var(--primary));
          background: hsl(var(--primary) / 0.05);
        }
        .cms-highlighted {
          animation: cms-pulse 0.5s ease-in-out 3;
        }
        @keyframes cms-pulse {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4); }
          50% { box-shadow: 0 0 0 10px hsl(var(--primary) / 0); }
        }
      `}</style>
      
      <div className="cms-preview-content">
        {sections.map(section => (
          <CMSSectionRenderer 
            key={section.id} 
            section={section}
            isEditable={true}
            onSectionClick={handleSectionClick}
          />
        ))}
      </div>
    </div>
  );
}
