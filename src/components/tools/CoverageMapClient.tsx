"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { regionalOffices, type RegionalOffice } from "@/lib/regionalOffices";
import { Search, MapPin, Navigation, Clock, ShieldCheck, Mail, Phone, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";

// Fix for default marker icons in Leaflet + Next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const officeIcon = L.divIcon({
  className: "custom-office-icon",
  html: `<div class="w-8 h-8 bg-charcoal border-2 border-primary rounded-full flex items-center justify-center shadow-lg"><div class="w-2 h-2 bg-primary rounded-full animate-ping"></div></div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

export default function CoverageMapClient() {
  const [search, setSearch] = useState("");
  const [selectedOffice, setSelectedOffice] = useState<RegionalOffice | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([54.5, -2.5]); // Central UK
  const [mapZoom, setMapZoom] = useState(6);
  const [isSearching, setIsSearching] = useState(false);

  const handlePostcodeLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    setIsSearching(true);
    
    try {
      // Simulate geolocation for demo purposes (postcodes.io or similar)
      const res = await fetch(`https://api.postcodes.io/postcodes/${search}`);
      if (res.ok) {
        const data = await res.json();
        const { latitude, longitude } = data.result;
        setMapCenter([latitude, longitude]);
        setMapZoom(10);
        
        // Find nearest office
        let nearest = regionalOffices[0];
        let minDist = Infinity;
        regionalOffices.forEach(office => {
          const d = Math.sqrt(Math.pow(office.lat - latitude, 2) + Math.pow(office.lng - longitude, 2));
          if (d < minDist) {
            minDist = d;
            nearest = office;
          }
        });
        setSelectedOffice(nearest);
      }
    } catch (err) {
      console.warn("Postcode lookup failed", err);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[700px]">
      {/* Sidebar */}
      <div className="w-full lg:w-96 bg-white border-r border-border flex flex-col">
        <div className="p-8 border-b border-border">
          <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-4">Postcode Lookup</h3>
          <form onSubmit={handlePostcodeLookup} className="relative">
            <input type="text" placeholder="Enter postcode (e.g. DE1 3AA)" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-4 pr-12 py-3 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-charcoal text-white p-2 rounded-lg hover:bg-primary transition-colors">
              {isSearching ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Search className="w-4 h-4" />}
            </button>
          </form>
          <p className="text-[10px] text-muted-foreground mt-2 italic">Find your nearest EntireFM regional hub.</p>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {selectedOffice ? (
            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Nearest Office</span>
                <button onClick={() => setSelectedOffice(null)} className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-charcoal transition-colors ml-auto">Reset</button>
              </div>
              <h2 className="text-2xl font-bold text-charcoal mb-1">{selectedOffice.name}</h2>
              <p className="text-sm text-muted-foreground mb-6">{selectedOffice.city}, {selectedOffice.region}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-primary"><Clock className="w-4 h-4" /></div>
                  <div>
                    <div className="font-bold text-charcoal">Response Time</div>
                    <div className="text-xs text-muted-foreground">{selectedOffice.responseTime} (Routine)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-red-500"><Navigation className="w-4 h-4" /></div>
                  <div>
                    <div className="font-bold text-charcoal">Emergency</div>
                    <div className="text-xs text-muted-foreground">{selectedOffice.emergencyResponse} (24/7)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Local Contact</h4>
                <a href={`tel:${selectedOffice.phone}`} className="flex items-center gap-3 text-sm font-semibold text-charcoal hover:text-primary transition-colors"><Phone className="w-3.5 h-3.5" /> {selectedOffice.phone}</a>
                <a href={`mailto:${selectedOffice.contactEmail}`} className="flex items-center gap-3 text-sm font-semibold text-charcoal hover:text-primary transition-colors"><Mail className="w-3.5 h-3.5" /> {selectedOffice.contactEmail}</a>
              </div>

              <div className="mb-8 p-4 bg-muted rounded-xl">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Service Areas</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedOffice.coverageAreas.map(area => (
                    <span key={area} className="text-[10px] bg-white px-2 py-0.5 rounded border border-border text-muted-foreground">{area}</span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg">
                Book a Site Audit <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6 text-muted-foreground/30">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-charcoal mb-2">Ready to Locate</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Enter your postcode or use the map to find your nearest regional office and view local service capabilities.</p>
              
              <div className="mt-12 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Quick Links</p>
                {regionalOffices.map(office => (
                  <button key={office.id} onClick={() => { setSelectedOffice(office); setMapCenter([office.lat, office.lng]); setMapZoom(10); }} className="w-full text-left p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-muted transition-all flex items-center justify-between group">
                    <span className="text-sm font-semibold text-charcoal group-hover:text-primary transition-colors">{office.name}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-muted z-0">
        <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} className="h-full w-full" style={{ background: "#f8f9fa" }}>
          <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" className="map-tiles-custom" />
          <MapUpdater center={mapCenter} zoom={mapZoom} />
          
          {regionalOffices.map((office) => (
            <div key={office.id}>
              <Marker position={[office.lat, office.lng]} icon={officeIcon} eventHandlers={{ click: () => setSelectedOffice(office) }}>
                <Popup>
                  <div className="p-1">
                    <div className="font-bold text-charcoal leading-tight mb-1">{office.name}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">{office.city}</div>
                    <button onClick={() => setSelectedOffice(office)} className="text-[10px] font-bold text-primary flex items-center gap-1 hover:underline">View Details <ExternalLink className="w-2.5 h-2.5" /></button>
                  </div>
                </Popup>
              </Marker>
              <Circle center={[office.lat, office.lng]} radius={office.coverageRadius * 1000} pathOptions={{ color: "#d4af37", fillColor: "#d4af37", fillOpacity: 0.05, weight: 1 }} />
            </div>
          ))}

          {/* User Marker if searched */}
          {search && isSearching === false && (
            <Marker position={mapCenter} icon={defaultIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          )}
        </MapContainer>

        <style jsx global>{`
          .map-tiles-custom {
            filter: grayscale(1) contrast(1.1) brightness(0.9);
          }
          .leaflet-container {
            z-index: 0 !important;
          }
          .custom-office-icon {
            background: none !important;
            border: none !important;
          }
        `}</style>
      </div>
    </div>
  );
}
