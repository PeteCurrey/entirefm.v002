"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plus, Loader2, Edit, Trash2, GripVertical, Check, X, ImageIcon } from "lucide-react";
import { MediaPicker } from "@/components/cms/MediaPicker";

interface ClientLogo {
  id: string;
  name: string;
  logo_url: string;
  alt_text: string | null;
  display_order: number | null;
  active: boolean | null;
  created_at: string;
}

export default function ClientLogos() {
  const [logos, setLogos] = useState<ClientLogo[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingLogo, setEditingLogo] = useState<Partial<ClientLogo> | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    try {
      const { data, error } = await supabase
        .from('client_logos')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setLogos(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load client logos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddLogo = () => {
    setEditingLogo({
      name: "",
      logo_url: "",
      alt_text: "",
      display_order: logos.length > 0 ? Math.max(...logos.map(l => l.display_order || 0)) + 1 : 0,
      active: true,
    });
    setDialogOpen(true);
  };

  const handleEditLogo = (logo: ClientLogo) => {
    setEditingLogo(logo);
    setDialogOpen(true);
  };

  const handleSaveLogo = async () => {
    if (!editingLogo || !editingLogo.name || !editingLogo.logo_url) {
      toast({
        title: "Validation Error",
        description: "Name and Logo URL are required",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    try {
      if (editingLogo.id) {
        // Update
        const { error } = await supabase
          .from('client_logos')
          .update({
            name: editingLogo.name,
            logo_url: editingLogo.logo_url,
            alt_text: editingLogo.alt_text,
            display_order: editingLogo.display_order,
            active: editingLogo.active,
          })
          .eq('id', editingLogo.id);

        if (error) throw error;
        toast({ title: "Logo Updated" });
      } else {
        // Create
        const { error } = await supabase
          .from('client_logos')
          .insert({
            name: editingLogo.name,
            logo_url: editingLogo.logo_url,
            alt_text: editingLogo.alt_text,
            display_order: editingLogo.display_order,
            active: editingLogo.active,
          });

        if (error) throw error;
        toast({ title: "Logo Created" });
      }

      setDialogOpen(false);
      fetchLogos();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteLogo = async (id: string) => {
    if (!confirm("Are you sure you want to delete this logo?")) return;

    try {
      const { error } = await supabase
        .from('client_logos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Logo Deleted" });
      fetchLogos();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleActive = async (logo: ClientLogo) => {
    try {
      const { error } = await supabase
        .from('client_logos')
        .update({ active: !logo.active })
        .eq('id', logo.id);

      if (error) throw error;
      setLogos(logos.map(l => l.id === logo.id ? { ...l, active: !l.active } : l));
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Client Logos</h1>
          <p className="text-muted-foreground">Manage the logos displayed on the site Trust Bar and home page</p>
        </div>
        <Button onClick={handleAddLogo}>
          <Plus className="h-4 w-4 mr-2" />
          Add Logo
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Order</TableHead>
                <TableHead>Logo</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logos.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No logos found. Add your first client logo.
                  </TableCell>
                </TableRow>
              ) : (
                logos.map((logo) => (
                  <TableRow key={logo.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        {logo.display_order}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-16 h-10 bg-muted rounded flex items-center justify-center overflow-hidden p-1">
                        <img 
                          src={logo.logo_url} 
                          alt={logo.name} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{logo.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Switch 
                          checked={logo.active ?? false} 
                          onCheckedChange={() => toggleActive(logo)} 
                        />
                        <span className="text-sm">
                          {logo.active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditLogo(logo)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteLogo(logo.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{editingLogo?.id ? 'Edit Client Logo' : 'Add New Client Logo'}</DialogTitle>
            <DialogDescription>
              Enter the details for the client logo shown on the public site.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Client Name</Label>
              <Input
                id="name"
                value={editingLogo?.name || ""}
                onChange={(e) => setEditingLogo({ ...editingLogo, name: e.target.value })}
                placeholder="e.g. Amazon"
              />
            </div>
            
            <div className="grid gap-2">
              <Label>Logo Selection</Label>
              <MediaPicker 
                value={editingLogo?.logo_url || ""} 
                onChange={(url) => setEditingLogo({ ...editingLogo, logo_url: url })}
                placeholder="Select or enter logo URL..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="order">Display Order</Label>
                <Input
                  id="order"
                  type="number"
                  value={editingLogo?.display_order || 0}
                  onChange={(e) => setEditingLogo({ ...editingLogo, display_order: parseInt(e.target.value) })}
                />
              </div>
              <div className="flex items-end gap-2 py-2">
                <Label htmlFor="active-toggle" className="flex-1">Active</Label>
                <Switch
                  id="active-toggle"
                  checked={editingLogo?.active || false}
                  onCheckedChange={(checked) => setEditingLogo({ ...editingLogo, active: checked })}
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveLogo} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {editingLogo?.id ? 'Save Changes' : 'Create Logo'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
