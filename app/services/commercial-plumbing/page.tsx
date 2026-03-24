import CommercialPlumbing from "@/legacy-pages/services/CommercialPlumbing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Plumbing Services | Pipework & Water Systems | EntireFM",
  description: "Commercial plumbing services for offices, industrial, and commercial buildings. Pipework, pumps, hot water systems, drainage, and water hygiene compliance.",
};

export default function CommercialPlumbingPage() {
  return <CommercialPlumbing />;
}
