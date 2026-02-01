import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Search, 
  FileEdit, 
  Eye, 
  Globe, 
  Clock, 
  Filter,
  LayoutGrid,
  List,
  Image,
  Loader2,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PageContent {
  id: string;
  page_path: string;
  page_title: string;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  updated_at: string;
  version: number;
}

// Define all pages that can be edited
const availablePages = [
  { path: "/", title: "Homepage", category: "Main" },
  { path: "/about", title: "About Us", category: "Main" },
  { path: "/contact", title: "Contact", category: "Main" },
  { path: "/services", title: "Services Overview", category: "Services" },
  { path: "/services/hard-services-fm", title: "Hard FM Services", category: "Services" },
  { path: "/services/electrical", title: "Electrical Services", category: "Services" },
  { path: "/services/hvac", title: "HVAC Services", category: "Services" },
  { path: "/services/fire-safety", title: "Fire Safety", category: "Services" },
  { path: "/services/plumbing", title: "Plumbing", category: "Services" },
  { path: "/services/gas-safety", title: "Gas Safety", category: "Services" },
  { path: "/sectors", title: "Sectors Overview", category: "Sectors" },
  { path: "/sectors/offices", title: "Offices & Corporate", category: "Sectors" },
  { path: "/sectors/retail", title: "Retail & Hospitality", category: "Sectors" },
  { path: "/sectors/industrial", title: "Industrial & Logistics", category: "Sectors" },
  { path: "/sectors/residential", title: "Residential & PBSA", category: "Sectors" },
  { path: "/case-studies", title: "Case Studies", category: "Content" },
  { path: "/fm-insights", title: "FM Insights", category: "Content" },
  { path: "/resources", title: "Resources", category: "Content" },
  { path: "/why-switch", title: "Why Switch", category: "Main" },
  { path: "/technology", title: "Technology", category: "Main" },
  { path: "/careers", title: "Careers", category: "Main" },
  { path: "/locations", title: "Locations", category: "Main" },
  { path: "/sustainability", title: "Sustainability", category: "Main" },
  { path: "/health-safety", title: "Health & Safety", category: "Main" },
  { path: "/request-proposal", title: "Request Proposal", category: "Main" },
];

