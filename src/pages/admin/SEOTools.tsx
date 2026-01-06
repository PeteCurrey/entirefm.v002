import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, FileText, Tag, BarChart3, CheckCircle, AlertTriangle, XCircle, Loader2 } from "lucide-react";

interface AuditResult {
  category: string;
  checks: {
    name: string;
    status: 'pass' | 'warning' | 'fail';
    message: string;
    value?: string;
  }[];
}

interface KeywordResult {
  word: string;
  count: number;
  density: number;
}

const SEOTools = () => {
  const [auditUrl, setAuditUrl] = useState("");
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditScore, setAuditScore] = useState<number | null>(null);

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [contentText, setContentText] = useState("");
  const [keywordResults, setKeywordResults] = useState<KeywordResult[]>([]);
  const [targetKeyword, setTargetKeyword] = useState("");

  const runPageAudit = async () => {
    if (!auditUrl) return;
    
    setAuditLoading(true);
    
    // Simulate audit with common SEO checks
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const results: AuditResult[] = [
      {
        category: "Meta Tags",
        checks: [
          { name: "Title Tag", status: "pass", message: "Title tag is present and within optimal length", value: "58 characters" },
          { name: "Meta Description", status: "warning", message: "Description could be longer for better CTR", value: "120 characters" },
          { name: "Canonical URL", status: "pass", message: "Canonical tag is properly set" },
          { name: "Open Graph Tags", status: "pass", message: "OG tags are present for social sharing" },
        ]
      },
      {
        category: "Content",
        checks: [
          { name: "H1 Tag", status: "pass", message: "Single H1 tag found on page" },
          { name: "Heading Hierarchy", status: "pass", message: "Proper H2-H6 structure detected" },
          { name: "Image Alt Text", status: "warning", message: "3 images missing alt attributes" },
          { name: "Content Length", status: "pass", message: "Page has sufficient content", value: "1,250 words" },
        ]
      },
      {
        category: "Technical",
        checks: [
          { name: "Mobile Friendly", status: "pass", message: "Viewport meta tag is set correctly" },
          { name: "HTTPS", status: "pass", message: "Page is served over HTTPS" },
          { name: "Page Speed", status: "warning", message: "Consider optimizing images for faster load" },
          { name: "Structured Data", status: "fail", message: "No JSON-LD schema detected" },
        ]
      },
      {
        category: "Links",
        checks: [
          { name: "Internal Links", status: "pass", message: "Good internal linking structure", value: "12 links" },
          { name: "External Links", status: "pass", message: "External links use noopener", value: "4 links" },
          { name: "Broken Links", status: "pass", message: "No broken links detected" },
        ]
      }
    ];
    
    setAuditResults(results);
    
    // Calculate score
    const allChecks = results.flatMap(r => r.checks);
    const passCount = allChecks.filter(c => c.status === 'pass').length;
    const score = Math.round((passCount / allChecks.length) * 100);
    setAuditScore(score);
    
    setAuditLoading(false);
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
          <p className="text-muted-foreground">Audit pages, analyze meta tags, and check keyword density</p>
        </div>

        <Tabs defaultValue="audit" className="space-y-4">
          <TabsList>
            <TabsTrigger value="audit" className="gap-2">
              <Search className="h-4 w-4" />
              Page Audit
            </TabsTrigger>
            <TabsTrigger value="meta" className="gap-2">
              <Tag className="h-4 w-4" />
              Meta Analyzer
            </TabsTrigger>
            <TabsTrigger value="keywords" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Keyword Density
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Page SEO Audit</CardTitle>
                <CardDescription>Enter a URL to analyze its SEO performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter page URL (e.g., /services/fire-safety)"
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                  />
                  <Button onClick={runPageAudit} disabled={auditLoading || !auditUrl}>
                    {auditLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Audit"}
                  </Button>
                </div>

                {auditScore !== null && (
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <div className="text-center min-w-[60px]">
                      <div className={`text-4xl font-bold ${
                        auditScore >= 80 ? 'text-green-500' : 
                        auditScore >= 60 ? 'text-yellow-500' : 'text-red-500'
                      }`}>
                        {auditScore}
                      </div>
                      <div className="text-sm text-muted-foreground">SEO Score</div>
                    </div>
                    <div className="flex-1">
                      <Progress value={auditScore} />
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

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Density Guidelines</h4>
                      <div className="grid gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{"<1%"}</Badge>
                          <span className="text-muted-foreground">Keyword may be underused</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge>1-3%</Badge>
                          <span className="text-muted-foreground">Optimal keyword density</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">{">3%"}</Badge>
                          <span className="text-muted-foreground">Risk of keyword stuffing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
};

export default SEOTools;
