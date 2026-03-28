"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, FileText, Tag, BarChart3, CheckCircle, AlertTriangle, XCircle, Loader2, Link2, RefreshCw, Globe, Users, Lightbulb, Zap, TrendingUp, Sparkles } from "lucide-react";
import { auditPage, getLinkHealthReport, SITE_PAGES_CATALOG, PageAuditResult, AuditCategory } from "@/utils/realPageAudit";
import { LinkValidationReport } from "@/utils/linkValidation";

interface KeywordResult {
  word: string;
  count: number;
  density: number;
}

const SEOTools = () => {
  // Page Audit state
  const [selectedPage, setSelectedPage] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [auditResults, setAuditResults] = useState<AuditCategory[]>([]);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditScore, setAuditScore] = useState<number | null>(null);
  const [auditError, setAuditError] = useState<string | null>(null);
  const [pageAnalysis, setPageAnalysis] = useState<PageAuditResult | null>(null);

  // Meta Analyzer state
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  // Keyword Density state
  const [contentText, setContentText] = useState("");
  const [keywordResults, setKeywordResults] = useState<KeywordResult[]>([]);
  const [targetKeyword, setTargetKeyword] = useState("");

  // Link Health state
  const [linkReport, setLinkReport] = useState<LinkValidationReport | null>(null);
  const [linkLoading, setLinkLoading] = useState(false);

  // AI Consultant state
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [competitorInput, setCompetitorInput] = useState("");
  const [keywordListInput, setKeywordListInput] = useState("");

  const runPageAudit = async () => {
    const urlToAudit = selectedPage || customUrl;
    if (!urlToAudit) return;
    
    setAuditLoading(true);
    setAuditError(null);
    setAuditResults([]);
    setAuditScore(null);
    
    try {
      const result = await auditPage(urlToAudit);
      
      if (result.error) {
        setAuditError(result.error);
      } else {
        setAuditResults(result.categories);
        setAuditScore(result.score);
        setPageAnalysis(result);
      }
    } catch (err) {
      setAuditError('Failed to run audit. Please try again.');
      console.error('Audit error:', err);
    }
    
    setAuditLoading(false);
  };

  const runLinkHealthCheck = () => {
    setLinkLoading(true);
    // Small delay to show loading state
    setTimeout(() => {
      const report = getLinkHealthReport();
      setLinkReport(report);
      setLinkLoading(false);
    }, 500);
  };

  const getAIInsight = async (type: 'competitor-analysis' | 'keyword-strategy' | 'site-audit-insights', data: any) => {
    setAiLoading(true);
    setAiInsight(null);
    try {
      const response = await fetch('/api/seo/audit-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, data })
      });
      
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      setAiInsight(result.insight);
    } catch (err: any) {
      console.error('AI error:', err);
      setAiInsight(`Error: ${err.message}`);
    } finally {
      setAiLoading(false);
    }
  };

  const analyzeKeywords = () => {
    if (!contentText.trim()) return;
    
    const words = contentText.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3);
    
    const wordCount: Record<string, number> = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    const totalWords = words.length;
    const results: KeywordResult[] = Object.entries(wordCount)
      .map(([word, count]) => ({
        word,
        count,
        density: (count / totalWords) * 100
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);
    
    setKeywordResults(results);
  };

  const getStatusIcon = (status: 'pass' | 'warning' | 'fail') => {
    switch (status) {
      case 'pass': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'fail': return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getTitleAnalysis = () => {
    const length = metaTitle.length;
    if (length === 0) return { status: 'neutral', message: 'Enter a title to analyze' };
    if (length < 30) return { status: 'warning', message: 'Title is too short. Aim for 50-60 characters.' };
    if (length <= 60) return { status: 'good', message: 'Perfect length for search results!' };
    return { status: 'warning', message: 'Title may be truncated in search results.' };
  };

  const getDescriptionAnalysis = () => {
    const length = metaDescription.length;
    if (length === 0) return { status: 'neutral', message: 'Enter a description to analyze' };
    if (length < 120) return { status: 'warning', message: 'Description is too short. Aim for 150-160 characters.' };
    if (length <= 160) return { status: 'good', message: 'Perfect length for search results!' };
    return { status: 'warning', message: 'Description may be truncated in search results.' };
  };

  const titleAnalysis = getTitleAnalysis();
  const descriptionAnalysis = getDescriptionAnalysis();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">SEO Tools</h1>
        <p className="text-muted-foreground">Audit pages, analyze meta tags, check keyword density, and monitor link health</p>
      </div>

      <Tabs defaultValue="audit" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2">
          <TabsTrigger value="audit" className="gap-2">
            <Search className="h-4 w-4" />
            Page Audit
          </TabsTrigger>
          <TabsTrigger value="links" className="gap-2">
            <Link2 className="h-4 w-4" />
            Link Health
          </TabsTrigger>
          <TabsTrigger value="competitors" className="gap-2">
            <Users className="h-4 w-4" />
            Competitors
          </TabsTrigger>
          <TabsTrigger value="keyword-research" className="gap-2">
            <Lightbulb className="h-4 w-4" />
            Research
          </TabsTrigger>
          <TabsTrigger value="meta" className="gap-2">
            <Tag className="h-4 w-4" />
            Meta
          </TabsTrigger>
          <TabsTrigger value="keywords" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Density
          </TabsTrigger>
        </TabsList>

        {/* Page Audit Tab */}
        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Live Page SEO Audit
              </CardTitle>
              <CardDescription>Analyze real pages from the live site using SEO governance rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select a Page</label>
                  <Select value={selectedPage} onValueChange={(val) => { setSelectedPage(val); setCustomUrl(""); }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose from known pages..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Main Pages</SelectLabel>
                        {SITE_PAGES_CATALOG.main.map(page => (
                          <SelectItem key={page.url} value={page.url}>{page.name}</SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        {SITE_PAGES_CATALOG.services.map(page => (
                          <SelectItem key={page.url} value={page.url}>{page.name}</SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Sectors</SelectLabel>
                        {SITE_PAGES_CATALOG.sectors.map(page => (
                          <SelectItem key={page.url} value={page.url}>{page.name}</SelectItem>
                        ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>FM Operations</SelectLabel>
                        {SITE_PAGES_CATALOG.fmOps.map(page => (
                          <SelectItem key={page.url} value={page.url}>{page.name}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Or Enter Custom URL</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="/custom-page-path"
                      value={customUrl}
                      onChange={(e) => { setCustomUrl(e.target.value); setSelectedPage(""); }}
                    />
                  </div>
                </div>
              </div>

              <Button 
                onClick={runPageAudit} 
                disabled={auditLoading || (!selectedPage && !customUrl)}
                className="w-full md:w-auto"
              >
                {auditLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Analyzing Live Page...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Run Live Audit
                  </>
                )}
              </Button>

              {auditError && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                  <div className="font-medium">Audit Failed</div>
                  <div className="text-sm">{auditError}</div>
                </div>
              )}

              {auditScore !== null && (
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="text-center min-w-[80px]">
                    <div className={`text-4xl font-bold ${
                      auditScore >= 80 ? 'text-green-500' : 
                      auditScore >= 60 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {auditScore}
                    </div>
                    <div className="text-sm text-muted-foreground">SEO Score</div>
                  </div>
                  <div className="flex-1">
                    <Progress value={auditScore} className="h-3" />
                  </div>
                  {pageAnalysis?.pageType && (
                    <Badge variant="outline" className="capitalize">
                      {pageAnalysis.pageType}
                    </Badge>
                  )}
                </div>
              )}

              {pageAnalysis?.analysis && (
                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h4 className="font-medium">Page Summary</h4>
                  <div className="grid gap-2 text-sm md:grid-cols-2">
                    <div><span className="text-muted-foreground">Title:</span> {pageAnalysis.analysis.title.content.substring(0, 60)}...</div>
                    <div><span className="text-muted-foreground">Word Count:</span> {pageAnalysis.analysis.wordCount.toLocaleString()}</div>
                    <div><span className="text-muted-foreground">Internal Links:</span> {pageAnalysis.analysis.internalLinks.length}</div>
                    <div><span className="text-muted-foreground">Images:</span> {pageAnalysis.analysis.images.length}</div>
                  </div>
                </div>
              )}

              {auditResults.map((category, idx) => (
                <Card key={idx}>
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {category.checks.map((check, checkIdx) => (
                      <div key={checkIdx} className="flex items-start gap-3 p-2 rounded hover:bg-muted/50">
                        {getStatusIcon(check.status)}
                        <div className="flex-1">
                          <div className="font-medium">{check.name}</div>
                          <div className="text-sm text-muted-foreground">{check.message}</div>
                          {check.details && (
                            <div className="text-xs text-muted-foreground/70 mt-1">{check.details}</div>
                          )}
                        </div>
                        {check.value && (
                          <Badge variant="outline">{check.value}</Badge>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Link Health Tab */}
        <TabsContent value="links" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                Site Link Health
              </CardTitle>
              <CardDescription>Analyze internal linking structure, find orphan pages, and identify link issues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={runLinkHealthCheck} disabled={linkLoading}>
                {linkLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Run Link Analysis
                  </>
                )}
              </Button>

              {linkReport && (
                <>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <div className={`text-3xl font-bold ${
                        linkReport.healthScore >= 80 ? 'text-green-500' :
                        linkReport.healthScore >= 60 ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {linkReport.healthScore}%
                      </div>
                      <div className="text-sm text-muted-foreground">Health Score</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <div className="text-3xl font-bold">{linkReport.totalPages}</div>
                      <div className="text-sm text-muted-foreground">Total Pages</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <div className="text-3xl font-bold">{linkReport.totalLinks}</div>
                      <div className="text-sm text-muted-foreground">Total Links</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg text-center">
                      <div className="text-3xl font-bold text-red-500">{linkReport.orphanPages.length}</div>
                      <div className="text-sm text-muted-foreground">Orphan Pages</div>
                    </div>
                  </div>

                  {linkReport.orphanPages.length > 0 && (
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Orphan Pages ({linkReport.orphanPages.length})
                        </CardTitle>
                        <CardDescription>Pages with no inbound links - critical for SEO</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {linkReport.orphanPages.map((page, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-red-50 dark:bg-red-950/20 rounded text-sm">
                              <span className="font-mono">{page.url}</span>
                              <Badge variant="destructive">No inbound links</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {linkReport.lowInboundPages.length > 0 && (
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          Low Inbound Links ({linkReport.lowInboundPages.length})
                        </CardTitle>
                        <CardDescription>Pages with fewer than 5 inbound links</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {linkReport.lowInboundPages.slice(0, 20).map((page, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded text-sm">
                              <span className="font-mono">{page.url}</span>
                              <Badge variant="outline">{page.inboundLinks.length} links</Badge>
                            </div>
                          ))}
                          {linkReport.lowInboundPages.length > 20 && (
                            <div className="text-sm text-muted-foreground text-center py-2">
                              ...and {linkReport.lowInboundPages.length - 20} more
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {linkReport.missingConversionLinks.length > 0 && (
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          Missing Conversion CTAs ({linkReport.missingConversionLinks.length})
                        </CardTitle>
                        <CardDescription>Pages without proposal/contact links</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {linkReport.missingConversionLinks.slice(0, 20).map((page, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-950/20 rounded text-sm">
                              <span className="font-mono">{page.url}</span>
                              <Badge variant="outline">Missing CTA</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {linkReport.brokenLinks.length > 0 && (
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500" />
                          Broken Links ({linkReport.brokenLinks.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                          {linkReport.brokenLinks.map((link, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/20 rounded text-sm">
                              <span className="font-mono">{link.from}</span>
                              <span className="text-muted-foreground">→</span>
                              <span className="font-mono text-red-600">{link.to}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Meta Analyzer Tab */}
        <TabsContent value="meta" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Meta Title Analyzer</CardTitle>
                <CardDescription>Optimize your page title for search engines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Enter your meta title..."
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    maxLength={70}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span className={
                      titleAnalysis.status === 'good' ? 'text-green-500' :
                      titleAnalysis.status === 'warning' ? 'text-yellow-500' : 'text-muted-foreground'
                    }>
                      {titleAnalysis.message}
                    </span>
                    <span className={metaTitle.length > 60 ? 'text-yellow-500' : 'text-muted-foreground'}>
                      {metaTitle.length}/60
                    </span>
                  </div>
                </div>

                {metaTitle && (
                  <div className="p-4 border rounded-lg bg-background">
                    <div className="text-sm text-muted-foreground mb-1">Search Preview</div>
                    <div className="text-blue-600 text-lg hover:underline cursor-pointer truncate">
                      {metaTitle || "Page Title"}
                    </div>
                    <div className="text-green-700 text-sm">entirefm.com › page-url</div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meta Description Analyzer</CardTitle>
                <CardDescription>Craft compelling descriptions for better CTR</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Textarea
                    placeholder="Enter your meta description..."
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    maxLength={200}
                    rows={3}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span className={
                      descriptionAnalysis.status === 'good' ? 'text-green-500' :
                      descriptionAnalysis.status === 'warning' ? 'text-yellow-500' : 'text-muted-foreground'
                    }>
                      {descriptionAnalysis.message}
                    </span>
                    <span className={metaDescription.length > 160 ? 'text-yellow-500' : 'text-muted-foreground'}>
                      {metaDescription.length}/160
                    </span>
                  </div>
                </div>

                {metaDescription && (
                  <div className="p-4 border rounded-lg bg-background">
                    <div className="text-sm text-muted-foreground mb-1">Search Preview</div>
                    <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                      {metaTitle || "Page Title"}
                    </div>
                    <div className="text-green-700 text-sm">entirefm.com › page-url</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {metaDescription.length > 160 ? metaDescription.slice(0, 157) + "..." : metaDescription}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Title Best Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Include primary keyword near the beginning</li>
                    <li>• Keep between 50-60 characters</li>
                    <li>• Make it unique and descriptive</li>
                    <li>• Include brand name at the end</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Description Best Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Include target keywords naturally</li>
                    <li>• Keep between 150-160 characters</li>
                    <li>• Include a call-to-action</li>
                    <li>• Make it compelling and relevant</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Density Tab (Original content preserved) */}
        <TabsContent value="keywords" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Density Checker</CardTitle>
              <CardDescription>Analyze keyword usage in your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Target keyword (optional)"
                  value={targetKeyword}
                  onChange={(e) => setTargetKeyword(e.target.value)}
                  className="max-w-xs"
                />
              </div>
              <Textarea
                placeholder="Paste your content here to analyze keyword density..."
                value={contentText}
                onChange={(e) => setContentText(e.target.value)}
                rows={8}
              />
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {contentText.split(/\s+/).filter(w => w).length} words
                </div>
                <Button onClick={analyzeKeywords} disabled={!contentText.trim()}>
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analyze
                </Button>
              </div>

              {keywordResults.length > 0 && (
                <div className="space-y-4">
                  {targetKeyword && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="font-medium">Target Keyword: "{targetKeyword}"</div>
                      {(() => {
                        const target = keywordResults.find(k => k.word === targetKeyword.toLowerCase());
                        if (target) {
                          return (
                            <div className="text-sm text-muted-foreground mt-1">
                              Found {target.count} times ({target.density.toFixed(2)}% density)
                              {target.density < 1 && " - Consider adding more instances"}
                              {target.density > 3 && " - May be over-optimized"}
                              {target.density >= 1 && target.density <= 3 && " - Good density!"}
                            </div>
                          );
                        }
                        return <div className="text-sm text-yellow-500 mt-1">Keyword not found in content</div>;
                      })()}
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium mb-3">Top Keywords</h4>
                    <div className="grid gap-2 md:grid-cols-2">
                      {keywordResults.map((kw, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="font-mono text-sm">{kw.word}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{kw.count}x</Badge>
                            <Badge variant={
                              kw.density > 3 ? "destructive" :
                              kw.density >= 1 ? "default" : "secondary"
                            }>
                              {kw.density.toFixed(2)}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Competitor Analysis Tab */}
        <TabsContent value="competitors" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Competitor Tracking</CardTitle>
                <CardDescription>Analyze your top rivals in FM</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Competitor URL</label>
                  <Input 
                    placeholder="e.g. mitie.com" 
                    value={competitorInput}
                    onChange={(e) => setCompetitorInput(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => getAIInsight('competitor-analysis', { 
                    competitorName: competitorInput,
                    ourMetrics: { dr: 45, traffic: '12k/mo', keywords: 1200 },
                    theirMetrics: { dr: 68, traffic: '150k/mo', keywords: 8500 },
                    keywordOverlap: ['facilities management', 'commercial cleaning', 'ppm', 'fire safety']
                  })}
                  disabled={aiLoading || !competitorInput}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Run AI Gap Analysis
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  AI SEO Consultant - Competitor Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                {aiLoading ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-muted-foreground animate-pulse">Claude is analyzing competitor market share...</p>
                  </div>
                ) : aiInsight ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap p-4 bg-muted/30 rounded-lg border border-primary/20">
                    {aiInsight}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p>Enter a competitor URL and click analyze to generate an AI strategy.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Keyword Research Tab */}
        <TabsContent value="keyword-research" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-3">
             <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Topic Generator</CardTitle>
                <CardDescription>Build content pillars for FM sectors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Sector or Service</label>
                  <Input 
                    placeholder="e.g. healthcare facilities management" 
                    value={keywordListInput}
                    onChange={(e) => setKeywordListInput(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full"
                  onClick={() => getAIInsight('keyword-strategy', { 
                    keywords: [keywordListInput, `${keywordListInput} compliance`, `commercial ${keywordListInput}`],
                    currentRankings: { [keywordListInput]: 15, [`${keywordListInput} compliance`]: 8 }
                  })}
                  disabled={aiLoading || !keywordListInput}
                >
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Generate Cluster Strategy
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  AI SEO Consultant - Keyword Clusters
                </CardTitle>
              </CardHeader>
              <CardContent>
                {aiLoading ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-muted-foreground animate-pulse">Claude is clustering keywords and mapping intent...</p>
                  </div>
                ) : aiInsight ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap p-4 bg-muted/30 rounded-lg border border-primary/20">
                    {aiInsight}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p>Enter a target topic to generate a hub-and-spoke content strategy.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOTools;
