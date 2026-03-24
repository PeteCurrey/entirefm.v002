"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Loader2, Wand2, Check, MapPin, Wrench, Building2, Globe } from "lucide-react";

type PageType = 'geo' | 'service-location' | 'sector-location';

interface Location {
  id: string;
  name: string;
  slug: string;
  region?: string;
}

interface ServiceType {
  id: string;
  name: string;
  slug: string;
  category?: string;
}

const PRESET_LOCATIONS: Location[] = [
  { id: '1', name: 'London', slug: 'london', region: 'South East' },
  { id: '2', name: 'Birmingham', slug: 'birmingham', region: 'West Midlands' },
  { id: '3', name: 'Manchester', slug: 'manchester', region: 'North West' },
  { id: '4', name: 'Leeds', slug: 'leeds', region: 'Yorkshire' },
  { id: '5', name: 'Sheffield', slug: 'sheffield', region: 'Yorkshire' },
  { id: '6', name: 'Liverpool', slug: 'liverpool', region: 'North West' },
  { id: '7', name: 'Nottingham', slug: 'nottingham', region: 'East Midlands' },
  { id: '8', name: 'Derby', slug: 'derby', region: 'East Midlands' },
  { id: '9', name: 'Leicester', slug: 'leicester', region: 'East Midlands' },
  { id: '10', name: 'Chesterfield', slug: 'chesterfield', region: 'East Midlands' },
  { id: '11', name: 'Lincoln', slug: 'lincoln', region: 'East Midlands' },
  { id: '12', name: 'Bristol', slug: 'bristol', region: 'South West' },
  { id: '13', name: 'Newcastle', slug: 'newcastle', region: 'North East' },
  { id: '14', name: 'Glasgow', slug: 'glasgow', region: 'Scotland' },
  { id: '15', name: 'Edinburgh', slug: 'edinburgh', region: 'Scotland' },
];

const PRESET_SERVICES: ServiceType[] = [
  { id: '1', name: 'Fire Safety', slug: 'fire-safety', category: 'Compliance' },
  { id: '2', name: 'Electrical Testing', slug: 'electrical-testing', category: 'Compliance' },
  { id: '3', name: 'Emergency Lighting', slug: 'emergency-lighting', category: 'Compliance' },
  { id: '4', name: 'HVAC Maintenance', slug: 'hvac-maintenance', category: 'M&E' },
  { id: '5', name: 'Water Hygiene', slug: 'water-hygiene', category: 'Compliance' },
  { id: '6', name: 'Gas Safety', slug: 'gas-safety', category: 'Compliance' },
  { id: '7', name: 'PPM Services', slug: 'ppm-services', category: 'Maintenance' },
  { id: '8', name: 'Lift Maintenance', slug: 'lift-maintenance', category: 'Critical' },
];

const PRESET_SECTORS = [
  { id: '1', name: 'Industrial & Logistics', slug: 'industrial-logistics' },
  { id: '2', name: 'Offices & Corporate', slug: 'offices-corporate' },
  { id: '3', name: 'Retail & Hospitality', slug: 'retail-hospitality' },
  { id: '4', name: 'Healthcare', slug: 'healthcare' },
  { id: '5', name: 'Education', slug: 'education' },
  { id: '6', name: 'Residential & PBSA', slug: 'residential-pbsa' },
];

