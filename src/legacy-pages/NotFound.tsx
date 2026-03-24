"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
    
    // Log 404 error to backend for tracking
    const log404Error = async () => {
      try {
        await supabase.from('error_404_logs').insert({
          url_requested: pathname,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
        });
      } catch (error) {
        console.error('Failed to log 404 error:', error);
      }
    };

    log404Error();
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
