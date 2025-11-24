import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Download, CheckCircle2, XCircle, AlertTriangle, RefreshCw } from 'lucide-react';

// Define all expected pages
const EXPECTED_PAGES = {
  complianceHubs: [{
    url: '/services/fire-safety',
    name: 'Fire Safety'
  }, {
    url: '/services/electrical-compliance',
    name: 'Electrical Compliance'
  }, {
    url: '/services/emergency-lighting',
    name: 'Emergency Lighting'
  }, {
    url: '/services/water-hygiene',
    name: 'Water Hygiene'
  }, {
    url: '/services/gas-safety',
    name: 'Gas Safety'
  }, {
    url: '/services/hvac-compliance',
    name: 'HVAC Compliance'
  }, {
    url: '/services/ppm',
    name: 'PPM'
  }, {
    url: '/services/hard-services-fm',
    name: 'Hard Services FM'
  }, {
    url: '/services/me-services',
    name: 'M&E Services'
  }, {
    url: '/services/access-control',
    name: 'Access Control'
  }, {
    url: '/services/emergency-systems',
    name: 'Emergency Systems'
  }, {
    url: '/services/commercial-plumbing',
    name: 'Commercial Plumbing'
  }, {
    url: '/services/building-inspections',
    name: 'Building Inspections'
  }, {
    url: '/services/drone-inspections',
    name: 'Drone Inspections'
  }],
  sectors: [{
    url: '/sectors/offices',
    name: 'Offices'
  }, {
    url: '/sectors/retail-hospitality',
    name: 'Retail & Hospitality'
  }, {
    url: '/sectors/industrial-logistics',
    name: 'Industrial & Logistics'
  }, {
    url: '/sectors/healthcare-public',
    name: 'Healthcare & Public'
  }, {
    url: '/sectors/hotels-leisure',
    name: 'Hotels & Leisure'
  }, {
    url: '/sectors/pbsa',
    name: 'PBSA'
  }, {
    url: '/sectors/education',
    name: 'Education'
  }, {
    url: '/sectors/airports',
    name: 'Airports'
  }, {
    url: '/sectors/venues',
    name: 'Venues'
  }, {
    url: '/sectors/residential',
    name: 'Residential'
  }, {
    url: '/sectors/logistics-parks',
    name: 'Logistics Parks'
  }],
  conversion: [{
    url: '/request-proposal',
    name: 'Request Proposal'
  }, {
    url: '/resources',
    name: 'Resources Hub'
  }, {
    url: '/case-studies',
    name: 'Case Studies Index'
  }],
  corporate: [{
    url: '/sustainability',
    name: 'Sustainability'
  }, {
    url: '/innovation',
    name: 'Innovation'
  }, {
    url: '/partnerships',
    name: 'Partnerships'
  }, {
    url: '/awards',
    name: 'Awards'
  }],
  caseStudies: [{
    url: '/case-studies/corporate-office-london',
    name: 'Corporate Office - London'
  }, {
    url: '/case-studies/retail-complex-birmingham',
    name: 'Retail Complex - Birmingham'
  }, {
    url: '/case-studies/industrial-warehouse-sheffield',
    name: 'Industrial Warehouse - Sheffield'
  }, {
    url: '/case-studies/pbsa-estate-manchester',
    name: 'PBSA Estate - Manchester'
  }, {
    url: '/case-studies/healthcare-derby',
    name: 'Healthcare - Derby'
  }, {
    url: '/case-studies/hotel-leeds',
    name: 'Hotel - Leeds'
  }, {
    url: '/case-studies/student-campus-nottingham',
    name: 'Student Campus - Nottingham'
  }, {
    url: '/case-studies/data-room-london',
    name: 'Data Room - London'
  }, {
    url: '/case-studies/distribution-chesterfield',
    name: 'Distribution - Chesterfield'
  }, {
    url: '/case-studies/emergency-lighting-lincoln',
    name: 'Emergency Lighting - Lincoln'
  }]
};

