"use client";

import { useEffect, useState } from 'react';
;
import Link from "next/link";
import { AlertCircle, CheckCircle, Link2, TrendingUp, AlertTriangle, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  validateSiteLinks, 
  type LinkValidationReport, 
  type PageLinkData,
  getMinimumInboundLinks 
} from '@/utils/linkValidation';
import { GSCConnectionButton } from '@/components/gsc/GSCConnectionButton';
import { IndexationTab } from '@/components/gsc/IndexationTab';
import { PerformanceTab } from '@/components/gsc/PerformanceTab';
import { CrawlStatsTab } from '@/components/gsc/CrawlStatsTab';
import { AlertSettings } from '@/components/gsc/AlertSettings';
import { getSearchAnalytics, getCrawlStats } from '@/utils/gscApi';
import { useToast } from '@/hooks/use-toast';

export default function LinkHealthDashboard() {
  const [report, setReport] = useState<LinkValidationReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [gscLoading, setGscLoading] = useState(false);
  const [performanceData, setPerformanceData] = useState<any[]>([]);
  const [crawlStats, setCrawlStats] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const runValidation = async () => {
      setLoading(true);
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500));
      const validationReport = validateSiteLinks();
      setReport(validationReport);
      setLoading(false);
    };

    runValidation();
  }, []);

  const fetchGSCData = async () => {
    setGscLoading(true);
    try {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      
      const [analytics, crawl] = await Promise.all([
        getSearchAnalytics(startDate, endDate),
        getCrawlStats()
      ]);

      if (analytics.rows) {
        const formattedData = analytics.rows.map((row: any) => ({
          url: row.keys[0],
          clicks: row.clicks,
          impressions: row.impressions,
          ctr: (row.clicks / row.impressions) * 100,
          position: row.position,
        }));
        setPerformanceData(formattedData);
      }

      setCrawlStats(crawl);

      toast({
        title: "GSC Data Loaded",
        description: "Search Console data has been fetched successfully",
      });
    } catch (error) {
      console.error('Failed to fetch GSC data:', error);
      toast({
        title: "Failed to Load GSC Data",
        description: "Please ensure you're connected to Google Search Console",
        variant: "destructive",
      });
    } finally {
      setGscLoading(false);
    }
  };

  if (loading || !report) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Analyzing site link structure...</p>
        </div>
      </div>
    );
  }

  const getHealthColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthStatus = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Needs Attention';
    return 'Critical';
  };

  return (
    <>
      

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-light mb-2">Link Health Dashboard</h1>
                <p className="text-muted-foreground">
                  Internal link validation, orphan detection, and conversion optimization analysis
                </p>
              </div>
              <div className="flex items-center gap-3">
                <GSCConnectionButton />
                <Button onClick={fetchGSCData} disabled={gscLoading} variant="outline">
                  {gscLoading ? 'Loading...' : 'Fetch GSC Data'}
                </Button>
              </div>
            </div>
          </div>

          {/* Health Score Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 border-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Health Score</span>
                {report.healthScore >= 90 ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : report.healthScore >= 70 ? (
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
              </div>
              <div className={`text-4xl font-light mb-1 ${getHealthColor(report.healthScore)}`}>
                {report.healthScore}
              </div>
              <div className="text-xs text-muted-foreground">
                {getHealthStatus(report.healthScore)}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Pages</span>
                <Link2 className="w-5 h-5 text-primary" />
              </div>
              <div className="text-4xl font-light mb-1">{report.totalPages}</div>
              <div className="text-xs text-muted-foreground">Site-wide coverage</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Links</span>
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-4xl font-light mb-1">{report.totalLinks}</div>
              <div className="text-xs text-muted-foreground">
                Avg {Math.round(report.totalLinks / report.totalPages)} per page
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Issues Found</span>
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-4xl font-light mb-1">
                {report.orphanPages.length + 
                 report.lowInboundPages.length + 
                 report.missingConversionLinks.length + 
                 report.brokenLinks.length}
              </div>
              <div className="text-xs text-muted-foreground">Requires attention</div>
            </Card>
          </div>

          {/* Issues Tabs */}
          <Tabs defaultValue="orphans" className="space-y-6">
            <TabsList className="grid grid-cols-8 w-full">
              <TabsTrigger value="orphans" className="relative">
                Orphans
                {report.orphanPages.length > 0 && (
                  <Badge variant="destructive" className="ml-2 h-5 px-1.5 text-xs">
                    {report.orphanPages.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="low-inbound">
                Low Inbound
                {report.lowInboundPages.length > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">
                    {report.lowInboundPages.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="conversion">
                Missing CTA
                {report.missingConversionLinks.length > 0 && (
                  <Badge variant="secondary" className="ml-2 h-5 px-1.5 text-xs">
                    {report.missingConversionLinks.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="broken">
                Broken
                {report.brokenLinks.length > 0 && (
                  <Badge variant="destructive" className="ml-2 h-5 px-1.5 text-xs">
                    {report.brokenLinks.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="indexation">
                Indexation
              </TabsTrigger>
              <TabsTrigger value="performance">
                Performance
              </TabsTrigger>
              <TabsTrigger value="crawl-stats">
                Crawl Stats
              </TabsTrigger>
              <TabsTrigger value="alerts">
                Alerts
              </TabsTrigger>
            </TabsList>

            {/* Orphan Pages */}
            <TabsContent value="orphans">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="text-lg font-medium">Orphan Pages</h3>
                    <p className="text-sm text-muted-foreground">
                      Pages with zero inbound links — invisible to users and search engines
                    </p>
                  </div>
                </div>

                {report.orphanPages.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    No orphan pages detected
                  </div>
                ) : (
                  <div className="space-y-3">
                    {report.orphanPages.map((page) => (
                      <PageCard key={page.url} page={page} issue="orphan" />
                    ))}
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* Low Inbound Pages */}
            <TabsContent value="low-inbound">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  <div>
                    <h3 className="text-lg font-medium">Low Inbound Link Count</h3>
                    <p className="text-sm text-muted-foreground">
                      Pages with fewer than 5 inbound links — weak internal link equity
                    </p>
                  </div>
                </div>

                {report.lowInboundPages.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    All pages have sufficient inbound links
                  </div>
                ) : (
                  <div className="space-y-3">
                    {report.lowInboundPages.map((page) => (
                      <PageCard key={page.url} page={page} issue="low-inbound" />
                    ))}
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* Missing Conversion Links */}
            <TabsContent value="conversion">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  <div>
                    <h3 className="text-lg font-medium">Missing Conversion Links</h3>
                    <p className="text-sm text-muted-foreground">
                      Pages without links to /request-proposal or /contact — missed conversion opportunities
                    </p>
                  </div>
                </div>

                {report.missingConversionLinks.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    All pages have conversion links
                  </div>
                ) : (
                  <div className="space-y-3">
                    {report.missingConversionLinks.map((page) => (
                      <PageCard key={page.url} page={page} issue="conversion" />
                    ))}
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* Broken Links */}
            <TabsContent value="broken">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="text-lg font-medium">Broken Internal Links</h3>
                    <p className="text-sm text-muted-foreground">
                      Links pointing to non-existent pages — 404 errors waiting to happen
                    </p>
                  </div>
                </div>

                {report.brokenLinks.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-600" />
                    No broken internal links detected
                  </div>
                ) : (
                  <div className="space-y-3">
                    {report.brokenLinks.map((link, idx) => (
                      <div key={idx} className="p-4 bg-muted/50 rounded-lg border">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="text-sm font-medium mb-1">
                              From: <Link href={link.from} className="text-primary hover:underline">{link.from}</Link>
                            </div>
                            <div className="text-sm text-red-600">
                              Broken link: {link.to}
                            </div>
                          </div>
                          <Badge variant="destructive">{link.type}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* GSC Indexation Tab */}
            <TabsContent value="indexation">
              <IndexationTab 
                data={performanceData.map(p => ({
                  url: p.url,
                  indexed: true,
                  lastCrawled: new Date().toISOString(),
                }))}
                isLoading={gscLoading}
              />
            </TabsContent>

            {/* GSC Performance Tab */}
            <TabsContent value="performance">
              <PerformanceTab 
                data={performanceData}
                isLoading={gscLoading}
              />
            </TabsContent>

            {/* GSC Crawl Stats Tab */}
            <TabsContent value="crawl-stats">
              <CrawlStatsTab 
                data={crawlStats}
                isLoading={gscLoading}
              />
            </TabsContent>

            {/* Alert Settings Tab */}
            <TabsContent value="alerts">
              <AlertSettings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

interface PageCardProps {
  page: PageLinkData;
  issue: 'orphan' | 'low-inbound' | 'conversion';
}

function PageCard({ page, issue }: PageCardProps) {
  return (
    <div className="p-4 bg-muted/50 rounded-lg border hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <Link href={page.url} 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {page.title}
          </Link>
          <div className="text-xs text-muted-foreground mt-1">{page.url}</div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{page.pageType}</Badge>
          {issue === 'orphan' && (
            <Badge variant="destructive">0 inbound</Badge>
          )}
          {issue === 'low-inbound' && (
            <Badge variant="secondary">{page.inboundLinks.length} inbound</Badge>
          )}
          {issue === 'conversion' && (
            <Badge variant="secondary">No CTA</Badge>
          )}
        </div>
      </div>

      {issue === 'low-inbound' && (
        <div className="text-xs text-muted-foreground">
          <strong>Inbound from:</strong> {page.inboundLinks.slice(0, 3).join(', ')}
          {page.inboundLinks.length > 3 && ` +${page.inboundLinks.length - 3} more`}
        </div>
      )}

      {issue === 'conversion' && (
        <div className="mt-3 pt-3 border-t">
          <div className="text-xs text-muted-foreground mb-2">
            <strong>Recommendation:</strong> Add conversion link
          </div>
          <Button asChild size="sm" variant="outline">
            <Link href="/request-proposal">View /request-proposal</Link>
          </Button>
        </div>
      )}

      {issue === 'orphan' && (
        <div className="mt-3 pt-3 border-t">
          <div className="text-xs text-red-600">
            <strong>Action Required:</strong> Add minimum {getMinimumInboundLinks(page.pageType)} inbound links from related pages
          </div>
        </div>
      )}
    </div>
  );
}
