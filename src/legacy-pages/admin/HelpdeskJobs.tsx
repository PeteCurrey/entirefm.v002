"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Eye, Loader2, Search } from "lucide-react";
import { format } from "date-fns";

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
}

export default function HelpdeskJobs() {
  const [jobs, setJobs] = useState<HelpdeskJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<HelpdeskJob | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('helpdesk_jobs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load helpdesk jobs",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateJobStatus = async (jobId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('helpdesk_jobs')
        .update({ status: newStatus })
        .eq('id', jobId);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: "Job status has been updated successfully",
      });

      fetchJobs();
      if (selectedJob?.id === jobId) {
        setSelectedJob({ ...selectedJob, status: newStatus });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.site_location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || job.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "Emergency":
        return <Badge className="bg-red-600">Emergency</Badge>;
      case "Urgent":
        return <Badge className="bg-orange-600">Urgent</Badge>;
      default:
        return <Badge variant="secondary">Routine</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge variant="default">New</Badge>;
      case "in_progress":
        return <Badge className="bg-blue-600">In Progress</Badge>;
      case "resolved":
        return <Badge className="bg-green-600">Resolved</Badge>;
      case "closed":
        return <Badge variant="secondary">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-5rem)] bg-background">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading helpdesk jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Helpdesk Jobs</h1>
        <p className="text-muted-foreground">
          Manage maintenance issues reported via the helpdesk form
        </p>
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
            <SelectItem value="in_progress">In Progress</SelectItem>
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Total Jobs</p>
          <p className="text-2xl font-bold">{jobs.length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">New</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'new').length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">In Progress</p>
          <p className="text-2xl font-bold">{jobs.filter(j => j.status === 'in_progress').length}</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <p className="text-sm text-muted-foreground">Emergency</p>
          <p className="text-2xl font-bold text-red-600">{jobs.filter(j => j.priority === 'Emergency').length}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border">
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
            {filteredJobs.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                  No helpdesk jobs found
                </TableCell>
              </TableRow>
            ) : (
              filteredJobs.map((job) => (
                <TableRow key={job.id}>
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
                      onClick={() => setSelectedJob(job)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Job Detail Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  Job Details
                  {getPriorityBadge(selectedJob.priority)}
                </DialogTitle>
                <DialogDescription>
                  Submitted {format(new Date(selectedJob.created_at), 'dd/MM/yyyy HH:mm')}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Status Update */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Update Status</label>
                  <Select
                    value={selectedJob.status}
                    onValueChange={(value) => updateJobStatus(selectedJob.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* AI Summary */}
                {selectedJob.ai_summary && (
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">🤖 AI Summary</h4>
                    <p className="text-sm">{selectedJob.ai_summary}</p>
                  </div>
                )}

                {/* Contact Information */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Contact Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name:</span>
                      <p className="font-medium">{selectedJob.name}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Role:</span>
                      <p className="font-medium">{selectedJob.role}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Company:</span>
                      <p className="font-medium">{selectedJob.company}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <p className="font-medium">{selectedJob.email}</p>
                    </div>
                    {selectedJob.phone && (
                      <div>
                        <span className="text-muted-foreground">Phone:</span>
                        <p className="font-medium">{selectedJob.phone}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">Location:</span>
                      <p className="font-medium">{selectedJob.site_location}</p>
                    </div>
                  </div>
                </div>

                {/* Issue Details */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Issue Details</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Category:</span>
                      <p className="font-medium">{selectedJob.category}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Asset/Area Reference:</span>
                      <p className="font-medium">{selectedJob.asset_reference}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Description:</span>
                      <p className="font-medium whitespace-pre-wrap mt-1">{selectedJob.description}</p>
                    </div>
                  </div>
                </div>

                {selectedJob.source_page && (
                  <div className="text-xs text-muted-foreground">
                    Submitted from: {selectedJob.source_page}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
