import PBSAHub from "@/legacy-pages/sectors/PBSAHub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PBSA & Student Accommodation FM | Compliance Hub",
  description: "Specialist FM for Purpose Built Student Accommodation. Compliance, safety, and student experience protection.",
};

export default function PBSAHubPage() {
  return <PBSAHub />;
}
