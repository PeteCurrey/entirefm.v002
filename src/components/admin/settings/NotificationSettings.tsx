"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bell, Mail, FileText, Users, Wrench, Building2, Save } from "lucide-react";

type AdminSetting = {
  id: string;
  setting_key: string;
  setting_value: any;
  category: string;
  description: string | null;
};

const notificationOptions = [
  {
    key: "notification_new_proposal",
    label: "New Proposal",
    description: "Send email when a new proposal request is submitted",
    icon: FileText,
  },
  {
    key: "notification_new_contact",
    label: "New Contact",
    description: "Send email when a new contact form is submitted",
    icon: Users,
  },
  {
    key: "notification_new_job",
    label: "New Job",
    description: "Send email when a new helpdesk job is logged",
    icon: Wrench,
  },
  {
    key: "notification_new_supplier",
    label: "New Supplier Application",
    description: "Send email when a supplier submits an application",
    icon: Building2,
  },
  {
    key: "notification_job_status_change",
    label: "Job Status Changes",
    description: "Send email when a job status is updated",
    icon: Wrench,
  },
  {
    key: "notification_proposal_status_change",
    label: "Proposal Status Changes",
    description: "Send email when a proposal status is updated",
    icon: FileText,
  },
];

export default function NotificationSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [notifications, setNotifications] = useState<Record<string, boolean>>({});

  const { data: settings, isLoading } = useQuery({
    queryKey: ["admin-settings", "notifications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("admin_settings")
        .select("*")
        .eq("category", "notifications");

      if (error) throw error;
      return data as AdminSetting[];
    },
  });

  useEffect(() => {
    if (settings) {
      const notificationState: Record<string, boolean> = {};
      settings.forEach((setting) => {
        notificationState[setting.setting_key] = setting.setting_value === true || setting.setting_value === "true";
      });
      // Set defaults for any missing settings
      notificationOptions.forEach((option) => {
        if (!(option.key in notificationState)) {
          notificationState[option.key] = true;
        }
      });
      setNotifications(notificationState);
    }
  }, [settings]);

  const updateMutation = useMutation({
    mutationFn: async (updates: Record<string, boolean>) => {
      for (const [key, value] of Object.entries(updates)) {
        const existing = settings?.find((s) => s.setting_key === key);

        if (existing) {
          const { error } = await supabase
            .from("admin_settings")
            .update({
              setting_value: value,
              updated_at: new Date().toISOString(),
            })
            .eq("setting_key", key);

          if (error) throw error;
        } else {
          const { error } = await supabase.from("admin_settings").insert({
            setting_key: key,
            setting_value: value,
            category: "notifications",
            description: notificationOptions.find((o) => o.key === key)?.description || null,
          });

          if (error) throw error;
        }
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      toast({
        title: "Settings Saved",
        description: "Notification preferences have been updated.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save notification settings.",
        variant: "destructive",
      });
    },
  });

  const handleToggle = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    updateMutation.mutate(notifications);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Email Notifications
          </CardTitle>
          <CardDescription>
            Configure which events trigger email notifications to administrators
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {notificationOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.key}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <Label htmlFor={option.key} className="font-medium">
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={option.key}
                    checked={notifications[option.key] ?? true}
                    onCheckedChange={(checked) => handleToggle(option.key, checked)}
                  />
                </div>
              );
            })}
          </div>
          <Button onClick={handleSave} disabled={updateMutation.isPending}>
            <Save className="h-4 w-4 mr-2" />
            {updateMutation.isPending ? "Saving..." : "Save Preferences"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Notification Recipients
          </CardTitle>
          <CardDescription>
            Notifications are sent to the primary and support email addresses configured in General Settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            To change notification recipients, update the email addresses in the General Settings tab.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
