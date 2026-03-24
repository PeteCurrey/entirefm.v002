"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link2, AlertTriangle, CheckCircle2, RefreshCw, Clock, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LinkValidationResult {
  id: string;
  created_at: string;
  total_links_checked: number;
  broken_links: number;
  health_score: number;
  results_data: any; // JSON type from database
  scan_duration_ms: number | null;
}

export const LinkHealthDashboard = () => {
  const [latestResult, setLatestResult] = useState<LinkValidationResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    fetchLatestResult();
  }, []);

  const fetchLatestResult = async () => {
    try {
      const { data, error } = await supabase
        .from('link_validation_results')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code !== 'PGRST116') { // Not found is ok
          throw error;
        }
      } else {
        setLatestResult(data);
      }
    } catch (error) {
      console.error('Error fetching link validation:', error);
    } finally {
      setLoading(false);
    }
  };

  const runLinkCheck = async () => {
    setScanning(true);
    try {
      toast({
        title: "Link Check Started",
        description: "Scanning all site links... This may take a few minutes.",
      });

      const { data, error } = await supabase.functions.invoke('link-checker');

      if (error) throw error;

      toast({
        title: "Scan Complete",
        description: `Found ${data.brokenLinks} broken links out of ${data.totalChecked} checked.`,
      });

      await fetchLatestResult();
    } catch (error) {
      console.error('Error running link check:', error);
      toast({
        title: "Scan Failed",
        description: "Failed to complete link validation scan.",
        variant: "destructive",
      });
    } finally {
      setScanning(false);
    }
  };

  if (loading) {
    return <Card className="p-6"><p className="text-muted-foreground">Loading...</p></Card>;
  }

  const getHealthColor = (score: number) => {
    if (score >= 95) return "text-green-600";
    if (score >= 85) return "text-yellow-600";
    return "text-red-600";
  };

  const lastScan = latestResult ? new Date(latestResult.created_at) : null;
  const timeSinceScan = lastScan 
    ? `${Math.floor((Date.now() - lastScan.getTime()) / (1000 * 60 * 60))}h ago`
    : 'Never';

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Link2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Link Health Monitor</h2>
              <p className="text-sm text-muted-foreground">
                Automated validation of all internal links
              </p>
            </div>
          </div>
          <Button 
            onClick={runLinkCheck} 
            disabled={scanning}
            size="lg"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${scanning ? 'animate-spin' : ''}`} />
            {scanning ? 'Scanning...' : 'Run Scan Now'}
          </Button>
        </div>

        {latestResult ? (
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="p-4 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Health Score</span>
              </div>
              <p className={`text-3xl font-bold ${getHealthColor(latestResult.health_score)}`}>
                {latestResult.health_score}%
              </p>
            </Card>

            <Card className="p-4 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <Link2 className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Links Checked</span>
              </div>
              <p className="text-3xl font-bold">{latestResult.total_links_checked}</p>
            </Card>

            <Card className="p-4 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Broken Links</span>
              </div>
              <p className="text-3xl font-bold text-destructive">
                {latestResult.broken_links}
              </p>
            </Card>

            <Card className="p-4 bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Last Scan</span>
              </div>
              <p className="text-xl font-bold">{timeSinceScan}</p>
            </Card>
          </div>
        ) : (
          <Card className="p-8 text-center bg-muted">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No link validation data available</p>
            <Button onClick={runLinkCheck} disabled={scanning}>
              Run First Scan
            </Button>
          </Card>
        )}
      </Card>

      {latestResult && latestResult.broken_links > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Broken Links ({latestResult.broken_links})
          </h3>
          <ScrollArea className="h-[400px]">
            <div className="space-y-2">
              {latestResult.results_data.brokenLinks.map((link: any, idx: number) => (
                <Card key={idx} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="destructive">{link.status === 0 ? 'ERROR' : link.status}</Badge>
                    <code className="text-sm">{link.url}</code>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </Card>
      )}
    </div>
  );
};
