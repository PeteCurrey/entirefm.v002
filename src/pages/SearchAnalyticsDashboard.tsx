import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchAnalytics } from '@/hooks/useSearchAnalytics';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Search, TrendingUp, MousePointerClick, AlertCircle, Calendar } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface SearchHistoryItem {
  query: string;
  timestamp: string;
  resultsCount: number;
  clicked?: boolean;
}

interface QueryStats {
  query: string;
  count: number;
  avgResults: number;
  clickRate: number;
}

export default function SearchAnalyticsDashboard() {
  const { getPopularSearches } = useSearchAnalytics();
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);
  const [queryStats, setQueryStats] = useState<QueryStats[]>([]);
  const [timeSeriesData, setTimeSeriesData] = useState<any[]>([]);
  const [zeroResultQueries, setZeroResultQueries] = useState<string[]>([]);

  useEffect(() => {
    // Load search history from localStorage
    try {
      const history = JSON.parse(localStorage.getItem('search_history') || '[]');
      setSearchHistory(history);
      
      // Calculate query statistics
      const stats: Record<string, { count: number; totalResults: number; clicks: number }> = {};
      
      history.forEach((item: SearchHistoryItem) => {
        const query = item.query.toLowerCase().trim();
        if (!stats[query]) {
          stats[query] = { count: 0, totalResults: 0, clicks: 0 };
        }
        stats[query].count++;
        stats[query].totalResults += item.resultsCount;
        if (item.clicked) stats[query].clicks++;
        
        // Track zero results
        if (item.resultsCount === 0) {
          setZeroResultQueries(prev => {
            if (!prev.includes(query)) {
              return [...prev, query];
            }
            return prev;
          });
        }
      });

      // Convert to array and calculate averages
      const statsArray: QueryStats[] = Object.entries(stats).map(([query, data]) => ({
        query,
        count: data.count,
        avgResults: Math.round(data.totalResults / data.count),
        clickRate: data.clicks > 0 ? Math.round((data.clicks / data.count) * 100) : 0,
      }));
      
      statsArray.sort((a, b) => b.count - a.count);
      setQueryStats(statsArray);

      // Generate time series data (last 7 days)
      const now = new Date();
      const dayData: Record<string, number> = {};
      
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dateKey = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        dayData[dateKey] = 0;
      }

      history.forEach((item: SearchHistoryItem) => {
        const itemDate = new Date(item.timestamp);
        const dateKey = itemDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        if (dayData[dateKey] !== undefined) {
          dayData[dateKey]++;
        }
      });

      const timeData = Object.entries(dayData).map(([date, searches]) => ({
        date,
        searches,
      }));
      
      setTimeSeriesData(timeData);
    } catch (error) {
      console.error('Error loading search analytics:', error);
    }
  }, []);

  const totalSearches = searchHistory.length;
  const avgResultsPerSearch = searchHistory.length > 0 
    ? Math.round(searchHistory.reduce((sum, item) => sum + item.resultsCount, 0) / searchHistory.length)
    : 0;
  const overallCTR = searchHistory.length > 0
    ? Math.round((searchHistory.filter(item => item.clicked).length / searchHistory.length) * 100)
    : 0;

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--accent))', 'hsl(var(--muted))'];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Search Analytics Dashboard | EntireFM</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Search Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track search trends, popular queries, and user behavior insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Searches</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSearches}</div>
              <p className="text-xs text-muted-foreground">All time queries</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Results</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgResultsPerSearch}</div>
              <p className="text-xs text-muted-foreground">Per search query</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Click-Through Rate</CardTitle>
              <MousePointerClick className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallCTR}%</div>
              <p className="text-xs text-muted-foreground">Overall CTR</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Zero Results</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{zeroResultQueries.length}</div>
              <p className="text-xs text-muted-foreground">Queries with no results</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="trends" className="space-y-6">
          <TabsList>
            <TabsTrigger value="trends">Search Trends</TabsTrigger>
            <TabsTrigger value="popular">Popular Queries</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="zero-results">Zero Results</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Search Volume Over Time</CardTitle>
                <CardDescription>Daily search activity for the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    searches: {
                      label: "Searches",
                      color: "hsl(var(--primary))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timeSeriesData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="date" className="text-xs" />
                      <YAxis className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="searches" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        dot={{ fill: "hsl(var(--primary))" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Search Queries</CardTitle>
                <CardDescription>Most frequently searched terms</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    count: {
                      label: "Searches",
                      color: "hsl(var(--primary))",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={queryStats.slice(0, 10)} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis type="number" className="text-xs" />
                      <YAxis dataKey="query" type="category" width={150} className="text-xs" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Query Details</CardTitle>
                <CardDescription>Detailed statistics for popular searches</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Query</TableHead>
                      <TableHead className="text-right">Searches</TableHead>
                      <TableHead className="text-right">Avg Results</TableHead>
                      <TableHead className="text-right">CTR</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {queryStats.slice(0, 15).map((stat, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{stat.query}</TableCell>
                        <TableCell className="text-right">{stat.count}</TableCell>
                        <TableCell className="text-right">{stat.avgResults}</TableCell>
                        <TableCell className="text-right">
                          <Badge variant={stat.clickRate > 50 ? "default" : "secondary"}>
                            {stat.clickRate}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Click-Through Rate by Query</CardTitle>
                  <CardDescription>Top performing queries by engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {queryStats
                      .filter(stat => stat.clickRate > 0)
                      .sort((a, b) => b.clickRate - a.clickRate)
                      .slice(0, 8)
                      .map((stat, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium truncate flex-1 mr-4">{stat.query}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${stat.clickRate}%` }}
                              />
                            </div>
                            <span className="text-sm font-bold w-12 text-right">{stat.clickRate}%</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Results Distribution</CardTitle>
                  <CardDescription>Average results per query</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      avgResults: {
                        label: "Avg Results",
                        color: "hsl(var(--secondary))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={queryStats.slice(0, 10)}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                        <XAxis dataKey="query" angle={-45} textAnchor="end" height={100} className="text-xs" />
                        <YAxis className="text-xs" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="avgResults" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="zero-results" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Zero Result Queries</CardTitle>
                <CardDescription>
                  Queries that returned no results - opportunities to improve content coverage
                </CardDescription>
              </CardHeader>
              <CardContent>
                {zeroResultQueries.length === 0 ? (
                  <div className="text-center py-12">
                    <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No zero-result queries found</p>
                    <p className="text-sm text-muted-foreground mt-2">This is great! All searches are returning results.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {zeroResultQueries.map((query, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium">{query}</span>
                        <Badge variant="destructive">0 results</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {zeroResultQueries.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Content Strategy Recommendations</CardTitle>
                  <CardDescription>Suggested actions based on zero-result queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Create targeted content</p>
                        <p className="text-sm text-muted-foreground">
                          Develop pages or articles addressing these specific queries
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                        <Search className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Improve search indexing</p>
                        <p className="text-sm text-muted-foreground">
                          Update existing content metadata to match user intent
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                        <MousePointerClick className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Add related suggestions</p>
                        <p className="text-sm text-muted-foreground">
                          Guide users to similar or alternative content
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
