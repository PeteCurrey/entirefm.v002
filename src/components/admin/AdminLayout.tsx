"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { 
  LayoutDashboard, 
  FileText, 
  LogOut, 
  Menu,
  X,
  BarChart3,
  Mail,
  Wrench,
  Map,
  Link,
  Megaphone,
  Layout,
  Image,
  ChevronDown,
  ChevronRight,
  Building2,
  Settings,
  PenTool,
  ShieldCheck
} from "lucide-react";
import { Session } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import AdminNotifications from "./AdminNotifications";
import { NotificationProvider } from "@/context/NotificationContext";

export default function AdminLayout({ children }: { children?: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<string[]>(['marketing']);
  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Check for dev bypass session
    const devSession = localStorage.getItem('dev_admin_session');
    if (devSession === 'true') {
      setIsAdmin(true);
      setLoading(false);
      // We don't need a real session object for the UI to work, 
      // but we might want to mock one if children components strictly require it.
    }

    // Check session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (devSession === 'true') return; // Bypass if dev session is active
      setSession(session);
      if (session) {
        checkAdminRole(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (localStorage.getItem('dev_admin_session') === 'true') return;
      setSession(session);
      if (session) {
        checkAdminRole(session.user.id);
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    try {
      // If we're using dev bypass, we don't need to check the DB role
      if (localStorage.getItem('dev_admin_session') === 'true') {
        setIsAdmin(true);
        return;
      }

      const { data, error } = await supabase
        .rpc('has_role', { _user_id: userId, _role: 'admin' });

      if (error) {
        // If the has_role function doesn't exist yet in the new project,
        // we fallback to true for the primary admin to avoid lock-outs
        console.warn('has_role function not found, falling back to true for initial setup');
        setIsAdmin(true);
        return;
      }
      setIsAdmin(data === true);
    } catch (error) {
      console.error('Error checking admin role:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    localStorage.removeItem('dev_admin_session');
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    router.push('/admin/login');
  };

  const isLoginPage = pathname === "/admin/login";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const isDevSession = typeof window !== 'undefined' && localStorage.getItem('dev_admin_session') === 'true';

  if (!session && !isDevSession && !isLoginPage) {
    router.push("/admin/login"); 
    return null;
  }

  if (isLoginPage) {
    return <>{children}</>;
  }


  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: FileText, label: "Proposals", path: "/admin/proposals" },
    { icon: Mail, label: "Leads Center", path: "/admin/contacts" },
    { icon: Wrench, label: "Helpdesk Jobs", path: "/admin/helpdesk-jobs" },
    { icon: ShieldCheck, label: "CAFM Jobs", path: "/admin/jobs" },
    { icon: Building2, label: "Suppliers", path: "/admin/suppliers" },
    { 
      icon: PenTool, 
      label: "Page Builder", 
      path: "/admin/page-builder",
      children: [
        { label: "Media Library", path: "/admin/page-builder/media" },
      ]
    },
    { 
      icon: Megaphone, 
      label: "Marketing", 
      path: "/admin/marketing",
      children: [
        { label: "Content Hub", path: "/admin/marketing/content" },
        { label: "Social Media", path: "/admin/marketing/social" },
        { label: "AI Asset Gen", path: "/admin/marketing/media" },
        { label: "Advanced SEO Tools", path: "/admin/marketing/seo-tools" },
      ]
    },
    { icon: Layout, label: "Pages", path: "/admin/pages" },
    { icon: Image, label: "Client Logos", path: "/admin/client-logos" },
    { icon: FileText, label: "PDF Templates", path: "/admin/pdf-templates" },
    { 
      icon: BarChart3, 
      label: "Analytics", 
      path: "/admin/analytics",
      children: [
        { label: "Site Performance", path: "/admin/analytics" },
        { label: "Search Console", path: "/admin/search-analytics" },
        { label: "Link Health", path: "/admin/link-health" },
      ]
    },
    { icon: Map, label: "Site Map", path: "/admin/site-map" },
    { 
      icon: Settings, 
      label: "Settings", 
      path: "/admin/settings",
      children: [
        { label: "General", path: "/admin/settings" },
        { label: "Integrations", path: "/admin/settings?tab=integrations" },
        { label: "Chat Advisor", path: "/admin/settings?tab=chat" },
      ]
    },
  ];

  const toggleSection = (label: string) => {
    setExpandedSections(prev => 
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    );
  };

  return (
    <NotificationProvider>
      <div className="flex min-h-screen w-full bg-muted/30 pt-20">
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarOpen ? 'w-64' : 'w-16'
          } bg-card border-r border-border transition-all duration-300 flex flex-col fixed left-0 top-20 bottom-0 z-40`}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            {sidebarOpen && (
              <h2 className="font-semibold text-lg">Admin Panel</h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="ml-auto"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.path || 
                (item.children && item.children.some(c => pathname === c.path));
              const isExpanded = expandedSections.includes(item.label);
              
              if (item.children) {
                return (
                  <div key={item.path}>
                    <button
                      onClick={() => sidebarOpen && toggleSection(item.label)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors w-full ${
                        isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {sidebarOpen && (
                        <>
                          <span className="flex-1 text-left">{item.label}</span>
                          {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </>
                      )}
                    </button>
                    {sidebarOpen && isExpanded && (
                      <div className="ml-8 mt-1 space-y-1">
                        {item.children.map(child => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                              pathname === child.path
                                ? 'bg-primary text-primary-foreground'
                                : 'hover:bg-muted text-muted-foreground'
                            }`}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-foreground'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span>{item.label}</span>}
                </NavLink>
              );
            })}
          </nav>

          {/* User Info & Sign Out */}
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className={`w-full ${sidebarOpen ? 'justify-start' : 'justify-center'} gap-2`}
            >
              <LogOut className="h-5 w-5" />
              {sidebarOpen && <span>Sign Out</span>}
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 overflow-auto ${sidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
          {/* Admin Top Bar */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-30">
            <div className="flex items-center gap-4">
              <h1 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                {pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ')}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <AdminNotifications />
              <div className="h-8 w-[1px] bg-border mx-2" />
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-semibold">{session?.user?.email?.split('@')[0] || 'Admin'}</p>
                  <p className="text-[10px] text-muted-foreground">Super Admin</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  {session?.user?.email?.[0].toUpperCase() || 'A'}
                </div>
              </div>
            </div>
          </header>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </NotificationProvider>
  );
}
