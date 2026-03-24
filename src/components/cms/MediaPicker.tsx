"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Upload, Link as LinkIcon, Search, Loader2, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface MediaItem {
  id: string;
  file_url: string;
  filename: string;
  alt_text: string | null;
  mime_type: string;
  width: number | null;
  height: number | null;
}

interface MediaPickerProps {
  value?: string;
  onChange: (url: string) => void;
  label?: string;
  placeholder?: string;
  showPreview?: boolean;
}

export function MediaPicker({ value, onChange, label, placeholder, showPreview = true }: MediaPickerProps) {
  const [open, setOpen] = useState(false);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [urlInput, setUrlInput] = useState(value || "");
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (open) {
      fetchMedia();
    }
  }, [open]);

  useEffect(() => {
    setUrlInput(value || "");
  }, [value]);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cms_media')
        .select('id, file_url, filename, alt_text, mime_type, width, height')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setMediaItems(data || []);
    } catch (error) {
      console.error('Error fetching media:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (url: string) => {
    onChange(url);
    setOpen(false);
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      setOpen(false);
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

      // Insert into cms_media table
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

      onChange(urlData.publicUrl);
      setOpen(false);
      toast({
        title: "Image uploaded",
        description: "Your image has been uploaded and selected.",
      });
    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const filteredMedia = mediaItems.filter(item => 
    item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.alt_text?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      
      <div className="flex gap-2">
        <Input 
          value={value || ""} 
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Enter image URL or select from library..."}
          className="flex-1"
        />
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Image className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
            <DialogHeader>
              <DialogTitle>Select Media</DialogTitle>
              <DialogDescription>Choose from your library, upload new, or enter a URL</DialogDescription>
            </DialogHeader>
            
            <Tabs defaultValue="library" className="flex-1 overflow-hidden flex flex-col">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="library">
                  <Image className="w-4 h-4 mr-2" />
                  Library
                </TabsTrigger>
                <TabsTrigger value="upload">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </TabsTrigger>
                <TabsTrigger value="url">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  URL
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="library" className="flex-1 overflow-hidden flex flex-col mt-4">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search media..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                    </div>
                  ) : filteredMedia.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Image className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No media found</p>
                      <p className="text-sm">Upload some images or enter a URL</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-3">
                      {filteredMedia.map(item => (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item.file_url)}
                          className={cn(
                            "relative aspect-square rounded-lg overflow-hidden border-2 transition-all hover:border-primary group",
                            value === item.file_url ? "border-primary ring-2 ring-primary/20" : "border-border"
                          )}
                        >
                          <img 
                            src={item.file_url} 
                            alt={item.alt_text || item.filename}
                            className="w-full h-full object-cover"
                          />
                          {value === item.file_url && (
                            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                              <Check className="w-8 h-8 text-primary" />
                            </div>
                          )}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-xs text-white truncate">{item.filename}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="upload" className="mt-4">
                <div className="border-2 border-dashed rounded-lg p-12 text-center">
                  {uploading ? (
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                      <p className="text-muted-foreground">Uploading...</p>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-lg font-medium mb-2">Drop your image here</p>
                      <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="media-upload"
                      />
                      <Button asChild>
                        <label htmlFor="media-upload" className="cursor-pointer">
                          Choose File
                        </label>
                      </Button>
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="url" className="mt-4">
                <div className="space-y-4">
                  <div>
                    <Label>Image URL</Label>
                    <Input 
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  {urlInput && (
                    <div className="aspect-video rounded-lg overflow-hidden border bg-muted">
                      <img 
                        src={urlInput}
                        alt="Preview"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <Button onClick={handleUrlSubmit} disabled={!urlInput.trim()}>
                    Use This URL
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      
      {showPreview && value && (
        <div className="relative mt-2 rounded-lg overflow-hidden border bg-muted aspect-video max-w-xs">
          <img 
            src={value}
            alt="Selected"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 w-6 h-6"
            onClick={() => onChange("")}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      )}
    </div>
  );
}
