"use client";

import { useNotifications } from "@/context/NotificationContext";
import { Bell, MessageSquare, Wrench, FileText, X } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default function AdminNotifications() {
  const { notifications, unreadCount, markAllRead } = useNotifications();

  return (
    <DropdownMenu onOpenChange={(open) => { if (open && unreadCount > 0) markAllRead(); }}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-white/5 transition-all">
          <Bell className={`h-5 w-5 ${unreadCount > 0 ? 'text-primary' : 'text-muted-foreground'}`} />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-600 text-white border-white scale-75 animate-bounce shadow-lg">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[350px] p-0 rounded-xl overflow-hidden shadow-2xl border-white/5 bg-slate-950/95 backdrop-blur-xl">
        <div className="bg-slate-900/50 p-4 border-b border-white/5 flex items-center justify-between">
          <h3 className="font-semibold text-sm text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Live Activity
          </h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-7 text-[10px] uppercase font-bold tracking-wider text-muted-foreground hover:text-white" onClick={markAllRead}>
              Mark Read
            </Button>
          )}
        </div>
        
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground bg-slate-900/20">
              <Bell className="h-10 w-10 mx-auto mb-3 opacity-10" />
              <p className="text-xs uppercase tracking-widest font-bold">No recent activity</p>
            </div>
          ) : (
            notifications.map((notif) => (
              <DropdownMenuItem key={notif.id} className="p-4 border-b border-white/5 focus:bg-white/5 cursor-pointer group" asChild>
                <Link href={notif.path} className="flex gap-4 items-start">
                  <div className={`mt-1 p-2 rounded-full ${
                    notif.type === 'lead' ? 'bg-blue-500/10 text-blue-500' : 
                    notif.type === 'proposal' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'
                  }`}>
                    {notif.type === 'lead' ? <MessageSquare className="h-4 w-4" /> : 
                     notif.type === 'proposal' ? <FileText className="h-4 w-4" /> : <Wrench className="h-4 w-4" />}
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
        
        <div className="p-3 bg-slate-900/50 border-t border-white/5 text-center">
           <Link href="/admin/contacts" className="text-[10px] uppercase font-black text-primary hover:text-white transition-colors tracking-widest">
            View All Database Submissions
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
