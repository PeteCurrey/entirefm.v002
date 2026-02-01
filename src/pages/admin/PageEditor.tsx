import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Globe, 
  Plus,
  GripVertical,
  Trash2,
  Settings,
  Image,
  Type,
  Layout,
  Columns,
  Grid3X3,
  Star,
  MessageSquare,
  Phone,
  HelpCircle,
  BarChart3,
  Video,
  Code,
  Loader2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  RefreshCw,
  Monitor,
  Tablet,
  Smartphone
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Json } from "@/integrations/supabase/types";

interface Section {
  id: string;
  type: string;
  title?: string;
  content?: Record<string, unknown>;
  isOpen?: boolean;
}

interface PageData {
  id: string;
  page_path: string;
  page_title: string;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  sections: Section[];
  version: number;
}

const sectionTypes = [
  { type: 'hero', label: 'Hero Section', icon: Layout, description: 'Full-width hero with title, subtitle, and CTA' },
  { type: 'text', label: 'Text Block', icon: Type, description: 'Rich text content section' },
  { type: 'image', label: 'Image', icon: Image, description: 'Single image with caption' },
  { type: 'two_column', label: 'Two Columns', icon: Columns, description: 'Side-by-side content layout' },
  { type: 'three_column', label: 'Three Columns', icon: Grid3X3, description: 'Three column grid layout' },
  { type: 'cards_grid', label: 'Cards Grid', icon: Grid3X3, description: 'Grid of feature cards' },
  { type: 'features', label: 'Features List', icon: Star, description: 'List of features with icons' },
  { type: 'testimonials', label: 'Testimonials', icon: MessageSquare, description: 'Customer testimonials' },
  { type: 'cta', label: 'Call to Action', icon: Phone, description: 'CTA section with buttons' },
  { type: 'faq', label: 'FAQ', icon: HelpCircle, description: 'Accordion FAQ section' },
  { type: 'stats', label: 'Statistics', icon: BarChart3, description: 'Key metrics display' },
  { type: 'gallery', label: 'Gallery', icon: Image, description: 'Image gallery grid' },
  { type: 'video', label: 'Video', icon: Video, description: 'Embedded video section' },
  { type: 'custom', label: 'Custom HTML', icon: Code, description: 'Custom code block' },
];

