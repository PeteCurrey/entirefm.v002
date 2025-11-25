import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ExternalLink } from 'lucide-react';
import { getGoogleAuthUrl, getGSCConnection, exchangeCodeForTokens } from '@/utils/gscApi';
import { useToast } from '@/hooks/use-toast';

export const GSCConnectionButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [siteUrl, setSiteUrl] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    checkConnection();
    handleOAuthCallback();
  }, []);

  const checkConnection = async () => {
    try {
      const data = await getGSCConnection();
      if (data.connection) {
        setIsConnected(true);
        setSiteUrl(data.connection.site_url);
      }
    } catch (error) {
      console.error('Failed to check GSC connection:', error);
    }
  };

  const handleOAuthCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      setIsLoading(true);
      try {
        await exchangeCodeForTokens(code);
        setIsConnected(true);
        
        // Clean up URL
        window.history.replaceState({}, '', window.location.pathname);
        
        toast({
          title: "Connected to Google Search Console",
          description: "You can now view GSC data in the dashboard",
        });
        
        await checkConnection();
      } catch (error) {
        console.error('OAuth callback error:', error);
        toast({
          title: "Connection Failed",
          description: "Failed to connect to Google Search Console",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleConnect = () => {
    const authUrl = getGoogleAuthUrl();
    window.location.href = authUrl;
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="gap-1">
          <CheckCircle className="w-3 h-3" />
          Connected to GSC
        </Badge>
        {siteUrl && (
          <span className="text-sm text-muted-foreground">{siteUrl}</span>
        )}
      </div>
    );
  }

  return (
    <Button 
      onClick={handleConnect} 
      disabled={isLoading}
      variant="outline"
      className="gap-2"
    >
      <ExternalLink className="w-4 h-4" />
      Connect Google Search Console
    </Button>
  );
};