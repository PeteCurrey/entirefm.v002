import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye, MousePointerClick, Target } from 'lucide-react';

interface PerformanceData {
  url: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface PerformanceTabProps {
  data: PerformanceData[];
  isLoading: boolean;
}

export const PerformanceTab = ({ data, isLoading }: PerformanceTabProps) => {
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

  const totalClicks = data.reduce((sum, d) => sum + d.clicks, 0);
  const totalImpressions = data.reduce((sum, d) => sum + d.impressions, 0);
  const avgPosition = data.length > 0 ? data.reduce((sum, d) => sum + d.position, 0) / data.length : 0;
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <MousePointerClick className="w-4 h-4 text-muted-foreground" />
              <CardDescription>Total Clicks</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">{totalClicks.toLocaleString()}</CardTitle>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <CardDescription>Total Impressions</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">{totalImpressions.toLocaleString()}</CardTitle>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              <CardDescription>Avg CTR</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">{avgCTR.toFixed(2)}%</CardTitle>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <CardDescription>Avg Position</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">{avgPosition.toFixed(1)}</CardTitle>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance by Page</CardTitle>
          <CardDescription>
            Search performance metrics for each page (Last 28 days)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data
              .sort((a, b) => b.clicks - a.clicks)
              .slice(0, 20)
              .map((item, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium flex-1">{item.url}</span>
                    <Badge variant="outline">Pos: {item.position.toFixed(1)}</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Clicks:</span>
                      <span className="ml-2 font-medium">{item.clicks.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Impressions:</span>
                      <span className="ml-2 font-medium">{item.impressions.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CTR:</span>
                      <span className="ml-2 font-medium">{item.ctr.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          {data.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>No performance data available</p>
              <p className="text-sm mt-1">Fetch search analytics to see performance metrics</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};