function SortableSection({ section, onUpdate, onDelete, onToggle, isActive }: { 
  section: Section; 
  onUpdate: (id: string, data: Partial<Section>) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  isActive?: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const sectionInfo = sectionTypes.find(s => s.type === section.type);
  const Icon = sectionInfo?.icon || Layout;

  return (
    <div ref={setNodeRef} style={style} className="mb-3">
      <Collapsible open={section.isOpen}>
        <Card className={`border-border/50 transition-all ${isActive ? 'ring-2 ring-primary shadow-lg' : ''}`}>
          <div className="p-4 flex items-center gap-3">
            <button {...attributes} {...listeners} className="cursor-grab hover:text-primary">
              <GripVertical className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <div className={`p-2 rounded-lg ${isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
              <Icon className={`w-4 h-4 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
            </div>
            
            <div className="flex-1">
              <Input
                value={section.title || sectionInfo?.label || section.type}
                onChange={(e) => onUpdate(section.id, { title: e.target.value })}
                className="border-0 p-0 h-auto font-medium focus-visible:ring-0"
                placeholder="Section title..."
              />
              <p className="text-xs text-muted-foreground">{sectionInfo?.description}</p>
            </div>
            
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" onClick={() => onToggle(section.id)}>
                {section.isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </CollapsibleTrigger>
            
            <Button variant="ghost" size="sm" onClick={() => onDelete(section.id)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
          
          <CollapsibleContent>
            <div className="px-4 pb-4 pt-0 border-t">
              <SectionEditor section={section} onUpdate={onUpdate} />
            </div>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}

function SectionEditor({ section, onUpdate }: { section: Section; onUpdate: (id: string, data: Partial<Section>) => void }) {
  const content = section.content || {};
  
  const updateContent = (key: string, value: unknown) => {
    onUpdate(section.id, { 
      content: { ...content, [key]: value } 
    });
  };

  switch (section.type) {
    case 'hero':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Headline</Label>
            <Input 
              value={(content.headline as string) || ''} 
              onChange={(e) => updateContent('headline', e.target.value)}
              placeholder="Main headline..."
            />
          </div>
          <div>
            <Label>Subtitle</Label>
            <Textarea 
              value={(content.subtitle as string) || ''} 
              onChange={(e) => updateContent('subtitle', e.target.value)}
              placeholder="Supporting text..."
              rows={2}
            />
          </div>
          <div>
            <Label>Background Image URL</Label>
            <Input 
              value={(content.backgroundImage as string) || ''} 
              onChange={(e) => updateContent('backgroundImage', e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Primary CTA Text</Label>
              <Input 
                value={(content.ctaText as string) || ''} 
                onChange={(e) => updateContent('ctaText', e.target.value)}
                placeholder="Get Started"
              />
            </div>
            <div>
              <Label>Primary CTA Link</Label>
              <Input 
                value={(content.ctaLink as string) || ''} 
                onChange={(e) => updateContent('ctaLink', e.target.value)}
                placeholder="/contact"
              />
            </div>
          </div>
        </div>
      );
      
    case 'text':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="Section heading..."
            />
          </div>
          <div>
            <Label>Body Text</Label>
            <Textarea 
              value={(content.body as string) || ''} 
              onChange={(e) => updateContent('body', e.target.value)}
              placeholder="Enter your content..."
              rows={6}
            />
          </div>
        </div>
      );
      
    case 'image':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Image URL</Label>
            <Input 
              value={(content.src as string) || ''} 
              onChange={(e) => updateContent('src', e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <Label>Alt Text</Label>
            <Input 
              value={(content.alt as string) || ''} 
              onChange={(e) => updateContent('alt', e.target.value)}
              placeholder="Describe the image..."
            />
          </div>
          <div>
            <Label>Caption (optional)</Label>
            <Input 
              value={(content.caption as string) || ''} 
              onChange={(e) => updateContent('caption', e.target.value)}
              placeholder="Image caption..."
            />
          </div>
        </div>
      );

    case 'two_column':
      return (
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label>Left Column Heading</Label>
              <Input 
                value={(content.leftHeading as string) || ''} 
                onChange={(e) => updateContent('leftHeading', e.target.value)}
                placeholder="Left heading..."
              />
              <Label>Left Column Content</Label>
              <Textarea 
                value={(content.leftContent as string) || ''} 
                onChange={(e) => updateContent('leftContent', e.target.value)}
                placeholder="Left content..."
                rows={4}
              />
            </div>
            <div className="space-y-3">
              <Label>Right Column Heading</Label>
              <Input 
                value={(content.rightHeading as string) || ''} 
                onChange={(e) => updateContent('rightHeading', e.target.value)}
                placeholder="Right heading..."
              />
              <Label>Right Column Content</Label>
              <Textarea 
                value={(content.rightContent as string) || ''} 
                onChange={(e) => updateContent('rightContent', e.target.value)}
                placeholder="Right content..."
                rows={4}
              />
            </div>
          </div>
        </div>
      );

    case 'three_column':
      return (
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(col => (
              <div key={col} className="space-y-3">
                <Label>Column {col} Heading</Label>
                <Input 
                  value={(content[`col${col}Heading`] as string) || ''} 
                  onChange={(e) => updateContent(`col${col}Heading`, e.target.value)}
                  placeholder={`Column ${col} heading...`}
                />
                <Label>Column {col} Content</Label>
                <Textarea 
                  value={(content[`col${col}Content`] as string) || ''} 
                  onChange={(e) => updateContent(`col${col}Content`, e.target.value)}
                  placeholder={`Column ${col} content...`}
                  rows={3}
                />
              </div>
            ))}
          </div>
        </div>
      );

    case 'cards_grid':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="Section heading..."
            />
          </div>
          <div>
            <Label>Cards (JSON format)</Label>
            <Textarea 
              value={JSON.stringify(content.cards || [], null, 2)} 
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateContent('cards', parsed);
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              placeholder='[{"title": "Card 1", "description": "Description...", "link": "/page"}]'
              rows={6}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );

    case 'features':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="Section heading..."
            />
          </div>
          <div>
            <Label>Features (JSON format)</Label>
            <Textarea 
              value={JSON.stringify(content.features || [], null, 2)} 
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateContent('features', parsed);
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              placeholder='[{"title": "Feature 1", "description": "Description..."}]'
              rows={6}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );

    case 'testimonials':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="Section heading..."
            />
          </div>
          <div>
            <Label>Testimonials (JSON format)</Label>
            <Textarea 
              value={JSON.stringify(content.testimonials || [], null, 2)} 
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateContent('testimonials', parsed);
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              placeholder='[{"quote": "Great service!", "author": "John Doe", "role": "CEO", "company": "Acme Inc"}]'
              rows={6}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );

    case 'cta':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Headline</Label>
            <Input 
              value={(content.headline as string) || ''} 
              onChange={(e) => updateContent('headline', e.target.value)}
              placeholder="Ready to get started?"
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea 
              value={(content.description as string) || ''} 
              onChange={(e) => updateContent('description', e.target.value)}
              placeholder="Supporting text..."
              rows={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Button Text</Label>
              <Input 
                value={(content.buttonText as string) || ''} 
                onChange={(e) => updateContent('buttonText', e.target.value)}
                placeholder="Contact Us"
              />
            </div>
            <div>
              <Label>Button Link</Label>
              <Input 
                value={(content.buttonLink as string) || ''} 
                onChange={(e) => updateContent('buttonLink', e.target.value)}
                placeholder="/contact"
              />
            </div>
          </div>
        </div>
      );

    case 'faq':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="Frequently Asked Questions"
            />
          </div>
          <div>
            <Label>FAQs (JSON format)</Label>
            <Textarea 
              value={JSON.stringify(content.faqs || [], null, 2)} 
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateContent('faqs', parsed);
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              placeholder='[{"question": "What is...?", "answer": "It is..."}]'
              rows={6}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );

    case 'stats':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="By the numbers..."
            />
          </div>
          <div>
            <Label>Stats (JSON format)</Label>
            <Textarea 
              value={JSON.stringify(content.stats || [], null, 2)} 
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateContent('stats', parsed);
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              placeholder='[{"value": "100+", "label": "Clients"}]'
              rows={4}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );

    case 'gallery':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Heading (optional)</Label>
            <Input 
              value={(content.heading as string) || ''} 
              onChange={(e) => updateContent('heading', e.target.value)}
              placeholder="Gallery"
            />
          </div>
          <div>
            <Label>Images (JSON format)</Label>
            <Textarea 
              value={JSON.stringify(content.images || [], null, 2)} 
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateContent('images', parsed);
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              placeholder='[{"src": "https://...", "alt": "Description"}]'
              rows={6}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );

    case 'video':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Video URL (YouTube or Vimeo)</Label>
            <Input 
              value={(content.url as string) || ''} 
              onChange={(e) => updateContent('url', e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
            />
          </div>
          <div>
            <Label>Title (optional)</Label>
            <Input 
              value={(content.title as string) || ''} 
              onChange={(e) => updateContent('title', e.target.value)}
              placeholder="Video title..."
            />
          </div>
        </div>
      );

    case 'custom':
      return (
        <div className="space-y-4 pt-4">
          <div>
            <Label>Custom HTML/Code</Label>
            <Textarea 
              value={(content.html as string) || ''} 
              onChange={(e) => updateContent('html', e.target.value)}
              placeholder="<div>...</div>"
              rows={8}
              className="font-mono text-sm"
            />
          </div>
        </div>
      );
      
    default:
      return (
        <div className="pt-4 text-center text-muted-foreground">
          <p>Editor for "{section.type}" section coming soon</p>
        </div>
      );
  }
}

