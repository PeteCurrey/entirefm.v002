import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Building2, Zap, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Future of Facilities Management: Technology, ESG and TFM | EntireFM",
  description: "Explore how IoT, ESG reporting, and Total Facilities Management are reshaping the FM landscape in 2025 and beyond.",
  alternates: {
    canonical: "https://www.entirefm.com/fm-insights/future-of-fm",
  },
};

export default function FutureOfFMPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FM Insights", href: "/fm-insights" },
    { label: "The Future of FM" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[450px] flex items-end pb-16 overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: 'url(/images/fm-insights-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
        
        {/* Subtle top hover beam */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />

        <div className="container mx-auto px-6 relative z-10 w-full mb-6 text-white">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300 mb-6 mt-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> Published 20 March 2025</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-primary" /> By Peter Currey</span>
            <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs uppercase tracking-wider">Industry Trend</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 max-w-4xl">
            The Future of Facilities Management: Technology, ESG and TFM
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16">
          
          {/* Main Article Body */}
          <article className="lg:w-2/3 prose prose-lg md:prose-xl text-muted-foreground font-light leading-relaxed">
            <p className="text-2xl text-charcoal font-medium leading-snug mb-8">
              The facilities management sector is undergoing a profound transformation. What was once viewed primarily as a reactive maintenance and cleaning function has evolved into a strategic discipline encompassing IoT (Internet of Things) integration, rigorous ESG compliance, and deeply unified Total Facilities Management (TFM) strategies.
            </p>

            <h2 className="text-3xl font-light text-charcoal mt-12 mb-6 underline-accent inline-block">1. The Rise of Smart Buildings & IoT</h2>
            <p>
              Predictive maintenance is no longer a buzzword; it is a baseline expectation for Grade A commercial real estate. By deploying IoT sensors, modern FM teams are shifting from calendar-based maintenance to condition-based maintenance. 
            </p>
            <p>
              Sensor technology can now detect microscopic vibration changes in HVAC motors or monitor the exact temperature of water flow in real-time. Instead of an engineer visiting site every six months to check a bearing, the system alerts the helpdesk <em>before</em> the bearing fails. This drastically reduces downtime, lowers operational costs, and extends the lifecycle of expensive capital assets.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-xl text-charcoal font-medium">
              "Data is the new foundation of the building. Without real-time analytics, you are managing a property blindfolded."
            </blockquote>

            <h2 className="text-3xl font-light text-charcoal mt-12 mb-6 underline-accent inline-block">2. ESG: Driving the FM Agenda</h2>
            <p>
              Environmental, Social, and Governance (ESG) criteria are dominating board-level discussions, and the burden of execution falls squarely on the facilities management team. Buildings account for nearly 40% of global carbon emissions, meaning energy optimization is critical.
            </p>
            <p>
              The future of FM requires comprehensive Scope 1, 2, and 3 emissions reporting. FM providers are now expected to implement smart metering, transition fleets to EV, optimize waste pathways to achieve zero-to-landfill, and ensure the supply chain adheres to stringent ethical labor practices. Statutory compliance (such as TM44 air conditioning inspections) is merging seamlessly with these broader sustainability goals.
            </p>

            <h2 className="text-3xl font-light text-charcoal mt-12 mb-6 underline-accent inline-block">3. The Shift to Strategic TFM</h2>
            <p>
              Historically, estates managed multiple disparate contracts—one for cleaning, one for fire safety, another for mechanical maintenance. This fragmented approach leads to duplicated costs, compliance gaps, and split accountability.
            </p>
            <p>
              The market is accelerating towards Total Facilities Management (TFM). By consolidating all hard and soft services under a single provider like EntireFM, clients benefit from unified CAFM (Computer-Aided Facility Management) reporting, a single point of escalation, and significant economies of scale. In the coming years, TFM will be standard practice for portfolios of all sizes.
            </p>

            <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
              <Link href="/fm-insights" className="inline-flex items-center text-primary font-medium hover:text-charcoal transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
              </Link>
              <Button variant="outline" className="gap-2 text-muted-foreground">
                <Share2 className="w-4 h-4" /> Share Article
              </Button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-muted/30 p-8 rounded-2xl border border-border sticky top-32">
              <h3 className="text-2xl font-light text-charcoal mb-6">Related Topics</h3>
              
              <div className="space-y-6">
                {[
                  { title: "What Is Total Facilities Management (TFM)?", icon: <Building2 className="w-5 h-5 text-primary" />, link: "/fm-insights/what-is-tfm" },
                  { title: "PPM vs Reactive Maintenance Analysis", icon: <Zap className="w-5 h-5 text-primary" />, link: "/fm-insights/what-is-ppm" },
                  { title: "What Is a Compliance Calendar?", icon: <Calendar className="w-5 h-5 text-primary" />, link: "/fm-insights/what-is-a-compliance-calendar" },
                  { title: "What Is an Asset Register?", icon: <Monitor className="w-5 h-5 text-primary" />, link: "/fm-insights/what-is-an-asset-register" },
                ].map((item, i) => (
                  <Link href={item.link} key={i} className="group block">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white border border-border rounded-xl group-hover:border-primary/50 group-hover:shadow-md transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal group-hover:text-primary transition-colors leading-snug">{item.title}</h4>
                        <span className="text-sm text-muted-foreground flex items-center gap-1 mt-1 group-hover:translate-x-1 transition-transform">
                          Read more <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border text-center">
                <h4 className="font-semibold text-charcoal mb-3">Future-Proof Your Estate</h4>
                <p className="text-sm text-muted-foreground font-light mb-6">
                  Speak to EntireFM about implementing IoT-driven PPM and TFM strategies across your portfolio.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </div>
  );
}
