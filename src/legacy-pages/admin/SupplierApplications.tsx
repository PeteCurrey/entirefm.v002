"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Eye, Loader2, Search, Building2, MapPin, Calendar, CheckCircle2, Clock, XCircle } from "lucide-react";
import { format } from "date-fns";

interface SupplierApplication {
  id: string;
  created_at: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  website: string | null;
  registered_address: string;
  years_established: number;
  service_categories: string[];
  regions: string[];
  has_safety_policy: boolean | null;
  has_near_miss_reporting: boolean | null;
  has_engineer_qualification_tracking: boolean | null;
  status: string | null;
  admin_notes: string | null;
}

export default function SupplierApplications() {
  const [applications, setApplications] = useState<SupplierApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<SupplierApplication | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('supplier_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load supplier applications",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('supplier_applications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status Updated",
        description: `Application status changed to ${newStatus}`,
      });

      fetchApplications();
      if (selectedApp?.id === id) {
        setSelectedApp({ ...selectedApp, status: newStatus });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const filteredApps = applications.filter(app => {
    const matchesSearch = 
      app.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.service_categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string | null) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="flex items-center gap-1"><Clock className="w-3 h-3" /> Pending</Badge>;
      case "reviewed":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-700">Reviewed</Badge>;
      case "approved":
        return <Badge variant="default" className="bg-green-600">Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status || "New"}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Supplier Applications</h1>
        <p className="text-muted-foreground">Review and manage supplier onboarding submissions</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search suppliers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Services</TableHead>
              <TableHead>Regions</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApps.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No applications found.
                </TableCell>
              </TableRow>
            ) : (
              filteredApps.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.company_name}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{app.contact_name}</div>
                      <div className="text-muted-foreground">{app.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {app.service_categories.slice(0, 2).map((cat, i) => (
                        <Badge key={i} variant="outline" className="text-[10px] px-1 py-0">{cat}</Badge>
                      ))}
                      {app.service_categories.length > 2 && (
                        <span className="text-[10px] text-muted-foreground">+{app.service_categories.length - 2}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{app.regions.slice(0, 2).join(", ")}{app.regions.length > 2 && "..."}</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(app.status)}</TableCell>
                  <TableCell className="text-sm">
                    {format(new Date(app.created_at), "dd MMM yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => setSelectedApp(app)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedApp} onOpenChange={() => setSelectedApp(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedApp && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  {selectedApp.company_name}
                </DialogTitle>
                <DialogDescription>
                  Application submitted on {format(new Date(selectedApp.created_at), "MMMM do, yyyy HH:mm")}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Contact info</h4>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">{selectedApp.contact_name}</p>
                      <p className="text-sm text-blue-600 hover:underline">{selectedApp.email}</p>
                      <p className="text-sm">{selectedApp.phone}</p>
                      {selectedApp.website && (
                        <a href={selectedApp.website} target="_blank" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                          {selectedApp.website}
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Company Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground mr-2">Established:</span> {selectedApp.years_established} years</p>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                        <p>{selectedApp.registered_address}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Compliance & Safety</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Safety Policy</span>
                        {selectedApp.has_safety_policy ? 
                          <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                          <XCircle className="h-4 w-4 text-red-500" />
                        }
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Near Miss Reporting</span>
                        {selectedApp.has_near_miss_reporting ? 
                          <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                          <XCircle className="h-4 w-4 text-red-500" />
                        }
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Qualification Tracking</span>
                        {selectedApp.has_engineer_qualification_tracking ? 
                          <CheckCircle2 className="h-4 w-4 text-green-500" /> : 
                          <XCircle className="h-4 w-4 text-red-500" />
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Services Offered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedApp.service_categories.map((cat, i) => (
                        <Badge key={i} variant="outline">{cat}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Operational Regions</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedApp.regions.map((region, i) => (
                        <Badge key={i} variant="secondary">{region}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-4">
                    <h4 className="text-sm font-semibold">Application Status</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        size="sm" 
                        variant={selectedApp.status === "approved" ? "default" : "outline"}
                        className={selectedApp.status === "approved" ? "bg-green-600 hover:bg-green-700" : ""}
                        onClick={() => updateStatus(selectedApp.id, "approved")}
                      >
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant={selectedApp.status === "reviewed" ? "default" : "outline"}
                        onClick={() => updateStatus(selectedApp.id, "reviewed")}
                      >
                        Mark Reviewed
                      </Button>
                      <Button 
                        size="sm" 
                        variant={selectedApp.status === "rejected" ? "destructive" : "outline"}
                        onClick={() => updateStatus(selectedApp.id, "rejected")}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
