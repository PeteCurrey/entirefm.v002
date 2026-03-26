"use client";

import { useState, useMemo } from "react";
import { type Course, type Lesson } from "@/lib/academy";
import LessonPlayer from "./LessonPlayer";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { BookOpen, Clock, Award, CheckCircle2, ArrowRight, Play, Lock, FileText, Share2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import CertificateModal from "./CertificateModal";

interface Props {
  course: Course;
  related: Course[];
}

export default function AcademyCourseClient({ course, related }: Props) {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [showCertModal, setShowCertModal] = useState(false);

  const activeLesson = useMemo(() => 
    course.lessons.find(l => l.id === activeLessonId) || null
  , [course.lessons, activeLessonId]);

  const progress = Math.round((completedLessonIds.length / course.lessons.length) * 100);
  const isFinished = completedLessonIds.length === course.lessons.length;

  const handleComplete = (lessonId: string) => {
    if (!completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds(prev => [...prev, lessonId]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-charcoal pt-32 pb-12 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Academy", href: "/academy" }, { label: course.title }]} className="mb-8" />
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-2 py-0.5 rounded">{course.category}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 text-gray-400 px-2 py-0.5 rounded border border-white/10">{course.level}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-4">{course.title}</h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-6">{course.subtitle}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {course.duration}</div>
                <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> {course.lessonCount} Lessons</div>
                <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Certificate of Completion</div>
              </div>
            </div>
            <div className="w-full lg:w-80 shrink-0">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Progress</span>
                  <span className="text-xs font-bold text-primary">{progress}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                {isFinished ? (
                  <button onClick={() => setShowCertModal(true)} className="w-full bg-amber-400 text-charcoal py-4 rounded font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-400/20">
                    <Award className="w-4 h-4" /> Claim Certificate
                  </button>
                ) : (
                  <button onClick={() => setActiveLessonId(course.lessons[0].id)} className="w-full bg-primary text-white py-4 rounded font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                    {activeLessonId ? "Resume Learning" : "Start Course"} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Lessons List or Player */}
          <div className="lg:col-span-8">
            {activeLesson ? (
              <LessonPlayer lesson={activeLesson} onComplete={() => handleComplete(activeLesson.id)} isCompleted={completedLessonIds.includes(activeLesson.id)} onClose={() => setActiveLessonId(null)} />
            ) : (
              <div className="space-y-12 animate-in fade-in duration-500">
                <div>
                  <h3 className="text-2xl font-light text-charcoal mb-6">Course Lessons</h3>
                  <div className="space-y-4">
                    {course.lessons.map((lesson, idx) => (
                      <button key={lesson.id} onClick={() => setActiveLessonId(lesson.id)} className="w-full flex items-center gap-6 p-6 rounded-2xl border border-border bg-white hover:border-primary/30 transition-all text-left relative group">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-charcoal font-bold shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {completedLessonIds.includes(lesson.id) ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-charcoal mb-1 truncate">{lesson.title}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-1">{lesson.description}</p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest shrink-0">
                          <span className="hidden sm:flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.duration}</span>
                          <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                            <Play className="w-4 h-4 fill-current" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-charcoal mb-6">Learning Outcomes</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {course.outcomes.map((o, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-muted rounded-xl">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm text-charcoal/80 leading-relaxed font-light">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal mb-6 border-b border-border pb-2">Course Overview</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8">
                {course.description}
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Target Audience</p>
                  <div className="flex flex-wrap gap-2">
                    {course.audience.map(a => (
                      <span key={a} className="text-[10px] px-2 py-1 bg-muted rounded text-charcoal font-medium">{a}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Related Service</p>
                  <Link href={course.relatedService} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary transition-all group">
                    <div className="p-2 bg-primary/10 rounded group-hover:bg-primary transition-colors"><ShieldCheck className="w-5 h-5 text-primary group-hover:text-white" /></div>
                    <span className="text-xs font-bold text-charcoal">View Related Service</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Courses */}
            {related.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-charcoal">Continue Learning</h3>
                {related.map(r => (
                  <Link key={r.id} href={`/academy/${r.slug}`} className="block group">
                    <div className="bg-white border border-border p-5 rounded-xl hover:border-primary/30 transition-all shadow-sm group-hover:shadow-md">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-primary mb-2 block">{r.category}</span>
                      <h4 className="text-sm font-bold text-charcoal mb-1 leading-tight group-hover:text-primary transition-colors">{r.title}</h4>
                      <p className="text-[11px] text-muted-foreground line-clamp-1">{r.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {showCertModal && (
        <CertificateModal course={course} onClose={() => setShowCertModal(false)} />
      )}
    </div>
  );
}
