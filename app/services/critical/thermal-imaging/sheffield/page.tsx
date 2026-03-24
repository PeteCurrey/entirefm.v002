import Sheffield from "@/legacy-pages/services/critical/thermal-imaging/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Sheffield | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Sheffield. Electrical hotspot detection for steel, manufacturing and commercial facilities across South Yorkshire.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
