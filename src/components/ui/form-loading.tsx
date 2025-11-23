import { cn } from "@/lib/utils";

interface FormLoadingOverlayProps {
  isLoading?: boolean;
  message?: string;
  className?: string;
}

export const FormLoadingOverlay = ({ 
  isLoading = false, 
  message = "Submitting...",
  className 
}: FormLoadingOverlayProps) => {
  if (!isLoading) return null;

  return (
    <div
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in",
        className
      )}
    >
      <div className="flex flex-col items-center gap-3 animate-scale-in">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" />
        <p className="text-sm font-medium text-foreground">{message}</p>
      </div>
    </div>
  );
};

interface InputLoadingProps {
  className?: string;
}

export const InputLoading = ({ className }: InputLoadingProps) => {
  return (
    <div className={cn("absolute right-3 top-1/2 -translate-y-1/2", className)}>
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground border-r-transparent" />
    </div>
  );
};
