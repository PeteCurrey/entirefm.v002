import { academyCourses } from "@/lib/academy";
import { Metadata } from "next";
import Link from "next/link";
import { Clock, BookOpen, Award, ArrowRight, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "EntireFM Academy — Free FM Courses & Certificates",
  description: "Free short courses for facilities managers and building operators — PPM, fire safety, compliance, multi-site FM, and more. Learn from FM professionals. Earn a certificate.",
  alternates: { canonical: "https://www.entirefm.com/academy" },
};

const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-red-100 text-red-700",
};

const CATEGORY_COLORS: Record<string, string> = {
  "PPM & Maintenance": "bg-blue-100 text-blue-700",
  Compliance: "bg-red-100 text-red-700",
  Strategy: "bg-purple-100 text-purple-700",
  Technology: "bg-cyan-100 text-cyan-700",
};

export default function AcademyPage() {
  const total = { courses: academyCourses.length, lessons: academyCourses.reduce((s, c) => s + c.lessonCount, 0) };

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "EntireFM Academy",
    url: "https://www.entirefm.com/academy",
    description: "Free FM education and professional development courses for facilities managers across the UK.",
    offers: academyCourses.map((c) => ({
      "@type": "Course",
      name: c.title,
      description: c.description,
      url: `https://www.entirefm.com/academy/${c.slug}`,
      provider: { "@type": "Organization", name: "EntireFM" },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 border border-primary/30 px-4 py-1.5 rounded-full">
            Free FM Education
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">EntireFM Academy</h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Free short courses for facilities managers, property owners, and building operators — built by FM professionals, not academics. Learn at your own pace. Earn a certificate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: BookOpen, label: `${total.courses} free courses` },
              { icon: Award, label: "Certificates included" },
              { icon: Zap, label: "No signup to start" },
              { icon: Star, label: "Built by FM professionals" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon className="w-4 h-4 text-primary" /><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 max-w-3xl py-8 grid grid-cols-3 gap-6 text-center">
          {[
            { n: `${total.courses}`, label: "Courses" },
            { n: `${total.lessons}`, label: "Lessons" },
            { n: "0", label: "Cost" },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="text-4xl font-bold text-white mb-1">{n}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses grid */}
      <section className="container mx-auto px-6 max-w-7xl py-20">
        <h2 className="text-3xl font-light text-charcoal mb-10 text-center">All Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academyCourses.map((course) => (
            <Link href={`/academy/${course.slug}`} key={course.id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group relative">
              {/* Card header */}
              <div className="bg-charcoal p-6 relative">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${CATEGORY_COLORS[course.category] ?? "bg-gray-100 text-gray-700"}`}>{course.category}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${LEVEL_COLORS[course.level]}`}>{course.level}</span>
                  {course.popular && <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-charcoal px-2 py-0.5 rounded">Popular</span>}
                  {course.new && <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-400 text-white px-2 py-0.5 rounded">New</span>}
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                <p className="text-sm text-gray-400 font-light">{course.subtitle}</p>
                <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.lessonCount} lessons</span>
                  <span className="flex items-center gap-1"><Award className="w-3 h-3" />Certificate</span>
                </div>
              </div>
              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">What you'll learn</p>
                  <ul className="space-y-1">
                    {course.outcomes.slice(0, 2).map((o, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0">✓</span>{o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">For</p>
                  <div className="flex flex-wrap gap-1">
                    {course.audience.slice(0, 2).map((a, i) => (
                      <span key={i} className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground">{a}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors w-full group-hover:shadow-md">
                  Start Course <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal py-20 px-6 text-center">
        <h2 className="text-3xl font-light text-white mb-4">Ready to Apply What You've Learned?</h2>
        <p className="text-gray-300 font-light max-w-xl mx-auto mb-8">EntireFM delivers every service covered in these courses — from PPM programmes and compliance management to multi-site TFM contracts.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors shadow-lg">
          Talk to EntireFM <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
