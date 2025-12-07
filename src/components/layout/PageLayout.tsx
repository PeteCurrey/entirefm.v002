import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Whether to include top padding to account for the fixed header.
   * Set to false for pages with full-screen hero sections that start at the top.
   * Defaults to true.
   */
  withHeaderPadding?: boolean;
}

/**
 * Shared page layout component that automatically handles header padding.
 * Use this wrapper for all page content to ensure consistent spacing.
 * 
 * @example
 * // Standard page with header padding
 * <PageLayout>
 *   <YourPageContent />
 * </PageLayout>
 * 
 * @example
 * // Page with full-screen hero (no header padding needed)
 * <PageLayout withHeaderPadding={false}>
 *   <FullScreenHero />
 *   <RestOfContent />
 * </PageLayout>
 */
export const PageLayout = ({ 
  children, 
  className,
  withHeaderPadding = true 
}: PageLayoutProps) => {
  return (
    <div className={cn(
      "min-h-screen",
      withHeaderPadding && "pt-20",
      className
    )}>
      {children}
    </div>
  );
};

export default PageLayout;
