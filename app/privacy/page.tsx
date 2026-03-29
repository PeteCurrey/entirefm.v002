"use client";

import React from "react";
import { Shield, Clock, Lock, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-32 pb-20 font-inter">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
            <Shield className="w-3 h-3" />
            Compliance & Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            How we collect, use, and protect your data at EntireFM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Lock, title: "Data Protection", desc: "Your data is encrypted and stored securely on enterprise-grade servers." },
            { icon: Eye, title: "Transparency", desc: "We are clear about what we collect and how it benefits your FM experience." },
            { icon: Clock, title: "Retention", desc: "We only keep your information for as long as necessary to provide our services." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-12 text-gray-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              EntireFM ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how your personal information is collected, used, and disclosed by EntireFM. This Privacy Policy 
              applies to our website, and its associated subdomains.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection</h2>
            <p>
              We collect information from you when you visit our service, register, place an order, subscribe to 
              our newsletter, respond to a survey or fill out a form. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Contact Information (Name, Email, Professional Title)</li>
              <li>Facility Data (Site locations, asset counts for quotes)</li>
              <li>Usage Data (How you interact with our FM tools)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
            <p>
              Any of the information we collect from you may be used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Personalize your experience with our FM dashboard</li>
              <li>Improve our website and service delivery</li>
              <li>Process transactions and request maintenance services</li>
              <li>Send periodic emails regarding your site compliance</li>
            </ul>
          </section>

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
