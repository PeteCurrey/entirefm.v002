import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Globe, FileText, AlertCircle } from 'lucide-react';

interface Sitemap {
  path: string;
  type?: string;
  lastSubmitted?: string;
  lastDownloaded?: string;
  errors?: number;
  warnings?: number;
}

interface CrawlStatsData {
  sitemap?: Sitemap[];
}

interface CrawlStatsTabProps {
  data: CrawlStatsData | null;
  isLoading: boolean;
}

export const CrawlStatsTab = ({ data, isLoading }: CrawlStatsTabProps) => {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const sitemaps = data?.sitemap || [];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Sitemaps Overview
          </CardTitle>
          <CardDescription>
            Submitted sitemaps and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sitemaps.length > 0 ? (
            <div className="space-y-4">
              {sitemaps.map((sitemap, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-2 flex-1">
                      <FileText className="w-4 h-4 mt-0.5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{sitemap.path}</p>
                        {sitemap.type && (
                          <Badge variant="outline" className="mt-1">
                            {sitemap.type}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {sitemap.errors && sitemap.errors > 0 && (
                        <Badge variant="destructive" className="gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {sitemap.errors} errors
                        </Badge>
                      )}
                      {sitemap.warnings && sitemap.warnings > 0 && (
                        <Badge variant="outline" className="gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {sitemap.warnings} warnings
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {sitemap.lastSubmitted && (
                      <div>
                        <span className="text-muted-foreground">Last Submitted:</span>
                        <span className="ml-2 font-medium">
                          {new Date(sitemap.lastSubmitted).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    {sitemap.lastDownloaded && (
                      <div>
                        <span className="text-muted-foreground">Last Downloaded:</span>
                        <span className="ml-2 font-medium">
                          {new Date(sitemap.lastDownloaded).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No sitemaps found</p>
              <p className="text-sm mt-1">Submit a sitemap to Google Search Console</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Crawl Recommendations</CardTitle>
          <CardDescription>
            Tips to improve Google's crawling of your site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
            <AlertCircle className="w-4 h-4 mt-0.5 text-muted-foreground" />
            <div className="text-sm">
              <p className="font-medium">Submit your sitemap</p>
              <p className="text-muted-foreground">Ensure all important pages are included in your sitemap</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
            <AlertCircle className="w-4 h-4 mt-0.5 text-muted-foreground" />
            <div className="text-sm">
              <p className="font-medium">Fix crawl errors</p>
              <p className="text-muted-foreground">Address any errors shown in your sitemaps</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
            <AlertCircle className="w-4 h-4 mt-0.5 text-muted-foreground" />
            <div className="text-sm">
              <p className="font-medium">Keep sitemaps updated</p>
              <p className="text-muted-foreground">Regularly update sitemaps when content changes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};