"use client";

import { useState, useEffect } from "react";
;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Building2, MapPin, Calendar, MessageSquare, Loader2, RefreshCw } from "lucide-react";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  sector?: string | null;
  location?: string | null;
  subject?: string | null;
  source_page?: string | null;
  status: string | null;
  admin_notes?: string | null;
}

export default function Leads() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FM Operations", href: "/fm-operations" },
    { label: "Leads" },
  ];

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      const { data, error } = await query;

      if (error) throw error;

      setSubmissions(data || []);
    } catch (error: any) {
      console.error('Error fetching submissions:', error);
      toast({
        title: "Error",
        description: "Failed to load contact submissions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: "Contact status has been updated successfully",
      });

      fetchSubmissions();
    } catch (error: any) {
      console.error('Error updating status:', error);
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [statusFilter]);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new':
        return 'default';
      case 'in-progress':
        return 'secondary';
      case 'closed':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <>
      

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto py-8 px-4">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-light mb-2">Contact Leads</h1>
              <p className="text-muted-foreground">
                Manage and respond to website contact form submissions
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Submissions</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="icon"
                onClick={fetchSubmissions}
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : submissions.length === 0 ? (
            <Card className="p-12 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-medium mb-2">No submissions found</h3>
              <p className="text-muted-foreground">
                {statusFilter !== 'all' 
                  ? `No ${statusFilter} submissions at the moment.`
                  : 'Contact submissions will appear here when received.'}
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <Card key={submission.id} className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    {/* Left: Contact Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-medium mb-1">{submission.name}</h3>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant={getStatusBadgeVariant(submission.status || 'new')}>
                              {submission.status || 'new'}
                            </Badge>
                            {submission.source_page && (
                              <Badge variant="outline">
                                {submission.source_page}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                            {submission.email}
                          </a>
                        </div>
                        {submission.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <a href={`tel:${submission.phone}`} className="text-primary hover:underline">
                              {submission.phone}
                            </a>
                          </div>
                        )}
                        {submission.company && (
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span>{submission.company}</span>
                          </div>
                        )}
                        {submission.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{submission.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{new Date(submission.created_at).toLocaleString()}</span>
                        </div>
                      </div>

                      {submission.subject && (
                        <div>
                          <p className="text-sm font-medium mb-1">Subject:</p>
                          <p className="text-sm text-muted-foreground">{submission.subject}</p>
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-medium mb-1">Message:</p>
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {submission.message}
                        </p>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col gap-2 lg:w-48">
                      <Select
                        value={submission.status || 'new'}
                        onValueChange={(value) => updateStatus(submission.id, value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a href={`mailto:${submission.email}?subject=Re: ${submission.subject || 'Your enquiry'}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Reply
                        </a>
                      </Button>

                      {submission.phone && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <a href={`tel:${submission.phone}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
