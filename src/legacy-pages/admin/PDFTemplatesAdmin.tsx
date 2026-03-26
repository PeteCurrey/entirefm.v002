"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  Loader2, 
  Plus, 
  Edit, 
  Trash2, 
  FileText,
  Save,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface PDFTemplate {
  id: string;
  template_key: string;
  title: string;
  subtitle: string | null;
  footer_note: string | null;
  company_name: string | null;
  is_active: boolean | null;
  items: any;
  created_at: string | null;
  updated_at: string | null;
}

export default function PDFTemplatesAdmin() {
  const [templates, setTemplates] = useState<PDFTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<Partial<PDFTemplate> | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('pdf_templates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load PDF templates",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (template: PDFTemplate) => {
    setEditingTemplate(template);
    setDialogOpen(true);
  };

  const handleAddNew = () => {
    setEditingTemplate({
      template_key: '',
      title: '',
      subtitle: '',
      footer_note: '',
      company_name: 'EntireFM',
      is_active: true,
      items: []
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!editingTemplate?.template_key || !editingTemplate?.title) {
      toast({ title: "Validation Error", description: "Key and Title are required", variant: "destructive" });
      return;
    }

    setSaving(true);
    try {
      const payload: any = {
        template_key: editingTemplate.template_key,
        title: editingTemplate.title,
        subtitle: editingTemplate.subtitle,
        footer_note: editingTemplate.footer_note,
        company_name: editingTemplate.company_name,
        is_active: editingTemplate.is_active,
        items: editingTemplate.items,
        updated_at: new Date().toISOString()
      };

      let error;
      if (editingTemplate.id) {
        ({ error } = await supabase
          .from('pdf_templates')
          .update(payload)
          .eq('id', editingTemplate.id));
      } else {
        ({ error } = await supabase
          .from('pdf_templates')
          .insert([payload]));
      }

      if (error) throw error;

      toast({ title: editingTemplate.id ? "Template Updated" : "Template Created" });
      setDialogOpen(false);
      fetchTemplates();
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

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this template?")) return;

    try {
      const { error } = await supabase
        .from('pdf_templates')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Template Deleted" });
      fetchTemplates();
    } catch (error: any) {
      toast({
        title: "Delete Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleActive = async (template: PDFTemplate) => {
    try {
      const { error } = await supabase
        .from('pdf_templates')
        .update({ is_active: !template.is_active })
        .eq('id', template.id);

      if (error) throw error;
      fetchTemplates();
    } catch (error: any) {
      toast({ title: "Update Failed", variant: "destructive" });
    }
  };

  if (loading) {
    return <div className="p-12 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PDF Templates</h1>
          <p className="text-muted-foreground">Manage dynamic PDF exports for proposals and reports</p>
        </div>
        <Button onClick={handleAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Template Name</TableHead>
                <TableHead>Key</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                    No templates found.
                  </TableCell>
                </TableRow>
              ) : (
                templates.map((template) => (
                  <TableRow key={template.id}>
                    <TableCell>
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </TableCell>
                    <TableCell className="font-medium">
                      {template.title}
                      <p className="text-xs text-muted-foreground font-normal">{template.subtitle}</p>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{template.template_key}</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch 
                          checked={template.is_active || false} 
                          onCheckedChange={() => toggleActive(template)}
                        />
                        {template.is_active ? (
                          <span className="text-xs text-green-600 font-medium">Active</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">Inactive</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">
                      {template.updated_at ? new Date(template.updated_at).toLocaleDateString() : 'N/A'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(template)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(template.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingTemplate?.id ? 'Edit Template' : 'Create New Template'}</DialogTitle>
            <DialogDescription>Define the structure and content for your PDF export.</DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="key">Template Key (unique identifier)</Label>
                <Input 
                  id="key" 
                  value={editingTemplate?.template_key || ''} 
                  onChange={(e) => setEditingTemplate({ ...editingTemplate!, template_key: e.target.value })}
                  placeholder="e.g. standard-proposal"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Main Title</Label>
                <Input 
                  id="title" 
                  value={editingTemplate?.title || ''} 
                  onChange={(e) => setEditingTemplate({ ...editingTemplate!, title: e.target.value })}
                  placeholder="e.g. Service Proposal"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subtitle">Subtitle</Label>
              <Input 
                id="subtitle" 
                value={editingTemplate?.subtitle || ''} 
                onChange={(e) => setEditingTemplate({ ...editingTemplate!, subtitle: e.target.value })}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="footer">Footer Note</Label>
              <Textarea 
                id="footer" 
                value={editingTemplate?.footer_note || ''} 
                onChange={(e) => setEditingTemplate({ ...editingTemplate!, footer_note: e.target.value })}
                rows={2}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="items">Template Structure (JSON Items)</Label>
              <Textarea 
                id="items" 
                className="font-mono text-xs"
                value={typeof editingTemplate?.items === 'string' ? editingTemplate.items : JSON.stringify(editingTemplate?.items || [], null, 2)} 
                onChange={(e) => {
                  try {
                    const json = JSON.parse(e.target.value);
                    setEditingTemplate({ ...editingTemplate!, items: json });
                  } catch (err) {
                    // Allow typing invalid JSON temporarily
                    setEditingTemplate({ ...editingTemplate!, items: e.target.value });
                  }
                }}
                rows={8}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
              Save Template
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
