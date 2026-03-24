"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePageContent } from "@/hooks/usePageContent";
import { CMSSectionRenderer } from "./CMSSectionRenderer";

interface CMSPageWrapperProps {
  children: React.ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export function CMSPageWrapper({ children, fallbackTitle, fallbackDescription }: CMSPageWrapperProps) {
  const pathname = usePathname();
  const { pageContent, isLoading, isUsingCMS } = usePageContent(pathname);

  // Listen for edit mode messages from parent iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'CMS_EDIT_MODE') {
        // Add edit mode class to body
        document.body.classList.toggle('cms-edit-mode', event.data.enabled);
      }
      
      if (event.data?.type === 'CMS_HIGHLIGHT_SECTION') {
        // Scroll to and highlight a specific section
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

  // Handle section click in edit mode
  const handleSectionClick = (sectionId: string) => {
    // Send message to parent (PageEditor) to open section editor
    window.parent?.postMessage({
      type: 'CMS_SECTION_CLICKED',
      sectionId
    }, '*');
  };

  // Check if we're in edit mode (inside admin iframe)
  const isEditMode = window.location.search.includes('cms-edit=true');

  // If CMS content is available and published, render it
  if (!isLoading && isUsingCMS && pageContent) {
    return (
      <>
                
        <div className="cms-content">
          {pageContent.sections.map(section => (
            <CMSSectionRenderer 
              key={section.id} 
              section={section}
              isEditable={isEditMode}
              onSectionClick={handleSectionClick}
            />
          ))}
        </div>
      </>
    );
  }

  // Otherwise render the hardcoded fallback
  return (
    <>
      {children}
    </>
  );
}
