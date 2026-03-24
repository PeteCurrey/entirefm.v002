import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRelatedPages } from "@/data/siloArchitecture";

interface RelatedServicesProps {
  currentUrl: string;
  title?: string;
  variant?: "compact" | "full";
}

/**
 * Silo-aware "You May Also Need" component
 * Enforces strict internal linking rules to prevent keyword cannibalization
 */
export const RelatedServices = ({ 
  currentUrl, 
  title = "You May Also Need",
  variant = "full"
}: RelatedServicesProps) => {
  const relatedPages = getRelatedPages(currentUrl, 3);

  if (relatedPages.length === 0) return null;

  if (variant === "compact") {
    return (
      <div className="border-t pt-8 mt-12">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {relatedPages.map((page) => (
            <Button key={page.url} asChild variant="outline" size="sm">
              <Link href={page.url}>
                {page.title}
                <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light mb-8 text-center">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPages.map((page) => (
            <Card key={page.url} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{page.title}</h3>
              <div className="mb-4">
                <div className="text-sm text-muted-foreground mb-2">
                  Primary Focus:
                </div>
                <div className="flex flex-wrap gap-1">
                  {page.primaryKeywords.slice(0, 2).map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild variant="outline" className="w-full group">
                <Link href={page.url}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
