"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { partnerTypes } from "@/lib/partners";

export function PartnerApplicationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border-2 border-primary/20 p-12 rounded-2xl text-center flex flex-col items-center justify-center min-h-[500px] animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-light text-charcoal mb-4 tracking-tight">Application Received</h3>
        <p className="text-muted-foreground font-light max-w-md mx-auto mb-10">
          Thank you for applying to the EntireFM Partner Network. Our partnership team will review your application and be in touch within 48 hours to schedule an introductory call.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl border-t border-border pt-10">
          {[
            { s: 1, t: "Review" },
            { s: 2, t: "Intro Call" },
            { s: 3, t: "Agreement" },
            { s: 4, t: "Start" }
          ].map(step => (
            <div key={step.s} className="space-y-2 opacity-50 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[10px] font-bold">{step.s}</div>
              <span className="text-[9px] font-bold uppercase tracking-widest">{step.t}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border-2 border-border p-10 md:p-16 rounded-2xl shadow-sm">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Full Name *</label>
          <input required name="name" type="text" placeholder="e.g. James Smith" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Work Email *</label>
          <input required name="email" type="email" placeholder="e.g. james@company.com" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Company Name *</label>
          <input required name="company" type="text" placeholder="Your firm name" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Partner Type *</label>
          <select required name="partnerType" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
            <option value="">Select partner type...</option>
            {partnerTypes.map(t => (
              <option key={t.id} value={t.slug}>{t.title}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Phone Number *</label>
          <input required name="phone" type="tel" placeholder="e.g. 01234 567 890" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Client Volume</label>
          <select required name="clientVolume" className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
            <option value="">How many potential FM clients?</option>
            <option value="1-10">1 – 10</option>
            <option value="11-50">11 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="200+">200+</option>
          </select>
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1">Tell us about your clients *</label>
          <textarea required name="message" rows={4} placeholder="Briefly describe your client base and target sectors..." className="w-full bg-muted/30 border border-border rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
        </div>
        <div className="md:col-span-2">
          <Button disabled={status === "loading"} size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest shadow-xl shadow-primary/20 h-16">
            {status === "loading" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit Application"} <ArrowRight className="w-4 h-4" />
          </Button>
          {status === "error" && (
            <p className="text-center text-red-600 text-[10px] font-bold uppercase tracking-widest mt-4">Something went wrong. Please try again or contact us directly.</p>
          )}
        </div>
      </form>
    </div>
  );
}
