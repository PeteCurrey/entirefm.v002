"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Share2, 
  Image as ImageIcon, 
  Search, 
  Plus, 
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle2,
  Edit3,
  Loader2,
  BarChart3,
  Sparkles
} from "lucide-react";
import { format } from "date-fns";

interface ContentStats {
  total: number;
  published: number;
  drafts: number;
  scheduled: number;
}

interface SocialStats {
  total: number;
  posted: number;
  scheduled: number;
}

export default function MarketingDashboard() {
  const router = useRouter();
  const [contentStats, setContentStats] = useState<ContentStats>({ total: 0, published: 0, drafts: 0, scheduled: 0 });
  const [socialStats, setSocialStats] = useState<SocialStats>({ total: 0, posted: 0, scheduled: 0 });
  const [recentContent, setRecentContent] = useState<any[]>([]);
  const [upcomingPosts, setUpcomingPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch content stats
      const { data: content } = await supabase
        .from('content_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (content) {
        setContentStats({
          total: content.length,
          published: content.filter(c => c.status === 'published').length,
          drafts: content.filter(c => c.status === 'draft').length,
          scheduled: content.filter(c => c.status === 'scheduled').length
        });
        setRecentContent(content.slice(0, 5));
      }

      // Fetch social stats
      const { data: social } = await supabase
        .from('social_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (social) {
        setSocialStats({
          total: social.length,
          posted: social.filter(s => s.status === 'posted').length,
          scheduled: social.filter(s => s.status === 'scheduled').length
        });
        setUpcomingPosts(social.filter(s => s.status === 'scheduled').slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'scheduled': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'draft': return 'bg-muted text-muted-foreground border-border';
      case 'review': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default: return 'bg-muted text-muted-foreground border-border';
    }
  };

  const QuickActionCard = ({ icon: Icon, title, description, onClick, variant = "default" }: {
    icon: any;
    title: string;
    description: string;
    onClick: () => void;
    variant?: "default" | "primary";
  }) => (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
        variant === "primary" ? "bg-primary text-primary-foreground" : ""
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <Icon className={`h-8 w-8 mb-4 ${variant === "primary" ? "text-primary-foreground" : "text-primary"}`} />
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className={`text-sm ${variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Marketing Hub</h1>
          <p className="text-muted-foreground mt-1">
            Manage content, social media, and SEO from one place
          </p>
        </div>
        <Button onClick={() => router.push('/admin/marketing/content/new')} className="gap-2">
          <Plus className="h-4 w-4" />
          New Content
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Content</p>
                <p className="text-3xl font-bold">{contentStats.total}</p>
              </div>
              <FileText className="h-10 w-10 text-primary/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Published</p>
                <p className="text-3xl font-bold text-green-500">{contentStats.published}</p>
              </div>
              <CheckCircle2 className="h-10 w-10 text-green-500/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-3xl font-bold text-blue-500">{contentStats.scheduled}</p>
              </div>
              <Calendar className="h-10 w-10 text-blue-500/20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Drafts</p>
                <p className="text-3xl font-bold">{contentStats.drafts}</p>
              </div>
              <Edit3 className="h-10 w-10 text-muted-foreground/20" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickActionCard
            icon={Sparkles}
            title="AI Content Generator"
            description="Generate blog posts and insights with AI"
            onClick={() => router.push('/admin/marketing/content/new')}
            variant="primary"
          />
          <QuickActionCard
            icon={Share2}
            title="Social Media"
            description="Schedule and manage social posts"
            onClick={() => router.push('/admin/marketing/social')}
          />
          <QuickActionCard
            icon={ImageIcon}
            title="AI Media Studio"
            description="Generate images and graphics with AI"
            onClick={() => router.push('/admin/marketing/media')}
          />
          <QuickActionCard
            icon={Search}
            title="SEO Tools"
            description="Analyze and optimize page SEO"
            onClick={() => router.push('/admin/marketing/seo')}
          />
        </div>
      </div>

      {/* Content & Social Tabs */}
      <Tabs defaultValue="content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="content" className="gap-2">
            <FileText className="h-4 w-4" />
            Recent Content
          </TabsTrigger>
          <TabsTrigger value="social" className="gap-2">
            <Share2 className="h-4 w-4" />
            Upcoming Social
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Content</CardTitle>
                <CardDescription>Your latest blog posts and FM Insights</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => router.push('/admin/marketing/content')}>
                View All
              </Button>
            </CardHeader>
            <CardContent>
              {recentContent.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>No content yet. Start creating!</p>
                  <Button variant="outline" className="mt-4" onClick={() => router.push('/admin/marketing/content/new')}>
                    Create First Post
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentContent.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => router.push(`/admin/marketing/content/${item.id}`)}
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.category} • {format(new Date(item.created_at), 'MMM d, yyyy')}
                        </p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Social Posts</CardTitle>
                <CardDescription>Scheduled posts across platforms</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => router.push('/admin/marketing/social')}>
                View All
              </Button>
            </CardHeader>
            <CardContent>
              {upcomingPosts.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Share2 className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>No scheduled posts. Start scheduling!</p>
                  <Button variant="outline" className="mt-4" onClick={() => router.push('/admin/marketing/social')}>
                    Schedule Post
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {upcomingPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => router.push('/admin/marketing/social')}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="secondary">{post.platform}</Badge>
                          {post.scheduled_for && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {format(new Date(post.scheduled_for), 'MMM d, HH:mm')}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {post.post_text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
