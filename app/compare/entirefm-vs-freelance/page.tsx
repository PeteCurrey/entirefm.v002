import EntireFMvsFreelance from "@/legacy-pages/compare/EntireFMvsFreelance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntireFM vs Freelance Engineers | Managed Service or Direct Contractors?",
  description: "Compare managed FM services with freelance engineer relationships. Examine coverage, compliance burden, and continuity of service.",
};

export default function FreelanceComparisonPage() {
  return <EntireFMvsFreelance />;
}
