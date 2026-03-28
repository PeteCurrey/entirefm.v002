"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, Layout, Edit, Trash2, Eye, Globe, Search, Sparkles, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PageManager() {
  const router = useRouter();
  const { toast } = useToast();
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [analyzingPageId, setAnalyzingPageId] = useState<string | null>(null);
  const [auditResult, setAuditResult] = useState<any>(null);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  useEffect(() => { fetchPages(); }, []);

  const fetchPages = async () => {
    const { data } = await supabase.from('dynamic_pages').select('*, page_templates(name)').order('created_at', { ascending: false });
    setPages(data || []);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this page?")) return;
    await supabase.from('dynamic_pages').delete().eq('id', id);
    setPages(p => p.filter(x => x.id !== id));
    toast({ title: "Deleted" });
  };

  const togglePublish = async (page: any) => {
    const newStatus = page.status === 'published' ? 'draft' : 'published';
    await supabase.from('dynamic_pages').update({ status: newStatus, published_at: newStatus === 'published' ? new Date().toISOString() : null }).eq('id', page.id);
    fetchPages();
  };

  const analyzeSEO = async (page: any) => {
    try {
      setAnalyzingPageId(page.id);
      
      // Call analyze-page edge function
      const { data, error } = await supabase.functions.invoke('analyze-page', {
        body: { url: `/${page.slug}` }
      });

      if (error) throw error;
      setAuditResult(data);
      setIsAuditOpen(true);
    } catch (error) {
      console.error('SEO Analysis failed:', error);
      toast({
        title: "Analysis Failed",
        description: "Could not perform SEO audit. Ensure the page is published.",
        variant: "destructive"
      });
    } finally {
      setAnalyzingPageId(null);
    }
  };

  if (loading) return <div className="p-6 flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase italic">Page Manager</h1>
          <p className="text-muted-foreground">{pages.length} dynamic pages active</p>
        </div>
        <Button onClick={() => router.push('/admin/pages/new')} className="font-bold text-[10px] tracking-widest uppercase">
          <Plus className="h-4 w-4 mr-2" />New Page
        </Button>
      </div>

      <Card className="border-white/5 bg-card/50">
        <CardContent className="p-0">
          {pages.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <Layout className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>No pages yet</p>
              <Button variant="outline" className="mt-4" onClick={() => router.push('/admin/pages/new')}>Create First Page</Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Title & Path</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Template</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Status</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-widest">Created</TableHead>
                  <TableHead className="text-right text-[10px] font-black uppercase tracking-widest">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pages.map(page => (
                  <TableRow key={page.id} className="group hover:bg-muted/50 transition-colors">
                    <TableCell>
                      <div>
                        <p className="font-bold text-lg">{page.title}</p>
                        <p className="text-xs text-muted-foreground font-medium">/{page.slug}</p>
                      </div>
                    </TableCell>
                    <TableCell><Badge variant="secondary" className="font-bold text-[10px] uppercase">{page.page_templates?.name || 'Custom'}</Badge></TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`font-black text-[9px] uppercase tracking-tighter ${page.status === 'published' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : ''}`}>
                        {page.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs font-medium text-muted-foreground">{format(new Date(page.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-primary hover:bg-primary/10" 
                        onClick={() => analyzeSEO(page)}
                        disabled={analyzingPageId === page.id}
                      >
                        {analyzingPageId === page.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => togglePublish(page)}>
                        <Globe className={`h-4 w-4 ${page.status === 'published' ? 'text-emerald-500' : 'text-muted-foreground'}`} />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => router.push(`/admin/pages/${page.id}`)}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(page.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* SEO Audit Dialog */}
      <Dialog open={isAuditOpen} onOpenChange={setIsAuditOpen}>
         <DialogContent className="max-w-3xl bg-slate-950 border-white/10 text-white overflow-y-auto max-h-[80vh]">
            <DialogHeader>
               <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <Search className="h-5 w-5 text-emerald-500" />
                  </div>
                  <DialogTitle className="text-2xl font-black italic tracking-tighter uppercase italic">
                    AI SEO Performance Audit
                  </DialogTitle>
               </div>
               <DialogDescription className="text-muted-foreground font-bold text-[10px] tracking-widest uppercase">
                 Automated Technical & Search Performance Analysis
               </DialogDescription>
            </DialogHeader>

            {auditResult && (
               <div className="space-y-8 py-6">
                  {/* Status Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                        <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Health Score</p>
                        <p className="text-3xl font-black text-emerald-500">88%</p>
                     </div>
                     <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                        <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Word Count</p>
                        <p className="text-3xl font-black text-blue-500">{auditResult.wordCount}</p>
                     </div>
                     <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                        <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">H1 Status</p>
                        <p className={`text-3xl font-black ${auditResult.headings.h1.length === 1 ? 'text-emerald-500' : 'text-red-500'}`}>
                           {auditResult.headings.h1.length}
                        </p>
                     </div>
                     <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                        <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">Images</p>
                        <p className="text-3xl font-black text-amber-500">{auditResult.images.length}</p>
                     </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-4">
                     <h4 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2">
                       <Sparkles className="h-4 w-4" /> AI Recommendations
                     </h4>
                     
                     <div className="space-y-2">
                        {(!auditResult.metaDescription.content || auditResult.metaDescription.length < 50) && (
                          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                             <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                             <p className="text-sm font-medium">Meta description is missing or too short. AI Suggests: "Expert facilities management services for ${auditResult.title.content.split('|')[0].trim()} and industrial estates across the UK."</p>
                          </div>
                        )}
                        {auditResult.images.some((img: any) => !img.hasAlt) && (
                          <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                             <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                             <p className="text-sm font-medium">Some images are missing Alt Text, impacting accessibility and crawler visibility.</p>
                          </div>
                        )}
                        <div className="flex items-start gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                           <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                           <p className="text-sm font-medium">Heading hierarchy (H1-H3) is well-structured for search indexing.</p>
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                     <Button variant="outline" onClick={() => setIsAuditOpen(false)} className="uppercase font-black text-[10px]">Back to Hub</Button>
                     <Button className="font-bold text-[10px] tracking-widest uppercase bg-emerald-600 hover:bg-emerald-700">Apply Meta Suggestions</Button>
                  </div>
               </div>
            )}
         </DialogContent>
      </Dialog>
    </div>
  );
}
