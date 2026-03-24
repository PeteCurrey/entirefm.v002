import Lincoln from "@/legacy-pages/services/critical/thermal-imaging/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Lincoln | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Lincoln. Electrical hotspot detection for agriculture, food processing and commercial facilities across Lincolnshire.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
