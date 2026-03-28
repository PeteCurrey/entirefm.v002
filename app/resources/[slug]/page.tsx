import React from "react";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getResourceBySlug, resources } from "@/lib/resources";
import { ResourceArticleLayout } from "@/components/resources/ResourceArticleLayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as LucideIcons from "lucide-react";

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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </ResourceArticleLayout>
    </>
  );
}
