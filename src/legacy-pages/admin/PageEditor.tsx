"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Loader2, 
  Save, 
  Eye, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  GripVertical, 
  ChevronDown, 
  ChevronUp,
  Settings2,
  Layout,
  Code
} from "lucide-react";
import { CMSSection } from "@/hooks/usePageContent";

export default function PageEditor() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [page, setPage] = useState<any>(null);
  const [sections, setSections] = useState<CMSSection[]>([]);
  const [activeTab, setActiveTab] = useState<'content' | 'settings' | 'json'>('content');
  const [previewKey, setPreviewKey] = useState(0);

  useEffect(() => {
    if (id) fetchPage(id as string);
  }, [id]);

  const fetchPage = async (pageId: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('page_content')
        .select('*')
        .eq('id', pageId)
        .single();

      if (error) throw error;
      setPage(data);
      setSections(Array.isArray(data.sections) ? (data.sections as unknown as CMSSection[]) : []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load page content",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('page_content')
        .update({
          page_title: page.page_title,
          meta_title: page.meta_title,
          meta_description: page.meta_description,
          is_published: page.is_published,
          sections: sections as any,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id as string);

      if (error) throw error;
      toast({ title: "Page Saved" });
      setPreviewKey(prev => prev + 1);
    } catch (error: any) {
      toast({
        title: "Save Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const addSection = (type: string) => {
    const newSection: CMSSection = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      title: `New ${type} section`,
      content: {}
    };
    setSections([...sections, newSection]);
  };

  const deleteSection = (sectionId: string) => {
    setSections(sections.filter(s => s.id !== sectionId));
  };

  const moveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= sections.length) return;
    
    [newSections[index], newSections[newIndex]] = [newSections[newIndex], newSections[index]];
    setSections(newSections);
  };

  const updateSectionContent = (sectionId: string, content: any) => {
    setSections(sections.map(s => s.id === sectionId ? { ...s, content } : s));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-5rem)]">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-card shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-bold truncate max-w-[300px]">{page?.page_title}</h1>
            <p className="text-xs text-muted-foreground">{page?.page_path}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 mr-4 bg-muted px-3 py-1 rounded-full">
            <Switch 
              id="published-toggle" 
              checked={page?.is_published}
              onCheckedChange={(checked) => setPage({ ...page, is_published: checked })}
            />
            <Label htmlFor="published-toggle" className="text-xs font-medium">
              {page?.is_published ? 'Published' : 'Draft'}
            </Label>
          </div>
          <Button variant="outline" size="sm" onClick={() => window.open(page?.page_path, '_blank')}>
            <Eye className="h-4 w-4 mr-2" />
            View Live
          </Button>
          <Button size="sm" onClick={handleSave} disabled={saving}>
            {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
            Save Changes
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Editor Sidebar */}
        <div className="w-[450px] border-r bg-muted/10 overflow-y-auto p-6 space-y-6">
          <div className="flex gap-1 bg-muted p-1 rounded-lg">
            <Button 
              variant={activeTab === 'content' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="flex-1"
              onClick={() => setActiveTab('content')}
            >
              <Layout className="h-4 w-4 mr-2" />
              Content
            </Button>
            <Button 
              variant={activeTab === 'settings' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="flex-1"
              onClick={() => setActiveTab('settings')}
            >
              <Settings2 className="h-4 w-4 mr-2" />
              SEO
            </Button>
            <Button 
              variant={activeTab === 'json' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="flex-1"
              onClick={() => setActiveTab('json')}
            >
              <Code className="h-4 w-4 mr-2" />
              JSON
            </Button>
          </div>

          {activeTab === 'content' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Page Sections</h3>
                <Button size="sm" variant="outline" onClick={() => addSection('hero')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </div>

              <div className="space-y-3">
                {sections.map((section, index) => (
                  <Card key={section.id} className="relative group">
                    <CardHeader className="p-3 pb-0 flex flex-row items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-bold uppercase">{section.type}</span>
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveSection(index, 'up')} disabled={index === 0}>
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => moveSection(index, 'down')} disabled={index === sections.length - 1}>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive" onClick={() => deleteSection(section.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <Textarea 
                        className="text-xs font-mono"
                        placeholder="Content JSON..."
                        rows={5}
                        value={JSON.stringify(section.content, null, 2)}
                        onChange={(e) => {
                          try {
                            const newContent = JSON.parse(e.target.value);
                            updateSectionContent(section.id, newContent);
                          } catch (err) {}
                        }}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="page_title">Page Title</Label>
                <Input 
                  id="page_title" 
                  value={page?.page_title || ""}
                  onChange={(e) => setPage({ ...page, page_title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input 
                  id="meta_title" 
                  value={page?.meta_title || ""}
                  onChange={(e) => setPage({ ...page, meta_title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea 
                  id="meta_description" 
                  value={page?.meta_description || ""}
                  onChange={(e) => setPage({ ...page, meta_description: e.target.value })}
                  rows={4}
                />
              </div>
            </div>
          )}

          {activeTab === 'json' && (
            <div className="h-full">
              <Textarea 
                className="h-[500px] font-mono text-xs"
                value={JSON.stringify(sections, null, 2)}
                onChange={(e) => {
                  try {
                    const newSections = JSON.parse(e.target.value);
                    setSections(newSections);
                  } catch (err) {}
                }}
              />
            </div>
          )}
        </div>

        {/* Preview Pane */}
        <div className="flex-1 bg-muted/30 p-8 overflow-hidden relative">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-background/80 backdrop-blur border rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground shadow-sm">
            Live Preview
          </div>
          <div className="w-full h-full rounded-xl border shadow-2xl bg-white overflow-hidden">
            <iframe 
              key={previewKey}
              src={`${page?.page_path}?cms-edit=true`}
              className="w-full h-full border-none"
              title="Page Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
