"use client";

import { useState } from "react";
import { type Course } from "@/lib/academy";
import { Award, Download, Printer, X, CheckCircle2, Mail, ExternalLink } from "lucide-react";

interface Props {
  course: Course;
  onClose: () => void;
}

export default function CertificateModal({ course, onClose }: Props) {
  const [state, setState] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("success");
    // CRM would log here
    console.log("[Academy] Claiming Certificate", { ...formData, course: course.title });
  };

  const downloadCert = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/academy-certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          courseSlug: course.slug,
          courseTitle: course.title,
          completionDate: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        const html = await res.text();
        const win = window.open("", "_blank");
        if (win) {
          win.document.write(html);
          win.document.close();
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-6 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative shadow-2xl overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-amber-400 to-primary" />
        
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-charcoal transition-colors">
          <X className="w-5 h-5" />
        </button>

        {state === "form" ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-100">
              <Award className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-2">Claim Your Certificate</h2>
            <p className="text-sm text-muted-foreground font-light mb-8">
              Congratulations on completing <span className="font-semibold text-charcoal">{course.title}</span>. Enter your name as you'd like it to appear on your certificate.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input required type="text" placeholder="Full name (for certificate) *" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
              </div>
              <div>
                <input required type="email" placeholder="Email address *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed italic px-4">
                By claiming your certificate, you agree to our privacy policy. Your certificate will be generated instantly for download.
              </p>
              <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-all shadow-lg active:scale-[0.98]">
                Generate Certificate →
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-2">Well Done, {formData.name.split(" ")[0]}!</h2>
            <p className="text-sm text-muted-foreground font-light mb-8">
              Your professional certificate is ready. You can download it as a print-ready PDF or share it directly to LinkedIn.
            </p>
            <div className="space-y-3">
              <button onClick={downloadCert} disabled={isGenerating} className="w-full bg-charcoal text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-all disabled:opacity-50">
                <Download className="w-4 h-4" /> {isGenerating ? "Generating..." : "Download Certificate (PDF)"}
              </button>
              <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.entirefm.com/academy")}`)} className="w-full border border-border text-charcoal py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-muted transition-all">
                Share on LinkedIn <ExternalLink className="w-4 h-4" />
              </button>
            </div>
            <button onClick={onClose} className="mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-charcoal transition-colors underline underline-offset-4">
              Return to course
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
