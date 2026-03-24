import Technology from "@/legacy-pages/Technology";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Technology & CAFM Portal | EntireFM",
  description: "Complete CAFM platform providing real-time visibility of assets, compliance, and FM operations with zero complexity.",
};

export default function TechnologyPage() {
  return <Technology />;
}
