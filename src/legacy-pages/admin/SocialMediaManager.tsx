"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Send, Calendar, Linkedin, Twitter, Facebook } from "lucide-react";
import { format } from "date-fns";

export default function SocialMediaManager() {
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [topic, setTopic] = useState("");
  const [generatedPosts, setGeneratedPosts] = useState<any>(null);

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    const { data } = await supabase.from('social_posts').select('*').order('created_at', { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  const handleGenerate = async () => {
    if (!topic) return;
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { type: 'social', topic }
      });
      if (error) throw error;
      setGeneratedPosts(data?.content);
      toast({ title: "Generated!", description: "Social posts created" });
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const handleSchedule = async (platform: string, text: string, scheduledFor?: string) => {
    try {
      await supabase.from('social_posts').insert({
        platform, post_text: text,
        status: scheduledFor ? 'scheduled' : 'draft',
        scheduled_for: scheduledFor || null
      });
      toast({ title: "Saved", description: `${platform} post saved` });
      fetchPosts();
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    }
  };

  const getPlatformIcon = (p: string) => {
    switch(p) { case 'linkedin': return <Linkedin className="h-4 w-4" />; case 'twitter': return <Twitter className="h-4 w-4" />; default: return <Facebook className="h-4 w-4" />; }
  };

  if (loading) return <div className="p-6 flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Social Media Manager</h1>
      
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader><CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5" />AI Post Generator</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input placeholder="Topic for social posts..." value={topic} onChange={(e) => setTopic(e.target.value)} />
            <Button onClick={handleGenerate} disabled={generating}>
              {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            </Button>
          </div>
          {generatedPosts && (
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {['linkedin', 'twitter', 'facebook'].map(platform => (
                <Card key={platform}>
                  <CardHeader className="pb-2"><CardTitle className="text-sm flex items-center gap-2">{getPlatformIcon(platform)} {platform}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{generatedPosts[platform]?.post_text}</p>
                    <Button size="sm" onClick={() => handleSchedule(platform, generatedPosts[platform]?.post_text)}>Save Draft</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Recent Posts</CardTitle></CardHeader>
        <CardContent>
          {posts.length === 0 ? <p className="text-muted-foreground text-center py-8">No posts yet</p> : (
            <div className="space-y-3">
              {posts.slice(0, 10).map(post => (
                <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getPlatformIcon(post.platform)}
                    <div>
                      <p className="text-sm line-clamp-1">{post.post_text}</p>
                      <p className="text-xs text-muted-foreground">{format(new Date(post.created_at), 'MMM d, HH:mm')}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{post.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
