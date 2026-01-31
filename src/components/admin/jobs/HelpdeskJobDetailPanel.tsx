import { useState } from "react";
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
import { ArrowLeft, Save, Loader2, Phone, Mail, MapPin, Building2, User, FileText, Clock, Bot } from "lucide-react";

interface HelpdeskJob {
  id: string;
  created_at: string;
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string | null;
  site_location: string;
  category: string;
  priority: string;
  asset_reference: string;
  description: string;
  ai_summary: string | null;
  status: string;
  source_page: string | null;
  attachment_url: string | null;
}

interface HelpdeskJobDetailPanelProps {
  job: HelpdeskJob;
  onBack: () => void;
  onSave: (updates: { status: string; ai_summary: string }) => Promise<void>;
  isSaving: boolean;
}

const statuses = [
  { value: "new", label: "New" },
  { value: "acknowledged", label: "Acknowledged" },
  { value: "in_progress", label: "In Progress" },
  { value: "awaiting_parts", label: "Awaiting Parts" },
  { value: "awaiting_access", label: "Awaiting Access" },
  { value: "resolved", label: "Resolved" },
  { value: "closed", label: "Closed" },
];

export default function HelpdeskJobDetailPanel({ job, onBack, onSave, isSaving }: HelpdeskJobDetailPanelProps) {
  const [status, setStatus] = useState(job.status);
  const [notes, setNotes] = useState(job.ai_summary || "");
  const [hasChanges, setHasChanges] = useState(false);

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setHasChanges(true);
  };

  const handleNotesChange = (value: string) => {
    setNotes(value);
    setHasChanges(true);
  };

  const handleSave = async () => {
    await onSave({ status, ai_summary: notes });
    setHasChanges(false);
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Emergency":
        return <Badge className="bg-red-600 text-white">Emergency</Badge>;
      case "Urgent":
        return <Badge className="bg-orange-500 text-white">Urgent</Badge>;
      default:
        return <Badge variant="secondary">Routine</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-600 text-white">New</Badge>;
      case "acknowledged":
        return <Badge className="bg-indigo-600 text-white">Acknowledged</Badge>;
      case "in_progress":
        return <Badge className="bg-yellow-600 text-white">In Progress</Badge>;
      case "awaiting_parts":
        return <Badge className="bg-purple-600 text-white">Awaiting Parts</Badge>;
      case "awaiting_access":
        return <Badge className="bg-purple-600 text-white">Awaiting Access</Badge>;
      case "resolved":
        return <Badge className="bg-green-600 text-white">Resolved</Badge>;
      case "closed":
        return <Badge variant="secondary">Closed</Badge>;
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
            Back to Helpdesk Jobs
          </Button>
        </div>
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

      {/* Job Header Card */}
      <div className="bg-card border rounded-lg p-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold">{job.category}</h1>
              {getPriorityBadge(job.priority)}
              {getStatusBadge(job.status)}
            </div>
            <p className="text-sm text-muted-foreground">
              Reported {format(new Date(job.created_at), "PPpp")}
            </p>
          </div>
          {job.source_page && (
            <Badge variant="outline" className="text-sm">
              From: {job.source_page}
            </Badge>
          )}
        </div>

        <Separator className="my-4" />

        {/* Contact & Site Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <User className="h-4 w-4" />
              Reporter Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{job.name}</span>
                <Badge variant="outline" className="text-xs">{job.role}</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{job.company}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${job.email}`} className="font-medium text-primary hover:underline">
                  {job.email}
                </a>
              </div>
              {job.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${job.phone}`} className="font-medium text-primary hover:underline">
                    {job.phone}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Location & Asset
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground min-w-[100px]">Site Location:</span>
                <span className="font-medium">{job.site_location}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground min-w-[100px]">Asset Ref:</span>
                <span className="font-medium">{job.asset_reference}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-muted-foreground min-w-[100px]">Category:</span>
                <span className="font-medium">{job.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-card border rounded-lg p-6">
        <h3 className="font-semibold flex items-center gap-2 mb-4">
          <FileText className="h-4 w-4" />
          Issue Description
        </h3>
        <p className="text-sm whitespace-pre-wrap">{job.description}</p>
      </div>

      {/* Attachment */}
      {job.attachment_url && (
        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Attachment</h3>
          <div className="border rounded-lg overflow-hidden max-w-md">
            <img 
              src={job.attachment_url} 
              alt="Issue attachment" 
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
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <Bot className="h-4 w-4" />
            Engineer Notes / AI Summary
          </h3>
          <Textarea
            value={notes}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="Add notes about diagnosis, resolution, or any relevant details..."
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Internal notes for engineering team. Originally populated by AI triage if applicable.
          </p>
        </div>
      </div>
    </div>
  );
}
