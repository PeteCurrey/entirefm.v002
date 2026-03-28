import AnalyticsDashboard from "@/legacy-pages/admin/AnalyticsDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics & Traffic | EntireFM Admin",
};

export default function AnalyticsPage() {
  return <AnalyticsDashboard />;
}
