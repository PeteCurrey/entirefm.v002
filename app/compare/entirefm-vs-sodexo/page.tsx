import EntireFMvsSodexo from "@/legacy-pages/compare/EntireFMvsSodexo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntireFM vs Sodexo | FM Provider Comparison 2025",
  description: "Compare EntireFM and Sodexo facilities management. Specialist hard FM versus integrated services.",
};

export default function SodexoComparisonPage() {
  return <EntireFMvsSodexo />;
}
