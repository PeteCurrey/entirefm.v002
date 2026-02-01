import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft,
  Upload,
  Search,
  Image,
  Trash2,
  Copy,
  Check,
  Loader2,
  FolderOpen,
  Grid3X3,
  List,
  Filter,
  X,
  FileImage,
  Download
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface MediaItem {
  id: string;
  filename: string;
  original_filename: string;
  file_path: string;
  file_url: string;
  mime_type: string;
  file_size: number;
  width: number | null;
  height: number | null;
  alt_text: string | null;
  folder: string;
  tags: string[];
  created_at: string;
}

const folders = [
  { value: 'general', label: 'General' },
  { value: 'heroes', label: 'Hero Images' },
  { value: 'services', label: 'Services' },
  { value: 'sectors', label: 'Sectors' },
  { value: 'team', label: 'Team' },
  { value: 'case-studies', label: 'Case Studies' },
  { value: 'icons', label: 'Icons' },
];

export default function MediaLibrary() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [folderFilter, setFolderFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [deleteItem, setDeleteItem] = useState<MediaItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const { data, error } = await supabase
        .from('cms_media')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMedia(data || []);
    } catch (error) {
      console.error('Error fetching media:', error);
      toast({
        title: "Error",
        description: "Failed to load media library",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const uploadedCount = { success: 0, failed: 0 };

    for (const file of Array.from(files)) {
      try {
        // Validate file type
        if (!file.type.startsWith('image/')) {
          uploadedCount.failed++;
          continue;
        }

        // Generate unique filename
        const ext = file.name.split('.').pop();
        const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
        const filePath = `uploads/${filename}`;

        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from('cms-media')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('cms-media')
          .getPublicUrl(filePath);

        // Get image dimensions
        let width = null;
        let height = null;
        if (file.type.startsWith('image/')) {
          const dimensions = await getImageDimensions(file);
          width = dimensions.width;
          height = dimensions.height;
        }

        // Save to database
        const { error: dbError } = await supabase
          .from('cms_media')
          .insert({
            filename,
            original_filename: file.name,
            file_path: filePath,
            file_url: publicUrl,
            mime_type: file.type,
            file_size: file.size,
            width,
            height,
            folder: 'general',
          });

        if (dbError) throw dbError;
        uploadedCount.success++;
      } catch (error) {
        console.error('Upload error:', error);
        uploadedCount.failed++;
      }
    }

    setUploading(false);
    fetchMedia();
    
    toast({
      title: "Upload complete",
      description: `${uploadedCount.success} uploaded, ${uploadedCount.failed} failed`,
    });

    // Reset input
    event.target.value = '';
  };

  const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
        URL.revokeObjectURL(img.src);
      };
      img.onerror = () => {
        resolve({ width: 0, height: 0 });
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('cms-media')
        .remove([deleteItem.file_path]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('cms_media')
        .delete()
        .eq('id', deleteItem.id);

      if (dbError) throw dbError;

      setMedia(prev => prev.filter(m => m.id !== deleteItem.id));
      setDeleteItem(null);
      setSelectedItem(null);
      
      toast({
        title: "Deleted",
        description: "Media file deleted successfully",
      });
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "Error",
        description: "Failed to delete file",
        variant: "destructive",
      });
    }
  };

  const copyUrl = async (url: string, id: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
    toast({
      title: "Copied",
      description: "URL copied to clipboard",
    });
  };

  const updateMedia = async (id: string, updates: Partial<MediaItem>) => {
    try {
      const { error } = await supabase
        .from('cms_media')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      setMedia(prev => prev.map(m => m.id === id ? { ...m, ...updates } : m));
      if (selectedItem?.id === id) {
        setSelectedItem({ ...selectedItem, ...updates });
      }
      
      toast({
        title: "Updated",
        description: "Media details updated",
      });
    } catch (error) {
      console.error('Update error:', error);
      toast({
        title: "Error",
        description: "Failed to update",
        variant: "destructive",
      });
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const filteredMedia = media.filter(item => {
    const matchesSearch = 
      item.original_filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.alt_text || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFolder = folderFilter === 'all' || item.folder === folderFilter;
    return matchesSearch && matchesFolder;
  });

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin/page-builder">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pages
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-light">Media Library</h1>
            <p className="text-muted-foreground">Manage images and media files</p>
          </div>
        </div>
        
        <div>
          <input
            type="file"
            id="file-upload"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
          <Button asChild disabled={uploading}>
            <label htmlFor="file-upload" className="cursor-pointer">
              {uploading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Upload className="w-4 h-4 mr-2" />
              )}
              Upload Images
            </label>
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={folderFilter} onValueChange={setFolderFilter}>
            <SelectTrigger className="w-[150px]">
              <FolderOpen className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Folder" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Folders</SelectItem>
              {folders.map(f => (
                <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "list")}>
            <TabsList>
              <TabsTrigger value="grid"><Grid3X3 className="w-4 h-4" /></TabsTrigger>
              <TabsTrigger value="list"><List className="w-4 h-4" /></TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-2xl font-semibold">{media.length}</div>
          <div className="text-sm text-muted-foreground">Total Files</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-semibold">
            {formatFileSize(media.reduce((acc, m) => acc + m.file_size, 0))}
          </div>
          <div className="text-sm text-muted-foreground">Total Size</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-semibold">{folders.length}</div>
          <div className="text-sm text-muted-foreground">Folders</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-semibold">
            {media.filter(m => new Date(m.created_at) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
          </div>
          <div className="text-sm text-muted-foreground">This Week</div>
        </Card>
      </div>

      {/* Media Grid/List */}
      {filteredMedia.length === 0 ? (
        <Card className="p-12 text-center">
          <FileImage className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="font-medium mb-2">No media files</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Upload images to use in your pages
          </p>
          <Button asChild>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </label>
          </Button>
        </Card>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredMedia.map(item => (
            <Card 
              key={item.id} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square relative bg-muted">
                <img 
                  src={item.file_url} 
                  alt={item.alt_text || item.original_filename}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyUrl(item.file_url, item.id);
                    }}
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <div className="p-2">
                <p className="text-xs truncate">{item.original_filename}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(item.file_size)}</p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <div className="divide-y">
            {filteredMedia.map(item => (
              <div 
                key={item.id} 
                className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="w-16 h-16 rounded overflow-hidden bg-muted flex-shrink-0">
                  <img 
                    src={item.file_url} 
                    alt={item.alt_text || item.original_filename}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{item.original_filename}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(item.file_size)} • {item.width}x{item.height}
                  </p>
                </div>
                <Badge variant="outline">{item.folder}</Badge>
                <span className="text-sm text-muted-foreground">
                  {new Date(item.created_at).toLocaleDateString()}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyUrl(item.file_url, item.id);
                  }}
                >
                  {copiedId === item.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedItem.original_filename}</DialogTitle>
                <DialogDescription>
                  Uploaded {new Date(selectedItem.created_at).toLocaleDateString()}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={selectedItem.file_url} 
                    alt={selectedItem.alt_text || selectedItem.original_filename}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label>Alt Text (SEO)</Label>
                    <Input
                      value={selectedItem.alt_text || ''}
                      onChange={(e) => updateMedia(selectedItem.id, { alt_text: e.target.value })}
                      placeholder="Describe the image..."
                    />
                  </div>
                  
                  <div>
                    <Label>Folder</Label>
                    <Select 
                      value={selectedItem.folder} 
                      onValueChange={(v) => updateMedia(selectedItem.id, { folder: v })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {folders.map(f => (
                          <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>Size:</strong> {formatFileSize(selectedItem.file_size)}</p>
                    <p><strong>Dimensions:</strong> {selectedItem.width}x{selectedItem.height}</p>
                    <p><strong>Type:</strong> {selectedItem.mime_type}</p>
                  </div>
                  
                  <div>
                    <Label>URL</Label>
                    <div className="flex gap-2">
                      <Input value={selectedItem.file_url} readOnly className="text-xs" />
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => copyUrl(selectedItem.file_url, selectedItem.id)}
                      >
                        {copiedId === selectedItem.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" asChild className="flex-1">
                      <a href={selectedItem.file_url} download target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                    <Button 
                      variant="destructive" 
                      onClick={() => setDeleteItem(selectedItem)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteItem} onOpenChange={() => setDeleteItem(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this file?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete "{deleteItem?.original_filename}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
