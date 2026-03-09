import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Plus, Pencil, Trash2, ExternalLink, Shield, ShieldAlert, ShieldCheck,
  TrendingUp, Globe, Target, BarChart3, Search, RefreshCw, Lightbulb, Sparkles, AlertTriangle
} from "lucide-react";

interface Competitor {
  id: string;
  name: string;
  website: string | null;
  logo_url: string | null;
  description: string | null;
  strengths: string[];
  weaknesses: string[];
  key_services: string[];
  target_sectors: string[];
  estimated_revenue: string | null;
  employee_count: string | null;
  headquarters: string | null;
  domain_authority: number | null;
  organic_keywords: number | null;
  monthly_traffic: string | null;
  top_keywords: any[];
  content_gaps: string[];
  threat_level: string;
  notes: string | null;
  last_reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

const emptyForm: Partial<Competitor> = {
  name: "", website: "", description: "", strengths: [], weaknesses: [],
  key_services: [], target_sectors: [], estimated_revenue: "", employee_count: "",
  headquarters: "", domain_authority: null, organic_keywords: null, monthly_traffic: "",
  top_keywords: [], content_gaps: [], threat_level: "medium", notes: ""
};

const threatColors: Record<string, string> = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-accent text-accent-foreground",
  low: "bg-muted text-muted-foreground",
};

