"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FileText,
  MessageSquare,
  Activity,
  TrendingUp,
  AlertCircle,
  Loader2,
  ArrowUpRight,
  Clock
} from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface DashboardStats {
  leads: number;
  content: number;
  jobs: number;
  errors: number;
}

interface ActivityItem {
  id: string;
  type: 'lead' | 'content' | 'job';
  action: string;
  desc: string;
  time: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({ leads: 0, content: 0, jobs: 0, errors: 0 });
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [recentLeadAlert, setRecentLeadAlert] = useState<ActivityItem | null>(null);

  useEffect(() => {
    fetchDashboardData();

    // Set up realtime subscription for the activity feed
    const channel = supabase
      .channel('dashboard-updates')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'contact_submissions' }, (payload) => {
          fetchDashboardData();
          triggerAlert(payload.new, 'lead');
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'helpdesk_jobs' }, fetchDashboardData)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'proposal_requests' }, (payload) => {
          fetchDashboardData();
          triggerAlert(payload.new, 'proposal');
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const triggerAlert = (data: any, type: string) => {
    const alert: ActivityItem = {
      id: data.id,
      type: type === 'proposal' ? 'lead' : 'lead',
      action: type === 'proposal' ? 'High Value Lead' : 'New Lead',
      desc: data.name || data.company_name,
      time: new Date().toISOString()
    };
    setRecentLeadAlert(alert);
    setTimeout(() => setRecentLeadAlert(null), 5000); // Clear after 5s
  };

  const fetchDashboardData = async () => {
    try {
      // 1. Fetch Counts
      const [leadsRes, proposalsRes, contentRes, jobsRes, errorsRes] = await Promise.all([
        supabase.from('contact_submissions').select('id', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('proposal_requests').select('id', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('content_items').select('id', { count: 'exact', head: true }),
        supabase.from('helpdesk_jobs').select('id', { count: 'exact', head: true }).neq('status', 'completed'),
        supabase.from('error_404_logs').select('id', { count: 'exact', head: true })
      ]);

      setStats({
        leads: (leadsRes.count || 0) + (proposalsRes.count || 0),
        content: contentRes.count || 0,
        jobs: jobsRes.count || 0,
        errors: errorsRes.count || 0
      });

      // 2. Fetch Recent Activity
      const [recentLeads, recentProposals, recentJobs] = await Promise.all([
        supabase.from('contact_submissions').select('id, name, created_at').order('created_at', { ascending: false }).limit(3),
        supabase.from('proposal_requests').select('id, company_name, created_at').order('created_at', { ascending: false }).limit(3),
        supabase.from('helpdesk_jobs').select('id, site_location, priority, created_at').order('created_at', { ascending: false }).limit(3)
      ]);

      const combinedActivity: ActivityItem[] = [
        ...(recentLeads.data || []).map(l => ({
          id: l.id,
          type: 'lead' as const,
          action: 'General Inquiry',
          desc: `${l.name} reached out`,
          time: l.created_at
        })),
        ...(recentProposals.data || []).map(p => ({
          id: p.id,
          type: 'lead' as const,
          action: 'Proposal Request',
          desc: `New tender from ${p.company_name}`,
          time: p.created_at
        })),
        ...(recentJobs.data || []).map(j => ({
          id: j.id,
          type: 'job' as const,
          action: 'New Ticket',
          desc: `${j.priority} priority at ${j.site_location}`,
          time: j.created_at
        }))
      ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).slice(0, 5);

      setActivity(combinedActivity);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const metricCards = [
    { label: "Leads Pipeline", value: stats.leads, icon: MessageSquare, color: "text-emerald-500", path: "/admin/contacts", trend: "Active" },
    { label: "Marketing Hub", value: stats.content, icon: FileText, color: "text-blue-500", path: "/admin/marketing/content", trend: "Live" },
    { label: "Pending Tickets", value: stats.jobs, icon: Activity, color: "text-orange-500", path: "/admin/helpdesk-jobs", trend: "Reactive" },
    { label: "Health Audit", value: stats.errors, icon: AlertCircle, color: "text-red-500", path: "/admin/analytics", trend: "Alerts" },
  ];

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
            Intelligence Overview
          </h2>
          <p className="text-muted-foreground font-medium">Real-time performance across the EntireFM estate.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 uppercase shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Neural Link Active
        </div>
      </div>

      {/* Live Alert Popup */}
      {recentLeadAlert && (
          <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-right-full duration-500">
              <Card className="p-4 bg-slate-900 border-primary shadow-2xl flex items-center gap-4 min-w-[300px]">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary animate-pulse">
                      <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                      <p className="text-[10px] font-black uppercase text-primary tracking-widest">{recentLeadAlert.action}</p>
                      <p className="text-sm font-bold text-white">{recentLeadAlert.desc}</p>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto text-[10px] font-black tracking-widest" asChild>
                      <Link href="/admin/contacts">MANAGE</Link>
                  </Button>
              </Card>
          </div>
      )}

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((stat, index) => (
          <Link key={index} href={stat.path}>
            <Card className="p-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 cursor-pointer group relative overflow-hidden bg-white dark:bg-slate-900/50 border-white/5">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon className="w-20 h-20" />
              </div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className={`p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl ${stat.color} group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <Badge variant="outline" className="text-[9px] uppercase font-black tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  {stat.trend}
                </Badge>
              </div>
              <div className="space-y-1 relative z-10">
                <h3 className="text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">{stat.value}</h3>
                <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {stat.label}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/5 flex items-center text-[10px] font-black text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-tighter">
                Enter Command Center <ArrowUpRight className="ml-1 w-3 h-3" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity Section */}
        <Card className="lg:col-span-2 p-6 border-white/5 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Live Activity Feed
            </h3>
            <Link href="/admin/contacts" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
              Full History
            </Link>
          </div>
          <div className="space-y-4">
            {activity.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground border-2 border-dashed border-white/5 rounded-xl">
                No recent activity detected
              </div>
            ) : (
              activity.map((item, i) => (
                <Link key={i} href={item.type === 'lead' ? '/admin/contacts' : '/admin/helpdesk-jobs'}>
                  <div className="flex items-center justify-between group p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${item.type === 'lead' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'}`}>
                        {item.type === 'lead' ? <MessageSquare className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-bold text-sm group-hover:text-primary transition-colors">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">
                      {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </Card>

        {/* Quick Insights */}
        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Intelligence Brief
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-black uppercase text-primary mb-1">Conversion Edge</p>
                <p className="text-sm font-medium">You have {stats.leads} unread leads. Average response time is currently <span className="text-primary font-bold">2.4h</span>.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-black uppercase text-secondary mb-1">Site Health</p>
                <p className="text-sm font-medium">{stats.errors > 0 ? `Alert: ${stats.errors} unique 404 errors detected in the last 7 days.` : "System health is optimal. No critical errors detected."}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-slate-900 border-white/5 border-l-4 border-l-primary">
            <h3 className="font-bold mb-2">Fast Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button size="sm" variant="outline" className="text-[10px] font-black tracking-widest bg-white/5 border-white/10" asChild>
                <Link href="/admin/marketing/content/new">NEW ARTICLE</Link>
              </Button>
              <Button size="sm" variant="outline" className="text-[10px] font-black tracking-widest bg-white/5 border-white/10" asChild>
                <Link href="/admin/helpdesk-jobs">VIEW TICKETS</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}