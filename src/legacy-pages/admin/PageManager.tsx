"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, Layout, Edit, Trash2, Eye, Globe } from "lucide-react";
import { format } from "date-fns";

export default function PageManager() {
  const router = useRouter();
  const { toast } = useToast();
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="p-6 flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Page Manager</h1>
          <p className="text-muted-foreground">{pages.length} dynamic pages</p>
        </div>
        <Button onClick={() => router.push('/admin/pages/new')}><Plus className="h-4 w-4 mr-2" />New Page</Button>
      </div>

      <Card>
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
                  <TableHead>Title</TableHead>
                  <TableHead>Template</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pages.map(page => (
                  <TableRow key={page.id}>
                    <TableCell>
                      <div><p className="font-medium">{page.title}</p><p className="text-sm text-muted-foreground">/{page.slug}</p></div>
                    </TableCell>
                    <TableCell><Badge variant="secondary">{page.page_templates?.name || 'Custom'}</Badge></TableCell>
                    <TableCell>
                      <Badge variant="outline" className={page.status === 'published' ? 'bg-green-500/10 text-green-500' : ''}>{page.status}</Badge>
                    </TableCell>
                    <TableCell>{format(new Date(page.created_at), 'MMM d, yyyy')}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => togglePublish(page)}>
                        <Globe className={`h-4 w-4 ${page.status === 'published' ? 'text-green-500' : ''}`} />
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
    </div>
  );
}
