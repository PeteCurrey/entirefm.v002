"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save, Key, Bot, ShieldCheck, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ChatSettings() {
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchChatSettings();
  }, []);

  const fetchChatSettings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('api_integrations')
        .select('*')
        .eq('service_type', 'anthropic')
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data && data.credentials) {
        // We don't want to show the full key for security, 
        // but for the sake of this admin tool, we'll allow editing.
        // In a real app, you might show "••••••••" or just the last 4 chars.
        const creds = data.credentials as any;
        setApiKey(creds.api_key || "");
      }
    } catch (error) {
      console.error('Error fetching chat settings:', error);
      toast({
        title: "Error",
        description: "Failed to load chat settings.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Invalid Key",
        description: "Please enter a valid API key.",
        variant: "destructive",
      });
      return;
    }

    try {
      setSaving(true);
      
      const { data: existing } = await supabase
        .from('api_integrations')
        .select('id')
        .eq('service_type', 'anthropic')
        .single();

      const payload = {
        name: 'Anthropic Claude API',
        service_type: 'anthropic',
        credentials: { api_key: apiKey.trim() },
        is_active: true,
        updated_at: new Date().toISOString()
      };

      let error;
      if (existing) {
        const { error: updateError } = await supabase
          .from('api_integrations')
          .update(payload)
          .eq('id', existing.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('api_integrations')
          .insert(payload);
        error = insertError;
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: "Chat settings updated successfully.",
      });
    } catch (error) {
      console.error('Error saving chat settings:', error);
      toast({
        title: "Error",
        description: "Failed to save chat settings.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Chat Advisor Settings</h1>
        <p className="text-muted-foreground">Configure the EntireFM Virtual Advisor and manage AI integrations.</p>
      </div>

      <Alert variant="default" className="bg-primary/5 border-primary/20">
        <Bot className="h-4 w-4 text-primary" />
        <AlertTitle className="text-primary font-semibold">AI Integration Active</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          The chat advisor is powered by Anthropic Claude. Ensure your API key has sufficient credits to avoid service interruptions.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            <CardTitle>Anthropic API Configuration</CardTitle>
          </div>
          <CardDescription>
            Input your Anthropic Claude API key to enable the FM Advisor chat widget.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="api-key">Claude API Key</Label>
            <div className="flex gap-4">
              <Input
                id="api-key"
                type="password"
                placeholder="sk-ant-api03-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="font-mono"
              />
            </div>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-1">
              Never share your API key. It is stored securely in the database.
            </p>
          </div>

          <div className="pt-4 border-t border-border flex justify-end">
            <Button onClick={handleSave} disabled={saving} className="gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Save Configuration
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <CardTitle>Compliance Checks</CardTitle>
            </div>
            <CardDescription>Advisor training status</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                SFG20 Data Integrated
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                EntireFM Services Knowledge Base
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Standard Tone & Voice Applied
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              <CardTitle>Usage Monitoring</CardTitle>
            </div>
            <CardDescription>Token and interaction stats</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground italic">
              Advanced usage analytics coming soon to the marketing dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
