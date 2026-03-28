"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, Tooltip, PieChart, Pie, Cell 
} from "recharts";
import { 
  BarChart3, TrendingUp, Users, MousePointerClick, Globe, Search, ArrowUpRight, ArrowDownRight, RefreshCw, Loader2, Info
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function AnalyticsDashboard() {
  const [dateRange, setDateRange] = useState("30");

  const { data: integrations, isLoading: loadingIntegrations } = useQuery({
    queryKey: ["api-integrations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("api_integrations")
        .select("*");
      if (error) throw error;
      return data;
    },
  });

  const hasGA = integrations?.some(i => i.service_type === 'google_analytics' && i.is_active);
  const hasGSC = integrations?.some(i => i.service_type === 'google_search_console' && i.is_active);

  // Mock data for initial display / demo
  const trafficData = [
    { name: 'Mon', views: 400, users: 240 },
    { name: 'Tue', views: 300, users: 139 },
    { name: 'Wed', views: 200, users: 980 },
    { name: 'Thu', views: 278, users: 390 },
    { name: 'Fri', views: 189, users: 480 },
    { name: 'Sat', views: 239, users: 380 },
    { name: 'Sun', views: 349, users: 430 },
  ];

  const searchPerformance = [
    { query: 'facilities management uk', clicks: 1200, impressions: 15000, ctr: '8.0%', position: 3.2 },
    { query: 'commercial cleaning london', clicks: 850, impressions: 9200, ctr: '9.2%', position: 1.5 },
    { query: 'ppm schedule builder', clicks: 430, impressions: 5800, ctr: '7.4%', position: 4.8 },
    { query: 'fire safety compliance', clicks: 310, impressions: 4100, ctr: '7.5%', position: 5.2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Performance</h1>
          <p className="text-muted-foreground">Unified view of site traffic, user behavior, and search performance</p>
        </div>
        <div className="flex gap-2">
           <Badge variant={hasGA ? "default" : "secondary"}>
            {hasGA ? "GA4 Connected" : "GA4 Disconnected"}
          </Badge>
          <Badge variant={hasGSC ? "default" : "secondary"}>
            {hasGSC ? "GSC Connected" : "GSC Disconnected"}
          </Badge>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!hasGA && !hasGSC && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Demo Mode Active</AlertTitle>
          <AlertDescription>
            Connect your Google Analytics and Search Console accounts in <strong>Settings › Integrations</strong> to see live data.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,482</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="text-green-500 font-medium flex items-center">
                <ArrowUpRight className="h-3 w-3" /> 12.5%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sessions</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,294</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="text-green-500 font-medium flex items-center">
                <ArrowUpRight className="h-3 w-3" /> 8.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2m 45s</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="text-red-500 font-medium flex items-center">
                <ArrowDownRight className="h-3 w-3" /> 3.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Search Impressions</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142K</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="text-green-500 font-medium flex items-center">
                <ArrowUpRight className="h-3 w-3" /> 24%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="traffic" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Traffic Trends
          </TabsTrigger>
          <TabsTrigger value="search" className="gap-2">
            <MousePointerClick className="h-4 w-4" />
            Search Performance
          </TabsTrigger>
          <TabsTrigger value="locations" className="gap-2">
            <Globe className="h-4 w-4" />
            Audience
          </TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Acquisition Trends</CardTitle>
              <CardDescription>Daily active users and page views</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trafficData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="views" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorViews)" />
                    <Area type="monotone" dataKey="users" stroke="hsl(var(--secondary))" fillOpacity={0} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="search" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Google Search Console Insights</CardTitle>
              <CardDescription>Top queries and ranking positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-4">
                   <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Total Clicks</div>
                    <div className="text-2xl font-bold">14,204</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Impressions</div>
                    <div className="text-2xl font-bold">285K</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Avg. CTR</div>
                    <div className="text-2xl font-bold">4.9%</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Avg. Position</div>
                    <div className="text-2xl font-bold">8.4</div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-2 text-left">Query</th>
                        <th className="px-4 py-2 text-right">Clicks</th>
                        <th className="px-4 py-2 text-right">Impressions</th>
                        <th className="px-4 py-2 text-right">CTR</th>
                        <th className="px-4 py-2 text-right">Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchPerformance.map((row, i) => (
                        <tr key={i} className="border-t hover:bg-muted/30">
                          <td className="px-4 py-3 font-medium">{row.query}</td>
                          <td className="px-4 py-3 text-right">{row.clicks}</td>
                          <td className="px-4 py-3 text-right">{(row.impressions / 1000).toFixed(1)}K</td>
                          <td className="px-4 py-3 text-right">{row.ctr}</td>
                          <td className="px-4 py-3 text-right">{row.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="locations" className="space-y-4">
           <Card>
            <CardHeader>
              <CardTitle>Session by Device & Location</CardTitle>
              <CardDescription>Audience breakdown from Google Analytics</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8 md:grid-cols-2">
              <div className="h-[300px]">
                <h4 className="text-sm font-medium mb-4">Device Category</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Desktop', value: 65 },
                        { name: 'Mobile', value: 30 },
                        { name: 'Tablet', value: 5 },
                      ]}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Top Cities (UK)</h4>
                <div className="space-y-3">
                  {[
                    { city: 'London', share: '42%' },
                    { city: 'Manchester', share: '15%' },
                    { city: 'Birmingham', share: '12%' },
                    { city: 'Leeds', share: '8%' },
                    { city: 'Glasgow', share: '6%' },
                  ].map((loc, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm">{loc.city}</span>
                      <div className="flex items-center gap-2">
                         <div className="w-32 bg-muted rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: loc.share }} />
                        </div>
                        <span className="text-xs font-bold w-8">{loc.share}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
