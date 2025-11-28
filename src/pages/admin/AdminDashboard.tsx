import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, FileText, BarChart3, Settings, TrendingUp, Clock, CheckCircle2, AlertCircle, Mail, MessageSquare, Link2 } from "lucide-react";
import { SitemapPing } from "@/components/admin/SitemapPing";
import { LinkHealthDashboard } from "@/components/admin/LinkHealthDashboard";
import { Error404Dashboard } from "@/components/admin/Error404Dashboard";
export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProposals: 0,
    newProposals: 0,
    activeProposals: 0,
    wonProposals: 0,
    totalContacts: 0,
    newContacts: 0
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchStats();
  }, []);
  const fetchStats = async () => {
    try {
      const [proposalsResult, contactsResult] = await Promise.all([supabase.from('proposal_requests').select('status'), supabase.from('contact_submissions').select('status')]);
      if (proposalsResult.error) throw proposalsResult.error;
      if (contactsResult.error) throw contactsResult.error;
      const proposals = proposalsResult.data || [];
      const contacts = contactsResult.data || [];
      const total = proposals.length;
      const newCount = proposals.filter(p => p.status === 'new').length;
      const activeCount = proposals.filter(p => ['reviewing', 'contacted', 'quoted'].includes(p.status)).length;
      const wonCount = proposals.filter(p => p.status === 'won').length;
      const totalContacts = contacts.length;
      const newContacts = contacts.filter(c => c.status === 'new').length;
      setStats({
        totalProposals: total,
        newProposals: newCount,
        activeProposals: activeCount,
        wonProposals: wonCount,
        totalContacts,
        newContacts
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };
  const StatCard = ({
    icon: Icon,
    label,
    value,
    color,
    onClick
  }: any) => <Card className="p-6 hover-lift cursor-pointer transition-all hover:border-primary/50" onClick={onClick}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-3xl font-semibold">{loading ? '-' : value}</p>
        </div>
        <div className={`p-3 rounded-lg bg-${color}/10`}>
          <Icon className={`h-6 w-6 text-${color}`} />
        </div>
      </div>
    </Card>;
  const QuickAction = ({
    icon: Icon,
    label,
    onClick
  }: any) => <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4" onClick={onClick}>
      <Icon className="h-5 w-5 text-primary" />
      <span>{label}</span>
    </Button>;
  return <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto my-[50px]">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard icon={FileText} label="Total Proposals" value={stats.totalProposals} color="primary" onClick={() => navigate('/admin/proposals')} />
          <StatCard icon={AlertCircle} label="New Proposals" value={stats.newProposals} color="accent" onClick={() => navigate('/admin/proposals')} />
          <StatCard icon={CheckCircle2} label="Won Projects" value={stats.wonProposals} color="primary" onClick={() => navigate('/admin/proposals')} />
          <StatCard icon={Mail} label="Total Contacts" value={stats.totalContacts} color="secondary" onClick={() => navigate('/admin/contacts')} />
          <StatCard icon={MessageSquare} label="New Contacts" value={stats.newContacts} color="accent" onClick={() => navigate('/admin/contacts')} />
          <StatCard icon={Clock} label="Active Proposals" value={stats.activeProposals} color="secondary" onClick={() => navigate('/admin/proposals')} />
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Quick Actions
            </h2>
            <div className="space-y-3">
              <QuickAction icon={FileText} label="View All Proposals" onClick={() => navigate('/admin/proposals')} />
              <QuickAction icon={Mail} label="Contact Submissions" onClick={() => navigate('/admin/contacts')} />
              <QuickAction icon={BarChart3} label="Analytics Dashboard" onClick={() => navigate('/search-analytics')} />
              <QuickAction icon={Users} label="User Management" onClick={() => {/* TODO */}} />
              <QuickAction icon={Settings} label="System Settings" onClick={() => {/* TODO */}} />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                No recent activity to display.
              </p>
            </div>
          </Card>
        </div>

        {/* Link Health Monitor */}
        <LinkHealthDashboard />

        {/* 404 Error Tracking */}
        <Error404Dashboard />

        {/* Sitemap Management */}
        <SitemapPing />
      </div>
    </div>;
}