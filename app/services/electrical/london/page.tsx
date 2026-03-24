import London from "@/legacy-pages/services/electrical/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Compliance London | EICR Testing & BS 7671 Certification",
  description: "EICR testing, fault remediation and certification that protects operations, assets and legal responsibility across London.",
};

export default function LondonPage() {
  return <London />;
}
