import { Metadata } from "next";
import { episodes, getFeaturedEpisode } from "@/lib/buildingWalk";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import VideoPlayer from "@/components/tools/VideoPlayer";
import { Clock, Building2, User, Calendar, ArrowRight, Play, ChevronRight, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Building Walk — FM Video Series | EntireFM",
  description: "Watch EntireFM's Building Walk video series — FM professionals walk real buildings identifying compliance risks, maintenance issues, and FM best practice. New episodes monthly.",
  alternates: { canonical: "https://www.entirefm.com/building-walk" },
};

export default function BuildingWalkPage() {
  const featured = getFeaturedEpisode();
  const others = episodes.filter(e => e.id !== featured.id);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-charcoal overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Building Walk" }]} className="justify-center mb-8" />
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Video Series
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">The Building Walk</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            Our FM team walks real buildings — retail units, offices, hotels, warehouses, and residential blocks — and calls out exactly what trained eyes see. What inspectors look for.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/building-walk/${featured.slug}`} className="bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl">
              Watch Latest Episode <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#subscribe" className="bg-white/5 text-gray-400 border border-white/10 px-8 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Episode Section */}
      <section className="container mx-auto px-6 max-w-7xl -mt-12 relative z-20 mb-24">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col lg:flex-row min-h-[500px]">
          <div className="w-full lg:w-3/5">
            <VideoPlayer youtubeId={featured.youtubeId} title={featured.title} episodeNumber={featured.episodeNumber} />
          </div>
          <div className="w-full lg:w-2/5 p-10 flex flex-col justify-center bg-gradient-to-br from-white to-muted/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-charcoal text-white px-2 py-0.5 rounded shadow-sm">Featured Episode</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                <Clock className="w-3 h-3" /> {featured.duration}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-charcoal mb-4 leading-tight">{featured.title}</h2>
            <p className="text-muted-foreground font-light mb-8 leading-relaxed italic border-l-2 border-primary/20 pl-4">{featured.subtitle}</p>
            <div className="space-y-4 mb-10">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Key Observations:</h4>
              <ul className="space-y-2">
                {featured.keyFindings.slice(0, 2).map((f, i) => (
                  <li key={i} className="text-sm text-charcoal flex gap-2">
                    <span className="text-primary font-bold">•</span> {f.title}
                  </li>
                ))}
                <li className="text-[10px] font-bold text-primary uppercase tracking-widest mt-2">
                  <Link href={`/building-walk/${featured.slug}`} className="hover:underline">View all {featured.keyFindings.length} findings →</Link>
                </li>
              </ul>
            </div>
            <Link href={`/building-walk/${featured.slug}`} className="bg-charcoal text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-all shadow-lg active:scale-[0.98]">
              Watch Full Walkthrough <Play className="w-3 h-3 fill-current" />
            </Link>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-3xl font-light text-charcoal">All Episodes</h2>
          <div className="flex flex-wrap gap-2">
            {["All", "Retail", "Office", "Industrial", "Residential", "Hotel"].map(cat => (
              <button key={cat} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${cat === "All" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map(episode => (
            <Link key={episode.id} href={`/building-walk/${episode.slug}`} className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all shadow-sm hover:shadow-xl">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-charcoal/80 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border border-white/5">
                  Episode {episode.episodeNumber}
                </div>
                <div className="absolute bottom-3 right-3 bg-primary text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {episode.duration}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-2 block">{episode.buildingType}</span>
                <h3 className="text-lg font-bold text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">{episode.title}</h3>
                <p className="text-sm text-muted-foreground font-light line-clamp-2 mb-6 flex-1">{episode.description}</p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted-foreground flex items-center gap-1 uppercase tracking-widest">
                    <Calendar className="w-3 h-3" /> {episode.publishDate}
                  </span>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Watch <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Subscribe Strip */}
      <section id="subscribe" className="container mx-auto px-6 max-w-7xl">
        <div className="bg-charcoal rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32" />
          <h2 className="text-3xl md:text-4xl font-light mb-4">Never Miss an Episode</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            New episodes monthly. Subscribe and we'll notify you when a new Building Walk is published — straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input required type="email" placeholder="Email address" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-light text-sm" />
            <button type="submit" className="bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg active:scale-95">
              Subscribe
            </button>
          </form>
          <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-[0.2em]">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </div>
  );
}
