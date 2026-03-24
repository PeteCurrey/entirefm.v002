import Manchester from "@/legacy-pages/services/critical/thermal-imaging/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Manchester | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Manchester. Electrical hotspot detection for data centres, media facilities and commercial buildings across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
