import LinkHealthDashboard from "@/legacy-pages/LinkHealthDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Link Health Dashboard | SEO Governance | EntireFM",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinkHealthPage() {
  return <LinkHealthDashboard />;
}
