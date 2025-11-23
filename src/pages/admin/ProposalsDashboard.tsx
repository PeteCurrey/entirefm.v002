import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Loader2, Mail, Phone, Building2, Calendar, FileText, ChevronDown, ChevronUp } from "lucide-react";

type ProposalStatus = 'new' | 'reviewing' | 'contacted' | 'quoted' | 'won' | 'lost';

interface ProposalRequest {
  id: string;
  created_at: string;
  updated_at: string;
  status: ProposalStatus;
  company_name: string;
  contact_name: string | null;
  email: string;
  phone: string | null;
  business_type: string | null;
  sites: Array<{ city: string; buildings: number; is24_7: boolean }>;
  services: string[];
  has_existing_provider: boolean | null;
  contract_expiry_date: string | null;
  budget_approval_status: string | null;
  urgency_level: string | null;
  documents: string[];
  admin_notes: string | null;
}

const statusColors = {
  new: "bg-blue-500",
  reviewing: "bg-yellow-500",
  contacted: "bg-purple-500",
  quoted: "bg-orange-500",
  won: "bg-green-500",
  lost: "bg-red-500",
};

export default function ProposalsDashboard() {
  const [proposals, setProposals] = useState<ProposalRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    try {
      const { data, error } = await supabase
        .from('proposal_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform the data to match our interface
      const typedData: ProposalRequest[] = (data || []).map(item => ({
        ...item,
        sites: item.sites as Array<{ city: string; buildings: number; is24_7: boolean }>,
        services: item.services as string[],
        documents: item.documents as string[],
      }));
      
      setProposals(typedData);
    } catch (error: any) {
      toast({
        title: "Error loading proposals",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProposalStatus = async (id: string, status: ProposalStatus) => {
    try {
      const { error } = await supabase
        .from('proposal_requests')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setProposals(proposals.map(p => 
        p.id === id ? { ...p, status } : p
      ));

      toast({
        title: "Status updated",
        description: "Proposal status has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const updateAdminNotes = async (id: string, notes: string) => {
    try {
      const { error } = await supabase
        .from('proposal_requests')
        .update({ admin_notes: notes })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Notes saved",
        description: "Admin notes have been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error saving notes",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Proposal Requests Dashboard</h1>
          <p className="text-muted-foreground">Manage and track incoming proposal requests</p>
        </div>

        <div className="grid gap-4 mb-8">
          {proposals.map((proposal) => (
            <Card key={proposal.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{proposal.company_name}</h3>
                    <Badge className={statusColors[proposal.status]}>
                      {proposal.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {proposal.contact_name && (
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        {proposal.contact_name}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {proposal.email}
                    </div>
                    {proposal.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {proposal.phone}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(proposal.created_at), 'PPP')}
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedId(expandedId === proposal.id ? null : proposal.id)}
                >
                  {expandedId === proposal.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </Button>
              </div>

              {expandedId === proposal.id && (
                <div className="space-y-4 pt-4 border-t">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Business Details</h4>
                      <div className="space-y-1 text-sm">
                        {proposal.business_type && (
                          <p><span className="text-muted-foreground">Type:</span> {proposal.business_type}</p>
                        )}
                        {proposal.urgency_level && (
                          <p><span className="text-muted-foreground">Urgency:</span> {proposal.urgency_level}</p>
                        )}
                        {proposal.budget_approval_status && (
                          <p><span className="text-muted-foreground">Budget Status:</span> {proposal.budget_approval_status}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Sites ({proposal.sites.length})</h4>
                      <div className="space-y-1 text-sm">
                        {proposal.sites.map((site, idx) => (
                          <p key={idx}>
                            {site.city} - {site.buildings} building{site.buildings > 1 ? 's' : ''}
                            {site.is24_7 && <Badge variant="outline" className="ml-2">24/7</Badge>}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Services Required</h4>
                    <div className="flex flex-wrap gap-2">
                      {proposal.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary">{service}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Status</label>
                      <Select
                        value={proposal.status}
                        onValueChange={(value) => updateProposalStatus(proposal.id, value as ProposalStatus)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="reviewing">Reviewing</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="quoted">Quoted</SelectItem>
                          <SelectItem value="won">Won</SelectItem>
                          <SelectItem value="lost">Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Admin Notes</label>
                      <Textarea
                        placeholder="Add internal notes..."
                        defaultValue={proposal.admin_notes || ''}
                        onBlur={(e) => updateAdminNotes(proposal.id, e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {proposals.length === 0 && (
          <Card className="p-12 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No proposals yet</h3>
            <p className="text-muted-foreground">
              Proposal requests will appear here once submitted
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}