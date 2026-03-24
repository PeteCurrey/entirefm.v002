import EntireFMvsMitie from "@/legacy-pages/compare/EntireFMvsMitie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntireFM vs Mitie | Independent FM vs Enterprise FM",
  description: "Compare independent facilities management with enterprise FM. Understand the differences in accountability, responsiveness, and control between EntireFM and large-scale providers.",
};

export default function MitieComparisonPage() {
  return <EntireFMvsMitie />;
}