// Generate compliance location pages matrix
const SERVICES = [{
  slug: 'fire',
  name: 'Fire Safety'
}, {
  slug: 'electrical',
  name: 'Electrical Compliance'
}, {
  slug: 'emergency-lighting',
  name: 'Emergency Lighting'
}, {
  slug: 'water',
  name: 'Water Hygiene'
}, {
  slug: 'gas',
  name: 'Gas Safety'
}, {
  slug: 'hvac',
  name: 'HVAC Compliance'
}, {
  slug: 'ppm',
  name: 'PPM'
}];
const LOCATIONS = [{
  slug: 'London',
  name: 'London'
}, {
  slug: 'Birmingham',
  name: 'Birmingham'
}, {
  slug: 'Manchester',
  name: 'Manchester'
}, {
  slug: 'Leeds',
  name: 'Leeds'
}, {
  slug: 'Sheffield',
  name: 'Sheffield'
}, {
  slug: 'Nottingham',
  name: 'Nottingham'
}, {
  slug: 'Derby',
  name: 'Derby'
}, {
  slug: 'Chesterfield',
  name: 'Chesterfield'
}, {
  slug: 'Lincoln',
  name: 'Lincoln'
}];

// Pages that actually exist in the routing
const EXISTING_ROUTES = [
// Compliance Hubs & Services
'/services/fire-safety', '/services/electrical-compliance', '/services/emergency-lighting', '/services/water-hygiene', '/services/gas-safety', '/services/hvac-compliance', '/services/ppm', '/services/hard-services-fm', '/services/me-services', '/services/access-control', '/services/emergency-systems', '/services/commercial-plumbing', '/services/building-inspections', '/services/drone-inspections',
// Sectors
'/sectors/offices', '/sectors/retail-hospitality', '/sectors/industrial-logistics', '/sectors/healthcare-public', '/sectors/hotels-leisure', '/sectors/pbsa', '/sectors/education', '/sectors/airports', '/sectors/venues', '/sectors/residential', '/sectors/logistics-parks',
// Conversion
'/request-proposal', '/resources', '/case-studies',
// Corporate Pages
'/sustainability', '/innovation', '/partnerships', '/awards',
// Case Studies
'/case-studies/corporate-office-london', '/case-studies/retail-complex-birmingham', '/case-studies/industrial-warehouse-sheffield', '/case-studies/pbsa-estate-manchester',
// Compliance Location Pages
'/services/fire/Birmingham', '/services/fire/Leeds', '/services/fire/London', '/services/fire/Manchester', '/services/fire/Derby', '/services/fire/Chesterfield', '/services/fire/Lincoln', '/services/fire/Nottingham', '/services/fire/Sheffield', '/services/electrical/Birmingham', '/services/electrical/Chesterfield', '/services/electrical/Derby', '/services/electrical/Leeds', '/services/electrical/Lincoln', '/services/electrical/London', '/services/electrical/Manchester', '/services/electrical/Nottingham', '/services/electrical/Sheffield', '/services/emergency-lighting/Birmingham', '/services/emergency-lighting/London', '/services/emergency-lighting/Manchester', '/services/emergency-lighting/Derby', '/services/emergency-lighting/Nottingham', '/services/emergency-lighting/Chesterfield', '/services/emergency-lighting/Lincoln', '/services/emergency-lighting/Sheffield', '/services/emergency-lighting/Leeds', '/services/water/Birmingham', '/services/water/Chesterfield', '/services/water/Derby', '/services/water/Leeds', '/services/water/Lincoln', '/services/water/London', '/services/water/Manchester', '/services/water/Nottingham', '/services/water/Sheffield', '/services/gas/Birmingham', '/services/gas/Chesterfield', '/services/gas/Derby', '/services/gas/Leeds', '/services/gas/Lincoln', '/services/gas/London', '/services/gas/Manchester', '/services/gas/Nottingham', '/services/gas/Sheffield', '/services/hvac/Birmingham', '/services/hvac/Chesterfield', '/services/hvac/Derby', '/services/hvac/Leeds', '/services/hvac/Lincoln', '/services/hvac/London', '/services/hvac/Manchester', '/services/hvac/Nottingham', '/services/hvac/Sheffield', '/services/ppm/Birmingham', '/services/ppm/Chesterfield', '/services/ppm/Derby', '/services/ppm/Leeds', '/services/ppm/Lincoln', '/services/ppm/London', '/services/ppm/Manchester', '/services/ppm/Nottingham', '/services/ppm/Sheffield'];
const SiteMap = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const checkPageStatus = (url: string) => {
    const normalizedUrl = url.toLowerCase();
    const exists = EXISTING_ROUTES.some(route => route.toLowerCase() === normalizedUrl);
    return exists ? 'exists' : 'missing';
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'exists':
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case 'missing':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'unpublished':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'mismatch':
        return <RefreshCw className="w-4 h-4 text-orange-600" />;
      default:
        return null;
    }
  };
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'exists':
        return <Badge variant="default" className="bg-green-600">✔ Exists</Badge>;
      case 'missing':
        return <Badge variant="destructive">❌ Missing</Badge>;
      case 'unpublished':
        return <Badge variant="secondary">⚠️ Unpublished</Badge>;
      case 'mismatch':
        return <Badge variant="outline">🔁 Slug Mismatch</Badge>;
      default:
        return null;
    }
  };

  // Generate compliance location matrix
  const complianceLocationPages = useMemo(() => {
    const pages: {
      service: string;
      location: string;
      url: string;
      status: string;
    }[] = [];
    SERVICES.forEach(service => {
      LOCATIONS.forEach(location => {
        const url = `/services/${service.slug}/${location.slug}`;
        pages.push({
          service: service.name,
          location: location.name,
          url,
          status: checkPageStatus(url)
        });
      });
    });
    return pages;
  }, []);

  // Filter pages based on search
  const filteredPages = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return null;
    const allPages = [...EXPECTED_PAGES.complianceHubs, ...EXPECTED_PAGES.sectors, ...EXPECTED_PAGES.conversion, ...EXPECTED_PAGES.corporate, ...EXPECTED_PAGES.caseStudies, ...complianceLocationPages.map(p => ({
      url: p.url,
      name: `${p.service} - ${p.location}`
    }))];
    return allPages.filter(page => page.url.toLowerCase().includes(query) || page.name.toLowerCase().includes(query));
  }, [searchQuery, complianceLocationPages]);
  const exportCSV = () => {
    const allPages = [...EXPECTED_PAGES.complianceHubs.map(p => ({
      ...p,
      category: 'Compliance Hub',
      status: checkPageStatus(p.url)
    })), ...EXPECTED_PAGES.sectors.map(p => ({
      ...p,
      category: 'Sector',
      status: checkPageStatus(p.url)
    })), ...EXPECTED_PAGES.conversion.map(p => ({
      ...p,
      category: 'Conversion',
      status: checkPageStatus(p.url)
    })), ...EXPECTED_PAGES.corporate.map(p => ({
      ...p,
      category: 'Corporate',
      status: checkPageStatus(p.url)
    })), ...EXPECTED_PAGES.caseStudies.map(p => ({
      ...p,
      category: 'Case Study',
      status: checkPageStatus(p.url)
    })), ...complianceLocationPages.map(p => ({
      url: p.url,
      name: `${p.service} - ${p.location}`,
      category: 'Compliance Location',
      status: p.status
    }))];
    const csv = [['Category', 'Page Name', 'URL', 'Status'], ...allPages.map(page => [page.category, page.name, page.url, page.status])].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], {
      type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'entirefm-site-map.csv';
    a.click();
  };
  const missingCount = complianceLocationPages.filter(p => p.status === 'missing').length;
  const totalCompliancePages = complianceLocationPages.length;
  return <>
      <Helmet>
        <title>Site Map & URL Registry - EntireFM</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-foreground text-2xl font-extralight mt-0 mr-0 mb-0 ml-0 py-[20px] my-[20px]">Site Map & URL Registry</h1>
            <div className="bg-muted/50 border border-border rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                ℹ️ This page is for build validation only and will be hidden from public menus.
              </p>
            </div>

            {/* Search & Export */}
            <div className="flex gap-4 items-center mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input type="text" placeholder="Search URLs or page names..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10" />
              </div>
              <Button onClick={exportCSV} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{EXISTING_ROUTES.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Compliance Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalCompliancePages - missingCount}/{totalCompliancePages}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Missing Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">{missingCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round((totalCompliancePages - missingCount) / totalCompliancePages * 100)}%
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Search Results */}
          {filteredPages && <Card className="mb-8">
              <CardHeader>
                <CardTitle>Search Results ({filteredPages.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filteredPages.map(page => {
                const status = checkPageStatus(page.url);
                return <div key={page.url} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3 flex-1">
                          {getStatusIcon(status)}
                          <Link to={page.url} className="text-sm font-medium hover:underline">
                            {page.name}
                          </Link>
                          <code className="text-xs text-muted-foreground">{page.url}</code>
                        </div>
                        {getStatusBadge(status)}
                      </div>;
              })}
                </div>
              </CardContent>
            </Card>}

          {!searchQuery && <>
              {/* 1. Compliance Hubs */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>1️⃣ Compliance Hubs</CardTitle>
                  <CardDescription>Core service compliance pages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {EXPECTED_PAGES.complianceHubs.map(page => {
                  const status = checkPageStatus(page.url);
                  return <div key={page.url} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(status)}
                            <Link to={page.url} className="text-sm font-medium hover:underline">
                              {page.name}
                            </Link>
                            <code className="text-xs text-muted-foreground">{page.url}</code>
                          </div>
                          {getStatusBadge(status)}
                        </div>;
                })}
                  </div>
                </CardContent>
              </Card>

              {/* 2. Core Sector Pages */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>2️⃣ Core Sector Pages</CardTitle>
                  <CardDescription>Industry-specific landing pages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {EXPECTED_PAGES.sectors.map(page => {
                  const status = checkPageStatus(page.url);
                  return <div key={page.url} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(status)}
                            <Link to={page.url} className="text-sm font-medium hover:underline">
                              {page.name}
                            </Link>
                            <code className="text-xs text-muted-foreground">{page.url}</code>
                          </div>
                          {getStatusBadge(status)}
                        </div>;
                })}
                  </div>
                </CardContent>
              </Card>

              {/* 3. RFP & Conversion */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3️⃣ RFP & Conversion</CardTitle>
                  <CardDescription>Lead generation and conversion pages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {EXPECTED_PAGES.conversion.map(page => {
                  const status = checkPageStatus(page.url);
                  return <div key={page.url} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(status)}
                            <Link to={page.url} className="text-sm font-medium hover:underline">
                              {page.name}
                            </Link>
                            <code className="text-xs text-muted-foreground">{page.url}</code>
                          </div>
                          {getStatusBadge(status)}
                        </div>;
                })}
                  </div>
                </CardContent>
              </Card>

              {/* 4. Corporate Pages */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4️⃣ Corporate Pages</CardTitle>
                  <CardDescription>Company information and credentials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {EXPECTED_PAGES.corporate.map(page => {
                  const status = checkPageStatus(page.url);
                  return <div key={page.url} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(status)}
                            <Link to={page.url} className="text-sm font-medium hover:underline">
                              {page.name}
                            </Link>
                            <code className="text-xs text-muted-foreground">{page.url}</code>
                          </div>
                          {getStatusBadge(status)}
                        </div>;
                })}
                  </div>
                </CardContent>
              </Card>

              {/* 5. Compliance Location Pages Matrix */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5️⃣ Compliance Location Pages Matrix</CardTitle>
                  <CardDescription>
                    Service × Location Matrix: 7 services × 9 locations = 63 pages
                    {missingCount > 0 && <span className="block mt-2 text-red-600 font-semibold">
                        ⚠️ Detected {missingCount} missing page{missingCount !== 1 ? 's' : ''}
                      </span>}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-2 font-semibold">Service</th>
                          {LOCATIONS.map(loc => <th key={loc.slug} className="text-center p-2 font-semibold">{loc.name}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {SERVICES.map(service => <tr key={service.slug} className="border-b border-border hover:bg-muted/50">
                            <td className="p-2 font-medium">{service.name}</td>
                            {LOCATIONS.map(location => {
                        const page = complianceLocationPages.find(p => p.service === service.name && p.location === location.name);
                        return <td key={location.slug} className="text-center p-2">
                                  {page && <Link to={page.url} className="inline-block">
                                      {getStatusIcon(page.status)}
                                    </Link>}
                                </td>;
                      })}
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Case Studies */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6️⃣ Case Studies</CardTitle>
                  <CardDescription>Client success stories and authority builders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {EXPECTED_PAGES.caseStudies.map(page => {
                  const status = checkPageStatus(page.url);
                  return <div key={page.url} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(status)}
                            <Link to={page.url} className="text-sm font-medium hover:underline">
                              {page.name}
                            </Link>
                            <code className="text-xs text-muted-foreground">{page.url}</code>
                          </div>
                          {getStatusBadge(status)}
                        </div>;
                })}
                  </div>
                </CardContent>
              </Card>
            </>}
        </div>
      </div>
    </>;
};
export default SiteMap;