"use client";

import { Play } from "lucide-react";

interface Props {
  youtubeId: string | null;
  title: string;
  episodeNumber?: number;
}

export default function VideoPlayer({ youtubeId, title, episodeNumber }: Props) {
  if (youtubeId) {
    return (
      <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full bg-charcoal rounded-2xl overflow-hidden relative flex items-center justify-center p-12 group shadow-2xl border border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      
      {/* Branded Holding Frame */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform duration-500 shadow-xl backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center border border-primary/50">
            <Play className="w-8 h-8 text-primary fill-current" />
          </div>
        </div>
        <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mb-3">EntireFM Video Series</div>
        <h3 className="text-white text-3xl font-light max-w-md mb-8 leading-tight">
          {episodeNumber ? `Episode ${episodeNumber}` : "Upcoming Episode"}
        </h3>
        <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
          Filming in Progress
        </div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
      
      {/* Bottom info */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="text-white/20 font-bold text-4xl uppercase tracking-tighter select-none">EntireFM</div>
        <div className="bg-charcoal/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
