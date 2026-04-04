'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./_CAFMLiveMapContent'), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[400px] md:min-h-[600px] bg-slate-900 animate-pulse rounded-xl border border-slate-800"></div>
});

export default function CAFMLiveMap() {
  return <MapComponent />;
}
