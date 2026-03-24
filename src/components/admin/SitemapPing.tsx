"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { RefreshCw, CheckCircle2, XCircle } from "lucide-react";

export const SitemapPing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastPing, setLastPing] = useState<{
    timestamp: string;
    google: string;
    bing: string;
  } | null>(null);

  const handlePingSitemap = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ping-sitemap');
      
      if (error) throw error;
      
      if (data.success) {
        setLastPing({
          timestamp: data.details.timestamp,
          google: data.details.google,
          bing: data.details.bing,
        });
        toast.success('Sitemap ping successful', {
          description: data.message,
        });
      } else {
        toast.error('Sitemap ping failed', {
          description: data.error,
        });
      }
    } catch (error) {
      console.error('Error pinging sitemap:', error);
      toast.error('Failed to ping sitemap', {
        description: (error as Error).message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sitemap Notifications</CardTitle>
        <CardDescription>
          Notify Google and Bing when your sitemap has been updated. This helps search engines discover new or changed pages faster.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Button
            onClick={handlePingSitemap}
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Notifying...' : 'Ping Sitemap'}
          </Button>
          <span className="text-sm text-muted-foreground">
            Sitemap: https://entirefm.com/sitemap.xml
          </span>
        </div>

        {lastPing && (
          <div className="p-4 bg-muted/50 rounded-lg space-y-2">
            <div className="text-sm font-medium">Last Ping Results</div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                {lastPing.google === 'success' ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <span>Google: {lastPing.google}</span>
              </div>
              <div className="flex items-center gap-2">
                {lastPing.bing === 'success' ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <span>Bing: {lastPing.bing}</span>
              </div>
              <div className="text-muted-foreground">
                {new Date(lastPing.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
        )}

        <div className="text-sm text-muted-foreground space-y-1">
          <p className="font-medium">How it works:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Notifies Google and Bing via their public ping endpoints</li>
            <li>No API keys or authentication required</li>
            <li>Search engines will recrawl your sitemap within hours</li>
            <li>Use after adding new pages or updating content</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
