import Leeds from "@/legacy-pages/services/critical/lightning-protection/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Leeds | EntireFM",
  description: "BS EN 62305 lightning protection testing in Leeds. Earth resistance and continuity testing for Yorkshire commercial properties and industrial estates.",
};

export default function LeedsPage() {
  return <Leeds />;
}
