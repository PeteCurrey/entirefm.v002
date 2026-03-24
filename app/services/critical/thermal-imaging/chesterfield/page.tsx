import Chesterfield from "@/legacy-pages/services/critical/thermal-imaging/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Chesterfield | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Chesterfield. Electrical hotspot detection for logistics and manufacturing facilities across North Derbyshire.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
