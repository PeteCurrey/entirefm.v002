import Search from "@/legacy-pages/Search";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search Results | EntireFM",
  description: "Search services, sectors, and resources across EntireFM.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <Search />
    </Suspense>
  );
}
