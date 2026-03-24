import EntireFMvsCBRE from "@/legacy-pages/compare/EntireFMvsCBRE";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntireFM vs CBRE | FM Provider Comparison 2025",
  description: "Compare EntireFM and CBRE facilities management. Independent UK delivery versus global property services.",
};

export default function CBREComparisonPage() {
  return <EntireFMvsCBRE />;
}