export default function CompetitorAnalysis() {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Competitor>>(emptyForm);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [arrayInputs, setArrayInputs] = useState<Record<string, string>>({});
  const [gapAnalysisLoading, setGapAnalysisLoading] = useState(false);
  const [aiGapSuggestions, setAiGapSuggestions] = useState<string | null>(null);
  const [gapFilter, setGapFilter] = useState<string>("all");

  // Aggregate content gaps across all competitors
  const contentGapMap = useMemo(() => {
    const map: Record<string, { topic: string; competitors: string[]; threatLevels: string[] }> = {};
    competitors.forEach(c => {
      (c.content_gaps || []).forEach(gap => {
        const key = gap.toLowerCase().trim();
        if (!map[key]) {
          map[key] = { topic: gap, competitors: [], threatLevels: [] };
        }
        map[key].competitors.push(c.name);
        map[key].threatLevels.push(c.threat_level);
      });
    });
    return Object.values(map).sort((a, b) => b.competitors.length - a.competitors.length);
  }, [competitors]);

  const filteredGaps = useMemo(() => {
    if (gapFilter === "all") return contentGapMap;
    return contentGapMap.filter(g => g.competitors.some((_, i) => g.threatLevels[i] === gapFilter));
  }, [contentGapMap, gapFilter]);

  const runAiGapAnalysis = async () => {
    setGapAnalysisLoading(true);
    setAiGapSuggestions(null);
    try {
      const competitorContext = competitors.map(c =>
        `${c.name}: Services=[${c.key_services?.join(', ')}], Sectors=[${c.target_sectors?.join(', ')}], Content Gaps=[${c.content_gaps?.join(', ')}], DA=${c.domain_authority}, Keywords=${c.organic_keywords}`
      ).join('\n');

      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: {
          type: 'seo-improve',
          topic: `Analyze these FM competitors and identify content topics they rank for that EntireFM (a UK facilities management company) likely doesn't cover yet. Focus on high-value SEO opportunities.\n\nCompetitor Data:\n${competitorContext}\n\nEntireFM covers: fire safety, electrical, HVAC, water hygiene, gas safety, PPM, height safety, industrial services, cleaning, grounds maintenance.\n\nReturn as JSON:\n{\n  "priority_gaps": [{"topic": "...", "reason": "...", "competitors_covering": ["..."], "estimated_difficulty": "easy|medium|hard", "potential_impact": "high|medium|low"}],\n  "quick_wins": ["topic1", "topic2"],\n  "long_term_opportunities": ["topic1", "topic2"],\n  "summary": "Brief overall analysis"\n}`
        }
      });

      if (error) throw error;
      const content = data?.content;
      if (content?.raw_content) {
        setAiGapSuggestions(content.raw_content);
      } else {
        setAiGapSuggestions(JSON.stringify(content, null, 2));
      }
      toast.success("AI gap analysis complete");
    } catch (err) {
      console.error(err);
      toast.error("Failed to run AI analysis");
    } finally {
      setGapAnalysisLoading(false);
    }
  };

  useEffect(() => { fetchCompetitors(); }, []);

  const fetchCompetitors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("competitors")
      .select("*")
      .order("threat_level", { ascending: false })
      .order("name");
    if (error) { toast.error("Failed to load competitors"); console.error(error); }
    else setCompetitors((data as unknown as Competitor[]) || []);
    setLoading(false);
  };

  const openEdit = (c: Competitor) => {
    setEditingId(c.id);
    setForm({ ...c });
    setDialogOpen(true);
  };

  const openNew = () => {
    setEditingId(null);
    setForm({ ...emptyForm });
    setDialogOpen(true);
  };

  const addToArray = (field: string) => {
    const val = arrayInputs[field]?.trim();
    if (!val) return;
    setForm(prev => ({ ...prev, [field]: [...((prev as any)[field] || []), val] }));
    setArrayInputs(prev => ({ ...prev, [field]: "" }));
  };

  const removeFromArray = (field: string, idx: number) => {
    setForm(prev => ({
      ...prev,
      [field]: ((prev as any)[field] || []).filter((_: string, i: number) => i !== idx)
    }));
  };

  const save = async () => {
    if (!form.name?.trim()) { toast.error("Name is required"); return; }
    const payload = {
      name: form.name, website: form.website || null, description: form.description || null,
      strengths: form.strengths || [], weaknesses: form.weaknesses || [],
      key_services: form.key_services || [], target_sectors: form.target_sectors || [],
      estimated_revenue: form.estimated_revenue || null, employee_count: form.employee_count || null,
      headquarters: form.headquarters || null, domain_authority: form.domain_authority || null,
      organic_keywords: form.organic_keywords || null, monthly_traffic: form.monthly_traffic || null,
      top_keywords: form.top_keywords || [], content_gaps: form.content_gaps || [],
      threat_level: form.threat_level || "medium", notes: form.notes || null,
      updated_at: new Date().toISOString(),
    };

    if (editingId) {
      const { error } = await supabase.from("competitors").update(payload).eq("id", editingId);
      if (error) { toast.error("Failed to update"); return; }
      toast.success("Competitor updated");
    } else {
      const { error } = await supabase.from("competitors").insert(payload as any);
      if (error) { toast.error("Failed to create"); return; }
      toast.success("Competitor added");
    }
    setDialogOpen(false);
    fetchCompetitors();
  };

  const deleteCompetitor = async (id: string) => {
    if (!confirm("Delete this competitor?")) return;
    const { error } = await supabase.from("competitors").delete().eq("id", id);
    if (error) toast.error("Failed to delete");
    else { toast.success("Deleted"); fetchCompetitors(); }
  };

  const ThreatIcon = ({ level }: { level: string }) => {
    if (level === "high") return <ShieldAlert className="h-4 w-4 text-destructive" />;
    if (level === "medium") return <Shield className="h-4 w-4 text-accent-foreground" />;
    return <ShieldCheck className="h-4 w-4 text-muted-foreground" />;
  };

  const ArrayField = ({ label, field }: { label: string; field: string }) => (
    <div>
      <label className="text-sm font-medium mb-1 block">{label}</label>
      <div className="flex gap-2 mb-2">
        <Input
          value={arrayInputs[field] || ""}
          onChange={e => setArrayInputs(prev => ({ ...prev, [field]: e.target.value }))}
          placeholder={`Add ${label.toLowerCase()}...`}
          onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addToArray(field))}
        />
        <Button type="button" size="sm" variant="outline" onClick={() => addToArray(field)}>
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-1">
        {((form as any)[field] || []).map((item: string, i: number) => (
          <Badge key={i} variant="secondary" className="cursor-pointer" onClick={() => removeFromArray(field, i)}>
            {item} ×
          </Badge>
        ))}
      </div>
    </div>
  );

  const highThreats = competitors.filter(c => c.threat_level === "high");
  const avgDA = competitors.filter(c => c.domain_authority).reduce((sum, c) => sum + (c.domain_authority || 0), 0) / (competitors.filter(c => c.domain_authority).length || 1);

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto my-[50px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Competitor Analysis</h1>
            <p className="text-muted-foreground">Track competitors, SEO metrics, and identify content gaps</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchCompetitors} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" /> Add Competitor</Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{competitors.length}</p>
                <p className="text-sm text-muted-foreground">Tracked Competitors</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-8 w-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold">{highThreats.length}</p>
                <p className="text-sm text-muted-foreground">High Threats</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{avgDA ? Math.round(avgDA) : "—"}</p>
                <p className="text-sm text-muted-foreground">Avg Domain Authority</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Search className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {competitors.reduce((sum, c) => sum + (c.content_gaps?.length || 0), 0)}
                </p>
                <p className="text-sm text-muted-foreground">Content Gaps Found</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="profiles" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profiles">Competitor Profiles</TabsTrigger>
            <TabsTrigger value="seo">SEO Comparison</TabsTrigger>
            <TabsTrigger value="swot">SWOT Overview</TabsTrigger>
          </TabsList>

          {/* Profiles Tab */}
          <TabsContent value="profiles">
            <div className="grid gap-6">
              {competitors.map(c => (
                <Card key={c.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold">{c.name}</h3>
                          <Badge className={threatColors[c.threat_level]}>
                            <ThreatIcon level={c.threat_level} />
                            <span className="ml-1 capitalize">{c.threat_level}</span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {c.website && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={c.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      <Button variant="ghost" size="icon" onClick={() => openEdit(c)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => deleteCompetitor(c.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">Key Services</p>
                      <div className="flex flex-wrap gap-1">
                        {c.key_services?.map((s, i) => <Badge key={i} variant="outline">{s}</Badge>)}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Target Sectors</p>
                      <div className="flex flex-wrap gap-1">
                        {c.target_sectors?.map((s, i) => <Badge key={i} variant="secondary">{s}</Badge>)}
                      </div>
                    </div>
                    <div className="space-y-1">
                      {c.headquarters && <p><span className="text-muted-foreground">HQ:</span> {c.headquarters}</p>}
                      {c.estimated_revenue && <p><span className="text-muted-foreground">Revenue:</span> {c.estimated_revenue}</p>}
                      {c.employee_count && <p><span className="text-muted-foreground">Employees:</span> {c.employee_count}</p>}
                    </div>
                  </div>
                  {c.notes && (
                    <div className="mt-4 p-3 bg-muted rounded-lg text-sm">
                      <p className="font-medium mb-1">Notes</p>
                      <p className="text-muted-foreground">{c.notes}</p>
                    </div>
                  )}
                </Card>
              ))}
              {!loading && competitors.length === 0 && (
                <Card className="p-12 text-center">
                  <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No competitors tracked yet</h3>
                  <p className="text-muted-foreground mb-4">Add your first competitor to start tracking</p>
                  <Button onClick={openNew}><Plus className="h-4 w-4 mr-2" /> Add Competitor</Button>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* SEO Comparison Tab */}
          <TabsContent value="seo">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" /> SEO Metrics Comparison
                </h2>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Competitor</TableHead>
                      <TableHead>Threat</TableHead>
                      <TableHead className="text-right">Domain Authority</TableHead>
                      <TableHead className="text-right">Organic Keywords</TableHead>
                      <TableHead className="text-right">Monthly Traffic</TableHead>
                      <TableHead>Content Gaps</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-primary/5 font-medium">
                      <TableCell>EntireFM (You)</TableCell>
                      <TableCell>—</TableCell>
                      <TableCell className="text-right">—</TableCell>
                      <TableCell className="text-right">—</TableCell>
                      <TableCell className="text-right">—</TableCell>
                      <TableCell>—</TableCell>
                    </TableRow>
                    {competitors.map(c => (
                      <TableRow key={c.id}>
                        <TableCell className="font-medium">{c.name}</TableCell>
                        <TableCell>
                          <Badge className={threatColors[c.threat_level]} variant="secondary">
                            <span className="capitalize">{c.threat_level}</span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{c.domain_authority ?? "—"}</TableCell>
                        <TableCell className="text-right">
                          {c.organic_keywords ? c.organic_keywords.toLocaleString() : "—"}
                        </TableCell>
                        <TableCell className="text-right">{c.monthly_traffic || "—"}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {c.content_gaps?.slice(0, 3).map((g, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{g}</Badge>
                            ))}
                            {(c.content_gaps?.length || 0) > 3 && (
                              <Badge variant="outline" className="text-xs">+{c.content_gaps.length - 3}</Badge>
                            )}
                            {!c.content_gaps?.length && "—"}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                💡 Update SEO metrics manually by editing each competitor. Use tools like Ahrefs, SEMrush, or Moz to gather domain authority, keyword counts, and traffic estimates.
              </p>
            </Card>
          </TabsContent>

          {/* SWOT Overview Tab */}
          <TabsContent value="swot">
            <div className="grid gap-6">
              {competitors.map(c => (
                <Card key={c.id} className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <Badge className={threatColors[c.threat_level]}>
                      <span className="capitalize">{c.threat_level}</span>
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <h4 className="font-medium text-primary mb-2 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" /> Strengths
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {c.strengths?.map((s, i) => <li key={i}>• {s}</li>)}
                        {!c.strengths?.length && <li className="text-muted-foreground">None recorded</li>}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                      <h4 className="font-medium text-destructive mb-2 flex items-center gap-1">
                        <ShieldAlert className="h-4 w-4" /> Weaknesses
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {c.weaknesses?.map((w, i) => <li key={i}>• {w}</li>)}
                        {!c.weaknesses?.length && <li className="text-muted-foreground">None recorded</li>}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Edit / Add Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? "Edit Competitor" : "Add Competitor"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name *</label>
                  <Input value={form.name || ""} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input value={form.website || ""} onChange={e => setForm(p => ({ ...p, website: e.target.value }))} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea value={form.description || ""} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={2} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Headquarters</label>
                  <Input value={form.headquarters || ""} onChange={e => setForm(p => ({ ...p, headquarters: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium">Est. Revenue</label>
                  <Input value={form.estimated_revenue || ""} onChange={e => setForm(p => ({ ...p, estimated_revenue: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium">Employees</label>
                  <Input value={form.employee_count || ""} onChange={e => setForm(p => ({ ...p, employee_count: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Threat Level</label>
                  <Select value={form.threat_level || "medium"} onValueChange={v => setForm(p => ({ ...p, threat_level: v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" /> SEO Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium">Domain Authority</label>
                    <Input type="number" value={form.domain_authority ?? ""} onChange={e => setForm(p => ({ ...p, domain_authority: e.target.value ? Number(e.target.value) : null }))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Organic Keywords</label>
                    <Input type="number" value={form.organic_keywords ?? ""} onChange={e => setForm(p => ({ ...p, organic_keywords: e.target.value ? Number(e.target.value) : null }))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Monthly Traffic</label>
                    <Input value={form.monthly_traffic || ""} onChange={e => setForm(p => ({ ...p, monthly_traffic: e.target.value }))} />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-4">
                <ArrayField label="Strengths" field="strengths" />
                <ArrayField label="Weaknesses" field="weaknesses" />
                <ArrayField label="Key Services" field="key_services" />
                <ArrayField label="Target Sectors" field="target_sectors" />
                <ArrayField label="Content Gaps" field="content_gaps" />
              </div>

              <div>
                <label className="text-sm font-medium">Notes</label>
                <Textarea value={form.notes || ""} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3} />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button onClick={save}>{editingId ? "Update" : "Add"} Competitor</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
