import Residential from "@/legacy-pages/sectors/Residential";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Block Management FM | Compliance & Safety",
  description: "FM for residential blocks and apartments. Fire safety, electrical, and water compliance for property managers.",
};

export default function ResidentialPage() {
  return <Residential />;
}
