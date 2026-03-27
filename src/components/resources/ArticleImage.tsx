import React from "react";

interface ArticleImageProps {
  caption: string;
  alt: string;
  icon: React.ReactNode;
}

export function ArticleImage({ caption, alt, icon }: ArticleImageProps) {
  return (
    <figure className="w-full my-12" aria-label={alt}>
      <div className="w-full aspect-video bg-gradient-to-br from-[#1a2e4a] to-[#0f1b2d] rounded-2xl flex flex-col items-center justify-center p-8 text-center border border-[#1a2e4a]/10 shadow-lg relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="w-24 h-24 mb-6 text-white/90 drop-shadow-md group-hover:scale-105 transition-transform duration-500">
          {icon}
        </div>
      </div>
      <figcaption className="text-center text-sm text-gray-500 font-medium italic mt-4 max-w-2xl mx-auto leading-relaxed px-4">
        {caption}
      </figcaption>
    </figure>
  );
}
