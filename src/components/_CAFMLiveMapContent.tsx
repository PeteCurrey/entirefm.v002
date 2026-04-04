'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leafet default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;

const MARKERS_DATA = [
  { id: 'eng1', type: 'engineer', status: 'available', name: 'Ryan', startLat: 51.54, startLng: 0.1, color: '#22c55e' }, // East London (Green)
  { id: 'eng2', type: 'engineer', status: 'on-job', name: 'Mia', startLat: 53.48, startLng: -2.24, color: '#f59e0b' }, // Manchester (Amber)
  { id: 'eng3', type: 'engineer', status: 'available', name: 'James', startLat: 52.48, startLng: -1.89, color: '#22c55e' }, // Birmingham (Green)
  { id: 'eng4', type: 'engineer', status: 'on-site', name: 'Sarah', startLat: 53.8, startLng: -1.54, color: '#e91e8c' }, // Leeds (Pink)
  { id: 'eng5', type: 'engineer', status: 'on-route', name: 'Tom', startLat: 53.38, startLng: -1.47, color: '#a855f7' }, // Sheffield (Purple)
  { id: 'job1', type: 'job', status: 'critical', name: 'CRITICAL PRIORITY', startLat: 53.4, startLng: -2.98, color: '#ef4444' }, // Liverpool (Red)
  { id: 'job2', type: 'job', status: 'high', name: 'HIGH PRIORITY', startLat: 52.95, startLng: -1.15, color: '#ef4444' }, // Nottingham (Red)
];

const createCustomIcon = (color: string, isJob: boolean) => {
  const html = isJob
    ? `<div style="background-color: ${color}; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px ${color}; animation: pulse 2s infinite;"></div>
       <style>@keyframes pulse { 0% {box-shadow: 0 0 0 0 rgba(239,68,68,0.7);} 70% {box-shadow: 0 0 0 10px rgba(239,68,68,0);} 100% {box-shadow: 0 0 0 0 rgba(239,68,68,0);} }</style>`
    : `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`;

  return L.divIcon({
    html,
    className: 'custom-leaflet-icon',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

export default function _CAFMLiveMapContent() {
  const [positions, setPositions] = useState(
    MARKERS_DATA.map(m => ({ id: m.id, lat: m.startLat, lng: m.startLng }))
  );

  useEffect(() => {
    // Simulate slight movement
    const interval = setInterval(() => {
      setPositions(prev => prev.map(p => {
        // Only move engineers slightly
        const markerInfo = MARKERS_DATA.find(m => m.id === p.id);
        if (markerInfo?.type === 'job') return p;

        const dLat = (Math.random() - 0.5) * 0.005;
        const dLng = (Math.random() - 0.5) * 0.005;
        return {
          ...p,
          lat: p.lat + dLat,
          lng: p.lng + dLng,
        };
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden border border-slate-800 shadow-2xl z-0">
      {/* Indicator overlay */}
      <div className="absolute top-4 left-4 z-[400] bg-[#1E293B]/90 backdrop-blur border border-slate-600 rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-white text-xs font-semibold tracking-wide">Live Demo — Simulated Data</span>
      </div>

      <MapContainer
        center={[53.2, -1.8]} // UK Center
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full bg-slate-900"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {positions.map(pos => {
          const info = MARKERS_DATA.find(m => m.id === pos.id)!;
          return (
            <Marker
              key={pos.id}
              position={[pos.lat, pos.lng]}
              icon={createCustomIcon(info.color, info.type === 'job')}
            >
              <Popup className="cafm-popup">
                <div className="min-w-[150px]">
                  <div className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-wide">
                    {info.type === 'engineer' ? 'Engineer Details' : 'Job Details'}
                  </div>
                  <div className="text-[#E91E8C] font-semibold mb-2">
                    {info.name}
                  </div>
                  <div className="text-xs text-slate-600 mb-1">
                    Status: <span className="font-medium px-1 rounded bg-slate-100 uppercase">{info.status}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {pos.lat.toFixed(4)}, {pos.lng.toFixed(4)}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      
      <style dangerouslySetInnerHTML={{__html: `
        .cafm-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        }
        .cafm-popup .leaflet-popup-tip-container {
          display: none;
        }
      `}} />
    </div>
  );
}
