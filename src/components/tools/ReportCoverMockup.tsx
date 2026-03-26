"use client";

export default function ReportCoverMockup() {
  return (
    <div className="relative group perspective-1000 w-[280px] h-[380px] mx-auto md:mx-0">
      <div className="relative w-full h-full preserve-3d transition-transform duration-700 group-hover:rotate-y-[-25deg] shadow-2xl rounded-sm overflow-hidden border-l-8 border-primary">
        {/* Cover Image Placeholder */}
        <div className="absolute inset-0 bg-charcoal flex flex-col p-8 text-left border-l border-white/10">
          <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center mb-8 shrink-0">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4">Internal Research</div>
          <h2 className="text-white text-3xl font-light leading-tight mb-4">UK FM Market Report <span className="text-primary font-bold">2025</span></h2>
          <p className="text-gray-500 text-xs font-light leading-relaxed mb-auto">
            The definitive independent reference for the UK facility management industry. Sector-by-sector analysis, pricing benchmarks, and efficiency strategies.
          </p>
          <div className="pt-6 border-t border-white/5 flex justify-between items-end">
            <div>
              <div className="text-white font-bold text-sm">EntireFM</div>
              <div className="text-[8px] text-gray-600 uppercase tracking-widest leading-none">Intelligence Unit</div>
            </div>
            <div className="text-[8px] text-gray-600 font-bold uppercase tracking-widest border border-gray-800 px-1 py-0.5 rounded">64 Pages</div>
          </div>
        </div>
        
        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>

      {/* Pages Shadow */}
      <div className="absolute top-0 right-0 w-4 h-full bg-white border-y border-r border-gray-200 transform translate-x-2 -z-10 rounded-sm shadow-md" style={{ transform: 'translateX(8px) rotateY(45deg)' }}></div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .rotate-y-[-25deg] { transform: rotateY(-25deg); }
      `}</style>
    </div>
  );
}
