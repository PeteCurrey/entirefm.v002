import SiteMap from "@/legacy-pages/SiteMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | EntireFM - All Pages & Services",
  description: "Complete sitemap of EntireFM facilities management services, locations, sectors, and resources. Find all pages across our comprehensive FM services platform.",
};

export default function SiteMapPage() {
  return <SiteMap />;
}
