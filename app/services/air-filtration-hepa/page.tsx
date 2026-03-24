import AirFiltrationHEPA from "@/legacy-pages/services/AirFiltrationHEPA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Filtration & HEPA System Compliance | ISO 14644 | Cleanroom Validation | EntireFM",
  description: "Air filtration and HEPA system compliance for cleanrooms, healthcare, and critical environments. ISO 14644 validation, filter performance testing, and IAQ improvement.",
};

export default function AirFiltrationHEPAPage() {
  return <AirFiltrationHEPA />;
}
