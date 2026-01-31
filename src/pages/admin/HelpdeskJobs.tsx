import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Eye, Loader2, Search, RefreshCw } from "lucide-react";
import { format } from "date-fns";
import HelpdeskJobDetailPanel from "@/components/admin/jobs/HelpdeskJobDetailPanel";

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

export default function HelpdeskJobs() {
  const [selectedJob, setSelectedJob] = useState<HelpdeskJob | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: jobs, isLoading, refetch } = useQuery({
    queryKey: ['helpdesk-jobs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('helpdesk_jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as HelpdeskJob[];
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<HelpdeskJob> }) => {
      const { error } = await supabase
        .from('helpdesk_jobs')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['helpdesk-jobs'] });
      toast({
        title: "Job Updated",
        description: "Changes have been saved successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update job. Please try again.",
        variant: "destructive",
      });
    }
  });

  const sendStatusEmail = async (job: HelpdeskJob, newStatus: string) => {
    // Only send email if status actually changed
    if (job.status === newStatus) return;
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-job-status-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            jobType: 'helpdesk',
            recipientEmail: job.email,
            recipientName: job.name,
            oldStatus: job.status,
            newStatus: newStatus,
            siteLocation: job.site_location,
            category: job.category,
            description: job.description,
          }),
        }
      );
      
      if (response.ok) {
        toast({
          title: "Email Sent",
          description: `Status update notification sent to ${job.email}`,
        });
      }
    } catch (error) {
      console.error('Failed to send status email:', error);
      // Don't show error toast - email is secondary to the status update
    }
  };

  const handleSave = async (updates: { status: string; ai_summary: string }) => {
    if (!selectedJob) return;
    const statusChanged = selectedJob.status !== updates.status;
    await updateMutation.mutateAsync({ id: selectedJob.id, updates });
    
    // Send email notification if status changed
    if (statusChanged) {
      await sendStatusEmail(selectedJob, updates.status);
    }
    
    setSelectedJob({ ...selectedJob, ...updates });
  };

  const filteredJobs = jobs?.filter(job => {
    const matchesSearch = 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.site_location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || job.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  }) || [];

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-5rem)] bg-background">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading helpdesk jobs...</p>
        </div>
      </div>
    );
  }

  // Show detail view if a job is selected
  if (selectedJob) {
    return (
      <div className="p-8 bg-background">
        <HelpdeskJobDetailPanel
          job={selectedJob}
          onBack={() => setSelectedJob(null)}
          onSave={handleSave}
          isSaving={updateMutation.isPending}
        />
      </div>
    );
  }

  return (
    <div className="p-8 bg-background">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Helpdesk Jobs</h1>
          <p className="text-muted-foreground">
            Manage maintenance issues reported via the helpdesk form
          </p>
        </div>
        <Button variant="outline" onClick={() => refetch()} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by company, name, email, category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="acknowledged">Acknowledged</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="awaiting_parts">Awaiting Parts</SelectItem>
            <SelectItem value="awaiting_access">Awaiting Access</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="Emergency">Emergency</SelectItem>
            <SelectItem value="Urgent">Urgent</SelectItem>
            <SelectItem value="Routine">Routine</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Total Jobs</p>
          <p className="text-2xl font-bold">{jobs?.length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">New</p>
          <p className="text-2xl font-bold">{jobs?.filter(j => j.status === 'new').length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">In Progress</p>
          <p className="text-2xl font-bold">{jobs?.filter(j => j.status === 'in_progress').length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Resolved</p>
          <p className="text-2xl font-bold">{jobs?.filter(j => j.status === 'resolved').length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground text-red-600">Emergency</p>
          <p className="text-2xl font-bold text-red-600">{jobs?.filter(j => j.priority === 'Emergency').length || 0}</p>
        </Card>
      </div>

      {/* Table */}
      {filteredJobs.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No helpdesk jobs found</p>
        </Card>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.map((job) => (
                <TableRow 
                  key={job.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedJob(job)}
                >
                  <TableCell className="text-sm">
                    {format(new Date(job.created_at), 'dd/MM/yyyy HH:mm')}
                  </TableCell>
                  <TableCell>{getPriorityBadge(job.priority)}</TableCell>
                  <TableCell className="font-medium">{job.company}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{job.name}</div>
                      <div className="text-muted-foreground">{job.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{job.category}</TableCell>
                  <TableCell className="text-sm">{job.site_location}</TableCell>
                  <TableCell>{getStatusBadge(job.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
}
