import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Mail, 
  Phone, 
  Building2, 
  Calendar,
  MessageSquare,
  Loader2,
  FolderOpen,
  UserPlus,
  Archive,
  Inbox,
  Star,
  Clock,
  MoreVertical,
  Search,
  FolderPlus,
  X,
  Trash2,
  Tag
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
  folder: string | null;
  assigned_to: string | null;
  sector: string | null;
  location: string | null;
  subject: string | null;
  source_page: string | null;
  lead_score: number | null;
  tags: string[] | null;
}

const DEFAULT_FOLDERS = [
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "starred", label: "Starred", icon: Star },
  { id: "follow-up", label: "Follow Up", icon: Clock },
  { id: "archived", label: "Archived", icon: Archive },
];

const TEAM_MEMBERS = [
  "Unassigned",
  "John",
  "Sarah",
  "Mike",
  "Emma",
  "David",
];

export default function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [updating, setUpdating] = useState(false);
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");
  const [customFolders, setCustomFolders] = useState<string[]>([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

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

      // Extract custom folders
      const folders = new Set<string>();
      (data || []).forEach(s => {
        if (s.folder && !DEFAULT_FOLDERS.find(f => f.id === s.folder)) {
          folders.add(s.folder);
        }
      });
      setCustomFolders(Array.from(folders));
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      toast.error('Failed to load contact submissions');
    } finally {
      setLoading(false);
    }
  };

  const updateField = async (id: string, field: string, value: string | null) => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ [field]: value })
        .eq('id', id);

      if (error) throw error;
      toast.success(`Updated successfully`);
      fetchSubmissions();
      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, [field]: value });
      }
    } catch (error) {
      console.error('Error updating:', error);
      toast.error('Failed to update');
    } finally {
      setUpdating(false);
    }
  };

  const bulkMoveToFolder = async (folder: string) => {
    if (selectedIds.length === 0) return;
    setUpdating(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ folder })
        .in('id', selectedIds);

      if (error) throw error;
      toast.success(`Moved ${selectedIds.length} items to ${folder}`);
      setSelectedIds([]);
      fetchSubmissions();
    } catch (error) {
      toast.error('Failed to move items');
    } finally {
      setUpdating(false);
    }
  };

  const bulkAssign = async (assignee: string) => {
    if (selectedIds.length === 0) return;
    setUpdating(true);
    try {
      const value = assignee === "Unassigned" ? null : assignee;
      const { error } = await supabase
        .from('contact_submissions')
        .update({ assigned_to: value })
        .in('id', selectedIds);

      if (error) throw error;
      toast.success(`Assigned ${selectedIds.length} items to ${assignee}`);
      setSelectedIds([]);
      fetchSubmissions();
    } catch (error) {
      toast.error('Failed to assign items');
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
      toast.success('Notes saved');
      fetchSubmissions();
      setSelectedSubmission({ ...selectedSubmission, admin_notes: adminNotes });
    } catch (error) {
      toast.error('Failed to save notes');
    } finally {
      setUpdating(false);
    }
  };

  const addCustomFolder = () => {
    if (!newFolderName.trim()) return;
    const slug = newFolderName.trim().toLowerCase().replace(/\s+/g, '-');
    if (!customFolders.includes(slug)) {
      setCustomFolders(prev => [...prev, slug]);
    }
    setNewFolderName("");
    setShowNewFolder(false);
    toast.success(`Folder "${newFolderName.trim()}" created`);
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    const visible = filteredSubmissions.map(s => s.id);
    setSelectedIds(prev =>
      prev.length === visible.length ? [] : visible
    );
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

  const filteredSubmissions = submissions.filter(s => {
    const folder = s.folder || 'inbox';
    const matchesFolder = folder === activeFolder;
    const matchesSearch = !searchQuery || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.company || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesSearch;
  });

  const folderCounts = submissions.reduce((acc, s) => {
    const folder = s.folder || 'inbox';
    acc[folder] = (acc[folder] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12 px-4 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">Contact Submissions</h1>
          <p className="text-muted-foreground text-sm">
            Organise, assign, and manage contact form submissions
          </p>
        </div>

        <div className="flex gap-6">
          {/* Sidebar - Folders */}
          <div className="w-56 shrink-0 space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Folders</p>
            {DEFAULT_FOLDERS.map(f => (
              <button
                key={f.id}
                onClick={() => { setActiveFolder(f.id); setSelectedIds([]); setSelectedSubmission(null); }}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeFolder === f.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-foreground'
                }`}
              >
                <f.icon className="h-4 w-4" />
                <span className="flex-1 text-left">{f.label}</span>
                {folderCounts[f.id] ? (
                  <span className="text-xs opacity-70">{folderCounts[f.id]}</span>
                ) : null}
              </button>
            ))}

            {customFolders.length > 0 && (
              <>
                <div className="border-t border-border my-3" />
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Custom</p>
                {customFolders.map(f => (
                  <button
                    key={f}
                    onClick={() => { setActiveFolder(f); setSelectedIds([]); setSelectedSubmission(null); }}
                    className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeFolder === f
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <FolderOpen className="h-4 w-4" />
                    <span className="flex-1 text-left capitalize">{f.replace(/-/g, ' ')}</span>
                    {folderCounts[f] ? (
                      <span className="text-xs opacity-70">{folderCounts[f]}</span>
                    ) : null}
                  </button>
                ))}
              </>
            )}

            {showNewFolder ? (
              <div className="flex items-center gap-1 px-2 mt-2">
                <Input
                  value={newFolderName}
                  onChange={e => setNewFolderName(e.target.value)}
                  placeholder="Folder name"
                  className="h-8 text-sm"
                  onKeyDown={e => e.key === 'Enter' && addCustomFolder()}
                  autoFocus
                />
                <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0" onClick={() => setShowNewFolder(false)}>
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ) : (
              <button
                onClick={() => setShowNewFolder(true)}
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted transition-colors mt-1"
              >
                <FolderPlus className="h-4 w-4" />
                <span>New Folder</span>
              </button>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search submissions..."
                  className="pl-9 h-9"
                />
              </div>

              {selectedIds.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{selectedIds.length} selected</span>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <FolderOpen className="h-3.5 w-3.5 mr-1" />
                        Move to
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {DEFAULT_FOLDERS.map(f => (
                        <DropdownMenuItem key={f.id} onClick={() => bulkMoveToFolder(f.id)}>
                          <f.icon className="h-4 w-4 mr-2" />
                          {f.label}
                        </DropdownMenuItem>
                      ))}
                      {customFolders.length > 0 && <DropdownMenuSeparator />}
                      {customFolders.map(f => (
                        <DropdownMenuItem key={f} onClick={() => bulkMoveToFolder(f)}>
                          <FolderOpen className="h-4 w-4 mr-2" />
                          <span className="capitalize">{f.replace(/-/g, ' ')}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <UserPlus className="h-3.5 w-3.5 mr-1" />
                        Assign
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {TEAM_MEMBERS.map(m => (
                        <DropdownMenuItem key={m} onClick={() => bulkAssign(m)}>
                          {m}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button variant="outline" size="sm" onClick={() => bulkMoveToFolder('archived')}>
                    <Archive className="h-3.5 w-3.5 mr-1" />
                    Archive
                  </Button>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* List */}
              <div className="space-y-2">
                {filteredSubmissions.length > 0 && (
                  <div className="flex items-center gap-2 px-2 mb-1">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filteredSubmissions.length && filteredSubmissions.length > 0}
                      onChange={selectAll}
                      className="rounded border-border"
                    />
                    <span className="text-xs text-muted-foreground">Select all ({filteredSubmissions.length})</span>
                  </div>
                )}

                {filteredSubmissions.length === 0 ? (
                  <Card className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      {searchQuery ? 'No results found' : 'No submissions in this folder'}
                    </p>
                  </Card>
                ) : (
                  filteredSubmissions.map(submission => (
                    <Card
                      key={submission.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selectedSubmission?.id === submission.id ? 'border-primary ring-1 ring-primary/20' : ''
                      }`}
                      onClick={() => {
                        setSelectedSubmission(submission);
                        setAdminNotes(submission.admin_notes || '');
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(submission.id)}
                          onChange={(e) => { e.stopPropagation(); toggleSelect(submission.id); }}
                          onClick={e => e.stopPropagation()}
                          className="rounded border-border mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold truncate">{submission.name}</h3>
                            <Badge className={`${getStatusColor(submission.status)} text-xs shrink-0 ml-2`}>
                              {submission.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <Mail className="h-3 w-3" />
                            <span className="truncate">{submission.email}</span>
                            {submission.company && (
                              <>
                                <span>·</span>
                                <Building2 className="h-3 w-3" />
                                <span className="truncate">{submission.company}</span>
                              </>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">{submission.message}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-muted-foreground">
                              {format(new Date(submission.created_at), 'dd MMM yyyy')}
                            </span>
                            {submission.assigned_to && (
                              <Badge variant="outline" className="text-xs py-0">
                                <UserPlus className="h-3 w-3 mr-1" />
                                {submission.assigned_to}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>

              {/* Detail Panel */}
              {selectedSubmission && (
                <Card className="p-5 sticky top-4 self-start">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Details</h2>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {DEFAULT_FOLDERS.map(f => (
                          <DropdownMenuItem key={f.id} onClick={() => updateField(selectedSubmission.id, 'folder', f.id)}>
                            <f.icon className="h-4 w-4 mr-2" />
                            Move to {f.label}
                          </DropdownMenuItem>
                        ))}
                        {customFolders.map(f => (
                          <DropdownMenuItem key={f} onClick={() => updateField(selectedSubmission.id, 'folder', f)}>
                            <FolderOpen className="h-4 w-4 mr-2" />
                            Move to <span className="capitalize ml-1">{f.replace(/-/g, ' ')}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="space-y-3 mb-5">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Name</label>
                      <p className="text-sm font-medium">{selectedSubmission.name}</p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Email</label>
                      <p className="text-sm">{selectedSubmission.email}</p>
                    </div>
                    {selectedSubmission.phone && (
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">Phone</label>
                        <p className="text-sm">{selectedSubmission.phone}</p>
                      </div>
                    )}
                    {selectedSubmission.company && (
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">Company</label>
                        <p className="text-sm">{selectedSubmission.company}</p>
                      </div>
                    )}
                    {selectedSubmission.sector && (
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">Sector</label>
                        <p className="text-sm">{selectedSubmission.sector}</p>
                      </div>
                    )}
                    {selectedSubmission.location && (
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground">Location</label>
                        <p className="text-sm">{selectedSubmission.location}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Message</label>
                      <p className="text-sm whitespace-pre-wrap mt-1">{selectedSubmission.message}</p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground">Submitted</label>
                      <p className="text-sm">{format(new Date(selectedSubmission.created_at), 'PPpp')}</p>
                    </div>
                  </div>

                  {/* Assign */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Assigned To</label>
                    <Select
                      value={selectedSubmission.assigned_to || "Unassigned"}
                      onValueChange={(val) => {
                        const value = val === "Unassigned" ? null : val;
                        updateField(selectedSubmission.id, 'assigned_to', value);
                      }}
                    >
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {TEAM_MEMBERS.map(m => (
                          <SelectItem key={m} value={m}>{m}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Status</label>
                    <div className="flex gap-1.5 flex-wrap">
                      {['new', 'read', 'responded', 'archived'].map(status => (
                        <Button
                          key={status}
                          size="sm"
                          variant={selectedSubmission.status === status ? 'default' : 'outline'}
                          onClick={() => updateField(selectedSubmission.id, 'status', status)}
                          disabled={updating}
                          className="text-xs capitalize"
                        >
                          {status}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Folder */}
                  <div className="mb-4">
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Folder</label>
                    <Select
                      value={selectedSubmission.folder || "inbox"}
                      onValueChange={(val) => updateField(selectedSubmission.id, 'folder', val)}
                    >
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {DEFAULT_FOLDERS.map(f => (
                          <SelectItem key={f.id} value={f.id}>{f.label}</SelectItem>
                        ))}
                        {customFolders.map(f => (
                          <SelectItem key={f} value={f}>
                            <span className="capitalize">{f.replace(/-/g, ' ')}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground block mb-1.5">Admin Notes</label>
                    <Textarea
                      value={adminNotes}
                      onChange={e => setAdminNotes(e.target.value)}
                      placeholder="Add notes..."
                      className="min-h-[80px] mb-2 text-sm"
                    />
                    <Button size="sm" onClick={saveNotes} disabled={updating}>
                      {updating ? 'Saving...' : 'Save Notes'}
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
