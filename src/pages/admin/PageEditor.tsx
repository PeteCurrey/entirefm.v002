import { useState, useEffect, useCallback } from "react";
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
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ExternalLink
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

function SortableSection({ section, onUpdate, onDelete, onToggle }: { 
  section: Section; 
  onUpdate: (id: string, data: Partial<Section>) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
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
        <Card className="border-border/50">
          <div className="p-4 flex items-center gap-3">
            <button {...attributes} {...listeners} className="cursor-grab hover:text-primary">
              <GripVertical className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="w-4 h-4 text-primary" />
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
  
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  useEffect(() => {
    if (id) fetchPage();
  }, [id]);

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
  };

  const toggleSection = (id: string) => {
    if (!page) return;
    
    setPage({
      ...page,
      sections: page.sections.map(s => s.id === id ? { ...s, isOpen: !s.isOpen } : s)
    });
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

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col">
      {/* Header */}
      <div className="border-b bg-card px-4 py-3 flex items-center justify-between">
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
        <div className="w-1/2 border-r overflow-y-auto p-4 bg-muted/30">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Page Sections</h2>
            <Select onValueChange={addSection}>
              <SelectTrigger className="w-[180px]">
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
                  />
                ))}
              </SortableContext>
            </DndContext>
          )}
        </div>

        {/* Preview Panel */}
        <div className="w-1/2 overflow-y-auto bg-background">
          <div className="p-4 border-b bg-muted/30 flex items-center justify-between">
            <h2 className="font-medium">Live Preview</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowPreview(!showPreview)}
            >
              <Eye className="w-4 h-4 mr-2" />
              {showPreview ? 'Hide' : 'Show'} Preview
            </Button>
          </div>
          
          {showPreview && (
            <div className="p-4">
              <Card className="overflow-hidden">
                <div className="bg-muted/50 px-4 py-2 border-b flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground flex-1 text-center">
                    {page.page_path}
                  </span>
                </div>
                
                <div className="min-h-[400px] p-4">
                  {page.sections.length === 0 ? (
                    <div className="text-center text-muted-foreground py-12">
                      <p>Add sections to see preview</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {page.sections.map(section => (
                        <PreviewSection key={section.id} section={section} />
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PreviewSection({ section }: { section: Section }) {
  const content = section.content || {};
  
  switch (section.type) {
    case 'hero':
      return (
        <div 
          className="relative bg-charcoal text-white p-8 rounded-lg min-h-[200px] flex items-center"
          style={{ 
            backgroundImage: content.backgroundImage ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${content.backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div>
            <h1 className="text-2xl font-light mb-2">{(content.headline as string) || 'Hero Headline'}</h1>
            <p className="text-white/80 mb-4">{(content.subtitle as string) || 'Add a subtitle...'}</p>
            {content.ctaText && (
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm">
                {content.ctaText as string}
              </button>
            )}
          </div>
        </div>
      );
      
    case 'text':
      return (
        <div className="prose prose-sm max-w-none">
          {content.heading && <h2 className="text-xl font-medium mb-2">{content.heading as string}</h2>}
          <p className="text-muted-foreground whitespace-pre-wrap">
            {(content.body as string) || 'Add text content...'}
          </p>
        </div>
      );
      
    case 'image':
      return (
        <div className="text-center">
          {content.src ? (
            <img 
              src={content.src as string} 
              alt={(content.alt as string) || ''} 
              className="max-w-full h-auto rounded-lg mx-auto"
            />
          ) : (
            <div className="bg-muted h-32 rounded-lg flex items-center justify-center">
              <Image className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
          {content.caption && (
            <p className="text-sm text-muted-foreground mt-2">{content.caption as string}</p>
          )}
        </div>
      );
      
    case 'cta':
      return (
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
          <h3 className="text-xl font-medium mb-2">{(content.headline as string) || 'Call to Action'}</h3>
          <p className="text-muted-foreground mb-4">{(content.description as string) || 'Add description...'}</p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded">
            {(content.buttonText as string) || 'Button'}
          </button>
        </div>
      );
      
    case 'stats':
      const stats = (content.stats as Array<{value: string; label: string}>) || [];
      return (
        <div>
          {content.heading && <h3 className="text-xl font-medium mb-4 text-center">{content.heading as string}</h3>}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.length > 0 ? stats.map((stat, i) => (
              <div key={i} className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )) : (
              <div className="col-span-4 text-center text-muted-foreground py-4">
                Add stats data...
              </div>
            )}
          </div>
        </div>
      );

    case 'video':
      return (
        <div>
          {content.title && <h3 className="text-lg font-medium mb-2">{content.title as string}</h3>}
          {content.url ? (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Video className="w-12 h-12 text-muted-foreground" />
              <span className="ml-2 text-sm text-muted-foreground">Video: {content.url as string}</span>
            </div>
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <Video className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
        </div>
      );
      
    default:
      return (
        <div className="bg-muted/50 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground">
            {section.title || section.type} section
          </p>
        </div>
      );
  }
}
