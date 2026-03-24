"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Loader2, Clock, ArrowRight, FileText, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ActivityLog {
  id: string;
  job_id: string;
  job_type: string;
  action: string;
  field_name: string | null;
  old_value: string | null;
  new_value: string | null;
  notes: string | null;
  created_at: string;
  created_by: string | null;
}

interface JobActivityLogProps {
  jobId: string;
  jobType: "cafm" | "helpdesk";
}

const getActionIcon = (action: string) => {
  switch (action) {
    case "status_change":
      return <Clock className="h-4 w-4" />;
    case "notes_updated":
      return <MessageSquare className="h-4 w-4" />;
    case "created":
      return <FileText className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getActionLabel = (action: string): string => {
  switch (action) {
    case "status_change":
      return "Status Changed";
    case "notes_updated":
      return "Notes Updated";
    case "created":
      return "Job Created";
    case "email_sent":
      return "Email Notification Sent";
    default:
      return action.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  }
};

const getStatusBadge = (status: string | null) => {
  if (!status) return null;
  
  const colorMap: Record<string, string> = {
    // CAFM statuses
    "Logged": "bg-blue-600",
    "Acknowledged": "bg-indigo-600",
    "Assigned": "bg-purple-600",
    "In Progress": "bg-yellow-600",
    "On Hold": "bg-gray-500",
    "Completed": "bg-green-600",
    "Cancelled": "bg-red-600",
    // Helpdesk statuses
    "new": "bg-blue-600",
    "acknowledged": "bg-indigo-600",
    "in_progress": "bg-yellow-600",
    "awaiting_parts": "bg-purple-600",
    "awaiting_access": "bg-purple-600",
    "resolved": "bg-green-600",
    "closed": "bg-gray-500",
  };
  
  const color = colorMap[status] || "bg-gray-500";
  const label = status.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <Badge className={`${color} text-white text-xs`}>
      {label}
    </Badge>
  );
};

export default function JobActivityLog({ jobId, jobType }: JobActivityLogProps) {
  const { data: activities, isLoading } = useQuery({
    queryKey: ['job-activity-logs', jobId, jobType],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('job_activity_logs')
        .select('*')
        .eq('job_id', jobId)
        .eq('job_type', jobType)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as ActivityLog[];
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!activities || activities.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <Clock className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No activity recorded yet</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[300px] pr-4">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex gap-4">
              {/* Timeline dot */}
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background border-2 border-border">
                {getActionIcon(activity.action)}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0 pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium text-sm">
                    {getActionLabel(activity.action)}
                  </span>
                  {activity.created_by && (
                    <span className="text-xs text-muted-foreground">
                      by {activity.created_by}
                    </span>
                  )}
                </div>
                
                <p className="text-xs text-muted-foreground mt-0.5">
                  {format(new Date(activity.created_at), "PPp")}
                </p>
                
                {/* Status change display */}
                {activity.action === "status_change" && (
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {getStatusBadge(activity.old_value)}
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    {getStatusBadge(activity.new_value)}
                  </div>
                )}
                
                {/* Notes change display */}
                {activity.action === "notes_updated" && activity.new_value && (
                  <div className="mt-2 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                    {activity.new_value.length > 100 
                      ? activity.new_value.substring(0, 100) + "..." 
                      : activity.new_value}
                  </div>
                )}
                
                {/* Generic notes */}
                {activity.notes && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
