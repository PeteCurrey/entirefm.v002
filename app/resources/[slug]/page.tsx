import React from "react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getResourceBySlug, resources } from "@/lib/resources";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as LucideIcons from "lucide-react";
import { LegislationBox } from "@/components/resources/LegislationBox";
import { StatCallout } from "@/components/resources/StatCallout";
import { ArticleImage } from "@/components/resources/ArticleImage";
import { InfoCallout } from "@/components/resources/InfoCallout";
import { ProcessSteps } from "@/components/resources/ProcessSteps";
import { ComplianceTable } from "@/components/resources/ComplianceTable";
import { SuccessBox } from "@/components/resources/SuccessBox";
import { WarningBox } from "@/components/resources/WarningBox";
import { FreqBadge } from "@/components/resources/FreqBadge";
import { Scale, Info, AlertTriangle, CheckCircle, Flame, Droplet, Zap, ShieldAlert, BarChart3, TrendingUp, PieChart } from "lucide-react";

interface ResourcePostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ResourcePostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getResourceBySlug(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | EntireFM Resources`,
    description: post.description,
    alternates: {
      canonical: `https://www.entirefm.com/resources/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return resources.map((post) => ({
    slug: post.slug,
  }));
}

// Helper to map icon string to Lucide component
function getIconComponent(iconName: string) {
  const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
  return <Icon className="w-4 h-4" />;
}

export default async function ResourcePost({ params }: ResourcePostProps) {
  const resolvedParams = await params;
  const post = getResourceBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Handle Redirects for Overlapping Slugs
  if (post.content.startsWith("REDIRECT:")) {
    const target = post.content.replace("REDIRECT:", "").trim();
    redirect(target);
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.entirefm.com/" },
      { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://www.entirefm.com/resources" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.entirefm.com/resources/${resolvedParams.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": new Date(post.date).toISOString(),
    "author": { "@type": "Organization", "name": "EntireFM" },
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM",
      "logo": { "@type": "ImageObject", "url": "https://www.entirefm.com/logo.png" }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.entirefm.com/resources/${resolvedParams.slug}`
    }
  };

  const mappedTools = post.relatedTools.map(tool => ({
    ...tool,
    icon: getIconComponent(tool.icon)
  }));

  // Text extraction helper to handle nested markdown structures
  const getText = (node: any): string => {
    if (!node) return "";
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getText).join("");
    if (node.props && node.props.children) return getText(node.props.children);
    return "";
  };

  // Custom Markdown Component Mapper
  const MarkdownComponents: any = {
    // Blocks: Rendered via blockquotes with [!TYPE] marker
    blockquote: ({ children }: any) => {
      const text = getText(children);
      if (!text) return <blockquote>{children}</blockquote>;
      
      const trimmedText = text.trim();

      if (trimmedText.startsWith("[!LEGISLATION]")) {
         const parts = trimmedText.replace("[!LEGISLATION]", "").split("|");
         return <LegislationBox legislation={parts[0]?.trim() || "Statutory Requirement"} summary={parts[1]?.trim() || ""} />;
      }
      if (trimmedText.startsWith("[!STAT]")) {
         const lines = trimmedText.replace("[!STAT]", "").split("\n").filter(l => l.trim());
         const stats = lines.map(l => {
            const [value, label] = l.split("|");
            return { value: value?.trim(), label: label?.trim() };
         });
         return <StatCallout stats={stats} />;
      }
      if (trimmedText.startsWith("[!INFO]")) {
         const parts = trimmedText.replace("[!INFO]", "").split("|");
         return <InfoCallout heading={parts[0]?.trim() || "Insight"} body={parts[1]?.trim() || ""} />;
      }
      if (trimmedText.startsWith("[!WARNING]")) {
         const parts = trimmedText.replace("[!WARNING]", "").split("|");
         return <WarningBox title={parts[0]?.trim() || "Warning"} body={parts[1]?.trim() || ""} />;
      }
      if (trimmedText.startsWith("[!SUCCESS]")) {
         const parts = trimmedText.replace("[!SUCCESS]", "").split("|");
         return <SuccessBox title={parts[0]?.trim() || "Outcome"} body={parts[1]?.trim() || ""} />;
      }
      if (trimmedText.startsWith("[!PROCESS]")) {
        const lines = trimmedText.replace("[!PROCESS]", "").split("\n").filter(l => l.trim());
        const steps = lines.map(line => {
          const [title, body] = line.split("|");
          return { title: title?.trim(), body: body?.trim() };
        });
        return <ProcessSteps steps={steps} />;
      }
      
      return <blockquote className="border-l-4 border-primary/20 pl-6 italic my-8 text-charcoal/80 font-light text-xl leading-relaxed">{children}</blockquote>;
    },
    // Tables: Compliance style
    table: ({ children }: any) => {
      const thead = children?.find((c: any) => c.type === 'thead');
      const tbody = children?.find((c: any) => c.type === 'tbody');
      
      const headerRow = thead?.props.children[0] || thead?.props.children;
      const headers = (Array.isArray(headerRow?.props?.children) ? headerRow.props.children : [headerRow?.props?.children]).map((c: any) => getText(c)) || [];

      const rows = (Array.isArray(tbody?.props?.children) ? tbody.props.children : [tbody?.props?.children]).map((row: any) => {
        if (!row?.props?.children) return [];
        return (Array.isArray(row.props.children) ? row.props.children : [row.props.children]).map((cell: any) => {
          const content = getText(cell);
          if (content === "Statutory") return "Statutory";
          const frequencies = ["Monthly", "Quarterly", "Annual", "Weekly", "Every 2 years"];
          if (frequencies.includes(content)) {
             return <FreqBadge key={content} frequency={content as any} />;
          }
          return cell.props.children;
        });
      }) || [];
      return <ComplianceTable headers={headers} rows={rows} />;
    },
    // Headings
    h2: ({ children }: any) => <h2 className="text-[22px] font-bold text-[#1a2e4a] border-l-[3px] border-[#f5a623] pl-4 mt-12 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-[18px] font-semibold text-[#1a2e4a] mt-8 mb-3">{children}</h3>,
    p: ({ children }: any) => <p className="text-[17px] text-[#333333] font-normal leading-[1.8] mb-6">{children}</p>,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <ResourceArticleLayout
        title={post.title}
        description={post.description}
        category={post.category}
        readTime={post.readTime}
        publishedDate={post.date}
        quickFacts={post.quickFacts}
        relatedTools={mappedTools}
        speakToTeamSubtext="Book a free statutory compliance audit or technical site survey with our engineering team."
      >
        <div className="prose-h2:scroll-mt-32">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </ResourceArticleLayout>
    </>
  );
}
