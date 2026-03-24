import Lincoln from "@/legacy-pages/services/critical/lightning-protection/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Lincoln | EntireFM",
  description: "BS EN 62305 lightning protection testing in Lincoln. Earth resistance and continuity checks for Lincolnshire commercial properties.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
