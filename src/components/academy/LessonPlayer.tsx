"use client";

import { useState } from "react";
import { type Lesson } from "@/lib/academy";
import { Play, CheckCircle2, FileText, ChevronLeft, ArrowRight, Video, Sparkles } from "lucide-react";

interface Props {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
  onClose: () => void;
}

export default function LessonPlayer({ lesson, onComplete, isCompleted, onClose }: Props) {
  const [tab, setTab] = useState<"video" | "transcript">("video");

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={onClose} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-charcoal transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Lessons
        </button>
        {isCompleted ? (
          <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4" /> Lesson Completed
          </div>
        ) : (
          <button onClick={onComplete} className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
            Mark as Finished
          </button>
        )}
      </div>

      <div>
        <h2 className="text-3xl font-light text-charcoal mb-2">{lesson.title}</h2>
        <p className="text-muted-foreground font-light text-sm">{lesson.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button onClick={() => setTab("video")} className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${tab === "video" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-charcoal"}`}>
          Video Lesson
        </button>
        <button onClick={() => setTab("transcript")} className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all border-b-2 ${tab === "transcript" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-charcoal"}`}>
          Full Transcript
        </button>
      </div>

      {tab === "video" ? (
        <div className="space-y-8">
          {/* Video Placeholder */}
          <div className="aspect-video bg-charcoal rounded-3xl relative overflow-hidden flex items-center justify-center p-12 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            
            {/* Branded Holding Frame */}
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform duration-500">
                <Play className="w-8 h-8 text-primary fill-current" />
              </div>
              <div className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">EntireFM Academy</div>
              <div className="text-white text-2xl font-light max-w-sm mb-8">{lesson.title}</div>
              <p className="text-primary-foreground/40 text-xs font-light max-w-xs italic">Video rendering in progress. Production quality learning delivered instantly.</p>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          </div>

          {/* Key Points */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Key Takeaways
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {lesson.keyPoints.map((point, i) => (
                <div key={i} className="bg-white border border-border p-4 rounded-xl flex gap-3 shadow-sm hover:border-primary/20 transition-all">
                  <div className="w-6 h-6 rounded bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px] shrink-0">{i+1}</div>
                  <p className="text-sm text-charcoal/80 leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-border p-10 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4"><FileText className="w-12 h-12 text-muted/20" /></div>
          <div className="max-w-none prose prose-slate prose-sm text-muted-foreground font-light leading-relaxed whitespace-pre-wrap">
            {lesson.transcript}
          </div>
          <div className="mt-12 pt-8 border-t border-border flex justify-center">
            <button onClick={onComplete} className="bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-primary/90 transition-all">
              Complete Lesson <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
