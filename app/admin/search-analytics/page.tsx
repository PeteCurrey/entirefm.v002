import SearchAnalyticsDashboard from "@/legacy-pages/SearchAnalyticsDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Analytics Dashboard | EntireFM Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SearchAnalyticsPage() {
  return <SearchAnalyticsDashboard />;
}
