import Lincoln from "@/legacy-pages/services/electrical/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Compliance Lincoln | Heritage & Healthcare EICR Testing",
  description: "Audit-ready electrical governance for Lincoln's healthcare & heritage environments. Conservation-sensitive BS 7671 compliance testing.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
