"use client";

import { useEffect, useRef, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import { MessageSquare, FileText, Bell } from "lucide-react";
import Link from "next/link";

// This hook sets up realtime Supabase subscriptions and fires browser
// notifications + in-app toasts whenever new leads arrive.
export function useLeadNotifications() {
  const supabaseRef = useRef<any>(null);
  const permissionRef = useRef<NotificationPermission>("default");

  const requestPermission = useCallback(async () => {
    if (typeof window === "undefined" || !("Notification" in window)) return;
    if (Notification.permission === "granted") {
      permissionRef.current = "granted";
      return;
    }
    if (Notification.permission !== "denied") {
      const result = await Notification.requestPermission();
      permissionRef.current = result;
    }
  }, []);

  const fireNotification = useCallback((title: string, body: string, url: string) => {
    // In-app toast
    toast.custom(() => (
      <Link href={url} className="flex items-center gap-3 p-4 bg-slate-900 border border-primary/30 rounded-xl shadow-2xl cursor-pointer hover:bg-slate-800 transition-colors min-w-[320px]">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary animate-pulse flex-shrink-0">
          <MessageSquare className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase text-primary tracking-widest">🔔 New Lead</p>
          <p className="text-sm font-bold text-white truncate">{title}</p>
          <p className="text-xs text-slate-400 truncate">{body}</p>
        </div>
      </Link>
    ), { duration: 8000 });

    // Browser notification (if permission granted)
    if (permissionRef.current === "granted") {
      try {
        new Notification(`🔔 ${title}`, {
          body,
          icon: "/favicon.ico",
          tag: "lead-notification",
        });
      } catch (e) {
        // Browser notifications not supported in this context
      }
    }
  }, []);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) return;

    // Request browser notification permission
    requestPermission();

    const client = createClient(url, anonKey, {
      auth: { persistSession: false },
      realtime: { params: { eventsPerSecond: 10 } },
    });
    supabaseRef.current = client;

    // Subscribe to new contact submissions
    const contactChannel = client
      .channel("admin-lead-notifications")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "contact_submissions" },
        (payload) => {
          const record = payload.new as any;
          fireNotification(
            record.name || "New Inquiry",
            record.company ? `${record.company} — ${record.message?.slice(0, 60)}...` : record.message?.slice(0, 80) || "New contact form submission",
            "/admin/contacts"
          );
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "proposal_requests" },
        (payload) => {
          const record = payload.new as any;
          fireNotification(
            `Proposal: ${record.company_name || "New Company"}`,
            `Strategic proposal request received from ${record.contact_name || "a prospect"}`,
            "/admin/contacts"
          );
        }
      )
      .subscribe();

    return () => {
      client.removeChannel(contactChannel);
    };
  }, [fireNotification, requestPermission]);

  return { requestPermission };
}
