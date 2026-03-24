import WaterHygiene from "@/legacy-pages/services/WaterHygiene";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Compliance UK | ACOP L8 | EntireFM",
  description: "ACOP L8 and HSG274 compliant water hygiene services. Legionella risk assessments, temperature monitoring, UKAS sampling and rapid remedials across UK estates.",
};

export default function WaterHygienePage() {
  return <WaterHygiene />;
}
