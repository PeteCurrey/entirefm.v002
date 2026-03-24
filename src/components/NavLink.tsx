"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "href"> {
  to: string;
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
  children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, to, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to || pathname.startsWith(to + '/');
    
    return (
      <Link
        ref={ref}
        href={to}
        className={typeof className === 'function' ? className({ isActive, isPending: false }) : className}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
