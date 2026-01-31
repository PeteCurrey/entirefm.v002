import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Upload, Trash2, GripVertical, Plus, Image as ImageIcon } from "lucide-react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ClientLogo {
  id: string;
  name: string;
  logo_url: string;
  alt_text: string | null;
  display_order: number;
  active: boolean;
  created_at: string;
}

interface SortableLogoItemProps {
  logo: ClientLogo;
  onToggleActive: (id: string, active: boolean) => void;
  onDelete: (logo: ClientLogo) => void;
}

const SortableLogoItem = ({ logo, onToggleActive, onDelete }: SortableLogoItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: logo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors ${
        isDragging ? "shadow-lg ring-2 ring-primary" : ""
      }`}
    >
      <button
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing touch-none"
        aria-label="Drag to reorder"
      >
        <GripVertical className="h-5 w-5 text-muted-foreground" />
      </button>

      <div className="w-32 h-16 bg-white rounded border flex items-center justify-center p-2">
        <img
          src={logo.logo_url}
          alt={logo.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <p className="font-medium">{logo.name}</p>
        <p className="text-xs text-muted-foreground">
          Order: {logo.display_order}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Label htmlFor={`active-${logo.id}`} className="text-sm text-muted-foreground">
          Active
        </Label>
        <Switch
          id={`active-${logo.id}`}
          checked={logo.active}
          onCheckedChange={(checked) => onToggleActive(logo.id, checked)}
        />
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
        onClick={() => {
          if (confirm("Are you sure you want to delete this logo?")) {
            onDelete(logo);
          }
        }}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default function ClientLogos() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newLogoName, setNewLogoName] = useState("");
  const [newLogoAltText, setNewLogoAltText] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { data: logos, isLoading } = useQuery({
    queryKey: ["client-logos-admin"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("client_logos")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data as ClientLogo[];
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async ({ file, name, altText }: { file: File; name: string; altText: string }) => {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("client-logos")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from("client-logos").getPublicUrl(fileName);

      const maxOrder =
        logos?.reduce((max, logo) => Math.max(max, logo.display_order), 0) ?? 0;

      const { error: insertError } = await supabase.from("client_logos").insert({
        name,
        logo_url: publicUrl,
        alt_text: altText || `${name} company logo`,
        display_order: maxOrder + 1,
        active: true,
      });

      if (insertError) throw insertError;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-logos-admin"] });
      toast({ title: "Logo uploaded successfully" });
      setNewLogoName("");
      setNewLogoAltText("");
      setSelectedFile(null);
      setPreviewUrl(null);
    },
    onError: (error: Error) => {
      toast({
        title: "Error uploading logo",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const toggleActiveMutation = useMutation({
    mutationFn: async ({ id, active }: { id: string; active: boolean }) => {
      const { error } = await supabase
        .from("client_logos")
        .update({ active })
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-logos-admin"] });
    },
  });

  const reorderMutation = useMutation({
    mutationFn: async (reorderedLogos: { id: string; display_order: number }[]) => {
      const updates = reorderedLogos.map(({ id, display_order }) =>
        supabase.from("client_logos").update({ display_order }).eq("id", id)
      );
      
      const results = await Promise.all(updates);
      const errors = results.filter((r) => r.error);
      if (errors.length > 0) {
        throw new Error("Failed to update order");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-logos-admin"] });
      toast({ title: "Order updated successfully" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error updating order",
        description: error.message,
        variant: "destructive",
      });
      // Refetch to reset to server state
      queryClient.invalidateQueries({ queryKey: ["client-logos-admin"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (logo: ClientLogo) => {
      // Extract filename from URL
      const urlParts = logo.logo_url.split("/");
      const fileName = urlParts[urlParts.length - 1];

      // Delete from storage
      await supabase.storage.from("client-logos").remove([fileName]);

      // Delete from database
      const { error } = await supabase
        .from("client_logos")
        .delete()
        .eq("id", logo.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["client-logos-admin"] });
      toast({ title: "Logo deleted successfully" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error deleting logo",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      if (!newLogoName) {
        setNewLogoName(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !newLogoName) {
      toast({
        title: "Please select a file and enter a name",
        variant: "destructive",
      });
      return;
    }
    setUploading(true);
    await uploadMutation.mutateAsync({ file: selectedFile, name: newLogoName, altText: newLogoAltText });
    setUploading(false);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id && logos) {
      const oldIndex = logos.findIndex((logo) => logo.id === active.id);
      const newIndex = logos.findIndex((logo) => logo.id === over.id);

      const reorderedLogos = arrayMove(logos, oldIndex, newIndex);
      
      // Optimistically update the UI
      queryClient.setQueryData(["client-logos-admin"], reorderedLogos);

      // Update the database with new order
      const updates = reorderedLogos.map((logo, index) => ({
        id: logo.id,
        display_order: index + 1,
      }));

      reorderMutation.mutate(updates);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Client Logos</h1>
        <p className="text-muted-foreground">
          Manage the client logos displayed in the "Trusted by" section on the
          homepage. Drag and drop to reorder.
        </p>
      </div>

      {/* Upload New Logo */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Logo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Preview */}
            <div className="flex-shrink-0">
              <div className="w-40 h-24 border-2 border-dashed border-muted-foreground/25 rounded-lg flex items-center justify-center bg-muted/50 overflow-hidden">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain p-2"
                  />
                ) : (
                  <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
                )}
              </div>
            </div>

            {/* Form */}
            <div className="flex-1 space-y-4">
              <div>
                <Label htmlFor="logo-file">Logo Image</Label>
                <Input
                  id="logo-file"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Recommended: PNG or SVG with transparent background, max
                  200x100px
                </p>
              </div>

              <div>
                <Label htmlFor="logo-name">Client Name</Label>
                <Input
                  id="logo-name"
                  value={newLogoName}
                  onChange={(e) => setNewLogoName(e.target.value)}
                  placeholder="e.g., Acme Corporation"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="logo-alt-text">Alt Text (SEO)</Label>
                <Input
                  id="logo-alt-text"
                  value={newLogoAltText}
                  onChange={(e) => setNewLogoAltText(e.target.value)}
                  placeholder="e.g., Acme Corporation logistics partner logo"
                  className="mt-1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Descriptive text for accessibility & SEO. Auto-generated if left blank.
                </p>
              </div>

              <Button onClick={handleUpload} disabled={uploading || !selectedFile}>
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? "Uploading..." : "Upload Logo"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing Logos */}
      <Card>
        <CardHeader>
          <CardTitle>Current Logos</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">
              Loading...
            </div>
          ) : logos?.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No logos uploaded yet. Add your first client logo above.
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={logos?.map((logo) => logo.id) ?? []}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-3">
                  {logos?.map((logo) => (
                    <SortableLogoItem
                      key={logo.id}
                      logo={logo}
                      onToggleActive={(id, active) =>
                        toggleActiveMutation.mutate({ id, active })
                      }
                      onDelete={(logo) => deleteMutation.mutate(logo)}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
