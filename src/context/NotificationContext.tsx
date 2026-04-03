"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export interface Notification {
  id: string;
  type: 'lead' | 'job' | 'proposal';
  title: string;
  description: string;
  time: Date;
  path: string;
  read: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  markAllRead: () => void;
  removeNotification: (id: string) => void;
  requestBrowserPermission: () => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const permissionRef = useRef<NotificationPermission>("default");
  
  const addNotification = useCallback((notif: Notification) => {
    setNotifications(prev => [notif, ...prev].slice(0, 20));
    setUnreadCount(prev => prev + 1);
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    setUnreadCount(prev => Math.max(0, prev - 1));
  }, []);

  const requestBrowserPermission = useCallback(async () => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    const result = await Notification.requestPermission();
    permissionRef.current = result;
  }, []);

  const fireAlert = useCallback((title: string, body: string, url: string, type: Notification['type']) => {
    // 1. In-app Custom Toast
    toast.custom(() => (
      <Link href={url} className="flex items-center gap-3 p-4 bg-slate-900 border border-primary/30 rounded-xl shadow-2xl cursor-pointer hover:bg-slate-800 transition-colors min-w-[320px]">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center animate-pulse flex-shrink-0 ${
          type === 'lead' ? 'bg-blue-500/20 text-blue-500' : 
          type === 'proposal' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-orange-500/20 text-orange-500'
        }`}>
          <MessageSquare className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase text-primary tracking-widest">🔔 New Activity</p>
          <p className="text-sm font-bold text-white truncate">{title}</p>
          <p className="text-xs text-slate-400 truncate">{body}</p>
        </div>
      </Link>
    ), { duration: 8000 });

    // 2. Browser Push Notification
    if (Notification.permission === "granted") {
      new Notification(`🔔 ${title}`, {
        body,
        icon: "/favicon.ico",
        tag: `notif-${Date.now()}`,
      });
    }
  }, []);

  // Load existing recent notifications on mount
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) return;

    const client = createClient(url, anonKey, {
      auth: { persistSession: false },
    });

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    // Fetch recent contact submissions
    const fetchInitial = async () => {
      const { data: leads } = await client
        .from("contact_submissions")
        .select("id, name, company, created_at")
        .gte("created_at", thirtyDaysAgo)
        .order("created_at", { ascending: false })
        .limit(10);

      const { data: proposals } = await client
        .from("proposal_requests")
        .select("id, company_name, contact_name, created_at")
        .gte("created_at", thirtyDaysAgo)
        .order("created_at", { ascending: false })
        .limit(10);

      const initial: Notification[] = [];

      (leads ?? []).forEach((record: any) => {
        initial.push({
          id: record.id,
          type: 'lead',
          title: 'Contact Inquiry',
          description: `${record.name}${record.company ? ` from ${record.company}` : ''}`,
          time: new Date(record.created_at),
          path: '/admin/contacts',
          read: false,
        });
      });

      (proposals ?? []).forEach((record: any) => {
        initial.push({
          id: record.id,
          type: 'proposal',
          title: 'Proposal Request',
          description: `From ${record.company_name || record.contact_name}`,
          time: new Date(record.created_at),
          path: '/admin/contacts',
          read: false,
        });
      });

      // Sort combined list newest first and set state directly (no toast for existing)
      initial.sort((a, b) => b.time.getTime() - a.time.getTime());
      const top20 = initial.slice(0, 20);
      if (top20.length > 0) {
        setNotifications(top20);
        setUnreadCount(top20.length);
      }
    };

    fetchInitial();
  }, []); // run once on mount

  // Subscribe to real-time new notifications
  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) return;

    // Check existing permission
    if (typeof window !== "undefined" && "Notification" in window) {
      permissionRef.current = Notification.permission;
    }

    const client = createClient(url, anonKey, {
      auth: { persistSession: false },
    });

    const channel = client
      .channel("unified-admin-notifications")
      // Listen for contact submissions
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "contact_submissions" },
        (payload) => {
          const record = payload.new as any;
          const notif: Notification = {
            id: record.id,
            type: 'lead',
            title: 'New Contact Inquiry',
            description: `${record.name} from ${record.company || 'Unknown Co'}`,
            time: new Date(),
            path: '/admin/contacts',
            read: false
          };
          addNotification(notif);
          fireAlert(notif.title, notif.description, notif.path, 'lead');
        }
      )
      // Listen for proposals
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "proposal_requests" },
        (payload) => {
          const record = payload.new as any;
          const notif: Notification = {
            id: record.id,
            type: 'proposal',
            title: 'New Proposal Request',
            description: `From ${record.company_name || record.contact_name}`,
            time: new Date(),
            path: '/admin/contacts',
            read: false
          };
          addNotification(notif);
          fireAlert(notif.title, notif.description, notif.path, 'proposal');
        }
      )
      .subscribe();

    return () => {
      client.removeChannel(channel);
    };
  }, [addNotification, fireAlert]);

  return (
    <NotificationContext.Provider value={{ 
      notifications, 
      unreadCount, 
      markAllRead, 
      removeNotification,
      requestBrowserPermission 
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
}
