import EntireFMvsInHouse from "@/legacy-pages/compare/EntireFMvsInHouse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EntireFM vs In-House FM | Outsource or Build Internal Team?",
  description: "Compare outsourced FM with building an in-house team. Evaluate cost structures, risk transfer, and access to specialist capabilities.",
};

export default function InHouseComparisonPage() {
  return <EntireFMvsInHouse />;
}
