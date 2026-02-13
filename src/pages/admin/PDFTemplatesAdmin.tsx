import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { FileText, Pencil, Plus, Trash2, Save, Eye, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import type { Json } from "@/integrations/supabase/types";
import { generatePreviewPDF } from "@/utils/pdfPreviewGenerator";

interface ComplianceItem {
  system: string;
  frequency: string;
  regulation: string;
  scope: string;
}

interface PDFTemplate {
  id: string;
  template_key: string;
  title: string;
  subtitle: string | null;
  company_name: string | null;
  footer_note: string | null;
  items: Json;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function PDFTemplatesAdmin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingTemplate, setEditingTemplate] = useState<PDFTemplate | null>(null);
  const [editingItems, setEditingItems] = useState<ComplianceItem[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);

  const { data: templates, isLoading } = useQuery({
    queryKey: ["pdf-templates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pdf_templates")
        .select("*")
        .order("template_key");
      if (error) throw error;
      return data as PDFTemplate[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (template: Partial<PDFTemplate> & { id: string }) => {
      const { error } = await supabase
        .from("pdf_templates")
        .update({
          title: template.title,
          subtitle: template.subtitle,
          company_name: template.company_name,
          footer_note: template.footer_note,
          items: template.items,
          is_active: template.is_active,
        })
        .eq("id", template.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pdf-templates"] });
      toast({ title: "Template updated", description: "PDF template has been saved successfully." });
      setIsDialogOpen(false);
      setEditingTemplate(null);
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const handleEdit = (template: PDFTemplate) => {
    setEditingTemplate({ ...template });
    // Parse items - handle both checklist and capability pack formats
    const items = Array.isArray(template.items) ? template.items : [];
    setEditingItems(items.filter((item: unknown) => (item as ComplianceItem).system) as unknown as ComplianceItem[]);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!editingTemplate) return;
    
    // For capability pack, preserve the original structure
    const isCapabilityPack = editingTemplate.template_key === "capability-pack";
    const itemsToSave = isCapabilityPack ? editingTemplate.items : editingItems as unknown as Json;
    
    updateMutation.mutate({
      id: editingTemplate.id,
      title: editingTemplate.title,
      subtitle: editingTemplate.subtitle,
      company_name: editingTemplate.company_name,
      footer_note: editingTemplate.footer_note,
      items: itemsToSave,
      is_active: editingTemplate.is_active,
    });
  };

  const handleAddItem = () => {
    setEditingItems([
      ...editingItems,
      { system: "", frequency: "", regulation: "", scope: "" },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setEditingItems(editingItems.filter((_, i) => i !== index));
  };

  const handleItemChange = (index: number, field: keyof ComplianceItem, value: string) => {
    const updated = [...editingItems];
    updated[index] = { ...updated[index], [field]: value };
    setEditingItems(updated);
  };

  const handlePreview = async () => {
    if (!editingTemplate) return;
    
    setIsGeneratingPreview(true);
    try {
      const isCapabilityPack = editingTemplate.template_key === "capability-pack";
      const itemsForPreview = isCapabilityPack ? editingTemplate.items : editingItems;
      
      const blobUrl = await generatePreviewPDF(
        editingTemplate.template_key,
        editingTemplate.title,
        editingTemplate.subtitle,
        editingTemplate.company_name,
        editingTemplate.footer_note,
        itemsForPreview as unknown as ComplianceItem[]
      );
      
      // Clean up previous URL
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      
      setPreviewUrl(blobUrl);
      setIsPreviewOpen(true);
    } catch (error) {
      toast({ 
        title: "Preview Error", 
        description: "Failed to generate PDF preview", 
        variant: "destructive" 
      });
    } finally {
      setIsGeneratingPreview(false);
    }
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  const handleToggleActive = async (template: PDFTemplate) => {
    await updateMutation.mutateAsync({
      ...template,
      is_active: !template.is_active,
    });
  };

  const getTemplateDisplayName = (key: string) => {
    const names: Record<string, string> = {
      "fire-alarm": "🔥 Fire Safety Checklist",
      "emergency-lighting": "💡 Emergency Lighting Checklist",
      "water-hygiene": "💧 Water Hygiene Checklist",
      "hvac": "❄️ HVAC Checklist",
      "electrical": "⚡ Electrical Checklist",
      "eicr-manual": "⚡ EICR Survival Manual",
      "capability-pack": "📋 Capability Pack",
    };
    return names[key] || key;
  };

  const isChecklistTemplate = (template: PDFTemplate) => {
    return template.template_key !== "capability-pack";
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">PDF Templates</h1>
          <p className="text-muted-foreground">
            Manage downloadable compliance checklists and capability pack content
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Available Templates
          </CardTitle>
          <CardDescription>
            Click edit to modify template content. Changes apply immediately to all downloads.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates?.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="font-medium">
                    {getTemplateDisplayName(template.template_key)}
                  </TableCell>
                  <TableCell>{template.title}</TableCell>
                  <TableCell>
                    {isChecklistTemplate(template)
                      ? `${(Array.isArray(template.items) ? template.items : []).length} items`
                      : "Custom content"}
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={template.is_active}
                      onCheckedChange={() => handleToggleActive(template)}
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(template.updated_at).toLocaleDateString("en-GB")}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(template)}
                    >
                      <Pencil className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Edit {editingTemplate && getTemplateDisplayName(editingTemplate.template_key)}
            </DialogTitle>
            <DialogDescription>
              Modify the PDF content. Changes will apply to all future downloads.
            </DialogDescription>
          </DialogHeader>

          {editingTemplate && (
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input
                    value={editingTemplate.title}
                    onChange={(e) =>
                      setEditingTemplate({ ...editingTemplate, title: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input
                    value={editingTemplate.company_name || ""}
                    onChange={(e) =>
                      setEditingTemplate({ ...editingTemplate, company_name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input
                  value={editingTemplate.subtitle || ""}
                  onChange={(e) =>
                    setEditingTemplate({ ...editingTemplate, subtitle: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Footer Note</Label>
                <Textarea
                  value={editingTemplate.footer_note || ""}
                  onChange={(e) =>
                    setEditingTemplate({ ...editingTemplate, footer_note: e.target.value })
                  }
                  rows={2}
                />
              </div>

              {/* Items Table for Checklists */}
              {isChecklistTemplate(editingTemplate) && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base font-semibold">Checklist Items</Label>
                    <Button variant="outline" size="sm" onClick={handleAddItem}>
                      <Plus className="h-4 w-4 mr-1" />
                      Add Item
                    </Button>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[180px]">System</TableHead>
                          <TableHead className="w-[100px]">Frequency</TableHead>
                          <TableHead className="w-[100px]">Regulation</TableHead>
                          <TableHead>Scope</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {editingItems.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Input
                                value={item.system}
                                onChange={(e) =>
                                  handleItemChange(index, "system", e.target.value)
                                }
                                className="h-8"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={item.frequency}
                                onChange={(e) =>
                                  handleItemChange(index, "frequency", e.target.value)
                                }
                                className="h-8"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={item.regulation}
                                onChange={(e) =>
                                  handleItemChange(index, "regulation", e.target.value)
                                }
                                className="h-8"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                value={item.scope}
                                onChange={(e) =>
                                  handleItemChange(index, "scope", e.target.value)
                                }
                                className="h-8"
                              />
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-destructive hover:text-destructive"
                                onClick={() => handleRemoveItem(index)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              )}

              {/* Capability Pack Custom Editor */}
              {!isChecklistTemplate(editingTemplate) && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Capability Pack Content</Label>
                  <p className="text-sm text-muted-foreground">
                    The capability pack uses a custom format. Edit the JSON structure below.
                  </p>
                  <Textarea
                    value={JSON.stringify(editingTemplate.items, null, 2)}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value);
                        setEditingTemplate({ ...editingTemplate, items: parsed });
                      } catch {
                        // Allow invalid JSON while typing
                      }
                    }}
                    rows={15}
                    className="font-mono text-sm"
                  />
                </div>
              )}
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="secondary" 
              onClick={handlePreview} 
              disabled={isGeneratingPreview}
            >
              <Eye className="h-4 w-4 mr-1" />
              {isGeneratingPreview ? "Generating..." : "Preview PDF"}
            </Button>
            <Button onClick={handleSave} disabled={updateMutation.isPending}>
              <Save className="h-4 w-4 mr-1" />
              {updateMutation.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* PDF Preview Modal */}
      <Dialog open={isPreviewOpen} onOpenChange={closePreview}>
        <DialogContent className="max-w-5xl h-[90vh] p-0">
          <DialogHeader className="p-4 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                PDF Preview
              </DialogTitle>
              <Button variant="ghost" size="icon" onClick={closePreview}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription>
              Preview of how the PDF will appear when downloaded
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 p-4 pt-2 h-full">
            {previewUrl && (
              <iframe
                src={previewUrl}
                className="w-full h-[calc(90vh-120px)] border rounded-lg"
                title="PDF Preview"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