export default function PageBuilder() {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { toast } = useToast();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const { data, error } = await supabase
        .from('page_content')
        .select('*')
        .order('page_path');

      if (error) throw error;
      setPages(data || []);
    } catch (error) {
      console.error('Error fetching pages:', error);
      toast({
        title: "Error",
        description: "Failed to load pages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const initializePage = async (pagePath: string, pageTitle: string) => {
    try {
      const { data, error } = await supabase
        .from('page_content')
        .insert({
          page_path: pagePath,
          page_title: pageTitle,
          sections: [],
          is_published: false,
        })
        .select()
        .single();

      if (error) throw error;
      
      setPages(prev => [...prev, data]);
      toast({
        title: "Page initialized",
        description: `${pageTitle} is ready to edit`,
      });
      
      return data.id;
    } catch (error) {
      console.error('Error initializing page:', error);
      toast({
        title: "Error",
        description: "Failed to initialize page",
        variant: "destructive",
      });
      return null;
    }
  };

  const getPageStatus = (pagePath: string) => {
    const page = pages.find(p => p.page_path === pagePath);
    if (!page) return 'not-configured';
    return page.is_published ? 'published' : 'draft';
  };

  const getExistingPage = (pagePath: string) => {
    return pages.find(p => p.page_path === pagePath);
  };

  const filteredPages = availablePages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.path.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || page.category === categoryFilter;
    const status = getPageStatus(page.path);
    const matchesStatus = statusFilter === "all" || 
      (statusFilter === "published" && status === "published") ||
      (statusFilter === "draft" && status === "draft") ||
      (statusFilter === "not-configured" && status === "not-configured");
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = [...new Set(availablePages.map(p => p.category))];

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-light mb-2">Page Builder</h1>
          <p className="text-muted-foreground">Edit content and media for all website pages</p>
        </div>
        <Button asChild>
          <Link to="/admin/page-builder/media">
            <Image className="w-4 h-4 mr-2" />
            Media Library
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="not-configured">Not Configured</SelectItem>
            </SelectContent>
          </Select>

          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "grid" | "list")}>
            <TabsList>
              <TabsTrigger value="grid"><LayoutGrid className="w-4 h-4" /></TabsTrigger>
              <TabsTrigger value="list"><List className="w-4 h-4" /></TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-2xl font-semibold">{availablePages.length}</div>
          <div className="text-sm text-muted-foreground">Total Pages</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-semibold text-green-600">
            {pages.filter(p => p.is_published).length}
          </div>
          <div className="text-sm text-muted-foreground">Published</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-semibold text-yellow-600">
            {pages.filter(p => !p.is_published).length}
          </div>
          <div className="text-sm text-muted-foreground">Drafts</div>
        </Card>
        <Card className="p-4">
          <div className="text-2xl font-semibold text-muted-foreground">
            {availablePages.length - pages.length}
          </div>
          <div className="text-sm text-muted-foreground">Not Configured</div>
        </Card>
      </div>

      {/* Page Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPages.map((page) => {
            const existingPage = getExistingPage(page.path);
            const status = getPageStatus(page.path);
            
            return (
              <Card key={page.path} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge 
                      variant={status === "published" ? "default" : status === "draft" ? "secondary" : "outline"}
                      className="mb-2"
                    >
                      {status === "published" && <Globe className="w-3 h-3 mr-1" />}
                      {status === "draft" && <Clock className="w-3 h-3 mr-1" />}
                      {status === "not-configured" && <Plus className="w-3 h-3 mr-1" />}
                      {status === "published" ? "Published" : status === "draft" ? "Draft" : "Not Configured"}
                    </Badge>
                    <h3 className="font-medium">{page.title}</h3>
                    <p className="text-sm text-muted-foreground">{page.path}</p>
                  </div>
                  <Badge variant="outline">{page.category}</Badge>
                </div>
                
                {existingPage && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Last updated: {new Date(existingPage.updated_at).toLocaleDateString()}
                  </p>
                )}
                
                <div className="flex gap-2">
                  {existingPage ? (
                    <>
                      <Button asChild variant="default" size="sm" className="flex-1">
                        <Link to={`/admin/page-builder/edit/${existingPage.id}`}>
                          <FileEdit className="w-4 h-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={page.path} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4" />
                        </a>
                      </Button>
                    </>
                  ) : (
                    <Button 
                      onClick={() => initializePage(page.path, page.title)}
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Configure
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <div className="divide-y">
            {filteredPages.map((page) => {
              const existingPage = getExistingPage(page.path);
              const status = getPageStatus(page.path);
              
              return (
                <div key={page.path} className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{page.title}</span>
                      <Badge variant="outline" className="text-xs">{page.category}</Badge>
                      <Badge 
                        variant={status === "published" ? "default" : status === "draft" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {status === "published" ? "Published" : status === "draft" ? "Draft" : "Not Configured"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{page.path}</p>
                  </div>
                  
                  {existingPage && (
                    <span className="text-xs text-muted-foreground">
                      {new Date(existingPage.updated_at).toLocaleDateString()}
                    </span>
                  )}
                  
                  <div className="flex gap-2">
                    {existingPage ? (
                      <>
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/admin/page-builder/edit/${existingPage.id}`}>
                            <FileEdit className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="ghost" size="sm">
                          <a href={page.path} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </>
                    ) : (
                      <Button 
                        onClick={() => initializePage(page.path, page.title)}
                        variant="ghost" 
                        size="sm"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    )}
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {filteredPages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No pages match your filters</p>
        </div>
      )}
    </div>
  );
}
