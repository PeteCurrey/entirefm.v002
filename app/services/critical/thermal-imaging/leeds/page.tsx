import Leeds from "@/legacy-pages/services/critical/thermal-imaging/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Leeds | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Leeds. Electrical hotspot detection for financial services and commercial facilities across West Yorkshire.",
};

export default function LeedsPage() {
  return <Leeds />;
}
