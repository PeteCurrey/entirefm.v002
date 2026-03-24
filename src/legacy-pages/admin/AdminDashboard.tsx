"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  FileText,
  MessageSquare,
  Activity,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const stats = [
    { label: "Active Leads", value: "12", icon: MessageSquare, color: "text-blue-500", trend: "+2 this week" },
    { label: "Total Articles", value: "24", icon: FileText, color: "text-green-500", trend: "Updated 2h ago" },
    { label: "Page Views", value: "1.2k", icon: Users, color: "text-purple-500", trend: "+15% vs last week" },
    { label: "System Status", value: "98%", icon: Activity, color: "text-emerald-500", trend: "All systems operational" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back to your Mission Control.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-gray-100 rounded-full ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {stat.trend.includes("+") ? <TrendingUp className="w-3 h-3 inline mr-1" /> : null}
                {stat.trend}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 border-l-4 border-l-primary">
          <h3 className="font-semibold mb-2">Content Quick Actions</h3>
          <div className="space-y-2">
            <Link href="/admin/content/new" className="block text-sm text-blue-600 hover:underline">
              + Write new article
            </Link>
            <Link href="/admin/content" className="block text-sm text-muted-foreground hover:text-foreground">
              Manage existing posts
            </Link>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-blue-500">
          <h3 className="font-semibold mb-2">Lead & Inbox</h3>
          <div className="space-y-2">
            <Link href="/admin/contact-submissions" className="flex items-center justify-between text-sm text-blue-600 hover:underline">
              <span>View unread messages</span>
              <span className="bg-blue-100 text-blue-700 px-2 rounded-full text-xs">3</span>
            </Link>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-orange-500">
          <h3 className="font-semibold mb-2">System Alerts</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-orange-600">
              <AlertCircle className="w-4 h-4" />
              <span>Renew SSL Certificate (30 days)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Activity className="w-4 h-4" />
              <span>Database backup successful</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent System Activity</h3>
        <div className="space-y-4">
          {[
            { action: "New Lead", desc: "Contact form submission from John Doe", time: "10 mins ago" },
            { action: "Post Updated", desc: "Updated 'Fire Safety Guide' content", time: "2 hours ago" },
            { action: "Login", desc: "Admin user logged in", time: "4 hours ago" },
            { action: "System", desc: "Weekly analytics report generated", time: "1 day ago" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0">
              <div>
                <p className="font-medium text-sm">{item.action}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}