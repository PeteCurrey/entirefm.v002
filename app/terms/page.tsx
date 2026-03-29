"use client";

import React from "react";
import { FileText, Scale, Info, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-32 pb-20 font-inter">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <Scale className="w-3 h-3" />
            Legal Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Terms & Conditions</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Please read these terms carefully before using EntireFM's services.
          </p>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-12 text-gray-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our facilities management services, you agree to be bound by 
              these Terms and Conditions. If you do not agree with any part of these terms, you must not 
              access the site or utilize our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">2. Service Delivery</h2>
            <p>
              EntireFM provides technical facilities management, compliance audits, and maintenance solutions. 
              While we strive for 100% accuracy in our AI-driven tools (like the Compliance Checker), 
              automated results are for guidance only and should be verified by a qualified FM professional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">3. Intellectual Property</h2>
            <p>
              The content, design, and software used in the EntireFM portal are the exclusive property of 
              EntireFM. You may not reproduce, redistribute, or use our proprietary FM frameworks without 
              prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 italic">4. Limitation of Liability</h2>
            <p>
              In no event shall EntireFM, nor its directors, employees, or partners, be liable for any 
              indirect, incidental, or special damages results from your use of the service or any building 
              malfunctions occurring outside of defined PPM schedules.
            </p>
          </section>

          <div className="bg-white/5 border-l-4 border-primary p-8 mt-20 relative overflow-hidden">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2 italic">
              <Info className="w-5 h-5 text-primary" />
              Governing Law
            </h3>
            <p className="text-sm">
              These terms are governed by and construed in accordance with the laws of the United Kingdom, 
              and any disputes will be subject to the exclusive jurisdiction of the UK courts.
            </p>
          </div>

          <section className="pt-12 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500 italic">
              Last Updated: March 29, 2026. For questions, contact hello@entirefm.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
