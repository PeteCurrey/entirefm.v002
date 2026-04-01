"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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

interface UnifiedLead {
  id: string;
  type: 'contact' | 'proposal';
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  subject: string | null;
  message: string;
  status: string | null;
  created_at: string;
  metadata?: any;
}

export default function LeadsManagement() {
  const [leads, setLeads] = useState<UnifiedLead[]>([]);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, inquiry, tool, proposal, archived
  const [analyzingLeadId, setAnalyzingLeadId] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{ summary: string; suggestion: string } | null>(null);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
      const res = await fetch('/api/admin/leads');
      const json = await res.json();

      if (!res.ok) {
        console.error('Admin leads API error:', json.error);
        // If the service role key is not configured, show a helpful message
        if (json.error?.includes('SUPABASE_SERVICE_ROLE_KEY')) {
          toast.error('Service role key not configured. Please check the walkthrough.');
        } else {
          toast.error('Failed to load leads data');
        }
        setLoading(false);
        return;
      }

      const { contacts = [], proposals = [] } = json;

      const unified: UnifiedLead[] = [
        ...contacts.map((c: any) => ({
          ...c,
          type: 'contact' as const,
          subject: c.subject || 'General Inquiry'
        })),
        ...proposals.map((p: any) => ({
          ...p,
          id: p.id,
          type: 'proposal' as const,
          name: p.contact_name || 'Anonymous',
          company: p.company_name,
          subject: 'Strategic Proposal Request',
          message: `Services: ${Array.isArray(p.services) ? p.services.join(', ') : 'Custom FM Package'}\nSites: ${Array.isArray(p.sites) ? p.sites.length : 0} site(s) identified.`,
          metadata: { services: p.services, sites: p.sites }
        }))
      ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      setLeads(unified);
      if (unified.length > 0 && !selectedLeadId) {
        setSelectedLeadId(unified[0].id);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast.error('Failed to load leads data');
    } finally {
      setLoading(false);
    }
  };


  const selectedLead = leads.find(l => l.id === selectedLeadId);

  const filteredLeads = leads.filter(l => {
    // Search query filter
    const searchMatch = !searchQuery || 
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (!searchMatch) return false;

    // Folder filter
    if (filter === 'all') return l.status !== 'archived';
    if (filter === 'inquiry') return l.type === 'contact' && !l.subject?.includes('Lead') && !l.subject?.includes('Download') && !l.subject?.includes('Audit') && l.status !== 'archived';
    if (filter === 'tool') return l.type === 'contact' && (l.subject?.includes('Lead') || l.subject?.includes('Download') || l.subject?.includes('Audit') || l.subject?.includes('Calculator') || l.subject?.includes('Estimator')) && l.status !== 'archived';
    if (filter === 'proposal') return l.type === 'proposal' && l.status !== 'archived';
    if (filter === 'archived') return l.status === 'archived';
    return true;
  });

  const analyzeLead = async (lead: UnifiedLead) => {
    try {
      setAnalyzingLeadId(lead.id);
      
      const prompt = `Analyze this facilities management lead:
      Name: ${lead.name}
      Company: ${lead.company}
      Interest: ${lead.subject} - ${lead.message}
      
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
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id, status })
      });
      if (!res.ok) throw new Error((await res.json()).error);
      toast.success(`Lead status updated to ${status}`);
      fetchLeads();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusIcon = (status: string | null) => {
    const s = status || 'new';
    if (s === 'new') return <div className="h-2 w-2 rounded-full bg-primary" />;
    if (s === 'archived') return <AlertCircle className="w-3 h-3 text-muted-foreground" />;
    return <CheckCircle2 className="w-3 h-3 text-emerald-500" />;
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-900/50">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-12rem)] overflow-hidden bg-white dark:bg-slate-900 border border-border shadow-2xl rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* ── Pane 1: Sidebar Folders ── */}
      <div className="w-64 flex-shrink-0 bg-slate-900 text-slate-300 flex flex-col border-r border-white/5">
        <div className="p-6">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">Leads Intelligence</h2>
          <nav className="space-y-1">
            {[
              { id: 'all', label: 'All Inbox', icon: Mail },
              { id: 'inquiry', label: 'Inquiries', icon: MessageSquare },
              { id: 'tool', label: 'Tool Leads', icon: Zap },
              { id: 'proposal', label: 'Proposals', icon: FileText },
              { id: 'archived', label: 'Archived', icon: AlertCircle },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold rounded-lg transition-all ${
                  filter === item.id 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
                <span className="text-[10px] opacity-50 px-1.5 py-0.5 bg-black/20 rounded">
                  {leads.filter(l => {
                    if (item.id === 'all') return l.status !== 'archived';
                    if (item.id === 'inquiry') return l.type === 'contact' && !l.subject?.includes('Lead') && !l.subject?.includes('Download') && !l.subject?.includes('Audit') && l.status !== 'archived';
                    if (item.id === 'tool') return l.type === 'contact' && (l.subject?.includes('Lead') || l.subject?.includes('Download') || l.subject?.includes('Audit') || l.subject?.includes('Calculator') || l.subject?.includes('Estimator')) && l.status !== 'archived';
                    if (item.id === 'proposal') return l.type === 'proposal' && l.status !== 'archived';
                    if (item.id === 'archived') return l.status === 'archived';
                    return false;
                  }).length}
                </span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-6">
           <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                 <BrainCircuit className="w-4 h-4 text-primary" />
                 <span className="text-[10px] font-black uppercase text-white">AI Engine</span>
              </div>
              <p className="text-[9px] leading-relaxed opacity-60">Neural processing is active. All inbound leads are being analyzed for intent.</p>
           </div>
        </div>
      </div>

      {/* ── Pane 2: Conversation List ── */}
      <div className="w-96 flex-shrink-0 flex flex-col border-r border-border bg-slate-50/50 dark:bg-slate-900/50">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Input 
              placeholder="Search leads..." 
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="bg-white dark:bg-slate-800 border-border placeholder:text-muted-foreground/50 text-xs pl-8 h-9 rounded-xl"
            />
            <div className="absolute left-2.5 top-2.5 opacity-30">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {filteredLeads.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <Mail className="w-8 h-8 text-muted-foreground/20 mb-3" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Empty Folder</p>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <button
                key={lead.id}
                onClick={() => setSelectedLeadId(lead.id)}
                className={`w-full p-5 text-left border-b border-border transition-all hover:bg-white dark:hover:bg-slate-800 relative group ${
                  selectedLeadId === lead.id ? 'bg-white dark:bg-slate-800 shadow-sm' : ''
                }`}
              >
                {lead.status === 'new' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                )}
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-xs font-black truncate max-w-[180px] ${lead.status === 'new' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                    {lead.name}
                  </h3>
                  <span className="text-[9px] font-medium text-muted-foreground/60 shrink-0">
                    {format(new Date(lead.created_at), 'HH:mm')}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-primary mb-2 line-clamp-1 opacity-80 uppercase tracking-tighter">
                  {lead.subject}
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                  {lead.message.replace(/\n/g, ' ')}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className={`px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${
                    lead.type === 'proposal' ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20' : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                  }`}>
                    {lead.type}
                  </div>
                  {lead.company && (
                    <span className="text-[9px] text-muted-foreground/60 truncate italic font-medium">
                      @{lead.company}
                    </span>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* ── Pane 3: Lead Detail ── */}
      <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 relative">
        {selectedLead ? (
          <>
            {/* Detail Header / Toolbar */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-white dark:bg-slate-900 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-bold text-[10px] tracking-widest uppercase h-8 px-3 rounded-lg border-primary/20 text-primary hover:bg-primary/5"
                  onClick={() => analyzeLead(selectedLead)}
                  disabled={analyzingLeadId === selectedLead.id}
                >
                  {analyzingLeadId === selectedLead.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                  Neural Analyze
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-[10px] font-bold uppercase tracking-widest h-8"
                  onClick={() => updateStatus(selectedLead.type, selectedLead.id, selectedLead.status === 'archived' ? 'new' : 'archived')}
                >
                  {selectedLead.status === 'archived' ? 'Restore' : 'Archive'}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" className="font-bold text-[10px] tracking-widest uppercase h-8 rounded-lg shadow-lg" asChild>
                   <a href={`mailto:${selectedLead.email}`}>
                     <Mail className="w-3 h-3 mr-2" />
                     Compose Reply
                   </a>
                </Button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Sender Info Big */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-primary/10 shadow-inner">
                       <span className="text-2xl font-black text-primary">{selectedLead.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h1 className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic leading-none mb-1">
                        {selectedLead.name}
                      </h1>
                      <p className="text-sm font-medium text-muted-foreground">
                        {selectedLead.company || 'Private Inquiry'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/30 mb-1">Received</p>
                    <p className="text-xs font-bold">{format(new Date(selectedLead.created_at), 'PPPp')}</p>
                  </div>
                </div>

                {/* Metadata Tiles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                   {[
                     { label: 'Email', value: selectedLead.email, icon: Mail, href: `mailto:${selectedLead.email}` },
                     { label: 'Phone', value: selectedLead.phone || 'N/A', icon: Phone, href: selectedLead.phone ? `tel:${selectedLead.phone}` : undefined },
                     { label: 'Source', value: selectedLead.subject, icon: Zap },
                     { label: 'Status', value: selectedLead.status || 'New', icon: AlertCircle },
                   ].map((item, i) => (
                     <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-border group hover:border-primary/30 transition-all">
                        <div className="flex items-center gap-2 mb-1 text-muted-foreground/40 group-hover:text-primary transition-colors">
                           <item.icon className="w-3 h-3" />
                           <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                        </div>
                        {item.href ? (
                          <a href={item.href} className="text-xs font-bold truncate block hover:text-primary underline-offset-4 hover:underline">{item.value}</a>
                        ) : (
                          <span className="text-xs font-bold truncate block">{item.value}</span>
                        )}
                     </div>
                   ))}
                </div>

                {/* Main Message Block */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-border/50" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/30 px-4">Message Content</span>
                    <div className="h-px flex-1 bg-border/50" />
                  </div>
                  <div className="p-8 bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl border border-border/50 leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-wrap selection:bg-primary/20 selection:text-primary">
                    {selectedLead.message}
                  </div>
                </div>

                {/* Proposal Metadata if applicable */}
                {selectedLead.type === 'proposal' && selectedLead.metadata && (
                  <div className="p-6 border-2 border-dashed border-primary/20 rounded-3xl bg-primary/5 space-y-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-primary" />
                      <h3 className="text-xs font-black uppercase tracking-widest text-primary">Proposal Requirements</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-2">Services Requested</p>
                        <div className="flex flex-wrap gap-2">
                          {(selectedLead.metadata.services || []).map((s: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-white dark:bg-slate-900 rounded-md text-[10px] font-bold border border-border shadow-sm">{s}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-2">Sites Profile</p>
                        <p className="text-xs font-bold">{(selectedLead.metadata.sites || []).length} locations identified for tender.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-slate-50/30 dark:bg-slate-900/10">
            <div className="relative mb-6">
               <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-150 animate-pulse" />
               <div className="relative w-20 h-20 bg-primary/10 border-2 border-primary/20 rounded-3xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary opacity-50" />
               </div>
            </div>
            <h2 className="text-xl font-black italic tracking-tighter uppercase mb-2">Select a Lead</h2>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Choose an inquiry from the list to view full technical details and AI analytics.
            </p>
          </div>
        )}
      </div>

      {/* AI Analysis Dialog Overlay */}
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
                     <Button className="font-bold text-[10px] tracking-widest uppercase" onClick={() => setIsAnalysisOpen(false)}>Apply Insight</Button>
                  </div>
               </div>
            )}
         </DialogContent>
      </Dialog>
    </div>
  );
}
