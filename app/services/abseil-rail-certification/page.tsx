import AbseilRailCertification from "@/legacy-pages/services/AbseilRailCertification";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abseil Rail Certification | Façade Access System Inspection",
  description: "Inspection and certification of abseil tracks and anchors used for façade access. Expert rope access system compliance testing.",
};

export default function AbseilRailCertificationPage() {
  return <AbseilRailCertification />;
}
