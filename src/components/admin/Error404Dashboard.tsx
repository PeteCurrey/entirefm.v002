"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { AlertCircle, TrendingUp, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Error404Log {
  url_requested: string;
  count: number;
  last_seen: string;
  referrer: string | null;
}

export const Error404Dashboard = () => {
  const [errors, setErrors] = useState<Error404Log[]>([]);
  const [stats, setStats] = useState({
    total24h: 0,
    total7d: 0,
    uniqueUrls: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchErrors();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('404-errors')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'error_404_logs'
        },
        () => {
          fetchErrors();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchErrors = async () => {
    try {
      // Get grouped 404 errors
      const { data: errorsData, error: errorsError } = await supabase
        .from('error_404_logs')
        .select('url_requested, referrer, created_at')
        .order('created_at', { ascending: false })
        .limit(1000);

      if (errorsError) throw errorsError;

      // Group by URL and count
      const grouped = new Map<string, Error404Log>();
      errorsData?.forEach(log => {
        const existing = grouped.get(log.url_requested);
        if (existing) {
          existing.count++;
          if (new Date(log.created_at) > new Date(existing.last_seen)) {
            existing.last_seen = log.created_at;
            existing.referrer = log.referrer;
          }
        } else {
          grouped.set(log.url_requested, {
            url_requested: log.url_requested,
            count: 1,
            last_seen: log.created_at,
            referrer: log.referrer,
          });
        }
      });

      const sortedErrors = Array.from(grouped.values())
        .sort((a, b) => b.count - a.count);

      setErrors(sortedErrors);

      // Calculate stats
      const now = Date.now();
      const day24h = now - 24 * 60 * 60 * 1000;
      const day7d = now - 7 * 24 * 60 * 60 * 1000;

      const total24h = errorsData?.filter(
        e => new Date(e.created_at).getTime() > day24h
      ).length || 0;

      const total7d = errorsData?.filter(
        e => new Date(e.created_at).getTime() > day7d
      ).length || 0;

      setStats({
        total24h,
        total7d,
        uniqueUrls: sortedErrors.length,
      });

    } catch (error) {
      console.error('Error fetching 404 logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTimeAgo = (timestamp: string) => {
    const diff = Date.now() - new Date(timestamp).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  if (loading) {
    return <Card className="p-6"><p className="text-muted-foreground">Loading...</p></Card>;
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-destructive/10 rounded-lg">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">404 Error Tracking</h2>
            <p className="text-sm text-muted-foreground">
              Real-time monitoring of broken links and missing pages
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 bg-muted">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Last 24 Hours</span>
            </div>
            <p className="text-3xl font-bold text-destructive">{stats.total24h}</p>
          </Card>

          <Card className="p-4 bg-muted">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Last 7 Days</span>
            </div>
            <p className="text-3xl font-bold">{stats.total7d}</p>
          </Card>

          <Card className="p-4 bg-muted">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Unique URLs</span>
            </div>
            <p className="text-3xl font-bold">{stats.uniqueUrls}</p>
          </Card>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Most Frequent 404 Errors</h3>
        {errors.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No 404 errors recorded yet</p>
          </div>
        ) : (
          <ScrollArea className="h-[500px]">
            <div className="space-y-2">
              {errors.map((error, idx) => (
                <Card key={idx} className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="destructive">{error.count}×</Badge>
                        <code className="text-sm font-mono break-all">
                          {error.url_requested}
                        </code>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>Last seen: {getTimeAgo(error.last_seen)}</p>
                        {error.referrer && (
                          <p className="flex items-center gap-1">
                            Referrer: 
                            <code className="text-xs break-all">{error.referrer}</code>
                          </p>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={error.url_requested} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </Card>
    </div>
  );
};
