"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Layout, 
  Grid, 
  FileCode, 
  Image as ImageIcon, 
  Settings2,
  ChevronRight,
  Sparkles,
  Loader2,
  Box,
  Layers,
  MousePointer2
} from "lucide-react";

export default function PageBuilder() {
  const router = useRouter();
  const [stats, setStats] = useState({ pages: 0, templates: 0, media: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [{ count: pageCount }, { count: templateCount }, { count: mediaCount }] = await Promise.all([
        supabase.from('dynamic_pages').select('id', { count: 'exact', head: true }),
        supabase.from('page_templates').select('id', { count: 'exact', head: true }),
        supabase.from('media_assets').select('id', { count: 'exact', head: true })
      ]);

      setStats({
        pages: pageCount || 0,
        templates: templateCount || 0,
        media: mediaCount || 0
      });
    } catch (error) {
      console.error('Error fetching builder stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const ToolCard = ({ icon: Icon, title, description, count, action, path }: any) => (
    <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-white/5 bg-card/50" onClick={() => router.push(path)}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <Badge variant="outline" className="font-black text-[10px] tracking-widest uppercase">{count} Items</Badge>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
         <Button variant="ghost" className="w-full justify-between font-bold text-[10px] tracking-widest uppercase p-0 group-hover:text-primary">
           {action} <ChevronRight className="h-4 w-4" />
         </Button>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
            Visual Experience Builder
          </h1>
          <p className="text-muted-foreground">Manage templates, sections, and global building blocks.</p>
        </div>
        <div className="flex gap-3">
           <Button className="font-bold text-[10px] tracking-widest uppercase gap-2" onClick={() => router.push('/admin/pages/new')}>
              <Plus className="h-4 w-4" /> New Dynamic Page
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ToolCard 
          icon={Grid}
          title="Component Hub"
          description="Global UI blocks and landing page sections for entire site building."
          count={12}
          action="Manage Components"
          path="/admin/pages"
        />
        <ToolCard 
          icon={FileCode}
          title="Page Templates"
          description="Pre-configured layouts for case studies, insights, and service pages."
          count={stats.templates}
          action="Edit Templates"
          path="/admin/pages"
        />
        <ToolCard 
          icon={ImageIcon}
          title="Media Library"
          description="Centralized asset management with automated image optimization."
          count={stats.media}
          action="Browse Media"
          path="/admin/page-builder/media"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         <Card className="border-primary/20 bg-primary/5 overflow-hidden">
            <CardHeader className="pb-2">
               <div className="flex items-center gap-2 text-primary mb-2">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Experimental</span>
               </div>
               <CardTitle className="text-2xl font-bold">AI Layout Generator</CardTitle>
               <CardDescription>
                  Describe a page type and our AI will suggest the optimal component structure and content flow.
               </CardDescription>
            </CardHeader>
            <CardContent>
               <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-dashed border-primary/30 flex flex-col items-center justify-center text-center py-8">
                  <MousePointer2 className="h-8 w-8 text-primary/40 mb-3" />
                  <p className="text-sm font-medium text-muted-foreground mb-4">Select a target industry to begin generation</p>
                  <Button disabled className="font-bold text-[10px] tracking-widest uppercase opacity-50">
                     Initialize AI Build
                  </Button>
               </div>
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <CardTitle className="text-xl font-bold">Recent Updates</CardTitle>
               <CardDescription>Last modified pages and components</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg group hover:bg-muted transition-colors">
                       <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                             <Layout className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                             <p className="text-sm font-bold">Dynamic Service Page</p>
                             <p className="text-[10px] uppercase text-muted-foreground font-bold">Last edited 2h ago</p>
                          </div>
                       </div>
                       <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Settings2 className="h-4 w-4" />
                       </Button>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
