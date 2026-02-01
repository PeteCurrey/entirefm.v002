import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  FileCheck,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Wrench,
} from "lucide-react";

type SupplierApplication = {
  id: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  registered_address: string;
  website: string | null;
  years_established: number;
  regions: string[];
  service_categories: string[];
  status: string | null;
  admin_notes: string | null;
  has_safety_policy: boolean | null;
  has_near_miss_reporting: boolean | null;
  has_engineer_qualification_tracking: boolean | null;
  insurance_documents: any;
  accreditation_documents: any;
  created_at: string;
  updated_at: string;
};

const statusOptions = [
  { value: "pending", label: "Pending Review", color: "bg-yellow-500" },
  { value: "under_review", label: "Under Review", color: "bg-blue-500" },
  { value: "approved", label: "Approved", color: "bg-green-500" },
  { value: "rejected", label: "Rejected", color: "bg-red-500" },
  { value: "on_hold", label: "On Hold", color: "bg-orange-500" },
];

export default function SupplierApplications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedApplication, setSelectedApplication] = useState<SupplierApplication | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [adminNotes, setAdminNotes] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: applications, isLoading } = useQuery({
    queryKey: ["supplier-applications", statusFilter],
    queryFn: async () => {
      let query = supabase
        .from("supplier_applications")
        .select("*")
        .order("created_at", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as SupplierApplication[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      status,
      admin_notes,
    }: {
      id: string;
      status?: string;
      admin_notes?: string;
    }) => {
      const updateData: any = { updated_at: new Date().toISOString() };
      if (status) updateData.status = status;
      if (admin_notes !== undefined) updateData.admin_notes = admin_notes;

      const { error } = await supabase
        .from("supplier_applications")
        .update(updateData)
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplier-applications"] });
      toast({
        title: "Application Updated",
        description: "The supplier application has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update application.",
        variant: "destructive",
      });
    },
  });

  const handleStatusChange = (id: string, newStatus: string) => {
    updateMutation.mutate({ id, status: newStatus });
  };

  const handleSaveNotes = () => {
    if (selectedApplication) {
      updateMutation.mutate({
        id: selectedApplication.id,
        admin_notes: adminNotes,
      });
    }
  };

  const openDetail = (application: SupplierApplication) => {
    setSelectedApplication(application);
    setAdminNotes(application.admin_notes || "");
    setDetailOpen(true);
  };

  const filteredApplications = applications?.filter((app) =>
    app.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.contact_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string | null) => {
    const statusOption = statusOptions.find((s) => s.value === status) || statusOptions[0];
    return (
      <Badge className={`${statusOption.color} text-white`}>
        {statusOption.label}
      </Badge>
    );
  };

  const stats = {
    total: applications?.length || 0,
    pending: applications?.filter((a) => a.status === "pending").length || 0,
    approved: applications?.filter((a) => a.status === "approved").length || 0,
    rejected: applications?.filter((a) => a.status === "rejected").length || 0,
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Supplier Applications</h1>
        <p className="text-muted-foreground mt-1">
          Review and manage supplier partnership applications
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by company, contact, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : filteredApplications?.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No applications found
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Regions</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications?.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div className="font-medium">{application.company_name}</div>
                      <div className="text-sm text-muted-foreground">
                        Est. {application.years_established} years
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>{application.contact_name}</div>
                      <div className="text-sm text-muted-foreground">{application.email}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {application.regions.slice(0, 2).map((region) => (
                          <Badge key={region} variant="outline" className="text-xs">
                            {region}
                          </Badge>
                        ))}
                        {application.regions.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{application.regions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {application.service_categories.slice(0, 2).map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {application.service_categories.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{application.service_categories.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {format(new Date(application.created_at), "dd MMM yyyy")}
                    </TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openDetail(application)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={detailOpen} onOpenChange={setDetailOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              {selectedApplication?.company_name}
            </DialogTitle>
          </DialogHeader>

          {selectedApplication && (
            <div className="space-y-6">
              {/* Status Update */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Status:</span>
                <Select
                  value={selectedApplication.status || "pending"}
                  onValueChange={(value) =>
                    handleStatusChange(selectedApplication.id, value)
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Building2 className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Company Name</div>
                      <div className="font-medium">{selectedApplication.company_name}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Years Established</div>
                      <div className="font-medium">{selectedApplication.years_established} years</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Registered Address</div>
                      <div className="font-medium">{selectedApplication.registered_address}</div>
                    </div>
                  </div>
                  {selectedApplication.website && (
                    <div className="flex items-start gap-2">
                      <Globe className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">Website</div>
                        <a
                          href={selectedApplication.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline"
                        >
                          {selectedApplication.website}
                        </a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Contact Name</div>
                    <div className="font-medium">{selectedApplication.contact_name}</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">{selectedApplication.email}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">{selectedApplication.phone}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage & Services */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Coverage & Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Regions Covered</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedApplication.regions.map((region) => (
                        <Badge key={region} variant="outline">
                          <MapPin className="h-3 w-3 mr-1" />
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Service Categories</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedApplication.service_categories.map((service) => (
                        <Badge key={service} variant="secondary">
                          <Wrench className="h-3 w-3 mr-1" />
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compliance & Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      {selectedApplication.has_safety_policy ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span>Safety Policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedApplication.has_near_miss_reporting ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span>Near Miss Reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedApplication.has_engineer_qualification_tracking ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <span>Engineer Qualification Tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Admin Notes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Admin Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Add internal notes about this application..."
                    rows={4}
                  />
                  <Button onClick={handleSaveNotes} disabled={updateMutation.isPending}>
                    {updateMutation.isPending ? "Saving..." : "Save Notes"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
