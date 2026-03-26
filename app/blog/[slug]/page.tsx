import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/lib/blogPosts";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) return {};
  
  return {
    title: `${post.title} | EntireFM Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.entirefm.com/blog/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title },
  ];

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "EntireFM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.entirefm.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.entirefm.com/blog/${resolvedParams.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      <article className="pt-24 pb-24">
        {/* Header */}
        <header className="container mx-auto px-6 max-w-4xl mb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <Breadcrumb items={breadcrumbItems} className="mb-6" />
          
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-medium">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-charcoal leading-tight tracking-tight">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed text-charcoal/80 italic border-l-4 border-primary pl-6">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div className="container mx-auto px-6 max-w-4xl pt-8 border-t border-border">
          <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-charcoal prose-h2:mt-16 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:font-light prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-li:text-muted-foreground prose-li:font-light prose-strong:text-charcoal prose-strong:font-bold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center font-bold">
                {post.author?.charAt(0) || "E"}
              </div>
              <div>
                <div className="font-bold text-charcoal">Written by {post.author}</div>
                <div className="text-sm text-muted-foreground font-light">Facilities Management Expert</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2 text-muted-foreground hover:text-primary border-border">
                <Share2 className="w-4 h-4" /> Share Insight
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Recommended Insight CTA */}
      <section className="py-24 bg-charcoal text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-white tracking-tight">
            Discover More FM Insights
          </h2>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 uppercase tracking-widest font-bold shadow-xl shadow-primary/20" asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
