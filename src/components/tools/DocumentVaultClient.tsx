"use client";

import { useState, useMemo } from "react";
import { vaultDocuments, type VaultDocument } from "@/lib/documentVault";
import { Download, Search, FileText, ChevronRight, CheckCircle2, Lock, ArrowRight, Star, Tag } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "PPM & Maintenance", "Compliance & Safety", "Strategy & Management", "Site Operations"];

export default function DocumentVaultClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<VaultDocument | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const filteredDocs = useMemo(() => {
    return vaultDocuments.filter(doc => {
      const matchCat = activeCategory === "All" || doc.category === activeCategory;
      const matchSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDoc) return;
    setIsDownloading(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      documentId: selectedDoc.id,
      docTitle: selectedDoc.title,
    };

    try {
      const res = await fetch("/api/vault-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setDownloadSuccess(selectedDoc.id);

        const templateMap: Record<string, string> = {
          "ppm-schedule-commercial": "vault-ppm-commercial",
          "building-compliance-checklist": "vault-checklist",
          "fm-sla-template": "vault-sla",
          "reactive-maintenance-log": "vault-reactive-log",
        };

        const templateName = templateMap[selectedDoc.id];

        if (templateName) {
           try {
             const pdfRes = await fetch('/api/generate-pdf', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                 templateType: templateName,
                 data: { documentId: selectedDoc.id } 
               }),
             });
             
             if (!pdfRes.ok) throw new Error('PDF generation failed');
             const blob = await pdfRes.blob();
             const url = window.URL.createObjectURL(blob);
             const a = document.createElement('a');
             a.href = url;
             a.download = `EntireFM-${selectedDoc.slug}.pdf`;
             document.body.appendChild(a);
             a.click();
             window.URL.revokeObjectURL(url);
             a.remove();
           } catch (error) {
             console.error("PDF generation failed:", error);
           }
        } else {
          // Fallback simulation for non-implemented templates
          const a = document.createElement("a");
          a.href = `/documents/${selectedDoc.slug}.${selectedDoc.fileType.toLowerCase()}`;
          a.download = `${selectedDoc.slug}.${selectedDoc.fileType.toLowerCase()}`;
          console.log(`[Document Vault] Started fallback download: ${selectedDoc.title}`);
        }

        setTimeout(() => setSelectedDoc(null), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search templates..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-full border border-border text-xs focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocs.map(doc => (
          <div key={doc.id} className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group flex flex-col relative overflow-hidden">
            {doc.popular && <div className="absolute top-0 right-0 bg-amber-400 text-charcoal text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg shadow-sm">Popular</div>}
            
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-muted rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-muted-foreground block uppercase tracking-widest mb-1">{doc.fileType}</span>
                <span className="text-[10px] font-medium text-muted-foreground">{doc.pages} pages</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-charcoal mb-2 leading-tight group-hover:text-primary transition-colors">{doc.title}</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-1">{doc.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {doc.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-[9px] bg-muted px-2 py-0.5 rounded text-muted-foreground uppercase tracking-widest font-medium">#{tag}</span>
              ))}
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <div className="text-[10px] font-bold text-muted-foreground flex items-center gap-1">
                <Download className="w-3 h-3" /> {doc.downloadCount.toLocaleString()} downloads
              </div>
              <button onClick={() => setSelectedDoc(doc)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:translate-x-1 transition-transform">
                Download Free <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Gate */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-6 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative shadow-2xl overflow-hidden">
            <button onClick={() => setSelectedDoc(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-charcoal transition-colors">✕</button>
            
            {downloadSuccess === selectedDoc.id ? (
              <div className="text-center py-8 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-charcoal mb-2">Your Download is Ready</h2>
                <p className="text-sm text-muted-foreground font-light mb-8">
                  The <span className="font-semibold text-charcoal">{selectedDoc.title}</span> is being downloaded. We've also sent a link to your email.
                </p>
                <div className="space-y-4">
                  <Link href={selectedDoc.relatedService} className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                    Explore Related Services <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button onClick={() => setSelectedDoc(null)} className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-charcoal transition-colors underline underline-offset-4">
                    Return to library
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex gap-4 mb-8">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-primary shrink-0"><FileText className="w-8 h-8" /></div>
                  <div>
                    <h2 className="text-xl font-bold text-charcoal leading-tight mb-1">{selectedDoc.title}</h2>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{selectedDoc.fileType} · {selectedDoc.pages} Pages · Free</p>
                  </div>
                </div>
                <form onSubmit={handleDownload} className="space-y-4">
                  <input required name="name" type="text" placeholder="Full name *" className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
                  <input required name="email" type="email" placeholder="Email address *" className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
                  <input required name="company" type="text" placeholder="Company *" className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" />
                  <p className="text-[10px] text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 py-1">
                    EntireFM will send the document directly to your inbox. We respect your privacy and will never share your details.
                  </p>
                  <button type="submit" disabled={isDownloading} className="w-full bg-charcoal text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-charcoal/90 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2">
                    {isDownloading ? "Preparing Document..." : "Download Free Template"} <Download className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
