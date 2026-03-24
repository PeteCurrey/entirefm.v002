import Nottingham from "@/legacy-pages/services/electrical/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Electrical Compliance Nottingham | PBSA & Retail EICR Testing",
  description: "BS 7671 testing, fault remediation & documentation for Nottingham's PBSA, retail & leisure estates.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
