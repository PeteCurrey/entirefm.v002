"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Save, 
  Sparkles, 
  Eye,
  Calendar,
  Send,
  Loader2,
  FileText,
  Search,
  RefreshCw,
  Image as ImageIcon
} from "lucide-react";
import { format } from "date-fns";

interface ContentItem {
  id?: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  category: string;
  status: string | null;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string[];
  featured_image: string | null;
  scheduled_for: string | null;
}

const defaultContent: ContentItem = {
  title: "",
  slug: "",
  content: "",
  excerpt: "",
  category: "fm-insights",
  status: "draft",
  meta_title: "",
  meta_description: "",
  keywords: [],
  featured_image: "",
  scheduled_for: null
};

export default function ContentEditor() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const { toast } = useToast();
  const [content, setContent] = useState<ContentItem>(defaultContent);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  const isEditing = id && id !== 'new';

  useEffect(() => {
    if (isEditing) {
      fetchContent();
    }
  }, [id]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('content_items')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setContent({
          ...data,
          keywords: data.keywords || [],
          scheduled_for: data.scheduled_for || null
        });
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      toast({ title: "Error", description: "Failed to load content", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setContent(prev => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : generateSlug(title)
    }));
  };

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !content.keywords.includes(keywordInput.trim())) {
      setContent(prev => ({
        ...prev,
        keywords: [...prev.keywords, keywordInput.trim()]
      }));
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setContent(prev => ({
      ...prev,
      keywords: prev.keywords.filter(k => k !== keyword)
    }));
  };

  const handleSave = async (status?: string) => {
    if (!content.title || !content.slug) {
      toast({ title: "Error", description: "Title and slug are required", variant: "destructive" });
      return;
    }

    setSaving(true);
    try {
      const saveData = {
        ...content,
        status: status || content.status,
        updated_at: new Date().toISOString()
      };

      if (isEditing) {
        const { error } = await supabase
          .from('content_items')
          .update(saveData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from('content_items')
          .insert(saveData)
          .select()
          .single();
        if (error) throw error;
        if (data) {
          router.replace(`/admin/marketing/content/${data.id}`);
        }
      }

      toast({ title: "Saved", description: "Content saved successfully" });
    } catch (error: any) {
      console.error("Error saving content:", error);
      toast({ title: "Error", description: error.message || "Failed to save content", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleGenerateContent = async () => {
    if (!aiPrompt.trim()) {
      toast({ title: "Error", description: "Please enter a topic", variant: "destructive" });
      return;
    }

    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: {
          type: content.category === 'blog' ? 'blog' : 'fm-insights',
          topic: aiPrompt,
          keywords: content.keywords.length > 0 ? content.keywords : undefined,
          category: content.category
        }
      });

      if (error) throw error;

      if (data?.content) {
        const generated = data.content;
        setContent(prev => ({
          ...prev,
          title: generated.title || prev.title,
          content: generated.content || prev.content,
          excerpt: generated.excerpt || prev.excerpt,
          meta_title: generated.meta_title || prev.meta_title,
          meta_description: generated.meta_description || prev.meta_description,
          keywords: generated.suggested_keywords || prev.keywords,
          slug: prev.slug || generateSlug(generated.title || '')
        }));
        toast({ title: "Generated!", description: "AI content has been generated" });
      }
    } catch (error: any) {
      console.error("Error generating content:", error);
      toast({ title: "Error", description: error.message || "Failed to generate content", variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!content.title) {
      toast({ title: "Error", description: "Please add a title first", variant: "destructive" });
      return;
    }

    setGeneratingImage(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: {
          prompt: `Featured image for article: ${content.title}. ${content.excerpt || ''}`,
          type: 'featured',
          aspect_ratio: '16:9',
          content_item_id: content.id
        }
      });

      if (error) throw error;

      if (data?.image_url) {
        setContent(prev => ({
          ...prev,
          featured_image: data.image_url
        }));
        toast({ title: "Generated!", description: "Featured image has been generated" });
      }
    } catch (error: any) {
      console.error("Error generating image:", error);
      toast({ title: "Error", description: error.message || "Failed to generate image", variant: "destructive" });
    } finally {
      setGeneratingImage(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/admin/marketing/content')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">
              {isEditing ? 'Edit Content' : 'New Content'}
            </h1>
            <p className="text-sm text-muted-foreground">
              {content.status === 'draft' ? 'Draft' : content.status}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => handleSave()} disabled={saving}>
            {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
            Save Draft
          </Button>
          <Button onClick={() => handleSave('published')} disabled={saving}>
            {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Send className="h-4 w-4 mr-2" />}
            Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Generation */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="h-5 w-5 text-primary" />
                AI Content Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter a topic, e.g., 'Fire safety compliance in 2024'"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerateContent()}
                />
                <Button onClick={handleGenerateContent} disabled={generating}>
                  {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Title & Slug */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter title..."
                  value={content.title || ''}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="text-lg"
                />
              </div>
              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  placeholder="url-slug"
                  value={content.slug || ''}
                  onChange={(e) => setContent(prev => ({ ...prev, slug: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief summary..."
                  value={content.excerpt || ''}
                  onChange={(e) => setContent(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Content */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your content here... (Markdown supported)"
                value={content.content || ''}
                onChange={(e) => setContent(prev => ({ ...prev, content: e.target.value }))}
                rows={20}
                className="font-mono"
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Category</Label>
                <Select
                  value={content.category}
                  onValueChange={(value) => setContent(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fm-insights">FM Insights</SelectItem>
                    <SelectItem value="blog">Blog</SelectItem>
                    <SelectItem value="case-study">Case Study</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Status</Label>
                <Select
                  value={content.status || undefined}
                  onValueChange={(value) => setContent(prev => ({ ...prev, status: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="review">In Review</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {content.status === 'scheduled' && (
                <div>
                  <Label>Schedule For</Label>
                  <Input
                    type="datetime-local"
                    value={content.scheduled_for ? format(new Date(content.scheduled_for), "yyyy-MM-dd'T'HH:mm") : ''}
                    onChange={(e) => setContent(prev => ({ 
                      ...prev, 
                      scheduled_for: e.target.value ? new Date(e.target.value).toISOString() : null 
                    }))}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Featured Image */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Featured Image
                </span>
                <Button size="sm" variant="outline" onClick={handleGenerateImage} disabled={generatingImage}>
                  {generatingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {content.featured_image ? (
                <div className="space-y-2">
                  <img src={(content.featured_image as any).src || content.featured_image} 
                    alt="Featured" 
                    className="w-full rounded-lg object-cover aspect-video"
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setContent(prev => ({ ...prev, featured_image: '' }))}
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground">
                  <ImageIcon className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No image set</p>
                  <p className="text-xs mt-1">Click ✨ to generate with AI</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* SEO */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                SEO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Meta Title</Label>
                <Input
                  placeholder="SEO title (max 60 chars)"
                  value={content.meta_title || ''}
                  onChange={(e) => setContent(prev => ({ ...prev, meta_title: e.target.value }))}
                  maxLength={60}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {(content.meta_title || '').length}/60 characters
                </p>
              </div>
              <div>
                <Label>Meta Description</Label>
                <Textarea
                  placeholder="SEO description (max 160 chars)"
                  value={content.meta_description || ''}
                  onChange={(e) => setContent(prev => ({ ...prev, meta_description: e.target.value }))}
                  maxLength={160}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {(content.meta_description || '').length}/160 characters
                </p>
              </div>
              <div>
                <Label>Keywords</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Add keyword..."
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddKeyword())}
                  />
                  <Button size="sm" onClick={handleAddKeyword}>Add</Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {content.keywords.map((keyword) => (
                    <Badge 
                      key={keyword} 
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => handleRemoveKeyword(keyword)}
                    >
                      {keyword} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
