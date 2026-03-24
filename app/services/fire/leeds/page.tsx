import Leeds from "@/legacy-pages/services/fire/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Leeds | Local Testing & Statutory Compliance | EntireFM",
  description: "Professional fire alarm testing across Leeds and West Yorkshire. PBSA, retail campus and commercial compliance with BS 5839 certification.",
};

export default function LeedsPage() {
  return <Leeds />;
}
