"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building2, Hash, FileText, Save } from "lucide-react";
import TeamMembersSettings from "./TeamMembersSettings";

type AdminSetting = {
  id: string;
  setting_key: string;
  setting_value: any;
  category: string;
  description: string | null;
  updated_at: string;
};

export default function GeneralSettings() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [jobPrefix, setJobPrefix] = useState("EFM-");
  const [jobNextNumber, setJobNextNumber] = useState(1);
  const [invoicePrefix, setInvoicePrefix] = useState("INV-");
  const [invoiceNextNumber, setInvoiceNextNumber] = useState(1);

  const { data: settings, isLoading } = useQuery({
    queryKey: ["admin-settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("admin_settings")
        .select("*");

      if (error) throw error;
      return data as AdminSetting[];
    },
  });

  useEffect(() => {
    if (settings) {
      settings.forEach((setting) => {
        const value = typeof setting.setting_value === 'string' 
          ? setting.setting_value.replace(/^"|"$/g, '') 
          : setting.setting_value;

        switch (setting.setting_key) {
          case "company_name":
            setCompanyName(value);
            break;
          case "company_email":
            setCompanyEmail(value);
            break;
          case "support_email":
            setSupportEmail(value);
            break;
          case "job_number_prefix":
            setJobPrefix(value);
            break;
          case "job_number_next":
            setJobNextNumber(Number(value));
            break;
          case "invoice_prefix":
            setInvoicePrefix(value);
            break;
          case "invoice_next":
            setInvoiceNextNumber(Number(value));
            break;
        }
      });
    }
  }, [settings]);

  const updateMutation = useMutation({
    mutationFn: async (updates: { key: string; value: any }[]) => {
      for (const update of updates) {
        const { error } = await supabase
          .from("admin_settings")
          .update({ 
            setting_value: JSON.stringify(update.value),
            updated_at: new Date().toISOString()
          })
          .eq("setting_key", update.key);

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-settings"] });
      toast({
        title: "Settings Saved",
        description: "Your settings have been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
      console.error("Settings update error:", error);
    },
  });

  const handleSaveCompany = () => {
    updateMutation.mutate([
      { key: "company_name", value: companyName },
      { key: "company_email", value: companyEmail },
      { key: "support_email", value: supportEmail },
    ]);
  };

  const handleSaveNumbering = () => {
    updateMutation.mutate([
      { key: "job_number_prefix", value: jobPrefix },
      { key: "job_number_next", value: jobNextNumber },
      { key: "invoice_prefix", value: invoicePrefix },
      { key: "invoice_next", value: invoiceNextNumber },
    ]);
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
      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Company Information
          </CardTitle>
          <CardDescription>
            Basic company details used across the system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="EntireFM"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyEmail">Primary Email</Label>
              <Input
                id="companyEmail"
                type="email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                placeholder="enquiries@entirefm.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportEmail">Support Email</Label>
              <Input
                id="supportEmail"
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                placeholder="helpdesk@entirefm.com"
              />
            </div>
          </div>
          <Button onClick={handleSaveCompany} disabled={updateMutation.isPending}>
            <Save className="h-4 w-4 mr-2" />
            {updateMutation.isPending ? "Saving..." : "Save Company Info"}
          </Button>
        </CardContent>
      </Card>

      {/* Job Numbering */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Job Numbering
          </CardTitle>
          <CardDescription>
            Configure the format for job reference numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="jobPrefix">Job Prefix</Label>
              <Input
                id="jobPrefix"
                value={jobPrefix}
                onChange={(e) => setJobPrefix(e.target.value)}
                placeholder="EFM-"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="jobNextNumber">Next Number</Label>
              <Input
                id="jobNextNumber"
                type="number"
                min={1}
                value={jobNextNumber}
                onChange={(e) => setJobNextNumber(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <span className="text-sm text-muted-foreground">Preview: </span>
            <span className="font-mono font-medium">
              {jobPrefix}{String(jobNextNumber).padStart(4, '0')}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Invoice Numbering */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Invoice Numbering
          </CardTitle>
          <CardDescription>
            Configure the format for invoice numbers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="invoicePrefix">Invoice Prefix</Label>
              <Input
                id="invoicePrefix"
                value={invoicePrefix}
                onChange={(e) => setInvoicePrefix(e.target.value)}
                placeholder="INV-"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="invoiceNextNumber">Next Number</Label>
              <Input
                id="invoiceNextNumber"
                type="number"
                min={1}
                value={invoiceNextNumber}
                onChange={(e) => setInvoiceNextNumber(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <span className="text-sm text-muted-foreground">Preview: </span>
            <span className="font-mono font-medium">
              {invoicePrefix}{String(invoiceNextNumber).padStart(4, '0')}
            </span>
          </div>
          <Button onClick={handleSaveNumbering} disabled={updateMutation.isPending}>
            <Save className="h-4 w-4 mr-2" />
            {updateMutation.isPending ? "Saving..." : "Save Numbering Settings"}
          </Button>
        </CardContent>
      </Card>

      {/* Team Members */}
      <TeamMembersSettings settings={settings} />
    </div>
  );
}
