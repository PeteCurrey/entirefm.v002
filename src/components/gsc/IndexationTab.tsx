import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface IndexationData {
  url: string;
  indexed: boolean;
  lastCrawled?: string;
  crawlStatus?: string;
  verdict?: string;
}

interface IndexationTabProps {
  data: IndexationData[];
  isLoading: boolean;
}

export const IndexationTab = ({ data, isLoading }: IndexationTabProps) => {
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

  const indexedCount = data.filter(d => d.indexed).length;
  const notIndexedCount = data.length - indexedCount;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{data.length}</CardTitle>
            <CardDescription>Total Pages</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-600">{indexedCount}</CardTitle>
            <CardDescription>Indexed Pages</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-red-600">{notIndexedCount}</CardTitle>
            <CardDescription>Not Indexed</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Indexation Status by Page</CardTitle>
          <CardDescription>
            Review which pages are indexed by Google
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    {item.indexed ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600" />
                    )}
                    <span className="text-sm font-medium">{item.url}</span>
                  </div>
                  {item.lastCrawled && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Last crawled: {new Date(item.lastCrawled).toLocaleDateString()}
                    </p>
                  )}
                  {item.verdict && (
                    <Badge variant="outline" className="mt-2">
                      {item.verdict}
                    </Badge>
                  )}
                </div>
                <Badge variant={item.indexed ? "default" : "destructive"}>
                  {item.indexed ? 'Indexed' : 'Not Indexed'}
                </Badge>
              </div>
            ))}
          </div>
          
          {data.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No indexation data available yet</p>
              <p className="text-sm mt-1">Connect to GSC and fetch analytics to see indexation status</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};