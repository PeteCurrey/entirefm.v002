"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Mail,
  Phone,
  Building2,
  Calendar,
  MessageSquare,
  FileText,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  ExternalLink,
  Users,
  ChevronDown,
  Sparkles,
  Zap,
  BrainCircuit,
  MessageSquareQuote
} from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  status: string | null;
  created_at: string;
}

interface ProposalRequest {
  id: string;
  company_name: string;
  contact_name: string | null;
  email: string;
  phone: string | null;
  status: string | null;
  created_at: string;
  services: any; // Changed from string[] to any to handle Supabase Json
  sites: any;
}

export default function LeadsManagement() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [proposals, setProposals] = useState<ProposalRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("contacts");
  const [analyzingLeadId, setAnalyzingLeadId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{ summary: string; suggestion: string } | null>(null);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);

  useEffect(() => {
    fetchLeads();
    
    // Set up realtime subscriptions
    const contactsChannel = supabase
      .channel('leads-contacts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_submissions' }, fetchLeads)
      .subscribe();
      
    const proposalsChannel = supabase
      .channel('leads-proposals')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'proposal_requests' }, fetchLeads)
      .subscribe();

    return () => {
      supabase.removeChannel(contactsChannel);
      supabase.removeChannel(proposalsChannel);
    };
  }, []);

  const fetchLeads = async () => {
    try {
      const [contactsRes, proposalsRes] = await Promise.all([
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('proposal_requests').select('*').order('created_at', { ascending: false })
      ]);

      if (contactsRes.error) throw contactsRes.error;
      if (proposalsRes.error) throw proposalsRes.error;

      setContacts(contactsRes.data || []);
      setProposals(proposalsRes.data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast.error('Failed to load leads data');
    } finally {
      setLoading(false);
    }
  };

  const analyzeLead = async (lead: any) => {
    try {
      setAnalyzingLeadId(lead.id);
      
      const prompt = `Analyze this facilities management lead:
      Name: ${lead.name || lead.contact_name}
      Company: ${lead.company || lead.company_name}
      Interest: ${lead.message || (Array.isArray(lead.services) ? lead.services.join(', ') : 'FM Services')}
      
      Provide a brief 2-sentence summary and a one-sentence recommended response strategy. Format as JSON: {"summary": "...", "suggestion": "..."}`;

      const { data, error } = await supabase.functions.invoke('ai-assistant', {
        body: { 
          messages: [{ role: 'user', content: prompt }],
          sessionId: 'admin-lead-analysis'
        }
      });

      if (error) throw error;

      // The ai-assistant returns a stream or a full response depending on how it's called.
      // For this simple case, we'll try to parse the JSON from the text.
      const text = data?.choices?.[0]?.message?.content || data || "";
      try {
        const json = JSON.parse(text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1));
        setAnalysisResult(json);
      } catch (e) {
        setAnalysisResult({ 
          summary: text.split('\n')[0], 
          suggestion: "Review inquiry for compliance requirements." 
        });
      }
      
      setIsAnalysisOpen(true);
    } catch (error) {
      console.error('AI Analysis failed:', error);
      toast.error('AI analysis failed to initialize');
    } finally {
      setAnalyzingLeadId(null);
    }
  };

  const updateStatus = async (type: 'contact' | 'proposal', id: string, status: string) => {
    try {
      const table = type === 'contact' ? 'contact_submissions' : 'proposal_requests';
      const { error } = await supabase.from(table).update({ status }).eq('id', id);
      if (error) throw error;
      toast.success(`Lead status updated to ${status}`);
      fetchLeads();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusBadge = (status: string | null) => {
    const s = status || 'new';
    switch (s) {
      case 'new': return <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>;
      case 'read': return <Badge variant="secondary">Opened</Badge>;
      case 'responded': return <Badge className="bg-emerald-500 hover:bg-emerald-600">Contacted</Badge>;
      case 'qualified': return <Badge className="bg-purple-500 hover:bg-purple-600">Qualified</Badge>;
      case 'archived': return <Badge variant="outline">Archived</Badge>;
      default: return <Badge variant="outline">{s}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">
            Leads Center
          </h1>
          <p className="text-muted-foreground">Unified management for all EntireFM website enquiries & proposals.</p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-primary uppercase">Real-time Enabled</span>
           </div>
        </div>
      </div>

      <Tabs defaultValue="contacts" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px] bg-slate-900 border-white/5 p-1 h-12 rounded-xl">
          <TabsTrigger value="contacts" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[11px] uppercase tracking-widest">
            General Inquiries ({contacts.length})
          </TabsTrigger>
          <TabsTrigger value="proposals" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white font-bold text-[11px] uppercase tracking-widest">
            Proposal Requests ({proposals.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="mt-8 space-y-4">
          {contacts.length === 0 ? (
            <Card className="p-12 text-center border-dashed">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <p className="text-muted-foreground">No general inquiries found.</p>
            </Card>
          ) : (
            <div className="grid gap-4">
              {contacts.map((contact) => (
                <Card key={contact.id} className="p-6 border-white/5 hover:border-primary/50 transition-all group bg-card">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">{contact.name}</h3>
                        {getStatusBadge(contact.status)}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {contact.email}</span>
                        {contact.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {contact.phone}</span>}
                        {contact.company && <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {contact.company}</span>}
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {format(new Date(contact.created_at), 'PPp')}</span>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg text-sm italic border-l-2 border-primary/20">
                        "{contact.message}"
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="font-bold text-[10px] tracking-widest uppercase gap-2 border-primary/30 text-primary hover:bg-primary/5"
                        onClick={() => analyzeLead(contact)}
                        disabled={analyzingLeadId === contact.id}
                      >
                        {analyzingLeadId === contact.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                        Neural Analyze
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="font-bold text-[10px] tracking-widest uppercase">
                            Status <ChevronDown className="ml-2 w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateStatus('contact', contact.id, 'new')}>Set as New</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus('contact', contact.id, 'read')}>Mark as Viewed</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus('contact', contact.id, 'responded')}>Mark as Contacted</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus('contact', contact.id, 'archived')}>Archive</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="default" size="sm" className="font-bold text-[10px] tracking-widest uppercase" asChild>
                         <a href={`mailto:${contact.email}`}>Reply via Email</a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="proposals" className="mt-8 space-y-4">
          {proposals.length === 0 ? (
            <Card className="p-12 text-center border-dashed">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
              <p className="text-muted-foreground">No proposal requests found.</p>
            </Card>
          ) : (
            <div className="grid gap-4">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="p-6 border-white/5 hover:border-primary/50 transition-all group bg-card border-l-4 border-l-primary">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold">{proposal.company_name}</h3>
                        {getStatusBadge(proposal.status)}
                        <Badge variant="outline" className="text-primary border-primary/20 uppercase text-[9px] font-black tracking-tighter">High Value Tender</Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground">
                        <span className="flex items-center gap-1 font-bold text-slate-900 dark:text-white"><Users className="w-3 h-3" /> {proposal.contact_name}</span>
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {proposal.email}</span>
                        {proposal.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {proposal.phone}</span>}
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {format(new Date(proposal.created_at), 'PPp')}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                         {Array.isArray(proposal.services) && proposal.services.map((s: string, i: number) => (
                           <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-white/5 rounded text-[10px] font-bold text-muted-foreground border border-black/5">{s}</span>
                         ))}
                      </div>

                      <div className="flex gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">
                         <span>Sites: {Array.isArray(proposal.sites) ? proposal.sites.length : 0}</span>
                         <span>•</span>
                         <span>Avg Response: 24h expected</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="font-bold text-[10px] tracking-widest uppercase gap-2 border-primary/30 text-primary hover:bg-primary/5"
                        onClick={() => analyzeLead(proposal)}
                        disabled={analyzingLeadId === proposal.id}
                      >
                        {analyzingLeadId === proposal.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                        Neural Analyze
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="font-bold text-[10px] tracking-widest uppercase">
                            Action <ChevronDown className="ml-2 w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateStatus('proposal', proposal.id, 'read')}>Mark as Opened</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus('proposal', proposal.id, 'qualified')}>Qualify Lead</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateStatus('proposal', proposal.id, 'archived')}>Archive</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Button variant="default" size="sm" className="font-bold text-[10px] tracking-widest uppercase" asChild>
                         <Link href={`/admin/proposals`}>Full Details</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* AI Analysis Dialog */}
      <Dialog open={isAnalysisOpen} onOpenChange={setIsAnalysisOpen}>
         <DialogContent className="max-w-2xl bg-slate-900 border-primary shadow-[0_0_50px_rgba(var(--primary),0.2)]">
            <DialogHeader>
               <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <BrainCircuit className="h-5 w-5 text-primary animate-pulse" />
                  </div>
                  <DialogTitle className="text-white text-2xl font-black italic tracking-tighter uppercase italic">
                    Neural Lead Intelligence
                  </DialogTitle>
               </div>
               <DialogDescription className="text-primary/70 font-bold text-[10px] tracking-widest uppercase">
                 Automated Inquiry Processing & Recommended Response
               </DialogDescription>
            </DialogHeader>

            {analysisResult && (
               <div className="space-y-6 py-4">
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-primary">
                        <Zap className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">30s Executive Summary</span>
                     </div>
                     <p className="text-slate-200 text-lg font-medium leading-relaxed italic">
                        "{analysisResult.summary}"
                     </p>
                  </div>

                  <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl space-y-3">
                     <div className="flex items-center gap-2 text-primary">
                        <MessageSquareQuote className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Response Recommendation</span>
                     </div>
                     <p className="text-white font-bold leading-tight">
                        {analysisResult.suggestion}
                     </p>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                     <Button variant="ghost" onClick={() => setIsAnalysisOpen(false)} className="text-white uppercase font-black text-[10px]">Close</Button>
                     <Button className="font-bold text-[10px] tracking-widest uppercase">Apply Suggestion</Button>
                  </div>
               </div>
            )}
         </DialogContent>
      </Dialog>
    </div>
  );
}
