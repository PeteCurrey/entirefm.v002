"use client";

import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Mail, 
  Layers, 
  Users, 
  ShieldCheck,
  Globe
} from "lucide-react";
import GeneralSettings from "@/components/admin/settings/GeneralSettings";
import NotificationSettings from "@/components/admin/settings/NotificationSettings";
import EmailSettings from "@/components/admin/settings/EmailSettings";
import IntegrationsSettings from "@/components/admin/settings/IntegrationsSettings";
import UserManagement from "@/components/admin/settings/UserManagement";

export default function Settings() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") || "general";

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <SettingsIcon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
          <p className="text-muted-foreground">Configure your platform preferences and integrations</p>
        </div>
      </div>

      <Tabs defaultValue={defaultTab} className="space-y-6">
        <div className="border-b">
          <TabsList className="bg-transparent h-auto p-0 gap-6 w-full justify-start overflow-x-auto">
            <TabsTrigger 
              value="general" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-2 px-1 gap-2"
            >
              <Globe className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-2 px-1 gap-2"
            >
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="email" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-2 px-1 gap-2"
            >
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger 
              value="integrations" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-2 px-1 gap-2"
            >
              <Layers className="h-4 w-4" />
              Integrations
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none py-2 px-1 gap-2"
            >
              <Users className="h-4 w-4" />
              User Access
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="general" className="mt-0">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="notifications" className="mt-0">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="email" className="mt-0">
          <EmailSettings />
        </TabsContent>

        <TabsContent value="integrations" className="mt-0">
          <IntegrationsSettings />
        </TabsContent>

        <TabsContent value="users" className="mt-0">
          <UserManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
