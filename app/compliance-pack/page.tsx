import CompliancePackRequest from "@/legacy-pages/CompliancePackRequest";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Compliance Pack | EntireFM",
  description: "Request our sample compliance pack to see how EntireFM manages statutory obligations, PPM planning, and audit documentation.",
};

export default function CompliancePackPage() {
  return <CompliancePackRequest />;
}
