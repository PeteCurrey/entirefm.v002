import { episodes, getEpisodeBySlug, getRelatedEpisodes } from "@/lib/buildingWalk";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import VideoPlayer from "@/components/tools/VideoPlayer";
import KeyFindings from "@/components/tools/KeyFindings";
import { Clock, Building2, User, Calendar, ShieldCheck, Mail, ArrowRight, ChevronRight, FileText, HelpCircle, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return {};

  return {
    title: `${episode.title} | The Building Walk | EntireFM`,
    description: episode.description.slice(0, 155),
    alternates: { canonical: `https://www.entirefm.com/building-walk/${slug}` },
  };
}

export default async function BuildingWalkEpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  const related = getRelatedEpisodes(episode.slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-charcoal pt-32 pb-12 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Building Walk", href: "/building-walk" }, { label: `Episode ${episode.episodeNumber}` }]} className="mb-8" />
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-2 py-0.5 rounded shadow-sm">Episode {episode.episodeNumber}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/10">{episode.buildingType}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight">{episode.title}</h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed">{episode.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-4 lg:mt-0 text-gray-500 whitespace-nowrap">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><User className="w-4 h-4 text-primary" /> {episode.host}</div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Clock className="w-4 h-4 text-primary" /> {episode.duration}</div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Calendar className="w-4 h-4 text-primary" /> {episode.publishDate}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <VideoPlayer youtubeId={episode.youtubeId} title={episode.title} episodeNumber={episode.episodeNumber} />
          
          <div className="grid lg:grid-cols-12 gap-16 mt-16">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 space-y-16">
              {/* Key Findings */}
              <section id="findings">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-light text-charcoal flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary" /> What We Found
                  </h2>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{episode.keyFindings.length} Observations</span>
                </div>
                <KeyFindings findings={episode.keyFindings} />
              </section>

              {/* Transcript */}
              <section id="transcript">
                <h2 className="text-2xl font-light text-charcoal mb-8 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" /> Episode Transcript
                </h2>
                <div className="bg-white border border-border p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4"><FileText className="w-16 h-16 text-muted/10 shrink-0" /></div>
                  <article className="prose prose-slate prose-lg max-w-none text-muted-foreground font-light leading-relaxed whitespace-pre-wrap selection:bg-primary/20">
                    {episode.transcript}
                  </article>
                  <div className="mt-12 pt-8 border-t border-border flex justify-center text-center">
                    <div className="max-w-md">
                      <p className="text-sm italic text-muted-foreground mb-6">"Is your building making any of these mistakes? Our site surveys identify these issues before they become enforcement notices."</p>
                      <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg inline-block">
                        Book a Free Site Survey
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Discussion */}
              <section id="discuss" className="border-t border-border pt-16">
                <div className="bg-muted p-10 rounded-3xl text-center">
                  <h3 className="text-xl font-bold text-charcoal mb-2">Have a question about this episode?</h3>
                  <p className="text-sm font-light text-muted-foreground mb-8">Ask our FM team about compliance, best practices, or building-specific issues.</p>
                  <Link href="/contact?subject=Building%20Walk%20Question" className="bg-charcoal text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-charcoal/90 transition-all shadow-md inline-block">
                    Ask a Question <HelpCircle className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </section>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Episode Info Card */}
              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm sticky top-24">
                <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6 border-b border-border pb-2">Episode Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Host</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary font-bold"><User className="w-5 h-5" /></div>
                      <div>
                        <div className="text-sm font-bold text-charcoal leading-none mb-1">{episode.host}</div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{episode.hostTitle}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Related Resources</h4>
                    <div className="space-y-2">
                      {episode.relatedResources.map((res, i) => (
                        <Link key={i} href={res.url} className="flex items-center justify-between p-3 rounded-xl border border-border hover:border-primary/30 transition-all group bg-muted/50">
                          <span className="text-xs font-bold text-charcoal truncate pr-2">{res.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Next Episodes</h4>
                    <div className="space-y-4">
                      {related.map(r => (
                        <Link key={r.id} href={`/building-walk/${r.slug}`} className="block group">
                          <div className="flex gap-4">
                            <div className="w-20 aspect-video bg-muted rounded-lg overflow-hidden shrink-0 relative">
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"><Play className="w-3 h-3 fill-current" /></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">Episode {r.episodeNumber}</div>
                              <h4 className="text-xs font-bold text-charcoal group-hover:text-primary transition-colors leading-tight line-clamp-2">{r.title}</h4>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="bg-charcoal text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/40" />
                <h3 className="text-lg font-bold mb-3 relative z-10">Managed Facilities Management</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 relative z-10">
                  Stop worrying about compliance gaps. Our team manages thousands of building assets with fixed-cost contracts and guaranteed service levels.
                </p>
                <Link href="/services" className="text-xs font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 hover:translate-x-2 transition-transform relative z-10">
                  See Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
