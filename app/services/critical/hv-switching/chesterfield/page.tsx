import Chesterfield from "@/legacy-pages/services/critical/hv-switching/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Chesterfield | EntireFM",
  description: "HV switching for Chesterfield logistics parks and distribution centres. Planned isolations and emergency high-voltage response for M1 corridor operations.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
