import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Search, FileText, Wrench, Book, Download, ExternalLink, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "documentation" | "troubleshooting" | "manual";
  format: string;
  lastUpdated: string;
  url?: string;
}

const CATEGORIES = [
  "All",
  "Fire Safety",
  "Electrical",
  "HVAC",
  "Water Hygiene",
  "Gas",
  "Building Fabric",
  "Access Control",
];

// Sample knowledge base resources
const RESOURCES: Resource[] = [
  {
    id: "1",
    title: "Fire Alarm System Maintenance Guide",
    description: "Comprehensive guide for servicing and testing fire alarm systems to BS 5839-1",
    category: "Fire Safety",
    type: "documentation",
    format: "PDF",
    lastUpdated: "2024-01-15",
    url: "#",
  },
  {
    id: "2",
    title: "Emergency Light Testing Procedures",
    description: "Step-by-step procedures for monthly and annual emergency lighting tests",
    category: "Fire Safety",
    type: "troubleshooting",
    format: "PDF",
    lastUpdated: "2024-01-10",
    url: "#",
  },
  {
    id: "3",
    title: "EICR Testing Checklist",
    description: "Complete checklist for conducting Electrical Installation Condition Reports",
    category: "Electrical",
    type: "documentation",
    format: "PDF",
    lastUpdated: "2024-02-01",
    url: "#",
  },
  {
    id: "4",
    title: "Common AHU Fault Diagnosis",
    description: "Troubleshooting guide for Air Handling Units - diagnosing common faults",
    category: "HVAC",
    type: "troubleshooting",
    format: "PDF",
    lastUpdated: "2024-01-20",
    url: "#",
  },
  {
    id: "5",
    title: "Chiller Maintenance Manual",
    description: "Manufacturer guidelines and maintenance schedules for commercial chillers",
    category: "HVAC",
    type: "manual",
    format: "PDF",
    lastUpdated: "2023-12-15",
    url: "#",
  },
  {
    id: "6",
    title: "Legionella Risk Assessment Guide",
    description: "ACOP L8 compliant guide for conducting water system risk assessments",
    category: "Water Hygiene",
    type: "documentation",
    format: "PDF",
    lastUpdated: "2024-02-10",
    url: "#",
  },
  {
    id: "7",
    title: "TMV Installation Standards",
    description: "Installation and commissioning standards for Thermostatic Mixing Valves",
    category: "Water Hygiene",
    type: "manual",
    format: "PDF",
    lastUpdated: "2024-01-05",
    url: "#",
  },
  {
    id: "8",
    title: "Boiler No Heat Troubleshooting",
    description: "Quick diagnostic flowchart for commercial boiler heating failures",
    category: "HVAC",
    type: "troubleshooting",
    format: "PDF",
    lastUpdated: "2024-01-25",
    url: "#",
  },
  {
    id: "9",
    title: "PAT Testing Procedures",
    description: "Portable Appliance Testing procedures and equipment classification guide",
    category: "Electrical",
    type: "documentation",
    format: "PDF",
    lastUpdated: "2024-01-12",
    url: "#",
  },
  {
    id: "10",
    title: "Door Closer Adjustment Guide",
    description: "Step-by-step guide for adjusting and maintaining fire door closers",
    category: "Building Fabric",
    type: "troubleshooting",
    format: "PDF",
    lastUpdated: "2023-12-20",
    url: "#",
  },
];

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"all" | "documentation" | "troubleshooting" | "manual">("all");

  const filteredResources = RESOURCES.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesTab = activeTab === "all" || resource.type === activeTab;

    return matchesSearch && matchesCategory && matchesTab;
  });

  const getTypeIcon = (type: Resource["type"]) => {
    switch (type) {
      case "documentation":
        return <FileText className="w-5 h-5" />;
      case "troubleshooting":
        return <Wrench className="w-5 h-5" />;
      case "manual":
        return <Book className="w-5 h-5" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Engineer Knowledge Base | EntireFM</title>
        <meta name="description" content="Access technical documentation, troubleshooting guides, and asset manuals for EntireFM engineers." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b">
          <div className="container">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                Internal Resources
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
                Engineer Knowledge Base
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Access technical documentation, troubleshooting guides, and asset manuals. Everything you need to deliver exceptional facilities management.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 border-b bg-background/50">
          <div className="container">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search documentation, guides, manuals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
                <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                <TabsTrigger value="manual">Manuals</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-0">
                {filteredResources.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No resources found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredResources.map((resource) => (
                      <Card key={resource.id} className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2 text-primary">
                              {getTypeIcon(resource.type)}
                              <span className="text-xs font-medium uppercase tracking-wider">
                                {resource.type}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                              {resource.format}
                            </span>
                          </div>
                          <CardTitle className="text-lg leading-snug">{resource.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {resource.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">
                              <span className="font-medium">{resource.category}</span>
                              <span className="mx-2">•</span>
                              <span>Updated {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                            </div>
                            <Button size="sm" variant="ghost" asChild>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 border-t bg-muted/30">
          <div className="container">
            <h2 className="text-2xl font-light mb-6">Quick Access</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link to="/fm-operations/report-issue">
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center justify-between">
                      Report an Issue
                      <ChevronRight className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      Log a maintenance issue or service request
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/fm-operations/helpdesk">
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center justify-between">
                      Helpdesk Portal
                      <ChevronRight className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      Access support and operational guidance
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/services">
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center justify-between">
                      Service Overview
                      <ChevronRight className="w-4 h-4" />
                    </CardTitle>
                    <CardDescription>
                      Browse all EntireFM service offerings
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Need Help CTA */}
        <section className="py-12 border-t">
          <div className="container">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle>Can't Find What You're Looking For?</CardTitle>
                <CardDescription className="text-base">
                  Contact the technical support team or submit a request for new documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <a href="mailto:helpdesk@entirefm.com">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Email Technical Support
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/fm-operations/report-issue">
                      Request Documentation
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
