import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, Download, Image as ImageIcon } from "lucide-react";

export default function AIMediaStudio() {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("featured");
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) { toast({ title: "Error", description: "Enter a prompt", variant: "destructive" }); return; }
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt, type, aspect_ratio: type === 'social' ? '1:1' : '16:9' }
      });
      if (error) throw error;
      setGeneratedImage(data?.image_url);
      toast({ title: "Generated!", description: "Image created successfully" });
    } catch (e: any) {
      toast({ title: "Error", description: e.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">AI Media Studio</h1>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5" />Generate Image</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Image Type</Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured Image (16:9)</SelectItem>
                  <SelectItem value="social">Social Media (1:1)</SelectItem>
                  <SelectItem value="thumbnail">Thumbnail</SelectItem>
                  <SelectItem value="infographic">Infographic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Prompt</Label>
              <Input placeholder="Describe the image you want..." value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            </div>
            <Button onClick={handleGenerate} disabled={generating} className="w-full">
              {generating ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
              Generate Image
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Preview</CardTitle></CardHeader>
          <CardContent>
            {generatedImage ? (
              <div className="space-y-4">
                <img src={generatedImage} alt="Generated" className="w-full rounded-lg" />
                <Button variant="outline" className="w-full" asChild>
                  <a href={generatedImage} download="generated-image.png"><Download className="h-4 w-4 mr-2" />Download</a>
                </Button>
              </div>
            ) : (
              <div className="border-2 border-dashed rounded-lg p-16 text-center text-muted-foreground">
                <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p>Generated image will appear here</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
