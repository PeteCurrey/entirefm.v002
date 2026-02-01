import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet";
import { CMSSectionRenderer } from "@/components/cms/CMSSectionRenderer";
import { CMSSection } from "@/hooks/usePageContent";
import { Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CMSPreviewPage() {
  const [searchParams] = useSearchParams();
  const pageId = searchParams.get('id');
  const pagePath = searchParams.get('path');
  
  const [sections, setSections] = useState<CMSSection[]>([]);
  const [pageData, setPageData] = useState<{
    page_title: string;
    page_path: string;
    meta_title: string | null;
    meta_description: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(true);
  const initialLoadRef = useRef(false);

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
          page_path: data.page_path,
          meta_title: data.meta_title,
          meta_description: data.meta_description
        });
        
        initialLoadRef.current = true;
        
        // Notify parent that iframe is ready
        window.parent?.postMessage({ type: 'CMS_IFRAME_READY' }, '*');
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
      
      if (event.data?.type === 'CMS_EDIT_MODE') {
        setEditMode(event.data.enabled);
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
    if (editMode) {
      window.parent?.postMessage({
        type: 'CMS_SECTION_CLICKED',
        sectionId
      }, '*');
    }
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
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] text-muted-foreground">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-light mb-2">No Content Configured</h2>
            <p className="text-muted-foreground mb-4 max-w-md">
              This page doesn't have any CMS sections yet. Use the section panel on the left to add content.
            </p>
            <p className="text-sm text-muted-foreground">
              Add a Hero section, Text block, or other content to get started.
            </p>
          </div>
        </div>
        <Footer />
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
        ${editMode ? `
          [data-section-id] {
            position: relative;
            cursor: pointer;
          }
          [data-section-id]::before {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 10;
            transition: all 0.2s ease;
            border: 2px solid transparent;
          }
          [data-section-id]:hover::before {
            border-color: hsl(var(--primary));
            background: hsl(var(--primary) / 0.05);
          }
          [data-section-id]::after {
            content: 'Click to edit';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: hsl(var(--primary));
            color: hsl(var(--primary-foreground));
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            opacity: 0;
            pointer-events: none;
            z-index: 20;
            transition: opacity 0.2s ease;
            white-space: nowrap;
          }
          [data-section-id]:hover::after {
            opacity: 1;
          }
        ` : ''}
        .cms-highlighted {
          animation: cms-pulse 0.5s ease-in-out 3;
        }
        @keyframes cms-pulse {
          0%, 100% { box-shadow: inset 0 0 0 0 hsl(var(--primary) / 0.4); }
          50% { box-shadow: inset 0 0 0 4px hsl(var(--primary) / 0.4); }
        }
      `}</style>
      
      {/* Show navbar for context */}
      <Header />
      
      <main className="cms-preview-content">
        {sections.map(section => (
          <CMSSectionRenderer 
            key={section.id} 
            section={section}
            isEditable={editMode}
            onSectionClick={handleSectionClick}
          />
        ))}
      </main>
      
      {/* Show footer for context */}
      <Footer />
    </div>
  );
}
