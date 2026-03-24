import Birmingham from "@/legacy-pages/services/critical/thermal-imaging/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Birmingham | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Birmingham. Electrical hotspot detection and energy loss investigation for manufacturing and commercial facilities across the West Midlands.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
