import EntireFMvsCallOutOnly from "@/legacy-pages/compare/EntireFMvsCallOutOnly";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntireFM vs Call-Out-Only Providers | Planned vs Reactive Maintenance",
  description: "Compare planned maintenance with reactive-only services. Evaluate long-term costs, asset protection, and compliance management.",
};

export default function CallOutOnlyComparisonPage() {
  return <EntireFMvsCallOutOnly />;
}