export default function PageEditor() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [viewportSize, setViewportSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const viewportWidths = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px'
  };

  useEffect(() => {
    if (id) fetchPage();
  }, [id]);

  // Listen for messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'CMS_SECTION_CLICKED') {
        const sectionId = event.data.sectionId;
        setActiveSectionId(sectionId);
        
        // Open the section in the editor
        if (page) {
          setPage({
            ...page,
            sections: page.sections.map(s => ({
              ...s,
              isOpen: s.id === sectionId
            }))
          });
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [page]);

  // Update iframe when sections change
  useEffect(() => {
    if (iframeRef.current?.contentWindow && page) {
      // Send updated content to iframe
      iframeRef.current.contentWindow.postMessage({
        type: 'CMS_CONTENT_UPDATE',
        sections: page.sections.map(({ isOpen, ...rest }) => rest)
      }, '*');
    }
  }, [page?.sections]);

  const fetchPage = async () => {
    try {
      const { data, error } = await supabase
        .from('page_content')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      // Parse sections from JSONB
      const sections = Array.isArray(data.sections) 
        ? (data.sections as unknown as Section[]).map(s => ({ ...s, isOpen: false }))
        : [];
      
      setPage({ ...data, sections });
    } catch (error) {
      console.error('Error fetching page:', error);
      toast({
        title: "Error",
        description: "Failed to load page",
        variant: "destructive",
      });
      navigate('/admin/page-builder');
    } finally {
      setLoading(false);
    }
  };

  const savePage = async (publish = false) => {
    if (!page) return;
    
    setSaving(true);
    try {
      // Remove isOpen from sections before saving
      const sectionsToSave = page.sections.map(({ isOpen, ...rest }) => rest);
      
      const updateData: Record<string, unknown> = {
        page_title: page.page_title,
        meta_title: page.meta_title,
        meta_description: page.meta_description,
        sections: sectionsToSave as unknown as Json,
        version: page.version + 1,
      };
      
      if (publish) {
        updateData.is_published = true;
        updateData.published_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('page_content')
        .update(updateData)
        .eq('id', page.id);

      if (error) throw error;

      // Save version history
      await supabase.from('page_content_versions').insert({
        page_content_id: page.id,
        version: page.version + 1,
        sections: sectionsToSave as unknown as Json,
        meta_title: page.meta_title,
        meta_description: page.meta_description,
      });

      setPage(prev => prev ? { ...prev, version: prev.version + 1, is_published: publish || prev.is_published } : null);
      setHasChanges(false);
      
      // Refresh iframe to show updated content
      setIframeKey(prev => prev + 1);
      
      toast({
        title: publish ? "Page published" : "Changes saved",
        description: publish ? "Your page is now live" : "Draft saved successfully",
      });
    } catch (error) {
      console.error('Error saving page:', error);
      toast({
        title: "Error",
        description: "Failed to save changes",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const addSection = (type: string) => {
    if (!page) return;
    
    const newSection: Section = {
      id: crypto.randomUUID(),
      type,
      title: sectionTypes.find(s => s.type === type)?.label || type,
      content: {},
      isOpen: true,
    };
    
    setPage({ ...page, sections: [...page.sections, newSection] });
    setHasChanges(true);
    setActiveSectionId(newSection.id);
  };

  const updateSection = (id: string, data: Partial<Section>) => {
    if (!page) return;
    
    setPage({
      ...page,
      sections: page.sections.map(s => s.id === id ? { ...s, ...data } : s)
    });
    setHasChanges(true);
  };

  const deleteSection = (id: string) => {
    if (!page) return;
    
    setPage({
      ...page,
      sections: page.sections.filter(s => s.id !== id)
    });
    setHasChanges(true);
    if (activeSectionId === id) {
      setActiveSectionId(null);
    }
  };

  const toggleSection = (id: string) => {
    if (!page) return;
    
    setPage({
      ...page,
      sections: page.sections.map(s => s.id === id ? { ...s, isOpen: !s.isOpen } : s)
    });
    setActiveSectionId(id);
    
    // Highlight section in iframe
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage({
        type: 'CMS_HIGHLIGHT_SECTION',
        sectionId: id
      }, '*');
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (!page) return;
    
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = page.sections.findIndex(s => s.id === active.id);
      const newIndex = page.sections.findIndex(s => s.id === over.id);
      
      setPage({
        ...page,
        sections: arrayMove(page.sections, oldIndex, newIndex)
      });
      setHasChanges(true);
    }
  };

  const refreshPreview = () => {
    setIframeKey(prev => prev + 1);
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!page) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Page not found</p>
        <Button asChild className="mt-4">
          <Link to="/admin/page-builder">Back to Pages</Link>
        </Button>
      </div>
    );
  }

  // Build the preview URL
  const previewUrl = `/cms-preview?id=${page.id}&t=${iframeKey}`;

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      {/* Header */}
      <div className="border-b bg-card px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/page-builder">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
          <div>
            <h1 className="font-medium">{page.page_title}</h1>
            <p className="text-xs text-muted-foreground">{page.page_path}</p>
          </div>
          {hasChanges && (
            <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
              Unsaved changes
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href={page.page_path} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </a>
          </Button>
          
          <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Page Settings</SheetTitle>
                <SheetDescription>Configure SEO and page metadata</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-6">
                <div>
                  <Label>Page Title</Label>
                  <Input 
                    value={page.page_title} 
                    onChange={(e) => {
                      setPage({ ...page, page_title: e.target.value });
                      setHasChanges(true);
                    }}
                  />
                </div>
                <div>
                  <Label>Meta Title (SEO)</Label>
                  <Input 
                    value={page.meta_title || ''} 
                    onChange={(e) => {
                      setPage({ ...page, meta_title: e.target.value });
                      setHasChanges(true);
                    }}
                    placeholder="Page title for search engines..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {(page.meta_title || '').length}/60 characters
                  </p>
                </div>
                <div>
                  <Label>Meta Description (SEO)</Label>
                  <Textarea 
                    value={page.meta_description || ''} 
                    onChange={(e) => {
                      setPage({ ...page, meta_description: e.target.value });
                      setHasChanges(true);
                    }}
                    placeholder="Brief description for search results..."
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {(page.meta_description || '').length}/160 characters
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Published</Label>
                  <Switch 
                    checked={page.is_published} 
                    onCheckedChange={(checked) => {
                      setPage({ ...page, is_published: checked });
                      setHasChanges(true);
                    }}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => savePage(false)}
            disabled={saving || !hasChanges}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
            Save Draft
          </Button>
          
          <Button 
            size="sm" 
            onClick={() => savePage(true)}
            disabled={saving}
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Globe className="w-4 h-4 mr-2" />}
            Publish
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sections Panel */}
        <div className="w-[400px] border-r overflow-y-auto p-4 bg-muted/30 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Page Sections</h2>
            <Select onValueChange={addSection}>
              <SelectTrigger className="w-[160px]">
                <Plus className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Add section" />
              </SelectTrigger>
              <SelectContent>
                {sectionTypes.map(st => (
                  <SelectItem key={st.type} value={st.type}>
                    <div className="flex items-center gap-2">
                      <st.icon className="w-4 h-4" />
                      {st.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {page.sections.length === 0 ? (
            <Card className="p-8 text-center border-dashed">
              <Layout className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-medium mb-2">No sections yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Add sections to build your page content
              </p>
              <Select onValueChange={addSection}>
                <SelectTrigger className="w-[200px] mx-auto">
                  <Plus className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Add first section" />
                </SelectTrigger>
                <SelectContent>
                  {sectionTypes.map(st => (
                    <SelectItem key={st.type} value={st.type}>
                      <div className="flex items-center gap-2">
                        <st.icon className="w-4 h-4" />
                        {st.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Card>
          ) : (
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={page.sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
                {page.sections.map(section => (
                  <SortableSection
                    key={section.id}
                    section={section}
                    onUpdate={updateSection}
                    onDelete={deleteSection}
                    onToggle={toggleSection}
                    isActive={activeSectionId === section.id}
                  />
                ))}
              </SortableContext>
            </DndContext>
          )}
        </div>

        {/* Preview Panel */}
        <div className="flex-1 overflow-hidden bg-muted/20 flex flex-col">
          <div className="p-3 border-b bg-background flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <h2 className="font-medium text-sm">Live Preview</h2>
              <span className="text-xs text-muted-foreground">
                Click on any section to edit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ToggleGroup type="single" value={viewportSize} onValueChange={(value) => value && setViewportSize(value as typeof viewportSize)}>
                <ToggleGroupItem value="desktop" size="sm" aria-label="Desktop view">
                  <Monitor className="w-4 h-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="tablet" size="sm" aria-label="Tablet view">
                  <Tablet className="w-4 h-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="mobile" size="sm" aria-label="Mobile view">
                  <Smartphone className="w-4 h-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <Button variant="outline" size="sm" onClick={refreshPreview}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-auto flex justify-center">
            <div 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
              style={{ 
                width: viewportWidths[viewportSize],
                maxWidth: '100%',
                height: '100%'
              }}
            >
              <iframe
                ref={iframeRef}
                key={iframeKey}
                src={previewUrl}
                className="w-full h-full border-0"
                title="Page Preview"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
