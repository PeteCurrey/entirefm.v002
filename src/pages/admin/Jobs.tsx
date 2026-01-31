import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Loader2, Search, Eye, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import JobDetailPanel from "@/components/admin/jobs/JobDetailPanel";

interface Job {
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
}

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: jobs, isLoading, refetch } = useQuery({
    queryKey: ['admin-jobs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Job[];
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Job> }) => {
      const { error } = await supabase
        .from('jobs')
        .update(updates)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
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

  const handleSave = async (updates: { status: string; admin_notes: string }) => {
    if (!selectedJob) return;
    await updateMutation.mutateAsync({ id: selectedJob.id, updates });
    setSelectedJob({ ...selectedJob, ...updates });
  };

  const filteredJobs = jobs?.filter(job => {
    const matchesSearch = 
      job.job_ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.site_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.site_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.contact_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || job.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPriority = priorityFilter === "all" || job.priority.toLowerCase() === priorityFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesPriority;
  }) || [];

  const getPriorityBadge = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'emergency':
        return <Badge className="bg-red-600 text-white">Emergency</Badge>;
      case 'urgent':
        return <Badge className="bg-orange-500 text-white">Urgent</Badge>;
      case 'normal':
        return <Badge variant="secondary">Normal</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'logged':
        return <Badge className="bg-blue-600 text-white">Logged</Badge>;
      case 'acknowledged':
        return <Badge className="bg-indigo-600 text-white">Acknowledged</Badge>;
      case 'assigned':
        return <Badge className="bg-purple-600 text-white">Assigned</Badge>;
      case 'in progress':
        return <Badge className="bg-yellow-600 text-white">In Progress</Badge>;
      case 'on hold':
        return <Badge className="bg-gray-500 text-white">On Hold</Badge>;
      case 'completed':
        return <Badge className="bg-green-600 text-white">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Show detail view if a job is selected
  if (selectedJob) {
    return (
      <div className="p-8 bg-background">
        <JobDetailPanel
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
          <h1 className="text-3xl font-bold">CAFM Jobs</h1>
          <p className="text-muted-foreground mt-2">
            View and manage jobs logged through the AI chat system
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
            placeholder="Search by job ref, site, location, contact..."
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
            <SelectItem value="logged">Logged</SelectItem>
            <SelectItem value="acknowledged">Acknowledged</SelectItem>
            <SelectItem value="assigned">Assigned</SelectItem>
            <SelectItem value="in progress">In Progress</SelectItem>
            <SelectItem value="on hold">On Hold</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={priorityFilter} onValueChange={setPriorityFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="emergency">Emergency</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
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
          <p className="text-sm text-muted-foreground">Logged</p>
          <p className="text-2xl font-bold">{jobs?.filter(j => j.status.toLowerCase() === 'logged').length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">In Progress</p>
          <p className="text-2xl font-bold">{jobs?.filter(j => j.status.toLowerCase() === 'in progress').length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground">Completed</p>
          <p className="text-2xl font-bold">{jobs?.filter(j => j.status.toLowerCase() === 'completed').length || 0}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground text-red-600">Emergency</p>
          <p className="text-2xl font-bold text-red-600">{jobs?.filter(j => j.priority.toLowerCase() === 'emergency').length || 0}</p>
        </Card>
      </div>

      {/* Table */}
      {filteredJobs.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No jobs found</p>
        </Card>
      ) : (
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Ref</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Site</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Source</TableHead>
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
                  <TableCell className="font-semibold">{job.job_ref}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(new Date(job.created_at), 'dd/MM/yyyy HH:mm')}
                  </TableCell>
                  <TableCell>{getPriorityBadge(job.priority)}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium">{job.site_name}</div>
                      <div className="text-muted-foreground">{job.site_location}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{job.contact_name}</div>
                      <div className="text-muted-foreground">{job.contact_phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(job.status)}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{job.source}</Badge>
                  </TableCell>
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
};

export default Jobs;
