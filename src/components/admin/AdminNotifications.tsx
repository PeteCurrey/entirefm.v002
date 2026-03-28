"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Bell, MessageSquare, Wrench, X } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

interface Notification {
  id: string;
  type: 'lead' | 'job';
  title: string;
  description: string;
  time: Date;
  path: string;
  read: boolean;
}

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Subscribe to new leads
    const leadsChannel = supabase
      .channel('admin-leads')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'contact_submissions' },
        (payload) => {
          const newNotification: Notification = {
            id: payload.new.id,
            type: 'lead',
            title: 'New Lead Received',
            description: `${payload.new.name} from ${payload.new.company || 'Unknown Company'}`,
            time: new Date(),
            path: '/admin/contacts',
            read: false
          };
          addNotification(newNotification);
          toast.info(`New Lead: ${payload.new.name}`, {
            description: payload.new.message.substring(0, 50) + '...',
            action: {
              label: 'View',
              onClick: () => window.location.href = '/admin/contacts'
            }
          });
        }
      )
      .subscribe();

    // Subscribe to new helpdesk jobs
    const jobsChannel = supabase
      .channel('admin-jobs')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'helpdesk_jobs' },
        (payload) => {
          const newNotification: Notification = {
            id: payload.new.id,
            type: 'job',
            title: 'New Helpdesk Job',
            description: `Priority: ${payload.new.priority} - ${payload.new.site_location}`,
            time: new Date(),
            path: '/admin/helpdesk-jobs',
            read: false
          };
          addNotification(newNotification);
          toast.warning(`New Job: ${payload.new.priority} Priority`, {
            description: payload.new.description.substring(0, 50) + '...',
            action: {
              label: 'View',
              onClick: () => window.location.href = '/admin/helpdesk-jobs'
            }
          });
        }
      )
      .subscribe();

    // Subscribe to new proposal requests
    const proposalsChannel = supabase
      .channel('admin-proposals')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'proposal_requests' },
        (payload) => {
          const newNotification: Notification = {
            id: payload.new.id,
            type: 'lead',
            title: 'New Proposal Request',
            description: `${payload.new.company_name} - ${payload.new.services?.length || 0} services`,
            time: new Date(),
            path: '/admin/contacts', // Leads center
            read: false
          };
          addNotification(newNotification);
          toast.success(`High Value Lead: ${payload.new.company_name}`, {
            description: `Requesting ${payload.new.services?.join(', ') || 'FM services'}`,
            action: {
              label: 'Review',
              onClick: () => window.location.href = '/admin/contacts'
            }
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(leadsChannel);
      supabase.removeChannel(jobsChannel);
      supabase.removeChannel(proposalsChannel);
    };
  }, []);

  const addNotification = (notif: Notification) => {
    setNotifications(prev => [notif, ...prev].slice(0, 10)); // Keep last 10
    setUnreadCount(prev => prev + 1);
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  return (
    <DropdownMenu onOpenChange={(open) => { if (open) markAllRead(); }}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-600 text-white border-white scale-75 animate-bounce">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[350px] p-0 rounded-xl overflow-hidden shadow-2xl border-white/5">
        <div className="bg-slate-900 p-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="font-semibold text-sm text-white">Live Activity</h3>
          <Button variant="ghost" size="sm" className="h-7 text-[10px] uppercase font-bold tracking-wider text-muted-foreground hover:text-white" onClick={markAllRead}>
            Clear All
          </Button>
        </div>
        
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <Bell className="h-10 w-10 mx-auto mb-3 opacity-10" />
              <p className="text-sm">No recent activity</p>
            </div>
          ) : (
            notifications.map((notif) => (
              <DropdownMenuItem key={notif.id} className="p-4 border-b border-white/5 focus:bg-white/5 cursor-pointer group" asChild>
                <Link href={notif.path} className="flex gap-4 items-start">
                  <div className={`mt-1 p-2 rounded-full ${notif.type === 'lead' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'}`}>
                    {notif.type === 'lead' ? <MessageSquare className="h-4 w-4" /> : <Wrench className="h-4 w-4" />}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-white">{notif.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{notif.description}</p>
                    <p className="text-[10px] text-gray-500 font-mono italic">
                      {formatDistanceToNow(notif.time, { addSuffix: true })}
                    </p>
                  </div>
                  {!notif.read && <div className="h-2 w-2 rounded-full bg-primary animate-pulse mt-2" />}
                </Link>
              </DropdownMenuItem>
            ))
          )}
        </div>
        
        <div className="p-3 bg-slate-900 border-t border-white/5 text-center">
           <Link href="/admin/contacts" className="text-[10px] uppercase font-black text-primary hover:text-white transition-colors tracking-widest">
            View All Database Submissions
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
