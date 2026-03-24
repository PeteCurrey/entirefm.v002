"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Bell, Mail, Clock } from 'lucide-react';

export const AlertSettings = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    email: '',
    enabled: true,
    alert_frequency: 'daily',
    alert_types: ['indexation_issues', 'crawl_errors', 'performance_drops'],
  });
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('gsc_alert_preferences')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        const alertTypes = Array.isArray(data.alert_types) 
          ? (data.alert_types as string[])
          : ['indexation_issues', 'crawl_errors', 'performance_drops'];
          
        setSettings({
          email: data.email || "",
          enabled: data.enabled ?? false,
          alert_frequency: data.alert_frequency || "daily",
          alert_types: alertTypes,
        });
      } else {
        // Set default email from user
        setSettings(prev => ({ ...prev, email: user.email || '' }));
      }
    } catch (error) {
      console.error('Error loading alert settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('gsc_alert_preferences')
        .upsert({
          user_id: user.id,
          email: settings.email,
          enabled: settings.enabled,
          alert_frequency: settings.alert_frequency,
          alert_types: settings.alert_types,
        });

      if (error) throw error;

      toast({
        title: "Settings Saved",
        description: "Your alert preferences have been updated",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Error",
        description: "Failed to save alert settings",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const toggleAlertType = (type: string) => {
    setSettings(prev => ({
      ...prev,
      alert_types: prev.alert_types.includes(type)
        ? prev.alert_types.filter(t => t !== type)
        : [...prev.alert_types, type],
    }));
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          <CardTitle>Alert Settings</CardTitle>
        </div>
        <CardDescription>
          Configure email alerts for GSC issues and performance changes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Enable/Disable Alerts */}
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="enabled" className="text-base">Enable Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications when issues are detected
            </p>
          </div>
          <Switch
            id="enabled"
            checked={settings.enabled}
            onCheckedChange={(checked) => setSettings(prev => ({ ...prev, enabled: checked }))}
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={settings.email}
            onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
            placeholder="your@email.com"
          />
          <p className="text-xs text-muted-foreground">
            Alerts will be sent to this email address
          </p>
        </div>

        {/* Alert Frequency */}
        <div className="space-y-2">
          <Label htmlFor="frequency" className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Alert Frequency
          </Label>
          <Select
            value={settings.alert_frequency}
            onValueChange={(value) => setSettings(prev => ({ ...prev, alert_frequency: value }))}
          >
            <SelectTrigger id="frequency">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediate">Immediate (as detected)</SelectItem>
              <SelectItem value="daily">Daily Summary</SelectItem>
              <SelectItem value="weekly">Weekly Summary</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Alert Types */}
        <div className="space-y-3">
          <Label className="text-base">Alert Types</Label>
          <p className="text-sm text-muted-foreground mb-3">
            Choose which types of issues to monitor
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="indexation"
                checked={settings.alert_types.includes('indexation_issues')}
                onCheckedChange={() => toggleAlertType('indexation_issues')}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="indexation" className="cursor-pointer">
                  Indexation Issues
                </Label>
                <p className="text-sm text-muted-foreground">
                  Pages dropped from Google's index
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="crawl"
                checked={settings.alert_types.includes('crawl_errors')}
                onCheckedChange={() => toggleAlertType('crawl_errors')}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="crawl" className="cursor-pointer">
                  Crawl Errors
                </Label>
                <p className="text-sm text-muted-foreground">
                  404s, server errors, and other crawl problems
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="performance"
                checked={settings.alert_types.includes('performance_drops')}
                onCheckedChange={() => toggleAlertType('performance_drops')}
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="performance" className="cursor-pointer">
                  Performance Drops
                </Label>
                <p className="text-sm text-muted-foreground">
                  Significant decreases in clicks or impressions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <Button 
          onClick={saveSettings} 
          disabled={saving || !settings.email}
          className="w-full"
        >
          {saving ? 'Saving...' : 'Save Alert Settings'}
        </Button>
      </CardContent>
    </Card>
  );
};