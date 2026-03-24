"use client";

import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";

const Jobs = () => {
  const { data: jobs, isLoading } = useQuery({
    queryKey: ['admin-jobs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'emergency':
        return 'destructive';
      case 'urgent':
        return 'default';
      case 'normal':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'logged':
        return 'default';
      case 'in progress':
        return 'secondary';
      case 'completed':
        return 'outline';
      default:
        return 'outline';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">CAFM Jobs</h1>
        <p className="text-muted-foreground mt-2">
          View and manage jobs logged through the AI chat system
        </p>
      </div>

      {jobs?.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No jobs logged yet</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {jobs?.map((job) => (
            <Card key={job.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{job.job_ref}</h3>
                    <Badge variant={getPriorityColor(job.priority)}>
                      {job.priority}
                    </Badge>
                    <Badge variant={getStatusColor(job.status)}>
                      {job.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(job.created_at), 'PPpp')}
                  </p>
                </div>
                <Badge variant="outline">{job.source}</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Site Name</p>
                    <p className="text-foreground">{job.site_name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-foreground">{job.site_location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Asset/Area</p>
                    <p className="text-foreground">{job.asset_or_area}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contact</p>
                    <p className="text-foreground">{job.contact_name}</p>
                    <p className="text-foreground">{job.contact_phone}</p>
                    {job.contact_email && (
                      <p className="text-foreground">{job.contact_email}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Description</p>
                  <p className="text-foreground">{job.description}</p>
                </div>

                {job.access_requirements && (
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Access Requirements</p>
                    <p className="text-foreground">{job.access_requirements}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;