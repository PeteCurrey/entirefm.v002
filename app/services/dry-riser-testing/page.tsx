import DryRiserTesting from "@/legacy-pages/services/DryRiserTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry Riser Testing & Certification | BS 9990 Compliance | EntireFM",
  description: "Professional dry riser testing and certification to BS 9990 for high-rise firefighting systems. Annual pressure testing, inspection, and compliance management.",
};

export default function DryRiserTestingPage() {
  return <DryRiserTesting />;
}
