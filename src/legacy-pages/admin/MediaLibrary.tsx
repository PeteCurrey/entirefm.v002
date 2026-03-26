"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Loader2, 
  Search, 
  Upload, 
  Trash2, 
  Image as ImageIcon, 
  FileText, 
  ExternalLink,
  X,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface MediaItem {
  id: string;
  file_url: string;
  filename: string;
  original_filename: string | null;
  alt_text: string | null;
  mime_type: string;
  file_size: number | null;
  width: number | null;
  height: number | null;
  created_at: string | null;
  file_path: string | null;
}

export default function MediaLibrary() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('cms_media')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMedia(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load media library",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('cms-media')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('cms-media')
        .getPublicUrl(filePath);

      const { error: insertError } = await supabase
        .from('cms_media')
        .insert({
          file_path: filePath,
          file_url: urlData.publicUrl,
          filename: fileName,
          original_filename: file.name,
          mime_type: file.type,
          file_size: file.size,
        });

      if (insertError) throw insertError;

      toast({ title: "Media Uploaded" });
      fetchMedia();
    } catch (error: any) {
      toast({
        title: "Upload Failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (item: MediaItem) => {
    if (!confirm(`Are you sure you want to delete ${item.original_filename || item.filename}?`)) return;

    try {
      // Delete from storage if it has a file_path
      const { data: record } = await supabase
        .from('cms_media')
        .select('file_path')
        .eq('id', item.id)
        .single();
      
      if (record?.file_path) {
        await supabase.storage.from('cms-media').remove([record.file_path]);
      }

      // Delete from database
      const { error } = await supabase
        .from('cms_media')
        .delete()
        .eq('id', item.id);

      if (error) throw error;

      toast({ title: "Media Deleted" });
      setSelectedItem(null);
      fetchMedia();
    } catch (error: any) {
      toast({
        title: "Delete Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const filteredMedia = media.filter(item => 
    (item.original_filename || item.filename).toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.alt_text?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
          <p className="text-muted-foreground">Upload and manage assets for your CMS pages</p>
        </div>
        <div className="flex gap-2">
          <Input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*,application/pdf"
          />
          <Button asChild disabled={uploading}>
            <label htmlFor="file-upload" className="cursor-pointer">
              {uploading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Upload className="h-4 w-4 mr-2" />}
              Upload Media
            </label>
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search media..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Gallery Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : filteredMedia.length === 0 ? (
            <div className="text-center py-24 border-2 border-dashed rounded-lg bg-muted/30">
              <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-20" />
              <p className="text-lg font-medium">No media found</p>
              <p className="text-muted-foreground">Upload your first asset to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredMedia.map((item) => (
                <Card 
                  key={item.id} 
                  className={cn(
                    "group relative aspect-square cursor-pointer overflow-hidden transition-all hover:ring-2 hover:ring-primary",
                    selectedItem?.id === item.id ? "ring-2 ring-primary" : "border-border"
                  )}
                  onClick={() => setSelectedItem(item)}
                >
                  <CardContent className="p-0 h-full">
                    {item.mime_type.startsWith('image/') ? (
                      <img 
                        src={item.file_url} 
                        alt={item.alt_text || item.filename}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-muted text-muted-foreground">
                        <FileText className="h-10 w-10 mb-2" />
                        <span className="text-[10px] uppercase font-bold">{item.mime_type.split('/')[1]}</span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-[10px] text-white truncate font-medium">
                        {item.original_filename || item.filename}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Info Sidebar */}
        {selectedItem && (
          <div className="w-full lg:w-80 space-y-6 animate-in slide-in-from-right-4 duration-300">
            <Card className="sticky top-24">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">File Details</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => setSelectedItem(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video rounded-md overflow-hidden bg-muted border">
                  {selectedItem.mime_type.startsWith('image/') ? (
                    <img src={selectedItem.file_url} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FileText className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">File Name</Label>
                    <p className="text-sm font-medium break-all">{selectedItem.original_filename || selectedItem.filename}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs text-muted-foreground">Type</Label>
                      <p className="text-sm font-medium uppercase">{selectedItem.mime_type.split('/')[1]}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Size</Label>
                      <p className="text-sm font-medium">{formatFileSize(selectedItem.file_size)}</p>
                    </div>
                  </div>
                  {selectedItem.width && (
                    <div>
                      <Label className="text-xs text-muted-foreground">Dimensions</Label>
                      <p className="text-sm font-medium">{selectedItem.width} x {selectedItem.height} px</p>
                    </div>
                  )}
                  <div>
                    <Label className="text-xs text-muted-foreground">Uploaded On</Label>
                    <p className="text-sm font-medium">
                      {selectedItem.created_at ? format(new Date(selectedItem.created_at), "PPP") : 'Unknown'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href={selectedItem.file_url} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full File
                    </a>
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="w-full justify-start"
                    onClick={() => handleDelete(selectedItem)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Permanently Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
