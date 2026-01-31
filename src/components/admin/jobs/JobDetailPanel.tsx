import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { ArrowLeft, Save, Loader2, Phone, Mail, MapPin, Building2, User, FileText, Clock, AlertTriangle, History, Download } from "lucide-react";
import JobActivityLog from "./JobActivityLog";
import { exportCAFMJobToPdf } from "@/lib/exportJobPdf";

interface JobDetailPanelProps {
  job: {
    id: string;
    job_ref: string;
    created_at: string;
    updated_at: string;
    site_name: string;
    site_location: string;
    asset_or_area: string;
    priority: string;
    description: string;
    access_requirements: string | null;
    contact_name: string;
    contact_phone: string;
    contact_email: string | null;
    source: string;
    status: string;
    admin_notes: string | null;
    attachment_url: string | null;
  };
  onBack: () => void;
  onSave: (updates: { status: string; admin_notes: string }) => Promise<void>;
  isSaving: boolean;
}

const statuses = [
  { value: "Logged", label: "Logged" },
  { value: "Acknowledged", label: "Acknowledged" },
  { value: "Assigned", label: "Assigned" },
  { value: "In Progress", label: "In Progress" },
  { value: "On Hold", label: "On Hold" },
  { value: "Completed", label: "Completed" },
  { value: "Cancelled", label: "Cancelled" },
];

export default function JobDetailPanel({ job, onBack, onSave, isSaving }: JobDetailPanelProps) {
  const [status, setStatus] = useState(job.status);
  const [notes, setNotes] = useState(job.admin_notes || "");
  const [hasChanges, setHasChanges] = useState(false);

  const { data: activities } = useQuery({
    queryKey: ['job-activity-logs', job.id, 'cafm'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('job_activity_logs')
        .select('*')
        .eq('job_id', job.id)
        .eq('job_type', 'cafm')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setHasChanges(true);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    setHasChanges(true);
  };

  const handleSave = async () => {
    await onSave({ status, admin_notes: notes });
    setHasChanges(false);
  };

  const handleExportPdf = () => {
    exportCAFMJobToPdf(job, activities || []);
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "emergency":
        return <Badge className="bg-red-600 text-white">Emergency</Badge>;
      case "urgent":
        return <Badge className="bg-orange-500 text-white">Urgent</Badge>;
      case "normal":
        return <Badge variant="secondary">Normal</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "logged":
        return <Badge className="bg-blue-600 text-white">Logged</Badge>;
      case "acknowledged":
        return <Badge className="bg-indigo-600 text-white">Acknowledged</Badge>;
      case "assigned":
        return <Badge className="bg-purple-600 text-white">Assigned</Badge>;
      case "in progress":
        return <Badge className="bg-yellow-600 text-white">In Progress</Badge>;
      case "on hold":
        return <Badge className="bg-gray-500 text-white">On Hold</Badge>;
      case "completed":
        return <Badge className="bg-green-600 text-white">Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline"
            onClick={handleExportPdf}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={!hasChanges || isSaving}
            className="gap-2"
          >
            {isSaving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save Changes
          </Button>
        </div>
      </div>

      {/* Job Header Card */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">{job.job_ref}</h1>
              {getPriorityBadge(job.priority)}
              {getStatusBadge(job.status)}
            </div>
            <p className="text-sm text-muted-foreground">
              Created {format(new Date(job.created_at), "PPpp")}
              {job.updated_at !== job.created_at && (
                <> • Updated {format(new Date(job.updated_at), "PPpp")}</>
              )}
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            Source: {job.source}
          </Badge>
        </div>

        <Separator className="my-4" />

        {/* Site Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Site Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground min-w-[100px]">Site Name:</span>
                <span className="font-medium">{job.site_name}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="font-medium">{job.site_location}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground min-w-[100px]">Asset/Area:</span>
                <span className="font-medium">{job.asset_or_area}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <User className="h-4 w-4" />
              Contact Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{job.contact_name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${job.contact_phone}`} className="font-medium text-primary hover:underline">
                  {job.contact_phone}
                </a>
              </div>
              {job.contact_email && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${job.contact_email}`} className="font-medium text-primary hover:underline">
                    {job.contact_email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description & Access Requirements */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4" />
            Job Description
          </h3>
          <p className="text-sm whitespace-pre-wrap">{job.description}</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <AlertTriangle className="h-4 w-4" />
            Access Requirements
          </h3>
          <p className="text-sm whitespace-pre-wrap">
            {job.access_requirements || "No specific access requirements noted."}
          </p>
        </div>
      </div>

      {/* Attachment */}
      {job.attachment_url && (
        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Attachment</h3>
          <div className="border rounded-lg overflow-hidden max-w-md">
            <img 
              src={job.attachment_url} 
              alt="Job attachment" 
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Status & Notes Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <Clock className="h-4 w-4" />
            Update Status
          </h3>
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Admin Notes</h3>
          <Textarea
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="Add internal notes about this job..."
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground mt-2">
            These notes are for internal use only and not visible to the reporter.
          </p>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-card border rounded-lg p-6">
        <h3 className="font-semibold flex items-center gap-2 mb-4">
          <History className="h-4 w-4" />
          Activity Log
        </h3>
        <JobActivityLog jobId={job.id} jobType="cafm" />
      </div>
    </div>
  );
}
