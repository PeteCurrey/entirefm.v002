"use client";

import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Users, Save, Plus, X } from "lucide-react";

interface TeamMembersSettingsProps {
  settings: { setting_key: string; setting_value: any }[] | undefined;
}

export default function TeamMembersSettings({ settings }: TeamMembersSettingsProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [members, setMembers] = useState<string[]>([]);
  const [newMember, setNewMember] = useState("");

  useEffect(() => {
    if (settings) {
      const teamSetting = settings.find(s => s.setting_key === "team_members");
      if (teamSetting) {
        const val = teamSetting.setting_value;
        const parsed = Array.isArray(val) ? val : typeof val === "string" ? JSON.parse(val) : [];
        setMembers(parsed);
      }
    }
  }, [settings]);

  const upsertMutation = useMutation({
    mutationFn: async (membersList: string[]) => {
      const { data: existing } = await supabase
        .from("admin_settings")
        .select("id")
        .eq("setting_key", "team_members")
        .maybeSingle();

      if (existing) {
        const { error } = await supabase
          .from("admin_settings")
          .update({ setting_value: JSON.stringify(membersList), updated_at: new Date().toISOString() })
          .eq("setting_key", "team_members");
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("admin_settings")
          .insert({
            setting_key: "team_members",
            category: "general",
            setting_value: JSON.stringify(membersList),
            description: "List of team members available for contact assignment",
          });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      toast({ title: "Team Members Saved", description: "The team members list has been updated." });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to save team members.", variant: "destructive" });
    },
  });

  const addMember = () => {
    const name = newMember.trim();
    if (!name || members.includes(name)) return;
    setMembers(prev => [...prev, name]);
    setNewMember("");
  };

  const removeMember = (name: string) => {
    setMembers(prev => prev.filter(m => m !== name));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Team Members
        </CardTitle>
        <CardDescription>
          Manage team members available for contact submission assignment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {members.map(member => (
            <Badge key={member} variant="secondary" className="gap-1 pr-1">
              {member}
              <button
                onClick={() => removeMember(member)}
                className="ml-1 rounded-full hover:bg-destructive/20 p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {members.length === 0 && (
            <p className="text-sm text-muted-foreground">No team members added yet.</p>
          )}
        </div>

        <div className="flex gap-2">
          <Input
            value={newMember}
            onChange={e => setNewMember(e.target.value)}
            placeholder="Add team member..."
            onKeyDown={e => e.key === "Enter" && addMember()}
          />
          <Button variant="outline" onClick={addMember} disabled={!newMember.trim()}>
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>

        <Button onClick={() => upsertMutation.mutate(members)} disabled={upsertMutation.isPending}>
          <Save className="h-4 w-4 mr-2" />
          {upsertMutation.isPending ? "Saving..." : "Save Team Members"}
        </Button>
      </CardContent>
    </Card>
  );
}
