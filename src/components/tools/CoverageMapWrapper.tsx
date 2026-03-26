"use client";
import dynamic from "next/dynamic";

const CoverageMapClient = dynamic(() => import("./CoverageMapClient"), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-muted animate-pulse flex items-center justify-center font-bold text-muted-foreground uppercase tracking-widest text-xs">Loading Interactive Map...</div>
});

export default function CoverageMapWrapper() {
  return <CoverageMapClient />;
}
