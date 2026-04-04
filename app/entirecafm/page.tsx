import type { Metadata } from 'next';
import Link from 'next/link';
import { Eye, ShieldCheck, Brain, Zap, FileCheck, TrendingUp, Megaphone, Bot } from 'lucide-react';

import CAFMDashboardMockup from '@/components/CAFMDashboardMockup';
import CAFMLiveMap from '@/components/CAFMLiveMap';
import CAFMTabSection from '@/components/CAFMTabSection';
import CAFMMobileMockup from '@/components/CAFMMobileMockup';
import CAFMComparisonTable from '@/components/CAFMComparisonTable';

export const metadata: Metadata = {
  title: 'EntireCAFM — Our Proprietary FM Technology Platform',
  description: 'EntireFM operates EntireCAFM — a bespoke AI-powered facilities management platform built in-house. Real-time engineer tracking, automated compliance, predictive maintenance, and live client dashboards. Technology that sets us apart.',
  alternates: {
    canonical: 'https://www.entirefm.com/entirecafm',
  },
};

export default function EntireCAFMPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "EntireCAFM",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "description": "AI-powered facilities management platform built in-house by EntireFM",
      "url": "https://tafm.co.uk",
      "creator": {
        "@type": "Organization",
        "name": "EntireFM"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "EntireCAFM — Our Proprietary FM Technology Platform",
      "description": "EntireFM operates EntireCAFM — a bespoke AI-powered facilities management platform built in-house.",
      "url": "https://www.entirefm.com/entirecafm"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.entirefm.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "EntireCAFM",
          "item": "https://www.entirefm.com/entirecafm"
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen bg-white">
        
        {/* SECTION 1 — HERO */}
        <section className="relative w-full min-h-[85vh] bg-[#0B1120] text-white flex items-center overflow-hidden">
          {/* GridBg pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Left Column */}
              <div className="space-y-8 max-w-2xl">
                <div className="inline-block border border-slate-700 bg-slate-800/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                  <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">PROPRIETARY TECHNOLOGY</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold font-sans text-white leading-tight">
                  We Built Our Own<br />
                  <span className="text-[#dbaa4c]">CAFM Platform.</span>
                </h1>
                
                <p className="text-xl text-[#94A3B8] font-sans font-normal leading-relaxed">
                  Most FM companies buy off-the-shelf software and work around its limitations. 
                  We built EntireCAFM from the ground up — an AI-powered facilities management 
                  platform designed exclusively around how we deliver FM. The result is a level 
                  of operational intelligence, client transparency, and compliance control that 
                  no standard CAFM product can match.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 border-y border-slate-800 py-6">
                  <div>
                    <div className="text-2xl font-bold text-[#dbaa4c]">25+</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Platform modules built</div>
                  </div>
                  <div className="w-px bg-slate-800 hidden sm:block"></div>
                  <div>
                    <div className="text-2xl font-bold text-[#dbaa4c]">AI-Powered</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Director, Accounts & Mktg</div>
                  </div>
                  <div className="w-px bg-slate-800 hidden sm:block"></div>
                  <div>
                    <div className="text-2xl font-bold text-[#dbaa4c]">Real-Time</div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Live tracking & intelligence</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#platform-demo" className="px-8 py-3.5 bg-[#dbaa4c] hover:bg-[#c99a3c] text-[#0f172a] font-bold rounded shadow-lg transition-all duration-200 uppercase tracking-wide text-sm inline-block">
                    See EntireCAFM in Action
                  </a>
                  <a href="https://tafm.co.uk" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border-2 border-[#dbaa4c] text-[#dbaa4c] hover:bg-[#dbaa4c]/10 font-bold rounded transition-all duration-200 uppercase tracking-wide text-sm">
                    Visit EntireCAFM.com &rarr;
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full flex justify-center lg:justify-end">
                <CAFMDashboardMockup />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE INVESTMENT STATEMENT */}
        <section className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="w-24 h-1 bg-[#dbaa4c] mx-auto mb-10"></div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] font-sans mb-12">
              Why We Invested in Building Our Own Platform
            </h2>
            
            <div className="space-y-8 text-lg text-[#333333] font-sans text-justify leading-[1.9]">
              <p>
                The UK FM market is full of companies using the same tools. Joblogic. SimPro. ServiceM8. 
                They are solid products — built for generic FM operations. But EntireFM has never operated 
                generically. We manage complex, multi-site estates for demanding clients across residential, 
                commercial, retail, hotel, and industrial sectors. Generic tools create generic outcomes. 
                We wanted something better.
              </p>
              <p>
                EntireCAFM is the result of a significant in-house technology investment — a purpose-built, 
                AI-powered CAFM platform designed around our exact service delivery model. Every module, 
                every workflow, every data point has been engineered around the way EntireFM actually operates. 
                It is not a product we bought and configured. It is a platform we built.
              </p>
              <p>
                For our clients, this means something concrete: real-time visibility into their estate, 
                automated compliance tracking, live engineer location and job status, and AI-generated 
                operational intelligence that most FM companies — including those ten times our size — 
                simply cannot offer. EntireCAFM is not a back-office tool. It is the operational 
                backbone of everything we deliver.
              </p>
            </div>
            
            <div className="w-24 h-1 bg-[#dbaa4c] mx-auto mt-12"></div>
          </div>
        </section>

        {/* SECTION 3 — WHAT ENTRECAFM DOES */}
        <section id="platform-demo" className="py-24 bg-[#f8f9fa] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] font-sans mb-4">
                A Platform Built for Real FM Operations
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                25+ integrated modules covering every aspect of FM delivery — 
                from the first job request to the final invoice.
              </p>
            </div>
            
            <CAFMTabSection />
          </div>
        </section>

        {/* SECTION 4 — LIVE MAP DEMONSTRATION */}
        <section className="py-24 bg-[#0B1120] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left panel */}
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-white font-sans leading-tight">
                  Your Entire Estate.<br />
                  <span className="text-[#dbaa4c]">Live. In One View.</span>
                </h2>
                
                <p className="text-[#94A3B8] text-lg leading-relaxed">
                  EntireCAFM&apos;s operations map shows every engineer location, every active 
                  job site, and every site in your portfolio — updating in real time. 
                  When a client calls to ask where their engineer is, the answer 
                  is already on screen.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Live engineer GPS — updated every 2 minutes from the mobile app",
                    "Active job markers — colour-coded by priority, clickable for instant detail",
                    "30-second polling with Supabase Realtime fallback",
                    "Coverage view across all client sites simultaneously"
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-[#dbaa4c] mt-2 mr-4 shrink-0"></div>
                      <span className="text-slate-300">{pt}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <a href="https://tafm.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 border-2 border-[#dbaa4c] text-[#dbaa4c] hover:bg-[#dbaa4c]/10 font-bold rounded transition-all duration-200 uppercase tracking-wide text-sm">
                    See the Full Platform &rarr;
                  </a>
                </div>
              </div>

              {/* Right panel */}
              <div className="lg:col-span-7">
                <CAFMLiveMap />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — THE NUMBERS */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] font-sans">
                Built for Serious FM Operations
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { n: '25+', lb: 'Platform modules — from job management to AI-powered intelligence' },
                { n: 'Real-Time', lb: 'Live data across all operations — engineer locations, job status, compliance scores' },
                { n: 'AI-Powered', lb: 'Director, Accounts, and Marketing dashboards delivering daily business intelligence' },
                { n: '100%', lb: 'Bespoke — built in-house for EntireFM\'s exact service delivery model, not adapted from off-the-shelf software' },
                { n: '5 Roles', lb: 'Role-based access — Admin, Operations, Engineer, Client, and Contractor each see exactly what they need' },
                { n: 'Zero', lb: 'Third-party dependency for core operations — EntireCAFM runs on infrastructure we own and control' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#1E293B] rounded-xl p-8 border-t-4 border-[#dbaa4c] shadow-lg transform transition-transform hover:-translate-y-1">
                  <div className="text-4xl lg:text-5xl font-bold text-[#dbaa4c] mb-4">{stat.n}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{stat.lb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHY THIS MATTERS FOR CLIENTS */}
        <section className="py-24 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] font-sans">
                What EntireCAFM Means for Your Estate
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Eye, title: 'Complete Visibility', desc: 'You should never have to call your FM provider to find out what\'s happening on your site. With EntireCAFM, every job, every engineer, every compliance status is visible to you — live, without asking.' },
                { icon: ShieldCheck, title: 'Compliance Without the Paperwork', desc: 'EntireCAFM automates your compliance calendar, tracks every statutory obligation, stores every certificate, and flags every overdue item — before it becomes your problem. You\'ll pass your next inspection without a last-minute scramble.' },
                { icon: Brain, title: 'FM Intelligence, Not Just Reporting', desc: 'Most FM reports tell you what happened. EntireCAFM\'s AI layer tells you what\'s happening right now — and what needs your attention before it becomes an issue. That\'s a different kind of FM relationship.' },
                { icon: Zap, title: 'Faster Response. Every Time.', desc: 'When an emergency is raised, EntireCAFM assigns it, notifies the engineer, tracks their route to site, and updates you — automatically. Your SLA clock is always visible. Nothing falls through the cracks.' },
                { icon: FileCheck, title: 'Every Certificate. Always Available.', desc: 'Fire alarm service certificates, EICR reports, Legionella monitoring logs — every compliance document is stored in EntireCAFM and available to you on demand. In an inspection, you have everything you need in under 60 seconds.' },
                { icon: TrendingUp, title: 'An FM Provider That Invested in Getting Better', desc: 'Building a proprietary CAFM platform from scratch is not a small undertaking. It is a statement of intent — that EntireFM is committed to operating at a standard that generic FM contractors simply cannot match.' },
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border-t-[3px] border-[#0B1120] shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <card.icon className="w-10 h-10 text-[#dbaa4c] mb-6" />
                  <h3 className="text-xl font-bold text-[#0B1120] mb-4 font-sans leading-tight">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — AI CAPABILITIES SPOTLIGHT */}
        <section className="py-24 bg-[#0B1120] border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="text-[#dbaa4c] font-bold tracking-widest text-sm uppercase mb-4 block">AI OPERATIONS</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-sans mb-8">
                The Only FM Company with Its Own AI Director, Accounts, and Marketing Intelligence Platform
              </h2>
              <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto leading-relaxed">
                EntireCAFM&apos;s AI operations layer goes beyond standard reporting. Built on Claude — 
                the same AI used by leading technology companies worldwide — EntireCAFM&apos;s AI modules 
                analyse live operational data every single day and deliver specific, actionable 
                intelligence. Not charts. Not graphs. Actual answers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Brain, title: 'AI Director Dashboard', desc: 'Daily business briefing specific to real operational data — risks, opportunities, and the single most important action today.' },
                { icon: TrendingUp, title: 'AI Accounts Intelligence', desc: 'Cash flow analysis, overdue risk identification, and collection priorities — generated fresh from live invoice data.' },
                { icon: Megaphone, title: 'AI Marketing Dashboard', desc: 'Growth analysis, upsell opportunities, and client retention risks — identified automatically from operational patterns.' },
                { icon: Bot, title: 'AI Assistant', desc: 'Ask anything about the operation — job status, compliance scores, engineer workload — and get specific answers from live data.' },
              ].map((feat, idx) => (
                <div key={idx} className="bg-[#1E293B] rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-colors">
                  <feat.icon className="w-8 h-8 text-[#E91E8C] mb-5" />
                  <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — THE ENGINEER APP */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1 space-y-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-[#0B1120] font-sans leading-tight">
                  Every Engineer.<br />
                  Every Site.<br />
                  <span className="text-[#dbaa4c]">Always Connected.</span>
                </h2>
                
                <p className="text-[#333333] text-lg leading-relaxed">
                  EntireFM engineers work through the EntireCAFM mobile app — a progressive 
                  web app that runs on any smartphone without an app store download. 
                  Job assignments, status updates, photo capture, and asset QR scanning — 
                  all handled on site, in real time.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Job details and site address on screen before they leave",
                    "One-tap status updates — On Route, On Site, Completed",
                    "Photo and document capture directly from the job",
                    "Asset QR scanning — instant service history on any asset",
                    "Offline mode — works without signal, syncs on reconnect"
                  ].map((pt, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#dbaa4c] font-bold mr-3 mt-1">&rarr;</span>
                      <span className="text-slate-700 font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-slate-500 italic border-l-4 border-slate-200 pl-4 py-1 mt-8">
                  "All engineer activity is logged automatically — creating a complete audit trail for every visit."
                </p>
              </div>

              {/* Right Mobile Mockup */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <CAFMMobileMockup />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — COMPARISON */}
        <section className="py-24 bg-[#f8f9fa] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1120] font-sans mb-4">
                EntireFM vs Standard FM Providers
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                This is what a technology investment in FM actually looks like in practice.
              </p>
            </div>
            
            <CAFMComparisonTable />
          </div>
        </section>

        {/* SECTION 10 — CTA */}
        <section className="py-32 bg-[#0B1120] relative">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white font-sans mb-8 leading-tight">
              FM That's Powered by Technology.<br />
              Delivered by People.
            </h2>
            
            <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto leading-relaxed">
              EntireCAFM is the operational backbone of everything EntireFM delivers. 
              It is not a selling point. It is the reason our service standard is what it is. 
              If you want FM delivered at this level — talk to us.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#dbaa4c] hover:bg-[#c99a3c] text-[#0f172a] font-bold rounded shadow-lg transition-all duration-200 uppercase tracking-wide text-sm">
                Get an FM Proposal
              </Link>
              <a href="https://tafm.co.uk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 border-2 border-[#dbaa4c] text-[#dbaa4c] hover:bg-[#dbaa4c]/10 font-bold rounded transition-all duration-200 uppercase tracking-wide text-sm">
                Explore EntireCAFM.com &rarr;
              </a>
            </div>
            
            <p className="text-xs text-slate-500 italic max-w-lg mx-auto">
              EntireCAFM is also available as a standalone platform for FM companies. 
              Visit tafm.co.uk to learn more.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
