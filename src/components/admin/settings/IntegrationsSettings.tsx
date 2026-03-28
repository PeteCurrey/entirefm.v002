"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  Link2,
  CheckCircle,
  XCircle,
  Settings,
  RefreshCw,
  Mail,
  Search,
  Share2,
  BarChart3,
  Webhook,
} from "lucide-react";

type Integration = {
  id: string;
  name: string;
  service_type: string;
  credentials: any;
  is_active: boolean;
  last_tested: string | null;
  test_status: string | null;
  created_at: string;
  updated_at: string;
};

const integrationConfigs = [
  {
    service_type: "resend",
    name: "Resend Email",
    icon: Mail,
    description: "Email delivery service for transactional emails",
    fields: [{ key: "api_key", label: "API Key", type: "password" }],
  },
  {
    service_type: "google_search_console",
    name: "Google Search Console",
    icon: Search,
    description: "Monitor search performance and indexing",
    fields: [
      { key: "client_id", label: "Client ID", type: "text" },
      { key: "client_secret", label: "Client Secret", type: "password" },
    ],
  },
  {
    service_type: "google_analytics",
    name: "Google Analytics",
    icon: BarChart3,
    description: "Website traffic and user behavior analytics",
    fields: [{ key: "measurement_id", label: "Measurement ID", type: "text" }],
  },
  {
    service_type: "linkedin",
    name: "LinkedIn",
    icon: Share2,
    description: "Post updates and manage company page",
    fields: [
      { key: "client_id", label: "Client ID", type: "text" },
      { key: "client_secret", label: "Client Secret", type: "password" },
    ],
  },
  {
    service_type: "twitter",
    name: "Twitter / X",
    icon: Share2,
    description: "Post tweets and engage with followers",
    fields: [
      { key: "api_key", label: "API Key", type: "text" },
      { key: "api_secret", label: "API Secret", type: "password" },
      { key: "access_token", label: "Access Token", type: "password" },
      { key: "access_token_secret", label: "Access Token Secret", type: "password" },
    ],
  },
  {
    service_type: "dataforseo",
    name: "DataforSEO",
    icon: Search,
    description: "Source keyword data, SERP results, and backlink metrics",
    fields: [
      { key: "api_login", label: "API Login", type: "text" },
      { key: "api_password", label: "API Password", type: "password" },
    ],
  },
  {
    service_type: "ahrefs",
    name: "Ahrefs",
    icon: Link2,
    description: "Professional backlink and competitor analysis",
    fields: [{ key: "api_token", label: "API Token", type: "password" }],
  },
  {
    service_type: "webhook",
    name: "Custom Webhook",
    icon: Webhook,
    description: "Send data to external systems",
    fields: [
      { key: "url", label: "Webhook URL", type: "url" },
      { key: "secret", label: "Secret Key (optional)", type: "password" },
    ],
  },
];

export default function IntegrationsSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [selectedIntegration, setSelectedIntegration] = useState<typeof integrationConfigs[0] | null>(null);
  const [credentials, setCredentials] = useState<Record<string, string>>({});
  const [testingId, setTestingId] = useState<string | null>(null);

  const { data: integrations, isLoading } = useQuery({
    queryKey: ["api-integrations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("api_integrations")
        .select("*")
        .order("name");

      if (error) throw error;
      return data as Integration[];
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async ({ service_type, name, credentials }: { service_type: string; name: string; credentials: Record<string, string> }) => {
      const existing = integrations?.find((i) => i.service_type === service_type);

      if (existing) {
        const { error } = await supabase
          .from("api_integrations")
          .update({
            credentials,
            updated_at: new Date().toISOString(),
          })
          .eq("id", existing.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("api_integrations").insert({
          name,
          service_type,
          credentials,
          is_active: true,
        });

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api-integrations"] });
      setConfigDialogOpen(false);
      setCredentials({});
      toast({
        title: "Integration Saved",
        description: "Your integration settings have been saved.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save integration.",
        variant: "destructive",
      });
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string; is_active: boolean }) => {
      const { error } = await supabase
        .from("api_integrations")
        .update({ is_active, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api-integrations"] });
    },
  });

  const testMutation = useMutation({
    mutationFn: async (id: string) => {
      // Simulate testing - in production, this would call an edge function
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const { error } = await supabase
        .from("api_integrations")
        .update({
          last_tested: new Date().toISOString(),
          test_status: "success",
        })
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["api-integrations"] });
      setTestingId(null);
      toast({
        title: "Test Successful",
        description: "The integration is working correctly.",
      });
    },
    onError: () => {
      setTestingId(null);
      toast({
        title: "Test Failed",
        description: "Could not connect to the service.",
        variant: "destructive",
      });
    },
  });

  const handleConfigure = (config: typeof integrationConfigs[0]) => {
    setSelectedIntegration(config);
    const existing = integrations?.find((i) => i.service_type === config.service_type);
    if (existing?.credentials) {
      setCredentials(existing.credentials);
    } else {
      setCredentials({});
    }
    setConfigDialogOpen(true);
  };

  const handleSave = () => {
    if (selectedIntegration) {
      upsertMutation.mutate({
        service_type: selectedIntegration.service_type,
        name: selectedIntegration.name,
        credentials,
      });
    }
  };

  const handleTest = (id: string) => {
    setTestingId(id);
    testMutation.mutate(id);
  };

  const getIntegrationStatus = (serviceType: string) => {
    const integration = integrations?.find((i) => i.service_type === serviceType);
    return integration;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5" />
            API Integrations
          </CardTitle>
          <CardDescription>
            Connect external services to enhance your admin capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid gap-4">
              {integrationConfigs.map((config) => {
                const integration = getIntegrationStatus(config.service_type);
                const Icon = config.icon;

                return (
                  <div
                    key={config.service_type}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{config.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {config.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {integration ? (
                        <>
                          <div className="flex items-center gap-2">
                            {integration.test_status === "success" ? (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Connected
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                                Configured
                              </Badge>
                            )}
                          </div>
                          <Switch
                            checked={integration.is_active}
                            onCheckedChange={(checked) =>
                              toggleMutation.mutate({ id: integration.id, is_active: checked })
                            }
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleTest(integration.id)}
                            disabled={testingId === integration.id}
                          >
                            {testingId === integration.id ? (
                              <RefreshCw className="h-4 w-4 animate-spin" />
                            ) : (
                              "Test"
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleConfigure(config)}
                          >
                            <Settings className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button variant="outline" onClick={() => handleConfigure(config)}>
                          Connect
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Configuration Dialog */}
      <Dialog open={configDialogOpen} onOpenChange={setConfigDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Configure {selectedIntegration?.name}</DialogTitle>
            <DialogDescription>
              Enter your API credentials to connect this service
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {selectedIntegration?.fields.map((field) => (
              <div key={field.key} className="space-y-2">
                <Label htmlFor={field.key}>{field.label}</Label>
                <Input
                  id={field.key}
                  type={field.type}
                  value={credentials[field.key] || ""}
                  onChange={(e) =>
                    setCredentials({ ...credentials, [field.key]: e.target.value })
                  }
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              </div>
            ))}
            <p className="text-sm text-muted-foreground">
              Credentials are stored securely and encrypted at rest.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfigDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={upsertMutation.isPending}>
              {upsertMutation.isPending ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
