import { getResourceBySlug } from "@/lib/resources";
import { notFound, redirect } from "next/navigation";

interface FMInsightRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function FMInsightRedirect({ params }: FMInsightRedirectProps) {
  const resolvedParams = await params;
  
  // We check if it exists in the new resources list
  const post = getResourceBySlug(resolvedParams.slug);
  
  // Even if it's not found exactly, we redirect to the common /resources/[slug] 
  // and let that page handle the notFound() if necessary.
  // This ensures that any path under /fm-insights/ maps to /resources/
  
  redirect(`/resources/${resolvedParams.slug}`);
}