export default function PageCreator() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [pageType, setPageType] = useState<PageType | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedSector, setSelectedSector] = useState<string>('');
  const [generatedPages, setGeneratedPages] = useState<any[]>([]);
  const [generating, setGenerating] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleLocationToggle = (locationId: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationId) 
        ? prev.filter(id => id !== locationId)
        : [...prev, locationId]
    );
  };

  const selectAllLocations = () => {
    if (selectedLocations.length === PRESET_LOCATIONS.length) {
      setSelectedLocations([]);
    } else {
      setSelectedLocations(PRESET_LOCATIONS.map(l => l.id));
    }
  };

  const generatePageContent = async () => {
    setGenerating(true);
    const pages: any[] = [];

    for (const locationId of selectedLocations) {
      const location = PRESET_LOCATIONS.find(l => l.id === locationId);
      if (!location) continue;

      let title = '';
      let slug = '';
      let metaTitle = '';
      let metaDescription = '';

      if (pageType === 'geo') {
        title = `Facilities Management in ${location.name}`;
        slug = `fm-${location.slug}`;
        metaTitle = `Facilities Management ${location.name} | EFM Innovations`;
        metaDescription = `Expert facilities management services in ${location.name}. Compliance, M&E, and reactive maintenance from EFM Innovations.`;
      } else if (pageType === 'service-location') {
        const service = PRESET_SERVICES.find(s => s.id === selectedService);
        if (service) {
          title = `${service.name} in ${location.name}`;
          slug = `services/${service.slug}/${location.slug}`;
          metaTitle = `${service.name} ${location.name} | EFM Innovations`;
          metaDescription = `Professional ${service.name.toLowerCase()} services in ${location.name}. Certified engineers, rapid response, full compliance.`;
        }
      } else if (pageType === 'sector-location') {
        const sector = PRESET_SECTORS.find(s => s.id === selectedSector);
        if (sector) {
          title = `${sector.name} FM in ${location.name}`;
          slug = `sectors/${sector.slug}/${location.slug}`;
          metaTitle = `${sector.name} Facilities Management ${location.name} | EFM`;
          metaDescription = `Specialist ${sector.name.toLowerCase()} facilities management in ${location.name}. Tailored solutions for your sector.`;
        }
      }

      pages.push({
        title,
        slug,
        meta_title: metaTitle,
        meta_description: metaDescription,
        location: location.name,
        status: 'draft',
        page_data: {
          type: pageType,
          location: location,
          service: pageType === 'service-location' ? PRESET_SERVICES.find(s => s.id === selectedService) : null,
          sector: pageType === 'sector-location' ? PRESET_SECTORS.find(s => s.id === selectedSector) : null,
        }
      });
    }

    setGeneratedPages(pages);
    setGenerating(false);
    setStep(4);
  };

  const savePages = async (publish: boolean = false) => {
    setSaving(true);
    try {
      const pagesToSave = generatedPages.map(page => ({
        ...page,
        status: publish ? 'published' : 'draft',
        published_at: publish ? new Date().toISOString() : null,
      }));

      const { error } = await supabase.from('dynamic_pages').insert(pagesToSave);
      
      if (error) throw error;

      toast({
        title: publish ? "Pages Published!" : "Pages Saved as Drafts",
        description: `${generatedPages.length} pages have been created.`,
      });

      router.push('/admin/pages');
    } catch (error: any) {
      toast({
        title: "Error saving pages",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return pageType !== null;
      case 2: return selectedLocations.length > 0;
      case 3: 
        if (pageType === 'geo') return true;
        if (pageType === 'service-location') return selectedService !== '';
        if (pageType === 'sector-location') return selectedSector !== '';
        return false;
      default: return true;
    }
  };

  const handleNext = () => {
    if (step === 3) {
      generatePageContent();
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.push('/admin/pages')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Page Creator Wizard</h1>
          <p className="text-muted-foreground">Generate multiple geo/service/sector pages at once</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {step > s ? <Check className="h-5 w-5" /> : s}
            </div>
            {s < 4 && <div className={`w-24 h-1 mx-2 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {/* Step 1: Select Page Type */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Page Type</CardTitle>
            <CardDescription>What type of pages do you want to create?</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <button
              onClick={() => setPageType('geo')}
              className={`p-6 rounded-lg border-2 text-left transition-all ${
                pageType === 'geo' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
              }`}
            >
              <Globe className="h-8 w-8 mb-3 text-primary" />
              <h3 className="font-semibold">Geo Landing Pages</h3>
              <p className="text-sm text-muted-foreground mt-1">
                FM services in [Location] pages for local SEO
              </p>
            </button>

            <button
              onClick={() => setPageType('service-location')}
              className={`p-6 rounded-lg border-2 text-left transition-all ${
                pageType === 'service-location' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
              }`}
            >
              <Wrench className="h-8 w-8 mb-3 text-primary" />
              <h3 className="font-semibold">Service + Location</h3>
              <p className="text-sm text-muted-foreground mt-1">
                [Service] in [Location] pages (e.g., Fire Safety in London)
              </p>
            </button>

            <button
              onClick={() => setPageType('sector-location')}
              className={`p-6 rounded-lg border-2 text-left transition-all ${
                pageType === 'sector-location' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
              }`}
            >
              <Building2 className="h-8 w-8 mb-3 text-primary" />
              <h3 className="font-semibold">Sector + Location</h3>
              <p className="text-sm text-muted-foreground mt-1">
                [Sector] FM in [Location] pages (e.g., Healthcare FM in Manchester)
              </p>
            </button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Select Locations */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Select Locations</CardTitle>
                <CardDescription>Choose the locations for your pages</CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={selectAllLocations}>
                {selectedLocations.length === PRESET_LOCATIONS.length ? 'Deselect All' : 'Select All'}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              {PRESET_LOCATIONS.map((location) => (
                <label
                  key={location.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedLocations.includes(location.id) 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Checkbox
                    checked={selectedLocations.includes(location.id)}
                    onCheckedChange={() => handleLocationToggle(location.id)}
                  />
                  <div>
                    <p className="font-medium">{location.name}</p>
                    <p className="text-xs text-muted-foreground">{location.region}</p>
                  </div>
                </label>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {selectedLocations.length} location(s) selected
            </p>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Select Service/Sector */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>
              {pageType === 'geo' && 'Ready to Generate'}
              {pageType === 'service-location' && 'Select Service'}
              {pageType === 'sector-location' && 'Select Sector'}
            </CardTitle>
            <CardDescription>
              {pageType === 'geo' && `${selectedLocations.length} geo landing pages will be created`}
              {pageType === 'service-location' && 'Choose the service for your location pages'}
              {pageType === 'sector-location' && 'Choose the sector for your location pages'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pageType === 'geo' && (
              <div className="p-6 bg-muted/50 rounded-lg text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">
                  {selectedLocations.length} Geo Landing Pages
                </p>
                <p className="text-muted-foreground">
                  Click "Generate Pages" to create your pages
                </p>
              </div>
            )}

            {pageType === 'service-location' && (
              <div className="grid gap-3 md:grid-cols-2">
                {PRESET_SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedService === service.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <p className="font-medium">{service.name}</p>
                    <Badge variant="secondary" className="mt-1">{service.category}</Badge>
                  </button>
                ))}
              </div>
            )}

            {pageType === 'sector-location' && (
              <div className="grid gap-3 md:grid-cols-2">
                {PRESET_SECTORS.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setSelectedSector(sector.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedSector === sector.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <p className="font-medium">{sector.name}</p>
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 4: Review & Publish */}
      {step === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Review Generated Pages</CardTitle>
            <CardDescription>{generatedPages.length} pages ready to save</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="max-h-96 overflow-y-auto space-y-2">
              {generatedPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{page.title}</p>
                    <p className="text-sm text-muted-foreground">/{page.slug}</p>
                  </div>
                  <Badge variant="secondary">{page.location}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {step < 4 ? (
          <Button onClick={handleNext} disabled={!canProceed() || generating}>
            {generating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : step === 3 ? (
              <>
                <Wand2 className="h-4 w-4 mr-2" />
                Generate Pages
              </>
            ) : (
              <>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => savePages(false)} disabled={saving}>
              Save as Drafts
            </Button>
            <Button onClick={() => savePages(true)} disabled={saving}>
              {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
              Publish All
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
