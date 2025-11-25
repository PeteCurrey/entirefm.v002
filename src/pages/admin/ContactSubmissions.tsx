import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Building2, 
  Calendar,
  MessageSquare,
  Loader2
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  status: string;
  admin_notes: string | null;
  created_at: string;
  updated_at: string;
}

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      toast.error('Failed to load contact submissions');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      toast.success('Status updated successfully');
      fetchSubmissions();
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    } finally {
      setUpdating(false);
    }
  };

  const saveNotes = async () => {
    if (!selectedSubmission) return;
    
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ admin_notes: adminNotes })
        .eq('id', selectedSubmission.id);

      if (error) throw error;
      
      toast.success('Notes saved successfully');
      fetchSubmissions();
      setSelectedSubmission({ ...selectedSubmission, admin_notes: adminNotes });
    } catch (error) {
      console.error('Error saving notes:', error);
      toast.error('Failed to save notes');
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-accent text-accent-foreground';
      case 'read': return 'bg-secondary text-secondary-foreground';
      case 'responded': return 'bg-primary text-primary-foreground';
      case 'archived': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12 px-4 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Contact Submissions</h1>
          <p className="text-muted-foreground">
            Manage and respond to website contact form submissions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Submissions List */}
          <div className="space-y-4">
            {submissions.length === 0 ? (
              <Card className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No contact submissions yet</p>
              </Card>
            ) : (
              submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                    selectedSubmission?.id === submission.id ? 'border-primary' : ''
                  }`}
                  onClick={() => {
                    setSelectedSubmission(submission);
                    setAdminNotes(submission.admin_notes || '');
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{submission.name}</h3>
                      {submission.company && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Building2 className="h-3 w-3" />
                          {submission.company}
                        </p>
                      )}
                    </div>
                    <Badge className={getStatusColor(submission.status)}>
                      {submission.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      {submission.email}
                    </p>
                    {submission.phone && (
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        {submission.phone}
                      </p>
                    )}
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(submission.created_at), 'PPp')}
                    </p>
                  </div>

                  <p className="mt-3 text-sm line-clamp-2 text-muted-foreground">
                    {submission.message}
                  </p>
                </Card>
              ))
            )}
          </div>

          {/* Submission Detail */}
          {selectedSubmission && (
            <Card className="p-6 sticky top-4 self-start">
              <h2 className="text-2xl font-bold mb-4">Submission Details</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground">Name</label>
                  <p className="text-lg">{selectedSubmission.name}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground">Email</label>
                  <p className="text-lg">{selectedSubmission.email}</p>
                </div>

                {selectedSubmission.phone && (
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground">Phone</label>
                    <p className="text-lg">{selectedSubmission.phone}</p>
                  </div>
                )}

                {selectedSubmission.company && (
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground">Company</label>
                    <p className="text-lg">{selectedSubmission.company}</p>
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-muted-foreground">Message</label>
                  <p className="text-base mt-1 whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground">Submitted</label>
                  <p className="text-base">{format(new Date(selectedSubmission.created_at), 'PPpp')}</p>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Status</label>
                <div className="flex gap-2 flex-wrap">
                  {['new', 'read', 'responded', 'archived'].map((status) => (
                    <Button
                      key={status}
                      size="sm"
                      variant={selectedSubmission.status === status ? 'default' : 'outline'}
                      onClick={() => updateStatus(selectedSubmission.id, status)}
                      disabled={updating}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Admin Notes</label>
                <Textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add notes about this submission..."
                  className="min-h-[100px] mb-3"
                />
                <Button onClick={saveNotes} disabled={updating}>
                  {updating ? 'Saving...' : 'Save Notes'}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}